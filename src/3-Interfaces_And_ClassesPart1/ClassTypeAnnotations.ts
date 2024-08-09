class User1 {
    u: string;
    s: number;
    msg: () => string;

    constructor(username: string, salary: number) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return `Hello ${this.u} Your Salary Is ${this.s}`;
        }
    }

    sayMsg() {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
}

let user3 = new User1("Hagar", 30000);

console.log(user3.u);
console.log(user3.s);
console.log(user3.msg());
console.log(user3.sayMsg());