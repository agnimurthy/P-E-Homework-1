var sizes = [40, 70, 90, 30, 60];

function setup() {
  createCanvas(1025, 500);
background(255);
  noStroke();
  for (var j = 0; j <= 4; j += 1) {
    append(sizes,random(20,90));
  }
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
  }
  
}
