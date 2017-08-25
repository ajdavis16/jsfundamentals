//Keep declared variables local instead of allowing global.




//var cool = 10

//if not initiated and declared in a function then this 
//value for cool can be overwritten and 10 attributed to globally.


(function () {
	var cool = 10;
	console.log(cool);

})();







