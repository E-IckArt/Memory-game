const btnStart = document.querySelector('.btn-start');
const timeLeft = document.querySelector('.timeLeft');
const progressBar = document.querySelector('.progress-inner');

let interval;
let countDown;
/*
*
 START : FUNCTIONS FOR TIMER
*
*/

/* Manage the timer and displays remaining time */
function startCountDown() {
  interval = 40;
  console.log(`Interval début : ${interval}`);

  timeLeft.textContent = interval;
  progressBar.style.width = '100%';
  // Set animation duration
  progressBar.style.animationDuration = `${interval}s`;
  // Start CSS Animation
  progressBar.classList.add('animate');

  countDown = setInterval(() => {
    interval--;

    if (interval > 0) {
      timeLeft.textContent = interval;
    } else {
      clearInterval(countDown);
      timeLeft.textContent = 0;
      progressBar.classList.remove('animate');
      setTimeout(() => {
        displayGameLosedMsg();
        endGame(); // Function in file memory.js
      }, 1500);

      console.log(`Interval fin : ${interval}`);
    }
  }, 1000);
}

/*
*
 STOP : FUNCTIONS FOR TIMER
*
*/

function displayGameLosedMsg() {
  displayTimer.style.display = 'none';
  displayEndGameMessage.style.display = 'block';
  endGameMessage.textContent = 'OH NON ! TU AS PERDU !';
  endGameMessage.style.color = 'rgba(148, 6, 6, 1)';
}
