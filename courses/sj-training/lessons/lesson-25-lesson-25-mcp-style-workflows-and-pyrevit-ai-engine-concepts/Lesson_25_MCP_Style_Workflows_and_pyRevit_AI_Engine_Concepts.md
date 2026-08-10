# Lesson 25 - MCP-Style Workflows and pyRevit AI Engine Concepts

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

- Understand the purpose of MCP-style integration without treating it as magic.
- Define what an AI agent can safely access and what must remain human-controlled.
- Plan an AI-assisted workflow around docs, codebase, tests, and Revit context.

## The Point of MCP-Style Workflows

The point is not to let AI freely drive Revit. The point is to give AI better context and controlled tools so it can assist with development, review, documentation, and workflows more reliably.

## Safe Access Layers

### Safe Early Access

- Documentation
- Tool standards
- Codebase files
- Test results
- Anonymised reports

### Higher Caution

- Live model data
- Project-specific standards
- File paths
- User activity logs

### Human Approval Required

- Model-changing actions
- Deployment actions
- Destructive edits
- Release decisions

## AI Engine Workflow

```markdown
# AI Engine Workflow

1. Read tool brief.
2. Read toolbar standards.
3. Read relevant approved patterns.
4. Draft plan.
5. Human approves plan.
6. Draft small code change.
7. Human tests in sample model.
8. AI updates docs and test plan.
```

## Exercise

Design a safe AI Engine workflow for one tool maintenance task.

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
