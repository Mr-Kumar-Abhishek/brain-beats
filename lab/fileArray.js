const fs = require('fs');
const path = require('path');

/**
 * Parses command line arguments to extract target directory, output file,
 * and excluded extensions.
 * Allows for flexible argument order for the --exclude flag.
 *
 * @param {string[]} argv - The process.argv array.
 * @returns {{targetDirectory: string|null, outputFilename: string|null, excludedExtensions: string[]}}
 */
function parseArgs(argv) {
    const args = argv.slice(2); // Remove 'node' and script path
    let targetDirectory = null;
    let outputFilename = null;
    let excludedExtensions = [];
    let excludeNext = false;
    const positionalArgs = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '--exclude' || arg === '-e') {
            if (i + 1 < args.length) {
                excludedExtensions = args[i + 1]
                    .split(',')
                    .map(ext => ext.trim().toLowerCase()) // Normalize to lowercase
                    .filter(ext => ext.startsWith('.')); // Ensure extensions start with '.'
                i++; // Skip the next argument as it's the value for --exclude
            } else {
                console.warn("Warning: --exclude flag requires a value (comma-separated extensions).");
            }
        } else {
            // Assume other arguments are positional (target dir, output file)
            positionalArgs.push(arg);
        }
    }

    targetDirectory = positionalArgs[0] || null;
    outputFilename = positionalArgs[1] || null; // Can still be null if only targetDir provided

    return { targetDirectory, outputFilename, excludedExtensions };
}


/**
 * Recursively retrieves all file paths within a specified directory,
 * formatted relative to the base directory and starting with '/',
 * excluding hidden directories and specified extensions.
 *
 * @param {string} currentDirectory - The directory currently being scanned.
 * @param {string} baseDirectory - The original root directory provided by the user.
 * @param {string[]} excludedExtensions - Array of lowercase extensions to exclude (e.g., ['.log', '.tmp']).
 * @param {string} absoluteOutputFilePath - The absolute path of the file being written to, to avoid including it.
 * @param {string[]} [fileList=[]] - An array to accumulate the file paths (used internally for recursion).
 * @returns {string[]} An array of relative file paths starting with '/'.
 * @throws {Error} If the provided directory path is invalid or inaccessible.
 */
function getAllRelativeFilePaths(currentDirectory, baseDirectory, excludedExtensions, absoluteOutputFilePath, fileList = []) {
  try {
    const files = fs.readdirSync(currentDirectory);

    files.forEach((file) => {
      const absoluteFilePath = path.join(currentDirectory, file);
      let fileStat;

      try {
        fileStat = fs.statSync(absoluteFilePath);
      } catch (statError) {
        console.warn(`Warning: Could not stat file/directory: ${absoluteFilePath}. Skipping. Error: ${statError.message}`);
        return;
      }

      const isHidden = file.startsWith('.');

      // Skip hidden files/directories and the output file itself
      if (isHidden || absoluteFilePath === absoluteOutputFilePath) {
        return;
      }

      if (fileStat.isDirectory()) {
        // Recursively call for subdirectories
        getAllRelativeFilePaths(absoluteFilePath, baseDirectory, excludedExtensions, absoluteOutputFilePath, fileList);
      } else if (fileStat.isFile()) {
        const fileExtension = path.extname(absoluteFilePath).toLowerCase();

        // Check if the file extension is in the exclusion list
        if (excludedExtensions.includes(fileExtension)) {
            // console.log(`Excluding file by extension: ${absoluteFilePath}`); // Optional: for debugging
            return; // Skip this file
        }

        // Calculate the path relative to the base directory
        const relativePath = path.relative(baseDirectory, absoluteFilePath);
        // Ensure consistent forward slashes and prepend the leading '/'
        const formattedPath = '/' + relativePath.split(path.sep).join('/');
        fileList.push(formattedPath);
      }
    });

    return fileList;
  } catch (error) {
    if (error.code === 'ENOENT') {
         throw new Error(`Error: Directory not found or inaccessible: ${currentDirectory}`);
    } else if (error.code === 'EACCES') {
         throw new Error(`Error: Permission denied for directory: ${currentDirectory}`);
    } else {
        throw new Error(`Error reading directory: ${currentDirectory}. ${error.message}`);
    }
  }
}

// --- Main Script Execution ---

const {
    targetDirectory: targetDirectoryInput,
    outputFilename: outputFilenameInput,
    excludedExtensions
} = parseArgs(process.argv);

// --- Input Validation ---
if (!targetDirectoryInput) {
    console.error("Error: Please provide the target directory to scan as the first argument.");
    console.log("\nUsage: node fileArray.js <target_directory> [output_file_path] [--exclude .ext1,.ext2,...]");
    console.log("  <target_directory>: The directory to scan.");
    console.log("  [output_file_path]: Optional. Path to write the list (defaults to 'fileList.js').");
    console.log("  [--exclude .ext1,.ext2,...]: Optional. Comma-separated list of file extensions to exclude (e.g., .log,.tmp).");
    process.exit(1);
}

// Use provided output filename or default
const outputFilename = outputFilenameInput || 'fileList.js';
// Resolve paths
const absoluteOutputFilePath = path.resolve(outputFilename);
const outputDir = path.dirname(absoluteOutputFilePath);
const absoluteTargetDirectory = path.resolve(targetDirectoryInput);

try {
  // --- Pre-run Checks ---
  // Check if the target directory exists
  if (!fs.existsSync(absoluteTargetDirectory) || !fs.statSync(absoluteTargetDirectory).isDirectory()) {
      throw new Error(`Target directory does not exist or is not a directory: ${absoluteTargetDirectory}`);
  }

  // Ensure the output directory exists, create if necessary
  if (!fs.existsSync(outputDir)) {
      console.log(`Output directory ${outputDir} does not exist. Creating...`);
      try {
          fs.mkdirSync(outputDir, { recursive: true });
          console.log(`Successfully created directory: ${outputDir}`);
      } catch (mkdirError) {
          throw new Error(`Failed to create output directory ${outputDir}: ${mkdirError.message}`);
      }
  } else if (!fs.statSync(outputDir).isDirectory()) {
       throw new Error(`Output path ${outputDir} exists but is not a directory.`);
  }

  // --- Processing ---
  console.log(`Scanning directory: ${absoluteTargetDirectory}`);
  if (excludedExtensions.length > 0) {
      console.log(`Excluding extensions: ${excludedExtensions.join(', ')}`);
  }
  console.log(`Writing output to: ${absoluteOutputFilePath}`);

  // Get the file list, passing the necessary parameters
  const allFiles = getAllRelativeFilePaths(
      absoluteTargetDirectory,
      absoluteTargetDirectory,
      excludedExtensions,
      absoluteOutputFilePath, // Pass the output file path to exclude it
      [] // Start with empty array
  );

  // Add the root '/' if needed
  const includeRoot = true; // Set to false if you *only* want files listed
  if (includeRoot && !allFiles.includes('/')) {
      allFiles.unshift('/');
  }

  // Format and write the output file
  const fileListContent = `const fileList = ${JSON.stringify(allFiles.sort(), null, 2)};\n\nmodule.exports = fileList;`;
  fs.writeFileSync(absoluteOutputFilePath, fileListContent);

  console.log(`File list successfully written to ${absoluteOutputFilePath}`);

} catch (error) {
  console.error(`Operation failed: ${error.message}`);
  process.exit(1);
}
