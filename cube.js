// Set up our canvas
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");

const clt = [1,2,3]; const crmt = [1,2]; 
 
const white = [['#ffffff','#ffffff','#ffffff'],
              ['#ffffff','#ffffff','#ffffff'],
              ['#ffffff','#ffffff','#ffffff']]

const orange = [['#ffa500','#ffa500','#ffa500'],
                ['#ffa500','#ffa500','#ffa500'],
                ['#ffa500','#ffa500','#ffa500']]

const yellow = [['#ffff00','#ffff00','#ffff00'],
                ['#ffff00','#ffff00','#ffff00'],
                ['#ffff00','#ffff00','#ffff00']]

const red = [['#ff0000','#ff0000','#ff0000'],
                ['#ff0000','#ff0000','#ff0000'],
                ['#ff0000','#ff0000','#ff0000']]

const blue = [['#0e3e81','#0e3e81','#0e3e81'],
                ['#0e3e81','#0e3e81','#0e3e81'],
                ['#0e3e81','#0e3e81','#0e3e81']]

const green = [['#008000','#008000','#008000'],
                ['#008000','#008000','#008000'],
                ['#008000','#008000','#008000']]

const U = () => {
  const aux = orange[0].reverse();
  orange[0] = white[0];
  white[0] = red[0].reverse();
  red[0] = yellow[0]
  yellow[0] = aux;

  const auxBlue0 = [blue[2][0],blue[1][0], blue[0][0]];
  const auxBlue1 = [blue[2][1],blue[1][1], blue[0][1]];
  const auxBlue2 = [blue[2][2],blue[1][2], blue[0][2]];

  blue[0] = auxBlue0
  blue[1] = auxBlue1
  blue[2] = auxBlue2
}

const R = () => {
  const auxBlue0 = [blue[0][0], blue[0][1], white[0][2]];
  const auxBlue1 = [blue[1][0], blue[1][1], white[1][2]];
  const auxBlue2 = [blue[2][0], blue[2][1], white[2][2]];

  const auxRed0 = [red[0][2], red[1][2], red[2][2]];
  const auxRed1 = [red[0][1], red[1][1], red[2][1]];
  const auxRed2 = [red[0][0], red[1][0], red[2][0]];

  const auxWhite0 = [white[0][0], white[0][1], green[2][2]]; 
  const auxWhite1 = [white[1][0], white[1][1], green[1][2]];
  const auxWhite2 = [white[2][0], white[2][1], green[0][2]];

  const auxGreen0 = [green[0][0], green[0][1], yellow[0][2]];
  const auxGreen1 = [green[1][0], green[1][1], yellow[1][2]];
  const auxGreen2 = [green[2][0], green[2][1], yellow[2][2]];

  const auxYellow0 = [yellow[0][0], yellow[0][1], blue[2][2]];
  const auxYellow1 = [yellow[1][0], yellow[1][1], blue[1][2]];
  const auxYellow2 = [yellow[2][0], yellow[2][1], blue[0][2]];

  blue[0] = auxBlue0;
  blue[1] = auxBlue1;
  blue[2] = auxBlue2;

  red[0] = auxRed0;
  red[1] = auxRed1;
  red[2] = auxRed2;

  white[0] = auxWhite0;
  white[1] = auxWhite1;
  white[2] = auxWhite2;

  green[0] = auxGreen0;
  green[1] = auxGreen1;
  green[2] = auxGreen2;

  yellow[0] = auxYellow0;
  yellow[1] = auxYellow1;
  yellow[2] = auxYellow2;
}

// const D = () => {

// }

// Pick out the form elements for easy access later
var x1 = 100;
var x2 = 100;
var y = 100; 
var color = "#ff8d4b";

