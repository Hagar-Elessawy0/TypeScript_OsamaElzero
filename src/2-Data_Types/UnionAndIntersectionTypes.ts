/*
    *--- Union Type
    *------ The | Symbol Is Used To Create The Union => "Or"

    *--- Intersection Type
    *------ Is A Type That Combines Several Types Into One
    *------ The & Symbol Is Used To Create An Intersection => "And"

    *--- If A Union Is An OR, Then An Intersection Is An AND.
*/
//? Union
// let all: number | string = 100;      

type A = {
    one: string,
    two: number,
    three: boolean
}
//? Intersection
type B = A & {
    four: number
}

type C = {
    five: boolean
}
//? Intersection
type mix1 = A & C;

function getActions2(btns: mix1) {
console.log(`Hello ${btns.one}`);
console.log(`Hello ${btns.two}`);
console.log(`Hello ${btns.three}`);
console.log(`Hello ${btns.five}`);
}

getActions2({ one: "String", two: 100, three: true, five: true });