# Git Push Guide - Manual Steps

This guide shows you how to push your code to GitHub manually.

## Prerequisites
- Git installed on your computer
- GitHub account
- Repository created on GitHub (already done: https://github.com/Junrio/Lift.git)

---

## First Time Setup (Already Done)

If you're setting up a new repository, you would run:

```bash
# 1. Initialize git repository
git init

# 2. Add all files to staging
git add .

# 3. Make your first commit
git commit -m "Initial commit: Your message here"

# 4. Add remote repository (only needed once)
git remote add origin https://github.com/Junrio/Lift.git

# 5. Rename branch to main (if needed)
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

---

## Daily Workflow - Pushing Changes

After you make changes to your code, follow these steps:

### Step 1: Check what files have changed
```bash
git status
```
This shows you which files were modified, added, or deleted.

### Step 2: Add files to staging
```bash
# Add all changed files
git add .

# OR add specific files only
git add path/to/file.tsx
```

### Step 3: Commit your changes
```bash
git commit -m "Description of your changes"
```
**Good commit messages:**
- ✅ "Update email to junriolomongo.ph@gmail.com"
- ✅ "Add Facebook booking integration"
- ✅ "Fix responsive layout on mobile"
- ❌ "fix" or "update" (too vague)

### Step 4: Push to GitHub
```bash
git push
```
If it's your first push to a branch, use:
```bash
git push -u origin main
```

---

## Common Commands

### View commit history
```bash
git log
```

### See what changed in a file
```bash
git diff
```

### Undo changes (before committing)
```bash
# Undo changes to a specific file
git checkout -- path/to/file.tsx

# Undo all uncommitted changes
git reset --hard
```

### Update from GitHub (if working on multiple computers)
```bash
git pull
```

### Create a new branch
```bash
git checkout -b feature-name
git push -u origin feature-name
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| Check status | `git status` |
| Add all files | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push` |
| Pull from GitHub | `git pull` |
| View history | `git log` |

---

## Troubleshooting

### "Remote origin already exists"
If you see this error, the remote is already set up. You can skip adding it again.

### "Authentication failed"
You may need to:
1. Use a Personal Access Token instead of password
2. Or set up SSH keys
3. Or use GitHub Desktop app

### "Your branch is ahead of origin"
This means you have local commits that aren't on GitHub yet. Just run `git push`.

---

## Example Workflow

```bash
# 1. Make changes to your code files

# 2. Check what changed
git status

# 3. Stage all changes
git add .

# 4. Commit with a message
git commit -m "Update contact information"

# 5. Push to GitHub
git push

# Done! Your changes are now on GitHub
```

---

**Your repository:** https://github.com/Junrio/Lift.git

