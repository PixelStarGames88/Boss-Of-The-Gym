document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    
    // Простая валидация совпадения паролей
    document.getElementById('confirmPassword').addEventListener('input', function () {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        const errorSpan = document.getElementById('confirmPasswordError');
        
        if (confirmPassword && password !== confirmPassword) {
            errorSpan.textContent = 'Пароли не совпадают';
            this.setCustomValidity('Пароли не совпадают');
        } else {
            errorSpan.textContent = '';
            this.setCustomValidity('');
        }
    });

    // Валидация имени пользователя
    document.getElementById('username').addEventListener('blur', function () {
        const errorSpan = document.getElementById('usernameError');
        if (this.value && !/^[a-zA-Z0-9_]{3,50}$/.test(this.value)) {
            errorSpan.textContent = 'Только латиница, цифры и подчёркивание (3-50 символов)';
        } else {
            errorSpan.textContent = '';
        }
    });

    // Отправка формы
    form.addEventListener('submit', function (e) {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            e.preventDefault();
            document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
            document.getElementById('confirmPassword').focus();
            return false;
        }
        
        // Здесь можно добавить AJAX-отправку, если нужно
        // e.preventDefault();
        // const formData = new FormData(form);
        // fetch('/Account/Register', { method: 'POST', body: formData })...
    });
});