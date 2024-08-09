class Show {
    constructor (private _title: string) {}

    get title() : string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }
}

let tester1 = new Show("Elzero");

console.log(tester1.title); // Property 'title' does not exist on type 'Show'
tester1.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester1.title); // Property 'title' does not exist on type 'Show'