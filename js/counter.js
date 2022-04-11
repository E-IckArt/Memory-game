/** START : TIMER's VARIABLES **/

const timeLeft = $('.timeLeft');
const progressBar = $('.progress-inner');

let interval;
let countDown;

/**STOP : TIMER's VARIABLES **/

/**
 * START : TIMER's FUNCTIONS
 **/

/* Manage the timer and displays remaining time */
function startCountDown() {
  interval = 90;
  // Display remaining time
  timeLeft.text(interval);
  // Set ProgressBar width and animation duration
  $('.progress-inner').css({
    width: '100%',
    animationDuration: `${interval}s`,
  });
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
    }
  }, 1000);
}

/**
 * STOP: TIMER's FUNCTIONS
 **/
