let allCards = [];
let sum = 0;
let message = '';
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

let player = {
    name: 'Dilshod',
    chips: 145
}

playerEl.textContent = player.name + ': $' + player.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10)
        return 10;
    if (randomNumber === 1)
        return 11;

    return randomNumber;
}


function startGame() {
    isAlive = true;
    let cardOne = getRandomCard();
    let cardTwo = getRandomCard();
    allCards = [cardOne, cardTwo];
    sum = cardOne + cardTwo;

    renderGame();
}

function renderGame() {
    sumEl.textContent = 'sum: ' + sum;
    cardsEl.textContent = 'Cards: ';

    for (let i = 0; i < allCards.length; i += 1) {
        cardsEl.textContent += allCards[i] + ' ';
    }

    if (sum <= 20)
        message = 'Do you want to draw a new card? ';
    else if (sum === 21) {
        message = 'You\'ve got Blackjack! ';
        hasBlackJack = true;
    } else {
        message = 'You\'re out of the game! ';
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let newCard = getRandomCard();
        sum += newCard;
        allCards.push(newCard);
        renderGame();
    }
}