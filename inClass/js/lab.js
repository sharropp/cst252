
//Make a variable that has an object in it :0
//the object is keeping track of 3 properties/items
/////the name of the player: blah blah blahh
/////the color of their tunic: green/red
/////a number that tracks your health left: (100/100)

let player = {
 name: "Squantio",
 tunic: "red",
 health: "100",
 backpack: ["health potion", "sword"]
}

function changeColor(color){
	player.tunic = color;
}

//backpack is a collection of things represented by words these things could be a sword, cookies, milk, burger, gatorade, whatever you want
//start off with a health potion and a sword

function itemAdd(item){
 player.backpack.push(item);
}
