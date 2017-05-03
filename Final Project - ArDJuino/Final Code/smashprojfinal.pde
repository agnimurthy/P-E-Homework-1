import processing.serial.*;

import cc.arduino.*;

import ddf.minim.*;

Minim minim;
AudioPlayer percussion;
AudioPlayer bass;
AudioPlayer guitar;
AudioPlayer vocals;
AudioPlayer sfx;

float a = 40 * 1.97;
float b = 40 *0.64;
float c = 40 *1.68;
float d = 40 *1.22;
float e = 40 * 2.07;

float size = 4;

Arduino arduino;

void setup() {
  fullScreen();
  arduino = new Arduino(this, Arduino.list()[1], 57600);
  minim = new Minim(this);
  
  percussion = minim.loadFile("1- Percussion.mp3");
  bass = minim.loadFile("2- Bass.mp3");
  guitar = minim.loadFile("3- Guitar.mp3");
  vocals = minim.loadFile("4- Vocals.mp3");
  sfx = minim.loadFile("5- Additional Instruments.mp3");
}

void draw() {
  
  float fade = map(vocals.position(),194000,204000,100,0);
  
  background(0);
  stroke(255,255,255,fade);
  // Draw a circle whose size corresponds to the value of an analog input.
  colorMode(RGB);
  
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Press any key to begin.", width/2, height/6 * 5); 
  fill(255,255,255,fade);

  noFill();
  stroke(197,0,255,fade);
  ellipse((width/2)-(a), (height/2)-(b), arduino.analogRead(1) / size, arduino.analogRead(1) /size);
  float vol = map(arduino.analogRead(1),0,1024,-60,0);
  vocals.setGain(vol);
  
  stroke(255,1,0,fade);
  ellipse((width/2), (height/2)-(e), arduino.analogRead(2) / size, arduino.analogRead(2) / size);
  float vol1 = map(arduino.analogRead(2),0,1024,-60,0);
  guitar.setGain(vol1);
  
  stroke(208,255,0,fade);
  ellipse((width/2)+(a), (height/2)-(b), arduino.analogRead(3) / size, arduino.analogRead(3) / size);
  float vol2 = map(arduino.analogRead(3),0,1024,-60,0);
  bass.setGain(vol2);
  
  stroke(0,255,96,fade);
  ellipse((width/2)+(d), (height/2)+(c), arduino.analogRead(4) / size, arduino.analogRead(4) / size);
  float vol3 = map(arduino.analogRead(4),0,1024,-60,0);
  percussion.setGain(vol3);
  
  stroke(0,110,255,fade);
  ellipse((width/2)-(d), (height/2)+(c), arduino.analogRead(5) / size, arduino.analogRead(5) / size);
  float vol4 = map(arduino.analogRead(5),0,1024,-60,0);
  sfx.setGain(vol4);
}

void keyPressed()
{
  if ( vocals.isPlaying() )
  {
    percussion.pause();
    bass.pause();
    guitar.pause();
    vocals.pause();
    sfx.pause();
    percussion.rewind();
    bass.rewind();
    guitar.rewind();
    vocals.rewind();
    sfx.rewind();
  }
  else
  {
    percussion.play();
    bass.play();
    guitar.play();
    vocals.play();
    sfx.play();
  }
}
