const fs = require('fs');
const path = require('path');

/**
 * Recursively retrieves all file paths within a specified directory,
 * formatted relative to the base directory and starting with '/',
 * excluding hidden directories.
 *
 * @param {string} currentDirectory - The directory currently being scanned.
 * @param {string} baseDirectory - The original root directory provided by the user.
 * @param {string[]} [fileList=[]] - An array to accumulate the file paths (used internally for recursion).
 * @returns {string[]} An array of relative file paths starting with '/'.
 * @throws {Error} If the provided directory path is invalid or inaccessible.
 */
function getAllRelativeFilePaths(currentDirectory, baseDirectory, fileList = []) {
  try {
    const files = fs.readdirSync(currentDirectory);

    files.forEach((file) => {
      const absoluteFilePath = path.join(currentDirectory, file);
      let fileStat; // Declare fileStat here

      try {
        // Use lstat to handle symbolic links gracefully if needed,
        // but statSync is fine for basic file/dir checks.
        fileStat = fs.statSync(absoluteFilePath);
      } catch (statError) {
        // Handle potential errors during stat (e.g., broken symlinks, permissions)
        console.warn(`Warning: Could not stat file/directory: ${absoluteFilePath}. Skipping. Error: ${statError.message}`);
        return; // Skip this entry if stat fails
      }


      // Check if it's a hidden directory or file (starts with a dot)
      // Let's also exclude the output file itself if it's being written in the scanned directory
      const isHidden = file.startsWith('.');
      // Resolve the potential output path to compare it accurately
      const absoluteOutputFilePath = path.resolve(outputFilename); // Use the global outputFilename

      if (isHidden || absoluteFilePath === absoluteOutputFilePath) {
        // Skip hidden files/directories and the output file itself
        return;
      }

      if (fileStat.isDirectory()) {
        // Recursively call the function for subdirectories
        getAllRelativeFilePaths(absoluteFilePath, baseDirectory, fileList);
      } else if (fileStat.isFile()) { // Explicitly check if it's a file
        // Calculate the path relative to the base directory
        const relativePath = path.relative(baseDirectory, absoluteFilePath);
        // Ensure consistent forward slashes and prepend the leading '/'
        const formattedPath = '/' + relativePath.split(path.sep).join('/');
        // Add the formatted relative file path to the list
        fileList.push(formattedPath);
      }
      // Ignore other types like symbolic links, sockets, etc. if not explicitly handled
    });

    return fileList;
  } catch (error) {
    // Provide more context in the error message
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

// Argument 1: Target directory to scan
const targetDirectoryInput = process.argv[2];
// Argument 2: Output file path
const outputFilenameInput = process.argv[3];

// --- Input Validation ---
if (!targetDirectoryInput) {
    console.error("Error: Please provide the target directory to scan as the first argument.");
    console.log("Usage: node fileArray.js <target_directory> [output_file_path]");
    process.exit(1);
}

// Use provided output filename or default to 'fileList.js' in the current working directory
const outputFilename = outputFilenameInput || 'fileList.js';
// Resolve the output path to ensure it's absolute for writing
const absoluteOutputFilePath = path.resolve(outputFilename);
// Ensure the directory for the output file exists
const outputDir = path.dirname(absoluteOutputFilePath);


try {
  // Resolve the target directory to an absolute path
  const absoluteTargetDirectory = path.resolve(targetDirectoryInput);

  // Check if the target directory exists
  if (!fs.existsSync(absoluteTargetDirectory) || !fs.statSync(absoluteTargetDirectory).isDirectory()) {
      throw new Error(`Target directory does not exist or is not a directory: ${absoluteTargetDirectory}`);
  }

  // Ensure the output directory exists, create if necessary
  if (!fs.existsSync(outputDir)) {
      console.log(`Output directory ${outputDir} does not exist. Creating...`);
      try {
          fs.mkdirSync(outputDir, { recursive: true }); // Create parent directories if needed
          console.log(`Successfully created directory: ${outputDir}`);
      } catch (mkdirError) {
          throw new Error(`Failed to create output directory ${outputDir}: ${mkdirError.message}`);
      }
  } else if (!fs.statSync(outputDir).isDirectory()) {
      // Check if the path exists but is not a directory
       throw new Error(`Output path ${outputDir} exists but is not a directory.`);
  }


  console.log(`Scanning directory: ${absoluteTargetDirectory}`);
  console.log(`Writing output to: ${absoluteOutputFilePath}`);


  // Pass the absolute path as both the starting point and the base for relative paths
  // Pass the resolved output path to the function so it can be excluded
  const allFiles = getAllRelativeFilePaths(absoluteTargetDirectory, absoluteTargetDirectory, []); // Start with empty array

  // Add the root '/' if needed (common for PWA service workers)
  const includeRoot = true; // Set to false if you *only* want files listed
  if (includeRoot && !allFiles.includes('/')) {
      allFiles.unshift('/'); // Add '/' to the beginning
  }

  // Format the array as a JavaScript module export
  const fileListContent = `const fileList = ${JSON.stringify(allFiles.sort(), null, 2)};\n\nmodule.exports = fileList;`;

  // Write the content to the resolved output file path
  fs.writeFileSync(absoluteOutputFilePath, fileListContent);

  console.log(`File list successfully written to ${absoluteOutputFilePath}`);

} catch (error) {
  console.error(`Operation failed: ${error.message}`);
  process.exit(1);
}
