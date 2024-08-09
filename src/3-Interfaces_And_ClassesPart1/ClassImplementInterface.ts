interface ISettings {
    theme: boolean;
    font: string;
    save(): void;
}

class User4 implements ISettings {
    constructor(public username: string, public theme: boolean, public font: string) {}         //? allow to add properties don't have in interface
    save(): void {                                                                              //? it should use all mandatory properties in interface
        console.log(`Saved`);
    }
    update(): void {
        console.log(`Updated`);
    }
}

let user6 = new User4("Hagar", true, "Open Sans");

console.log(user6.username);
console.log(user6.font);

user6.save();
user6.update();