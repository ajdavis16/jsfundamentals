// Objects

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	pieNames: [],
	getPies: function(){
		return this.pies; //food object

	},
	addPie: function(){
		return this.pies.forEach(function(newP){
			console.log([newP] + " Pie")
		})
	}
getPieNames: function(){
	this.pies.forEach(functiono(pie){
		this.pieNames.push(pie + " Pie")
	})
	return this.pieNames
}


food.addPie();





//console.log(food.pies[0] + " pie")

//food.pies.forEach(function(foodItem){
//	console.log(foodItem + " pie")
//})


//console.log(food.getPies())

	












