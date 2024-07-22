// We can identify more than one type
let all: string | number | boolean = "Gory";
/* same as:
let all: (string | number | boolean) = "Gory"; */
all = "A";
all = 100;
all = true;

// Type Annotations With Arrays
let myFriends: string[] = ["Hagar", "Mohamed", "Youssef"];

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}