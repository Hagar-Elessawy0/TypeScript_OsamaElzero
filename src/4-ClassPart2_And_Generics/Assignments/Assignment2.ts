// Write Function Code Here
function showTypes<T = any, U = any, V = any>(valOne: T = "Nothing" as T, valTwo: U = "Nothing" as U, valThree: V = "Nothing" as V) : string {
    return `${valOne} - ${valTwo} - ${valThree}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true