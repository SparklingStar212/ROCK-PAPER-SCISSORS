(() => {
  const playerScore = document.getElementById("playerScore");
  const currentRound = document.getElementById("currentRound");
  const result = document.getElementById("result");
  const computerScore = document.getElementById("computerScore");
  const playerMove = document.getElementById("playerMove");
  const computerMove = document.getElementById("computerMove");
  const pickedRock = document.getElementById("pickedRock")
  const pickedPaper = document.getElementById("pickedPaper")
  const pickedScissors = document.getElementById("pickedScissors")
  const restart = document.getElementById("restart")


  playerScore.textContent = 0;
  computerScore.textContent = 0;
  let minRound = 0;
  const maxRound = 5;

  currentRound.textContent = `Round ( ${minRound} / ${maxRound} )`

  const choices = ['rock', 'paper', 'scissors']


  // if (minRound >= 5) {
  //   pickedRock.classList.add('disabled')
  //   pickedPaper.classList.add('disabled')
  //   pickedScissors.classList.add('disabled')
  // }

  const computerPicked = () => {
    const randomchoices = Math.floor(Math.random() * 3)
    console.log(randomchoices)
    let i = randomchoices;
    computerMove.src = `Images/${choices[i]}.png`
    return choices[i];
  }

  pickedRock.onclick = () => {
    playerMove.src = `Images/rock.png`
    const computerChoice = computerPicked();
    if (computerChoice == 'rock') {
      result.textContent = "Make Your Move"
    } else if (computerChoice == 'paper') {
      result.textContent = "Computer won this round!"
      computerScore.textContent = Number(computerScore.textContent) + 1;
    } else if (computerChoice == 'scissors') {
      result.textContent = "You Won this round!"
      playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    minRound = minRound + 1;
    currentRound.textContent = `Round ( ${minRound} / ${maxRound} )`;
    if (minRound >= 5) {
      pickedRock.classList.add('disabled')
      pickedPaper.classList.add('disabled')
      pickedScissors.classList.add('disabled')
      if (computerScore.textContent > playerScore.textContent) {
        result.textContent = "Game Over - Computer Won!"
      } else if (computerScore.textContent == playerScore.textContent) {
        result.textContent = "Game Over - It's A Draw!"
      } else if (computerScore.textContent < playerScore.textContent) {
        result.textContent = "Game Over - You Won!"
      }
    }
  }

  pickedPaper.onclick = () => {
    playerMove.src = `Images/paper.png`
    const computerChoice = computerPicked();
    if (computerChoice == 'paper') {
      result.textContent = "Make Your Move"
    } else if (computerChoice == 'scissors') {
      result.textContent = "Computer won this round!"
      computerScore.textContent = Number(computerScore.textContent) + 1;
    } else if (computerChoice == 'rock') {
      result.textContent = "You Won this round!"
      playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    minRound = minRound + 1;
    currentRound.textContent = `Round ( ${minRound} / ${maxRound} )`;
    if (minRound >= 5) {
      pickedRock.classList.add('disabled')
      pickedPaper.classList.add('disabled')
      pickedScissors.classList.add('disabled')
      if (computerScore.textContent > playerScore.textContent) {
        result.textContent = "Game Over - Computer Won, You Lose!"
      } else if (computerScore.textContent == playerScore.textContent) {
        result.textContent = "Game Over - It's A Draw!"
      } else if (computerScore.textContent < playerScore.textContent) {
        result.textContent = "Game Over - You Won!"
      }
    }
  }

  pickedScissors.onclick = () => {
    playerMove.src = `Images/scissors.png`
    const computerChoice = computerPicked();
    if (computerChoice == 'scissors') {
      result.textContent = "Make Your Move"
    } else if (computerChoice == 'rock') {
      result.textContent = "Computer won this round!"
      computerScore.textContent = Number(computerScore.textContent) + 1;
    } else if (computerChoice == 'paper') {
      result.textContent = "You Won this round!"
      playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    minRound = minRound + 1;
    currentRound.textContent = `Round ( ${minRound} / ${maxRound} )`;
    if (minRound >= 5) {
      pickedRock.classList.add('disabled')
      pickedPaper.classList.add('disabled')
      pickedScissors.classList.add('disabled')
      if (computerScore.textContent > playerScore.textContent) {
        result.textContent = "Game Over - Computer Won, You Lose!"
      } else if (computerScore.textContent == playerScore.textContent) {
        result.textContent = "Game Over - It's A Draw!"
      } else if (computerScore.textContent < playerScore.textContent) {
        result.textContent = "Game Over - You Won!"
      }
    }
  }

  restart.onclick = () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    minRound = 0;
    const maxRound = 5;
    currentRound.textContent = `Round ( ${minRound} / ${maxRound} )`
    result.textContent = "Make Your Move"
    pickedRock.classList.remove('disabled')
    pickedPaper.classList.remove('disabled')
    pickedScissors.classList.remove('disabled')
  }


})();