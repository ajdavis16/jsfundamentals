$(document).ready(function(){
/*	let names;
	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	}).done(function(data){
		names=data
		console.log(data);
		console.log(names);
	})
	console.log('Hello');
	console.log(names);

	let person = {
		name: 'Andrew',
		email: 'ajdavis16@hotmail.com'
	}
*/










$(submit).on('click', function(){
	let name = $("#name").val()
	let email = $("#email").val()

	$.ajax({

		type: 'POST',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		data: {
		name: name, 
		email: email}
	})
})

})
//})




	/*$.ajax({
		type: 'POST',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
		data: person 

	}) .done(function(info){
		console.log(info);
	})
*/








