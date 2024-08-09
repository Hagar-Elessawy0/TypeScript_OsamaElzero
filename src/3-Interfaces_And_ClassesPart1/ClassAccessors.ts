/*
    *get : It Returns The Value
    *set : It assigns The Value
    ? Can Make get and set automatically by click right in the property then 'refactor' and finally 'Generate get and set accessor'
*/

class User3{

    msg: () => string;
    constructor(private _username: string, public salary: number, public readonly address: string) {
        this.msg = function () {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
        }
    }
    sayMsg() {
        return `Hello ${this._username} Your Salary Is ${this.salary}`;
    }
    get username() : string {
        return this._username;
    }
    set username(value: string) {
        this._username = value;
    }
}

let user5 = new User3("Elzero", 30000, "Cairo");

console.log(user5.username);
user5.username = "Hagar";
console.log(user5.username);
console.log(user5.salary);
console.log(user5.msg());
console.log(user5.sayMsg());