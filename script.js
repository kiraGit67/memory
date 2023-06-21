"use strict";

const gameField = document.querySelector(".gamefield");
//Variable for Card Count
let cardsCount = 16;
//Variable for open cards
let openCards = [];

//Variables for winning score
const scoreElement = document.querySelector("#score");
let score = 0;

scoreElement.innerText = score;

//Variable for turn
let turn = true;

const cardsArray = [
  "https://picsum.photos/seed/1/500",
  "https://picsum.photos/seed/1/500",
  "https://picsum.photos/seed/2/500",
  "https://picsum.photos/seed/2/500",
  "https://picsum.photos/seed/3/500",
  "https://picsum.photos/seed/3/500",
  "https://picsum.photos/seed/4/500",
  "https://picsum.photos/seed/4/500",
  "https://picsum.photos/seed/5/500",
  "https://picsum.photos/seed/5/500",
  "https://picsum.photos/seed/6/500",
  "https://picsum.photos/seed/6/500",
  "https://picsum.photos/seed/7/500",
  "https://picsum.photos/seed/7/500",
  "https://picsum.photos/seed/8/500",
  "https://picsum.photos/seed/8/500",
];

function renderGameField() {
  for (let c = 1; c <= cardsCount; c++) {
    //create 16 card elements
    const cardElement = document.createElement("div");

    //Adds class attribute to each card element
    cardElement.classList.add("card");

    //Adds data attribute to each card element
    //cardElement.setAttribute("data-index", c - 1);
    cardElement.dataset.index = c - 1;

    //Adds EventListener to each card element
    cardElement.addEventListener("click", flipCard);

    //Appends each card element to gamefield element
    gameField.appendChild(cardElement);
  }
}

function flipCard(event) {
  //Variable for card event
  const card = event.target;

  //Variable for index of card event
  let cardIndex = card.dataset.index;
  console.log(cardIndex);

  if (turn === false || openCards[0]?.dataset.index === cardIndex) {
    return;
  }

  if (openCards.length < 2) {
    //card.style.backgroundImage = "url(" + cardsArray[cardIndex] + ")";
    card.style.backgroundImage = `url(${cardsArray[cardIndex]})`;

    openCards.push(card);
  }

  if (openCards.length === 2) {
    turn = false;

    console.log(openCards);
    console.log(openCards[0]);
    console.log(openCards[1]);

    if (
      openCards[0].style.backgroundImage === openCards[1].style.backgroundImage
    ) {
      score++;
      openCards.length = 0;
      turn = true;
    } else {
      setTimeout(() => {
        for (let openCard of openCards) {
          openCard.style.backgroundImage = "";
        }

        openCards.length = 0;
        turn = true;
      }, 2000);
    }
  }

  console.log(score);
  scoreElement.innerText = score;
}

renderGameField();
