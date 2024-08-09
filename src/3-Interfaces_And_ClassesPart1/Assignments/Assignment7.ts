interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
}

// Create Your Class Here
class player implements Play {
    constructor(public id: number, public title: string, public level: number | string){}
    logIn(): void {
        console.log("Logged In");
    }
    logOut(msg: string): void {
        console.log(`Logged Out, ${msg}`);
    }
}

let player5 = new player(100, "Elzero", 95);

console.log(player5.id); // 100
console.log(player5.title); // "Elzero"
console.log(player5.level); // 95
player5.logIn(); // Logged In
player5.logOut("Good Bye"); // Logged Out, Good Bye