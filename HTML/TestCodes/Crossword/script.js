const CONTAINER = document.querySelector('.container')
const WORD_CLASS = document.querySelectorAll('.wordclass')

const WORDS_ARRAY = [
	{ number: 1, word: 'test1', question: 'quest1' },
	{ number: 2, word: 'test2', question: 'quest2' },
]

if (WORD_CLASS.length === WORDS_ARRAY.length){
	for (let i = 0; i < WORDS_ARRAY.length; i++){
		console.log('hello')
	}
}