const rangeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text') 

rangeInput.addEventListener('input', changeSize);

function changeSize(even) {
   console.log(even.currentTarget.value)
    text.style.fontSize = `${Number(even.currentTarget.value)}px`
}