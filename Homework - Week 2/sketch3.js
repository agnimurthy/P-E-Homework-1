var x = 100;
var y = 100;
var move = 7.5;


function setup() {
  createCanvas(600, 600);
  background (25);

}

function draw() {
  
  background(255);

  fill (255);
  ellipse (x, y, 50, 50);
  
  x += move;
	
	if (x >= 625) {
  	x = 100
	}
}
