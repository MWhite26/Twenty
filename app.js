alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. You will draw numbers 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press 'y'.")

let finalComputerScore = 0;
let finalUserScore = 0;
var finalPlayAgain = true;


do {
var computerScore = 0;
var userScore = 0;
alert("Now... it is the computers turn.");
  
do {
var num = genRandomNum(1, 10);
computerScore+=num;
alert("The new number is: " + num + "\r\n\The Computer's score is now: " +computerScore);
} while (computerScore < 16);
  
if (computerScore <= 20) {
alert("The computer will stop with a score of: " +computerScore);
} else {
  alert("You Win! Final Scoring:\r\n\Computer Score: " +computerScore+ "\r\n\Your Score: " +userScore);
  finalUserScore++;
  alert("Total score: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);
  var playAgain = window.confirm("Would you like to play again?");
  console.log(playAgain);
  if (playAgain == false) {
    finalPlayAgain = false;
  }
}

alert("Now it's your turn!\r\n\The score to beat is: " +computerScore);

do {
  var num = genRandomNum(1, 10);
  userScore+=num;
  alert("The new number is: " +num+ "\r\n\Your score is now: " +userScore);
do {
var newNum = prompt("Would you like another number? Please type, 'y' for yes, 'n' for no.");
} while (newNum != "y" && newNum != "n");
} while (newNum = "y" && userScore <= 20 && newNum != "n");
if (userScore > 20) {
  alert("You lost to the computer! ");
  alert("Final scoring: \r\n\Computer's Score: " +computerScore+ "\r\n\Your Score: " +userScore);
  finalComputerScore++;
  alert("Total score: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);
  var playAgain = window.confirm("Would you like to play again?");

  if (playAgain == false) {
    finalPlayAgain = false;
  }
} else {
  alert("Your final score was: " +userScore);
}
  if (userScore > computerScore) {
    alert("You won!\r\n\Computer Score: " +computerScore+ "\r\n\Your Score: " +userScore);
    finalUserScore++;
    alert("Total score: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);
  } else if (userScore < computerScore) {
    alert("You lost!\r\n\Computer Score: " +computerScore+ "\r\n\Your Score: " +userScore);
    finalComputerScore++;
    alert("Total score: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);
  } else {
    alert("You tied!\r\n\Computer Score: " +computerScore+ "\r\n\Your Score: " +userScore);
    alert("Each player has received 1 point towards their final score.");
    finalComputerScore++;
    finalUserScore++;
    alert("Total score: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);
  }
  var playAgain = window.confirm("Would you like to play again?")
  console.log(playAgain);
  if (playAgain == false) {
    finalPlayAgain = false;
  }
} while (finalPlayAgain == true);

alert("Thanks for playing. The final scores were: \r\n\Computer Score: " +finalComputerScore+ "\r\n\Your Score: " +finalUserScore);

 
function genRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

