import { gameData } from "./module.js";
window.addEventListener("DOMContentLoaded", (event) => {
  if (data[0].pid === "1") {
    passage.innerText = data[0].text;
    console.log(data[0].text);
    button.innerText = data[0].links[0].name;
  }
});

const rawData = gameData();
const data = rawData.passages;

const passage = document.getElementById("passage");
const button = document.getElementById("first-choice");
