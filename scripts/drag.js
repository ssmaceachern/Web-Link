/**
 * @author Sean
 */

/*Mouse starting positions*/
var _mstartX = 0;
var _mstartY = 0;

/*Current element offset*/
var _offsetX = 0;
var _offsetY = 0;

//Element to be passed from onMouseDown to OnMouseMove
var _dragElement;
var _oldZIndex = 0;
var _debug = $('debug');

InitDrag();
function InitDrag(){
	document.onmousedown = OnMouseDown;
	document.onmouseup = OnMouseUp;	
}

function OnMouseDown(e){
	//Needed since IE doesn't incorporate event passing
	if(e == null)
		e = window.event;
		
	//IE uses srcElement
	var target = e.target != null ? e.target : e.srcElement;

	//_debug.innerHTML = target.className == 'drag-element' ? 'draggable element clicked' : 'NON-draggable element clicked';

	if(e.button == 0 && target.className == 'drag-element'){
		//Mouse's position
		_mstartX = e.clientX;
		_mstartY = e.clientY;
		
		//Clicked element's position
		_offsetX = ExtractNumber(target.style.left);
		_offsetY = ExtractNumber(target.style.top);
		
		//Make sure dragged elements are brought to the front
		_oldZIndex = target.style.zIndex;
		target.style.zIndex = 10000;
		
		//Access the element in OnMouseMove
		_dragElement = target;
		
		//Start moving the element with the mouse
		document.onmousemove = OnMouseMove;
		
		document.body.focus();
		target.ondragstart = function(){return false;};
		
		return false;
	}
}

function OnMouseMove(e) { 
	if (e == null) 
		var e = window.event; 
	
	// Code that performs the 'Drag'
	 _dragElement.style.left = (_offsetX + e.clientX - _mstartX) + 'px'; 
	 _dragElement.style.top = (_offsetY + e.clientY - _mstartY) + 'px'; 
	 
	 _debug.innerHTML = '(' + _dragElement.style.left + ', ' + _dragElement.style.top + ')'; 
}

function OnMouseUp(e) { 
	if (_dragElement != null) { 
		_dragElement.style.zIndex = _oldZIndex; 
		
		// Reset events until user activates OnMouseDown 
		document.onmousemove = null; 
		document.onselectstart = null; 
		_dragElement.ondragstart = null; 
		
		// this is how we know we're not dragging 
		_dragElement = null; 
		_debug.innerHTML = 'mouse up'; } 
}

//Utility Function
function ExtractNumber(value) { 
	var n = parseInt(value); 
	return n == null || isNaN(n) ? 0 : n; 
} 

// Shortcut
function $(id) { return document.getElementById(id); }
