const questDiv = document.getElementById('question')
const buttonTest = document.getElementById('buttontest')

let checkedValue = null
const inputElements = document.getElementsByClassName('answerCheck')
const labelElements = document.getElementsByClassName('answerLab')

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
let completed = 0

questDiv.innerHTML = ArrayQuest[input].title

for (let i = 0; labelElements[i]; i++) {
	labelElements[i].innerHTML = ArrayQuest[input].ans[i]
}

buttonTest.addEventListener('click', function () {
	for (let i = 0; inputElements[i]; i++) {
		inputElements[i].value = ArrayQuest[input].ans[i]

		if (inputElements[i].checked) {
			checkedValue = inputElements[i].value
			console.log('Выбран ответ: ' + checkedValue)
		}

		inputElements[i].checked = null
	}
	if (checkedValue === ArrayQuest[input].rightAnswer) {
		completed++
		console.log('Правильных ответов: ' + completed)
	}

	if (input === ArrayQuest.length - 1) {
		questDiv.innerHTML = 'Good Bye'
		console.log('Всего правильных ответов: ' + completed)

		buttonTest.style = 'display: none'
		for (let i = 0; inputElements[i]; i++) {
			inputElements[i].style = 'display: none'
			labelElements[i].style = 'display: none'
		}
	} else {
		input++

		questDiv.innerHTML = ArrayQuest[input].title

		for (let i = 0; labelElements[i]; i++) {
			labelElements[i].innerHTML = ArrayQuest[input].ans[i]
		}
	}
})
