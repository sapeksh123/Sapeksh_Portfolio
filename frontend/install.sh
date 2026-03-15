#!/bin/bash

echo "Installing React Portfolio Dependencies..."
echo

echo "Step 1: Cleaning up..."
rm -rf node_modules
rm -f package-lock.json

echo "Step 2: Installing dependencies..."
npm install

echo "Step 3: Starting development server..."
echo
echo "Your React portfolio should now work!"
echo "Opening in browser..."
npm run dev