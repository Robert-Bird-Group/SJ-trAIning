# Lesson 09 - Reviewing and Refactoring AI-Written Code

## What is Refactoring?

Refactoring means improving code structure without changing what the code does.

First drafts are often messy. That is fine. But before sharing a tool, clean it up.

## 🔎 Things to Check

- Are variable names clear?
- Is repeated code turned into functions?
- Are comments useful?
- Are assumptions listed?
- Does the script fail safely?
- Can another person understand it?

## Before

```python
x = uidoc.Selection.GetElementIds()
for i in x:
    e = doc.GetElement(i)
    print(e.Name)
```

## After

```python
selected_element_ids = uidoc.Selection.GetElementIds()

for element_id in selected_element_ids:
    element = doc.GetElement(element_id)
    print(element.Name)
```

## 🧠 AI Review Prompt

```text
Review this pyRevit script for readability, safety, and beginner clarity.
Do not rewrite everything at once.
First list the main issues, then suggest small improvements.
```

## 💪 Simple Exercise

Take one AI-generated script and improve:

- 3 variable names
- 1 repeated block
- 2 comments
- 1 error message

## ✅ Lesson Outcome

You can improve AI-written code so it is easier to maintain and explain.
