//Arrays

let students = ['Thomas','Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(typeof(students));

console.log(students[2]);
console.log("Hello " + students[6][1] + " the Platypus.");



let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'CheeseCake', 'Shrimp Pasta']



// index of item | How many to cut | What you want to replace it with 

arrOfFood.splice(1, 1, 'Blueberry Pie')

arrOfFood.splice(1, 0, 'Sweet Potato')
//push to the end of array.

arrOfFood.push("NY Style Pizza");



// prints out value instead of the index number
/*for (let food of arrOfFood){
	console.log(food)
}
*/

arrOfFood.forEach(function(foodItem){
	console.log(foodItem);
})




















