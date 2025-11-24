# GitHub Repository Setup

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `edward-smith-portfolio`
3. Description: "Portfolio website - Edward Smith"
4. Choose: **Public** or **Private** (your choice)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands in PowerShell (you may need to run as Administrator):

```powershell
# Navigate to project directory
cd "D:\7_job_hunt\11_19edward_smith"

# Try to add files (if permission issue persists, see alternative below)
git add .

# If git add fails, try this alternative:
# Remove .git and reinitialize
Remove-Item -Path .git -Recurse -Force
git init
git remote add origin https://github.com/dark9822/edward-smith-portfolio.git

# Add files in smaller batches
git add package.json package-lock.json
git add index.html vite.config.js
git add src/
git add README.md .gitignore

# Commit
git commit -m "Initial commit: Portfolio website with Matt Farley style"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative: If Permission Issues Persist

If you continue to have permission issues, you can:

1. **Use GitHub Desktop** (easier GUI option):
   - Download: https://desktop.github.com/
   - File → Add Local Repository
   - Select your project folder
   - Publish repository

2. **Or use Git Bash** instead of PowerShell:
   - Open Git Bash
   - Navigate to project: `cd /d/7_job_hunt/11_19edward_smith`
   - Run the same git commands

3. **Or manually fix permissions**:
   ```powershell
   # Run PowerShell as Administrator
   takeown /f .git /r /d y
   icacls .git /grant "${env:USERNAME}:(OI)(CI)F" /T
   ```

## After Pushing

Your portfolio will be available at:
- Repository: https://github.com/dark9822/edward-smith-portfolio
- If you enable GitHub Pages, it will be at: https://dark9822.github.io/edward-smith-portfolio

