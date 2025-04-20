const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create a 32x32 black square
const size = 32;
const blackSquare = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="#000000"/>
    </svg>`
);

// Generate favicon.ico
sharp(blackSquare)
    .resize(size, size)
    .toFormat('ico')
    .toFile('favicon.ico')
    .then(() => {
        console.log('favicon.ico generated successfully');
    })
    .catch(err => {
        console.error('Error generating favicon:', err);
    }); 