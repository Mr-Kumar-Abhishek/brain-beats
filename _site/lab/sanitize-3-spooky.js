// Import the file system module
const fs = require('fs');

// Define the file name and the keywords that indicate a new line
const fileName = 'spooky-formatted-frequency-2.txt';
const keywords = ['XTRA', 'PROV', 'BIO', 'VEGA', 'CAFL', 'CUST', 'RIFE', 'HC', 'KHZ', 'ALT', 'ODD'];

// Read the file content as a string
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Split the string by new lines
  let lines = data.split('\n');

  // Initialize an empty array to store the processed lines
  let output = [];

  // Loop through each line
  for (let line of lines) {
    // Trim any whitespace from the line
    line = line.trim();

    // If the line is not empty, add it to the output array
    if (line !== '') {
      output.push(line);

      // If the line ends with one of the keywords, add a new line to the output array
      for (let keyword of keywords) {
        if (line.endsWith(keyword)) {
          output.push('\n');
          break;
        }
      }
    }
  }

  // Join the output array by new lines
  let result = output.join('\n');

  // Write the result to a new file
  fs.writeFile('spooky-formatted-frequency-3.txt', result, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });
});
