const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", btnClicked);

function btnClicked() {
  let changeColor = getRandomHexColor()
  bodyColor.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
