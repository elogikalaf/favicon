const fs = require('fs');

// Read PNG file as binary data
const image = fs.readFileSync('image.png');

// Convert binary data to base64 string
const base64Image = Buffer.from(image).toString('base64');

console.log(base64Image);
