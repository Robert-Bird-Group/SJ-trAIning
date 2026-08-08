# Lesson 03 - Python Syntax, Variables, and Data Types

## What is Syntax?

Syntax is the grammar of a programming language. If you break the grammar, Python will not understand the instruction and you will get an error.

Do not panic when you see errors. Errors are feedback. They tell you where Python got confused.

## ✍️ Strings

Text in Python is called a **string**. Strings need to be inside quotes.

```python
name = 'Erik'
app = "Revit"
message = 'Python can automate Revit tasks'
```

You can use single quotes or double quotes. Just be consistent.

## # Comments in Python

Comments are notes ignored by Python.

```python
# This is a comment
name = 'Erik'  # This is also a comment
```

Use comments to help your future self understand the script.

## 📦 Variables

Variables are containers for values.

```python
user = 'Klaus'
app = 'Revit'
years = 5
```

Instead of repeating values everywhere, store them once and reuse them.

## Basic Data Types

```python
string_value = 'text'
integer_value = 10
float_value = 3.14
boolean_value = True
none_value = None
```

These are the basic building blocks for almost every script.

## 🔎 Check Variable Types

Use `type()` when you are not sure what kind of data you have.

```python
print(type(string_value))
print(type(integer_value))
print(type(float_value))
print(type(boolean_value))
print(type(none_value))
```

## String Formatting

Instead of joining strings with `+`, use f-strings.

```python
user = 'Klaus'
app = 'Revit'

print(f'Once upon a time, there was a {app} user named {user}.')
print(f'{user} wanted to automate repetitive tasks in {app}.')
```

This is cleaner and easier to read.

## 💪 Simple Exercise

Create variables for:

- Your name
- Your Revit version
- A repetitive task
- Estimated minutes wasted per day

Then print a short story using f-strings.

```python
name = 'Harley'
revit_version = 'Revit 2025'
task = 'renaming views'
minutes = 20

print(f'{name} uses {revit_version}.')
print(f'One repetitive task is {task}.')
print(f'This wastes about {minutes} minutes per day.')
```

## ✅ Lesson Outcome

You can now create variables, understand basic data types, use comments, and format readable strings.
