// Objects

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	getPies: function(){
		return this.pies; //food object

	},
	addPie: function(){
		return this.pies.forEach(function(newP){
			console.log([newP] + " Pie")
		})
	}

}


food.addPie();





//console.log(food.pies[0] + " pie")

//food.pies.forEach(function(foodItem){
//	console.log(foodItem + " pie")
//})


//console.log(food.getPies())

	












