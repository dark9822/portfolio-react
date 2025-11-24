# Push to GitHub - Step by Step Instructions

## ⚠️ IMPORTANT: Create Repository on GitHub First!

Before running any commands, you **MUST** create the repository on GitHub:

1. Go to: **https://github.com/new**
2. Repository name: `edward-smith-portfolio`
3. **DO NOT** check "Add a README file"
4. **DO NOT** add .gitignore or license
5. Click **"Create repository"**

## Method 1: Run the PowerShell Script (Easiest)

1. **Right-click PowerShell** → **"Run as Administrator"**
2. Navigate to your project:
   ```powershell
   cd "D:\7_job_hunt\11_19edward_smith"
   ```
3. Run the script:
   ```powershell
   .\push-to-github.ps1
   ```

## Method 2: Manual Commands

If the script doesn't work, run these commands **one by one** in PowerShell (as Administrator):

```powershell
# Step 1: Navigate to project
cd "D:\7_job_hunt\11_19edward_smith"

# Step 2: Remove .git if it exists (to start fresh)
Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue

# Step 3: Initialize Git
git init

# Step 4: Fix permissions (run as Administrator)
icacls .git /grant "${env:USERNAME}:(OI)(CI)F" /T

# Step 5: Add all files
git add .

# Step 6: Commit
git commit -m "Initial commit: Portfolio website with Matt Farley style"

# Step 7: Add remote (update URL if different)
git remote add origin https://github.com/dark9822/edward-smith-portfolio.git

# Step 8: Push to GitHub
git branch -M main
git push -u origin main
```

## Method 3: Use GitHub Desktop (No Command Line Needed)

1. Download: **https://desktop.github.com/**
2. Install and sign in with your GitHub account
3. Click **"File"** → **"Add Local Repository"**
4. Select folder: `D:\7_job_hunt\11_19edward_smith`
5. Click **"Publish repository"** button
6. Make sure repository name is: `edward-smith-portfolio`
7. Click **"Publish Repository"**

## Troubleshooting

### Permission Denied Error
- **Solution**: Run PowerShell as Administrator
- Or use GitHub Desktop (Method 3)

### Repository Not Found (404)
- **Solution**: Make sure you created the repository on GitHub first at https://github.com/new

### Authentication Required
- Run: `git config --global user.name "Your Name"`
- Run: `git config --global user.email "your.email@example.com"`
- Or use GitHub Desktop which handles authentication automatically

## After Successful Push

Your portfolio will be available at:
- **Repository**: https://github.com/dark9822/edward-smith-portfolio
- **GitHub Pages** (if enabled): https://dark9822.github.io/edward-smith-portfolio

