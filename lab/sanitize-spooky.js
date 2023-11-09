// Load the fs module to read and write files
const fs = require('fs');

// Define the input and output file names
const inputFile = 'spooky-frequency.txt';
const outputFile = 'spooky-frequency-formatted.txt';

// Define the keywords that indicate a new line
const keywords = ['XTRA ', 'PROV ', 'BIO ', 'VEGA ', 'CAFL ', 'CUST ', 'RIFE  ', ' HC ', ' KHZ ', 'ALT ', 'ODD '];

// Define a regular expression to match a frequency
const frequencyRegex = /^\d+$/;

// Read the input file as a string
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Split the string by commas
  let tokens = data.split(',');

  // Initialize an empty string for the output
  let output = '';

  // Initialize a flag to indicate if the previous token was a keyword
  let prevKeyword = false;

  // Loop through the tokens
  for (let token of tokens) {
    // Trim any whitespace from the token
    token = token.trim();

    // If the token is a keyword, add a new line before it
    if (keywords.includes(token)) {
      output += '\n' + token;
      // Set the flag to true
      prevKeyword = true;
    } else {
      // If the token is a frequency, add a comma after it
      if (frequencyRegex.test(token)) {
        output += token + ',';
      } else {
        // If the token is a name, check if the previous token was a keyword
        if (prevKeyword) {
          // If yes, add a new line after it
          output += '\n' + token + ',';
          // Set the flag to false
          prevKeyword = false;
        } else {
          // If no, append the name to the previous name
          output += token + ',';
        }
      }
    }
  }

  // Write the output to a new file
  fs.writeFile(outputFile, output, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('File formatted successfully!');
  });
});
