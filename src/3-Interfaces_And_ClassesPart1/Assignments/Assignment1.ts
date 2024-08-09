// Edit The Interface To Fix The Problems
interface Member {
    id: number | string;
    username: string;
    country?: string;
    state: boolean;
    getName(): string;
}

// Do Not Edit The Code Below
let user7: Member = { // Property 'country' is missing in type
    id: 100,
    username: "Elzero",
    state: true,
    getName() { // 'getName' does not exist in type 'Member'
        return this.username;
    }
}

user7.id = 200;
user7.id = "200"; // Type 'string' is not assignable to type 'number'
user7.state = false; // Cannot assign to 'state' because it is a read-only property
