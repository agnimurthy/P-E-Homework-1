var x1 = 100;
var x2 = 400;
var y1 = 100;
var y2 = 200;
var xmove = 4;
var ymove = 8;
var xmove2 = 4;


function setup() {
  createCanvas(600, 600);
  background (25);

}

function draw() {
 
  background(255);
  noStroke();
	colorMode(HSB)
  fill (0,100,100);
  ellipse (x1, y1, 50, 50);
  fill (100,100,100);
  ellipse (x2, y1, 50, 50);
  x1 += xmove;
  	
  	 if (x1 > 575)  {
     	xmove = -xmove;
  	}
  
  if (x1 < 25)  {
     	xmove = -xmove;
  	}
  
  y1 += ymove;
  	
  	 if (y1 > 575)  {
     	ymove = -ymove;
  	}
  
  if (y1 < 25)  {
     	ymove = -ymove;
  	}
  
  x2 += xmove2;
  	
  	 if (x2 > 575)  {
     	xmove2 = -xmove2;
  	}
  
  if (x2 < 25)  {
     	xmove2 = -xmove2;
  	}
  
}
