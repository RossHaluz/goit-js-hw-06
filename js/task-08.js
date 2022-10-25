const form = document.querySelector('.login-form');
form.addEventListener('submit', sendForm);


function sendForm(even) {
    even.preventDefault();

    const {
        elements: { email, password }
  } = even.currentTarget;
  const data = {
   email: email.value,
   password: password.value
}

    if (email.value === "" || password.value === "") {
    return alert("Ведіть усі незаповненні поля!");
    }
    
    console.log(data);
  even.currentTarget.reset();
}
