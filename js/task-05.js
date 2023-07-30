const inputPlace = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

inputPlace.addEventListener("input", () => {
    const name = inputPlace.value.trim();

    if (name === "") {
        spanOutput.textContent = "Anonymous"
    } else {
        spanOutput.textContent = name;
    }
});

