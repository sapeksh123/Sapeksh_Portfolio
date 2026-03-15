@echo off
echo Installing React Portfolio Dependencies...
echo.

echo Step 1: Cleaning up...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo Step 2: Installing dependencies...
npm install

echo Step 3: Starting development server...
echo.
echo Your React portfolio should now work!
echo Opening in browser...
npm run dev

pause