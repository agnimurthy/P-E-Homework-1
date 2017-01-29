function setup() { 
  createCanvas(600, 600);
	background(255)
  
  
} 

function draw() { 
  

  var lefteyeX = mouseX - 25
  var lefteyeY = mouseY - 10
  
  var righteyeX = mouseX + 25
  var righteyeY = mouseY - 10
  
  var smileY = mouseY + 20
    
  fill(255);
  stroke(0);
  ellipse(mouseX,mouseY,120,120)
  
  ellipse(lefteyeX,lefteyeY,30,30)
  ellipse(righteyeX,righteyeY,30,30)
  
  noFill()
  stroke(0);
  
	arc(mouseX, smileY, 60, 40, 0, PI, OPEN);
}
