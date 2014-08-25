/* 
var colors = ['red', 'black', 'blue']; 
colors.foo = "This array has a 'foo' property!";    

function printArrayElements(element, index, array) {
    document.write("<p>a[" + index + "] = " + element + " " + array.foo + "</p>");
}       
      
document.write("<p>Array \"colors\" has " + colors.length + " elements.");  
  
//See? These are equivalent, but only because we're operating on an -array-. 
// Nodelists can't use array functions!
colors.forEach(printArrayElements);
colors.forEach(function(element, index, array) {
	    document.write("<p>a[" + index + "] = " + element + " " + array.foo + "</p>");
	});     
                     
*/ 
 
function setVisibility(obj, visible) {     
	var tObj = document.getElementById(obj); 
	tObj.style.display = (visible ? '' : 'none'); 
	}   

//right, let's build some OBJECTS.    

function Hotel(name, rooms, booked) { 
	this.name = name; 
	this.rooms = rooms; 
	this.booked = booked;      
	this.checkAvailability = function() { return this.rooms - this.booked; };   
	this.phonesToText = function() { 
		var sHotelPhones = ""; 
		this.phones.forEach(function(phone) { //we don't use index or array, but note that it gets passed. 
			sHotelPhones += (sHotelPhones.length > 0 ? ", " : "") + phone; 
			});  
		return sHotelPhones; 
	};    
	this.hotelInfo = function() {   
		var output = "Our hotel is called the " + this.name + ". It currently has " + this.checkAvailability() + " free rooms. Does it have a pool? " + (this.pool ? "Yes!" : "No."); 
		var phonenumbers = this.phonesToText(); 
		output += (phonenumbers.length > 0 ? " Phone numbers are : " + phonenumbers : ""); 
		return output;  
	}; 
}; 
	
var overlookHotel = new Hotel("Overlook", 912, 0);   
overlookHotel.phones = [ 
	8606169116, 
	8605551212
	];  
var watergateHotel = new Hotel("Watergate", 155, 25);  
watergateHotel.phones = [8001911881];  
watergateHotel.pool = true; 
 
function updateTextHolder(text) { 
	var bd = document.getElementById('textholder');  
	bd.innerHTML += text  + "<br/>"; 
	};       
     
function windowSize() { 
	var width = this.innerWidth; 
	var height = this.innerHeight; 
	return height * width; 
}  
	
// updateTextHolder(overlookHotel.hotelInfo());      
// updateTextHolder(watergateHotel.hotelInfo());       
// updateTextHolder("Window size is " + windowSize());       

function updateBuiltins(text) { 
	var bd = document.getElementById('builtins');  
	bd.innerHTML += text  + "<br/>"; 
	}; 

var tBuiltins = "Builtins go here."  
var aBuiltins = tBuiltins.split(' ');    
var tBuiltins2 = ""; 
for (x in aBuiltins) {   
	tBuiltins2 += aBuiltins[x] + " | "; 
	};   
var iTmp = Math.random() * 10;   
var tTmp = new Date(); 
      
updateBuiltins("The document is titled \"" + document.title + "\" and was last modified " + document.lastModified);  
updateBuiltins("The browser has " + window.history.length + " items in its history.");  
updateBuiltins("Let's point out that 'foo' is " + (isNaN("foo") ? "not " : "") + "a number.");
updateBuiltins("... but " + iTmp + " is" + (isNaN(iTmp) ? " not ... " : " ... " )); 
updateBuiltins("and if we round it to 2 decimals, it's " + iTmp.toFixed(2)); 
updateBuiltins("To a precision of 1, it's " + iTmp.toPrecision(1));     
updateBuiltins("Right now, it's " + tTmp.toTimeString() + ", " + tTmp.toDateString() ); 
updateBuiltins("Today is the " + tTmp.getDay() + " day of the week."); 

function updateFlowControl(text) { 
	var bd = document.getElementById('flowcontrol');  
	bd.innerHTML += text  + "<br/>"; 
	};  
                                                                  
var msg = "foo"; 
var level = parseInt(iTmp.toPrecision(1));     //NB that toPrecision() returns a -string-. 

switch(level) { 
	case 1: 
	msg="Hello, level one."; 
	break; 
	
	case 2: 
	msg="Hello, level twooooo."; 
	break; 
	
	case 3: 
	msg="Jello, level threeuuh."; 
	break; 
	
	default: 
	msg="Level is " + level; 
	break; 
}

updateFlowControl(msg);  
var bTest = '1' == 1;  
var bTestStrict = '1' === 1;   
updateFlowControl("'1' does " + (bTest ? "" : "not ") + "equal 1, but '1' does " + (bTestStrict ? "" : "not ") + "strict-equal 1"); 
updateFlowControl("The existence of an object is 'truthy' in that it operates as '" + (document.getElementById('flowcontrol') ? "true" : "false") + "'.");   
updateFlowControl("However, this 'truthy' value does " + (document.getElementById('flowcontrol') == true ? "" : "not ") + "equal 'true'.")

