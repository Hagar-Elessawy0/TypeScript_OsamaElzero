/*
    Class
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
var User = /** @class */ (function () {
    function User(username, salary, address) {
        this.username = username;
        this.salary = salary;
        this.address = address;
        this.msg = function () {
            return "Hello ".concat(this.username, " Your Salary Is ").concat(this.salary);
        };
    }
    User.prototype.sayMsg = function () {
        return "Hello ".concat(this.username, " Your Salary Is ").concat(this.salary);
    };
    return User;
}());
var userOne = new User("Elzero", 6000, "Cairo");
// console.log(userOne.username);
// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());
