// this within a static method refers to the Board class
// (constructor function) itself (if you call it via
// Board.methodName(...)).

class Board {
	static initalize() {
		// Create Canvas
		this.canv = document.createElement("canvas");
		this.ctx = this.canv.getContext("2d");

		this.canv.height = window.innerHeight;
		this.canv.width = window.innerWidth;
		document.body.appendChild(this.canv);

		this.prevX, this.prevY;
		this.lineWidth = 25;
		this.color = "white"; //Default color
		this.prevColor = this.color;
		this.erase = false;
	}

	/*
  Todo: Improvments
  set attr in constructor and save it
	then restore it in the draw method
	Take the event listener outside of the class 
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
		console.log(this);
		this.canv.addEventListener("mousedown", function() {
			this.canv.addEventListener("mousemove", Board.draw);
		});
	}

	static listenForUnDraw() {
		this.canv.addEventListener("mouseup", function() {
			// remove the mousemove event
			prevX = null;
			prevY = null;
			this.canv.removeEventListener("mousemove", Board.draw);
		});
	}
}

Board.initalize();
Board.listenForDraw();
