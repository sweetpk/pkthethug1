@echo off
setlocal

REM ============================================================
REM qm-update-manifest.bat
REM ------------------------------------------------------------
REM Double-click this file any time you add, remove, or edit
REM files in the question-banks folder. It regenerates
REM manifest.json so the quiz app knows about your changes.
REM
REM This file must sit in the SAME folder as qm-build-manifest.js
REM and the question-banks folder.
REM ============================================================

REM Make sure we're running from the folder this .bat file is in,
REM no matter where it was double-clicked from.
cd /d "%~dp0"

echo.
echo ====================================
echo  Quiz Master - Manifest Updater
echo ====================================
echo.

REM Check Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js was not found on this computer.
    echo.
    echo Please install it first from https://nodejs.org
    echo ^(download the "LTS" version, run the installer, then try this again^)
    echo.
    pause
    exit /b 1
)

REM Check qm-build-manifest.js actually exists here
if not exist "qm-build-manifest.js" (
    echo ERROR: qm-build-manifest.js was not found in this folder:
    echo   %cd%
    echo.
    echo Make sure qm-update-manifest.bat is sitting in the same folder
    echo as qm-build-manifest.js and your question-banks folder.
    echo.
    pause
    exit /b 1
)

echo Running qm-build-manifest.js ...
echo.
node qm-build-manifest.js

echo.
echo ====================================
echo  Done. You can close this window.
echo ====================================
echo.
pause
