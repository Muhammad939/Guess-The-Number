// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the player's guess
function checkGuess() {
  // Get the player's guess from the input field
  const guess = parseInt(document.getElementById('guessInput').value);

  // Get the message element
  const message = document.getElementById('message');

  // Check if the guess is correct
  if (guess === randomNumber) {
    message.textContent = 'Congratulations! You guessed the number!';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
  } else {
    message.textContent = 'Too high! Try again.';
  }
}
