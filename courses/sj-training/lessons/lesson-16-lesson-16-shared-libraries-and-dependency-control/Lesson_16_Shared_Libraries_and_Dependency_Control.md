# Lesson 16 - Shared Libraries and Dependency Control

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

**Module 04 - Robust Tool Engineering**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Refactor repeated code into shared libraries.
- Create stable helper modules for collectors, parameters, reporting, and UI.
- Avoid dependency chaos during deployment.

## When to Move Code to lib

Move logic when:

- Two or more tools need it
- The logic is stable
- The logic can be tested separately
- The function name explains the intent

## Suggested Library Layout

```text
lib/
â”œâ”€â”€ revit_collectors.py
â”œâ”€â”€ revit_parameters.py
â”œâ”€â”€ revit_transactions.py
â”œâ”€â”€ ui_helpers.py
â”œâ”€â”€ report_helpers.py
â””â”€â”€ standards.py
```

## Example Helper Contract

```python
def get_all_sheets(doc):
    """Return all ViewSheet elements in the document."""
    pass
```

A good helper hides repetitive API detail without hiding dangerous behaviour.

## Dependency Rule

Prefer built-in pyRevit/Revit API modules and plain Python where possible. External packages complicate deployment and version compatibility.

## Exercise

Create at least two shared helper modules and refactor your tool to use them.

## Source Notes

- pyRevit extension docs: https://pyrevit1.readthedocs.io/en/latest/creatingexts.html
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
