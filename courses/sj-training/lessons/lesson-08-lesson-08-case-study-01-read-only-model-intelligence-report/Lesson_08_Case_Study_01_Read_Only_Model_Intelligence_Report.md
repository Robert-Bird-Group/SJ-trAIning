# Lesson 08 - Case Study 01: Read-Only Model Intelligence Report

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

3 to 4 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Build a read-only QA tool that is safe enough to run early in projects.
- Combine collectors, standards config, and Markdown output.
- Use AI for review and test planning, not blind construction.

## Why Start Read-Only?

Read-only tools are ideal for LRA 3.0 because they create value without changing the model. They also reveal the inconsistency that later tools may need to fix.

## Tool Concept

Create a **Model Intelligence Report** that checks:

- Number of sheets
- Number of non-template views
- Views with forbidden words
- Sheets with missing or suspicious names
- Imported CAD instances if supported by your API pattern
- Revit links count if included in your scope

## Report Structure

```markdown
# Model Intelligence Report

## Summary

## Sheet Checks

## View Checks

## Link / Import Checks

## Recommendations

## Known Limitations
```

## Design Rules

- Do not modify the model.
- Use native collectors where practical.
- Separate collection from validation.
- Separate validation from reporting.
- Treat missing data as a report item, not a crash.

## Exercise

Build `Model Intelligence Report.pushbutton` using the scaffold. Keep implementation small enough for manual review.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- Revit API collector docs: https://www.revitapidocs.com/2026/263cf06b-98be-6f91-c4da-fb47d01688f3.htm
- Autodesk filtering guide: https://help.autodesk.com/cloudhelp/2024/ENU/Revit-API/files/Revit_API_Developers_Guide/Basic_Interaction_with_Revit_Elements/Filtering/Revit_API_Revit_API_Developers_Guide_Basic_Interaction_with_Revit_Elements_Filtering_Getting_filtered_elements_or_element_ids_html.html

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
