let myObject: {
    readonly username: string,      // readonly - not allowed to update
    id: number,
    hire?: boolean,                 // optional
    skills: {
        one: string,
        two: string
    }
} = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};

// myObject.username = "Hagar";     // Error
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);