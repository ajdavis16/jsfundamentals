const express = require('express');
const app = express();
const http = require('http').Server(app);


app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res){
	res.sendFile(__dirname + '/Star_Wars.html');
})

http.listen(3000, function(){
	console.log("Listening on port 3000");
})







