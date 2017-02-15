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
  		h = h +0.65;
	  }
  }
  
  for (var y = 380; y >= 220; y = y - 20) {
    for (var x = 400-y; x <= y; x = x + 20) {
      ellipse(x,y,15,15);
    }
  }
}

