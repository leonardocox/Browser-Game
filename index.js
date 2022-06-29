//all of logic will go into one giant game function
function game() {
  //variables declared for future funcs.
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  let page = document.querySelector("html");
  //function for event listeners
  function playTheGame() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissor = document.getElementById("scissor");
    let playerOptions = [rock, paper, scissor];
    let computerOptions = ["rock", "paper", "scissors"];

    playerOptions.forEach((buttonChoices) => {
      //adding event listeners
      buttonChoices.addEventListener("click", function () {
        //for moves counter
        let movesLeft = document.getElementById("moveCounter");
        moves++;
        movesLeft.innerText = "Moves Left: " + (5 - moves);
        let randomChoice = Math.floor(Math.random() * 3);
        let computerPick = computerOptions[randomChoice];
        //func to see who wins (winner defined after this)
        winner(this.innerText, computerPick);
        //for when no moves left gameOver func later in code
        if (moves === 5) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  }
  playTheGame();
}
game();
