import { gameData } from "./module.js";
window.addEventListener("DOMContentLoaded", (event) => {
  start();
  createButtons();
});

let state = {
  passage: "",
  links: null,
};

const setState = (passage, links) => {
  state = { passage: passage, links: links };
};

const start = () => {
  setState(data[0].text, data[0].links);
  passage.innerText = state.passage;
};

const createButtons = () => {
  state.links.map((link, i) => {
    let button = document.createElement("button");
    root.appendChild(button);
    button.innerText = link.name;
    button.setAttribute("id", link.pid);
  });
};

const rawData = gameData();
const data = rawData.passages;
const root = document.getElementById("game");
const passage = document.getElementById("passage");
