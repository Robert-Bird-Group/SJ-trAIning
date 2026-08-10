# Lesson 17 - Production UX: Simple Forms, WPF Touchpoints, Tooltips, and User Trust

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

**Module 05 - Adoption and User Experience**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Use UI knowledge from the previous course at production level.
- Choose between alerts, forms, output panels, Markdown reports, and WPF windows.
- Design UX that makes tools trustworthy for non-coder users.

## This Is Not a WPF Basics Lesson

The previous course already introduced UI forms and WPF. Here the question is: **What UI does this tool need to be adopted safely?**

## UI Decision Guide

### Use Alert

For short messages, cancellations, and confirmations.

### Use SelectFromList

For one controlled choice.

### Use Output Panel

For detailed QA reports.

### Use WPF

For multi-field workflows, validation, preview tables, or branded production tools.

## Trust-Building UI Details

- Tell users what will change before it changes.
- Use plain Revit workflow language.
- Show version and tool owner for office tools.
- Provide a support link or note.
- Make cancel obvious.

## Tooltip Standard

```yaml
title: Sheet QA Report
tooltip: Checks sheets for missing names, suspicious numbering, and issue-readiness. Does not modify the model.
author: BIM Team
```

## Exercise

Rewrite the tooltip, first prompt, success message, and failure message for your tool.

## Source Notes

- Prior-course screenshots supplied by user: Screenshots showing Basics and Advanced course coverage: Python, pyRevit setup, Revit API docs, selection, parameters, transactions, UI forms, and view automation
- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- pyRevit docs: https://docs.pyrevitlabs.io/

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
