function validateInputs() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login.length < 8 || password.length < 8) {
        alert('WRONG FORMAT');
    } else {
        alert(`Login: ${login}\nPassword: ${password}`);
    }
}
let button=document.getElementById('send');
button.addEventListener('click',()=>{
    validateInputs();
})