# Deploy Sylvia Produces on GitHub Pages

This folder contains the complete static website. It is ready to deploy without installing dependencies or running a build command.

## Deploy

1. Extract `sylvia-produces-github-pages.zip`.
2. Copy the **contents** of the `sylvia-produces-github-pages` folder into the root of your GitHub Pages repository or selected Pages branch.
3. Commit and push the files.
4. In GitHub, open **Settings → Pages** and choose **Deploy from a branch**.
5. Select the branch and the `/(root)` folder, then save.

## Included

- `index.html`, `about.html`, and `404.html`
- Generated case-study, project, and blog pages
- `assets/` with all images, including the eight About-page gallery placeholders
- `content.js`, `main.js`, and `styles.css`
- `.nojekyll` and `manus-routes.json`

`package.json`, development scripts, Git metadata, and local build artifacts are intentionally excluded because GitHub Pages serves this site as static files.

