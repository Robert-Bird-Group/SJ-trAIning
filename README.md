# SJ-trAIning

Static training-course site generator for GitHub Pages.

This generator now supports multiple courses from a shared source root. Each course is a
subfolder under the pyRevit Course folder (for example, Python and SJ-trAIning).

## Workflow

PowerShell on some machines blocks npm.ps1 because of script-signing policy.
If that happens, use npm.cmd (or the cmd wrapper below) instead of npm.

1. Import all course subfolders from the network-drive source:

```bash
npm.cmd run lessons:import
```

2. Generate the static site:

```bash
npm.cmd run generate
```

3. Or run both steps together:

```bash
npm.cmd run site:update
```

4. One-click Windows cmd runner (bypasses npm.ps1 entirely):

```bat
site-update.cmd
```

5. Preview locally:

```bash
npm.cmd run preview
```

## Source Layout

- Imported source courses are copied into `content/courses/<course-slug>/lessons/`
- Generated title page is written to `index.html`
- Generated course pages are written to `courses/<course-slug>/index.html`
- Generated lesson pages are written to `courses/<course-slug>/lessons/<lesson-slug>/index.html`
- Shared site styles live in `styles.css`
- Build diagnostics are written to `generated/*.json`

## Notes

- The default source root is `P:\Production\Computational\RBG_pyRevit\pyRevit Course`
- Existing Markdown lessons are rendered directly.
- Existing lesson HTML files are supported as compatibility inputs.
- Import supports both `lesson xx` folders and flat files such as `lesson_01_topic.md` per course folder.
- Commit the generated output for GitHub Pages publishing.

