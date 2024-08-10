interface IBook {
    itemType: string;
    title: string;
    isbn: number;
}

interface IGame {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

class Collection<T> {
    public data: T[] = [];
    add(item: T) : void {
        this.data.push(item);
    }
}

let itemOne = new Collection<IBook>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<IGame>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);