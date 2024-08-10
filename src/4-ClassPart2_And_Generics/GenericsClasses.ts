class User5<T = string> {                           //* default type is string, but we can pass parameters with any type we want
    constructor(public value: T) {}
    show(msg: T) : void {
        console.log(`${msg} - ${this.value}`);
    }
}

let userOne = new User5("Elzero");                  //* we can don't pass any value if we will pass all parameters with the same type
console.log(userOne.value);
userOne.show("Message");

let userTwo = new User5<number | string>(100);     //* we must pass type number or type string because we will pass number or string
console.log(userTwo.value);
userTwo.show("Message");