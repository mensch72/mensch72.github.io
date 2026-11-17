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
