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
      const fileStat = fs.statSync(absoluteFilePath);

      // Check if it's a hidden directory (starts with a dot)
      if (fileStat.isDirectory() && file.startsWith('.')) {
        // Skip hidden directories
        return;
      }

      if (fileStat.isDirectory()) {
        // Recursively call the function for subdirectories
        getAllRelativeFilePaths(absoluteFilePath, baseDirectory, fileList);
      } else {
        // Calculate the path relative to the base directory
        const relativePath = path.relative(baseDirectory, absoluteFilePath);
        // Ensure consistent forward slashes and prepend the leading '/'
        const formattedPath = '/' + relativePath.split(path.sep).join('/');
        // Add the formatted relative file path to the list
        fileList.push(formattedPath);
      }
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

/**
 * Get the target directory from the command line arguments.
 * If no argument is provided, default to the current directory.
 */
const targetDirectoryInput = process.argv[2] || './';
const outputFilename = 'fileList.js';

try {
  // Resolve the target directory to an absolute path for consistent relative path calculation
  const absoluteTargetDirectory = path.resolve(targetDirectoryInput);

  // Check if the resolved directory exists before proceeding
  if (!fs.existsSync(absoluteTargetDirectory) || !fs.statSync(absoluteTargetDirectory).isDirectory()) {
      throw new Error(`Target directory does not exist or is not a directory: ${absoluteTargetDirectory}`);
  }

  // Pass the absolute path as both the starting point and the base for relative paths
  const allFiles = getAllRelativeFilePaths(absoluteTargetDirectory, absoluteTargetDirectory);

  // Add the root '/' if the target directory itself should be included (optional, based on sw.js example)
  // Check if the user specifically wants the root '/' added like in the sw.js example
  const includeRoot = true; // Set to false if you *only* want files listed
  if (includeRoot && !allFiles.includes('/')) {
      // Check if the target directory is the root of the scan
      // This logic might need adjustment depending on exact needs,
      // but adding '/' is common for PWA root caching.
      // Let's add it based on the sw.js example provided.
      allFiles.unshift('/'); // Add '/' to the beginning of the array
  }


  // Format the array as a JavaScript module export
  const fileListContent = `const fileList = ${JSON.stringify(allFiles.sort(), null, 2)};\n\nmodule.exports = fileList;`;

  // Write the content to the output file
  fs.writeFileSync(outputFilename, fileListContent);

  console.log(`File list written to ${outputFilename}`);

} catch (error) {
  console.error(`Operation failed: ${error.message}`);
  // Optionally exit with an error code for scripting purposes
  process.exit(1);
}
