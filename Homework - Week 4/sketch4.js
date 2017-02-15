function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  noStroke();
	colorMode(HSB);
  
  var h = 0;
  
  for(var posy = 0; posy <= 360; posy += 20){
  	for(var posx = 0; posx <= 360; posx += 20){
  		fill(h,100,100)
  		ellipse(20 + posx,20 + posy,15,15);
  		h = h +0.65;
	  }
  }
}
