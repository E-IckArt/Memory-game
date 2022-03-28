const btnStart = document.querySelector('.btn-start');
const timeLeft = document.querySelector('.timeLeft');
const progressBar = document.querySelector('.progress-inner');

/*
*
 START : FUNCTIONS FOR TIMER
*
*/

/* Manage the timer and displays remaining time */
function startCountDown() {
  let interval = 20;
  console.log(`Interval début : ${interval}`);

  progressBar.style.width = '100%';

  let countDown = setInterval(() => {
    interval--;

    if (interval > 0) {
      timeLeft.textContent = interval + 's';
    } else {
      clearInterval(countDown);
      timeLeft.textContent = 'écoulé';
      setTimeout(() => {
        displayTimer.style.display = 'none';
        displayEndGameMessage.style.display = 'block';
        endGameMessage.textContent = 'OH NON ! TU AS PERDU !';
        endGameMessage.style.color = 'rgba(148, 6, 6, 1)';

        endGame(); // Function in file memory.js
      }, 1500);

      console.log(`Interval fin : ${interval}`);
    }
  }, 1000);
}

/* Start CSS Animation*/
function changeProgressBar() {
  progressBar.classList.add('animate');
}

/*
*
 STOP : FUNCTIONS FOR TIMER
*
*/
