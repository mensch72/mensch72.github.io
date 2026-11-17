# Adding an item

1. Create `posts/YYYY-MM-short-slug/index.qmd` (plus any attachments in the same folder).
2. Front matter:
   ```yaml
   title: "..."
   date: YYYY-MM-DD
   status: "AI-assisted · sketch | draft | work in progress | checked | abandoned · <what has been verified>"
   categories: [...]
   ```
3. Start the body with a `callout-warning` box stating the status in one to three sentences.
4. Link preprints/code; give a Harvard-style citation with a DOI (or arXiv) link.
5. Render with `quarto render` (output goes to `docs/`, which GitHub Pages serves) and commit sources and `docs/` together.

## Rendering pitfalls (observed 2026-11-17, Quarto 1.6.42)

A plain `quarto render` has three side effects that must not be committed:

- It renders `CONTRIBUTING.md` itself to `docs/CONTRIBUTING.html` and adds it to `docs/search.json` and `docs/sitemap.xml`.
- It deletes the top-level `index.html` (the redirect to `docs/`).
- It deletes `docs/.nojekyll`.

Render like this instead, then check `git status`: only the new item, `docs/index.html`, `docs/listings.json`, `docs/search.json` and `docs/sitemap.xml` should change.

```bash
mv CONTRIBUTING.md _CONTRIBUTING.md && quarto render; mv _CONTRIBUTING.md CONTRIBUTING.md
```

```bash
git checkout -- index.html
```

```bash
[ -f docs/.nojekyll ] || touch docs/.nojekyll
```

Files whose names start with `_` are skipped by Quarto, which is why the first command keeps `CONTRIBUTING.md` out of the output.

**Which branch is live.** GitHub Pages builds from the branch `github-pages-live`, not from `main`. That branch mirrors `main`, with the same tree but separate commits. The evidence: both Pages builds on 2026-11-17 used its head, and its tree equals `main` at acb76b9. A push to `main` therefore does not change the site until `github-pages-live` is updated to `main`'s content.
