// * Type Alias : It is a way to define a new type that can be used instead of writing the type directly everywhere.

type st = string;
let theName2: st = "Elzero";
theName2 = "Hagar";

// ? Alias With Union
type standnum = string | number;  // * | is union operator, it is used to define a type that can be one of several different types.
let all1: standnum = 10;
all1 = 100;
all1 = "Hagar";
// all1 = true    // Error because all1 accepts either string or number no anything else