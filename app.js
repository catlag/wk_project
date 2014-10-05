
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

	nextItem();
	}

	if (this.innerText ==="O"){
		playerO.push(this.id);
		checkWin();
	}
	else if (this.innerText ==="X") {
		playerX.push(this.id);
	}
};

// Checks to see if variable letter is set to X and if it is then sets it to "O" if not 
// it leaves it as it is
function nextItem() {
	if (letter === "X") {
		letter = "O";
		playerTurn();
	}else {
	letter = "X";
	playerTurn();
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
	}

}
};

var initaliaze = function(){
	styleBoxElements();
	

	document.querySelector("#reset").addEventListener("click",resetButtonHandler);

};

window.onload = initaliaze;

var playerX = [];
var playerO =[];
var winCombo = ["b1","b2","b3"];

// Checks for winner!!!!!!!!!

 

 var checkWin = function() {
 	for (i=0; i <playerO.length; i++){
 		for( j=0; j<winCombo.length; j++){
 			if (playerO[i].equals winCombo[j]) {
 				console.log("you win");
 			}
 		}
 	}
};

// var checkWin  = function () {
// 	var gameBoxes = document.querySelectorAll("td");

// };
// // 
// // Game.prototype.checkWin = function(){
// //         //checks to see if the program (X) has won.
// //         //there are 8 possible ways to victory
		
// //         //checks rows first
// //         if(takenBy[0] == 'X' && takenBy[1] == 'X' && takenBy[2] == 'X'){
// //             return "X";
// //         }
// //         else if (takenBy[3] == 'X' && takenBy[4] == 'X' && takenBy[5] == 'X'){
// //             return "X";
// //         }
// //         else if (takenBy[6] == 'X' && takenBy[7] == 'X' && takenBy[8] == 'X'){
// //             return "X";
// //         }
    
// //         //check cols second
// //         if(takenBy[0] == 'X' && takenBy[3] == 'X' && takenBy[6] == 'X'){
// //             return "X";
// //         }
// //         else if (takenBy[1] == 'X' && takenBy[4] == 'X' && takenBy[7] == 'X'){
// //             return "X";
// //         }
// //         else if (takenBy[2] == 'X' && takenBy[5] == 'X' && takenBy[8] == 'X'){
// //             return "X";
// //         }
    
// //         //checks diagonals third
// //         if(takenBy[0] == 'X' && takenBy[4] == 'X' && takenBy[8] == 'X'){
// //             return "X";
// //         }
// //         else if (takenBy[2] == 'X' && takenBy[4] == 'X' && takenBy[6] == 'X'){
// //             return "X";
// //         }
     
// //         //this checks to see if the User, or O has won
// //         if(takenBy[0] == 'O' && takenBy[1] == 'O' && takenBy[2] == 'O'){
// //             return "O";
// //         }
// //         else if (takenBy[3] == 'O' && takenBy[4] == 'O' && takenBy[5] == 'O'){
// //             return "O";
// //         }
// //         else if (takenBy[6] == 'O' && takenBy[7] == 'O' && takenBy[8] == 'O'){
// //             return "O";
// //         }
    
// //         //check cols second
// //         if(takenBy[0] == 'O' && takenBy[3] == 'O' && takenBy[6] == 'O'){
// //             return "O";
// //         }
// //         else if (takenBy[1] == 'O' && takenBy[4] == 'O' && takenBy[7] == 'O'){
// //             return "O";
// //         }
// //         else if (takenBy[2] == 'O' && takenBy[5] == 'O' && takenBy[8] == 'O'){
// //             return "O";
// //         }
    
// //         //checks diagonals third
// //         if(takenBy[0] == 'O' && takenBy[4] == 'O' && takenBy[8] == 'O'){
// //             return "O";
// //         }
// //         else if (takenBy[2] == 'O' && takenBy[4] == 'O' && takenBy[6] == 'O'){
// //             return "O";
// //         }
    
// //         var isATie = true;
// //         // checks to see if it is a tie
// //         for(var i = 0; i < spacesTaken.length; i++){
// //             if(spacesTaken[i] === false){
// //                 isATie = false;
// //             }
// //         }
// //         if(isATie){
// //             return "tie";
// //         }
    
// //         //If it is not a tie, and neither person has won, it returns "neither"
// //         return "neither";
// //     };








