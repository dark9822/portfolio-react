# Git Setup Instructions

## Issue
There's a permission issue preventing git from writing to the `.git` folder. 

## Solution
Run these commands in PowerShell (you may need to run PowerShell as Administrator):

### 1. Fix Git Permissions
```powershell
# Remove the problematic .git folder
Remove-Item -Path .git -Recurse -Force

# Reinitialize git
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Portfolio website with Matt Farley style"

# Add remote (already configured, but here for reference)
git remote add origin https://github.com/dark9822/edward-smith-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Alternative: If you need to create the repository on GitHub first

1. Go to https://github.com/dark9822
2. Click "New repository"
3. Name it: `edward-smith-portfolio`
4. Don't initialize with README (since we already have files)
5. Then run the push command above

## Note
The remote is already configured to: `https://github.com/dark9822/edward-smith-portfolio.git`

If you want a different repository name, you can change it with:
```powershell
git remote set-url origin https://github.com/dark9822/YOUR-REPO-NAME.git
```

