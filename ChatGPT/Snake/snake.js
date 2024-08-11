const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')

// Элементы управления
const scoreDisplay = document.getElementById('score')
const highScoreDisplay = document.getElementById('highScore')

// Размеры и начальные параметры игры
const box = 20
const canvasSize = 400
let snake
let direction
let food
let score
let highScore = 0
let game
let speed = 100
let gameStarted = false

// Загрузка максимального счёта из localStorage
function loadHighScore() {
	const savedHighScore = localStorage.getItem('highScore')
	if (savedHighScore) {
		highScore = parseInt(savedHighScore, 10)
		highScoreDisplay.textContent = highScore
	}
}

// Сохранение максимального счёта в localStorage
function saveHighScore() {
	localStorage.setItem('highScore', highScore)
}

// Инициализация параметров игры
function initializeGame() {
	snake = [{ x: box * 5, y: box * 5 }]
	direction = null
	food = generateFood()
	score = 0
	updateScore()
	clearInterval(game)
	gameStarted = false
}

// Отслеживание клавиш
document.addEventListener('keydown', changeDirection)

function changeDirection(event) {
	const key = event.keyCode
	if (!gameStarted && (key === 37 || key === 38 || key === 39 || key === 40)) {
		gameStarted = true
		game = setInterval(gameLoop, speed)
	}
	if (key === 37 && direction !== 'RIGHT') direction = 'LEFT'
	else if (key === 38 && direction !== 'DOWN') direction = 'UP'
	else if (key === 39 && direction !== 'LEFT') direction = 'RIGHT'
	else if (key === 40 && direction !== 'UP') direction = 'DOWN'
	else if (key === 32) restartGame() // Нажатие пробела для перезапуска игры
}

// Функция для рисования квадрата
function drawBox(x, y, color) {
	ctx.fillStyle = color
	ctx.fillRect(x, y, box, box)
	ctx.strokeStyle = 'black'
	ctx.strokeRect(x, y, box, box)
}

// Функция для рисования треугольной головы змейки
function drawTriangle(x, y, direction, color) {
	ctx.fillStyle = color
	ctx.strokeStyle = 'black'
	ctx.beginPath()

	switch (direction) {
		case 'LEFT':
			ctx.moveTo(x + box, y)
			ctx.lineTo(x, y + box / 2)
			ctx.lineTo(x + box, y + box)
			break
		case 'UP':
			ctx.moveTo(x, y + box)
			ctx.lineTo(x + box / 2, y)
			ctx.lineTo(x + box, y + box)
			break
		case 'RIGHT':
			ctx.moveTo(x, y)
			ctx.lineTo(x + box, y + box / 2)
			ctx.lineTo(x, y + box)
			break
		case 'DOWN':
			ctx.moveTo(x, y)
			ctx.lineTo(x + box / 2, y + box)
			ctx.lineTo(x + box, y)
			break
	}

	ctx.closePath()
	ctx.fill()
	ctx.stroke()
}

// Функция для генерации координат еды
function generateFood() {
	let food
	let foodOnSnake
	const maxPos = canvasSize / box - 2 // Макс. позиция с учётом отступа от края
	do {
		food = {
			x: Math.floor(Math.random() * maxPos + 1) * box,
			y: Math.floor(Math.random() * maxPos + 1) * box,
		}

		// Проверяем, не находится ли еда внутри змейки
		foodOnSnake = snake.some(
			segment => segment.x === food.x && segment.y === food.y
		)
	} while (foodOnSnake)

	return food
}

// Функция для перезапуска игры
function restartGame() {
	if (!game) {
		initializeGame()
	} else {
		clearInterval(game)
		initializeGame()
	}
}

// Функция для обновления счета
function updateScore() {
	scoreDisplay.textContent = score
	if (score > highScore) {
		highScore = score
		highScoreDisplay.textContent = highScore
		saveHighScore()
	}
}

// Основной игровой цикл
function gameLoop() {
	// Проверка на столкновение с границами или самим собой
	const head = snake[0]
	if (
		head.x < 0 ||
		head.y < 0 ||
		head.x >= canvasSize ||
		head.y >= canvasSize ||
		snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
	) {
		clearInterval(game)
		game = null // Остановка игры
		alert('Game Over! Your score is ' + score + '. Press Space to restart.')
		return
	}

	// Передвижение змейки
	const newHead = { x: head.x, y: head.y }
	if (direction === 'LEFT') newHead.x -= box
	if (direction === 'UP') newHead.y -= box
	if (direction === 'RIGHT') newHead.x += box
	if (direction === 'DOWN') newHead.y += box

	snake.unshift(newHead)

	// Проверка на поедание пищи
	if (newHead.x === food.x && newHead.y === food.y) {
		score++
		food = generateFood()
		updateScore()
	} else {
		snake.pop()
	}

	// Очистка экрана
	ctx.clearRect(0, 0, canvasSize, canvasSize)

	// Рисование пищи
	drawBox(food.x, food.y, 'red')

	// Рисование змейки
	snake.forEach((segment, index) => {
		if (index === 0) {
			drawTriangle(segment.x, segment.y, direction, 'green')
		} else {
			drawBox(segment.x, segment.y, 'lightgreen')
		}
	})
}

// Инициализация игры при загрузке страницы
loadHighScore()
initializeGame()
