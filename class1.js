setTimeout(function(){
	console.log("This is how setTimeout works.");
}, 2000);


var time = 0;
var timer = setInterval(function(){
	time = time + 2;
	console.log(time + ' senconds had passed.');
    if(time > 10){
    	clearInterval(timer);
    }

}, 2000);

