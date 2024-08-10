const returnTypeArrowSyntax = <T>(val: T): T => val;                        //? With Arrow Syntax

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Elzero"));


function testType<T>(val: T): string {                                     //? It should not always return the type of generic
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType<number>(100));
console.log(testType<string>("Elzero"));


function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {           //* Generics With Multiple Types
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes<string, number>("Hagar", 100));
console.log(multipleTypes<string, boolean>("Elzero", true));