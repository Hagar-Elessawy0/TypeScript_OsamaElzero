//* Literal Types : A type created by combining two or more types together so that it has all the properties of all the combined types.


type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 1;
    } else {
        return -1;
    }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 0;
myNumber = 1;
myNumber = -1;
//myNumber = 2:     // Error

