function setup() { 
  createCanvas(600, 600);
  
} 

function draw() { 
  
  background(255)
  
  var lefteyeX = mouseX - 25
  var lefteyeY = mouseY - 10
  
  var righteyeX = mouseX + 25
  var righteyeY = mouseY - 10
  
  var smileY = mouseY + 20
  
  smileline1X = mouseX - 30
  smileline1Y = mouseY + 20
  
  
  
  
  fill(255);
  stroke(0);
  ellipse(mouseX,mouseY,120,120)
  
  ellipse(lefteyeX,lefteyeY,30,30)
  ellipse(righteyeX,righteyeY,30,30)
  
  noFill()
  stroke(0);
  
	var SmileValue1 = 40 - (mouseX * 0.1)
  
  var SmileValue2 =  0.15 * (mouseX - 350)
  
  
  if(mouseX<250) {
    arc(mouseX, smileY, 60, SmileValue1, 0, PI, OPEN);
    }
  
  if(mouseX>250 && mouseX<350) {
    arc(mouseX, smileY, 60, SmileValue1, 0, PI, OPEN);
    }
  
  if(mouseX>350) {
    arc(mouseX, smileY+5, 60, SmileValue2, PI, TWO_PI, OPEN);
    }
}
