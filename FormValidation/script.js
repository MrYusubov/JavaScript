document.getElementById('validationForm').addEventListener('submit',(ev)=>{
    ev.preventDefault();

    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('emailError').textContent = '';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    let isValid = true;

    if (username.length <= 8 || /\d/.test(username) || /^[A-Z]/.test(username)) {
        document.getElementById('usernameError').textContent = 'İstifadəçi adı 8 simvoldan böyük olmalıdır , İlk hərf böyük hərf olmamalıdır və İstifadəçi adında rəqəm olmamalıdır';
        isValid = false;
    }

    if (password.length <= 8 || !/\d/.test(password) || !/^[A-Z]/.test(password)) {
        document.getElementById('passwordError').textContent = 'Parol 8 simvoldan böyük olmalıdır , İçərisində ədəd olmalıdır və 1-ci hərfi böyük olmalıdır.';
        isValid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Email @ və . strukturuna uyğun deyil';
        isValid = false;
    }

    if (isValid) {
        alert('Form uğurla göndərildi!');
    }
});
