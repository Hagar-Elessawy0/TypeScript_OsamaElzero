// JavaScript (Dynamically Typed and Weakly Typed)

// weakly typed
console.log(5 + null);  // Output: 5

// dynamically typed : can change the type of variable
let num = 10;
num = "Elzero";
console.log(num);

// dynamically typed : Error Can Be Detected After Execution
let age = 30;
if (age > 30) {
    console.log("Good");
} else {
    console.log(age.repeat(3)); // This is the Error, will detected after execution
}