function setup() { 
  createCanvas(440, 440);
} 

function draw() { 
  background('#c91a29');
	noStroke();
	rectMode(CORNERS);
	fill(255);
	
	triangle(20,100,100,20,100,100);
	triangle(100,100,100,20,180,20);
	
	fill('#a8ef2f');
	triangle(100,100,180,20,180,100);
	triangle(100,180,100,100,180,100);
	
	fill('#eae800');
	triangle(100,180,180,100,180,180);
	triangle(180,180,180,100,260,100);
	
	fill('#904157');
	triangle(180,180,260,100,260,180);
	triangle(180,180,180,260,260,180);
	
	fill('#388ca8');
	triangle(180,260,260,180,260,260);
	triangle(260,260,260,180,340,180);
	
	fill('#49752a');
	triangle(260,260,340,260,340,180);
	triangle(260,260,260,340,340,260);
	
	fill('#674561');
	triangle(260,340,340,260,340,340);
	triangle(340,340,340,260,420,260);
	
	fill('#521618');
	triangle(340,340,420,340,420,260);
	triangle(340,340,340,420,420,340);
	
	fill('#cd4e46');
	rect(20,420,340,340);
	rect(20,340,260,260);
	rect(20,260,180,180);
	rect(20,180,100,100);
	
}
