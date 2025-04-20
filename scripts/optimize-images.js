const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'img';
const outputDir = 'img/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all images from input directory
const imageFiles = fs.readdirSync(inputDir).filter(file => 
    /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
);

// Process each image
async function optimizeImages() {
    for (const file of imageFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

        try {
            await sharp(inputPath)
                .resize(1200, null, { // Width of 1200px, maintain aspect ratio
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ 
                    quality: 80,
                    effort: 6
                })
                .toFile(outputPath);

            console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

optimizeImages().then(() => {
    console.log('Image optimization complete!');
}); 