//Loops

/*
lcv = 

for loop
------------

// Instead of having to write several lines of code that could get different responses
// one could just create a loop.
// For loops loop through a block of code a number of times.
while loop
---------------

//While loops loop through a block of code while a specified condition is true.

for in loop
--------------------

// for/in loops loop through the properties of an object

do while loop
--------------------------
// loops through a block of code while a specified condition is true
runs at least once 




*/
// initalize var; have boolen expression;


for (var i = 0; i < 10; i=i + 1){
	console.log(i)
}


for (var i = 0; i <= 20; i=i + 2){
	console.log(i)
}


//initialize variable
var j = 0
//boolean expression
while(j < 5) {


	//step through the loop
	j = j+1 //j += 1 || j++
	console.log(j)
}


/*
while(true){
	console.log("runs once");
	return false;
}
*/


var a = 0
while(a < 101){
	console.log(a)
	a = a + 10
	
}



var studentName = "Andrew";
var capSN = "";
// lcv             collection
for (var l in studentName) {
	if (l == 0) {
		capSN = studentName[1].toUpperCase();
	} else {
		capSN += studentName[1];
	}
	console.log(studentName)
}


























