var randomNumber = Math.floor(Math.random() * 101); 

var userGuess;
var guessCount = 0; // Kullanıcının tahmin sayacı

do {
  userGuess = +prompt("Guess a number between 0 and 100:");

  if (userGuess < 0 || userGuess > 100) {
    alert("Please enter a number between 0 and 100.");
  } else {
    guessCount++; // girilen sayiyi artirir. 

    if (userGuess === randomNumber) {
      alert("Congratulations! You guessed right.");
    } else if (userGuess < randomNumber) {
      alert("Enter a larger number.");
    } else {
      alert("Enter a smaller number.");
    }
  }
} while (userGuess !== randomNumber); // girilen sayi esit degilse döngü devam eder.

alert("Total number of guesses: " + guessCount);
