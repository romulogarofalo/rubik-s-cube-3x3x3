// Set up our canvas
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

// Pick out the form elements for easy access later
var x1 = 100
var x2 = 100
var y = 100
var color = '#ff8d4b'


console.log(typeof(x1))
// Animation function
function draw(){
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Wobble the cube using a sine wave
  var wobble = Math.sin(Date.now()/250)*window.innerHeight/50;
  
  // draw the cube
  drawCube(
    window.innerWidth/2,
    window.innerHeight/2 + y/2,
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
    G = (num >> 8 & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Draw a cube to the specified specs
function drawCube(x, y, wx, wy, h, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, -10);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.fill();

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

    console.log(color);
    ctx.beginPath();
    ctx.moveTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x - wx + 300, (y-50) - h - wx * 0.5);
    ctx.lineTo(x + wy, (y - h - wy * 0.5) -100);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.closePath();
    ctx.fillStyle = shadeColor('#000000', 20);
    ctx.strokeStyle = shadeColor('#000000', 60);
    ctx.stroke();
    ctx.fill();

    // ctx.beginPath();
    // ctx.moveTo(x, y - h);
    // ctx.lineTo(x - wx, y - h - wx * 0.5);
    // ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    // ctx.lineTo(x + wy, y - h - wy * 0.5);
    // ctx.closePath();
    // ctx.fillStyle = shadeColor(color, 20);
    // ctx.strokeStyle = shadeColor(color, 60);
    // ctx.stroke();
    // ctx.fill();
  }