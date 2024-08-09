/*
    *--- Serve Like Types (declaration object type only)
    *--- The Interface Describes The Shape Of An Object
    *--- It Defines The Syntax To Follow
    *--- It Describes The Properties And Methods Of An Object
    *--- The object must not have any other properties than what is defined in the interface
    *--- Start With Capital Letter
*/

interface IUser1 {
    id?: number;                    //? Optional Operator
    readonly username: string,      //? Use Read Only
    country: string;
    //? Use With Methods
    sayHello() : string,
    sayWelcome: () => string;
    getDouble(num: number) : number //? Use With Parameters
}

//? Use With Object
let user1: IUser1 = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user1.username}`;
    },
    getDouble(n) {                  
        return n * 2;
    }
}
console.log(user1.id);
console.log(user1.username);
user1.country = "Syria";
console.log(user1.country);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(100));

//? Use With Function
function getData(data: IUser1) {
console.log(`Id Is ${data.id}`);
console.log(`Username Is ${data.username}`);
console.log(`Country Is ${data.country}`);
console.log(data.sayHello());
console.log(data.sayWelcome());
console.log(data.getDouble(100));
}
getData({ id: 200, username: "Hagar", country: "KSA", sayHello: () => "Hello Hagar", sayWelcome: () => "Welcome Hagar", getDouble: (n) => n * 2 });