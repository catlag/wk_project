
var letter= "X";


// Goes thru all the td's and adds an event listener
var styleBoxElements = function(){
var gameBoxes = document.querySelectorAll("td");
for (var i = 0; i < gameBoxes.length; i++) {
gameBoxes[i].addEventListener("click", selectItem);	

}
};


// Check to see if td is empty and if is then writes the var letter ( which is x)
// on the td. It then goes on to the next function. Pushed box id into player array.
var selectItem = function(){
	console.log("Clicked item:"+this.id + event);
	if (this.innerText === ""){
	this.innerText = letter;
	checkWin();
	nextItem();
	}
};

// Checks to see if variable letter is set to X and if it is then sets it to "O" if not 
// it leaves it as it is
function nextItem() {
	if (letter === "X") {
		letter = "O";
		playerTurn();
		checkWin();
	}else {
	letter = "X";
	playerTurn();
	checkWin();
	}
}

var playerTurn = function(){
	document.getElementById("p1").innerHTML = "It's " + letter + "s turn!";
		
};

var resetButtonHandler = function() { 
var gameBoxes = document.querySelectorAll("td");
for (var i = 0; i < gameBoxes.length; i++) {
	if (gameBoxes[i].innerText !== "") {
		gameBoxes[i].innerText = "";
		letter = "X";
		playerTurn();
		document.getElementById("p1").innerHTML = "X Starts First!";
	}

}
};

var initaliaze = function(){
	styleBoxElements();
	document.querySelector("#reset").addEventListener("click",resetButtonHandler);

};

window.onload = initaliaze;


// Checks for winner!!!!!!!!!




  var val0 = document.getElementById("b1");
  var val1 = document.getElementById("b2");
  var val2 = document.getElementById("b3");
  var val3 = document.getElementById("b4");
  var val4 = document.getElementById("b5");
  var val5 = document.getElementById("b6");
  var val6 = document.getElementById("b7");
  var val7 = document.getElementById("b8");
  var val8 = document.getElementById("b9");
  

  var checkWin = function(){
  if(val0.innerHTML === "X" && val1.innerHTML === "X" && val2.innerHTML === "X" || 
  	val3.innerHTML === "X" && val4.innerHTML === "X" && val5.innerHTML === "X"  ||
  	val6.innerHTML === "X" && val7.innerHTML === "X" && val8.innerHTML === "X"  ||
  	val0.innerHTML === "X" && val3.innerHTML === "X" && val6.innerHTML === "X" || 
  	val1.innerHTML === "X" && val4.innerHTML === "X" && val7.innerHTML === "X"  ||
  	val2.innerHTML === "X" && val5.innerHTML === "X" && val8.innerHTML === "X"  ||
	val0.innerHTML === "X" && val4.innerHTML === "X" && val8.innerHTML === "X"  ||
	val2.innerHTML === "X" && val4.innerHTML === "X" && val6.innerHTML === "X" ){
  	document.getElementById("p1").innerHTML = "X wins! Start a new game!";
  	console.log("X wins");
  	} else if (val0.innerHTML === "O" && val1.innerHTML === "O" && val2.innerHTML === "O" || 
  	val3.innerHTML === "O" && val4.innerHTML === "O" && val5.innerHTML === "O"  ||
  	val6.innerHTML === "O" && val7.innerHTML === "O" && val8.innerHTML === "O"  ||
  	val0.innerHTML === "O" && val3.innerHTML === "O" && val6.innerHTML === "O" || 
  	val1.innerHTML === "O" && val4.innerHTML === "O" && val7.innerHTML === "O"  ||
  	val2.innerHTML === "O" && val5.innerHTML === "O" && val8.innerHTML === "O"  ||
	val0.innerHTML === "O" && val4.innerHTML === "O" && val8.innerHTML === "O"  ||
	val2.innerHTML === "O" && val4.innerHTML === "O" && val6.innerHTML === "O" ) {
  	document.getElementById("p1").innerHTML = "O wins! Start a new game!";
  			console.log("O wins");
	}
};
 
