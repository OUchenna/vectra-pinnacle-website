# Vectra Pinnacle Ventures Limited — Website

A single-page company website built from the Memorandum of Association, listing the
Company's registered objects (clauses A–M) grouped into six operating divisions.

Stack: React 19 + Vite, plain CSS (no framework), deployed as a static site.

## Before you publish

The **Contact** section (bottom of the page) uses placeholder text in `src/App.jsx`:

- `[Company address, Nigeria]`
- `+234 000 000 0000` (placeholder)
- `[RC number]`

The email is already set to `info@vectrapinnacle.com`. Search for `contact-grid` in
`src/App.jsx` and replace the remaining placeholders with the Company's real
registered office, phone and CAC (RC) number.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy: GitHub + AWS Amplify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial Vectra Pinnacle Ventures site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repository on GitHub first, then run the commands above from this
project folder.)

### 2. Connect the repo in AWS Amplify

1. Sign in to the AWS Amplify console.
2. Choose **New app → Host web app**.
3. Select **GitHub**, authorize AWS Amplify, then pick this repository and the `main`
   branch.
4. Amplify will detect the included `amplify.yml` build spec automatically — it runs
   `npm ci`, then `npm run build`, and serves the `dist` folder. You shouldn't need to
   edit anything on this screen.
5. Choose **Save and deploy**. The first build takes a couple of minutes.
6. Once it finishes, Amplify gives you a live `https://main.<app-id>.amplifyapp.com`
   URL.

### 3. Custom domain (optional)

In the Amplify console, go to **Hosting → Custom domains → Add domain**, then follow
the prompts to point your domain (e.g. via Route 53 or another DNS provider) at the
app. Amplify provisions and renews the SSL certificate automatically.

### 4. Future updates

Any `git push` to `main` triggers an automatic rebuild and redeploy — no manual steps
needed after the first setup.

## Brand assets

`public/logo-full.png` (used in the nav bar) and `public/logo-icon.png` (used in the
footer and as the browser favicon/apple touch icon) are generated from the supplied
logo, with the background made transparent. The site's colour palette (navy `#1B2D51`
and green `#4E9F49`) is pulled directly from this logo — see the CSS variables in
`src/index.css` if you ever need to adjust the shades.

## Project structure

```
index.html          entry HTML, fonts, meta tags
src/main.jsx         React entry point
src/App.jsx           page content and structure
src/App.css            component styling
src/index.css          design tokens (colors, type, resets)
amplify.yml           AWS Amplify build spec
```

## Editing content

- **Divisions** (the 6 summary cards) — edit the `DIVISIONS` array near the top of
  `src/App.jsx`.
- **Full objects clause (A–M)** — edit the `OBJECTS` array in the same file. This is
  the complete text from the Memorandum, shown in the expandable list.
- **Colors / fonts** — edit the CSS variables at the top of `src/index.css`.
