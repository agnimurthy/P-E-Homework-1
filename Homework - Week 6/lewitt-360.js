function setup() { 
  createCanvas(500, 500);
} 

function draw() { 
  background(255);
	noStroke();
	rectMode(CORNERS)
	
	fill(200);
	rect(40,40,250,250)
	
	fill(150);
	rect(250,250,460,40)
	
	fill(100);
	rect(250,250,40,460)
	
	fill(50);
	rect(250,250,460,460)
	
}
