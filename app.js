var randomNumber = Math.floor(Math.random() * 101); // 0 ile 100 arasında random bir sayı üretir
var guessCount = 0; // Kullanıcının tahmin sayacı

function checkGuess() {
  var userGuess = parseInt(document.getElementById("guessInput").value);
  var errorMessage = document.querySelector(".error-message");

  while (true) {
    if (userGuess < 0 || userGuess > 100) {
      errorMessage.innerText = "Please enter a number between 0 and 100.";
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

    guessCount++; // Tahmin sayacını artır
    document.querySelector(".p2").innerText =
      "Number of attempts: " + guessCount;
    document.querySelector(".error-message").innerText = "";
    break;
  }
}
