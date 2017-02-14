function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  stroke(255);

  for(var posX = 0; posX <= 400; posX += 8){
  
  line(posX,400,posX,random(mouseY,400));
  }
  
}
