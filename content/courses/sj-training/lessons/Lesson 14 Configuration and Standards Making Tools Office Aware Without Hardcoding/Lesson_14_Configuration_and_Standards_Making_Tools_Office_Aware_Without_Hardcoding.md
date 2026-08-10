# Lesson 14 - Configuration and Standards: Making Tools Office-Aware Without Hardcoding

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

**Module 04 - Robust Tool Engineering**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Move standards out of scripts and into configuration.
- Support project-specific rule changes without rewriting code.
- Create a practical config strategy for naming, parameters, reports, and UI defaults.

## Hardcoding Is the Enemy of Deployment

This is fragile:

```python
required_prefix = 'S'
```

This is better:

```python
required_prefix = settings['sheet_prefix']
```

## Suggested Config Files

```text
config/
â”œâ”€â”€ naming_rules.json
â”œâ”€â”€ parameter_rules.json
â”œâ”€â”€ report_settings.json
â””â”€â”€ tool_defaults.json
```

## Naming Rules Example

```json
{
  "sheet_prefixes": ["S", "SK"],
  "forbidden_view_terms": ["copy", "temp", "delete"],
  "view_separator": " - "
}
```

## Config Governance

Decide:

- Who can edit config?
- How changes are reviewed?
- Whether config is project-specific or company-wide?
- What happens if config is missing or invalid?

## Exercise

Move at least one hardcoded standard from your tool into a config file and document the fallback behaviour.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
- pyRevit extension docs: https://pyrevit1.readthedocs.io/en/latest/creatingexts.html

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
