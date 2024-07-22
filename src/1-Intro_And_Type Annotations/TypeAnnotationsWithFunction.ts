/*
- it is better to use type annotations with parameters

-some options in tsconfig.json:
    - noImplicitAny
    --- Will Allow Any Type In A Function Parameter

    - noImplicitReturns
    --- Will Check All Code Paths In A Function To Ensure They Return A Value

    - noUnusedLocals
    --- Report Errors On Unused Local Variables

    - noUnusedParameters
    --- Report Errors On Unused Parameters In Functions.
*/

// normal function
let showMsg = true;
function showDetails(name: string, age: number, salary: number) : string /*Type of Return*/{    
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    return `No Data To Show`;
}
// In TypeScript we must enter all arguments
console.log(showDetails("Hagar", 21 , 5000));     

// arrow function
const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

console.log(addWithArrow(10, 20));