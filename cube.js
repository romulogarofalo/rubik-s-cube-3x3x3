// Set up our canvas
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

const clt = [1,2,3]; const crmt = [1,2]; 
 


// Pick out the form elements for easy access later
var x1 = 100;
var x2 = 100;
var y = 100;
var color = "#ff8d4b";

console.log(typeof x1);
// Animation function
function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Wobble the cube using a sine wave
  var wobble = (Math.sin(Date.now() / 250) * window.innerHeight) / 50;

  // draw the cube
  drawCube(
    window.innerWidth / 2,
    window.innerHeight / 2 + y / 2,
    x1,
    x2,
    y,
    color
  );

  requestAnimationFrame(draw);
}
draw();

// Colour adjustment function
// Nicked from http://stackoverflow.com/questions/5560248
function shadeColor(color, percent) {
  color = color.substr(1);
  var num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

// Draw a cube to the specified specs
function drawCube(x, y, wx, wy, h, color) {
  //top left
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x - wx, y - wx * 0.5);
  ctx.lineTo(x - wx, y - h - wx * 0.5);
  ctx.lineTo(x, y - h * 1);
  ctx.closePath();
  ctx.fillStyle = shadeColor(color, -10);
  ctx.strokeStyle = shadeColor(color, 50);
  ctx.stroke();
  ctx.fill();
  //top left
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + wy, y - wy * 0.5);
  ctx.lineTo(x + wy, y - h - wy * 0.5);
  ctx.lineTo(x, y - h * 1);
  ctx.closePath();
  ctx.fillStyle = shadeColor(color, 10);
  ctx.strokeStyle = shadeColor(color, 50);
  ctx.stroke();
  ctx.fill();
  //top left
  ctx.beginPath();
  ctx.moveTo(x, y - h);
  ctx.lineTo(x - wx, y - h - wx * 0.5);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.lineTo(x + wy, y - h - wy * 0.5);
  ctx.closePath();
  ctx.fillStyle = shadeColor(color, 20);
  ctx.strokeStyle = shadeColor(color, 60);
  ctx.stroke();
  ctx.fill();

  // top mid
  console.log(color);
  ctx.beginPath();
  ctx.moveTo(x + wy, y - h - wy * 0.5);
  ctx.lineTo(x - wx + 300, y - 50 - h - wx * 0.5);
  ctx.lineTo(x + wy, y - h - wy * 0.5 - 100);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.closePath();
  ctx.fillStyle = shadeColor("#000000", 20);
  ctx.strokeStyle = shadeColor("#000000", 60);
  ctx.stroke();
  ctx.fill();
  // top mid
  ctx.beginPath();
  ctx.moveTo(x + wy, 100 + (y - h - wy * 0.5));
  ctx.lineTo(x - wx + 200, y - h - wx * 0.5);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + wy + 200, y - h - (wx * 0.5 + wy * 0.5) + 100);
  ctx.closePath();
  ctx.fillStyle = shadeColor("#000000", 20);
  ctx.strokeStyle = shadeColor("#000000", 60);
  ctx.stroke();
  ctx.fill();

  // top rigth
  ctx.beginPath();
  ctx.moveTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + 400, y - 50 - h - wx * 0.5 - 50);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 150);
  ctx.lineTo(x - wx + wy + 100, y - h - (wx * 0.5 + wy * 0.5) -50);
  ctx.closePath();
  ctx.fillStyle = shadeColor("#ff8888", 20);
  ctx.strokeStyle = shadeColor("#ff8888", 60);
  ctx.stroke();
  ctx.fill();
  // top rigth
  ctx.beginPath();
  ctx.moveTo(x + wy + 200, y - h - wy * 0.5);
  ctx.lineTo(x - wx + 400, y - h - wx * 0.5 - 100);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + wy + 200, y - h - (wx * 0.5 + wy * 0.5) + 100);
  ctx.closePath();
  ctx.fillStyle = shadeColor("#ff8888", 20);
  ctx.strokeStyle = shadeColor("#ff8888", 60);
  ctx.stroke();
  ctx.fill();

  //middle left
  ctx.beginPath();
  ctx.moveTo(x, y+100);
  ctx.lineTo(x - wx, y - wx * 0.5 + 100);
  ctx.lineTo(x - wx, y - h - wx * 0.5 + 100);
  ctx.lineTo(x, y - h * 1 + 100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#eeeeeee', -10);
  ctx.strokeStyle = shadeColor('#eeeeeee', -50);
  ctx.stroke();
  ctx.fill();
  //middle left
  ctx.beginPath();
  ctx.moveTo(x, y+ 100);
  ctx.lineTo(x + wy, y - wy * 0.5 + 100);
  ctx.lineTo(x + wy, y - h - wy * 0.5 + 100);
  ctx.lineTo(x, y - h * 1 + 100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#eeeeeee', -10);
  ctx.strokeStyle = shadeColor('#eeeeeee', -50);
  ctx.stroke();
  ctx.fill();

  //middle middle
  ctx.beginPath();
  ctx.moveTo(x + 200, y);
  ctx.lineTo(x + wy + 100, y - wy * 0.5 -50);
  ctx.lineTo(x + 100, y - h * 1 + 50);
  ctx.lineTo(x + wy , y - h - wy * 0.5 + 200);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#eeeeeee', -10);
  ctx.strokeStyle = shadeColor('#eeeeeee', -50);
  ctx.stroke();
  ctx.fill();

  //middle rigth
  ctx.beginPath();
  ctx.moveTo(x + 300, y -50);
  ctx.lineTo(x + wy + 200, y - wy * 0.5 -100);
  ctx.lineTo(x + 200, y - h * 1 );
  ctx.lineTo(x + wy +100, y - h - wy * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#999999', -10);
  ctx.strokeStyle = shadeColor('#999999', -50);
  ctx.stroke();
  ctx.fill();

  //bottom left
  ctx.beginPath();
  ctx.moveTo(x, y+200);
  ctx.lineTo(x - wx, y - wx * 0.5 + 200);
  ctx.lineTo(x - wx, y - h - wx * 0.5 + 200);
  ctx.lineTo(x, y - h * 1 + 200);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#ff4444', -10);
  ctx.strokeStyle = shadeColor('#ff4444', -50);
  ctx.stroke();
  ctx.fill();
  //bottom left
  ctx.beginPath();
  ctx.moveTo(x, y+ 200);
  ctx.lineTo(x + wy, y - wy * 0.5 + 200);
  ctx.lineTo(x + wy, y - h - wy * 0.5 + 200);
  ctx.lineTo(x, y - h * 1 + 200);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#ff4444', -10);
  ctx.strokeStyle = shadeColor('#ff4444', -50);
  ctx.stroke();
  ctx.fill();

  //bottom middle
  ctx.beginPath();
  ctx.moveTo(x + 200, y);
  ctx.lineTo(x + wy + 100, y - wy * 0.5 +150);
  ctx.lineTo(x + 100, y - h * 1 + 250);
  ctx.lineTo(x + wy , y - h - wy * 0.5 + 200);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#eeeeeee', -10);
  ctx.strokeStyle = shadeColor('#eeeeeee', -50);
  ctx.stroke();
  ctx.fill();
  // bottom rigth
  ctx.beginPath();
  ctx.moveTo(x + 300, y - 50);
  ctx.lineTo(x + wy + 200, y - wy * 0.5 +100);
  ctx.lineTo(x + 200, y - h * 1 + 200);
  ctx.lineTo(x + wy + 100 , y - h - wy * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#dddddd', -10);
  ctx.strokeStyle = shadeColor('#dddddd', -50);
  ctx.stroke();
  ctx.fill();

  //top left middle
  ctx.beginPath();
  ctx.moveTo(x- 200 , y -100);
  ctx.lineTo(x - wx, y - wx * 0.5);
  ctx.lineTo(x -100, y - h * 1 -50);
  ctx.lineTo(x - wx - 100, y - h - wx * 0.5 -50);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#dddddd', -10);
  ctx.strokeStyle = shadeColor('#dddddd', -50);
  ctx.stroke();
  ctx.fill();
  //top left middle
  ctx.beginPath();
  ctx.moveTo(x -200, y - h -100);
  ctx.lineTo(x - wx, y - h - wx * 0.5);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.lineTo(x + wy -200, y - h - wy * 0.5 -100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#dddddd', -20);
  ctx.strokeStyle = shadeColor('#dddddd', -60);
  ctx.stroke();
  ctx.fill();

  // top middle middle
  ctx.beginPath();
  ctx.moveTo(x , y - h -100);
  ctx.lineTo(x - wx, y - h - wx * 0.5 -100);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.lineTo(x + wy , y - h - wy * 0.5 -100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#222222', -20);
  ctx.strokeStyle = shadeColor('#222222', -60);
  ctx.stroke();
  ctx.fill();

  // top middle rigth
  ctx.beginPath();
  ctx.moveTo(x +100, y - h -250);
  ctx.lineTo(x - wx +100, y - h - wx * 0.5 -150);
  ctx.lineTo(x + wy , y - h - wy * 0.5 -100);
  ctx.lineTo(x - wx + wy +200, y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#fffeee', -20);
  ctx.strokeStyle = shadeColor('#fffeee', -60);
  ctx.stroke();
  ctx.fill();

  //top left left (back)
  ctx.beginPath();
  ctx.moveTo(x- 300 , y -250);
  ctx.lineTo(x - wx - 100, y - h - wx * 0.5 -50);
  ctx.lineTo(x - wx -100, y - wx * 0.5 -50);
  ctx.lineTo(x -300, y - h * 1 -50);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#dddddd', -10);
  ctx.strokeStyle = shadeColor('#dddddd', -50);
  ctx.stroke();
  ctx.fill();
  //top left middle
  ctx.beginPath();
  ctx.moveTo(x -300, y - h -150);
  ctx.lineTo(x - wx -100, y - h - wx * 0.5 -50);
  ctx.lineTo(x - wx + wy -100, y - h - (wx * 0.5 + wy * 0.5) -50);
  ctx.lineTo(x + wy -300, y - h - wy * 0.5 -150);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#dddf99', -20);
  ctx.strokeStyle = shadeColor('#dddf99', -60);
  ctx.stroke();
  ctx.fill();

  //top middle middle (fix on back)
  ctx.beginPath();
  ctx.moveTo(x -100, y - h-250);
  ctx.lineTo(x + wy -300, y - h - wy * 0.5 -150);
  ctx.lineTo(x - wx , y - h - wx * 0.5 -100);
  ctx.lineTo(x - wx + wy , y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#333f99', -20);
  ctx.strokeStyle = shadeColor('#333f99', -60);
  ctx.stroke();
  ctx.fill();

  //top middle middle (fix on back)
  ctx.beginPath();
  ctx.moveTo(x + 100, y - h-250);
  ctx.lineTo(x + wy -100, y - h - wy * 0.5 -250);
  ctx.lineTo(x - wx , y - h - wx * 0.5 -200);
  ctx.lineTo(x - wx + wy , y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#2ff99', -20);
  ctx.strokeStyle = shadeColor('#2f3f99', -60);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 200, y );
  ctx.lineTo(x - wx , y - h - wx * 0.5 +200);
  ctx.lineTo(x - wx, y - wx * 0.5);
  ctx.lineTo(x -200, y - h * 1 );
  ctx.closePath();
  ctx.fillStyle = shadeColor('#2ff99', -10);
  ctx.strokeStyle = shadeColor('#2ff99', -50);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 300, y -50);
  ctx.lineTo(x - wx -200, y - wx * 0.5 -100);
  ctx.lineTo(x -200, y - h * 1 );
  ctx.lineTo(x - wx -100, y - h - wx * 0.5 +150);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#4dddd9', -10);
  ctx.strokeStyle = shadeColor('#4dddd9', -50);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 200, y +100);
  ctx.lineTo(x - wx , y - h - wx * 0.5 +300);
  ctx.lineTo(x - wx, y - wx * 0.5 + 100);
  ctx.lineTo(x -200, y - h * 1 +100);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#f99999', -10);
  ctx.strokeStyle = shadeColor('#f99999', -50);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x -300, y +50);
  ctx.lineTo(x - wx - 200, y - h - wx * 0.5 +100);
  ctx.lineTo(x -200, y - h * 1 +100);
  ctx.lineTo(x - wx -100, y - wx * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = shadeColor('#f99999', -10);
  ctx.strokeStyle = shadeColor('#f99999', -50);
  ctx.stroke();
  ctx.fill();


  const B = () => {

  }


}
