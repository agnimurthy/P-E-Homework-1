function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  
  for(var a = 20; a <= 380; a += 20){
  for(var b = 20; b <= 380; b += 20){
  ellipse(b,a,15,15);
  }
  }
}
