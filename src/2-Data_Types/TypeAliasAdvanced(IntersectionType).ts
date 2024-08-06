// * Intersection Type & : A type created by combining two or more types together so that it has all the properties of all the combined types

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
}

type Last = Buttons & {
    straight : string;
}
// last has tha same properties of Buttons in addition to x property

function getActions(btns: Last) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
    console.log(`Action For Button Straight Is ${btns.straight}`);
}

getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", straight: "Walks Straight"});