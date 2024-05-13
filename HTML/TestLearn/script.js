const questDiv = document.getElementById('question')
const buttonTest = document.getElementById('buttontest')

let checkedValue = null
const inputElements = document.getElementsByClassName('answerCheck')
const labelElements = document.getElementsByClassName('answerLab')

const quest = {
	id: 0,
	title: '',
	ans1: '',
	ans2: '',
	ans3: '',
	ans4: '',
	rightAnswer: '',
}

let ArrayQuest = [
	{
		id: 1,
		title: 'title1',
		ans1: 'text',
		ans2: 'value1',
		ans3: 'text',
		ans4: 'text',
		rightAnswer: 'value1',
	},
	{
		id: 2,
		title: 'title2',
		ans1: 'text',
		ans2: 'value2',
		ans3: 'text',
		ans4: 'text',
		rightAnswer: 'value2',
	},
	{
		id: 3,
		title: 'title3',
		ans1: 'text',
		ans2: 'text',
		ans3: 'text',
		ans4: 'value3',
		rightAnswer: 'value3',
	},
	{
		id: 4,
		title: 'title4',
		ans1: 'text',
		ans2: 'text',
		ans3: 'value4',
		ans4: 'text',
		rightAnswer: 'value4',
	},
	{
		id: 5,
		title: 'title5',
		ans1: 'value5',
		ans2: 'text',
		ans3: 'text',
		ans4: 'text',
		rightAnswer: 'value5',
	},
	{
		id: 6,
		title: 'title6',
		ans1: 'text',
		ans2: 'value6',
		ans3: 'text',
		ans4: 'text',
		rightAnswer: 'value6',
	},
	{
		id: 7,
		title: 'title7',
		ans1: 'text',
		ans2: 'text',
		ans3: 'value7',
		ans4: 'text',
		rightAnswer: 'value7',
	},
	{
		id: 8,
		title: 'title8',
		ans1: 'text',
		ans2: 'text',
		ans3: 'text',
		ans4: 'value8',
		rightAnswer: 'value8',
	},
]
let input = 0
let completed = 0
questDiv.innerHTML = ArrayQuest[input].title

labelElements[0].innerHTML = ArrayQuest[input].ans1
labelElements[1].innerHTML = ArrayQuest[input].ans2
labelElements[2].innerHTML = ArrayQuest[input].ans3
labelElements[3].innerHTML = ArrayQuest[input].ans4

buttonTest.addEventListener('click', function () {
	for (let i = 0; inputElements[i]; i++) {
		inputElements[0].value = ArrayQuest[input].ans1
		inputElements[1].value = ArrayQuest[input].ans2
		inputElements[2].value = ArrayQuest[input].ans3
		inputElements[3].value = ArrayQuest[input].ans4

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

	input++
	questDiv.innerHTML = ArrayQuest[input].title

	labelElements[0].innerHTML = ArrayQuest[input].ans1
	labelElements[1].innerHTML = ArrayQuest[input].ans2
	labelElements[2].innerHTML = ArrayQuest[input].ans3
	labelElements[3].innerHTML = ArrayQuest[input].ans4
})
