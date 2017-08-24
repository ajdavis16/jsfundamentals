let input = document.getElementById("input");
let output = document.getElementById("output");
let ulist = document.getElementById("friendsList");



//console.log(input.value);
let newName = "";

function capitalize(){
		

		for ( let l in input.value){
			if ( l == 0 )
		{
		newName = input.value[l].toUpperCase();
		} else {
		newName += input.value[l].toLowerCase()
		}


		}

	output.innerHTML += 'br' "Capitalized Name: " + newName
	input.value="";
}




document.onkeypress = function (e){
	if (e.keyCode === 13){
		return capitalize();
	}

	
}


function addItem (){
	let li = document.createElement('li');
	let text = li.innerHTML = newName;
	ulist.appendChild(li);















