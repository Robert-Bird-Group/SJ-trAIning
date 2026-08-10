# Lesson 26 - Self-Iterating Development Loops with Human Guardrails

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

**Module 07 - AI Scale**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Use AI to improve tools iteratively without surrendering control.
- Create test-first improvement loops.
- Record AI changes in the changelog.

## The Loop

```text
Issue â†’ Test â†’ AI Plan â†’ Human Review â†’ Small Change â†’ Retest â†’ Document â†’ Release Decision
```

## Prompt Template

```text
Here is the tool brief, current code, and failing test.
Do not rewrite the full tool.
Suggest the smallest safe change.
Explain risks, assumptions, and how to test the change.
```

## Guardrails

- No full rewrites unless explicitly approved.
- No deployment without test evidence.
- No model-changing code without review.
- No hidden behaviour changes.
- Update documentation with every user-visible change.

## Exercise

Run one self-iteration cycle on a non-critical issue in your mini toolbar and record the result in `CHANGELOG.md`.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- LearnRevitAPI Challenge public page: https://www.learnrevitapi.com/pyrevit-challenge

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
