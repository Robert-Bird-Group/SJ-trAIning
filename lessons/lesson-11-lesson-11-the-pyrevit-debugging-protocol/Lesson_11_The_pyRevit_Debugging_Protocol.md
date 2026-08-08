# Lesson 11 - The pyRevit Debugging Protocol

## Why Debugging Matters

A tool that works once is not the same as a tool your office can trust. Debugging is the process of finding, understanding, and fixing failure points.

## 🧪 Debugging Protocol

1. Reproduce the issue
2. Identify the exact error message
3. Simplify the test case
4. Check assumptions
5. Add temporary print statements
6. Fix one issue at a time
7. Retest the original workflow
8. Document the cause and fix

## Common pyRevit Failure Points

- Empty user selection
- Wrong active view type
- Missing parameters
- Read-only parameters
- Elements from linked models
- Workshared ownership issues
- Revit version differences

## 💪 Simple Exercise

Take one existing script and intentionally test it with:

- No selection
- Wrong selection
- A view where it should not run

Write down what breaks and why.

## ✅ Lesson Outcome

You can debug pyRevit tools systematically instead of guessing.
