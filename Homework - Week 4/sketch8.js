function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  stroke(255);
  
  for(var a = 20; a <= 380; a += 10){
  line(a,20,20,a);
  }
  
  for(var d = 30; d <= 380; d += 10){
  line(380,d,d,380);
  }
}
