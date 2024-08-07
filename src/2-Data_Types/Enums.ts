/*
    *- Enums => Enumerations Part 1
    *--- Allow Us To Declare A Set Of Named Constants
    *--- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
    *--- It Organize Your Code
    *--- By Default Enums Are Number-Based, First Element Is 0
    *--- Theres A Numeric Enums
    *--- Theres A String-Based Enums
    *--- Theres Heterogeneous Enums [String + Number]

    Enum name {
        enumMember = value,             //? we can assign value by = not :
        ...
    } 
*/
// regular way
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
// enum way (better way)
enum Level {
    Kids = 15,
    Easy = 9,
    Medium = 6,
    Hard = 3
}
let lvl: string = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
}

/*
    *- Enums => Enumerations Part 2
    *--- Enum Can Refer To Other Enum
    *--- Enum Can Refer To Same Enum 
    *--- Enum Can Have Calculations
    *--- Enum Can Have Functions
*/

function getHardSeconds() : number {
    return 3;
}

enum Kids {
Five = 25,
Seven = 20,
Ten = 15
}

enum Level1 {
Kid = Kids.Ten,                   //? Level1 refer to Kids, kids must declared before Level1
Easy1= 9,
Medium1 = Easy1 - 3,              //? Level1 refer to Level1, Easy1 must declared before Medium1
Hard1 = getHardSeconds()
}
if (lvl === "Easy") {
console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level1.Hard1}`);
}