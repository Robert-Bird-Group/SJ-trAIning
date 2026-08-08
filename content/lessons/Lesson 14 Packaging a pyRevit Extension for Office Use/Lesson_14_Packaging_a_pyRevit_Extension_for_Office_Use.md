# Lesson 14 - Packaging a pyRevit Extension for Office Use

## From Script to Extension

A production toolbar needs structure. Keep test tools, production tools, shared code, icons, and documentation organised.

## Recommended Structure

```text
RBGTools.extension/
├── extension.json
├── RBG.tab/
│   ├── QA.panel/
│   └── Sheets.panel/
└── lib/
    └── shared_helpers.py
```

## Versioning

Use clear version numbers.

```text
0.1 - internal draft
0.2 - tested with pilot user
1.0 - first production release
```

## Release Notes

```markdown
# Release Notes

## v0.2
- Added empty selection check
- Improved error message
- Updated README
```

## 💪 Simple Exercise

Reorganise one tool into a clean extension folder and add a `README.md`.

## ✅ Lesson Outcome

You can package tools in a way that supports deployment and maintenance.
