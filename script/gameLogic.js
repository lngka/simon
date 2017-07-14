/*
* check user input according to sample
*/
function checkUserSolution(){
  // sanity check
  if (GAME.userSolution.length == 0 || GAME.sample.length == 0)
    return null;

  // if correct input
  if (GAME.sample[GAME.toCheckIndex] == GAME.userSolution[GAME.toCheckIndex]) {

    // if  current round commpleted
    if (GAME.userSolution.length == GAME.sample.length) {
      GAME.userSolution = [];
      GAME.toCheckIndex = 0;
      GAME.phase = "samplephase";
      nextRound();
    } else { // wait for next input
      GAME.toCheckIndex++;
    }
  }

  // if incorrect input
  else {
    if (GAME.strictMode) {
      userLose();
      resetData();
    } else {
      GAME.toCheckIndex = 0;
      GAME.userSolution = [];
      GAME.phase = "samplephase";
      nopeSound.play();
      playSample();
    }
  }
}

/*
* called by onStart(), watch if user commpleted the round and play new Round
*/
function nextRound() {
      if (GAME.currentRound == GAME.roundToWin) {
        userWin();
        nextSample();
        setTimeout(playSample, 6000);
        setTimeout(function(){updateDisplay(GAME.currentRound);}, 6500);
        GAME.currentRound++;
      } else {
        nextSample();
        playSample();
        updateDisplay(GAME.currentRound);
        GAME.currentRound++;
      }
}
