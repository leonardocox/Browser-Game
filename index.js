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
  //calling function
  playTheGame();
  //for deciding winner
  const winner = (player, computer) => {
    const result = document.getElementById("result");
    const playerScoreBoard = document.getElementById("playerScore");
    const computerScoreBoard = document.getElementById("computerScore");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    //logic to show winning or losing conditions
    if (player === computer) {
      result.innerText = "Tie";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.innerText = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.innerText = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.innerText = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.innerText = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.innerText = "Computer Won";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.innerText = "Player Won";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  // Function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.getElementById("move");
    const result = document.getElementById("result");
    const reloadBtn = document.getElementById("restart");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });
    chooseMove.style.color = "cornflowerblue";
    chooseMove.innerText = "Game Over!!";
    movesLeft.style.display = "none";
    //logic for wether they win or lose
    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "DUBS ALL AROUND!!";
      page.style.backgroundImage = "url(assets/confetti.gif)";
      result.style.color = "cornflowerblue";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "Loser Alert (You lost)";
      result.style.color = "thistle";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie";
      result.style.color = "grey";
    }
    reloadBtn.innerText = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };
}
game();
