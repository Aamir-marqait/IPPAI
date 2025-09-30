# Claude Code - Image Optimization Documentation

## Image Optimization Process

This document outlines the image optimization process implemented for the homepage and can be replicated for other pages.

### 1. Analysis Phase
- **Identify all images** used on the target page by searching for `src="/.*\.(png|jpg|jpeg|gif|svg)"` pattern
- **Catalog image locations** and sizes to understand optimization potential
- **Check component files** in the page directory to find all image references

### 2. Setup Image Optimization Script

#### Dependencies
```bash
npm install sharp
```

#### Create optimization script: `optimize-media.js`
```javascript
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
```

### 3. Image Optimization Results (Homepage)

**Optimized 30 images** with the following significant improvements:
- `cta.jpg`: 9.1MB → 0.5MB (94.5% savings)
- `commitment.png`: 1.4MB → 0.1MB (93.2% savings)
- `wind.png`: 0.3MB → 0.0MB (95.3% savings)
- Average savings: **46-95%** file size reduction

### 4. Lazy Loading Implementation

#### Image Component Updates
For each image component, apply these changes:

**Before:**
```tsx
<Image
  src="/home/intro1.png"
  alt="Description"
  fill
  className="object-contain"
/>
```

**After:**
```tsx
<Image
  src="/optimized/intro1.webp"
  alt="Description"
  fill
  className="object-contain"
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIHAQAAAAAAAAAAAAABAgADBAUREiExQVFhkf/aAAwDAQACEQMRAD8A0NbfH2oo2+PlHZ7L93eMuUgPCDkMB74P/9k="
/>
```

#### Key Changes:
1. **Update src path**: `/home/image.png` → `/optimized/image.webp`
2. **Add lazy loading**: `loading="lazy"` (except for above-the-fold images)
3. **Add blur placeholder**: `placeholder="blur"` with `blurDataURL`
4. **Remove priority**: Replace `priority` with `loading="lazy"` for below-the-fold images

### 5. Files Updated (Homepage Example)

#### Components Modified:
- `/components/homepage/hero-section.tsx`
- `/components/homepage/introduction.tsx`
- `/components/homepage/knowledge-hub.tsx`
- `/components/homepage/cta-banner.tsx`
- `/components/homepage/what-we-do.tsx`
- `/components/homepage/testimonials.tsx`

#### Pattern Used for Updates:
```bash
# Find all images in a page's components
grep -r 'src="/.*\.(png|jpg|jpeg)"' components/[page-name]/

# Use MultiEdit tool to batch update multiple images in a single file
# Use Edit tool for single image updates
```

### 6. Video Optimization (Optional)

#### Create video optimization script: `optimize-video.sh`
```bash
#!/bin/bash
echo "🎬 Starting video optimization..."

ffmpeg -i public/[page]/background.mp4 \
    -c:v libx264 \
    -preset slow \
    -crf 28 \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -y \
    public/optimized/background.mp4
```

### 7. Reusable Optimized Image Component

Created `/components/ui/optimized-image.tsx` for future use:
- Automatically converts `/home/` paths to `/optimized/` with `.webp` extension
- Built-in lazy loading and blur placeholder
- Error handling with fallback images

### 8. Running Optimization for New Pages

#### Step-by-step process:
1. **Analyze**: Search for images in the target page components
2. **Update script**: Add new image paths to `optimize-media.js`
3. **Run optimization**: `node optimize-media.js`
4. **Update components**: Replace image sources and add lazy loading
5. **Test**: Verify all images load correctly

#### Command sequence:
```bash
# 1. Find images for new page (e.g., about page)
grep -r 'src="/.*\.(png|jpg|jpeg)"' components/about/

# 2. Update optimize-media.js with new paths
# Add entries like:
# { input: 'public/about/hero.jpg', output: 'public/optimized/about-hero.webp' }

# 3. Run optimization
node optimize-media.js

# 4. Update component files using Edit/MultiEdit tools
# Replace /about/image.png with /optimized/about-image.webp
# Add loading="lazy" and blur placeholders
```

### 9. Performance Impact

#### Expected improvements:
- **30-95% reduction** in image file sizes
- **Faster page load times** especially on slower connections
- **Better user experience** with smooth loading transitions
- **Improved SEO scores** due to faster loading

#### Best practices:
- Use `loading="eager"` or `priority` for above-the-fold images
- Use `loading="lazy"` for all other images
- Always include meaningful `alt` text
- Use blur placeholders for smooth loading transitions

### 10. Maintenance

#### Regular tasks:
- Run optimization script when adding new images
- Update image references in components
- Monitor file sizes and compression ratios
- Test loading performance on different connection speeds

#### Tools used:
- **Sharp**: Image optimization and format conversion
- **Next.js Image**: Built-in lazy loading and optimization
- **FFmpeg**: Video compression (optional)