// console.log(typeof x1);
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
  ctx.fillStyle = orange[0][2],
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //top left
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + wy, y - wy * 0.5);
  ctx.lineTo(x + wy, y - h - wy * 0.5);
  ctx.lineTo(x, y - h * 1);
  ctx.closePath();
  ctx.fillStyle = white[0][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //top left
  ctx.beginPath();
  ctx.moveTo(x, y - h);
  ctx.lineTo(x - wx, y - h - wx * 0.5);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.lineTo(x + wy, y - h - wy * 0.5);
  ctx.closePath();
  ctx.fillStyle = blue[2][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  // top mid
  // console.log(color);
  ctx.beginPath();
  ctx.moveTo(x + wy, y - h - wy * 0.5);
  ctx.lineTo(x - wx + 300, y - 50 - h - wx * 0.5);
  ctx.lineTo(x + wy, y - h - wy * 0.5 - 100);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.closePath();
  ctx.fillStyle = blue[2][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  // top mid
  ctx.beginPath();
  ctx.moveTo(x + wy, 100 + (y - h - wy * 0.5));
  ctx.lineTo(x - wx + 200, y - h - wx * 0.5);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + wy + 200, y - h - (wx * 0.5 + wy * 0.5) + 100);
  ctx.closePath();
  ctx.fillStyle = white[0][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  // top rigth
  ctx.beginPath();
  ctx.moveTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + 400, y - 50 - h - wx * 0.5 - 50);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 150);
  ctx.lineTo(x - wx + wy + 100, y - h - (wx * 0.5 + wy * 0.5) -50);
  ctx.closePath();
  ctx.fillStyle = blue[2][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  // top rigth
  ctx.beginPath();
  ctx.moveTo(x + wy + 200, y - h - wy * 0.5);
  ctx.lineTo(x - wx + 400, y - h - wx * 0.5 - 100);
  ctx.lineTo(x + wy + 100, y - h - wy * 0.5 - 50);
  ctx.lineTo(x - wx + wy + 200, y - h - (wx * 0.5 + wy * 0.5) + 100);
  ctx.closePath();
  ctx.fillStyle = white[0][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //middle left
  ctx.beginPath();
  ctx.moveTo(x, y+100);
  ctx.lineTo(x - wx, y - wx * 0.5 + 100);
  ctx.lineTo(x - wx, y - h - wx * 0.5 + 100);
  ctx.lineTo(x, y - h * 1 + 100);
  ctx.closePath();
  ctx.fillStyle = orange[1][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //middle left
  ctx.beginPath();
  ctx.moveTo(x, y+ 100);
  ctx.lineTo(x + wy, y - wy * 0.5 + 100);
  ctx.lineTo(x + wy, y - h - wy * 0.5 + 100);
  ctx.lineTo(x, y - h * 1 + 100);
  ctx.closePath();
  ctx.fillStyle = white[1][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //middle middle
  ctx.beginPath();
  ctx.moveTo(x + 200, y);
  ctx.lineTo(x + wy + 100, y - wy * 0.5 -50);
  ctx.lineTo(x + 100, y - h * 1 + 50);
  ctx.lineTo(x + wy , y - h - wy * 0.5 + 200);
  ctx.closePath();
  ctx.fillStyle = white[1][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //middle rigth
  ctx.beginPath();
  ctx.moveTo(x + 300, y -50);
  ctx.lineTo(x + wy + 200, y - wy * 0.5 -100);
  ctx.lineTo(x + 200, y - h * 1 );
  ctx.lineTo(x + wy +100, y - h - wy * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = white[1][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //bottom left
  ctx.beginPath();
  ctx.moveTo(x, y+200);
  ctx.lineTo(x - wx, y - wx * 0.5 + 200);
  ctx.lineTo(x - wx, y - h - wx * 0.5 + 200);
  ctx.lineTo(x, y - h * 1 + 200);
  ctx.closePath();
  ctx.fillStyle = orange[2][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //bottom left
  ctx.beginPath();
  ctx.moveTo(x, y+ 200);
  ctx.lineTo(x + wy, y - wy * 0.5 + 200);
  ctx.lineTo(x + wy, y - h - wy * 0.5 + 200);
  ctx.lineTo(x, y - h * 1 + 200);
  ctx.closePath();
  ctx.fillStyle = white[2][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //bottom middle
  ctx.beginPath();
  ctx.moveTo(x + 200, y);
  ctx.lineTo(x + wy + 100, y - wy * 0.5 +150);
  ctx.lineTo(x + 100, y - h * 1 + 250);
  ctx.lineTo(x + wy , y - h - wy * 0.5 + 200);
  ctx.closePath();
  ctx.fillStyle = white[2][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  // bottom rigth
  ctx.beginPath();
  ctx.moveTo(x + 300, y - 50);
  ctx.lineTo(x + wy + 200, y - wy * 0.5 +100);
  ctx.lineTo(x + 200, y - h * 1 + 200);
  ctx.lineTo(x + wy + 100 , y - h - wy * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = white[2][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //top left middle
  ctx.beginPath();
  ctx.moveTo(x- 200 , y -100);
  ctx.lineTo(x - wx, y - wx * 0.5);
  ctx.lineTo(x -100, y - h * 1 -50);
  ctx.lineTo(x - wx - 100, y - h - wx * 0.5 -50);
  ctx.closePath();
  ctx.fillStyle = orange[0][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //top left middle
  ctx.beginPath();
  ctx.moveTo(x -200, y - h -100);
  ctx.lineTo(x - wx, y - h - wx * 0.5);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
  ctx.lineTo(x + wy -200, y - h - wy * 0.5 -100);
  ctx.closePath();
  ctx.fillStyle = blue[1][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  // top middle middle
  ctx.beginPath();
  ctx.moveTo(x , y - h -100);
  ctx.lineTo(x - wx, y - h - wx * 0.5 -100);
  ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.lineTo(x + wy , y - h - wy * 0.5 -100);
  ctx.closePath();
  ctx.fillStyle = blue[1][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  // top middle rigth
  ctx.beginPath();
  ctx.moveTo(x +100, y - h -250);
  ctx.lineTo(x - wx +100, y - h - wx * 0.5 -150);
  ctx.lineTo(x + wy , y - h - wy * 0.5 -100);
  ctx.lineTo(x - wx + wy +200, y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = blue[1][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //top left left (back)
  ctx.beginPath();
  ctx.moveTo(x- 300 , y -250);
  ctx.lineTo(x - wx - 100, y - h - wx * 0.5 -50);
  ctx.lineTo(x - wx -100, y - wx * 0.5 -50);
  ctx.lineTo(x -300, y - h * 1 -50);
  ctx.closePath();
  ctx.fillStyle = orange[0][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();
  //top left middle
  ctx.beginPath();
  ctx.moveTo(x -300, y - h -150);
  ctx.lineTo(x - wx -100, y - h - wx * 0.5 -50);
  ctx.lineTo(x - wx + wy -100, y - h - (wx * 0.5 + wy * 0.5) -50);
  ctx.lineTo(x + wy -300, y - h - wy * 0.5 -150);
  ctx.closePath();
  ctx.fillStyle = blue[0][0];
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //top middle middle (fix on back)
  ctx.beginPath();
  ctx.moveTo(x -100, y - h-250);
  ctx.lineTo(x + wy -300, y - h - wy * 0.5 -150);
  ctx.lineTo(x - wx , y - h - wx * 0.5 -100);
  ctx.lineTo(x - wx + wy , y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = blue[0][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  //top middle middle (fix on back)
  ctx.beginPath();
  ctx.moveTo(x + 100, y - h-250);
  ctx.lineTo(x + wy -100, y - h - wy * 0.5 -250);
  ctx.lineTo(x - wx , y - h - wx * 0.5 -200);
  ctx.lineTo(x - wx + wy , y - h - (wx * 0.5 + wy * 0.5) -100);
  ctx.closePath();
  ctx.fillStyle = blue[0][2]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 200, y );
  ctx.lineTo(x - wx , y - h - wx * 0.5 +200);
  ctx.lineTo(x - wx, y - wx * 0.5);
  ctx.lineTo(x -200, y - h * 1 );
  ctx.closePath();
  ctx.fillStyle = orange[1][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 300, y -50);
  ctx.lineTo(x - wx -200, y - wx * 0.5 -100);
  ctx.lineTo(x -200, y - h * 1 );
  ctx.lineTo(x - wx -100, y - h - wx * 0.5 +150);
  ctx.closePath();
  ctx.fillStyle = orange[1][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x- 200, y +100);
  ctx.lineTo(x - wx , y - h - wx * 0.5 +300);
  ctx.lineTo(x - wx, y - wx * 0.5 + 100);
  ctx.lineTo(x -200, y - h * 1 +100);
  ctx.closePath();
  ctx.fillStyle = orange[2][1]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x -300, y +50);
  ctx.lineTo(x - wx - 200, y - h - wx * 0.5 +100);
  ctx.lineTo(x -200, y - h * 1 +100);
  ctx.lineTo(x - wx -100, y - wx * 0.5 + 150);
  ctx.closePath();
  ctx.fillStyle = orange[2][0]
  ctx.strokeStyle = "#000000"
  ctx.stroke();
  ctx.fill();

}

