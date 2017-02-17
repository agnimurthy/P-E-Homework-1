function setup() { 
  createCanvas(400, 400);
  background(255);
  noStroke();
  
  fill(142,104,117);
  rect(0,0,200,200)
  
  fill(165,199,102);
  rect(200,0,200,200)
  
  fill(193,185,164);
  rect(0,200,200,200)
  
  fill(233,109,45);
  rect(200,200,200,200)
  
} 

function draw() { 
  fill(0);
  noStroke();
  rect(0,0,20,400)
  rect(0,0,400,20)
  rect(380,0,20,400)
  rect(0,380,400,20)
  
  stroke(255)
  strokeWeight(2);
  line(20,20,20,380);
  line(20,20,380,20);
  line(380,20,380,380);
  line(380,380,20,380);
  
}
