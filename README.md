# SJ-trAIning

Static training-course site generator for GitHub Pages.

## Workflow

1. Import lesson folders from the network-drive source:

```bash
npm run lessons:import
```

2. Generate the static site:

```bash
npm run generate
```

3. Or run both steps together:

```bash
npm run site:update
```

4. Preview locally:

```bash
npm run preview
```

## Source Layout

- Imported source lessons are copied into `content/lessons/`
- Generated lesson pages are written to `lessons/<lesson-slug>/index.html`
- Shared site styles live in `styles.css`
- Build diagnostics are written to `generated/*.json`

## Notes

- The default lesson source is `P:\Production\Computational\RBG_pyRevit\pyRevit Course\Python`
- Existing Markdown lessons are rendered directly.
- Existing lesson HTML files are supported as compatibility inputs.
- Commit the generated output for GitHub Pages publishing.

