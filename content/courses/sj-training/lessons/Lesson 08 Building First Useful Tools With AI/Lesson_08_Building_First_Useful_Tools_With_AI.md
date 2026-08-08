# Lesson 08 - Building First Useful Tools With AI

## Turn a Problem Into a Tool

AI works better when your request is specific. Do not start with code. Start with a tool brief.

## 🧾 Tool Brief Template

```markdown
## Tool Name

## Problem

## User Input

## Expected Output

## Model Changes?
Yes / No

## Safety Notes
```

## Example Tool: Report Selected Elements

Goal: Select elements in Revit and report their category and id.

```python
uidoc = __revit__.ActiveUIDocument
doc = uidoc.Document

selection_ids = uidoc.Selection.GetElementIds()

for element_id in selection_ids:
    element = doc.GetElement(element_id)
    print(element.Id, element.Category.Name)
```

## 🔎 Review Before Running

Ask AI:

```text
Explain this pyRevit script line by line. Identify any assumptions or failure cases.
```

## 💪 Simple Exercise

Create a tool brief for one of these:

- Rename selected sheets
- Report selected family names
- List all views in the model
- Find elements in the active view by category

Then ask AI for a first draft and review it manually.

## ✅ Lesson Outcome

You can move from idea to controlled AI-assisted first draft.
