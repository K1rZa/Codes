const CONTAINER = document.querySelector('.container')
const BUTTON = document.getElementById('buttontest')

const WORDS_ARRAY = [
	{ number: 1, word: 'test1', question: 'quest1' },
	{ number: 2, word: 'test2', question: 'quest2' },
]

let number = 1
let numberArray = 0

BUTTON.addEventListener('click', function () {
	let wordclass = '.wordclass' + number
	let wordSymbolArray = document.querySelectorAll(wordclass + ' .wordsymbol')
	const SYMBOL_ARRAY = WORDS_ARRAY[numberArray].word.split('')
	let inputArray = []
	for (let i = 0; i < wordSymbolArray.length; i++) {
		inputElement = document.createElement('input')
		inputElement.setAttribute('type', 'text')
		inputElement.className = 'wordsymbol-input'
		wordSymbolArray[i].appendChild(inputElement)
		inputArray.push(inputElement.value)
	}

	console.log(wordSymbolArray)
	console.log(inputArray)
	console.log(SYMBOL_ARRAY)
	number++
	numberArray++
})

/*
Как это должно работать? Есть html страница на которой реализован кроссворд (его скелет). При ответе на слово и нажатии на кнопку фокус переносится на следующее слово + меняется вопрос.

Примерная реализация: на странице каждое слово имеет свой класс такого вида: "wordclass'i'", где i будет меняться по нажатию кнопки. В каждом слове есть уже размеченные блоки для ввода букв, их нужное количество и все они имеют одинаковый класс
*/