function fooLoop(max) { 
	var output = ""; 
	for (var i = 0; i < max; i++)   { 
		output += (output.length ? ", " : "") + "foo";    //NB how we use the 'falsy' nature of 0 to check here. 
		}  
	return output; 
	}   
	          
var loopMax = 5; 
updateFlowControl("Output of a " + loopMax + "-count for loop : " + fooLoop(loopMax));  

function barLoop(max) { 
	var i = 0; 
	var output = ""; 
	while (i < max) { 
		output += (output.length ? ", " : "") + "bar"; 
		i++; 
		}
	return output; 
}
       
updateFlowControl("Output of a " + loopMax + "-count while loop : " + barLoop(loopMax));  

function updateDomTree(text) { 
	var bd = document.getElementById('domtree');  
	bd.innerHTML += text  + "<br/>"; 
	};  
	
updateDomTree("What happens when we write here?");   
var itemOne = document.getElementById('one');    
updateDomTree("We could " + (itemOne ? "" : "not ") + "locate an item with ID 'one'.");   
var CSSCheck = 'li.hot'; 
var itemTwo = document.querySelectorAll(CSSCheck);    
updateDomTree("We could " + (itemTwo ? "" : "not ") + "locate at least one item with CSS '" + CSSCheck + "'.");  
//This is obvious, but counterintuitive : notice that itemTwo evaluates as truthy even if it's an empty node list. 
if (itemTwo) { updateDomTree("There are " + itemTwo.length + " elements with CSS '" + CSSCheck + "'.") }; 
// EFFF!!!! ... we can't use array methods like forEach on a nodelist. That sucks. 
for (var i = 0; i < itemTwo.length; i++) { 
	itemTwo[i].className = 'mediumcool';  
	}; 
updateDomTree("We have successfully converted all 'hot' elements into 'mediumcool' elements.");   
        
function updateDomInfo(text) { 
	var bd = document.getElementById('dominfo');  
	bd.innerHTML += text  + "<br/>"; 
	};
        
var shoppingdiv = document.getElementById('shoppingdiv');   
function writeNodeInfo(obj, ignoreWhitespaceNodes) {   
	var nodeList = obj.childNodes;  
	var myInfo = ""; 
	var childInfo = "";    
	if (ignoreWhitespaceNodes && (typeof obj.tagName == 'undefined')) { 
	} 
	else 
	{   
		var iWhitespaceChildren = 0; 
		var iValidChildren = 0; 
		myInfo += (nodeList.length > 0 ? "<ul>" : ""); 
		myInfo += (obj.tagName) + " ID '" + (obj.id ? obj.id : "undefined") + "', value '" + obj.nodeValue + "' : "; 
		for (var i = 0; i < nodeList.length; i++) {  
			if (typeof nodeList.item(i).tagName == 'undefined') { iWhitespaceChildren++ } else { iValidChildren++ };  
			var nodeListInfo = writeNodeInfo(nodeList.item(i), ignoreWhitespaceNodes); 
			childInfo += (nodeListInfo.length > 0 ? "<li>" +  nodeListInfo + "</li>" : ""); 
			};  
		myInfo += iValidChildren + " valid child" + (iValidChildren == 1 ? "" : "ren") + ", " + iWhitespaceChildren + " whitespace child" + (iWhitespaceChildren == 1 ? "" : "ren") + "."; 
		myInfo += childInfo; 
		myInfo += (nodeList.length > 0 ? "</ul>" : "");  
	}; 
	return myInfo;   
}  
shoppingdivinfo = writeNodeInfo(shoppingdiv, true);    
updateDomInfo(shoppingdivinfo);     
      
var itemOne = document.getElementById('one'); 
var showTextContent = itemOne.textContent;
var showInnerText = itemOne.innerText; //NB : not implemented in Firefox, so don't use.   
itemOne.innerHTML = "<em id=\"foo\">Emphasized</em> items";  

var shoppingList = document.getElementsByTagName('ul')[0]; 

