# Collection Data Types in Python

# List - Ordered, Mutable, Allows Duplicates
print("List Operations:")
my_list = []
my_list = ['Wall', 'Roof', 'Floor', 'Column', 'Beam', 'Column']
print("List:", my_list)
print("List Element at Index 2:", my_list[2]) # Third item
print("List Element at Index -1 (Last):", my_list[-1]) # Last item
print("List Element at Index -3:", my_list[-3]) # Third last item
print("List Slice [1:4]:", my_list[1:4]) # Slice from index 1 to 3
print("List Slice [:3]:", my_list[:3]) # First three items
print("List Slice [3:]:", my_list[3:]) # From index 3 to end
print("List Slice [::2]:", my_list[::2]) # Every second item
print("List Slice [1:5:2]:", my_list[1:5:2]) # From index 1 to 4, every second item
print("List Length:", len(my_list)) # Length of list

# Membership Operators
print("\n\nMembership Tests:")
print("Is 'Wall' in List?", 'Wall' in my_list)  # True
print("Is 'Door' not in List?", 'Door' not in my_list)  # True
print("Is 'Beam' in List?", 'Beam' in my_list)  # True
print("Count of 'Column':", my_list.count('Column'))  # Count occurrences of 'Column'
print("Index of first 'Column':", my_list.index('Column'))  # Index of first occurrence of 'Column'

# Methods with String Lists
print("\n\nList Methods:")
my_list.append('Raking Column')  # Add element
my_list.extend(['Column', 'Column', 'Beam']) # Add multiple elements
my_list.insert(2, 'Window')  # Insert element at index 2
print("\nList after Append, Extend, Insert:", my_list)
my_list[1] = 'Door'  # Update element at index 1
print("List after Update:", my_list)
List2 = my_list.pop()  # Remove and return last element
print("Popped Item:", List2)
print("List after Pop:", my_list)
my_list.sort()  # Sort list
print("Sorted List:", my_list) # Alphabetically sorted
my_list.remove('Wall')  # Remove element
print("List after Removing 'Wall':", my_list)
copy = my_list.copy()  # Create a copy of the list
print("Copied List: 'copy'", copy)
copy.append('New Item')
print("Modified Copied List:", copy)
print("Original List after Copy Modification:", my_list)  # Original list remains unchanged
my_list.clear()  # Clear all elements
print("Cleared List:", my_list)
print("Cleared List Length:", len(my_list))
print("Is List Empty?", len(my_list) == 0)  # Check if list is empty
print("Is List Not Empty?", len(my_list) != 0)  # Check if list is not empty
my_list = copy  # Restore original list from copy
print("Restored List:", my_list)

# Functions with Integer/Float Lists
print("\n\nFunctions with Number Lists:")
numbers = [40, 50, 30, 10, 20]
print("\nNumbers List:", numbers)
print("Max:", max(numbers))  # Maximum value
print("Min:", min(numbers))  # Minimum value
print("Sum:", sum(numbers))  # Sum of values
print("Sorted:", sorted(numbers))  # Sorted list
print("Reversed:", list(reversed(numbers)))  # Reversed list

# Nested Lists
print("\n\nNested List Operations:")
nested_list = [
            ['Wall', 'Roof'],
            ['Floor', 'Column'],
            ['Beam', 'Window']
        ]
print("\n\nNested List:", nested_list)
print("Element at [1][0]:", nested_list[1][0])  # Accessing nested element
print("Nested List Length:", len(nested_list))  # Length of nested list
print(nested_list[0])  # First sub-list
print(nested_list[1][1])  # Accessing 'Column' in second sub-list
print(nested_list[2][1])  # Accessing 'Window' in third sub-list

# Loops with Lists
print("\n\nLooping through List:")
for item in my_list:
    print("Item:", item)

#--------------------------------------------------
# Set - Unordered, Mutable, No Duplicates
print("\n\nSet Operations:")
my_set = {1, 2, 3, 4, 5, 5, 4}
print("\nSet:", my_set)  # Duplicates are removed
copy_set = my_set.copy()  # Create a copy of the set
print("Copied Set:", copy_set)
removed_item = my_set.pop()  # Remove and return an arbitrary element
print("Popped Item from Set:", removed_item)
print("Set after Pop:", my_set)
my_set.clear()  # Clear all elements
print("Cleared Set:", my_set)
my_set = copy_set  # Restore original set from copy
print("Restored Set:", my_set)
my_set.discard(3)  # Remove specific element
print("Set after Discarding 3:", my_set)
my_set.add(6)  # Add new element
print("Set after Adding 6:", my_set)

