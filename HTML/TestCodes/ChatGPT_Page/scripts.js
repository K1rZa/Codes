// scripts.js

document.addEventListener('DOMContentLoaded', function () {
	const registrationForm = document.getElementById('registration-form')

	registrationForm.addEventListener('submit', function (event) {
		event.preventDefault() // Предотвращаем отправку формы по умолчанию

		// Получаем значения полей формы
		const username = document.getElementById('username').value
		const email = document.getElementById('email').value
		const password = document.getElementById('password').value

		// Ваш код для обработки регистрации пользователя
		// Например, отправка данных на сервер или сохранение их в локальном хранилище

		// Очистка полей формы после отправки
		registrationForm.reset()
	})
})
