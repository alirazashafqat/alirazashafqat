# Publish the corrected portfolio with GitHub Desktop

The live site currently has missing images because the `assets/photos/` folder was not uploaded. Use the complete release folder so every page, image, stylesheet, script, and data file is replaced together.

## One-time setup

1. Install and open **GitHub Desktop**.
2. Sign in to the GitHub account that owns `alirazashafqat/alirazashafqat`.
3. Choose **File → Clone repository**.
4. Select `alirazashafqat/alirazashafqat` and click **Clone**.

## Replace the website

1. In GitHub Desktop, choose **Repository → Show in Explorer**.
2. Open the supplied `github-ready-site-2026-07-24-scholar` folder in a second Explorer window.
3. Select everything *inside* that release folder and copy it into the cloned repository folder.
4. Choose **Replace the files in the destination** when Windows asks.
5. Return to GitHub Desktop. The changed files should appear automatically.
6. Enter the summary `Publish corrected portfolio and complete assets`.
7. Click **Commit to main**, then **Push origin**.

## Verify

Wait two to five minutes, then open:

`https://alirazashafqat.github.io/alirazashafqat/`

Use `Ctrl + Shift + R` once to bypass the old browser cache. The homepage portrait and every gallery image should load. The repository must contain:

- `assets/photos/` with seven `.webp` files
- `content/` with five `.json` files
- all HTML pages, `styles.css`, `script.js`, `sitemap.xml`, and `.nojekyll`

Do not upload the ZIP file itself to the repository. Unzip it first, then copy its contents into the cloned repository root.
