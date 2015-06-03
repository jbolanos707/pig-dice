describe('Player', function() {
  it("returns the player's name", function() {
    var testPlayer = new Player("Jess", 0, 0);
    expect(testPlayer.playerName).to.equal("Jess");
  });

  it("allows player to roll dice", function(){
    var testPlayer = new Player("Jess", 0, 0);
    var turnOne = testPlayer.rollDie();
    expect("0123456").to.include(testPlayer.turnScore);
  });

  it("generates random numbers to each dice per turn", function(){
    var testPlayer = new Player("Jess", 0, 0);
    var turnOne = testPlayer.rollDie();
    expect("0123456").to.include(testPlayer.turnScore);
  });

  it("resets turn score to 0 at the start of each turn", function() {
    var testPlayer = new Player("Jess", 0, 0);
    var turnOne = testPlayer.rollDie();
    testPlayer.newTurn();
    expect(testPlayer.turnScore).to.equal(0);
  });

  it("returns players name when they hit 100 or more in their score", function(){
    var testPlayer = new Player("Jen", 0, 0);
    testPlayer.score = 100;
    expect(testPlayer.scoreCheck()).to.equal("Jen is the Winner!");
  });
});
