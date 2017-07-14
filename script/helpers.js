/*
*function generates an array of specified length
*each item has value between 0 and 3 inclusive, i.e. 0 or 1 or 2 or 3
*@param len: length of the to be generated array
*/

function nextSample() {
  // sanity check
  if (GAME.phase != "samplephase") {
    return;
  }
  if (GAME.sample.length > 21) {
    return;
  }
  GAME.sample.push(rolldice());
}

/*
* function return an interger i
* 0<=i<4
*/
function rolldice(){
  var num = (Math.random()*1001).toFixed();
  if (num > 750)
    return 0;
  else if (num > 500)
    return 1;
  else if (num > 250)
    return 2;
  else
    return 3;
}

/*
* play the green button
*/
function playGreen(){
  var greenButton = document.getElementById("greenButton");
  greenButton.classList.add("greenActive");
  greenSound.play();
  var interval = setInterval(function () {
    greenButton.classList.remove("greenActive");
    clearInterval(interval);
  }, 400);
}

/*
* play the red button
*/
function playRed(){
  var greenButton = document.getElementById("redButton");
  redButton.classList.add("redActive");
  redSound.play();
  var interval = setInterval(function () {
    greenButton.classList.remove("redActive");
    clearInterval(interval);
  }, 400);
}

/*
* play the blue button
*/
function playBlue(){
  var greenButton = document.getElementById("blueButton");
  blueButton.classList.add("blueActive");
  blueSound.play();
  var interval = setInterval(function () {
    blueButton.classList.remove("blueActive");
    clearInterval(interval);
  }, 400);
}

/*
* play the yellow button
*/
function playYellow(){
  var greenButton = document.getElementById("yellowButton");
  yellowButton.classList.add("yellowActive");
  yellowSound.play();
  var interval = setInterval(function () {
    yellowButton.classList.remove("yellowActive");
    clearInterval(interval);
  }, 400);
}

/*
* play the whole sample
*/
function playSample() {
  //sanity check
    if (GAME.sample.length == 0 || GAME.phase != "samplephase") {
    console.log("Error by playSample() in helpers.js");
    return;
  }

  GAME.phase = "userphase"; // change phase immediately, allow for input even before sample is played
  var i = 0;
  var interval = setInterval(function () {
    // base case
    if (i > GAME.sample.length) {
      clearInterval(interval);
      return;
    }

    // actually play the sample
    switch (GAME.sample[i]) {
      case 0:
        playGreen();
        break;
      case 1:
        playRed();
        break;
      case 2:
        playBlue();
        break;
      case 3:
        playYellow();
        break;
    } i++;
  }, GAME.sampleSpeed);
}

/*
* update display
*@param string: text to display
*@param blink: true/false to blink display
*/
function updateDisplay(string, blink) {
  // sanity check
  if (string === undefined) {
    return;
  }

  var display = document.getElementById("display");
  if (!blink) {
    display.value = "";
    display.value = string;
  } else {
    // blink display 3 times
    var totalBlink = 0;

    var interval =  setInterval(function () {
      // exit & clean interval
      if (totalBlink > 5) {
        display.value = string;
        clearInterval(interval);
        return;
      }

      // actual blinking
      if (display.value == string) {
        display.value = "";
      } else {
        display.value = string;
      }
      totalBlink++;
    }, 500);
  }
}

/*
* user lose, play sound and inform user
*/
function userLose() {
  loseSound.play();
  updateDisplay("Lost!", true);
}

/*
* user win, play sound and inform user
*/
function userWin() {
  winSound.play();
  updateDisplay("Win!", true);
}

/*
* reset game state
*/
function resetData(){
  GAME = {
    sample: [],
    sampleSpeed: GAME.sampleSpeed, // persistent configuration
    userSolution: [],
    toCheckIndex: 0,
    phase: "off", // off, samplephase, userphase
    currentRound: 0,
    strictMode: GAME.strictMode, // persistent configuration
    roundToWin: GAME.roundToWin  // persistent configuration
  };
}
