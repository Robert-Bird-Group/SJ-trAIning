# Lesson 06 - pyRevit Extension Structure and First Button

## What is a pyRevit Extension?

A pyRevit extension is a folder structure that tells pyRevit how to create tabs, panels, buttons, and scripts.

## 📦 Basic Structure

```text
MyTools.extension/
└── MyTools.tab/
    └── QA.panel/
        └── HelloRevit.pushbutton/
            └── script.py
```

Each folder controls part of the UI.

- `.extension` = your extension package
- `.tab` = ribbon tab
- `.panel` = ribbon panel
- `.pushbutton` = button
- `script.py` = code that runs when clicked

## 👋 First Button Script

```python
from pyrevit import forms

forms.alert('Hello Revit!', title='My First pyRevit Tool')
```

## 🔁 Reload pyRevit

After creating or changing buttons, reload pyRevit so the ribbon updates.

## 💪 Simple Exercise

Create a button called `About Tool` that displays:

- Tool name
- Your name
- Current purpose
- Version number

```python
from pyrevit import forms

message = '''
Tool: About Tool
Author: Your Name
Purpose: Test first pyRevit button
Version: 0.1
'''

forms.alert(message, title='About Tool')
```

## ✅ Lesson Outcome

You can create a pyRevit extension folder and run your first custom button.
