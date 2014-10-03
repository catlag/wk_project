var styleBoxElements = function(){
var gameBoxes = document.querySelectorAll(".box");
for (var i = 0; i < gameBoxes.length; i++) {
gameBoxes[i].addEventListener("click", selectItem);
console.log(gameBoxes[i]);
}
};



var selectItem = function( event ){
	console.log("Clicked item:"+this + event);
document.querySelector("img").setAttribute("src","./cross.png");
};

styleBoxElements();