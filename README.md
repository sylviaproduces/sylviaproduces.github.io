# Sylvia Produces

A **dependency-free, GitHub Pages-ready** portfolio for Sylvia. It uses only HTML, CSS, JavaScript, and committed assets—no server, form service, framework, or build dependency.

## Local preview

Download and extract `sylvia-produces-local-preview.zip` before running the local preview. Its local-only `package.json` and Node server are intentionally excluded from the GitHub Pages repository.

```bash
npm run build
npm run start
```

Then open [http://localhost:3000](http://localhost:3000). `npm run build` is a Node script that turns the central content configuration into static, linkable case-study and blog pages. It does not download or install anything. See `LOCAL-PREVIEW.md` inside the ZIP for the complete setup and port-conflict instructions.

## Publish on GitHub Pages

1. Push this folder to the **root of the repository’s publishing branch** (typically `main`).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch and the **/(root)** folder, then save.
5. Wait for GitHub Pages to report the site URL.

All navigation uses relative paths, so the site works whether it is published at `username.github.io/repository-name/` or at a custom domain.

## Edit content

Most ongoing edits happen in **`content.js`**:

- `projects` controls independent project pages.
- `caseStudies` controls work/case-study cards and detail pages.
- `posts` controls the writing cards on Home and full blog posts.
- `site` controls the hero text, email, location, and social links.

After adding, removing, or changing a record’s `slug` or `path`, run this from the extracted local-preview bundle:

```bash
npm run build
```

Commit the updated generated folders and `manus-routes.json` along with `content.js`.

### Add a case study

1. Copy one object in `caseStudies` inside `content.js`.
2. Give it a unique `slug` and a unique `path`, such as `case-studies/new-project/`.
3. Update title, copy, facts, sections, outcomes, and media.
4. Run `npm run build`.

Do the same with `projects` or `posts` to create project and blog pages.

## Add or replace media

Every item has a `media` object. The shared renderer supports three media modes:

```js
// Static image
media: {
  type: "image",
  src: "assets/images/my-photo.jpg",
  alt: "Describe the image for screen-reader users"
}

// Animated GIF
media: {
  type: "gif",
  src: "assets/images/process-loop.gif",
  alt: "A looping production process diagram"
}

// Trusted raw HTML embed, such as a Vimeo, YouTube, or Spline iframe
media: {
  type: "embed",
  embedHtml: '<iframe title="Behind the scenes" src="https://example.com/embed" loading="lazy" allowfullscreen></iframe>'
}
```

Only paste embed code from sources you trust. It is inserted directly into the page by design. Keep media files inside `assets/images/` and use paths relative to the site root, as shown above.

The default editorial artboards are CSS artwork, not stock imagery. Replace them at any time with the image/GIF/embed objects above. The home and About-page SVG illustrations live in `assets/images/` and can also be swapped.

The supplied Sylvia portrait is saved at `assets/images/sylvia.webp` and is selected as the current homepage hero media in `content.js`. The About-page header pairs that portrait with `assets/images/about-collage.svg`; replace the second artwork file when a second approved photo is available.

### Update the About-page photo gallery

The About page includes eight editable gallery slots. Replace the files in `assets/images/about-gallery/` with your images and update the matching `src` and `alt` fields in `aboutGallery` inside `content.js`. The gallery is static for GitHub Pages: image changes are made by replacing the files in the repository, not by a public-facing upload form.

## File map

| Path | Purpose |
| --- | --- |
| `index.html` | Home page, including selected work, writing, and project sections |
| `about.html` | About page |
| `content.js` | Central content studio |
| `main.js` | Shared navigation, cards, detail templates, menus, and motion |
| `styles.css` | Visual system and responsive layout |
| `scripts/build-pages.mjs` | Produces static detail pages from `content.js` |
| `manus-routes.json` | Route manifest for the development environment |
| `assets/` | Logo, favicon, and replaceable visuals |

## Accessibility notes

The site has semantic landmarks, keyboard-operable navigation, visible focus states, responsive layouts, descriptive image fields, and `prefers-reduced-motion` support. Test any third-party embed for keyboard access and provide a meaningful `title` attribute.
