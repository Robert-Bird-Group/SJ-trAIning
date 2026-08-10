# Lesson 02 - AI Development Operating System for pyRevit

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

- Create the working structure for AI-assisted pyRevit development.
- Separate project context, tool standards, API patterns, security rules, and test protocols.
- Stop using one-off prompts as the main development method.

## From Chat Prompt to Development OS

At this level, AI should not be a magic text box. AI should sit inside a controlled development operating system.

Create this folder inside your toolbar repo:

```text
ai_context/
â”œâ”€â”€ 00_role_and_rules.md
â”œâ”€â”€ 01_toolbar_architecture.md
â”œâ”€â”€ 02_revit_api_patterns.md
â”œâ”€â”€ 03_tool_standards.md
â”œâ”€â”€ 04_testing_protocol.md
â”œâ”€â”€ 05_security_privacy.md
â”œâ”€â”€ 06_known_failures.md
â””â”€â”€ 07_release_process.md
```

## 00 Role and Rules

```markdown
# AI Role and Rules

You are assisting with a pyRevit toolbar for Revit production use.
Do not explain beginner Python unless requested.
Focus on reliability, Revit API correctness, maintainability, and deployment.

## Non-Negotiables
- Identify model-changing operations before writing code.
- Use transactions only around model changes.
- Prefer small reviewable changes.
- List assumptions before code.
- Suggest test cases for every change.
- Never recommend running destructive code on live projects first.
```

## 02 Revit API Patterns

Capture proven patterns as you go:

```markdown
# Collector Pattern: All Sheets
Use this when building sheet QA reports.

# Transaction Pattern: Batch Parameter Update
Use this when updating writable instance parameters.

# Skip Pattern: Invalid Selection
Use this when a selection contains mixed element types.
```

## AI Interaction Modes

Use different prompts for different jobs:

- **Planner:** break down a tool idea
- **Reviewer:** inspect risk and correctness
- **Debugger:** explain traceback and propose minimal fix
- **Refactorer:** improve structure without changing behaviour
- **Documenter:** write README and adoption wiki
- **Release assistant:** draft changelog and pilot notes

## Exercise: Build the AI Context Pack

Create all eight context files and fill each with at least one useful rule or pattern from your current toolbar idea.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- LearnRevitAPI pyRevit School public page: https://www.learnrevitapi.com/pyrevit-school
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
