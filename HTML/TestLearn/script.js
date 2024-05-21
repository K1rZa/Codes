let questDiv = document.getElementById('question')
let completedDiv = document.getElementById('completed')
let buttonTest = document.getElementById('buttontest')
const inputElements = document.getElementsByClassName('answerCheck')
const labelElements = document.getElementsByClassName('answerLab')

const quest = {
	id: 0,
	title: '',
	answer: [],
	right: '',
}

let ArrayQuest = [
	{
		id: 1,
		title: 'Какой тег используется для создания таблицы в HTML?',
		answer: ['table', 'div', 'section', 'nav'],
		right: 'table',
	},
	{
		id: 2,
		title: 'Какой свойство CSS используется для изменения цвета текста?',
		answer: ['color', 'background-color', 'font-size', 'text-align'],
		right: 'color',
	},
	{
		id: 3,
		title: 'Как в CSS задать полужирное начертание текста?',
		answer: [
			'font-weight: bold',
			'font-style: italic',
			'text-decoration: underline',
			'font-style: normal',
		],
		right: 'font-weight: bold',
	},
	{
		id: 4,
		title: 'Какой тег используется для создания ссылки в HTML?',
		answer: ['a', 'link', 'div', 'p'],
		right: 'a',
	},
	{
		id: 5,
		title: 'Как в CSS задать отступы вокруг элемента?',
		answer: ['margin', 'padding', 'border', 'overflow'],
		right: 'margin',
	},
	{
		id: 6,
		title: 'Какой атрибут указывает на расположение веб-страницы на сервере?',
		answer: ['href', 'src', 'url', 'action'],
		right: 'href',
	},
	{
		id: 7,
		title:
			'Какое значение display в CSS скрывает элемент, но оставляет его место в потоке документа?',
		answer: ['none', 'block', 'inline', 'hidden'],
		right: 'none',
	},
	{
		id: 8,
		title: 'Какое свойство HTML используется для определения класса стиля?',
		answer: ['class', 'id', 'style', 'name'],
		right: 'class',
	},
	{
		id: 9,
		title: 'Как задать жирное начертание текста в HTML?',
		answer: ['strong', 'b', 'em', 'i'],
		right: 'b',
	},
	{
		id: 10,
		title: 'Как добавить тень к элементу в CSS?',
		answer: ['box-shadow', 'border-radius', 'text-shadow', 'background-image'],
		right: 'box-shadow',
	},
	{
		id: 11,
		title: 'Как в CSS задать курсор-указатель на элементе при наведении?',
		answer: [
			'cursor: pointer',
			'hover: cursor',
			'cursor: hover',
			'pointer: hover',
		],
		right: 'cursor: pointer',
	},
	{
		id: 12,
		title: 'Какой тег используется для создания списка в HTML?',
		answer: ['ul', 'ol', 'li', 'dl'],
		right: 'ul',
	},
	{
		id: 13,
		title: 'Как сделать ссылку открывающейся в новой вкладке браузера?',
		answer: ['target="_blank"', 'rel="noopener"', 'nofollow', 'noopener'],
		right: 'target="_blank"',
	},
	{
		id: 14,
		title: 'Какое свойство CSS используется для изменения шрифта текста?',
		answer: ['font-family', 'text-transform', 'letter-spacing', 'line-height'],
		right: 'font-family',
	},
	{
		id: 15,
		title: 'Какой тег создает заголовок в HTML?',
		answer: ['h1', 'h', 'title', 'head'],
		right: 'h1',
	},
	{
		id: 16,
		title: 'Как в CSS задать прозрачность фона элемента?',
		answer: ['opacity', 'background-opacity', 'color-opacity', 'alpha'],
		right: 'opacity',
	},
	{
		id: 17,
		title: 'Как в HTML создать кнопку?',
		answer: ['button', 'input type="button"', 'a', 'div class="button"'],
		right: 'button',
	},
	{
		id: 18,
		title: 'Как сделать текст заглавными буквами в CSS?',
		answer: [
			'text-transform: uppercase',
			'font-upper',
			'uppercase',
			'text-case',
		],
		right: 'text-transform: uppercase',
	},
	{
		id: 19,
		title: 'Как указать язык документа в теге html?',
		answer: ['lang', 'language', 'locale', 'lingua'],
		right: 'lang',
	},
	{
		id: 20,
		title: 'Какой тег используется для создания формы в HTML?',
		answer: ['form', 'input', 'button', 'label'],
		right: 'form',
	},
	{
		id: 21,
		title: 'Как в CSS задать границы элементу?',
		answer: ['border', 'outline', 'margin', 'padding'],
		right: 'border',
	},
	{
		id: 22,
		title: 'Как изменить цвет фона элемента с помощью CSS?',
		answer: ['background-color', 'color', 'bgcolor', 'background'],
		right: 'background-color',
	},
	{
		id: 23,
		title: 'Как задать закругленные углы у элемента в CSS?',
		answer: ['border-radius', 'border-corner', 'corner-radius', 'border-curve'],
		right: 'border-radius',
	},
	{
		id: 24,
		title: 'Как сделать текст наклонным в CSS?',
		answer: [
			'font-style: italic',
			'text-transform: italic',
			'italic',
			'font-italic',
		],
		right: 'font-style: italic',
	},
	{
		id: 25,
		title: 'Какой тег используется для создания ненумерованного списка в HTML?',
		answer: ['ul', 'ol', 'li', 'dl'],
		right: 'ul',
	},
	{
		id: 26,
		title: 'Какие единицы измерения ширины можно использовать в CSS?',
		answer: ['px', 'em', 'rem', '%'],
		right: 'px',
	},
	{
		id: 27,
		title: 'Как определить размер шрифта текста в CSS?',
		answer: ['font-size', 'text-size', 'font-height', 'text-font'],
		right: 'font-size',
	},
	{
		id: 28,
		title: 'Как в HTML задать ссылку на внешний файл CSS?',
		answer: [
			'link rel="stylesheet" href="styles.css"',
			'style src="styles.css"',
			'link src="styles.css"',
			'style type="text/css"',
		],
		right: 'link rel="stylesheet" href="styles.css"',
	},
	{
		id: 29,
		title: 'Как добавить анимацию к элементу в CSS?',
		answer: ['animation', 'transition', 'transform', 'animate'],
		right: 'animation',
	},
	{
		id: 30,
		title: 'Как в HTML вставить картинку?',
		answer: [
			'img src="image.jpg" alt="Description"',
			'picture src="image.jpg" alt="Description"',
			'img href="image.jpg" alt="Description"',
			'image src="image.jpg" alt="Description"',
		],
		right: 'img src="image.jpg" alt="Description"',
	},
	{
		id: 31,
		title: 'Какой тег используется для создания радиокнопки в HTML?',
		answer: [
			'input type="radio"',
			'input type="checkbox"',
			'radio',
			'checkbox',
		],
		right: 'input type="radio"',
	},
	{
		id: 32,
		title: 'Как в CSS задать центрирование содержимого по горизонтали?',
		answer: [
			'text-align: center',
			'content-align: center',
			'align: center',
			'center: text',
		],
		right: 'text-align: center',
	},
	{
		id: 33,
		title: 'Что такое структура блочной модели в CSS?',
		answer: [
			'Блок, включающий контент, отступы, границы и поля',
			'Тип свойств CSS для фона',
			'Технология создания анимации',
			'Выравнивание элемента внутри блока',
		],
		right: 'Блок, включающий контент, отступы, границы и поля',
	},
	{
		id: 34,
		title: 'Как добавить внешний файл JavaScript в HTML?',
		answer: [
			'script src="script.js"/script',
			'link src="script.js"',
			'js src="script.js"/js',
			'script type="text/javascript"',
		],
		right: 'script src="script.js"/script',
	},
	{
		id: 35,
		title: 'Как добавить список с числовым перечислением в HTML?',
		answer: ['ol', 'ul', 'li', 'dl'],
		right: 'ol',
	},
	{
		id: 36,
		title: 'Как задать полное отсутствие пробелов вокруг элемента в CSS?',
		answer: ['padding: 0;', 'margin: 0;', 'space: 0;', 'layout: 0;'],
		right: 'padding: 0;',
	},
	{
		id: 37,
		title: 'Как открыть элемент только в режиме чтения в CSS?',
		answer: [
			'pointer-events: none;',
			'visible: false;',
			'display: none;',
			'display: hidden;',
		],
		right: 'pointer-events: none;',
	},
	{
		id: 38,
		title: 'Как вставить горизонтальную линию в HTML?',
		answer: ['hr', 'line', 'line-break', 'hrule'],
		right: 'hr',
	},
	{
		id: 39,
		title: 'Как центрировать элемент по горизонтали и вертикали в CSS?',
		answer: [
			'margin: auto;',
			'center: both;',
			'align: center;',
			'horizontal-align: vertical;',
		],
		right: 'margin: auto;',
	},
	{
		id: 40,
		title: 'Как изменить высоту строки текста в CSS?',
		answer: ['line-height', 'text-height', 'font-height', 'height-line'],
		right: 'line-height',
	},
	{
		id: 41,
		title: 'Как добавить закрытие элемента при нажатии на ссылку в CSS?',
		answer: [
			'pointer-events: none;',
			'close-on-click: true;',
			'toggle: hide;',
			'event-listener: close;',
		],
		right: 'pointer-events: none;',
	},
	{
		id: 42,
		title: 'Как создать выпадающее меню в HTML?',
		answer: ['select', 'dropdown', 'menu', 'options'],
		right: 'select',
	},
	{
		id: 43,
		title: 'Что такое медиа-запросы в CSS?',
		answer: [
			'Способ адаптации дизайна к разным устройствам',
			'Подключение дополнительных шрифтов на страницу',
			'Запросы к серверу для получения данных',
			'Форматирование текста на странице',
		],
		right: 'Способ адаптации дизайна к разным устройствам',
	},
	{
		id: 44,
		title: 'Как создать перечеркнутый текст в CSS?',
		answer: [
			'text-decoration: line-through;',
			'strike: true;',
			'text-line: strike;',
			'decoration: line-through;',
		],
		right: 'text-decoration: line-through;',
	},
	{
		id: 45,
		title: 'Как в HTML создать ссылку на электронную почту?',
		answer: [
			'a href="mailto:example@example.com"Email/a',
			'mailexample@example.com/mail',
			'emailexample@example.com/email',
			'a href="email:example@example.com"Email/a',
		],
		right: 'a href="mailto:example@example.com"Email/a',
	},
	{
		id: 46,
		title: 'Как добавить границу вокруг элемента в CSS?',
		answer: ['border', 'outline', 'margin', 'padding'],
		right: 'border',
	},
	{
		id: 47,
		title: 'Как создать многострочный текстовый блок в HTML?',
		answer: ['textarea', 'input type="text"', 'textfield', 'textblock'],
		right: 'textarea',
	},
	{
		id: 48,
		title: 'Как изменить порядок элементов на странице в CSS?',
		answer: ['order', 'z-index', 'position', 'display'],
		right: 'order',
	},
	{
		id: 49,
		title: 'Как вставить картинку в качестве фона элемента в CSS?',
		answer: [
			'background-image',
			'image: background;',
			'img-block',
			'image-background',
		],
		right: 'background-image',
	},
	{
		id: 50,
		title: 'Как создать обязательное поле для заполнения в форме в HTML?',
		answer: [
			'input required',
			'input type="text" required',
			'required',
			'mandatory',
		],
		right: 'input required',
	},
	{
		id: 51,
		title: 'Как добавить тень к тексту в CSS?',
		answer: ['text-shadow', 'text-style', 'shadow: text;', 'shadow: true;'],
		right: 'text-shadow',
	},
	{
		id: 52,
		title: 'Как сделать текст заголовка курсивом в CSS?',
		answer: [
			'font-style: italic',
			'text-transform: italic',
			'italic',
			'font-italic',
		],
		right: 'font-style: italic',
	},
	{
		id: 53,
		title: 'Как создать номерованный список в HTML?',
		answer: ['ol', 'ul', 'li', 'dl'],
		right: 'ol',
	},
	{
		id: 54,
		title: 'Как добавить изображение на веб-страницу в HTML?',
		answer: [
			'img src="image.jpg" alt="Description"',
			'picture src="image.jpg" alt="Description"',
			'img href="image.jpg" alt="Description"',
			'image src="image.jpg" alt="Description"',
		],
		right: 'img src="image.jpg" alt="Description"',
	},
	{
		id: 55,
		title: 'Как в CSS задать анимацию элементу?',
		answer: ['animation', 'transition', 'transform', 'animate'],
		right: 'animation',
	},
	{
		id: 56,
		title: 'Как указать язык документа в теге html?',
		answer: ['lang', 'language', 'locale', 'lingua'],
		right: 'lang',
	},
	{
		id: 57,
		title: 'Какой тег используется для создания формы в HTML?',
		answer: ['form', 'input', 'button', 'label'],
		right: 'form',
	},
	{
		id: 58,
		title:
			'Какое значение display в CSS скрывает элемент, но оставляет его место в потоке документа?',
		answer: ['none', 'block', 'inline', 'hidden'],
		right: 'none',
	},
	{
		id: 59,
		title: 'Какой атрибут указывает на расположение веб-страницы на сервере?',
		answer: ['href', 'src', 'url', 'action'],
		right: 'href',
	},
	{
		id: 60,
		title: 'Как в CSS задать полужирное начертание текста?',
		answer: [
			'font-weight: bold',
			'font-style: italic',
			'text-decoration: underline',
			'font-style: normal',
		],
		right: 'font-weight: bold',
	},
	{
		id: 61,
		title: 'Как изменить цвет фона элемента с помощью CSS?',
		answer: ['background-color', 'color', 'bgcolor', 'background'],
		right: 'background-color',
	},
	{
		id: 62,
		title: 'Какие единицы измерения ширины можно использовать в CSS?',
		answer: ['px', 'em', 'rem', '%'],
		right: 'px',
	},
	{
		id: 63,
		title: 'Как в CSS задать границы элементу?',
		answer: ['border', 'outline', 'margin', 'padding'],
		right: 'border',
	},
	{
		id: 64,
		title: 'Как добавить анимацию к элементу в CSS?',
		answer: ['animation', 'transition', 'transform', 'animate'],
		right: 'animation',
	},
	{
		id: 65,
		title: 'Как задать жирное начертание текста в HTML?',
		answer: ['strong', 'b', 'em', 'i'],
		right: 'b',
	},
	{
		id: 66,
		title: 'Как в CSS задать отступы вокруг элемента?',
		answer: ['margin', 'padding', 'border', 'overflow'],
		right: 'margin',
	},
	{
		id: 67,
		title: 'Как в HTML создать кнопку?',
		answer: ['button', 'input type="button"', 'a', 'div class="button"'],
		right: 'button',
	},
	{
		id: 68,
		title: 'Какое свойство HTML используется для определения класса стиля?',
		answer: ['class', 'id', 'style', 'name'],
		right: 'class',
	},
	{
		id: 69,
		title: 'Какой элемент используется для создания ссылок в HTML?',
		answer: ['link', 'a', 'href', 'div'],
		right: 'a',
	},
	{
		id: 70,
		title: 'Какое свойство CSS используется для изменения цвета текста?',
		answer: ['background-color', 'text-style', 'color', 'font-color'],
		right: 'color',
	},
	{
		id: 71,
		title: 'Как вставить комментарий в HTML код?',
		answer: [
			'!--комментарий--',
			'//комментарий',
			'#комментарий',
			'//комментарий//',
		],
		right: '!--комментарий--',
	},
	{
		id: 72,
		title: 'Как изменить шрифт текста в CSS?',
		answer: ['font-style', 'text-transform', 'font-family', 'text-font'],
		right: 'font-family',
	},
	{
		id: 73,
		title: 'Как создать горизонтальную линию в HTML?',
		answer: ['hr', 'line', 'div', 'horizontal'],
		right: 'hr',
	},
	{
		id: 74,
		title: 'Как связать внешний файл стилей с HTML документом?',
		answer: ['link', 'style', 'import', 'src'],
		right: 'link',
	},
	{
		id: 75,
		title:
			'Как изменить положение элемента относительно его обычного места в потоке документа?',
		answer: ['position', 'float', 'align', 'margin'],
		right: 'position',
	},
]

