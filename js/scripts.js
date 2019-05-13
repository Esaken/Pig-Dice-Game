var num = 0,
newMark=0,
playerDetails=0,
finalScore=0,
diePic="",
pos=0;

function PlayersInfo(name , score, totalScore){
  this.playerNames = name;
  this.playerMarks = score;
  this,totalScores= totalScore;
}
var genRandom = function(){
  randomNo = Math.floor(Math.random() * 6);
  return randomNo;
}
PlayersInfo.prototype.Addscores = function (thisMark){
  if (thisMark === 1){
    this.playerMarks = 0;
    }else if (thisMark !==1 ){
      this.playerMarks = this.playerMarks+ thisMark;
    }
    return this.playerMarks;
}
PlayersInfo.prototype.Total = function (total){
  return this. totalScores = this.totalScores + total;
}
var getDieSide = function (getInput){
  if(getInput==1) diePic ="images/dice1.jpeg";
  else if (getInput==2) diePic ="/images/dice2.jpeg";
  else if (getInput==3) diePic ="images/dice1.jpeg";
  else if (getInput==4) diePic ="images/dice1.jpeg";
  else if (getInput==5) diePic ="images/dice1.jpeg";
  else if (getInput==6) diePic ="images/dice1.jpeg";

  returndiePic;

}

function reset(){
  pos = 0;
  PlayersInfo.playerMarks = 0;
  PlayersInfo.totalScores =0;
  $("#image-die").html('')
  $("#overallScore").text("0")
  $("#rollScore").text('')
}
$(document).ready(function(){


$("#rollDice").submit(function (event) {
  event.preventDefault();
  num++
  if (num >2 ){
    alert ("Players cannot exceed 2!");
    playerDetails=[];
    num = 0;
    console.log(playerDetails);
    reset();
  }

  var inputtedName = $("#player").val();
  var newPLayer = new PlayersInfo(inputtedName, 0, 0);
  playerDetails.push (newPlayer);
  $("#content1").addClass("player-turn");
  $("#content" + num + "h3").html(" <span class = player" + num + ">" + newPlayer.playerNames + "</span>");
  $("#player").val("");

});
$("#roll").click(function () {
  
      if (getRandom == 1 && pos == 0) {
          $("#content" + (pos + 1) + " #rollScore").text("0");
          $("#content" + (pos + 1)).removeClass("player-turn");
          $("#image-die").html("");
          pos = 1;
          switchPlayer = playerDetails[pos];
          $("p.text-uppercase").html("Oooops, You rolled a 1. <br>" + switchPlayer.playerNames + "'s turn");
          // alert("Oooops, You rolled a 1. " + switchPlayer.playerNames + "'s turn");
          $("#content" + (pos + 1)).addClass("player-turn");
      } else if (getRandom == 1 && pos == 1) {
          $("#content" + (pos + 1) + " #rollScore").text("0");
          $("#content" + (pos + 1)).removeClass("player-turn");
          $("#image-die").html("");
          pos = 0;
          switchPlayer = playerDetails[pos];
          $("p.text-uppercase").html("Oooops, You rolled a 1. <br>" + switchPlayer.playerNames + "'s turn");
          // alert("Oooops, You rolled a 1. " + switchPlayer.playerNames + "'s turn");
          $("#content" + (pos + 1)).addClass("player-turn");
      } else if (getRandom > 1) {
          newMark = getPlayerId.playerMarks;
          $("p.text-uppercase").text("");
          $("#content" + (pos + 1) + " h4").text(newMark);
          $("#image-die").html("<img class='dice' height='200' width = '200' src=" + getDieSide(getRandom) + ">")
      }
      console.log(getRandom + " " + pos + " " + newMark);
  
});
$("#hold").click(function () {
  if (num == 2) {
      var getPlayerId = playerDetails[pos];
      newMark = getPlayerId.playerMarks;
      getPlayerId.Total(newMark);
      finalScore = getPlayerId.totalScores;
      console.log(finalScore);
      getPlayerId.playerMarks = 0;
      $("#content" + (pos + 1) + "#rollScore").text("0");
      $("#content" + (pos + 1) + " #overallScore").text(finalScore);
      $("#image-die").html("");
      if (pos == 0) {
          $("#content" + (pos + 1)).removeClass("player-turn");
          pos = 1;
          $("#content" + (pos + 1)).addClass("player-turn");
      } else if (pos == 1) {
          $("#content" + (pos + 1)).removeClass("player-turn");
          pos = 0;
          $("#content" + (pos + 1)).addClass("player-turn");
      }
      if (finalScore > 99) {
          playerDetails[0].totalScores = 0;
          playerDetails[1].totalScores = 0;
          $(".winner-text").html("<h3 class = 'text-uppercase'>" + getPlayerId.playerNames + " HAS WON!!!</h3>")
          $("#winner-modal").modal();
          // alert(getPlayerId.playerNames + " has won!!");
          $("#hold").hide();
          $("#roll-dice").hide();
          $("#reset").show();
          $("#content1").removeClass("player-turn");
          $("#content2").removeClass("player-turn");
      }
  } else if (num == 1) {
      alert("Player 2 Name Required");
      $("#input-details").modal();
  } else if (num == 0) {
      alert("Players' Names Required");
      $("#input-details").modal();
  }
});
});
