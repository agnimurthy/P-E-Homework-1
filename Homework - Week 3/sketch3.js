function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(255)

  for(var a = 0; a <= 400; a += 10){
    line (a,0,a,(a * 2))
  }
}
