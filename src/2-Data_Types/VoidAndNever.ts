/*
    *- Void
    *--- Function That Will Return Nothing
    *--- Function In JavaScript That Not Return A Value Will Show undefined
    *--- undefined is not void
*/
function logging(msg: string) : void {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");

/*
    *- Never
    *--- Return Type Never Returns
    *--- The Function Doesn't Have A Normal Completion
    *--- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/
const fail = (msg: string) => {
    throw new Error(msg);
    // return 10;           //? unreachable code
}
function alwaysLog(name: string) : never {
    while(true) {
        console.log(name);
    }
}
alwaysLog("Osama");
// console.log("Test");     //? unreachable code