
var letter= "X";

var styleBoxElements = function(){
var gameBoxes = document.querySelectorAll("td");
for (var i = 0; i < gameBoxes.length; i++) {
gameBoxes[i].addEventListener("click", selectItem);
}
};



var selectItem = function(){
	// console.log("Clicked item:"+this + event);
	if (this.innerText === ""){
	this.innerText = letter;
	nextItem();
	}
};

function nextItem() {
	if (letter === "X") {
		letter = "O";
}else {
	letter = "X";
}
};


var initaliaze = function(){
	styleBoxElements();
};

window.onload = initaliaze;

// document.getElementById("box1").addEventListener("click", selectItem);
// document.getElementById("box2").addEventListener("click", selectItem);
