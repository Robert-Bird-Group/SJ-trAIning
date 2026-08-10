# Lesson 13 - Testing Matrix: Revit Versions, Worksharing, ACC, Samples, and Pilot Models

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

- Define what must be tested before office rollout.
- Create a matrix that covers Revit version and project-context risk.
- Separate tests for read-only, low-risk edit, and high-risk edit tools.

## Test More Than the Happy Path

A pyRevit tool can pass in one sample model and still fail in production.

## Testing Matrix

```markdown
# Testing Matrix

| Test ID | Revit Version | Model Type | Workshared | ACC | Expected | Result |
|---|---|---|---|---|---|---|
| T001 | 2025 | Sample | No | No | Report runs | Pending |
| T002 | 2025 | Detached project | Yes | No | No ownership errors | Pending |
| T003 | 2026 | Cloud model copy | Yes | Yes | Report runs | Pending |
```

## Test Categories

### Functional

Does the tool do what it claims?

### Safety

Does it avoid unintended model changes?

### Data

Does it handle missing or unusual data?

### User

Can another user understand and run it?

### Deployment

Does it load from the target extension location?

## Exercise

Create a testing matrix for your Phase 1 milestone tool and run at least five tests.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- Autodesk transaction guide: https://help.autodesk.com/cloudhelp/2024/ENU/Revit-API/files/Revit_API_Developers_Guide/Basic_Interaction_with_Revit_Elements/Transactions/Revit_API_Revit_API_Developers_Guide_Basic_Interaction_with_Revit_Elements_Transactions_Transaction_Classes_html.html

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
