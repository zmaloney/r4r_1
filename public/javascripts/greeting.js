/* maintenance : 
	Because this is part of assets/javascripts/greeting.js, it gets included on every page. 
	I wish we could correctly map to /public/javascripts/ , but I cannot figure out how to do that from an .html.erb . 
*/
var today = new Date();   
var hourNow = today.getHours(); 
var greeting; 

if (hourNow > 18) { 
	greeting = "Good \"evening.\""; 
}
else if(hourNow > 12) { 
	greeting = "Good \"afternoon.\""; 
}
else if(hourNow > 0) { 
	greeting = "Good \"morning.\""; 
}
else { greeting = "Welcome!"; }

document.write('<h3>' + greeting + '</h3>');   