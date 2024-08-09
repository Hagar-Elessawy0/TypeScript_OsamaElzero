/*
    - Data Access Modifiers & Parameters Properties
    --- Public
    ------ All Members Of A Class In TypeScript Are Public
    ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
    --- Private
    ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
    --- Protected
    ------ Same Like Private But Can Be Accessed Using The Deriving Class

    - TypeScript Is A Layer On Top Of JavaScript
    - while compiling It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User2 {
    msg: () => string;
    constructor(private username: string, protected salary: number,public readonly address: string) {
        this.msg = function () {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
        }
    }
    sayMsg() {
        return `Hello ${this.username} Your Salary Is ${this.salary}`;
    }
}

let user4 = new User2("Elzero", 30000, "Cairo");

// console.log(userOne.username);       // Error
// console.log(userOne.salary);         // Error
console.log(user4.msg());
console.log(user4.sayMsg());