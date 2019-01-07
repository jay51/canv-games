class Board {
	constructor() {
		// Create Canvas
		this.canv = document.createElement("canvas");
		this.ctx = canv.getContext("2d");

		canv.height = window.innerHeight;
		canv.width = window.innerWidth;
		document.body.appendChild(canv);

		this.prevX, prevY;
		this.lineWidth = 25;
		this.color = "white"; //Default color
		this.prevColor = color;
		this.erase = false;
	}

	/*
  Todo: Improvments
  set attr in constructor and save it
  then restore it in the draw method
   */

	static draw({ x, y }) {
		// Draw a cericle on X, Y
		this.ctx.beginPath();
		this.ctx.fillStyle = this.color;
		this.ctx.arc(x, y, this.lineWidth / 2, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.save();

		// If we have prevX/Y draw a line from prevX/Y
		// To currentX/Y
		if (prevX && prevY) {
			this.ctx.restore();
			this.ctx.moveTo(prevX, prevY);
			this.strokeStyle = this.color;
			this.ctx.lineTo(x, y);
			this.ctx.lineWidth = this.lineWidth;
			this.ctx.stroke();
			this.crx.closePath();
		}

		// Recored X/Y
		this.prevX = x;
		this.prevY = y;
	}

	static listenForDraw() {
		this.canv.addEventListener("mousedown", function() {
			this.canv.addEventListener("mousemove", Board.draw);
		});
	}

	static listenForUnDraw() {
		prevX = null;
		prevY = null;
		// remove the mousemove event
		this.canv.removeEventListener("mousemove", Board.draw);
	}
}
