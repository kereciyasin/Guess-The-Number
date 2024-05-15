var randomNumber = Math.floor(Math.random() * 101); // 0 ile 100 arası rastgele sayı

var userGuess;
var guessCount = 0; // Kullanıcının tahmin sayacı

do {
  userGuess = +prompt("0 ile 100 arasında bir sayı tahmin edin:");

  if (userGuess < 0 || userGuess > 100) {
    alert("Lütfen 0 ile 100 arasında bir sayı girin.");
  } else {
    guessCount++; // girilen sayiyi artirir. 

    if (userGuess === randomNumber) {
      alert("Tebrikler! Doğru tahmin ettiniz.");
    } else if (userGuess < randomNumber) {
      alert("Daha büyük bir sayı girin.");
    } else {
      alert("Daha küçük bir sayı girin.");
    }
  }
} while (userGuess !== randomNumber); // girilen sayi esit degilse döngü devam eder.

alert("Toplam tahmin sayınız: " + guessCount);
