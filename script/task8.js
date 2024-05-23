document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо колекцію елементів за їх класом "login-form" і беремо перший елемент з колекції
    const loginForm = document.querySelector(".login-form");

    // Додаємо обробник події "submit" для форми
    loginForm.addEventListener("submit", function (event) {
      // Запобігаємо стандартній дії браузера при відправці форми (перезавантаженні сторінки)
      event.preventDefault();

      // Отримуємо значення полів вводу
      const emailInput = loginForm.elements.email;
      const passwordInput = loginForm.elements.password;

      // Перевіряємо, чи всі поля заповнені (trim() для видалення зайвих пробілів)
      if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        // Виводимо повідомлення, якщо не всі поля заповнені
        alert("All form fields must be filled in");
        return; // Завершуємо функцію, щоб не продовжувати обробку
      }

      // Збираємо значення полів в об'єкт
      const formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
      };

      // Виводимо об'єкт з введеними даними в консоль
      console.log(formData);

      // Очищаємо значення полів форми
      loginForm.reset();
    });
});
