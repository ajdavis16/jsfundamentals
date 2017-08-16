//Loops

/*
lcv = 

for loop
------------




while loop
---------------



for in loop
--------------------



do while loop
--------------------------

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



var studentName = "Smita";
var capSN = "";
// lcv             collection
for (var l in studentName) {
	if (1 == 0) {
		capSN = studentName[1].toUpperCase();
	} else {
		capSN += studentName[1];
	}
	
}


console.log(studentName)

