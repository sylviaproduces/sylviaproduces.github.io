# Sylvia Produces — GitHub Pages deployment

This folder is a complete, dependency-free static website bundle.

## Deploy

1. Extract `sylvia-produces-github-pages.zip`.
2. Commit the **contents of this folder** to the root of your GitHub Pages publishing branch (usually `main`).
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select your branch and the `/(root)` folder.
5. Save and wait for GitHub to show the public URL.

No build command, package installation, server, or environment variables are required. The `.nojekyll` file ensures GitHub Pages serves these static files directly.
