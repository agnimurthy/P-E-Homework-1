var sizes = [40, 70, 90, 30, 60];

function setup() {
  createCanvas(1025, 500);
background(255);
  noStroke();
  append(sizes, 21);
  append(sizes, 32);
  append(sizes, 69);
  append(sizes, 47);
  append(sizes, 93);
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
  
}
