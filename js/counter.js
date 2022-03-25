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
  btnStart.removeEventListener('click', startGame);

  let interval = 10;
  console.log(`Interval début : ${interval}`);

  progressBar.style.width = '100%';

  let countDown = setInterval(() => {
    interval--;

    if (interval > 0) {
      timeLeft.textContent = interval + 's';
    } else {
      clearInterval(countDown);
      timeLeft.textContent = 'Game Over';
      endGame(); // Function in file memory.js
      btnStart.addEventListener('click', startGame);
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
