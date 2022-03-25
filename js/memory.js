// Select all cards and stocks them in a variable, as a list.
const cards = document.querySelectorAll('.memory-card');
console.log(cards);

const flipClass = document.querySelectorAll('.flip');

let hasFlippedCard = false; // No card is already flipped
let lockBoard = false; // Avoid flipping more than 2 cards
let firstCard;
let secondCard;

// startGame();

/*
*
 START : FUNCTIONS FOR CARDS EFFETS
*
*/
function startGame() {
  shuffle();
  //Start couterdown timer defined in file counter.js
  startCountDown();
  changeProgressBar();
  console.log("c'est parti !");
  // For each card of the cards list, flip the card
  cards.forEach((card) => card.addEventListener('click', flipCards));
}

/**
Generate a randow number for each card. Then order card by increasing order.*/

function shuffle() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

function flipCards() {
  if (lockBoard) return;
  if (this === firstCard) return; // Avoid double clicking on a card

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return; // Stop running the if statement there if the condition is true
  }
  //console.log({ hasFlippedCard, firstCard });

  // second click
  secondCard = this;

  //console.log({ hasFlippedCard, firstCard, secondCard });
  checkIfMatch();
}

function checkIfMatch() {
  // Check if cards match. If they do : remove event Listener on both cards
  // if not : after delay for seeing the 2nd card, remove .flip  on both cards

  // let firstCardDataSet = firstCard.dataset.framework;
  // let secondCardDataSet = secondCard.dataset.framework;

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCards);
  secondCard.removeEventListener('click', flipCards);
  console.log("It's a match !");
  console.log(firstCard.dataset.framework);
  console.log(secondCard.dataset.framework);

  // Check for win

  checkForWin();

  resetBoard();
}

function unFlipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false;

    resetBoard();
  }, 900);
}

// Reset variables using destructuring assignments
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function checkForWin() {
  console.log(flipClass.length);

  if (flipClass.length === 12) {
    setTimeout(() => {
      alert(`Congrat's ! You win this game !`);
    }, 1300);
    endGame();
  }
}

const endGame = () => {
  cards.forEach((card) => {
    card.removeEventListener('click', flipCards);
    card.classList.remove('flip');
  });
  progressBar.classList.remove('animate');
  console.log('Fin de la partie. Voulez vous rejouer ?');
};

/*
*
 STOP : FUNCTIONS FOR CARDS EFFETS
*
*/