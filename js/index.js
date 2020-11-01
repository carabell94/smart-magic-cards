// Replaced hearts 'suit' with suits array to incorporate all 4 suits in game
const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper'); /* eslint-disable-line */
const selectedCardsWrapper = document.querySelector('.selected-cards'); /* eslint-disable-line */
// const deck = [...cardsWrapper.children];
// const selectedCards = [...selectedCardsWrapper.children];
const startButton = document.getElementById('start-game');
const cards = [];

// Function to hide unnecessary buttons at any given time in game
function hideButton(buttonId) {
  const button = document.getElementById(buttonId);
  button.remove();
}

// Function to clear out the initial 'start game' button
// and create new buttons (shuffle cards and flip cards) to play the game.
function createButtons() {
  hideButton('start-game');
  const newButtons = [
    { name: 'flip-cards', innerHTML: 'Flip cards' },
    { name: 'shuffle-cards', innerHTML: 'Shuffle cards' },
  ];
  newButtons.forEach((button) => {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-lg', 'btn-secondary');
    btn.setAttribute('id', `${button.name}`);
    btn.style.marginRight = '10px';
    btn.innerHTML = `${button.innerHTML}`;
    btnWrapper.appendChild(btn);
  });
}

// Function to style cards in deck
function styleCards() {
  const deck = [...cardsWrapper.children];
  deck.forEach((card, i) => {
    const positionFromLeft = i * 25;
    card.style.left = `${positionFromLeft}px`;
  });
}

// Function to style selected cards
function styleSelectedCards() {
  const selectedCards = [...selectedCardsWrapper.children];
  selectedCards.forEach((card, i) => {
    const positionFromLeft = i * 20;
    card.style.left = `${positionFromLeft}px`;
  });
}

// Function to return value of card
function valueOfCard(card) {
  return card.getAttribute('data-value');
}

// Magic Trick Function
function magicTrick(card) {
  const cardValue = valueOfCard(card);
  const deck = [...cardsWrapper.children];
  deck.forEach((remainingCard) => {
    if (valueOfCard(remainingCard) === cardValue) {
      selectedCardsWrapper.appendChild(remainingCard);
    }
  });
  styleSelectedCards();
}

// Function to create Magic Trick button if there is only one card in selectedCardsWrapper
// Includes hiding that button once magic trick has been performed
function createMagicTrickButton(chosenCard) {
  const selectedCards = [...selectedCardsWrapper.children];
  const magicTrickButton = document.getElementById('magic-trick');
  if (selectedCards.length === 1 && magicTrickButton === null) {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-lg', 'btn-secondary');
    btn.setAttribute('id', 'magic-trick');
    btn.innerHTML = 'Magic Trick';
    btn.style.marginRight = '10px';
    btnWrapper.appendChild(btn);
    btn.addEventListener('click', () => {
      magicTrick(chosenCard);
      hideButton('magic-trick');
    });
  }
}

// Function to choose card & add to SelectedCardsWrapper
function chooseCard(card) {
  const selectedCards = [...selectedCardsWrapper.children];
  if (selectedCards.length === 0) {
    selectedCardsWrapper.appendChild(card);
    styleSelectedCards();
  }
}

// Function to listen for a card click on a card in deck
function clickOnCard() {
  const deck = [...cardsWrapper.children];
  deck.forEach((card) => {
    // eslint-disable-next-line no-console
    console.log(deck);
    card.addEventListener('click', () => {
      chooseCard(card);
      createMagicTrickButton(card);
    });
  });
}

// Function to 'Flip Cards' (add hidden class from css to cardsWrapper upon click)
function flipCards() {
  if (cardsWrapper.classList.contains('hidden')) {
    cardsWrapper.classList.remove('hidden');
  } else {
    cardsWrapper.classList.add('hidden');
  }
}

// Function to remove cards for shuffle
function removeCards() {
  while (cardsWrapper.firstChild) {
    cardsWrapper.firstChild.remove();
  }
}

// Function to display cards
function displayCards() {
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card) => {
    // const positionFromLeft = i * 25;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    // cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
  styleCards();
  clickOnCard();
}

// Function to shuffle cards by first removing all cards then shuffling using random shuffle method
function shuffleCards() {
  removeCards();
  const shuffleArray = cards.sort(() => Math.random() - 0.5);
  displayCards(shuffleArray);
  styleCards();
}

// Event Listener for clicking 'Flip Cards' or 'Shuffle Cards' button
function clickOnButton() {
  const flipBtn = document.getElementById('flip-cards');
  flipBtn.addEventListener('click', flipCards);
  const shuffleBtn = document.getElementById('shuffle-cards');
  shuffleBtn.addEventListener('click', shuffleCards);
}

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  // for (let s = 0; s < suits.length; s += 1) {
  suits.forEach((suit) => {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        // eslint-disable-next-line object-shorthand
        suit: suit,
      };

      cards.push(cardObject);
    }
  });
  // displayCards();
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
// Calling Click functions for shuffle and flip
function startGame() {
  createButtons();
  createCards();
  displayCards();
  clickOnButton();
}

startButton.addEventListener('click', startGame);
