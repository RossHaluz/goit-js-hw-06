const input = document.querySelector('#validation-input')
const dataInputAtribut = document.querySelector('input[data-length="6"]')

input.addEventListener('blur', auditInput)

function auditInput(even) {
    if (even.currentTarget.value.length < dataInputAtribut.dataset.length) {
        input.classList.remove('valid')
        input.classList.add('invalid');
    } 
    if (even.currentTarget.value.length >= dataInputAtribut.dataset.length) {
        input.classList.remove('invalid')
        input.classList.add('valid');
}
}