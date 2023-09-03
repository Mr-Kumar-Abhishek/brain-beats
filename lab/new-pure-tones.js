/*

// A function to generate a random string of letters and numbers
function generateId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // A function to play a pure tone of a given frequency
  function playPureTone(frequency) {
    // Create an audio context
    var audioContext = new AudioContext();
    // Create an oscillator node
    var oscillator = audioContext.createOscillator();
    // Set the oscillator frequency
    oscillator.frequency.value = frequency;
    // Connect the oscillator to the destination (speakers)
    oscillator.connect(audioContext.destination);
    // Start the oscillator
    oscillator.start();
    // Return the oscillator node
    return oscillator;
  }
  
  // A function to stop a pure tone
  function stopPureTone(oscillator) {
    // Stop the oscillator
    oscillator.stop();
  }
  
  // A function to read a text file and return its contents as a string
  function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
      if(rawFile.readyState === 4) {
        if(rawFile.status === 200 || rawFile.status == 0) {
          allText = rawFile.responseText;
        }
      }
    }
    rawFile.send(null);
    return allText;
  }
  
  // A function to parse the text file contents and create a JSON array of objects
  function parseTextFile(text) {
    // Split the text by line breaks
    var lines = text.split("\n");
    // Initialize an empty array to store the objects
    var jsonArray = [];
    // Loop through each line
    for (var i = 0; i < lines.length; i++) {
      // Split the line by space
      var line = lines[i].split(" - ");
      // Get the frequency and the conditions from the line
      var frequency = line[0];
      var conditions = line[1];
      // Create an object with the required properties
      var jsonObject = {
        "data_name": frequency + " hz - Pure Tone",
        "data_description": "Pure Tone for mental relief from " + conditions,
        "data_start": "play_pure_tone(" + frequency + ");",
        "data_stop": "stop_pure_tone();",
        "data_id": generateId(8)
      };
      // Push the object to the array
      jsonArray.push(jsonObject);
    }
    // Return the array
    return jsonArray;
  }
  
  // A function to write a JSON array to a file
  function writeJsonFile(jsonArray, file) {
    // Convert the array to a JSON string
    var jsonString = JSON.stringify(jsonArray, null, "\t");
    // Create a blob object with the JSON string
    var blob = new Blob([jsonString], {type: "application/json"});
    // Create a URL for the blob object
    var url = URL.createObjectURL(blob);
    // Create a link element with the URL and the file name
    var link = document.createElement("a");
    link.href = url;
    link.download = file;
    // Append the link to the document body
    document.body.appendChild(link);
    // Click the link to download the file
    link.click();
  }
  
  // The main program
  
  // Read the text file named "freq.txt"
  var text = readTextFile("new-pure-tone-freq.txt");
  // Parse the text file and create a JSON array of objects
  var jsonArray = parseTextFile(text);
  // Write the JSON array to a file named "puretones.json"
  writeJsonFile(jsonArray, "new-puretones.json");  

  // browser code:
  */

  /* non uncescore node code 
  // A function to generate a random string of letters and numbers
function generateId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // A function to play a pure tone of a given frequency
  function playPureTone(frequency) {
    // Create an audio context
    var audioContext = new AudioContext();
    // Create an oscillator node
    var oscillator = audioContext.createOscillator();
    // Set the oscillator frequency
    oscillator.frequency.value = frequency;
    // Connect the oscillator to the destination (speakers)
    oscillator.connect(audioContext.destination);
    // Start the oscillator
    oscillator.start();
    // Return the oscillator node
    return oscillator;
  }
  
  // A function to stop a pure tone
  function stopPureTone(oscillator) {
    // Stop the oscillator
    oscillator.stop();
  }
  
  // A function to read a text file and return its contents as a string
  function readTextFile(file) {
    // Require the fs module
    var fs = require('fs');
    // Read the file synchronously and return its contents
    return fs.readFileSync(file, 'utf8');
  }
  
  // A function to parse the text file contents and create a JSON array of objects
  function parseTextFile(text) {
    // Split the text by line breaks
    var lines = text.split("\n");
    // Initialize an empty array to store the objects
    var jsonArray = [];
    // Loop through each line
    for (var i = 0; i < lines.length; i++) {
      // Split the line by space
      var line = lines[i].split(" - ");
      // Get the frequency and the conditions from the line
      var frequency = line[0];
      var conditions = line[1];
      // Create an object with the required properties
      var jsonObject = {
        "data_name": frequency + " hz - Pure Tone",
        "data_description": "Pure Tone for mental relief from " + conditions,
        "data_start": "play_pure_tone(" + frequency + ");",
        "data_stop": "stop_pure_tone();",
        "data_id": generateId(8)
      };
      // Push the object to the array
      jsonArray.push(jsonObject);
    }
    // Return the array
    return jsonArray;
  }
  
  // A function to write a JSON array to a file
  function writeJsonFile(jsonArray, file) {
    // Require the fs module
    var fs = require('fs');
    // Convert the array to a JSON string
    var jsonString = JSON.stringify(jsonArray, null, "\t");
    // Write the JSON string to the file synchronously
    fs.writeFileSync(file, jsonString);
  }
  
  // The main program
  
  // Read the text file named "freq.txt"
  var text = readTextFile("new-pure-tone-freq.txt");
  // Parse the text file and create a JSON array of objects
  var jsonArray = parseTextFile(text);
  // Write the JSON array to a file named "puretones.json"
  writeJsonFile(jsonArray, "new-puretones.json");
  */

  
