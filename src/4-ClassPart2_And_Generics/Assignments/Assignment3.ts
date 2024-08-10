// Write Class Code Here
class Game2<T>{
    constructor(public title: T, public price: number) {}

    getDiscount(discount: T ) : void {
        console.log(`The Discount Is ${discount}`);
    }
}

// Do Not Edit Here
let game1 = new Game2<string>("Ys", 100);
let game2 = new Game2<number>(2064, 100); // There's A Game Called "2064"

console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"

console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"