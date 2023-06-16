"use strict";

const gameField = document.querySelector(".gamefield");

let cardsCount = 16;

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
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = c - 1;
    //cardElement.setAttribute("data-index", c - 1);
    //cardElement.setAttribute("data-number", "card-" + c);

    cardElement.addEventListener("click", (event) => {
      let cardIndex = event.target.dataset.index;
      console.log(cardIndex);
      event.target.style.backgroundImage = "url(" + cardsArray[cardIndex] + ")";
    });

    gameField.appendChild(cardElement);
  }
}

renderGameField();
