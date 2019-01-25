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
    this.lineWidth = 10;
    this.color = "white"; //Default color
    this.prevColor = this.color;
    this.erase = false;
    this.eraseColor = "black";
    // Bindings
    this.draw = Board.draw.bind(this);
    this.clearCanv = Board.clearCanv.bind(this);
    this.takeScreenShot = this.takeScreenShot.bind(this);
  }

  /*
  Todo: Improvments
	redsigne the buttons to show only when hover over a slider 
	add better styles.

	Todo: bug fixes
	pictures not showing when background is white


	*/

  static draw({ x, y }) {
    if (this.erase) this.color = this.eraseColor;
    else this.color = this.prevColor;
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

  static takeScreenShot() {
    //returns a dataurl containing a represintation of the image, Default to png
    this.image = this.canv.toDataURL("image/jpeg", 1.0);
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
const eraseBtn = document.getElementById("erase");
const colorInput = document.getElementById("mouseColor");
const sizeSelect = document.getElementById("select-size");
const bgLight = document.getElementById("light");
const bgDark = document.getElementById("dark");
const linktoimg = document.getElementById("linktoimg");

linktoimg.addEventListener("click", function() {
  Board.takeScreenShot();
  linktoimg.href = Board.image;
  console.log(Board.image);
});

// Clear Canvas
clearBtn.addEventListener("click", Board.clearCanv);

// Actviate eraser. Click again to activate pen again
eraseBtn.addEventListener("click", function() {
  Board.erase = !Board.erase;
  this.classList.toggle("btn-selected");
});

// Set a pen color
colorInput.addEventListener("change", function(e) {
  Board.prevColor = e.target.value;
});

// Pen size
sizeSelect.addEventListener("change", function(e) {
  Board.lineWidth = sizeSelect.value;
});

bgDark.addEventListener("click", function() {
  Board.clearCanv();
  Board.prevColor = "white";
  Board.eraseColor = "Black";
  Board.canv.style.background = this.getAttribute("data-color");
  this.classList.add("btn-selected");
  bgLight.classList.remove("btn-selected");
});

bgLight.addEventListener("click", function() {
  Board.clearCanv();
  Board.prevColor = "black";
  Board.eraseColor = "white";
  Board.canv.style.background = this.getAttribute("data-color");
  this.classList.add("btn-selected");
  bgDark.classList.remove("btn-selected");
});
