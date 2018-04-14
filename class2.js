function callfunction(fun, name){
	fun(name);
};


var hello = function(mssg){
	console.log("Hello " + mssg);
}

callfunction(hello, 'Allen');