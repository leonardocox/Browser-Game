//all game goes into one function w functions within
const game = () => {
  //variables to show scores and moves
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  let page = document.querySelector("html");
  //function from lines 7-33
  function playTheGame() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissor = document.getElementById("scissor");
    let playerOptions = [rock, paper, scissor];
    let computerChoices = ["rock", "paper", "scissors"];

    playerOptions.forEach((buttonChoices) => {
      //adding listener for clicks
      buttonChoices.addEventListener("click", function () {
        //logic for the moves left counter
        let movesLeft = document.getElementById("moveCounter");
        moves++;
        movesLeft.innerText = "Moves Left: " + (5 - moves);
        let randomChoice = Math.floor(Math.random() * 3);
        let computerPick = computerChoices[randomChoice];
        // Function to see who wins (winning func below)
        winner(this.innerText, computerPick);
        // for when moves run out func two down
        if (moves === 5) {
          gameOver(playerOptions, movesLeft);
        }
      });
    });
  }

  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.getElementById("result");
    const playerScoreBoard = document.getElementById("playerCount");
    const computerScoreBoard = document.getElementById("computerCount");
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

  // Calling playGame function inside game
  playTheGame();
};

// Calling the game function
game();
