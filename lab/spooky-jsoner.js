// Import the file system module
const fs = require('fs');

// Define a function to generate a random alphanumeric string of length 8
function generateId() {
  let id = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Define a function to convert a line of text to a json object
function convertLine(line) {
  // Split the line by quotation mark
  let parts = line.split('"');
  // Get the name and type from the first part
  let nameAndType = parts[0].split(',');
  // console.log(nameAndType);
  let name = nameAndType.slice(0, -1).join(','); // Join the name parts with comma
  // let type = nameAndType[nameAndType.length - 1];
  let type = parts[2].slice(1, -2);
  // console.log(type);
  // Get the frequencies from the second part
  let frequencies = parts[1].split(',').filter(x => x); // Remove any empty strings
  console.log(frequencies);
  // Construct the json object
  let json = {};
  json.data_name = name + ' ' + type + ' 3D frequencies';
  json.data_description = 'This is ' + type + ' 3D frequencies healing preset for ' + name + '. The frequencies in this preset are: ' + frequencies.join(' hz, ') + ' hz';
  json.data_start = 'play_' + type + '_3d_auto([' + frequencies.join(', ') + ']);'; // Remove the trailing comma
  json.data_stop = 'stop_' + type + '_3d();';
  json.data_id = generateId();
  return json;
}

// Define a function to convert a text file to a json file
function convertFile(inputFile, outputFile) {
  // Read the input file
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    // Split the data by newline
    let lines = data.split('\n').filter(x => x); // Remove any empty lines
    // Convert each line to a json object and store them in an array
    let jsonArray = [];
    for (let line of lines) {
      let json = convertLine(line);
      jsonArray.push(json);
    }
    // Write the array to the output file as a json string
    fs.writeFile(outputFile, JSON.stringify(jsonArray, null, 2), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Conversion successful!');
    });
  });
}

// Call the function with the input and output file names
convertFile('spooky-alt-frequency.txt', 'alt-freq.json');
