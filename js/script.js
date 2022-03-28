btnStart.addEventListener('click', startGame);

function displayGameLosedMsg() {
  displayTimer.style.display = 'none';
  displayEndGameMessage.style.display = 'block';
  endGameMessage.textContent = 'OH NON ! TU AS PERDU !';
  endGameMessage.style.color = 'rgba(148, 6, 6, 1)';
}
