const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs').promises;
const path = require('path');

// Create a 32x32 black square
const size = 32;
const blackSquare = Buffer.from(
    `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${size}" height="${size}" fill="#000000"/>
    </svg>`
);

async function generateFavicon() {
    try {
        // First generate PNG
        await sharp(blackSquare)
            .resize(size, size)
            .png()
            .toFile('temp-favicon.png');

        // Convert PNG to ICO
        const buf = await pngToIco('temp-favicon.png');
        await fs.writeFile('favicon.ico', buf);

        // Clean up temporary PNG
        await fs.unlink('temp-favicon.png');

        console.log('favicon.ico generated successfully');
    } catch (err) {
        console.error('Error generating favicon:', err);
        process.exit(1);
    }
}

generateFavicon(); 