"use strict";

const gameField = document.querySelector(".gamefield");

let cardsCount = 16;

function renderGameField() {
  for (let c = 1; c <= cardsCount; c++) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = c - 1;
    gameField.appendChild(cardElement);
  }
}

renderGameField();
