const canvas = document.getElementById("Game");
const context = canvas.getContext("2d");

let dx = 44;
let dy = 44;
let ballSpeed = 3;

function draw(x, y) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	//color of object
	context.fillStyle = "#fff";

	// create and fill rectangle
	// context.fillRect(10, 10, 20, 20);

	// creates a cericle
	context.arc(x, y, 30, 0, 2 * Math.PI, false);
	// fill rec with color if not using fillRect()
	context.fill();
}

// This is BAD!!
// window.setInterval(function() {
// 	dx += ballSpeed;
// 	if (dx > canvas.width) ballSpeed = -ballSpeed;
// 	if (dx < 0) ballSpeed = -ballSpeed;

// 	console.log(dx);
// 	draw(dx, dy);
// }, 1000 / 30);

// This is GOOD!!
function start() {
	dx += ballSpeed;
	if (dx > canvas.width) ballSpeed = -ballSpeed;
	if (dx < 0) ballSpeed = -ballSpeed;
	draw(dx, dy);

	window.requestAnimationFrame(start);
}
window.requestAnimationFrame(start);

window.addEventListener(
	"keydown",

	function(e) {
		const up = 38;
		const down = 40;
		const right = 39;
		const left = 37;

		switch (e.keyCode) {
			case up:
				dy -= 5;
				draw(dx, dy);
				break;

			case down:
				dy += 5;
				draw(dx, dy);
				break;

			case left:
				dx -= 5;
				draw(dx, dy);
				break;

			case right:
				dx += 5;
				draw(dx, dy);
				break;
		}
	},

	false
);

// draw(dx, dy);

// start a new shape
context.beginPath();
context.fillStyle = "#23f";
context.rect(100, 100, 20, 20);
context.fill();

// //////////////////////////////////////////
// create a class
// have a state of x and y positions in constructor and draw init point at x,y
// create a draw method that takes x, y and draws at x, y
// create start method to listen for key events.
// when key pressed get current x, y position from state update it and call draw at new x, y

// const canvas = document.getElementById("Game");
// const context = canvas.getContext("2d");

// let dx = 44;
// let dy = 44;

// function draw(x, y) {
// 	context.clearRect(dx, dy, canvas.width, canvas.height);
// 	context.beginPath();
// 	//color of object
// 	context.fillStyle = "#fff";

// 	// create rectangle
// 	// context.fillRect(10, 10, 20, 20);

// 	// creates a cericle
// 	context.arc(x, y, 30, 0, 2 * Math.PI, false);
// 	// fill rec with color if not using fillRect()
// 	context.fill();
// }

// canvas.addEventListener("mousedown", function(e) {
// 	console.log("MouseDown");

// 	canvas.onmousemove = function({ x, y }) {
// 		context.clearRect(x, y, 30, 30);

// 		console.log(x, y);
// 	};
// });

// canvas.addEventListener("mouseup", function(e) {
// 	canvas.onmousemove = null;
// });

// window.addEventListener(
// 	"keydown",

// 	function(e) {
// 		const up = 38;
// 		const down = 40;
// 		const right = 39;
// 		const left = 37;

// 		switch (e.keyCode) {
// 			case up:
// 				dy -= 5;
// 				draw(dx, dy);
// 				break;

// 			case down:
// 				dy += 5;
// 				draw(dx, dy);
// 				break;

// 			case left:
// 				dx -= 5;
// 				draw(dx, dy);
// 				break;

// 			case right:
// 				dx += 5;
// 				draw(dx, dy);
// 				break;
// 		}
// 	},

// 	false
// );

// draw(dx, dy);

// // start a new shape
// context.beginPath();

// context.fillStyle = "#23f";
// context.rect(100, 100, 20, 20);
// context.fill();

// create a class
// have a state of x and y positions in constructor and draw init point at x,y
// create a draw method that takes x, y and draws at x, y
// create start method to listen for key events.
// when key pressed get current x, y position from state update it and call draw at new x, y
