function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255)

  for(var g = 0; g <=200; g += 10){
  line(g,200+g,400-g,200+g);
  line(g,200-g,400-g,200-g);
  }
  
}
