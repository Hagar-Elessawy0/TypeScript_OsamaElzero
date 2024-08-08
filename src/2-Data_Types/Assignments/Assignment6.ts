let post : readonly [number, string, boolean] = [100, "Title", true]; // Good

//post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id , title, state] = post;

// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true