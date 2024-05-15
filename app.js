var randomNumber = Math.floor(Math.random() * 101); // rastgele sayi
var guessCount = 0; // sayac 

function checkGuess() {
  var userGuess = parseInt(document.getElementById("guessInput").value); // kullanicidan ister
  var errorMessage = document.querySelector(".error-message"); // mesaj 

  while (true) {
    if (userGuess < 0 || userGuess > 100) {
      errorMessage.innerText = "Please enter a number between 0 and 100!";
      break;
    } else if (userGuess === randomNumber) {
      document.querySelector(".p1").innerText =
        "Congratulations! You guessed right.";
      break;
    } else if (userGuess < randomNumber) {
      document.querySelector(".p1").innerText =
        "The number you entered is less than the random number.";
    } else {
      document.querySelector(".p1").innerText =
        "The number you entered is greater than the random number.";
    }

    guessCount++; 
    document.querySelector(".p2").innerText =
      "Number of attempts: " + guessCount;
    document.querySelector(".error-message").innerText = "";
    break;
  }
}
