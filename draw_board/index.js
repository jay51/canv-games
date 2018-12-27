// make Canvas and context

let canv = document.createElement("canvas");
canv.height = window.innerHeight;
canv.width = window.innerWidth;

let ctx = canv.getContext("2d");
document.body.appendChild(canv);

// recorde x and y positions
let prevX = 0,
	currX = 0,
	prevY = 0,
	currY = 0,
	dot_flag = false;

function draw(e) {
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.arc(e.x, e.y, 10, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.closePath();
}

// draw a white cerical onMouseDown
canv.addEventListener("mousedown", function(e) {
	//listen for mosuemove and draw
	canv.addEventListener("mousemove", draw);
});

canv.addEventListener("mouseup", function() {
	// remove the mousemove event
	canv.removeEventListener("mousemove", draw);
});

// function draw() {
// 	ctx.beginPath();
// 	ctx.moveTo(x, y);
// 	ctx.lineTo(x, y);
// 	ctx.strokStyle = "black";
// 	ctx.lineWidth = 2;
// 	ctx.strok();
// 	ctx.closePath();
// }

// draw a canvas color
// cerical/transparent/delete onSomeMouseEvent

console.log(canv.height, canv.width);
console.log(document.body.clientHeight, document.body.clientWidth);
console.log(window.innerHeight, window.innerWidth);
