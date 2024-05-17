const questDiv = document.getElementById('question')
let completedDiv = document.getElementById('completed')

let buttonTest = document.getElementById('buttontest')
let checkedValue = null
let inputElements = document.getElementsByClassName('answerCheck')
let labelElements = document.getElementsByClassName('answerLab')

const quest = {
	id: 0,
	title: '',
	ans: [],
	rightAnswer: '',
}

let ArrayQuest = [
	{
		id: 1,
		title: 'title1',
		ans: ['text', 'value1', 'text', 'text'],
		rightAnswer: 'value1',
	},
	{
		id: 2,
		title: 'title2',
		ans: ['text', 'value2', 'text', 'text'],
		rightAnswer: 'value2',
	},
	{
		id: 3,
		title: 'title3',
		ans: ['text', 'value3', 'text', 'text'],
		rightAnswer: 'value3',
	},
	{
		id: 4,
		title: 'title4',
		ans: ['text', 'value4', 'text', 'text'],
		rightAnswer: 'value4',
	},
	{
		id: 5,
		title: 'title5',
		ans: ['text', 'value5', 'text', 'text'],
		rightAnswer: 'value5',
	},
	{
		id: 6,
		title: 'title6',
		ans: ['text', 'value6', 'text', 'text'],
		rightAnswer: 'value6',
	},
	{
		id: 7,
		title: 'title7',
		ans: ['text', 'value7', 'text', 'text'],
		rightAnswer: 'value7',
	},
	{
		id: 8,
		title: 'title8',
		ans: ['text', 'value8', 'text', 'text'],
		rightAnswer: 'value8',
	},
]

let input = 0
let correct = 0
let correctBoolean = null

function getCheckValue(i) {
	if (inputElements[i].checked) {
		checkedValue = inputElements[i].value
		console.log('Выбран ответ: ' + checkedValue + correctBoolean)
	}
}

function countRightAnswer() {
	if (checkedValue === ArrayQuest[input].rightAnswer) {
		correctBoolean = true
		correct++
		console.log('Правильных ответов: ' + correct)
	} else {
		correctBoolean = false
	}
		completedDiv.innerHTML = correctBoolean
}

function objectsNull() {
	completedDiv.style = 'display: none'
	completedDiv = null
	buttonTest.style = 'display: none'
	buttonTest = null
	for (let i = 0; inputElements[i]; i++) {
		inputElements[i] = null
		inputElements[i].style = 'display: none'
		labelElements[i] = null
		labelElements[i].style = 'display: none'
	}
}

function updateTestQuestion() {
	input++
	questDiv.innerHTML = ArrayQuest[input].title
	for (let i = 0; labelElements[i]; i++) {
		labelElements[i].innerHTML = ArrayQuest[input].ans[i]
	}
}

function startTest() {
	questDiv.innerHTML = ArrayQuest[input].title

	for (let i = 0; labelElements[i]; i++) {
		labelElements[i].innerHTML = ArrayQuest[input].ans[i]
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

function finishTest() {
	questDiv.innerHTML = 'Good Bye'
	console.log('Всего правильных ответов: ' + correct)
}

startTest()
