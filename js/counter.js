/** START : VARIABLES FOR TIMER **/

const timeLeft = $('.timeLeft');
const progressBar = $('.progress-inner');

let interval;
let countDown;

/**STOP : VARIABLES FOR TIMER**/

/*
  *
   START : FUNCTIONS FOR TIMER
  *
  */

/* Manage the timer and displays remaining time */
function startCountDown() {
  interval = 10;
  console.log(`Interval début : ${interval}`);
  // Display remaining time
  timeLeft.text(interval);
  // Set ProgressBar width
  $('.progress-inner').css('width', '100%');
  // Set animation duration
  $('.progress-inner').css('animationDuration', `${interval}s`);
  // Start CSS Animation
  $('.progress-inner').addClass('animate');

  countDown = setInterval(() => {
    interval--;

    if (interval > 0) {
      timeLeft.text(interval);
    } else {
      clearInterval(countDown);
      timeLeft.text(0);
      $('.progress-inner').removeClass('animate');
      setTimeout(() => {
        endGame(); // Function in file memory.js
        displayGameLosedMsg();
      }, 900);

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
  displayTimer.css('display', 'none');
  displayEndGameMessage.css('display', 'block');
  endGameMessage
    .text('OH NON ! TU AS PERDU !')
    .css('color', 'rgba(148, 6, 6, 1)');
}
