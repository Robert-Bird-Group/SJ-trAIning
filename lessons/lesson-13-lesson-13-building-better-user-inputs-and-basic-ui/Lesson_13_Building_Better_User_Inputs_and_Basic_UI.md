# Lesson 13 - Building Better User Inputs and Basic UI

## Why UI Matters

A good script can fail adoption if the user experience is confusing. Start simple and only add UI where it improves the workflow.

## pyRevit Form Examples

```python
from pyrevit import forms

choice = forms.SelectFromList.show(
    ['Option A', 'Option B', 'Option C'],
    title='Choose an Option'
)

forms.alert(f'You selected: {choice}')
```

## Good UI Rules

- Use clear labels
- Avoid too many choices
- Explain what will happen
- Provide cancellation paths
- Confirm risky actions

## When to Use WPF

Use WPF when you need:

- Multiple inputs
- Branded interfaces
- Larger forms
- More structured workflows

## 💪 Simple Exercise

Create a small selection form that lets the user choose a report type.

## ✅ Lesson Outcome

You can add simple, user-friendly input to pyRevit tools.
