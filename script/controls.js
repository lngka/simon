var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var loseSound = new Audio("./audio/smb_mariodie.mp3");
var winSound = new Audio("./audio/smb_world_clear.mp3");
var nopeSound = new Audio("./audio/smb3_bump.mp3");

$(document).ready(function() {
  document.getElementById('greenButton').addEventListener("click", onGreen);
  document.getElementById('redButton').addEventListener("click", onRed);
  document.getElementById('blueButton').addEventListener("click", onBlue);
  document.getElementById('yellowButton').addEventListener("click", onYellow);
  document.getElementById('startButton').addEventListener("click", onStart);
  document.getElementById('strictButton').addEventListener("click", onStrict);
});

function onGreen() {
  //sanity check
  if (GAME.phase != "userphase") {
    return;
  }
  greenSound.play();
  GAME.userSolution.push(0); // remember clicked button in userSolution array
  checkUserSolution();
}

function onRed() {
  //sanity check
  if (GAME.phase != "userphase") {
    return;
  }
  redSound.play();
  GAME.userSolution.push(1); // remember clicked button in userSolution array
  checkUserSolution();
}
function onBlue() {
  //sanity check
  if (GAME.phase != "userphase") {
    return;
  }
  blueSound.play();
  GAME.userSolution.push(2); // remember clicked button in userSolution array
  checkUserSolution();
}

function onYellow() {
  //sanity check
  if (GAME.phase != "userphase") {
    return;
  }
  yellowSound.play();
  GAME.userSolution.push(3); // remember clicked button in userSolution array
  checkUserSolution();
}

function onStart() {
    resetData();
    updateDisplay("0");
    GAME.phase = "samplephase";
    nextRound();
}

function onStrict(){
  GAME.strictMode = !GAME.strictMode;
  console.log(GAME.strictMode);
}
