/**
 * @author Sean
 */



function create_node(){
	//alert("New node");
	var newNode = document.createElement("div");	
	newNode.className = "drag-element";
	newNode.id = "item";
	newNode.innerHTML += "Test element";
	document.body.appendChild(newNode);
}
