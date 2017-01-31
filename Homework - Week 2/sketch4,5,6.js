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
  
  x =+= move;
  	
  	 if (x > 575)  {
     	move = -move;
  	}
  
  if (x < 25)  {
     	move = -move;
  	}
}

function mousePressed() {
      x = mouseX;
      y = mouseY;
  }
