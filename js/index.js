// Game Constans & Variables
let direction = {x: 0, y: 0};
let foodSound = new Audio("music/food.mp3");
let gameOverSound = new Audio("music/gameover.mp3");
let moveSound = new Audio("music/move.mp3");
let musicSound = new Audio("music/music.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
	{x: 13, y: 15}
]
food = {x: 6, y: 7};

// Game Functions
function main(ctime) {
	window.requestAnimationFrame(main);
	if ((ctime - lastPaintTime)/1000 < 1/speed) {
		return;
	}
	lastPaintTime = ctime;
	gameEngine();
}

function gameEngine(){
	// Part 1: Updating the snake array and food

	// Part 2: Display the snake and food

	
	board.innerHTML = "";
	snakeArr.forEach((e, index)=>{
		snakeElement =  document.createElement("div");
		snakeElement.style.gridRowStart = e.y;
		snakeElement.style.gridColumnStart = e.x;
		if (index === 0) {
			snakeElement.classList.add("head");
		}
		else {
			snakeElement.classList.add("snake");
		}
		board.appendChild(snakeElement);
	})

// Display the food
	foodElement =  document.createElement("div");
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add("food");
	board.appendChild(foodElement);
}

// Main logic starts here
window.requestAnimationFrame(main)
window.addEventListener('keydown', у => {
	inputDir = {x: 0, y: 1}; // Start the game
	moveSound.play();
	switch (e.key) {
		case "ArrowUp":
			console.log('ArrowUp')
			break;
		
		case "ArrowDown":
			console.log('ArrowDown')
			break;
		
		case "ArrowLeft":
			console.log('ArrowLeft')
			break;

		case "ArrowRight":
			console.log('ArrowRight')
			break;
		default:
			break;
	}
})