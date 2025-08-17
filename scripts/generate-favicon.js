import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// SVG content for the favicon
const svgContent = `<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background with rounded corners -->
  <rect width="256" height="256" rx="48" fill="#f14e42"/>
  
  <!-- Letter A for Arizona (larger, centered) -->
  <path d="M88 176 L128 80 L168 176 M104 144 L152 144" stroke="white" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  
  <!-- Health cross symbol in corner -->
  <g transform="translate(176, 176)">
    <rect x="-8" y="-32" width="16" height="64" fill="white" rx="4"/>
    <rect x="-32" y="-8" width="64" height="16" fill="white" rx="4"/>
  </g>
</svg>`;

async function generateFavicons() {
  const outputDir = path.join(__dirname, '..', 'public');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate PNG versions at different sizes
  const sizes = [16, 32, 48, 64, 128, 256];
  
  for (const size of sizes) {
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
    console.log(`Generated favicon-${size}x${size}.png`);
  }

  // Generate the main favicon.ico with multiple sizes
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile(path.join(outputDir, 'favicon-32.png'));

  await sharp(Buffer.from(svgContent))
    .resize(16, 16)
    .png()
    .toFile(path.join(outputDir, 'favicon-16.png'));

  console.log('Generated favicon PNG files');
  
  // Also save the SVG
  fs.writeFileSync(path.join(outputDir, 'favicon.svg'), svgContent);
  console.log('Generated favicon.svg');

  // Generate apple-touch-icon
  await sharp(Buffer.from(svgContent))
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate android chrome icons
  await sharp(Buffer.from(svgContent))
    .resize(192, 192)
    .png()
    .toFile(path.join(outputDir, 'android-chrome-192x192.png'));
  
  await sharp(Buffer.from(svgContent))
    .resize(512, 512)
    .png()
    .toFile(path.join(outputDir, 'android-chrome-512x512.png'));
  console.log('Generated Android Chrome icons');

  console.log('✅ All favicon files generated successfully!');
}

generateFavicons().catch(console.error);