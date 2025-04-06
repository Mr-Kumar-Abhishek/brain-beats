const fs = require('fs');
const path = require('path');

/**
 * Recursively retrieves all file paths within a specified directory, excluding hidden directories.
 *
 * @param {string} directory - The path to the directory to scan.
 * @param {string[]} [fileList=[]] - An array to accumulate the file paths (used internally for recursion).
 * @returns {string[]} An array of file paths.
 * @throws {Error} If the provided directory path is invalid or inaccessible.
 */
function getAllFilePaths(directory, fileList = []) {
  try {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const fileStat = fs.statSync(filePath);

      // Check if it's a hidden directory (starts with a dot)
      if (fileStat.isDirectory() && file.startsWith('.')) {
        // Skip hidden directories
        return;
      }

      if (fileStat.isDirectory()) {
        // Recursively call the function for subdirectories
        getAllFilePaths(filePath, fileList);
      } else {
        // Add the file path to the list
        fileList.push(filePath);
      }
    });

    return fileList;
  } catch (error) {
    throw new Error(`Error reading directory: ${directory}. ${error.message}`);
  }
}

/**
 * Get the target directory from the command line arguments.
 * If no argument is provided, default to the current directory.
 */
const targetDirectory = process.argv[2] || './';

try {
  const allFiles = getAllFilePaths(targetDirectory);
  console.log(allFiles);
} catch (error) {
  console.error(error.message);
}
