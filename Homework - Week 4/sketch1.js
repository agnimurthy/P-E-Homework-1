function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  
  for(var a = 20; a <= 380; a += 20){
  ellipse(a,a,20,20);
  }
}
