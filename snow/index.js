// window width is 2 * 150 for some reson
class Drop {
	constructor() {
		this.x = 150;
		this.y = 5;
		this.yv = 1;
		this.xv = 1;
		this.radius = 0;
		this.update.bind(this);
		this.fall = this.fall.bind(this);
		this.update();
	}

	fall() {
		this.y += this.yv;
		this.x += this.xv;
		if (this.y > window.innerHeight / 4) {
			this.update();
		}
	}

	update() {
		this.x = this.randomBetween(0, 300);
		this.y = this.randomBetween(0, 5);
		this.yv = this.randomBetween(1, 3) * 0.5;
		this.xv = this.randomBetween(-2, 2) * 0.5;
		this.radius = this.randomBetween(1, 3) * 0.5;
		// this.alpha = this.randomBetween(0, 0.9);
	}

	randomBetween(min, max) {
		return min + Math.random() * (max - min);
	}
}

class Snow {
	constructor() {
		this.canv = document.createElement("canvas");
		this.ctx = this.canv.getContext("2d");
		document.body.appendChild(this.canv);

		this.draw = this.draw.bind(this);
		this.createDrops();
		this.draw();
	}

	createDrops() {
		const maxP = 100;
		this.drops = [];
		for (let i = 0; i < maxP; i++) {
			this.drops.push(new Drop());
		}
	}

	draw() {
		this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		this.ctx.save();
		for (let drop of this.drops) {
			this.ctx.beginPath();
			this.ctx.fillStyle = "white";
			this.ctx.arc(drop.x, drop.y, drop.radius, 0, 2 * Math.PI);
			this.ctx.fill();
			this.ctx.globalAlpha = drop.alpha;
			this.ctx.closePath();
			drop.fall();
			this.ctx.restore();
		}
		requestAnimationFrame(this.draw);
	}
}

new Snow();
