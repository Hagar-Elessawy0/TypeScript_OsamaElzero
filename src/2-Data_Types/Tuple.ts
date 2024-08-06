/*
    * Tuple
    *--- Is Another Sort Of Array Type
    *--- We knows Exactly How Many Elements It Contains
    *--- We Knows Which Types It Contains At Specific Positions`

    * readonly : not allowed to push or pop elements 
*/

let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];     //? update 
// article.push(100);
console.log(article);   // [11, "Title One", true]

//? array destructuring
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);