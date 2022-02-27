/*This function provdes a "heads" or a "tails" case for our cointoss */
let isHeadsOrTails = function () {
  let coinPicture = document.getElementById("coin");
  coinPicture.src = "img/heads.png";

  let randomNumber = Math.floor(Math.random() * 20);
  if (randomNumber > 10) {
    console.log("You Got Heads!");
    return "heads";
  } else {
    console.log("You Got Tails!");
    coinPicture.src = "2.png"
    return "tails";
  }
};



/*The getUserGuess function asks the user to guess heads or tails and
the processes their guess */

let getUserGuess = function() {
  let guess = prompt("Please type heads or tails below.", "heads");
let coinResult = isHeadsOrTails();
  if (guess == "heads") {
    compareGuessToCoin(coinResult, guess);

  } else if (guess == "tails") {
    compareGuessToCoin(coinResult, guess);

  } else {
    console.error("The user guessed something other than heads or tails.")
  }
};

/* final function - compare guess to coin */

let compareGuessToCoin = function(coin, guess) {
  let resultMessage = document.getElementById("result");
  if (coin == guess) {
    resultMessage.innerHTML = "You won!";

  } else { resultMessage.innerHTML = "Sorrry, you lost. Try again!"}
};
