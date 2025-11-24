# GitHub Push Script
# Run this script as Administrator: Right-click PowerShell -> Run as Administrator

Write-Host "🚀 Starting GitHub Push Process..." -ForegroundColor Green

# Step 1: Navigate to project
Set-Location "D:\7_job_hunt\11_19edward_smith"
Write-Host "✅ Navigated to project directory" -ForegroundColor Green

# Step 2: Remove existing .git if it exists and has permission issues
if (Test-Path .git) {
    Write-Host "🗑️  Removing existing .git folder..." -ForegroundColor Yellow
    Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
}

# Step 3: Initialize Git
Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
git init
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Git init failed. Make sure Git is installed." -ForegroundColor Red
    exit 1
}

# Step 4: Add all files
Write-Host "📝 Adding all files..." -ForegroundColor Yellow
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Git add failed due to permissions. Trying to fix..." -ForegroundColor Red
    # Try to fix permissions
    icacls .git /grant "${env:USERNAME}:(OI)(CI)F" /T 2>&1 | Out-Null
    git add .
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Still having permission issues. Please run this script as Administrator." -ForegroundColor Red
        exit 1
    }
}

# Step 5: Commit
Write-Host "💾 Committing files..." -ForegroundColor Yellow
git commit -m "Initial commit: Portfolio website with Matt Farley style"
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Commit failed." -ForegroundColor Red
    exit 1
}

# Step 6: Add remote (update with your actual repo URL)
Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
$repoUrl = "https://github.com/dark9822/edward-smith-portfolio.git"
git remote add origin $repoUrl 2>&1 | Out-Null
# If remote already exists, update it
if ($LASTEXITCODE -ne 0) {
    git remote set-url origin $repoUrl
}

# Step 7: Push to GitHub
Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your repository: https://github.com/dark9822/edward-smith-portfolio" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed. Make sure:" -ForegroundColor Red
    Write-Host "   1. The repository exists on GitHub (create it at https://github.com/new)" -ForegroundColor Yellow
    Write-Host "   2. You're authenticated (git config --global user.name and user.email)" -ForegroundColor Yellow
    Write-Host "   3. You have push access to the repository" -ForegroundColor Yellow
}

