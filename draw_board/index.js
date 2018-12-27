// make Canvas and context
// recorde x and y positions 
let prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

let canv = document.createElement("canvas");
let ctx = canv.getContext("2d");
document.body.appendChild(canv);

// draw a white cerical onMouseDown
canv.addEventListener("mosuedown", function(e){
  console.log(e);
  //listen for mosuemove and draw   
});

function draw() {
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x,y);
  ctx.strokStyle = "black";
  ctx.lineWidth = 2;
  ctx.strok();
  ctx.closePath();
}
  
// draw a canvas color cerical/transparent/delete onSomeMouseEvent
