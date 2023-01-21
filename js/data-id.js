const fs = require('fs');

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync('../json/puretones.json', 'utf-8'));

// Function to generate unique ID
function generateID() {
  return Math.random().toString(36).substr(2, 9);
}

// Add unique ID to each object in JSON
jsonData.forEach(obj => {
  obj.data_id = generateID();
});

// Write updated JSON to file
fs.writeFileSync('../json/puretones.json', JSON.stringify(jsonData));
