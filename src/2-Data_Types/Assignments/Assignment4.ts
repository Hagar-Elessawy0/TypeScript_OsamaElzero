function yesOrNo(val: number | string) : "True" | "False" | "Error" {
    return typeof val == "string"? "Error" : val > 10 ? "True" : "False";
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False