
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

  if (dice1 !== 1 && dice2 !== 1){
    var totalDice = dice1 + dice2;
    rollScore = totalDice;
    this.turnScore += rollScore;

  }else{
    rollScore = 0;
    this.turnScore = 0;
    return "Hit One";
  }

  diceArray.push(dice1, dice2);
  return diceArray;
};

Player.prototype.stop = function() {
  this.score += this.turnScore
  this.turnScore = 0;

}

Player.prototype.newTurn = function() {
  this.turnScore = 0;
};

Player.prototype.scoreCheck = function() {
  if(this.score >= 10){
    return "Win";
  };
};

Player.prototype.newGame = function(){
  this.turnScore = 0;
  this.score = 0;


}



$(document).ready(function() {

  $("#player-name-form").submit(function(event) {
    event.preventDefault();

    var player1input = $("#player-1").val();
    var player2input = $("#player-2").val();

    $(".player-1-name").text(player1input);
    $(".player-2-name").text(player2input);

    var player1 = new Player(player1input, 0, 0);
    var player2 = new Player(player2input, 0, 0);
    $(".buttons-2").hide();

// PLAYER ONE ROLL AND STOP BUTTON BELOW


      var player1Rolls = function(){
          $(".roll-1").click(function() {

            var player1Dice = player1.rollDie();

            $(".player-1-roll").text(" " + player1Dice);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-1-total-score").text(" " + player1.score);

            if(player1Dice === "Hit One"){
              $(".buttons-1").hide();
              $(".buttons-2").show();
            };

            var winner = player1.scoreCheck();

          });
      };


      var player1Stops = function(){
        $(".stop-1").click(function(){

          player1.stop();
          $(".player-1-total-score").text(" " + player1.score);
          $(".player-1-score").text(" " + player1.turnScore);


          var winner = player1.scoreCheck();

          if(winner === "Win"){
            alert("Congratulations " + player1.playerName +" you win! GAME OVER!")
            player1.newGame();
            player2.newGame();
            $(".player-1-total-score").text(" " + player1.score);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-2-total-score").text(" " + player2.score);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-1-roll").text(" ");
            $(".player-2-roll").text(" ");

          }else{
            $(".buttons-1").hide();
            $(".buttons-2").show();
          }

        });
      };




// PLAYER TWO ROLL AND STOP BUTTON BELOW

      var player2Rolls = function(){
          $(".roll-2").click(function() {

            var player2Dice = player2.rollDie();

            $(".player-2-roll").text(" " + player2Dice);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-2-total-score").text(" " + player2.score);

            if(player2Dice === "Hit One"){
              $(".buttons-2").hide();
              $(".buttons-1").show();
            };

            var winner = player2.scoreCheck();

          });
      };



      var player2Stops = function(){
        $(".stop-2").click(function(){

          player2.stop();
          $(".player-2-total-score").text(" " + player2.score);
          $(".player-2-score").text(" " + player2.turnScore);


          var winner = player2.scoreCheck();

          if(winner === "Win"){
            alert("Congratulations " + player2.playerName +" you win! GAME OVER!")
            player1.newGame();
            player2.newGame();
            $(".player-1-total-score").text(" " + player1.score);
            $(".player-1-score").text(" " + player1.turnScore);
            $(".player-2-total-score").text(" " + player2.score);
            $(".player-2-score").text(" " + player2.turnScore);
            $(".player-1-roll").text(" ");
            $(".player-2-roll").text(" ");
            $(".buttons-2").hide();
            $(".buttons-1").show();
          }else{
            $(".buttons-2").hide();
            $(".buttons-1").show();
          }

        });
      };

      player1Rolls();
      player1Stops();
      player2Rolls();
      player2Stops();

  });

});
