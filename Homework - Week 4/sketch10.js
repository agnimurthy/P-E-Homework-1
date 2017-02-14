function setup() { 
  createCanvas(400, 400);
  noLoop();
} 

function draw() { 
  background(0);
  stroke(255);

  for(var posX = 0; posX <= 399; posX += 8){
  
  line(posX,400,posX,random(0,400));
  }
  
}
