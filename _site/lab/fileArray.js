const fs = require('fs');
const path = require('path');

/**
 * Parses command line arguments to extract target directory, output file,
 * excluded extensions, and other flags.
 *
 * @param {string[]} argv - The process.argv array.
 * @returns {{
 *  targetDirectory: string|null,
 *  outputFilename: string|null,
 *  excludedExtensions: string[],
 *  excludeNoExt: boolean,
 *  excludeRoot: boolean
 * }}
 */
function parseArgs(argv) {
    const args = argv.slice(2); // Remove 'node' and script path
    let targetDirectory = null;
    let outputFilename = null;
    let excludedExtensions = [];
    let excludeNoExt = false; // Flag for excluding files with no extension
    let excludeRoot = false;  // Flag for excluding the root '/'
    const positionalArgs = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (arg === '--exclude' || arg === '-e') {
            if (i + 1 < args.length && !args[i + 1].startsWith('--')) { // Ensure value exists and is not another flag
                excludedExtensions = args[i + 1]
                    .split(',')
                    .map(ext => ext.trim().toLowerCase())
                    .filter(ext => ext.startsWith('.'));
                i++; // Skip the value
            } else {
                console.warn("Warning: --exclude flag requires a value (comma-separated extensions).");
            }
        } else if (arg === '--exclude-no-ext') {
            excludeNoExt = true;
        } else if (arg === '--exclude-root') {
            excludeRoot = true;
        } else {
            // Assume other arguments are positional
            positionalArgs.push(arg);
        }
    }

    targetDirectory = positionalArgs[0] || null;
    outputFilename = positionalArgs[1] || null;

    return { targetDirectory, outputFilename, excludedExtensions, excludeNoExt, excludeRoot };
}


/**
 * Recursively retrieves all file paths within a specified directory,
 * applying various exclusion rules.
 *
 * @param {string} currentDirectory - The directory currently being scanned.
 * @param {string} baseDirectory - The original root directory provided by the user.
 * @param {string[]} excludedExtensions - Array of lowercase extensions to exclude.
 * @param {boolean} excludeNoExt - Whether to exclude files with no extension.
 * @param {string} absoluteOutputFilePath - The absolute path of the file being written to.
 * @param {string[]} [fileList=[]] - An array to accumulate the file paths.
 * @returns {string[]} An array of relative file paths starting with '/'.
 * @throws {Error} If the provided directory path is invalid or inaccessible.
 */
function getAllRelativeFilePaths(currentDirectory, baseDirectory, excludedExtensions, excludeNoExt, absoluteOutputFilePath, fileList = []) {
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
        getAllRelativeFilePaths(absoluteFilePath, baseDirectory, excludedExtensions, excludeNoExt, absoluteOutputFilePath, fileList);
      } else if (fileStat.isFile()) {
        const fileExtension = path.extname(absoluteFilePath).toLowerCase();

        // Check if the file extension is in the exclusion list
        if (excludedExtensions.includes(fileExtension)) {
            return; // Skip this file
        }

        // Check if we should exclude files with no extension
        if (excludeNoExt && fileExtension === '') {
            // console.log(`Excluding file with no extension: ${absoluteFilePath}`); // Optional debug log
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
    excludedExtensions,
    excludeNoExt, // Get the new flag
    excludeRoot   // Get the new flag
} = parseArgs(process.argv);

// --- Input Validation ---
if (!targetDirectoryInput) {
    console.error("Error: Please provide the target directory to scan as the first argument.");
    console.log("\nUsage: node fileArray.js <target_directory> [output_file_path] [options]");
    console.log("\nOptions:");
    console.log("  --exclude .ext1,.ext2,...  Exclude specific file extensions.");
    console.log("  -e .ext1,.ext2,...         Alias for --exclude.");
    console.log("  --exclude-no-ext         Exclude files that have no extension.");
    console.log("  --exclude-root           Exclude the root '/' entry from the list.");
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
  if (!fs.existsSync(absoluteTargetDirectory) || !fs.statSync(absoluteTargetDirectory).isDirectory()) {
      throw new Error(`Target directory does not exist or is not a directory: ${absoluteTargetDirectory}`);
  }

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
  if (excludeNoExt) {
      console.log("Excluding files with no extension.");
  }
  if (excludeRoot) {
      console.log("Excluding root '/' entry.");
  }
  console.log(`Writing output to: ${absoluteOutputFilePath}`);

  // Get the file list, passing the necessary parameters
  const allFiles = getAllRelativeFilePaths(
      absoluteTargetDirectory,
      absoluteTargetDirectory,
      excludedExtensions,
      excludeNoExt, // Pass the flag
      absoluteOutputFilePath,
      []
  );

  // Add the root '/' if needed AND if not explicitly excluded
  const includeRootDefault = true; // Default behavior is often to include root for PWAs etc.
  if (includeRootDefault && !excludeRoot && !allFiles.includes('/')) {
      allFiles.unshift('/');
  }

  // Format and write the output file
  const fileListContent = `const fileList = ${JSON.stringify(allFiles.sort(), null, 2)};`; // ;\n\nmodule.exports = fileList
  fs.writeFileSync(absoluteOutputFilePath, fileListContent);

  console.log(`File list successfully written to ${absoluteOutputFilePath}`);

} catch (error) {
  console.error(`Operation failed: ${error.message}`);
  process.exit(1);
}

/*
Usage:

 node fileArray.js ../ ../fileList.js  -e .xml,.md,.toml --exclude-no-ext --exclude-root
*/