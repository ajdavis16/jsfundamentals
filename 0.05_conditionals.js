// Condidtionals
/*
Changing conditional operators
&&
||

*/

var name = "kenn";
if("kenn" == name )  {
	console.log("Hey your name is " + name);
} else {
	console.log("What is your name?");
};




var userName = 'user';

if(userName[0] != userName[0].toUpperCase()) {
	console.log('upper case true');

} else {
	console.log(userName[0].toUpperCase() + userName.substring(1));
}



var age = 16

if (age >= 18) {
	cosole.log("Yay you can vote!");
} else if (age>= 21) {
	console.log("Yay you can drink!");
} else if (age >= 25) {
	console.log("Yay you get lower rates on your car rental")
} else {
	console.log("sorry too young to do anything!")
}






var richMan = 1000000;

if (richMan >= 1000000){
	console.log("You are rich");
} else if(richMan >= 500000) {
	console.log("You are well off");
} else if(richMan >= 250000) {
	console.log("Your doing pretty well");
} else if(richMan >= 100000) {
	console.log("Getting There");
} else{
	console.log("Keep Working");
}















