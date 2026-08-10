# Lesson 09 - Case Study 02: Controlled Batch Rename or Parameter Update

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

**Module 03 - Phase 1 Build With Confidence**

## Suggested Time

4 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Build a low-risk model-changing tool using confirmations and transactions.
- Report planned changes before committing.
- Use rollback-safe thinking and clear Revit Undo names.

## Why This Tool Matters

Batch edits are where pyRevit becomes powerful and dangerous. The goal is not to automate quickly. The goal is to automate predictably.

## Tool Concept Options

Choose one:

- Add a suffix to selected test views
- Update a non-critical parameter on selected elements
- Rename selected sheets in a sample model using a controlled rule

## Production Pattern

1. Collect scope
2. Validate scope
3. Build proposed change list
4. Show preview report
5. Ask for confirmation
6. Open transaction
7. Apply changes
8. Commit or rollback
9. Print final summary

## Preview Before Commit

```markdown
# Proposed Changes

| ElementId | Current | Proposed | Status |
|---|---|---|---|
```

## Exercise

Build a controlled batch update tool. It must support cancel before commit and must print skipped items.

## Source Notes

- Autodesk transaction guide: https://help.autodesk.com/cloudhelp/2024/ENU/Revit-API/files/Revit_API_Developers_Guide/Basic_Interaction_with_Revit_Elements/Transactions/Revit_API_Revit_API_Developers_Guide_Basic_Interaction_with_Revit_Elements_Transactions_Transaction_Classes_html.html
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
