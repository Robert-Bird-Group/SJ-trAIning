# Lesson 05 - Lists, Dictionaries, and Simple Data Structures

## Time to Practice

Lists and dictionaries help you store multiple pieces of information. This is essential for pyRevit scripts because you often collect elements, parameters, view names, sheet numbers, or user choices.

## 🎒 Lists

A list stores multiple values in order.

```python
views = ['Level 01', 'Level 02', 'Roof Plan']
print(views)
```

Add items:

```python
views.append('Section A')
```

Remove items:

```python
views.remove('Roof Plan')
```

Count items:

```python
print(len(views))
```

## 📞 Dictionaries

A dictionary stores related keys and values.

```python
sheet = {
    'Sheet Number': 'S101',
    'Sheet Name': 'Ground Floor Framing Plan',
    'Status': 'For Review'
}

print(sheet['Sheet Number'])
```

## 🔎 Why This Matters in Revit

A pyRevit tool might collect data like this:

```python
view_data = {
    'Name': 'Level 01 Structural Plan',
    'Scale': 100,
    'Discipline': 'Structural'
}
```

Now you can pass structured data around your script instead of juggling unrelated variables.

## 💪 Simple Exercise

Create a list of sheet numbers. Then create a dictionary for one sheet.

```python
sheets = ['S001', 'S101', 'S102']

sheet_info = {
    'Number': 'S101',
    'Name': 'Level 01 Framing Plan',
    'Checked': False
}

print(sheets)
print(sheet_info)
```

## ✅ Lesson Outcome

You can use lists and dictionaries to structure basic Revit-related data.
