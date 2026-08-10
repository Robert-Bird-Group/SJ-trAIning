# Lesson 04 - Existing Code Audit: Converting Old Scripts into Tool Candidates

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

**Module 01 - AI Sidekick and Development System**

## Suggested Time

2 to 3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Audit existing pyRevit scripts for quality, risk, and reuse potential.
- Identify scripts that are prototypes, internal tools, deployable tools, or dead ends.
- Create a technical-debt register for the toolbar.

## Why Audit First?

Most teams already have scripts scattered through local folders, snippets, old experiments, or AI chats. Some are valuable. Some are risky. Some should never be deployed.

## Script Classification

Use four categories:

### Prototype

Works in one model or one user context. Useful for learning or proving logic.

### Internal Utility

Useful to you or BIM leads but not ready for broad users.

### Candidate Production Tool

Solves a recurring problem and can be hardened.

### Retire / Reference Only

Useful as learning material but unsafe or too brittle to maintain.

## Audit Checklist

```markdown
# Script Audit

## Script Name

## Current Location

## Purpose

## Reads / Writes Model Data

## Uses Transactions Correctly?

## Handles Empty Selection?

## Handles Missing Parameters?

## Revit Versions Known to Work

## Dependencies

## Documentation Exists?

## Classification
Prototype / Internal / Candidate / Retire

## Next Action
```

## Exercise: Audit Three Scripts

Choose three old scripts or AI-generated snippets and classify them. If you do not have old scripts, audit three candidate ideas using the same framework.

## Source Notes

- Prior-course screenshots supplied by user: Screenshots showing Basics and Advanced course coverage: Python, pyRevit setup, Revit API docs, selection, parameters, transactions, UI forms, and view automation
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
