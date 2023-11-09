// Require the file system module
const fs = require('fs');

// Read the text file as a string
fs.readFile('spooky-frequency-formatted.txt', 'utf8', (err, data) => {
  // Handle any errors
  if (err) {
    console.error(err);
    return;
  }
  // Define the regex pattern to match the next line characters after the keywords
  const pattern = /(XTRA|PROV|BIO|VEGA|CAFL|CUST|RIFE|HC|KHZ|ALT|ODD)\s+\n+/g;
  // Replace the matched pattern with the keyword followed by a single next line character
  const newData = data.replace(pattern, '$1\n');
  // Write the modified string to a new file
  fs.writeFile('spooky-formatted-frequency-2.txt', newData, 'utf8', (err) => {
    // Handle any errors
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The file has been saved!');
  });
});
