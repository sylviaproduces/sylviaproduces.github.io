# Local preview — Sylvia Produces

The `sylvia-produces-local-preview.zip` download contains the full static site plus a local-only `package.json` and Node server.

## Requirements

- [Node.js](https://nodejs.org/) **18 or later**
- No `npm install` command is required. The preview uses Node’s built-in modules only.

## Start locally

1. Extract `sylvia-produces-local-preview.zip`.
2. Open a terminal inside the extracted `sylvia-produces-local-preview` folder.
3. Run:

   ```bash
   npm run build
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000).
5. Press `Ctrl+C` in the terminal to stop the preview server.

Alternatively, use `npm run preview` to build and start the server in one command.

If port 3000 is already in use, run `PORT=3001 npm start` and open `http://localhost:3001` instead.

## Before GitHub Pages deployment

The local preview `package.json` is intentionally listed in `.gitignore`, so it does **not** get committed to the GitHub Pages repository. GitHub Pages only needs the static site files: HTML, CSS, JavaScript, generated detail-page folders, and `assets/`.

After validating locally, commit the website files to the root of your GitHub Pages branch and configure GitHub Pages to deploy from that branch’s `/(root)` directory.