let input = 0
let checkedValue = null
let correct = 0
let correctBoolean = null

function getCheckValue(i) {
	if (inputElements[i].checked) {
		checkedValue = inputElements[i].value
	}
}

function countRightAnswer() {
	if (checkedValue === ArrayQuest[input].right) {
		correctBoolean = true
		correct++
		completedDiv.style = 'border:2px solid green'
	} else {
		correctBoolean = false
		completedDiv.style = 'border:2px solid red'
	}
	console.log('Выбран ответ: ', checkedValue, correctBoolean)
	console.log('Правильных ответов: ' + correct)
	completedDiv.innerHTML = correctBoolean
}

function objectsNull() {
	completedDiv.style = 'display: none'
	//completedDiv = null
	buttonTest.style = 'display: none'
	//buttonTest = null
	for (let i = 0; inputElements[i]; i++) {
		//inputElements[i] = null
		inputElements[i].style = 'display: none'
		//labelElements[i] = null
		labelElements[i].style = 'display: none'
	}
}

function updateTestQuestion() {
	input++
	questDiv.innerHTML =
		ArrayQuest[input].id + '.' + ' ' + ArrayQuest[input].title
	for (let i = 0; labelElements[i]; i++) {
		labelElements[i].innerHTML = ArrayQuest[input].answer[i]
	}
}
function finishTest() {
	let number = 0
	if (correct <= 25) number = 2
	else if (correct > 25 && correct <= 40) number = 3
	else if (correct > 40 && correct <= 60) number = 4
	else number = 5

	questDiv.innerHTML = 'Тест завершен! Ваша оценка: ' + number
	console.log('Всего правильных ответов: ' + correct)
	console.log('Оценка: ' + number)
}

function startTest() {
	questDiv.innerHTML =
		ArrayQuest[input].id + '.' + ' ' + ArrayQuest[input].title

	for (let i = 0; labelElements[i]; i++) {
		labelElements[i].innerHTML = ArrayQuest[input].answer[i]
	}

	buttonTest.addEventListener('click', function () {
		for (let i = 0; inputElements[i]; i++) {
			inputElements[i].value = labelElements[i].innerHTML

			getCheckValue(i)

			inputElements[i].checked = null
		}

		countRightAnswer()

		if (input === ArrayQuest.length - 1) {
			finishTest()

			objectsNull()
		} else {
			updateTestQuestion()
		}
	})
}

startTest()
