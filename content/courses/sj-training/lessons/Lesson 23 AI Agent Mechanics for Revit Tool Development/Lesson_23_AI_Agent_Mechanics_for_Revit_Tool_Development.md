# Lesson 23 - AI Agent Mechanics for Revit Tool Development

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

- Understand tokens, context, memory, grounding, and why AI results degrade.
- Design AI workflows that use your toolbar context rather than guessing.
- Set governance rules for AI-assisted development.

## Why AI Gets Worse Over Time

AI output suffers when context is missing, stale, too broad, or contradictory. For pyRevit, that often means hallucinated API calls, unsafe transactions, or code that works outside Revit but not inside Revit.

## Key Concepts

### Tokens

The text budget AI reads and writes.

### Context Window

The current working memory of the agent.

### Persistent Memory

Useful for general preferences, but not enough for exact tool standards.

### Grounding

Giving AI reliable references: your codebase, API patterns, docs, rules, tests, and known failures.

## AI Governance Rules

```markdown
# AI Governance

- AI may draft code.
- AI may not approve deployment.
- AI may suggest API usage, but references or tests must verify it.
- AI may not receive confidential project data unless approved.
- Model-changing code must be reviewed by a human before use.
```

## Exercise

Write `ai_context/ai_governance.md` for your office toolbar.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- LearnRevitAPI pyRevit School public page: https://www.learnrevitapi.com/pyrevit-school

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
