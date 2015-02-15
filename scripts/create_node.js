/**
 * @author Sean
 */


//Create new node element
function create_node(){
	//alert("New node");
	var newNode = document.createElement("div");	
	newNode.className = "drag-element";
	newNode.id = "item";

	//What makes up a node? A title. A link. And a description
	var nodeTitle = document.createTextNode("Title");
	var nodeLink = document.createTextNode("Link");
	var nodeDescription = document.createTextNode("Description");
	
	newNode.appendChild(nodeTitle);
	var br = document.createElement("br");
	newNode.appendChild(br);
	
	newNode.appendChild(nodeLink);
	var br = document.createElement("br");
	newNode.appendChild(br);
	
	newNode.appendChild(nodeDescription);
	newNode.addEventListener('ondblclick', OnDblClick(newNode), false);
	
	document.body.appendChild(newNode);
}

//Double click to edit node element
function OnDblClick(node) { 
	alert("Double click" + node.toString);
	console.log(node.toString);
}


