# Lesson 04 - User Input, Type Conversion, and a Simple Calculator

## How To Get User Input?

Python has a built-in function called `input()`.

```python
name = input('Enter your name: ')
print(f'Hello {name}')
```

The important rule is this:

> `input()` always returns a string.

That means if you ask for numbers, Python still receives text.

## 🧮 The String Problem

```python
num_a = input('Enter First Number: ')
num_b = input('Enter Second Number: ')

total = num_a + num_b
print(total)
```

If the user enters `2` and `3`, Python prints:

```text
23
```

Why? Because Python joined two strings together.

```python
'2' + '3' == '23'
```

## 🔁 Convert Strings to Numbers

Use `int()` for whole numbers.

```python
num_a = int(input('Enter First Number: '))
num_b = int(input('Enter Second Number: '))

total = num_a + num_b
print(total)
```

Now `2 + 3` becomes `5`.

## Floating Point Numbers

If you want decimals, use `float()`.

```python
num_a = float(input('Enter First Number: '))
num_b = float(input('Enter Second Number: '))

total = num_a + num_b
print(total)
```

Now values like `2.5` and `2.75` work properly.

## Common Conversion Functions

```python
str()    # Convert to string
int()    # Convert to integer
float()  # Convert to decimal number
bool()   # Convert to True or False
list()   # Convert to list where possible
set()    # Convert to unique collection
dict()   # Convert to dictionary where possible
```

## 💪 Simple Exercise: Revit Time Saver Calculator

Ask the user:

- How many minutes the task takes manually
- How many times they do it per week
- How many minutes the automated version takes

Then calculate weekly time saved.

```python
manual_minutes = float(input('Manual minutes per task: '))
weekly_count = float(input('Times per week: '))
automated_minutes = float(input('Automated minutes per task: '))

time_saved = (manual_minutes - automated_minutes) * weekly_count

print(f'Estimated weekly time saved: {time_saved} minutes')
```

## ✅ Lesson Outcome

You understand why user input arrives as text and how to convert values before using them in calculations.
