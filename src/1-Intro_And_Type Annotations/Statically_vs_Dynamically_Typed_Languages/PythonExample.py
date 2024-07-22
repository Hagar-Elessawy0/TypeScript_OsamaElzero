# Python (Dynamically Typed and Strongly Typed)

# strongly typed : Do not allow implicit conversion between different types
print(5 + None)   # Error: TypeError

# dynamically typed : can change the type of variable
num = 10
num = "Elzero"
print(num)        # Output: Elzero

# dynamically typed : Error Can Be Detected After Execution
age = 30
if (age > 30):
    print("Good")
else:
    print(age + "Bad")  # This is the Error, will detected after execution
