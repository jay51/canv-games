// Make sure Your Browser works with ES7

class Snowflake {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.radius = 0;
		this.alpha = 0;
	}
}

class Snow {
	constructor() {
		this.canvas = document.createElement("canvas");
		this.canvas.style.width = "100vw";
		this.canvas.style.height = "100vh";
		// this.canvas.style.background = "#FF1919";
		this.ctx = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);
		console.log("show");
	}
}

const snow = new Snow();
