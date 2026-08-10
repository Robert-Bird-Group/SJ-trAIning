# Lesson 07 - Tool Scaffold Generator: Standardising New Buttons

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

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Reduce setup time and enforce consistency.
- Prepare AI to generate tools into a known structure.

## Why Scaffold?

If every tool is started differently, every tool will behave differently. A scaffold gives your future self and AI assistant a fixed target.

```text
ToolName.pushbutton/
â”œâ”€â”€ script.py
â”œâ”€â”€ README.md
â”œâ”€â”€ icon.png
â””â”€â”€ tests.md
```

## Standard script.py Shape

```python
# -*- coding: utf-8 -*-
"""Tool Name
Short user-facing description.
"""

from pyrevit import forms, script

uidoc = __revit__.ActiveUIDocument
doc = uidoc.Document
output = script.get_output()

TOOL_NAME = 'Tool Name'
VERSION = '0.1.0'

def main():
    output.print_md('# {}'.format(TOOL_NAME))
    output.print_md('Version: {}'.format(VERSION))

    # validate
    # collect
    # process
    # report

if __name__ == '__main__':
    main()
```

## Standard tests.md

```markdown
# Tool Tests

## Test Model

## Happy Path

## Empty Input

## Wrong Input

## Missing Data

## Workshared Model Notes

## Revit Version Notes
```

## Exercise: Build the Scaffold

## Source Notes

- pyRevit extension docs: https://pyrevit1.readthedocs.io/en/latest/creatingexts.html
- pyRevit docs: https://docs.pyrevitlabs.io/

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
