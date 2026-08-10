# Lesson 29 - Capstone Build Sprint: Office Toolbar Release Candidate

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

**Module 09 - Capstone**

## Suggested Time

6 to 10 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Assemble the release candidate toolbar.
- Verify all technical, documentation, deployment, and AI assets exist.
- Prepare for final review.

## Release Candidate Package

```text
OfficeToolbar.extension/
â”œâ”€â”€ README.md
â”œâ”€â”€ CHANGELOG.md
â”œâ”€â”€ extension.json
â”œâ”€â”€ Toolbar.tab/
â”œâ”€â”€ lib/
â”œâ”€â”€ config/
â”œâ”€â”€ docs/
â”œâ”€â”€ tests/
â”œâ”€â”€ deployment/
â””â”€â”€ ai_context/
```

## Required Tools

Include 2 to 5 tools. Recommended mix:

- One read-only QA reporter
- One controlled batch editor
- One support/adoption utility
- One documentation/view/sheet productivity tool
- Optional advanced workflow prototype

## Final Pre-Release Review

```markdown
# Release Candidate Review

## Included Tools

## Excluded Tools and Why

## Known Limitations

## Test Evidence

## Deployment Method

## Support Process

## AI Governance Complete?

## Release Decision
```

## Exercise

Assemble the release candidate package and complete the review document.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- pyRevit docs: https://docs.pyrevitlabs.io/
- pyRevit extension docs: https://pyrevit1.readthedocs.io/en/latest/creatingexts.html

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
