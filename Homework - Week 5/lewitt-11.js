function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  
  strokeWeight(0.25);

  for(var a = 10; a <=200; a += 10){
  line(a,0,0,a);
  line(200,a,a,200);
  line(200,200-a,200+a,200);
  line(200+a,0,400,200-a);
  line(200,200+a,200-a,200);
  line(200-a,400,0,200+a);
  line(200,200+a,200+a,200);
  line(200+a,400,400,200+a);
  }
  
  for(var x = 0; x <= 400; x += 10){
  line(0,x,400,x)
  line(x,0,x,400)
  }
  
}
