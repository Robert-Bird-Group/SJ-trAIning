# Lesson 12 - Error Handling and User-Safe Tool Behaviour

## Make Tools Fail Safely

Users should not see confusing Python tracebacks for normal mistakes. If they select the wrong thing, tell them clearly.

## Try / Except

```python
try:
    result = 10 / 0
except Exception as ex:
    print(f'Something went wrong: {ex}')
```

## Validate First

```python
selection_ids = uidoc.Selection.GetElementIds()

if not selection_ids:
    forms.alert('Please select at least one element.', exitscript=True)
```

## Confirm Destructive Actions

```python
confirmed = forms.alert(
    'This will rename selected views. Continue?',
    yes=True,
    no=True
)

if not confirmed:
    forms.alert('Cancelled.', exitscript=True)
```

## 💪 Simple Exercise

Add checks to one tool for:

- Empty selection
- Missing parameter
- Cancelled operation

## ✅ Lesson Outcome

You can make tools safer and more understandable for non-coder users.
