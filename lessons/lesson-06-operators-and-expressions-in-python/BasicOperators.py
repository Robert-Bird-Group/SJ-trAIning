# Basic Operators in Python
x = 10
y = 20
z = x + y

print(x, y, z)

print(x+y+z) #60

total = x+y+z
print(total) #60

#----------------------------------
# 🔠String Operators

### 1. Join Strings:
# Join Strings with +
a = "Hello "
b = "World"
c = a + b
print(c)

#PS You can put expression as an argument in print function:
print(a+b)

name = 'Erik'
print('My name is: ' + name)

### 2. Multiple Strings:
# Multiply Strings
print('Hello')
print('-'*100) #-----...
print('Hello\n'*100) #Hello\nHello\n...

### 3. Membership Operators:
# Membership Operator in/not in
message = 'We need to build a brick wall'
print('brick' in message)     #True
print('Brick' in message)     #False
print('glass' in message)     #False
print('glass' not in message) #True

### 4. Equality Operators:
# Equal/Not Equal operators (==, !=)
a = 'Concrete-10cm'
b = 'Concrete-20cm'

check = a==b
print(check) #False
print(a!=b) #True

#----------------------------------
# 🔢Numeric Operators
### 1. Arithmetic Operators:
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

### 2. Comparison Operators:
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

a = 3
b = 5

# Assign results of a==b expression to check variable:
check = a == b  #False

#----------------------------------
# 📦List/Tuple Operators
### 1. Join Lists (+)
mats_1 = ["Concrete", "Steel", "Glass"]
mats_2 = ["Wood", "Brick"]
mats_3 = mats_1 + mats_2
print(mats_3)

### 2. Membership Operators in Lists
#Membership Operators
print('Concrete' in mats_3) #True
print('Wool'     in mats_3) #False
print('Wool' not in mats_3) #True

### 3. Membership Operators in Lists
# Equality
print(mats_1 == mats_2) #False
print(mats_1 != mats_2) #True

### 4. Membership with Nested Lists
mats_2 = ["Wood", "Brick"]
mats_4 = [ ["Concrete", "Steel", "Glass"] ,
           ["Wood", "Brick"],
         ]

print(mats_2 in mats_4) #True

