/*  
    *-- Abstract Classes
    *----- are used to provide a base for other classes, without having to directly create objects of the abstract class itself.
    *----- allow you to specify the methods and properties that derived classes should implement, which helps ensure consistency between different classes
    //?--- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
    constructor(public title: string) {}
    abstract getCookingTime() : void;
}

class Pizza extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime() : void {
        console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
}

class Burger extends Food {
    constructor(title: string, public price: number) {
        super(title);
    }
    getCookingTime() : void {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}

let pizzaOne = new Pizza("Awesome Pizza", 100);

console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();