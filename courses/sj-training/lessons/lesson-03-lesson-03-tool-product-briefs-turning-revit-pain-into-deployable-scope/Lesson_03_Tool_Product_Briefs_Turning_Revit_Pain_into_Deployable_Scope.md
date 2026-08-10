# Lesson 03 - Tool Product Briefs: Turning Revit Pain into Deployable Scope

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

2 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Convert vague automation ideas into scoped tool briefs.
- Separate user value, data access, Revit API logic, UI, testing, and deployment risk.
- Create a specification that AI can assist with reliably.

## The Problem with Vague Tool Ideas

A vague idea like **make model QA easier** is too broad for AI and too broad for deployment.

A deployable tool begins with a tight product brief:

```markdown
# Tool Brief

## Tool Name

## Target User

## Current Manual Workflow

## Pain / Risk

## Desired Outcome

## Input Scope
Selection / Active View / Whole Document / Linked Models / External File

## Output
Report / Model Change / Export / UI Feedback

## Revit API Objects Needed
Views / Sheets / Parameters / Families / Links / Worksets / Warnings

## Change Risk
None / Low / Medium / High

## Failure Cases

## Test Models Needed

## Definition of Done
```

## Scope Control

Good LRA 3.0 scope:

- One tool does one workflow well.
- The tool can be tested in a sample model.
- The first version reports before it changes.
- The risk level is written down.

Poor scope:

- One button attempts to fix all model issues.
- Behaviour changes based on undocumented assumptions.
- AI is expected to infer office standards.
- There is no rollback plan.

## Exercise: Write Three Briefs

Write briefs for three candidate tools:

1. A read-only QA reporter
2. A controlled batch editor
3. An adoption/support tool

Then choose one as your Phase 1 build target.

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
