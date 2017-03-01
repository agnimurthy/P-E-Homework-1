var sizes = [20, 30, 30, 20, 100, 85, 60, 50];
var allCircles = []

function setup() {
  createCanvas(1500, 500);
background(255);
  noStroke();
  colorMode(HSB);
  for (var i = 0; i < 9; i += 1) {
		var circle = {
			x: 50+i*200,
			y: height/2,
			speed: 1,
			r: sizes[i],
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
	ellipse(circle.x, circle.y, circle.r, circle.r);
}

function move(circle) {
	circle.y += random(-circle.speed,circle.speed);
}
