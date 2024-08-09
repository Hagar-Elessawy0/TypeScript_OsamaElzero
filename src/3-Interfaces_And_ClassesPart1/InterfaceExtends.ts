/*
    * Extending Interfaces : It Extends The Interface or more And Add New Properties or Methods
*/

interface IUser2 {
    id: number;
    username: string;
    country: string;
}

interface Moderator {
    role: string | number;
}

interface Admin extends IUser2,Moderator {
    protect?: boolean;
}

let user2: Admin = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    role: "Mod",
    protect: true
}
console.log(user2.id);

// ! Types different from Interfaces in Extending , Types don't extend