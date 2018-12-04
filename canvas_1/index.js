const canvas = document.getElementById("Game");
const context = canvas.getContext("2d");

let dx = 44;
let dy = 44;
let ballSpeed = 3;

function draw(x, y) {
	// clear the entire canvas
	context.clearRect(0, 0, canvas.width, canvas.height);
	// starts a new drawing point
	context.beginPath();
	// close the shape to the original starting point
	// context.closePath

	//color of object
	context.fillStyle = "#fff";

	// creates a cericle
	context.arc(x, y, 30, 0, 2 * Math.PI, false);
	// will fill the shape with color
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

context.beginPath();
context.rect(2, 33, 44, 44);

// context.fillStyle = "#fff";
// context.fill();
context.strokeStyle = "#fff";
context.stroke();
