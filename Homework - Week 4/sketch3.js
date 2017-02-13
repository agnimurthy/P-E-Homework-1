function setup() { 
  createCanvas(400, 400);
  noLoop();
} 

function draw() { 
  background(255);
  noStroke();
	colorMode(HSB);
  
  for(var a = 20; a <= 380; a += 20){
  for(var b = 20; b <= 380; b += 20){
  fill(random(360),100,100);
  ellipse(a,b,15,15);
  }
  }
}
