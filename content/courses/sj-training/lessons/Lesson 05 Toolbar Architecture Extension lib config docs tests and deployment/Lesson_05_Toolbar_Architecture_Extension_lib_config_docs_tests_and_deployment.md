# Lesson 05 - Toolbar Architecture: Extension, lib, config, docs, tests, and deployment

---
course: LRA-Academy 3.0 Continuation
level: Post-Basics / Post-Advanced
assumption: Learner already understands Python fundamentals, pyRevit setup, Revit API basics, parameters, transactions, selections, collectors, docs, and WPF at least in theory.
style: Practical, office-deployment focused, AI-assisted, senior BIM technician workflow
---

> **Positioning**  
> This is not a beginner pyRevit course. Basics and Advanced have already covered Python syntax, pyRevit setup, Revit API documentation, selections, parameters, transactions, UI forms, and view automation.  
> This course treats those topics as prerequisite knowledge and only revisits them as quick refresh checkpoints where they support the larger goal: building, hardening, deploying, and scaling a reliable office toolbar with AI-assisted workflows.

## Module

**Module 02 - Production Architecture**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Design a scalable extension layout for office deployment.
- Create a structure that will support future tools, not just the first button.

## Production Toolbar Layout

A serious pyRevit toolbar needs more than pushbuttons.

```text
OfficeToolbar.extension/
â”œâ”€â”€ README.md
â”œâ”€â”€ CHANGELOG.md
â”œâ”€â”€ extension.json
â”œâ”€â”€ Toolbar.tab/
â”‚   â”œâ”€â”€ QA.panel/
â”‚   â”œâ”€â”€ Documentation.panel/
â”‚   â”œâ”€â”€ ModelManagement.panel/
â”‚   â””â”€â”€ Support.panel/
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ core/
â”‚   â”œâ”€â”€ revit/
â”‚   â”œâ”€â”€ ui/
â”‚   â”œâ”€â”€ reporting/
â”‚   â””â”€â”€ standards/
â”œâ”€â”€ config/
â”œâ”€â”€ docs/
â”œâ”€â”€ tests/
â”œâ”€â”€ ai_context/
â””â”€â”€ deployment/
```

## Separation of Responsibilities

### Button Script

Thin entry point. Gets Revit context, calls shared logic, presents result.

### lib/revit

Common collectors, parameter helpers, transaction helpers, view/sheet utilities.

### lib/reporting

Markdown reports, CSV exports, summary tables.

### config

Office standards, naming rules, default options, tool settings.

### docs

User-facing support and adoption docs.

### tests

Manual test scripts, test model notes, expected output examples.

## Anti-Pattern: Giant script.py

A single 800-line `script.py` is difficult to test, review, and reuse. A better button delegates to functions.

## Exercise: Create the Skeleton

Create the full production folder structure. Add placeholder README files to each major folder explaining its purpose.

## Source Notes

- pyRevit docs: https://docs.pyrevitlabs.io/
- pyRevit extension docs: https://pyrevit1.readthedocs.io/en/latest/creatingexts.html
- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)

## Completion Artefact

By the end of this lesson, produce the listed artefact and save it into your course workspace. This course is intentionally output-driven: every lesson should leave behind a tool, decision record, checklist, standard, test result, or deployment asset.

## Senior Reviewer Checklist

Before marking this lesson complete, check:

- The artefact supports a real Revit production workflow.
- Assumptions are documented.
- Risks are classified.
- AI-generated output has been reviewed manually.
- Any model-changing logic is isolated, tested, and reversible.
- Another competent pyRevit user could understand the intent without asking you directly.

## AI Sidekick Prompt

```text
Act as a senior pyRevit and Revit API reviewer.
Review this lesson artefact for reliability, maintainability, user safety, deployment readiness, and office adoption.
Assume I already know Python and pyRevit basics.
Do not reteach fundamentals unless they directly affect the risk or design decision.
```
