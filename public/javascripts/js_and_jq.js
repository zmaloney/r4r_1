/* 
var colors = ['red', 'black', 'blue']; 
colors.foo = "This array has a 'foo' property!";    

function printArrayElements(element, index, array) {
    document.write("<p>a[" + index + "] = " + element + " " + array.foo + "</p>");
}       
      
document.write("<p>Array \"colors\" has " + colors.length + " elements.");  

colors.forEach(printArrayElements);    
*/     
  
var el = document.getElementById('cost');   
el.value = '$500';   

//right, let's build some OBJECTS.  
function Hotel(name, rooms, booked) { 
	this.name = name; 
	this.rooms = rooms; 
	this.booked = booked; 
	this.checkAvailability = function() { return this.rooms - this.booked; }
	}; 
	
var overlookHotel = new Hotel("Overlook", 912, 0);     
var watergateHotel = new Hotel("Watergate", 155, 25);   
watergateHotel.pool = true; 

function updateTextHolder(text) { 
	var bd = document.getElementById('textholder');  
	bd.innerHTML += text  + "<br/>"; 
	}

function hotelInfo(hotel)      { 
	var output = "Our hotel is called the " + hotel.name + ". It currently has " + hotel.checkAvailability() + " free rooms. Does it have a pool? " + (hotel.pool ? "Yes!" : "No."); 
	return output; 
    }  

updateTextHolder(hotelInfo(overlookHotel));      
updateTextHolder(hotelInfo(watergateHotel));       


function windowSize() { 
	var width = this.innerWidth; 
	var height = this.innerHeight; 
	return height * width; 
}      
   
updateTextHolder("Window size is " + windowSize());       


document.write("<p>The script js_and_jq.js has been completed at this location.</p>");      