function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255);
  
  strokeWeight(0.25);
  
  for(var v = 10; v <= 200; v += 10){
  line(0,200+v,v,200)
  line(v,400,200+v,200)
  line(400,200+v,200+v,400)
  line(200,400-v,200+v,400)
  line(200+v,200,400,400-v)
  }
  
  for(var x = 200; x <= 400; x += 10){
  line(0,x,400,x)
  }
  
  for(var y = 0; y <= 400; y += 10){
  line(y,0,y,400)
  }
  
  for(var z = 0; z <= 200; z += 10){
  line(200,z,400,z)
  }
  
}
