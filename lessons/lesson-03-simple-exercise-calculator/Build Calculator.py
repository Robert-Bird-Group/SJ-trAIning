# Learn about Input and Data Conversion

print("This is a simple 2 input calculator.")
str_num_a = input("Enter First Number: ")
str_num_b = input("Enter Second Number: ")

num_a = float(str_num_a)
num_b = float(str_num_b)

total = num_a + num_b
print("The total is: " + str(total))

#Data Type Functions
str()  # Convert to String
int()  # Convert to Integer
float()  # Convert to Float
bool()  # Convert to Boolean
list()  # Convert to List
tuple()  # Convert to Tuple
dict()  # Convert to Dictionary
set()  # Convert to Set

# Conversion Examples
s = "123"
i = int(s)  # Converts string to integer
f = float(s)  # Converts string to float
b = bool(s)  # Converts string to boolean (True if non-empty)
lst = list(s)  # Converts string to list of characters
t = tuple(s)  # Converts string to tuple of characters
d = dict(a=1, b=2)  # Creates a dictionary
st = set(s)  # Converts string to set of unique characters
#print(i, f, b, lst, t, d, st)

bool(0)  # False
bool(1)  # True
bool("")  # False
bool("Hello")  # True
bool([])  # False
bool([1, 2, 3])  # True
bool(None)  # False
bool({})  # False
bool({"key": "value"})  # True
bool(set())  # False
bool({1, 2, 3})  # True