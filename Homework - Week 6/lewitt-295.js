function setup() { 
  createCanvas(500, 500);
} 

function draw() { 
  background(0);
	rectMode(CORNERS);
	ellipseMode(CENTER);
	noFill();
	stroke(255);
	rect(40,40,460,460);
	line(40,460,250,40);
	line(250,40,460,460);
	line(145,40,145,460);
	line(355,40,355,460);
	line(40,460,145,40);
	line(355,40,460,460);
	line(355,460,460,40);
	ellipse(250,250,420,420);
}
