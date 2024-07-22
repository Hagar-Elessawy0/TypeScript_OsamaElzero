/*
    Function
    - Optional and Default Parameters

    - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
    - "?" Optional Parameter
*/

function showData(age: number , name: string = "undefined" , country?: string) {
    return `${age} - ${name} - ${country}`;
}
console.log(showData(40));                      // Output: 40 - undefined - undefined
console.log(showData(40 , "Hagar" , "Egypt"));  // Output: 40 - Hagar - Egypt
//console.log(showData());                      // Error => Missing Parameter