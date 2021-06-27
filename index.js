import { gameData } from "./module.js";
("use strict");

window.addEventListener("DOMContentLoaded", (event) => {
  start();
  createButtons();
});

let state = {
  passage: "",
  links: null,
};

const setState = (passage, links) => {
  if (links.length > 0) {
    state = { passage: passage, links: links };
  }
  // else code here for final node
};

const start = () => {
  setState(data[0].text, data[0].links);
  passage.innerText = state.passage;
};

const updatePassage = () => {
  passage.innerText = state.passage;
};

const removeChildren = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// const regex = () => {
//     console.log(state.passage.split()
// }

const createButtons = () => {
  state.links.forEach((link, i) => {
    let button = document.createElement("button");
    buttonsDiv.appendChild(button);
    button.innerText = link.name;
    button.setAttribute("id", link.pid);

    button.addEventListener("click", (e) => {
      for (let element of data) {
        if (element.pid === e.target.id) {
          setState(element.text, element.links);
          removeChildren(buttonsDiv);
          updatePassage();

          createButtons();
        }
      }
    });
  });
};

const rawData = gameData();
const data = rawData.passages;
const root = document.getElementById("game");
const buttonsDiv = document.getElementById("buttons");
let passage = document.getElementById("passage");
