import { gameData } from "./module.js";
window.addEventListener("DOMContentLoaded", (event) => {
  if (data[0].pid === "1") {
    state = { passage: data[0].text, links: data[0].links };
    console.log(state);
    passage.innerText = state.passage;
    console.log(data[0].text);
    button.innerText = data[0].links[0].name;
  }
});

let state = {
  passage: "",
  links: null,
};

const rawData = gameData();
const data = rawData.passages;

const passage = document.getElementById("passage");
const button = document.getElementById("first-choice");
