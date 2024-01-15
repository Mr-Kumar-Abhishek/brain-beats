// Import the fs module
const fs = require('node:fs');

// Define the input and output file paths
const inputFile = 'spooky-formatted-frequency-3.txt';
const outputFile = 'spooky-bio-frequency.txt';

// Define the condition to filter the lines
const condition = 'BIO \r';

// Read the input file asynchronously
fs.readFile(inputFile, 'utf8', (err, data) => {
  // Handle any errors
  if (err) {
    console.error(err);
    return;
  }
  // Split the data into an array of lines
  const lines = data.split('\n');
  // console.log(lines);
  // Filter the lines that end with the condition
  const filteredLines = lines.filter(line => line.endsWith(condition));
  console.log(filteredLines);
  // Join the filtered lines into a string
  const outputData = filteredLines.join('\n');
  // Write the output data to the output file asynchronously
  fs.writeFile(outputFile, outputData, err => {
    // Handle any errors
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('Output file written successfully');
  });
});
