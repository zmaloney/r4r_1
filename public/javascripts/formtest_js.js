var elForm = document.getElementById('testform'); 
var elSelect = document.getElementById('selectGift'); 
var elHint = document.getElementById('giftHint'); 
var elCounter = document.getElementById('counter');  
var elAddItem = document.getElementById('btnAddItem');  
                                                                 
//pleasantly, this does not trigger the event listener. Why? 
// BECAUSE IT'S NOT SET YET. ;)
elSelect.getElementsByTagName('option')[0].selected = 'selected';    

function addClass(element, classToAdd) {
	var currentClassValue = element.className;
	 
	if (currentClassValue.indexOf(classToAdd) == -1) {
		if ((currentClassValue == null) || (currentClassValue === "")) {
			element.className = classToAdd;
		} else {
			element.className += " " + classToAdd;
		}
	} 
	//alert("Completed adding class '" + classToAdd + "'. Current element class : " + element.className); 
}

function removeClass(element, classToRemove) {
	var currentClassValue = element.className;

	if (currentClassValue == classToRemove) {
		element.className = "";
		return;
	}

	var classValues = currentClassValue.split(" ");
	var filteredList = [];

	for (var i = 0 ; i < classValues.length; i++) {
		if (classToRemove != classValues[i]) {
			filteredList.push(classValues[i]);
		}
	}

	element.className = filteredList.join(" ");
}
        
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

function packageHint() { 
	var package = this.options[this.selectedIndex].value; 
	if (package == 'holes') { 
		setSpanValue(elHint, 'Warning : contains live animal.'); 
		addClass(elHint, 'emphasis');  
	} 
	else { 
		setSpanValue(elHint, 'Looks OK!'); 
		removeClass(elHint, 'emphasis');
	}    
}  

function addItem(e) { 
	e.preventDefault(); 
	var newEl = document.createElement('option'); 
	newEl.text = "Special gift"; 
	newEl.value = "special"; 
	elSelect.options.add(newEl);    
	alert("Looks like we executed OK."); 
}    
            
function updateCount() { 
	var listitems = elSelect.getElementsByTagName('li').length; 
	setSpanValue(elCounter, listItems); 
}

elSelect.addEventListener('change', packageHint, false);   
elAddItem.addEventListener('click', addItem, false); 

document.write("Script file 'formtest_js' has completed running here."); 