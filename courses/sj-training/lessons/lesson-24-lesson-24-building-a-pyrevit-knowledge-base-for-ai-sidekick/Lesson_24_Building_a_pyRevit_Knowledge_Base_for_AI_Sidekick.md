# Lesson 24 - Building a pyRevit Knowledge Base for AI Sidekick

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

- Create a curated internal knowledge base for AI-assisted tool development.
- Separate trusted patterns from experiments.
- Use lessons learned, docs, and code examples to make AI more reliable.

## What Goes Into the Knowledge Base?

```text
ai_context/knowledge_base/
â”œâ”€â”€ approved_patterns/
â”œâ”€â”€ rejected_patterns/
â”œâ”€â”€ api_notes/
â”œâ”€â”€ tool_examples/
â”œâ”€â”€ standards/
â”œâ”€â”€ test_failures/
â””â”€â”€ deployment_notes/
```

## Approved Pattern Example

```markdown
# Pattern: Preview Before Transaction

## Use When
Batch editing views, sheets, or parameters.

## Why
Users should see proposed changes before model edits occur.

## Required Steps
1. Collect candidates.
2. Build proposed changes.
3. Print preview.
4. Confirm.
5. Start transaction.
6. Commit and report.
```

## Rejected Pattern Example

```markdown
# Rejected Pattern: Hardcoded Project Parameter Names Without Fallback

## Why Rejected
Breaks on projects with different shared parameter naming.

## Better Pattern
Read parameter mapping from config.
```

## Exercise

Create five knowledge base notes based on your tool work so far.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- LearnRevitAPI public resources: https://www.learnrevitapi.com/
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
