type custom = '"Yes"' | '"No"';
function isHeOld(age: number | string) : custom | "Error" {
    return typeof age == "string" ? "Error" : age > 40 ? '"Yes"' : '"No"';
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"