# Compare Sets
print("\n\nSet Comparisons:")
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
print("Set A:", set_a)
print("Set B:", set_b)
print("Union: ", set_a.union(set_b))  # Union
print("Intersection: ", set_a.intersection(set_b))  # Intersection
print("Difference (A - B): ", set_a.difference(set_b))  # Difference
print("Symmetric Difference: ", set_a.symmetric_difference(set_b))  # Symmetric Difference
print("Is A subset of B?", set_a.issubset(set_b))  # Subset
print("Is A superset of B?", set_a.issuperset(set_b))  # Superset
print("Are A and B disjoint?", set_a.isdisjoint(set_b))  # Disjoint
print("Set A == Set B?", set_a == set_b)  # Equality
print("Set A != Set B?", set_a != set_b)  # Inequality


#--------------------------------------------------
# Tuple - Ordered, Immutable, Allows Duplicates
print("\n\nTuple Operations:")
my_tuple = ()
my_tuple = (1, 2, 3, 4, 5)
print("\nTuple:", my_tuple)
print("Tuple Element at Index 2:", my_tuple[2])
print("Tuple Length:", len(my_tuple))
# my_tuple[2] = 10  # This will raise an error because tuples are immutable
# To modify a tuple, you need to create a new one
new_tuple = my_tuple[:2] + (10,) + my_tuple[3:]
print("Modified Tuple:", new_tuple)
print("New Tuple Length:", len(new_tuple))


#--------------------------------------------------
# Dictionary - Unordered, Mutable, Key-Value Pairs, No Duplicate Keys
print("\n\nDictionary Operations:")
my_dict = {}
my_dict = {"name": "Harley", "age": 30, "city": "Sydney"}
print("\nDictionary:", my_dict)
print("Dictionary Value for 'name':", my_dict["name"])
print("Dictionary Value for 'age':", my_dict.get("age"))  # Using get method
my_dict["age"] = 35  # Update value
print("Updated Age:", my_dict["age"])
my_dict["country"] = "AUS"  # Add new key-value pair
print("Extended Dictionary:", my_dict)
del my_dict["city"]  # Remove key-value pair
print("Dictionary after Deletion:", my_dict)
print("Final Dictionary Length:", len(my_dict))


# Conversion between Collection Types
print("\n\nConversions between Collection Types:")
list_from_tuple = list(my_tuple)  # Convert tuple to list
print("\nList from Tuple:", list_from_tuple)
tuple_from_list = tuple(my_list)  # Convert list to tuple
print("Tuple from List:", tuple_from_list)
set_from_list = set(my_list)  # Convert list to set
print("Set from List:", set_from_list)
list_from_set = list(my_set)  # Convert set to list
print("List from Set:", list_from_set)
dict_from_list = {i: my_list.count(i) for i in my_list}  # Convert list to dictionary with counts
print("Dictionary from List (with counts):", dict_from_list)
set_from_tuple = set(my_tuple)  # Convert tuple to set
print("Set from Tuple:", set_from_tuple)
tuple_from_set = tuple(my_set)  # Convert set to tuple
print("Tuple from Set:", tuple_from_set)
print("Dictionary from Tuple (index as key):", {i: my_tuple[i] for i in range(len(my_tuple))})  # Convert tuple to dictionary with index as key
dict_from_set = {i: True for i in my_set}  # Convert set to dictionary with True as value
print("Dictionary from Set (with True values):", dict_from_set)
print("Set from Dictionary Keys:", set(my_dict.keys()))  # Convert dictionary keys to set
print("List from Dictionary Values:", list(my_dict.values()))  # Convert dictionary values to list
print("Tuple from Dictionary Items:", tuple(my_dict.items()))  # Convert dictionary items to tuple
print("Dictionary from Set (with index as key):", {i: list_from_set[i] for i in range(len(list_from_set))})  # Convert set to dictionary with index as key
print("Dictionary from Tuple (with values as keys):", {val: idx for idx, val in enumerate(my_tuple)})  # Convert tuple to dictionary with values as keys

# Note: Converting between collection types may lead to data loss (e.g., duplicates in sets are removed)
# Always ensure the conversion makes sense for your data and use case

