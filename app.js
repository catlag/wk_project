
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
}

// function check() {
// 	if (x )
// 		1,2,3
// 		4,5,6
// 		7,8,9
// 		1,4,7
// 		2,5,8
// 		3,6,9
// 		1,5,9
// 		3,5,7

// }
var resetButtonHandler = function() { 
var gameBoxes = document.querySelectorAll("td");
for (var i = 0; i < gameBoxes.length; i++) {
	if (gameBoxes[i].innerText !== "") {
		gameBoxes[i].innerText = "";
	}

}
};




var initaliaze = function(){
	styleBoxElements();
	document.querySelector("#reset").addEventListener("click",resetButtonHandler);

};

window.onload = initaliaze;

// document.getElementById("box1").addEventListener("click", selectItem);
// document.getElementById("box2").addEventListener("click", selectItem);
