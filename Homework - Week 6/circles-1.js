var sizes = [40, 70, 90, 30, 60, 21, 32, 69, 47, 93];

function setup() {
  createCanvas(1000, 1000);
background(255);
  noStroke();
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
}

