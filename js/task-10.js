const greatBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const controls = document.querySelector('#controls > input');
const boxesEl = document.querySelector('#boxes');

greatBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
controls.addEventListener('input', getAmount);
let totalAmount = 0;

function getAmount(even) {
   totalAmount = even.currentTarget.value
  console.log(`Total Count: ${totalAmount}`)
}

function createBoxes(amount) {
  amount = totalAmount;
  console.log(`creat: ${amount} boxes`)
  for (let i = 1; i <= amount; i += 1){
   let total = 0;
    if (!boxesEl.firstChild) {
      total = 0;
    } else {
      total += 10;
    }

    let greatElem = document.createElement('div');
    greatElem.style.backgroundColor = getRandomHexColor();
    greatElem.style.width = `${30+(i)*10}px`
    greatElem.style.height = `${30+ (i)*10}px`
    boxesEl.append(greatElem)
    
  }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  boxesEl.querySelectorAll('div').forEach(element => element.remove())
}
