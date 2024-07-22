/*
    Type Annotations || Signature
    -- Indicate The Data Type Of Variables
    -- Indicate The Data Type Of Functions Input/Output
    -- Objects, etc.

    - Why We Use It ? -----> for type checking
    - Is It Mandatory ? ------> No only if parameters or data from API or anything TypeScript doesn't know its type by itself
    - What Happen If We Didn't Use It ? -----> Type Inference : TypeScript will know the type of variable from its context
*/
let theName = "Elzero";      //Type Inference
//theName = 0;                  //Error

let theAge: number = 40;     //Type Annotations
//theAge = "Elzero";            //Error

let hire: boolean ;          //Type Annotations 
//hire = "Elzero";              //Error
hire = true;


// any type => makes variables accept values of any data type
let var1 : any = "Elzero Web School1";
var1 = 0;                            // no error

let var2 : any;
var2 = "Elzero Web School2";         // no error

let var3;        //any type
var3 = "Elzero Web School3";         // no error
var3 = 0;                            // no error
var3 = true;                         // no error

function add(n1: number, n2: number) {
    return n1 + n2;
}
console.log(add(10, 20));            // Only numbers are accepted else error

