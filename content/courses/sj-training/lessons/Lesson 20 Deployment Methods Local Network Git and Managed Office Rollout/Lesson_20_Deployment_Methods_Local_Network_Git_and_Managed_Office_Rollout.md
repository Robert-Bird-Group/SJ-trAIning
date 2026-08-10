# Lesson 20 - Deployment Methods: Local, Network, Git, and Managed Office Rollout

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

**Module 06 - Office Deployment**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Compare practical deployment methods.
- Choose an approach for a small pilot and a wider office rollout.
- Document installation and update behaviour.

## Deployment Options

### Local Copy

Useful for development, not good for updates.

### Shared Network Folder

Good for small teams if path stability and permissions are managed.

### Git Clone / Pull

Good for teams comfortable with Git and controlled updates.

### Managed IT Package

Best for larger offices with formal software control.

## pyRevit Loading Strategy

Your users need pyRevit configured to load your custom extension location. Avoid editing pyRevit core folders.

## Install Guide Template

```markdown
# Install Guide

## Prerequisites

## Extension Location

## pyRevit Settings

## First Load Test

## Updating

## Uninstall / Disable

## Support
```

## Exercise

Write an install guide for your selected deployment method.

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
