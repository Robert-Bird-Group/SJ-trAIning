# Lesson 07 - Revit API Foundations for pyRevit

## What is the Revit API?

The Revit API is the programming interface that lets your script read or modify the Revit model.

## Important Objects

```python
uidoc = __revit__.ActiveUIDocument
doc = uidoc.Document
active_view = doc.ActiveView
```

- `uidoc` gives access to user selections and UI-level actions
- `doc` gives access to the Revit model database
- `active_view` is the currently open view

## 🔎 Reading Elements

```python
from Autodesk.Revit.DB import FilteredElementCollector, View

views = FilteredElementCollector(doc).OfClass(View).ToElements()
print(len(views))
```

## ✍️ Transactions

If you modify the model, you need a transaction.

```python
from Autodesk.Revit.DB import Transaction

t = Transaction(doc, 'Rename Active View')
t.Start()
active_view.Name = active_view.Name + ' - TEST'
t.Commit()
```

## ⚠️ Safety Rule

Never run model-changing code on a live project until you have tested it in a safe model.

## 💪 Simple Exercise

Write a script that prints:

- Active view name
- Active view id
- Document title

## ✅ Lesson Outcome

You understand the basic Revit API entry points used in most pyRevit tools.
