const fs = require('fs');

// Read JSON file
const jsonData = JSON.parse(fs.readFileSync('../json/sq_monaurals.json', 'utf-8'));

// Function to generate unique ID
function generateID() {
  return Math.random().toString(36).substr(2, 9);
}

// Add unique ID to each object in JSON
jsonData.forEach(obj => {
  obj.data_id = generateID();
});

// Write updated JSON to file
fs.writeFileSync('../json/sq_monaurals.json', JSON.stringify(jsonData));
