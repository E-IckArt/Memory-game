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
  interval = 5;
  console.log(`Interval début : ${interval}`);

  progressBar.style.width = '100%';

  countDown = setInterval(() => {
    interval--;

    if (interval > 0) {
      timeLeft.textContent = interval + ' s';
    } else {
      clearInterval(countDown);
      timeLeft.textContent = '0';
      setTimeout(() => {
        displayGameLosedMsg();
        endGame(); // Function in file memory.js
      }, 1200);

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
