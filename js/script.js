$(function ($) {
  /*** START CALL FUNCTION ***/

  $('.btn-start').on('click', startGame);

  /*** STOP CALL FUNCTION ***/

  /**
   * START : VARIABLES
   **/

  /** START : VARIABLES FOR TIMER **/

  const timeLeft = $('.timeLeft');
  const progressBar = $('.progress-inner');

  let interval;
  let countDown;

  /**STOP : VARIABLES FOR TIMER**/

  /** START : VARIABLES FOR MEMORY GAME**/

  // select start Button
  const btnStart = $('.btn-start');
  // Select all cards and stocks them in a variable, as a list.
  const cards = $('.memory-card');
  console.log(cards);

  // Select Heading message to display
  const displayGreeting = $('.my-header--greeting');
  const displayTimer = $('.container--countdown');
  const displayEndGameMessage = $('.container--endgame-message');
  const endGameMessage = $('.endgame-message');
  const winningMessage = 'BRAVO ! TU AS GAGNE !';

  let hasFlippedCard = false; // No card is already flipped
  let lockBoard = false; // Avoid flipping more than 2 cards
  let firstCard;
  let secondCard;

  /** STOP : VARIABLES FOR MEMORY GAME**/

  /**
   *STOP : VARIABLES
   **/

  /*
  *
  START : MAIN FUNCTION
  *
  */

  function startGame() {
    // Disable Start Button
    btnStart.off('click', startGame).css({
      backgroundColor: 'var(--grey-button)',
      cursor: 'not-allowed',
    });
    // Change displayed message
    displayGreeting.css('display', 'none');
    displayTimer.css('display', 'block');
    displayEndGameMessage.css('display', 'none');

    shuffle();
    //Start couterdown timer defined in file counter.js
    startCountDown();
    console.log("c'est parti !");
    // For each card of the cards list, flip the card
    cards.each(function () {
      $(this).on('click', flipCards);
    });
  }

  /*
  *
  STOP : MAIN FUNCTION
  *
  */

  /*
  *
  START : FUNCTIONS FOR CARDS EFFETS
  *
  */

  /** Generate a randow number for each card. Then order card by increasing order.*/

  function shuffle() {
    cards.each(function () {
      let randomPosition = Math.floor(Math.random() * 12);
      $(this).css('order', randomPosition);
    });
  }

  function flipCards() {
    if (lockBoard) return;
    if ($(this) === firstCard) return; // Avoid double clicking on a card

    $(this).addClass('flip');

    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = $(this);

      return; // Stop running the if statement there if the condition is true
    }

    // second click
    secondCard = $(this);
    checkIfMatch();
  }

  function checkIfMatch() {
    // Check if cards match. If they do : remove event Listener on both cards
    // if not : after delay for seeing the 2nd card, remove .flip  on both cards

    let isMatch = firstCard.data('framework') === secondCard.data('framework');
    isMatch ? disableCards() : unFlipCards();
  }

  function disableCards() {
    firstCard.off('click', flipCards);
    secondCard.off('click', flipCards);
    console.log("It's a match !");
    console.log(firstCard.data('framework'));
    console.log(secondCard.data('framework'));

    // Check for win
    checkForWin();

    resetBoard();
  }

  function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
      firstCard.removeClass('flip');
      secondCard.removeClass('flip');

      lockBoard = false;

      resetBoard();
    }, 1000);
  }

  // Reset variables using destructuring assignments
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  /*
  *
  STOP : FUNCTIONS FOR CARDS EFFETS
  *
  */

  function checkForWin() {
    // Select all flipped cards and stocks them in a variable, as a list.
    let flipClass = $('.flip');
    console.log(flipClass.length);
    let hasWin = flipClass.length === 12;

    if (hasWin) {
      setTimeout(() => {
        clearInterval(countDown);
        displayTimer.css('display', 'none');
        displayEndGameMessage.css('display', 'block');
        endGameMessage.text(winningMessage);
        endGameMessage.css('color', 'rgba(33, 167, 8, 1)');
      }, 1000);
      progressBar.removeClass('animate');
      endGame();
    }
  }

  const endGame = () => {
    cards.each(function (card) {
      $(this).off('click', flipCards);
      setTimeout(() => {
        $(this).removeClass('flip');
      }, 2000);
    });

    btnStart
      .text('REJOUER')
      .css({ backgroundColor: 'var(--color-blue)', cursor: 'pointer' })
      .on('click', startGame);
    console.log('Fin de la partie. Rejouer ?');
  };

  /*
  *
  STOP : FUNCTIONS FOR MEMORY BOARD
  *
  */

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
});
