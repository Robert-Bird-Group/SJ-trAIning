# Lesson 06 - Quick Revit API Refresh for Production Decisions

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

**Module 02 - Production Architecture**

## Suggested Time

90 minutes

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Refresh only the API concepts that affect production tool decisions.
- Connect collectors, parameters, and transactions to risk-based architecture.
- Document the patterns your toolbar will use repeatedly.

## This Is Not a Beginner API Lesson

The prior course already covered selection, looking inside elements, parameters, making changes, and getting elements. This lesson is only a production checkpoint.

## Collector Decision

Ask:

- Is the scope user selection, active view, entire document, or linked document?
- Do you need elements or only ids?
- Can native filters reduce the result before Python loops?

Pattern:

```python
collector = FilteredElementCollector(doc).OfClass(ViewSheet)
sheets = collector.ToElements()
```

## Parameter Decision

Ask:

- Is the parameter built-in, shared, project, instance, or type?
- Is it read-only?
- What storage type does it use?
- Is internal units conversion required?

## Transaction Decision

Ask:

- Can the tool report first?
- How many changes happen in one transaction?
- What does the Undo name say?
- What happens on failure?

## Exercise: Pattern Register

Create `ai_context/02_revit_api_patterns.md` and add quick production patterns for:

- All sheets
- All non-template views
- Selected element parameter read
- Safe transaction wrapper
- Skip invalid element and continue

## Source Notes

- Prior-course screenshots supplied by user: Screenshots showing Basics and Advanced course coverage: Python, pyRevit setup, Revit API docs, selection, parameters, transactions, UI forms, and view automation
- Revit API collector docs: https://www.revitapidocs.com/2026/263cf06b-98be-6f91-c4da-fb47d01688f3.htm
- Autodesk filtering guide: https://help.autodesk.com/cloudhelp/2024/ENU/Revit-API/files/Revit_API_Developers_Guide/Basic_Interaction_with_Revit_Elements/Filtering/Revit_API_Revit_API_Developers_Guide_Basic_Interaction_with_Revit_Elements_Filtering_Getting_filtered_elements_or_element_ids_html.html
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
