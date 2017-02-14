function setup() { 
  createCanvas(400, 400);
  noLoop();
} 

function draw() { 
  background(100);
  stroke(255);
  noFill();
  for(var a = 10; a <= 380; a += 10){
  for(var b = 10; b <= 380; b += 10){
  rect(a,b,10,10);
  }
  }
}
