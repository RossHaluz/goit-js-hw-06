const input = document.querySelector('#validation-input')
const dataInputAtribut = document.querySelector('input[data-length="6"]')
const data = Number(dataInputAtribut.dataset.length)

input.addEventListener('blur', auditInput)

function auditInput(even) {
    if (even.currentTarget.value.length < data || even.currentTarget.value.length > data) {
        input.classList.remove('valid')
        input.classList.add('invalid');
    } 
    if (even.currentTarget.value.length === data) {
        input.classList.remove('invalid')
        input.classList.add('valid');
}
}