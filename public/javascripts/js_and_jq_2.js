var sx = document.getElementById('sx'); 
var sy = document.getElementById('sy'); 
var px = document.getElementById('px'); 
var py = document.getElementById('py'); 
var cx = document.getElementById('cx'); 
var cy = document.getElementById('cy'); 
       
function setSpanValue(span, text) { 
	//span = document.getElementById(spanname);  
	while (span.firstChild) {
	    span.removeChild(span.firstChild);
	}
	txt = document.createTextNode(text);         
	//NB that textContent is W3C-compliant, but innerText is -not-. 
	//alert(span.id + " : " + span.textContent + " will change to " + txt.textContent);  
	span.textContent = txt.textContent;  
	//alert(span.id + " now has textContent " + span.innerText); 
}
      
var counter = 1; 
function showPosition(event) {  
	if (counter > 0) {    
		//alert(event.screenX + ", " + event.screenY + " | " + event.pageX + ", " + event.pageY); 
		setSpanValue(sx, event.screenX); 
		setSpanValue(sy, event.screenY); 
		setSpanValue(px, event.pageX); 
		setSpanValue(py, event.pageY);  
		setSpanValue(cx, event.clientX); 
		setSpanValue(cy, event.clientY);   
		//counter = counter -1; 
	} 
} 
                              
var el = document.getElementsByTagName('body')[0];  //does this work? 
el.addEventListener('mousemove', showPosition, false); //allow moves to update position.     

//let's also do a little keypress event listener : 

function charCount(e) { 
	var textEntered, charDisplay, counter, lastKey; //initialize variables
  	textEntered = document.getElementById('msgInput').value; //get characters from textarea
	charDisplay = document.getElementById('charactersLeft'); //counter element
	counter = (180 - textEntered.length);    
	charDisplay.textContent = counter; //show # of characters remaining
	lastKey = document.getElementById('lastKey'); //element to hold "last key used" message
	lastKey.textContent = e.which; // e.which contains either keyCode or charCode, which is nice. ;) 
}

el = document.getElementById('msgInput'); 
el.addEventListener('keypress', charCount, false); 
          
//p283

document.write("<p>The script js_and_jq_2.js has been completed at this location.</p>");      