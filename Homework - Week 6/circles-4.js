var allCircles = []

function setup() {
  createCanvas(1500, 500);
background(255);
  noStroke();
  colorMode(HSB);
  for (var i = 0; i < 10; i += 1) {
		var circle = {
			x: 50+i*150,
			y: height/2,
			speed: 1,
			r: random(20, 60),
			h: random(0, 360)
		};
    append(allCircles,circle);
  }
}

function draw() {
	background(0);
	for (var i = 0; i < allCircles.length; i += 1) {
		paint(allCircles[i]);
		move(allCircles[i]);
	}
}

function paint(circle) {
	colorMode(HSB);
	fill(circle.h, 100, 100);
	noStroke();
	ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
}

function move(circle) {
	circle.y += random(-circle.speed,circle.speed);
}
