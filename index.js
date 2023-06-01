// generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
		
// keep track of the number of attempts
let attempts = 0;
		
function checkGuess() {
	// get the user's guess from the input field
	let guess = parseInt(document.getElementById("guess").value);
			
	// validate the input
	if (isNaN(guess) || guess < 1 || guess > 100) {
		document.getElementById("feedback").innerHTML = "Please enter a valid number between 1 and 100.";
	    return;
	}
			
	// increment the number of attempts
	attempts++;
			
	// compare the user's guess to the secret number
	if (guess === secretNumber) {
		document.getElementById("feedback").innerHTML = "Congratulations! You guessed the number in " + attempts + " attempts.";
	} else if (guess < secretNumber) {
		document.getElementById("feedback").innerHTML = "Sorry, try again. Your guess was too low.";
	} else {
		document.getElementById("feedback").innerHTML = "Sorry, try again. Your guess was too high.";
	}
}
		
function resetGame() {
	// generate a new secret number
	secretNumber = Math.floor(Math.random() * 100) + 1;
			
	// reset the number of attempts
	attempts = 0;
			
	// clear the input field and feedback
	document.getElementById("guess").value = "";
	document.getElementById("feedback").innerHTML = "";
}
