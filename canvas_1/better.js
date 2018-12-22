// const canvas = document.getElementById("Game");
// const cx = canvas.getContext("2d");

// function Ball(dx, dy, speed, canvas) {
// 	this.dx = dx;
// 	this.dy = dy;
// 	this.speed = speed;
// 	this.canvas = canvas;
// 	// clear canvas for drawing
// 	this.context.clearRect(0, 0, canvas.width, canvas.height);
// 	this.context.beginPath();
// 	this.context.fillStyle = "#fff";
// 	this.context.save();
// }

// Ball.prototype.drawBall = function(x, y) {
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	context.beginPath();

// 	context.arc(x, y, 30, 0, 2 * Math.PI, false);
// 	context.fill();
// };

// const ball = new Ball(0,10,)

class BalancingBall {
	constructor(x = 20, y = 20, radius = 10) {
		// create canvas and context
		this.canv = document.createElement("canvas");
		this.ctx = this.canv.getContext("2d");
		document.body.appendChild(this.canv);

		// create ball at x y
		this.x = x;
		this.xv = 3;
		this.y = y;
		this.radius = radius;
		this.ctx.fillStyle = "white";
		this.ctx.save();
		this.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
		this.ctx.fill();
		this.balancX = this.balancX.bind(this);
		this.draw = this.draw.bind(this);
	}

	// make a method to balance ball
	balancX() {
		this.x += this.xv;
		if (this.x > this.canv.width) this.xv = -this.xv;
		if (this.x < 0) this.xv = -this.xv;
		this.draw(this.x, this.y);
	}

	draw(x, y) {
		this.ctx.restore();
		this.ctx.clearRect(0, 0, this.canv.width, this.canv.height);
		this.ctx.beginPath();
		this.ctx.arc(x, y, this.radius, 0, 2 * Math.PI, true);
		this.ctx.fill();
		// make a condition to
		requestAnimationFrame(this.balancX);
	}
}

const ball = new BalancingBall();
ball.balancX();
