#!/bin/bash

# Kuduu Website Deployment Script

echo "🚀 Building Kuduu website..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are in the 'dist' directory"
    echo ""
    echo "🌐 To deploy:"
    echo "   - Vercel: Run 'vercel' from the project root"
    echo "   - Netlify: Upload the 'dist' folder"
    echo "   - GitHub Pages: Push to gh-pages branch"
    echo ""
    echo "🔍 To preview: npm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi 