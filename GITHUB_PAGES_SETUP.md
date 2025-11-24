# Fix GitHub Pages Deployment - Switch from Jekyll to GitHub Actions

## The Problem
GitHub Pages is trying to use Jekyll to build your site, but this is a Next.js project. You need to switch to GitHub Actions.

## Solution: Change GitHub Pages Source

### Step-by-Step Instructions:

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/Junrio/Lift

2. **Click on "Settings"** (top menu bar)

3. **Click on "Pages"** (left sidebar, under "Code and automation")

4. **Under "Source" section:**
   - Currently it's probably set to: **"Deploy from a branch"**
   - Change it to: **"GitHub Actions"**
   - Click **"Save"**

5. **Wait for the workflow to run:**
   - Go to the **"Actions"** tab
   - You should see a workflow called "Deploy Next.js to GitHub Pages"
   - Wait for it to complete (usually 2-3 minutes)

6. **Your site will be live at:**
   - `https://junrio.github.io/Lift/`

## What This Does

- ✅ Uses GitHub Actions to build your Next.js app
- ✅ Generates static files automatically
- ✅ Deploys to GitHub Pages
- ✅ No more Jekyll errors!

## If You Still See Errors

If you still see Jekyll errors after changing the source:

1. Go to **Settings → Pages**
2. Make sure **"Source"** is set to **"GitHub Actions"** (NOT "Deploy from a branch")
3. If it's already set correctly, wait a few minutes for the workflow to complete
4. Check the **Actions** tab to see if the workflow is running

## Important Notes

- The workflow runs automatically every time you push to the `main` branch
- Your site will be available at: `https://junrio.github.io/Lift/`
- The build process takes about 2-3 minutes

---

**Need help?** Check the Actions tab to see detailed logs of what's happening during the build process.

