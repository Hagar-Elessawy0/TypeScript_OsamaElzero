/*
modify tsconfig.json file to:
    "noImplicitAny": false,
    "noUnusedLocals": true,  
    "noUnusedParameters": true, 
    "allowUnreachableCode": false, 

*/
function reportErrors(username, age: number) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}

console.log(reportErrors("Elzero", 40));