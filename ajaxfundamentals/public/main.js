
$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/planets/',


	}).done(function(planets){
		for(planetobject of planets.results){
			$(planetNames).append("<tr><td>" + planetobject.name + "</td></tr>")
		}
	})


		
	$.ajax({
		type:'GET',
		url: 'http://swapi.co/api/starships/',


	}).done(function(starships){		
		for(ship of starships.results){		
			$(shipNames).append("<tr><td>" + ship.name + "</td></tr>")
		}
	})

})








		//console.log(planets.results[0])
		//planets.results.forEach(function(planet){
			
		//}
		//for(var x in data){
		//console.log(data[x])
		//for( let planet in planets.results){
		//	console.log(planets.results[planet].name)
		
	//}

		//for (let planet of planets.results){
		///	console.log(planet.name)
	