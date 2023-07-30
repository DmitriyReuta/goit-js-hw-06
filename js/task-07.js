const inputValue = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputValue.addEventListener("input", () => {
    const fontSize = inputValue.value + 'px';
    spanText.style.fontSize = fontSize;
})