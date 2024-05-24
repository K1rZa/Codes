const CONTAINER = document.querySelector('container')
const WORD_CLASS = document.getElementById('wordclass')

const WORDS_ARRAY = [
	{ number: 1, word: 'test1', orientation: 'vertical' },
	{ number: 2, word: 'test2', orientation: 'horizontal' },
]

for (let i = 0; i < WORDS_ARRAY.length; i++) {
	if (WORDS_ARRAY[i].orientation === 'vertical') {
		console.log('vertical')
		WORD_CLASS.style.flexDirection = 'column'
	} else if (WORDS_ARRAY[i].orientation === 'horizontal') {
		console.log('horizontal')
		WORD_CLASS.style.flexDirection = 'row'
	} else {
		console.log('word orientation ERROR')
	}

	let symbolArray = WORDS_ARRAY[i].word.split('')
	let userSymbolArray = ['a', 'e', 's', 'w', 't']
	let completedArray = []

	console.log(symbolArray, userSymbolArray)

	if (symbolArray.length === userSymbolArray.length) {
		for (let j = 0; j < symbolArray.length; j++) {
			if (symbolArray[j] === userSymbolArray[j]) {
				completedArray.push('YES')
			} else {
				completedArray.push('ERROR')
			}
		}
		console.log(completedArray.join(' '))
	} else {
		console.log('array length ERROR')
	}
}
