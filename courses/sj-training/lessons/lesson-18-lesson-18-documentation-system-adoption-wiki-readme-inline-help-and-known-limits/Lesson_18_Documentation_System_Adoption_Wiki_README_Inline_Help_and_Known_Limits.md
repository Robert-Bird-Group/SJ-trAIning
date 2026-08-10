# Lesson 18 - Documentation System: Adoption Wiki, README, Inline Help, and Known Limits

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

**Module 05 - Adoption and User Experience**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Create documentation that supports users after deployment.
- Turn tool behaviour into user-facing workflow instructions.
- Document known limitations honestly to build trust.

## Adoption Wiki Structure

```markdown
# Tool Name

## What It Does

## What It Does Not Do

## Who Should Use It

## Before You Run It

## Step-by-Step

## How to Read the Results

## Known Limitations

## Troubleshooting

## Feedback
```

## Write for a Revit User

Bad:

```text
Iterates ViewSheet elements through FilteredElementCollector.
```

Good:

```text
Checks every sheet in the current model and reports sheet names or numbers that may not meet the issue standard.
```

## Known Limits Are Not Weakness

Known limits reduce misuse.

Example:

```markdown
## Known Limitations

- Does not check linked models.
- Does not edit sheet names.
- Does not validate project-specific client naming unless the config file has been updated.
```

## Exercise

Write a complete Adoption Wiki page for your milestone tool.

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