var additionalItem = document.createElement('li'); 
var additionalText = document.createTextNode('Fifthy stuff'); 
additionalItem.appendChild(additionalText); 
updateDomInfo('item \'shoppinglist\' has ' + shoppingList.childNodes.length + ' children before anything is added.'); 
//NB that calling this next line more than once has no effect : 
shoppingList.appendChild(additionalItem);   
var bolDeep = true; 
var anotherItem = additionalItem.cloneNode(bolDeep);   
updateDomInfo("anotherItem has " + anotherItem.childNodes.length + " children, since we " + (bolDeep ? "did" : "did not") + " use the 'deep' parameter."); 
var removeItem = anotherItem.childNodes[0]; 
anotherItem.removeChild(removeItem);  
var anotherText = document.createTextNode('Sixy six sixtyff');    
updateDomInfo("anotherItem now has " + anotherItem.childNodes.length + " children after removal.");     
anotherItem.appendChild(anotherText);  
updateDomInfo("anotherItem now has " + anotherItem.childNodes.length + " children after additions."); 
shoppingList.appendChild(anotherItem);  
updateDomInfo('item \'shoppinglist\' has ' + shoppingList.childNodes.length + ' children after additions.');   
                             
// Here we start our section of event handlers. 
// First, traditional DOM event handlers : 
function checkUsernameDOMStyle() {                                      
	var elMsg = document.getElementById('usernameFeedback');   
	if (this.value.length < 5) {      
//		alert("Username must be 5 characters or more.");  
		elMsg.textContent = "Username must be 5 characters or more.";  
		elMsg.style.display = ''; 
	}
	else { 
		elMsg.textContent = ''; 
		elMsg.style.display = 'none'; 
	}
}  

var elUsername = document.getElementById('username'); 
elUsername.onblur = checkUsernameDOMStyle; 
    
//and now, using an event listener.    
var elUsername2 = document.getElementById('username2'); 
    
// so here's the deal -- see that 'event' parameter? 
// We add an event listener via an anon function, which specifies a parameter e, 
// which it passes to this function. 
// That 'e' is the event which triggered the anon function. 
// This is apparently the preferred way to do this (rather than, say, using a parameterless anon fn
	// and passing the object to which the event listener is added to the inner fn).
function checkUsernameListenerStyle(event, minLength) {                                   
	var elMsg = document.getElementById('usernameFeedback2');    
	if (event.target.value.length < minLength) {      
		elMsg.textContent = "Username must be " + minLength + " characters or more.";  
		elMsg.style.display = ''; 
		//elMsg.style.color = colorName; 
	}
	else { 
		elMsg.textContent = ''; 
		elMsg.style.display = 'none';  
		//elMsg.style.color = 'black'; 
	}
}     
   
//see how we're using an anonymous function to pass the extra string to the function?    
// That's not really the important part -- this, generally, demonstrates the use of the addEventListener() method. 
// NB that the target of the event must be explicitly passed to the inner function 
// since that fn is being called by an anon fn. 
elUsername2.addEventListener('blur', function(e) { 
	checkUsernameListenerStyle(e, 8); 
	}, false);                                                                        
   
// a little demo to show bubbling (in this case, from an input to the div it contains).
// var elEventDiv = document.getElementById('eventobjects');    
// elUsername2.addEventListener('click', showAlert, false); 
// elEventDiv.addEventListener('click', showAlert, false);       
   
function showAlert(ev) {  
	if (ev.preventDefault) { 
		ev.preventDefault(); 
	}
	alert("Hey, you triggered the alert from " + this.id);  
	ev.stopPropagation();
	alert("Event propagation halted.");  
}     
  
// and here is a little demo based on the same code as above that -stops- bubbling up. 
// var elEventDiv = document.getElementById('eventobjects');    
// elUsername2.addEventListener('click', showAlert, false); 
// elEventDiv.addEventListener('click', showAlert, false);       

// here also is a little demo that allows us to overwrite a default behavior
var el404 = document.getElementById("a404");    
if (el404.addEventListener) { 
	el404.addEventListener('click', showAlert, false);       
} 
// or, using an anon function ... 
// el404.addEventListener('click', function(event) { showAlert(event); }, false);   

//just a little test of the UI events. 
// window.addEventListener('load', function(e) { alert(e.target + " loaded!"); }, false); 
      
// //how about a big ol' popup?
// var msg = '<div class=\"header\"><a id=\"close\" href=\"#\">close X</a></div>'; 
// msg += '<div><h2>System Maintenance</h2>'; 
// msg += 'Blah blah blah server update.'; 
// msg += "</div>"; 
// 
// var elNote = document.createElement('div'); 
// elNote.setAttribute('id', 'note'); 
// elNote.innerHTML = msg; 
// document.body.appendChild(elNote); 
// 
// function dismissNote() { 
// 	document.body.removeChild(elNote); 
// 	}
// 
// var elClose = document.getElementById('close'); 
// elClose.addEventListener('click', dismissNote, false);     

//end of event handler section
setVisibility('flowcontrol', false); 
setVisibility('domtree', false); 
setVisibility('builtins', false);
setVisibility('dominfo', false);

document.write("<p>The script js_and_jq.js has been completed at this location.</p>");      