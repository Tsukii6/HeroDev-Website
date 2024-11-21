const randomNumber = Math.random();

let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
  score = {
    wins: 0,
    lose: 0,
    ties: 0
  }
}

updateScoreEle()

function pickComputerMove() {
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper'
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissor'
  }
  return computerMove
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'paper') {
      result = 'You lose'
    } else if (computerMove === 'scissor'){
      result = 'You win!'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'scissor') {
      result = 'You lose'
    } else if (computerMove === 'rock'){
      result = 'You win!'
    }

  } else if (playerMove === 'scissor') {
    if (computerMove === 'scissor') {
      result = 'Tie'
    } else if (computerMove === 'rock') {
      result = 'You lose'
    } else if (computerMove === 'paper'){
      result = 'You win!'
    }
  }

  if (result === 'Tie') {
    score.ties += 1
  } else if (result === 'You lose') {
    score.lose += 1
  } else if (result === 'You win!') {
    score.wins += 1
  }

  localStorage.setItem('score', JSON.stringify(score))

  document.querySelector('.displayResult').innerHTML = result;
  document.querySelector('.play').innerHTML = `You <img class="play-img" src="./${playerMove}-emoji.png"> <img class="play-img" src="./${computerMove}-emoji.png"> Computer `
  
  updateScoreEle()
}

function updateScoreEle() {
  document.querySelector('.displayScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.ties}`
}