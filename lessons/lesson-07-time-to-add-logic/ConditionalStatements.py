# Time To Add Logic!

# Conditional Statements in Python
want_learn_more = True

if want_learn_more:
    continue_watching()

else:
    skip_to_next()  

#PS This code won't execute because of missing functions. 
# It's just an abstract example of logic using pseudo code.

#----------------------------------
# Basic Syntax of Conditional Statements
### 1. If Statement:
if 5>0:
    print('Condition was True.")

### Code Block - is a piece of code that is grouped under certain statements (including if statements). Many programing languages use curly braces {} to define the Start and the End of the code block, however python uses indentation.
### Identation - refers to the spaces or tabs at the beginning of a line of code. So in python all lines should be aligned to create a code block. Usually it's done with a single Tab or 4 spaces.

### Example:
if True:
    print('Condition was True.")


### 2. If Statement with Variable:
condition = 5>0

if condition:
    print(condition) #True

#----------------------------------
# More Logical Statements
### 1. If/Elif/Else Statements:

# Example A
condition  = True
condition2 = True

if condition:
    # Do action 🅰️
    print('A')
elif condition2:
    # Do action 🅱️
    print('B')
else:
    # Do something else
    print('C')

# Example B
condition  = True
condition2 = True

if condition:
    # Do action 🅰️
    print('A')

if condition2:
    # Do action 🅱️
    print('B')


# Example 1 : if/elif/else Statements
temp = 30

if temp > 25:
    print("It's really hot outside 🔥😎")

elif temp > 15:
    print("It's warm outside🌞")

elif temp > 0:
    print("It's chill outside🥶")

else:
    print("It's freezing cold☃️.")


# Comparison Operators in python
# COMPARISON OPERATORS
equal           = 5 == 5 # True
not_equal       = 3 != 3 # False
greater_than    = 7 > 5  # True
less_than       = 7 < 5  # False
greater_than_eq = 5 >= 5 # True
less_than_eq    = 5 >= 6 # False


# Logical Operators (And/Or/Not)
# LOGICAL OPERATORS
logical_and = True and True # True
logical_or  = True or False # True
logical_not = not True      # False


# Example 2: Combine Conditions
X = 20
Y = 40

if X > 0 and X < 100 and Y >0 and Y < 100:
    print('XY Coordinate is good.')

# The above statement can be written in a better way like this:
if X > 0:
    if X < 100:
        if Y > 0:
            if Y < 100:
                print('XY Coordinate is good.')

# Logical or Example:
selection = ['wall', 'floor', 'roof']

if ('wall' in selection
    or 'window' in selection
    or 'generic' in selection):
    print('We selected at least one valid element.')


# MEMBERSHIP OPERATORS
member_in     = 'wood'     in ['metal', 'concrete', 'wood']     # True
member_in     = 'w'        in 'wood'                            # True
member_not_in = 'wood' not in ['metal', 'concrete', 'bricks']   # True


# Example 3: Nested Statements
# Max Sizes
max_width = 1500
max_height = 3000

# Ordered Sizes
panel_W = 2000
panel_H = 2500

# Status
is_panel_allowed = True # Default Value

# Check Width
if panel_W <= 1500:
    print('Width: GOOD.')
else:
    print('Width: NOT GOOD.')
    is_panel_allowed = False

# Check Height
if panel_H <= 3000:
    print('Height: GOOD.')

else:
    print('Height: NOT GOOD.')
    is_panel_allowed = False

print('Is Panel Allowed: {}'.format(is_panel_allowed))
