# DEPLOY

This project can be deployed as a static site to either **GitHub Pages** or **Netlify**.

## Prerequisites
- Node.js 18+
- npm
- Project dependencies installed (`npm install`)

---

## GitHub Pages (via GitHub Actions)

### 1) Push repository to GitHub
1. Create a GitHub repo named `tic-tac-toe`.
2. Add your remote:
   ```bash
   git remote add origin https://github.com/<your-user>/tic-tac-toe.git
   ```
3. Push your default branch:
   ```bash
   git push -u origin main
   ```

### 2) Ensure Vite base path is correct
`vite.config.js` is configured for GitHub Pages:
```js
base: '/tic-tac-toe/'
```
If your repository name differs, update this base path accordingly.

### 3) Enable GitHub Pages
1. In GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### 4) Deploy
1. Push to `main` branch.
2. The workflow at `.github/workflows/deploy.yml` will:
   - install dependencies
   - run `npm run build`
   - publish `dist/` to GitHub Pages
3. After workflow success, open:
   ```
   https://<your-user>.github.io/tic-tac-toe/
   ```

---

## Netlify

### Option A: Netlify UI (recommended)
1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect your GitHub repo.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy site.

> Note: For Netlify root hosting, you may set `base: '/'` in `vite.config.js` if needed.

### Option B: Manual deploy
1. Build locally:
   ```bash
   npm run build
   ```
2. In Netlify, choose **Add new site → Deploy manually**.
3. Drag and drop the `dist/` folder.

---

## Quick Verification Checklist
- `npm run build` succeeds with no errors.
- `dist/` exists after build.
- For GitHub Pages, URL loads assets correctly under `/tic-tac-toe/` path.
