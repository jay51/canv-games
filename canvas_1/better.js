const canvas = document.getElementById("Game");
const cx = canvas.getContext("2d");

function Ball(dx, dy, speed, canvas) {
	this.dx = dx;
	this.dy = dy;
	this.speed = speed;
	this.canvas = canvas;
	// clear canvas for drawing
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.fillStyle = "#fff";
}

Ball.prototype.drawBall = function(x, y) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();

	context.arc(x, y, 30, 0, 2 * Math.PI, false);
	context.fill();
};
