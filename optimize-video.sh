#!/bin/bash

# Video optimization script for homepage background video
# Requires ffmpeg to be installed: brew install ffmpeg (on macOS)

echo "🎬 Starting video optimization..."

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed. Please install it first:"
    echo "   macOS: brew install ffmpeg"
    echo "   Ubuntu: sudo apt update && sudo apt install ffmpeg"
    echo "   Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Check if source video exists
if [ ! -f "public/home/background.mp4" ]; then
    echo "❌ Source video public/home/background.mp4 not found"
    exit 1
fi

echo "🔄 Optimizing background video..."

# Optimize the video with good compression while maintaining quality
ffmpeg -i public/home/background.mp4 \
    -c:v libx264 \
    -preset slow \
    -crf 28 \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -y \
    public/optimized/background.mp4

# Check if optimization was successful
if [ $? -eq 0 ]; then
    # Get file sizes
    original_size=$(du -h "public/home/background.mp4" | cut -f1)
    optimized_size=$(du -h "public/optimized/background.mp4" | cut -f1)
    
    echo "✅ Video optimization complete!"
    echo "   Original: $original_size"
    echo "   Optimized: $optimized_size"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Update your hero-section.tsx to use the optimized video:"
    echo "      <source src=\"/optimized/background.mp4\" type=\"video/mp4\" />"
    echo "   2. Consider adding video preload=\"metadata\" for faster loading"
else
    echo "❌ Video optimization failed"
    exit 1
fi