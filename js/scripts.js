var Player1 = "";
var Player2 = "";

function Player(name) {
  this.name = name;
  this.total = 0;
  this.diceFace = 0;
  this.score = 0;
}
function diceThrow() {
  return Math.floor(6 * Math.random()) + 1;
}

Player.prototype.rollAOne = function() {
  if (this.diceFace === 1) {
    this.score = 0;
    $('.diceRoll2').toggle();
    $('.diceRoll1').toggle();
  } else {
    this.score += this.diceFace;
  }
}
Player.prototype.hold = function() {
  this.total += this.score;
  this.score = 0;
}
Player.prototype.winner = function() {
  if (this.total >= 100) {
    alert("Congratulations " + this.name + " You have won!!");
  }
}
$(document).ready(function() {
  $('form#rollDice').submit(function(event) {
    event.preventDefault();
    var p1 = $('input#Player1').val()
    var p2 = $('input#Player2').val()

    Player1 = new Player(p1);
    Player2 = new Player(p2);

    console.log("Player 1 is: " + Player1.name + " And Player 2 is: " + Player2.name);
  });
  $('.diceRoll1').click(function(event){
  event.preventDefault();
  Player1.diceFace = diceThrow();
  $('.rollScore1').empty()
  $('.overallScore1').empty();
  $('.rollScore1').append("You rolled a: " + Player1.diceFace);
  Player1.rollAOne();
  $('.overallScore1').append("Current total i: " + Player1.score);
});
$('.diceRoll2').click(function(event) {
  event.preventDefault();
  Player2.diceFace = diceThrow();
  $('.rollScore2').empty()
  $('.overallScore2').empty();
  $('.rollScore2').append("You rolled a: " + Player2.diceFace);
  Player2.rollAOne();
  $('.overallScore2').append("Current total is: " + Player2.score);
});
$("#hold1").click(function(event) {
    event.preventDefault();
$("#hold2").click(function(event) {
    event.preventDefault();
    if ($('.diceRoll1').is(':visible')) {
         Player1.hold();
         $('.rollScore1').empty();
         $('.finalScore1').empty();
         $('.finalScore1').append("Score for "+Player1.name+" is: " + Player1.total);
         $(".overallScore1").empty();
         $('.diceRoll2').toggle();
         $('.diceRoll1').toggle();
         Player1.winner();
       } else {
   Player2.hold();
   $('.rollScore2').empty();
   $('.finalScore2').empty();
   $('.finalScore2').append("Score for "+Player2.name+" is: " + Player2.total);
   $(".overallScore2").empty();
   $('.diceRoll2').toggle();
   $('.diceRoll1').toggle();
   Player2.winner();
 }
});
});
