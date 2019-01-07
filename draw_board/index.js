// make Canvas and context
let canv = document.createElement("canvas");
canv.height = window.innerHeight;
canv.width = window.innerWidth;

let ctx = canv.getContext("2d");
document.body.appendChild(canv);

// recorde x and y positions
let prevX, prevY;
let lineWidth = 10;
let color = "white";
let prevColor = color;
let erase = false;

function draw(e) {
	if (erase) color = "black";
	else color = prevColor;
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(e.x, e.y, lineWidth / 2, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();
	ctx.save();

	if (prevX && prevY) {
		ctx.restore();
		ctx.moveTo(prevX, prevY);
		ctx.strokeStyle = color;
		ctx.lineTo(e.x, e.y);
		ctx.lineWidth = lineWidth;
		ctx.stroke();
		ctx.closePath();
	}

	// store the next point
	prevY = e.y;
	prevX = e.x;
}

// draw a white cerical onMouseDown
canv.addEventListener("mousedown", function(e) {
	//listen for mosuemove and draw
	canv.addEventListener("mousemove", draw);
});

canv.addEventListener("mouseup", function() {
	prevX = null;
	prevY = null;
	// remove the mousemove event
	canv.removeEventListener("mousemove", draw);
});

// Buttons
clearBtn = document.getElementById("clear");
eraseBtn = document.getElementById("erase");
colorInput = document.getElementById("mouseColor");
sizeSelect = document.getElementById("select-size");

// clear Everything on canvas
clearBtn.addEventListener("click", function() {
	ctx.clearRect(0, 0, canv.width, canv.height);
});

// actviate eraser. Click again to activate pen again
eraseBtn.addEventListener("click", function() {
	erase = !erase;
	this.classList.toggle("erase-selected");
});

// set a pen color
colorInput.addEventListener("change", function(e) {
	prevColor = e.target.value;
});

sizeSelect.addEventListener("change", function(e) {
	lineWidth = sizeSelect.value;
});
