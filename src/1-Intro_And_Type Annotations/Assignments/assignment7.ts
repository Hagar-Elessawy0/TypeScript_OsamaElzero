function showMessage(user?: string, age?: number | string, country?: string) {
    return `${user}${age}${country}`;
}

console.log(showMessage());
console.log(showMessage("Elzero"));
console.log(showMessage("Elzero", 40));
console.log(showMessage("Elzero", "40", "Egypt"));