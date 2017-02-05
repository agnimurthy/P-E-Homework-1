function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255)

  noFill();
  for(var x = 10; x <= 400; x += 10){
    ellipse(200,200,x,x)
  }
}
