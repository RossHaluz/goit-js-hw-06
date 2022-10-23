const input = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
const text = nameOutput.textContent;

input.addEventListener('input', changeName);

function changeName(event) {
    if (event.currentTarget.value) {
        nameOutput.textContent = event.currentTarget.value;
        return
    }
    nameOutput.textContent = text;
}

