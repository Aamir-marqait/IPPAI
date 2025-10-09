const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .webp({ quality: quality })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    console.log(`   Size: ${(originalSize / 1024 / 1024).toFixed(1)}MB -> ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% savings)`);
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function main() {
  // Create optimized directory if it doesn't exist
  const optimizedDir = 'public/optimized';
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Homepage images to optimize
  const imagesToOptimize = [
    // Hero section images
    { input: 'public/home/line.png', output: 'public/optimized/line.webp' },
    { input: 'public/home/s.png', output: 'public/optimized/s.webp' },
    { input: 'public/home/kp1.png', output: 'public/optimized/kp1.webp' },
    { input: 'public/home/kp2.png', output: 'public/optimized/kp2.webp' },
    
    // Introduction section images
    { input: 'public/home/intro1.png', output: 'public/optimized/intro1.webp' },
    { input: 'public/home/intro2.png', output: 'public/optimized/intro2.webp' },
    { input: 'public/home/intro3.png', output: 'public/optimized/intro3.webp' },
    
    // Knowledge hub icons
    { input: 'public/home/1.png', output: 'public/optimized/1.webp' },
    { input: 'public/home/2.png', output: 'public/optimized/2.webp' },
    { input: 'public/home/3.png', output: 'public/optimized/3.webp' },
    { input: 'public/home/4.png', output: 'public/optimized/4.webp' },
    
    // Other homepage images
    { input: 'public/home/wind.png', output: 'public/optimized/wind.webp' },
    { input: 'public/home/cta.jpg', output: 'public/optimized/cta.webp' },
    
    // Company logos for carousel
    { input: 'public/home/company1.jpg', output: 'public/optimized/company1.webp' },
    { input: 'public/home/company2.jpg', output: 'public/optimized/company2.webp' },
    { input: 'public/home/company3.jpg', output: 'public/optimized/company3.webp' },
    { input: 'public/home/company4.jpg', output: 'public/optimized/company4.webp' },
    { input: 'public/home/company5.jpg', output: 'public/optimized/company5.webp' },
    { input: 'public/home/company6.jpg', output: 'public/optimized/company6.webp' },
    
    // Additional images
    { input: 'public/home/google.png', output: 'public/optimized/google.webp' },
    { input: 'public/home/microsoft.png', output: 'public/optimized/microsoft.webp' },
    { input: 'public/home/shopify.png', output: 'public/optimized/shopify.webp' },
    { input: 'public/home/spotify.png', output: 'public/optimized/spotify.webp' },
    { input: 'public/home/uber.png', output: 'public/optimized/uber.webp' },
    
    { input: 'public/home/commit.png', output: 'public/optimized/commit.webp' },
    { input: 'public/home/commitment.png', output: 'public/optimized/commitment.webp' },
    { input: 'public/home/test.png', output: 'public/optimized/test.webp' },
    { input: 'public/home/voice.png', output: 'public/optimized/voice.webp' },
    { input: 'public/home/voice1.png', output: 'public/optimized/voice1.webp' },
    { input: 'public/home/voice2.png', output: 'public/optimized/voice2.webp' },
    { input: 'public/home/voice3.png', output: 'public/optimized/voice3.webp' },
    { input: 'public/home/key1.png', output: 'public/optimized/key1.webp' },
    
    // Additional homepage images found
    { input: 'public/home/calendar.svg', output: 'public/optimized/calendar.webp' },
    { input: 'public/home/location.svg', output: 'public/optimized/location.webp' },
    { input: 'public/next.png', output: 'public/optimized/next.webp' },
    { input: 'public/home/what.png', output: 'public/optimized/what.webp' },
    { input: 'public/home/kh1.png', output: 'public/optimized/kh1.webp' },
    { input: 'public/home/kh2.png', output: 'public/optimized/kh2.webp' },
    { input: 'public/line.png', output: 'public/optimized/line-main.webp' },
    { input: 'public/home/khbg.png', output: 'public/optimized/khbg.webp' },
    
    // Hero section background images
    { input: 'public/hero.png', output: 'public/optimized/hero.webp' },
    { input: 'public/home/bg2.jpg', output: 'public/optimized/bg2.webp' }
  ];

  console.log('🚀 Starting image optimization...\n');

  for (const { input, output } of imagesToOptimize) {
    if (fs.existsSync(input)) {
      await optimizeImage(input, output, 80);
    } else {
      console.log(`⚠️  ${input} not found, skipping...`);
    }
  }

  // About page images to optimize
  const aboutImagesToOptimize = [
    // Timeline milestone images
    { input: 'public/about/1994.png', output: 'public/optimized/about-1994.webp' },
    { input: 'public/about/2001.png', output: 'public/optimized/about-2001.webp' },
    { input: 'public/about/2005.png', output: 'public/optimized/about-2005.webp' },
    { input: 'public/about/2010.png', output: 'public/optimized/about-2010.webp' },
    { input: 'public/about/2015.png', output: 'public/optimized/about-2015.webp' },
    { input: 'public/about/2020.png', output: 'public/optimized/about-2020.webp' },
    { input: 'public/about/2024.png', output: 'public/optimized/about-2024.webp' },
    
    // Purpose section images
    { input: 'public/about/5.png', output: 'public/optimized/about-5.webp' },
    { input: 'public/about/1.png', output: 'public/optimized/about-1.webp' },
    { input: 'public/about/3.png', output: 'public/optimized/about-3.webp' },
    
    // Recognition section images
    { input: 'public/about/ip.png', output: 'public/optimized/about-ip.webp' },
    { input: 'public/about/gr.png', output: 'public/optimized/about-gr.webp' },
    { input: 'public/about/ea.png', output: 'public/optimized/about-ea.webp' },
    { input: 'public/about/bg3.png', output: 'public/optimized/about-bg3.webp' },
    
    // Other about images
    { input: 'public/about/about.jpg', output: 'public/optimized/about-hero.webp' },
    { input: 'public/about/bg.png', output: 'public/optimized/about-bg.webp' },
    { input: 'public/about/2h.png', output: 'public/optimized/about-2h.webp' },
    { input: 'public/about/user1.png', output: 'public/optimized/about-user1.webp' },
    { input: 'public/about/user2.png', output: 'public/optimized/about-user2.webp' },
    { input: 'public/about/user3.png', output: 'public/optimized/about-user3.webp' }
  ];

  console.log('\n🔄 Starting About page optimization...\n');

  for (const { input, output } of aboutImagesToOptimize) {
    if (fs.existsSync(input)) {
      await optimizeImage(input, output, 80);
    } else {
      console.log(`⚠️  ${input} not found, skipping...`);
    }
  }

  console.log('\n✨ Image optimization complete!');
  console.log('\n📹 Note: For video optimization, consider using FFmpeg to compress the background video:');
  console.log('ffmpeg -i public/home/background.mp4 -c:v libx264 -crf 28 -preset slow public/optimized/background.mp4');
}

main().catch(console.error);