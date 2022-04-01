// $(function ($) {
//   const btnStart = $('.btn-start');
//   const timeLeft = $('.timeLeft');
//   const progressBar = $('.progress-inner');

//   let interval;
//   let countDown;
//   /*
//   *
//    START : FUNCTIONS FOR TIMER
//   *
//   */

//   /* Manage the timer and displays remaining time */
//   function startCountDown() {
//     interval = 40;
//     console.log(`Interval début : ${interval}`);

//     $('.timeLeft').text(interval);
//     $('.progress-inner').css('width', '100%');
//     // Set animation duration
//     $('.progress-inner').css('animationDuration', `${interval}s`);
//     // Start CSS Animation
//     $('.progress-inner').addClass('animate');

//     countDown = setInterval(() => {
//       interval--;

//       if (interval > 0) {
//         $('.timeLeft').text(interval);
//       } else {
//         clearInterval(countDown);
//         $('.timeLeft').text(0);
//         $('.progress-inner').removeClass('animate');
//         setTimeout(() => {
//           displayGameLosedMsg();
//           endGame(); // Function in file memory.js
//         }, 1500);

//         console.log(`Interval fin : ${interval}`);
//       }
//     }, 1000);
//   }

//   /*
//   *
//    STOP : FUNCTIONS FOR TIMER
//   *
//   */

//   function displayGameLosedMsg() {
//     displayTimer.css('display', 'none');
//     displayEndGameMessage.css('display', 'block');
//     endGameMessage.text('OH NON ! TU AS PERDU !');
//     endGameMessage.css('color', 'rgba(148, 6, 6, 1)');
//   }
// });
