// Make sure Your Browser works with ES7

class Snowflake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;
		this.reset = this.reset.bind(this);
		this.reset();
	}

	reset() {
		// init Position
		this.x = this.randomBetween(0, window.innerWidth);
		// this.y = this.randomBetween(0, -window.innerHeight);
		this.y = this.randomBetween(0, window.innerHeight);

		// x,y speed
		this.vy = this.randomBetween(-3, 3);
		this.vx = this.randomBetween(2, 5);

		// Bigger snow or ..
		this.radius = this.randomBetween(1, 4);
		this.alpha = this.randomBetween(0.1, 0.9);
	}

	randomBetween(min, max) {
		return min + Math.random() * (max - min);
	}

	update() {
		this.x += this.vx;
		this.y += this.vy;
		if (this.y + this.radius > window.innerWidth) {
			this.reset();
		}
	}
}

class Snow {
	constructor() {
		console.log("show");
		this.canvas = document.createElement("canvas");
		this.ctx = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);

		this.update = this.update.bind(this);
		requestAnimationFrame(this.update);
		this.createSnowflakes();
	}

	createSnowflakes() {
		const maxP = 150;
		this.flakes = [];
		for (let s = 0; s < maxP; s++) {
			this.flakes.push(new Snowflake());
		}
	}

	update() {
		this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		for (let flake of this.flakes) {
			flake.update();
			this.ctx.save();
			this.ctx.beginPath();
			this.ctx.fillStyle = "red";
			this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
			this.ctx.fill();
			this.ctx.globalAlpha = flake.alpha;
			this.ctx.closePath();
			this.ctx.restore();
		}

		requestAnimationFrame(this.update);
	}
}

const snow = new Snow();
