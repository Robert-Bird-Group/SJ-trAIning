# Lesson 19 - Versioning, Git Workflow, Release Notes, and Rollback

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

**Module 06 - Office Deployment**

## Suggested Time

3 hours

## What This Lesson Assumes

You already understand the introductory version of this topic from the previous course. This lesson focuses on applying that knowledge to a deployable, maintainable, AI-assisted pyRevit workflow.

## Objectives

- Create a controlled release process for the toolbar.
- Use semantic versioning and changelogs.
- Define rollback steps before users receive updates.

## The Deployment Mindset

Once others use your toolbar, every change is a release.

## Versioning

```text
0.1.0 Prototype
0.2.0 Internal test
0.3.0 Pilot release
1.0.0 First office release
1.0.1 Bug fix
```

## Branching Model

A simple model is enough:

```text
main      = stable release
pilot     = pilot testing
feature/* = active development
```

## CHANGELOG Template

```markdown
# Changelog

## 0.3.0 - Pilot Release

### Added

### Changed

### Fixed

### Known Limitations

### Rollback Notes
```

## Rollback Plan

Every release should answer:

- Where is the previous version?
- How does a user return to it?
- Who decides rollback?
- How will users be notified?

## Exercise

Create `CHANGELOG.md` and `deployment/rollback_plan.md` for your toolbar.

## Source Notes

- Original LRA 3 outline: Uploaded PDF: LRA-Academy 3.0 - Founders 50 (August 2026)
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
