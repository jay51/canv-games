// this within a static method refers to the Board class
// (constructor function) itself (if you call it via
// Board.methodName(...)) this will refer to class.

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
		// Bindings
		this.draw = Board.draw.bind(this);
		this.clearCanv = Board.clearCanv.bind(this);
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
		// this.ctx.save();

		// If we have prevX/Y draw a line from prevX/Y
		// To currentX/Y
		if (this.prevX && this.prevY) {
			this.ctx.beginPath();
			// this.ctx.restore();
			this.ctx.moveTo(this.prevX, this.prevY);
			this.ctx.strokeStyle = this.color;
			this.ctx.lineTo(x, y);
			this.ctx.lineWidth = this.lineWidth;
			this.ctx.stroke();
			this.ctx.closePath();
		}
		// Recored X/Y
		this.prevX = x;
		this.prevY = y;
	}

	// Clear everything on canvas
	static clearCanv(e, x = 0, y = 0) {
		this.ctx.clearRect(x, y, this.canv.width, this.canv.height);
	}
}

Board.initalize();
// Should pass the same func to add/removeEventListener

Board.canv.addEventListener("mousedown", function() {
	// this == canvas
	this.addEventListener("mousemove", Board.draw);
});

Board.canv.addEventListener("mouseup", function() {
	// Stop drawing onMouseup
	Board.prevX = null;
	Board.prevY = null;
	Board.canv.removeEventListener("mousemove", Board.draw);
});

const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", Board.clearCanv);
//clearBtn.addEventListener("click", function() {
//	Board.clearCanv();
//});
