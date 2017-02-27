var sizes = [20, 30, 30, 20, 100, 85, 60, 50];

function setup() {
  createCanvas(1200, 600);
  background(0);
  colorMode(HSB);
  noStroke();

  for (var i = 0; i < sizes.length; i += 1) {
    fill(random(255),100,100);
    ellipse(50+i*150, height/2, sizes[i], sizes[i]);
  }
}
