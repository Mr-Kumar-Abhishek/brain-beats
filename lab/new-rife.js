/* 
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Remove any underscores from the name and capitalize the first letter of each word
  const dataName = name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  // Add the text in brackets to the data description if it exists
  const dataDescription = `This is Rife 3D frequencies preset for ${dataName}. ${name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : ''} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
  // Split the frequencies by comma and filter out any numbers below 20 or above 22000
  const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
  // Check if the frequency array contains only one element
  if (freqArray.length === 1) {
    // Use play_pure_tone function with the single frequency as argument
    const dataStart = `play_pure_tone(${freqArray[0]});`;
    // Use stop_pure_tone function to stop playing
    const dataStop = `stop_pure_tone();`;
    // Generate a random data id
    const dataId = generateDataId();
    // Return the JSON object with the properties
    return {
      data_name: dataName,
      data_description: dataDescription,
      data_start: dataStart,
      data_stop: dataStop,
      data_id: dataId
    };
  } else {
    // Use play_rife_3d_auto function with the frequency array as argument
    const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
    // Use stop_rife_3d function to stop playing
    const dataStop = `stop_rife_3d();`;
    // Generate a random data id
    const dataId = generateDataId();
    // Return the JSON object with the properties
    return {
      data_name: dataName,
      data_description: dataDescription,
      data_start: dataStart,
      data_stop: dataStop,
      data_id: dataId
    };
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty, convert it to a JSON object and push it to the array
    if (line.trim() !== '') {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
*/
/*
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    // Add the text in brackets to the data description if it exists
    const dataDescription = `This is Rife 3D frequencies preset for ${dataName}. ${name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : ''} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
*/
/*
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) + ' Rife 3D frequencies';
    // Add the text in brackets to the data description if it exists, otherwise use an empty string
    const bracketText = name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : '';
    const dataDescription = `This is Rife 3D frequencies preset for ${dataName}. ${bracketText} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
*/
/*
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores and brackets from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\((.*?)\)/g, '').replace(/\b\w/g, c => c.toUpperCase()) + ' Rife 3D frequencies';
    // Add the text in brackets to the data description if it exists, otherwise use an empty string
    const bracketText = name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : '';
    const dataDescription = `This is Rife 3D frequencies preset for ${dataName}. ${bracketText} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
*/
/*
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores and brackets from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\((.*?)\)/g, '').replace(/\b\w/g, c => c.toUpperCase()) + ' Rife 3D frequencies';
    // Add the text in brackets to the data description if it exists, otherwise use an empty string
    const bracketText = name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : '';
    const dataDescription = `This is Rife 3D frequencies preset for ${name}. ${bracketText} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
*/
/*
// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores and brackets from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\((.*?)\)/g, '').replace(/\b\w/g, c => c.toUpperCase()) + ' Rife 3D frequencies';
    // Add the text in brackets to the data description if it exists, otherwise use an empty string
    const bracketText = name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : '';
    // Remove any underscores from the bracket text
    const bracketTextNoUnderscore = bracketText.replace(/_/g, ' ');
    const dataDescription = `This is Rife 3D frequencies preset for ${name}. ${bracketTextNoUnderscore} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});

*/

// Load the fs module to read and write files
const fs = require('fs');

// Define a function to generate a random data id
function generateDataId() {
  // Use the characters in this string
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  // Initialize an empty string
  let dataId = '';
  // Loop for 8 times
  for (let i = 0; i < 8; i++) {
    // Pick a random character from the string and append it to the data id
    dataId += chars[Math.floor(Math.random() * chars.length)];
  }
  // Return the data id
  return dataId;
}

// Define a function to convert a line of text into a JSON object
function convertLineToJson(line) {
  // Split the line by the dash symbol
  const parts = line.split(' - ');
  // Get the name and the frequencies from the parts
  const name = parts[0];
  const freqs = parts[1];
  // Check if freqs is defined
  if (freqs) {
    // Remove any underscores and brackets from the name and capitalize the first letter of each word
    const dataName = name.replace(/_/g, ' ').replace(/\((.*?)\)/g, '').replace(/\b\w/g, c => c.toUpperCase()) + ' Rife 3D frequencies';
    // Add the text in brackets to the data description if it exists, otherwise use an empty string
    const bracketText = name.match(/\((.*?)\)/) ? name.match(/\((.*?)\)/)[0] : '';
    // Remove any underscores from the bracket text and the name
    const bracketTextNoUnderscore = bracketText.replace(/_/g, ' ');
    const nameNoUnderscore = name.replace(/_/g, ' ');
    const dataDescription = `This is Rife 3D frequencies preset for ${nameNoUnderscore}. ${bracketTextNoUnderscore} The frequencies in this preset are: ${freqs.replace(/, /g, ' hz, ')} hz`;
    // Split the frequencies by comma and filter out any numbers below 20 or above 22000
    const freqArray = freqs.split(', ').filter(f => f >= 20 && f <= 22000);
    // Check if the frequency array contains only one element
    if (freqArray.length === 1) {
      // Use play_pure_tone function with the single frequency as argument
      const dataStart = `play_pure_tone(${freqArray[0]});`;
      // Use stop_pure_tone function to stop playing
      const dataStop = `stop_pure_tone();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    } else {
      // Use play_rife_3d_auto function with the frequency array as argument
      const dataStart = `play_rife_3d_auto([${freqArray.join(', ')}]);`;
      // Use stop_rife_3d function to stop playing
      const dataStop = `stop_rife_3d();`;
      // Generate a random data id
      const dataId = generateDataId();
      // Return the JSON object with the properties
      return {
        data_name: dataName,
        data_description: dataDescription,
        data_start: dataStart,
        data_stop: dataStop,
        data_id: dataId
      };
    }
  } else {
    // Return null or throw an error if freqs is undefined
    return null;
  }
}

// Define an empty array to store the JSON objects
const jsonArray = [];

// Read the rfreq.txt file asynchronously
fs.readFile('rfreq.txt', 'utf8', (err, data) => {
  // If there is an error, log it and exit
  if (err) {
    console.error(err);
    return;
  }
  // Split the data by newline and loop through each line
  const lines = data.split('\n');
  for (let line of lines) {
    // If the line is not empty and contains the dash symbol, convert it to a JSON object and push it to the array
    if (line.trim() !== '' && line.includes(' - ')) {
      const jsonObject = convertLineToJson(line);
      jsonArray.push(jsonObject);
    }
  }
  
  // Convert the array to a JSON string with indentation of two spaces
  const jsonString = JSON.stringify(jsonArray, null, 2);

  // Write the JSON string to rife3Dfreq.json file asynchronously
  fs.writeFile('rife3Dfreq.json', jsonString, 'utf8', (err) => {
    // If there is an error, log it and exit
    if (err) {
      console.error(err);
      return;
    }
    // Log a success message
    console.log('The rife3Dfreq.json file has been created successfully.');
  });
});
