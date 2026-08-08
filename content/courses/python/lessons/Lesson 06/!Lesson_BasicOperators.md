# Operators and Expressions in Python
Let's start with the basics so we're on the same page.

**Operator** - is a special symbol or keyword that can be used to perform a specific operation on one or more variables (e.g. +, -, >, in,). They are used in expressions to perform arithmetic, comparison or logical evaluations.

**Expression** - is a piece of code that produces a value when evaluated. It can be as simple as adding 2 numbers together (e.g.2+2 or a+b ).

For example, we can define a few variables, and then calculate another one by creating an expression. In this case let's sum 2 numbers together.

~~~py
x = 10
y = 20
z = x + y

print(x, y, z)
~~~

Also note that you don't always have to assign your expression to a variable. You can use it directly as an argument in functions.

~~~py
print(x+y+z) #60

total = x+y+z
print(total) #60
~~~

The only notable difference is that you will be able to reuse total variable later in the code if necessary. Otherwise it serves no purpose.

💡I know it's simple, but beginners start to get confused with this on bigger examples sometimes. So it's worth repeating.

Now let's go through the common DataTypes and look at their operators and what kind of results we can get. And why?


# 🔠String Operators

We are ready to dive into operators, and let's begin with String operators.

Firstly, you need to know that you can concatenate strings(fancy word meaning 'join' text in programming).

### 1. Join Strings:

~~~py
a = "Hello "
b = "World"
c = a + b
print(c)

#PS You can put expression as an argument in print function:
print(a+b)
~~~

Here's another example:

~~~py
name = 'Erik'
print('My name is: ' + name)
~~~

### 2. Multiple Strings:
You can also multiply your strings. Then they will be repeated n-times.

I often use it to create a long line of dashes in the console when I print.

~~~py
# Multiply Strings
print('Hello')
print('-'*100) #-----...
print('Hello\n'*100) #Hello\nHello\n...
~~~

>### 💡Notice that \n is a special combination inside a string to create a New-Line.

### 3. Membership Operators:
Strings also have membership operators to check if certain value is part of another string. There are 2 keyword:
- in
- not in

Here is how to use them:

~~~py
# Membership Operator in/not in
message = 'We need to build a brick wall'
print('brick' in message)     #True
print('Brick' in message)     #False
print('glass' in message)     #False
print('glass' not in message) #True
~~~

>### 💡Note that lowercase and uppercase are 2 different characters.

### 4. Equality Operators:
Similar to membership operators, we can also check if strings are equal or not equal. And we use the following symbols:
- == - Equal
- != - Not Equal

>### ⚠️ Do not confuse **double(==)** and **single(=)** equal signs. One is used to assign data or expression to a variable the other is used in logical checks.

Here is an example:

~~~py
# Equal/Not Equal operators (==, !=)
a = 'Concrete-10cm'
b = 'Concrete-20cm'

check = a==b
print(check) #False
print(a!=b) #True
~~~

# 🔢Numeric Operators
Now let's look into Numeric Operators.
There are 2 main categories:
- Arithmetic Operators
- Comparison Operators.

### 1. Arithmetic Operators:
Let's start with Arithmetic. It's simple mathematical operations to add, subtract values. I won't go into detail, you all already know it well:

~~~py
a = 10
b = 3
print("a: " + str(a))
print("b: " + str(b))
print('-'*50)

# Arithmetic Operators
print("a + b =", a + b)     # 10 + 3 = 13           (Addition)
print("a - b =", a - b)     # 10 - 3 = 7            (Subtraction)
print("a * b =", a * b)     # 10 * 3 = 30           (Multiplication)
print("a / b =", a / b)     # 10 / 3 ≈ 3.3333       (Division)
print("a // b =", a // b)   # 10 // 3 = 3           (Floor Division)
print("a % b =", a % b)     # 10 % 3 = 1            (Modulo)
print("a ** b =", a**b)     # 10 ** 3 = 1000        (Numeric Power)
~~~

However, notice that there are 3 new ones:
- // - Floor division which rounds a value to a lower integer.
- % - Mod, which returns the remainder after the division.
- ** - Power, which set the value in the power (2-square, 3-cube…)

The rest is just simple math.

### 2. Comparison Operators:
There are also comparison operators to create logical checks.

We will cover how to create logical statements in another lesson, for now just focus on the logical operators. The goal is to get True or False value from logical expression.

Here is an example:

~~~py
a = 10
b = 3
print("a: " + str(a))
print("b: " + str(b))
print('-'*50)

# Comparison Operators
print("a > b =", a > b)     # 10 > 3 = True         (Greater Than)
print("a < b =", a < b)     # 10 < 3 = False        (Less Than)
print("a >= b =", a >= b)   # 10 >= 3 = True        (Greater Than or Equal To)
print("a <= b =", a <= b)   # 10 <= 3 = False       (Less Than or Equal To)
print("a == b =", a == b)   # 10 == 3 = False       (Equality)
print("a != b =", a != b)   # 10 != 3 = True        (Inequality)
~~~

>### 💡 Also, do not confuse single(=) and double(==) equal signs. One is used to assign data to variables, the other to check if variables are equal.

~~~py
a = 3
b = 5

# Assign results of a==b expression to check variable:
check = a == b  #False
~~~

# 📦List/Tuple Operators
Lastly, let's look into list and tuple operators and keep in mind that they use the same ones. So, I will only show examples using lists, and you can adjust them for tuples.

Lastly, let's also look into lists and we are going to begin with a basic one.

### 1. Join Lists (+)

~~~py
mats_1 = ["Concrete", "Steel", "Glass"]
mats_2 = ["Wood", "Brick"]
mats_3 = mats_1 + mats_2
print(mats_3)
~~~

You can take multiple lists and join them together using + symbol. Logical, right?

### 2. Membership Operators in Lists
Similar to strings we can also use Membership operators in lists using in and not in keywords. It works exactly the same:

~~~py
#Membership Operators
print('Concrete' in mats_3) #True
print('Wool'     in mats_3) #False
print('Wool' not in mats_3) #True
~~~

### 3. Membership Operators in Lists
And we can also check if our lists are equal or not equal using == or != symbols.

Here is a comparison.

~~~py
# Equality
print(mats_1 == mats_2) #False
print(mats_1 != mats_2) #True
~~~

### 4. Membership with Nested Lists
Also, remember that you can create nested lists, and you can also check if certain list is a part of another list. But it only works if you have a list inside of a list.

~~~py
mats_2 = ["Wood", "Brick"]
mats_4 = [ ["Concrete", "Steel", "Glass"] ,
           ["Wood", "Brick"],
         ]

print(mats_2 in mats_4) #True
~~~

If you are trying to check if all values of one list are inside of another list , then you would need to do it differently using loops. More on loops in another lesson…
