/* Back-end */
function Names(name1, name2)  {
  this.name1 = name1;
  this.name2 = name2;
}

var pigGame = {
  player1Score: 0,
  player2Score: 0,
  playerUp: 1,
  turnScore: 0,
};

function dieRoll () {
  die1 = Math.floor(Math.random()*6)+1;
  return die1;
}

var playerRoll = function() {
  var roll = dieRoll();
  if(roll ===1){
    pigGame.turnScore = 0;
    alertEndTurn();
    switchPlayer();
  } else {
    pigGame.turnScore +=roll;
    if (pigGame.playerUp === 1) {
      if (pigGame.turnScore + pigGame.player1Score >= 100) {
        alertWinner(1);
      }
    } else if (pigGame.turnScore + pigGame.player2Score >= 100) {
      alertWinner(2);
  }
  }
  return roll;
}

function hold() {
  var currentPlayer = pigGame.playerUp;
  if (currentPlayer ===1) {
    pigGame.player1Score += pigGame.turnScore;
  } else {
    pigGame.player2Score += pigGame.turnScore;
  }
  pigGame.turnScore = 0;
  switchPlayer();
}
