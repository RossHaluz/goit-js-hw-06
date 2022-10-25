const btnGreat = document.querySelector('[data-create]');
const btnDestriy = document.querySelector('[data-destroy]');
const controlsEl = document.querySelector('#controls > input');
const boxesEl = document.querySelector('#boxes');

controlsEl.addEventListener('input', inputNumber);
btnGreat.addEventListener('click', createBoxes);
btnDestriy.addEventListener('click', destroyBoxes)
let totalNumber = 0;

function inputNumber(even) {
  totalNumber = even.currentTarget.value;
  console.log(totalNumber)
}

function createBoxes(amount) {
  amount = totalNumber;
  console.log(`Total amount: ${amount}`)
  const totalBoxes = boxesEl.children.length
  console.log(totalBoxes)
  let total = 30 + totalBoxes * 10;
  for (let i = 1; i <= amount; i += 1){
    const newEl = document.createElement('div')
  newEl.style.backgroundColor = getRandomHexColor()
  newEl.style.width = `${total}px`
  newEl.style.height = `${total}px`
  boxesEl.append(newEl)
    total += 10 
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes(){
  boxesEl.querySelectorAll('div').forEach(element => element.remove())
}