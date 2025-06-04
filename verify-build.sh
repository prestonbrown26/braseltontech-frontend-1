#!/bin/bash

# Exit on error
set -e

echo "🔍 Verifying project setup..."

# Check for next.config.mjs
if [ ! -f next.config.mjs ]; then
  echo "❌ Error: next.config.mjs not found"
  exit 1
else
  echo "✅ Found next.config.mjs"
fi

# Check for required files
for file in src/app/not-found.tsx src/app/error.tsx src/middleware.ts; do
  if [ ! -f "$file" ]; then
    echo "❌ Error: $file not found"
    exit 1
  else
    echo "✅ Found $file"
  fi
done

# Clean build folder
echo "🧹 Cleaning build folder..."
rm -rf .next

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Run the build
echo "🏗️ Building the project..."
NEXT_PUBLIC_API_BASE_URL="${NEXT_PUBLIC_API_BASE_URL:-https://braseltontech-backend-1.onrender.com/api}" npm run build

# Check build status
if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  echo "Deploy this build to Vercel using:"
  echo "vercel --prod"
else
  echo "❌ Build failed"
  exit 1
fi 