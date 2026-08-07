# This is a comment

text = 'Text in python is called String'
text_2 = "You can use double quotes too"
text_3 = '''Or triple quotes for
multi-line strings'''

print(text)
print(text_2)
print(text_3 + '\n' + text)

print('\n')

# Useful shortcuts:
# Select all text and press Ctrl + / to comment or uncomment
# Select a block of text and press Tab to indent or Shift + Tab to unindent
# To select multiple lines, hold Alt and drag the mouse
# Select the same text in multiple places with Ctrl + D
# Press Ctrl + D to duplicate the current line or selection
# Press Ctrl + Space to trigger code completion suggestions


# Basic Data Types in Python
#------------------------------
string_var = "This is a string"  # String
int_var = 42                     # Integer
float_var = 3.14                 # Float
bool_var = True                  # Boolean
list_var = [1, 2, 3, 4, 5]       # List
dict_var = {'key1': 'value1', 'key2': 'value2'}  # Dictionary
set_var = {1, 2, 3}              # Set
tuple_var = (1, 2, 3)            # Tuple
none_var = None                  # NoneType

print('\n')

print(type(string_var))
print(string_var)
print(type(int_var))
print(int_var)
print(type(float_var))
print(float_var)
print(type(bool_var))
print(bool_var)
print(type(list_var))
print(list_var)
print(type(dict_var))
print(dict_var)
print(type(set_var))
print(set_var)
print(type(tuple_var))
print(tuple_var)
print(type(none_var))
print(none_var)

print('\n')

user = "Harley"
app = "Revit"

# Simple Exercise:
print('Once upon a time, there was a Revit user named Harley')
print('Harley loved to automate tasks using Python scripts')
print('One day, Harley wrote a script that saved hours of work!')   
print('Harley was so happy that they shouted "Python is awesome!"')
print('And from that day on, Harley used Python for all their Revit projects!')
print('The end.')

print('\n')

print('Once upon a time, there was a {} user named {}'.format(app, user))
print('{} loved to automate tasks using Python scripts'.format(user))
print('One day, {} wrote a Python script that saved hours of work in Revit!'.format(user, app))
print('{} was so happy that they shouted "Python is awesome!"'.format(user))
print('And from that day on, {} used Python for all their {} projects!'.format(user, app))
print('The end.')

print('\n')

# After python 3.6.6 you can use f-strings or .format() for easier string formatting
print(f'Once upon a time, there was a {app} user named {user}')

# Before python 3.6.6 you can use .format() for easier string formatting
print('Once upon a time, there was a {} user named {}'.format(app, user))

# Common Python Keywords and Built-in Functions
#------------------------------
print # prints a blank line
type # shows the type of a variable
len # length of a string or list
sum # sum of a list of numbers
range # range of numbers
filter # filter a list
map # map a function to a list
id # unique identifier of an object

# input # get user input
# def # define a function
# return # return a value from a function
# import # import a module
# as # alias for a module or variable
# from # import specific items from a module
# break # exit a loop
# continue # skip to the next iteration of a loop
# for # for loop
# if # if statement
# elif # else if statement
# else # else statement
# while # while loop
# try # try block for exception handling
# except # except block for exception handling
# finally # finally block for exception handling


str # class string
float # class float
list # class list
bool # class boolean
int # class integer
dict # class dictionary
set # class set
tuple # class tuple
None # special value meaning "no value here"
True # special boolean value
False # special boolean value