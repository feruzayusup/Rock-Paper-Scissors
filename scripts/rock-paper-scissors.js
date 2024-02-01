let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}; //getting the score from local storage when the page loads or refresh

updateScoreElement();
// resultElement();



function pickComputerMove() { 

let computerMove = '';
const randomNumber = Math.random() ;
if(randomNumber >=0 && randomNumber < 1/3) {
computerMove  = 'rock'; 
}else if(randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove  = 'paper'; 
}else {
 if(randomNumber >=2/3 && randomNumber < 1 ) {
computerMove  = 'scissors'; 
}
}
return computerMove;
}

function updateScoreElement () {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying) {
    intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  
  } else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
 
} 


document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});


document.body.addEventListener('keydown',(event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if(event.key === 'p') {
    playGame('paper');
  } else if(event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'rock') {
    if(computerMove === 'rock') {
    result = 'Tie.';
    } else if(computerMove === 'paper') {
    result = 'You lost.';
    } else if(computerMove === 'scissors') {
    result = 'You won.';
    }
  }
else if(playerMove === 'paper') {
    if(computerMove === 'paper') {
    result = 'Tie.';
    } else if(computerMove === 'rock') {
    result = 'You won.';
    } else if(computerMove === 'scissors') {
    result = 'You lost.';
    }
  }
else if (playerMove === 'scissors') {
    if(computerMove === 'scissors') {
    result = 'Tie.';
    } else if(computerMove === 'paper') {
    result = 'You won.';
    } else if(computerMove === 'rock') {
    result = 'You lost.';
    }
  }

  if(result === 'You won.'){
    score.wins += 1;
  } else if(result === 'You lost.'){
    score.losses += 1;
  } else if(result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score)); //getting score object and storing it in local storage, when we refresh the page score won't get lost

  updateScoreElement();

  document.querySelector('.js-result').
    innerHTML = result;

  document.querySelector('.js-moves'). 
    innerHTML = `You
     <img src="images/${playerMove}.png"
     class="move-icon">
     <img src="images/${computerMove}.png" 
     class="move-icon">
     Computer`;
  
}
