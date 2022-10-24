const form = document.querySelector('.login-form');
form.addEventListener('submit', sendForm);


function sendForm(even) {
    even.preventDefault();

    const {
        elements: { email, password }
    } = even.currentTarget;
    if (email.value === "" || password.value === "") {
    return alert("Ведіть усі незаповненні поля!");
    }
    
    console.log(`Login: ${email.value}, Password: ${password.value}`);
  even.currentTarget.reset();
}
