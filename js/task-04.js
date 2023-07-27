 const spanValue = document.querySelector('#value');
    const decrement = document.querySelector('[data-action="decrement"]');
    const increment = document.querySelector('[data-action="increment"]');


let counterValue = 0;
 function updateCounterValue() {
      spanValue.textContent = counterValue;
    }

decrement.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
});
increment.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
});
updateCounterValue();