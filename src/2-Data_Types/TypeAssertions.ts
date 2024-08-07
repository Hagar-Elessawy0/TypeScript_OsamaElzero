/*
    * Type Assertions are a way to tell the compiler about the type of a variable when you're confident about its type, but TypeScript can't infer it correctly.
    ?They act as a way to override the type-checking that TypeScript performs automatically.
*/

let myImg1 = document.getElementById("my-img") as HTMLImageElement;
//console.log(myImg1.src);          // Comment because don't have my-img element so it will not work correctly but doesn't throw an error because image element have src property
let myImg2 = <HTMLImageElement> document.getElementById("my-img");
//console.log(myImg2.src);          // Comment because don't have my-img element so it will not work correctly but doesn't throw an error because image element have src property
//console.log(myImg1.value);        //? Error because image element doesn't have value property

let data: any = 1000;
//console.log((data as string).repeat(3));        //? Error but TypeScript will not throw an error because it didn't check the type