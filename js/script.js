
function Player(playerName, score, turnScore) {
  this.playerName = playerName;
  this.score = score;
  this.turnScore = turnScore;
}

// rollScore refers to one roll of the dice
// turnScore refers to the total amount of points added from several rolls of the dice
// score refers to total score

Player.prototype.rollDie = function(){
  var rollScore = 0
  var diceArray = []

  var dice1 = Math.floor(Math.random()*(7-1)+1);
  var dice2 = Math.floor(Math.random()*(7-1)+1);
  console.log(dice1);
  console.log(dice2);
  if (dice1 !== 1 && dice2 !== 1){
    var totalDice = dice1 + dice2;
    rollScore = totalDice;
    this.turnScore += rollScore;

  }else{
    rollScore = 0;
    this.turnScore = 0;
    return "Hit One";
  }

  this.score += rollScore;
  diceArray.push(dice1, dice2);
  return diceArray;
};

Player.prototype.newTurn = function() {
  this.turnScore = 0;
};

Player.prototype.scoreCheck = function() {
  if(this.score >= 100){
    return this.playerName + " is the Winner!";
  };
};

// function Game(player1, player2){
//
// }





$(document).ready(function() {

  $("#player-name-form").submit(function(event) {
    event.preventDefault();

    var player1input = $("#player-1").val();
    var player2input = $("#player-2").val();

    $(".player-1-name").text(player1input);
    $(".player-2-name").text(player2input);

    var player1 = new Player(player1input, 0, 0);
    var player2 = new Player(player2input, 0, 0);

    var player1Dice = player1.rollDie();
    var player2Dice = player2.rollDie();

    $(".player-1-roll").text(player1Dice);
    $(".player-2-roll").text(player2Dice);
    $(".player-1-score").text(player1.turnScore);
    $(".player-2-score").text(player2.turnScore);

  });








});
