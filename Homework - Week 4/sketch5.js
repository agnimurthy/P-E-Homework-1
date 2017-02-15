function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  noStroke();
	colorMode(HSB);
  
  var h = 0;
  fill(255);
  for(var posy = 20; posy <= 200; posy += 20){
  	for(var posx = posy; posx <= 400-posy; posx += 20){
  		ellipse(posx,posy,15,15);
	  }
  }
}
