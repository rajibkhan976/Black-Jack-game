let playerScore = 0; //variable that stores corresponding vlaue each time player draws a card
let computerScore = 0; //variable that stores corresponding vlaue each time computer draws a card
let playerTotalScore = 0; //variable that accumulates players total score
let computerTotalScore = 0; //variable that accumulates computers total score

//method for randomly drawing a card between 1-11 by the player
const playersSelectedCard = (lowestPoint, highestPoint) => {
	
	lowestPoint = Math.ceil(lowestPoint);
	highestPoint = Math.floor(highestPoint);
	
	return Math.floor(Math.random() * (highestPoint - lowestPoint)) + lowestPoint;
}
//method for randomly drawing a card between 1-11 by the computer
const computersSelectedCard = (lowestPoint, highestPoint) => {
	
	lowestPoint = Math.ceil(lowestPoint);
	highestPoint = Math.floor(highestPoint);
	
	return Math.floor(Math.random() * (highestPoint - lowestPoint)) + lowestPoint;
}

playerScore = playersSelectedCard(1, 12); //player drawing the 1st card at the start of the game
playerTotalScore += playerScore; //storing the point of the player based on the card drawn 

computerScore = computersSelectedCard(1, 12); //computer drawing the 2nd card at the start of the game
computerTotalScore += computerScore; //storing the point of the computer based on the card drawn 

console.log("Player drew ", playerScore); //message about the 1st card drawn by the player 
console.log("Player score = ", playerTotalScore); //points collected by the player after drawing the 1st card

console.log("Computer drew ", computerScore); //message about the 2nd card drawn by the computer
console.log("Computer score = ", computerTotalScore); //points collected by the computer after drawing the 2nd card

//event listener that determines either the player or computer draw the next card
//it also accumulates the point of both player and computer
//finally it determines the result of the game based on the points of player and computer
window.addEventListener("keydown", function (event) {
	console.log("Player score = ", playerTotalScore);
	console.log("Computer score = ", computerTotalScore);
	if (playerTotalScore < 17 && computerTotalScore < 17) {
		if (event.key.toUpperCase() === "D") {
				playerScore = playersSelectedCard(1, 12);
				playerTotalScore += playerScore;
				console.log("Player drew ", playerScore);
				console.log("Player score = ", playerTotalScore);
			} else if (event.key.toUpperCase() === "S") {
				computerScore = computersSelectedCard(1, 12);
				computerTotalScore += computerScore;
				console.log("Player stopped!");
				console.log("Computer drew ", computerScore);
				console.log("Computer score = ", computerTotalScore);
			} else {
				console.log("Player score = ", playerTotalScore);
				console.log("Computer score = ", computerTotalScore);
			}
		} else {
			if (playerTotalScore === 21) {
				alert('Congratulations you win!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
				playerTotalScore = 0;
				computerTotalScore = 0;
			} else if (computerTotalScore === 21) {
				alert('Haha you loose!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
				playerTotalScore = 0;
				computerTotalScore = 0;
			} else if (playerTotalScore > 21) {
				alert('Haha you loose!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
				playerTotalScore = 0;
				computerTotalScore = 0;
			} else if (computerTotalScore > 21) {
				alert('Congratulations you win!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
				playerTotalScore = 0;
				computerTotalScore = 0;
			} else if (playerTotalScore === computerTotalScore) {
				alert('It is a Draw!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
				playerTotalScore = 0;
				computerTotalScore = 0;
			} else if (playerTotalScore < 21 && computerTotalScore < 21) {
				if (playerTotalScore > computerTotalScore) {
					alert('Congratulations you win!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
					playerTotalScore = 0;
					computerTotalScore = 0;
				} else {
					alert('Haha you loose!' + `\n` + `Computer score: ${computerTotalScore}` + `\n` + `Player score: ${playerTotalScore}`);
					playerTotalScore = 0;
					computerTotalScore = 0;
				}
			} else {
				playerTotalScore = 0;
				computerTotalScore = 0;
			}
		}
});



