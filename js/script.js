"use strict";

function Player(playerName, score, turnScore) {
  this.playerName = playerName;
  this.score = score
  this.turnScore = turnScore;
  console.log(this.turnscore)
};

// rollScore refers to one roll of the dice
// turnScore refers to the total amount of points added from several rolls of the dice
// score refers to total score

Player.prototype.rollDie = function(){
  var rollScore = 0

  var dice1 = Math.floor(Math.random()*(7-1)+1);
  var dice2 = Math.floor(Math.random()*(7-1)+1);

  if (dice1 !== 1 && dice2 !== 1){
    var totalDice = dice1 + dice2
    rollScore = totalDice
    this.turnScore += rollScore

  }else{
    rollScore = 0
    this.turnScore = 0
    return "Hit One";
  }

  this.score += rollScore
}

Player.prototype.newTurn = function() {
  this.turnScore = 0;
}

Player.prototype.scoreCheck = function() {
  if(this.score >= 100){
    return this.playerName + " is the Winner!"
  }
}

function Game(nameOne, nameTwo){
  var player1 = new Player(nameOne, 0, 0);
  var player2 = new Player(nameTwo, 0, 0);
}



//jQuery
// $( document ).ready(function() {
//
// }
