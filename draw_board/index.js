// make Canvas and context

let canv = document.createElement("canvas");
canv.height = window.innerHeight;
canv.width = window.innerWidth;

let ctx = canv.getContext("2d");
document.body.appendChild(canv);

// recorde x and y positions
let prevX, prevY;
let lineWidth = 25;

function draw(e) {
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(e.x, e.y, lineWidth / 2, 0, Math.PI * 2);
	ctx.fill();
	ctx.closePath();
	ctx.beginPath();

	if (prevX && prevY) {
		ctx.moveTo(prevX, prevY);
		ctx.strokeStyle = "white";
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

// draw a canvas color
// cerical/transparent/delete onSomeMouseEvent

console.log(canv.height, canv.width);
console.log(document.body.clientHeight, document.body.clientWidth);
console.log(window.innerHeight, window.innerWidth);
