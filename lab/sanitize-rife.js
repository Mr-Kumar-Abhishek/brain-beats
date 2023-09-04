/* 
// Load the fs module to read and write files
const fs = require('fs');

// Read the json file and parse it into an object
const data = JSON.parse(fs.readFileSync('../json/rife3Dfreq.json', 'utf8'));

// Loop through each element in the data array
for (let element of data) {
  // Get the data name and data description
  let name = element.data_name;
  let description = element.data_description;

  // Check if the name contains a bracket text
  let bracketIndex = name.indexOf('(');
  if (bracketIndex !== -1) {
    // Get the bracket text from the name
    let bracketText = name.substring(bracketIndex);

    // Check if the description contains the same bracket text
    let descriptionIndex = description.indexOf(bracketText);
    if (descriptionIndex !== -1) {
      // Remove the bracket text from the description
      description = description.replace(bracketText, '');

      // Trim any extra spaces or punctuation from the description
      description = description.trim();
      if (description.endsWith('.')) {
        description = description.slice(0, -1);
      }

      // Update the element with the modified description
      element.data_description = description;
    }
  }
}

// Write the modified data back to the json file
fs.writeFileSync('../json/rife3Dfreq.json', JSON.stringify(data, null, 2), 'utf8');

// Print a message to indicate success
console.log('The json file has been updated successfully.');
*/

// Load the fs module to read and write files
const fs = require('fs');

// Define a function to remove the repeating bracket text from a string
function removeRepeatingBracketText(str) {
  // Find the first occurrence of an opening bracket
  let start = str.indexOf('(');
  // If there is no opening bracket, return the original string
  if (start === -1) {
    return str;
  }
  // Find the corresponding closing bracket
  let end = str.indexOf(')', start);
  // If there is no closing bracket, return the original string
  if (end === -1) {
    return str;
  }
  // Extract the text inside the brackets
  let bracketText = str.substring(start + 1, end);
  // Find the next occurrence of the same bracket text
  let next = str.indexOf(bracketText, end + 1);
  // If there is no next occurrence, return the original string
  if (next === -1) {
    return str;
  }
  // Remove the next occurrence of the bracket text and the surrounding brackets
  let newStr = str.substring(0, next - 1) + str.substring(next + bracketText.length + 1);
  // Recursively remove any other repeating bracket text from the new string
  return removeRepeatingBracketText(newStr);
}

// Read the json file
fs.readFile('rife-monaural-freq.json', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Parse the json data into an array of objects
  let dataArray = JSON.parse(data);
  // Loop through each object in the array
  for (let obj of dataArray) {
    // Remove the repeating bracket text from the data description
    obj.data_description = removeRepeatingBracketText(obj.data_description);
  }
  // Stringify the modified array into json format
  let newData = JSON.stringify(dataArray, null, 2);
  // Write the new json data to a new file
  fs.writeFile('3dRife_sanitized.json', newData, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The new json file has been created.');
  });
});
