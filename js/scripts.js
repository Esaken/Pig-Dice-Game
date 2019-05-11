var Player1, Player2;
function player(name, turnTotal, diceRoll, overallScore, active){
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}
function activeUser() {
    if (Player1.active === true && Player2.active === false) {
        $('.Player1Area').children().prop('disabled', false);
        $('.Player1Area').removeClass('disableGamingArea');
        $('.Player2Area').children().prop('disabled', true);
        $('.Player2Area').addClass('disableGamingArea');
    } else {
        $('.Player1Area').children().prop('disabled', true);
        $('.Player1Area').addClass('disableGamingArea');
        $('.Player2Area').children().prop('disabled', false);
        $('.Player2Area').removeClass('disableGamingArea');
    }
};
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    this.diceRoll = randomNo;
    activeUser();
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        if (this.active === Player1.active) { //disable and enable gaming areas when dice is a 1 according to which player is active.
            Player1.active = false;
            Player2.active = true;
            $('.Player1Area').children().prop('disabled', true);
            $('.Player1Area').addClass('disableGamingArea');
            $('.Player2Area').children().prop('disabled', false);
            $('.Player2Area').removeClass('disableGamingArea');
        } else if (this.active === Player2.active) {
            Player2.active = false;
            Player1.active = true;
            $('.Player2Area').children().prop('disabled', true);
            $('.Player2Area').addClass('disableGamingArea');
            $('.Player1Area').children().prop('disabled', false);
            $('.Player1Area').removeClass('disableGamingArea');
        } else {
            console.log("not working");
        }
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};
Player.prototype.hold = function () {
    activeUser();
    this.overallScore += this.turnTotal;
    if (this.overallScore >= 100) {
        alert("Game Over. You win!!!!");
        resetFields();
        alert('To play with a new partner click New Game.')

    } else {
        return false;
    }
    console.log('the turn total is: ' + this.turnTotal);
    return this.overallScore;
};
function resetFields() {
    $("input#Player1Name").val("");
    $("input#Player2Name").val("");
    $('.Player1Area').children().prop('disabled', false);
    $('.Player2Area').children().prop('disabled', false);
    $('.Player1Area').removeClass('disableGamingArea');
    $('.Player2Area').removeClass('disableGamingArea');
    var thePlayers = [Player1, Player2];
    thePlayers.forEach(function (player) {
        player.diceRoll = 0;
        player.turnTotal = 0;
        player.overallScore = 0;
    })
    var outputs = [$('.diceRoll1'), $('.turnScore1'), $('.overallScore1'), $('.diceRoll2'), $('.turnScore2'), $('.overallScore2')];
    outputs.forEach(function (output) {
        output.text(0);
    })

};
var gamer1 = $("#Player1Name").val();
      var gamer2 = $("#Player2Name").val();
      //Put the names into an object using the constructor Players.
      Player1 = new Player(gamer1);
      Player2 = new Player(gamer2);
      //Output the names into each appropriate section
      $(".Player1NameOutput").text(Player1.name);
      $(".Player2NameOutput").text(Player2.name);
      resetFields(); //Clear the form input fields
  });
  $('.roll1').click(function (event) { //roll button for Player1
    event.preventDefault();
    //Activate Gaming Area
    Player1.active = true;
    Player2.active = false;
    Player1.roll(); //call the function to generate random numbers
    $('.diceRoll1').text(Player1.diceRoll); //display the rolled dice number
    $('.turnScore1').text(Player1.turnTotal); //display the turn score (temporary score)
});
$('.roll2').click(function (event) { //roll button for Player2
    event.preventDefault();
    //Activate Gaming Area
    Player2.active = true;
    Player1.active = false;
    Player2.roll(); //call the function to generate random numbers
    $('.diceRoll2').text(Player2.diceRoll); //display the rolled dice number
    $('.turnScore2').text(Player2.turnTotal); //display the turn score (temporary score)
});

//Display overall score when the hold button is clicked
$('.hold1').click(function (event) { //hold button for Player1
    event.preventDefault();
    //Deactivate Gaming Area
    Player1.active = false;
    Player2.active = true;
    Player1.hold(); //call the function to add the turn score to the overall score
    $('.overallScore1').text(Player1.overallScore); //display the overall score
    //Clear dice roll and turn score
    Player1.diceRoll = 0;
    Player1.turnTotal = 0;
    $('.diceRoll1').text(Player1.diceRoll);
    $('.turnScore1').text(Player1.turnTotal);
});
$('.hold2').click(function (event) { //hold button for Player2
    event.preventDefault();
    //Deactivate Gaming Area
    Player2.active = false;
    Player1.active = true;
    Player2.hold(); //call the function to add the turn score to the overall score
    $('.overallScore2').text(Player2.overallScore); //display the overall score
    //Clear turn score and total score
    Player2.diceRoll = 0;
    Player2.turnTotal = 0;
    $('.diceRoll2').text(Player2.diceRoll);
    $('.turnScore2').text(Player2.turnTotal);
});

});