// A function to generate a random string of letters and numbers
function generateId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // A function to play a pure tone of a given frequency
  function playPureTone(frequency) {
    // Create an audio context
    var audioContext = new AudioContext();
    // Create an oscillator node
    var oscillator = audioContext.createOscillator();
    // Set the oscillator frequency
    oscillator.frequency.value = frequency;
    // Connect the oscillator to the destination (speakers)
    oscillator.connect(audioContext.destination);
    // Start the oscillator
    oscillator.start();
    // Return the oscillator node
    return oscillator;
  }
  
  // A function to stop a pure tone
  function stopPureTone(oscillator) {
    // Stop the oscillator
    oscillator.stop();
  }
  
  // A function to read a text file and return its contents as a string
  function readTextFile(file) {
    // Require the fs module
    var fs = require('fs');
    // Read the file synchronously and return its contents
    return fs.readFileSync(file, 'utf8');
  }
  
  // A function to parse the text file contents and create a JSON array of objects
  function parseTextFile(text) {
    // Split the text by line breaks
    var lines = text.split("\n");
    // Initialize an empty array to store the objects
    var jsonArray = [];
    // Loop through each line
    for (var i = 0; i < lines.length; i++) {
      // Split the line by space
      var line = lines[i].split(" - ");
      // Get the frequency and the conditions from the line
      var frequency = line[0];
      var conditions = line[1];
      // Replace underscores with spaces in the conditions string
      conditions = conditions.replace(/_/g, " ");
      // Create an object with the required properties
      var jsonObject = {
        "data_name": frequency + " hz - Pure Tone",
        "data_description": "Pure Tone for mental relief from " + conditions,
        "data_start": "play_pure_tone(" + frequency + ");",
        "data_stop": "stop_pure_tone();",
        "data_id": generateId(8)
      };
      // Push the object to the array
      jsonArray.push(jsonObject);
    }
    // Return the array
    return jsonArray;
  }
  
  // A function to write a JSON array to a file
  function writeJsonFile(jsonArray, file) {
    // Require the fs module
    var fs = require('fs');
    // Convert the array to a JSON string
    var jsonString = JSON.stringify(jsonArray, null, "\t");
    // Write the JSON string to the file synchronously
    fs.writeFileSync(file, jsonString);
  }
  
  // The main program
  
  // Read the text file named "freq.txt"
  var text = readTextFile("new-pure-tone-freq.txt");
  // Parse the text file and create a JSON array of objects
  var jsonArray = parseTextFile(text);
  // Write the JSON array to a file named "puretones.json"
  writeJsonFile(jsonArray, "new-puretones.json");
  