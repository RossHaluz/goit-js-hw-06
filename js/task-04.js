let counterValue = 0;

const increment = document.querySelector('[data-action="increment"]')
const decrement = document.querySelector('[data-action="decrement"]')
const number = document.querySelector('#value')

const addNumber = increment.addEventListener('click', add)

function add() {
    counterValue = counterValue + 1;
    number.textContent = counterValue;
}

const subNumber = decrement.addEventListener('click', sub)

function sub() {
    counterValue = counterValue - 1;
    number.textContent = counterValue;
}