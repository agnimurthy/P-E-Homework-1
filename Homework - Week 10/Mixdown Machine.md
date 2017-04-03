# The Mixdown Machine

I propose to make a hardware arduino controller that allows a person to manipulate parameters  the separated audio tracks behind the song "Feel Good Inc." by the Gorillaz.

## Summary

I enjoy manipulating and working with audio as a hobby: making mixes of songs for fun on Ableton Live. 
One day, I stumbled upon the "stems" (split audio tracks) of one of my favorite songs, Feel Good Inc. by the Gorillaz,
so I decided that I want to create a hardware Arduino piece similar to a DJ controller / mixer that would allow a user 
to manipulate the audio of the song in ways like adjusting the volume or applying a high pass or low pass filter, 
and allow them to essentially play with the music they are experiencing.

The hardware would control a Processing / P5 sketch that would have the audio stems playing, allowing the two to interface and work together.
I was also thinking of creating simple visual feedback in the Processing / P5 sketch that would respond to a user's actions,
like a changing color.


## Component Parts

Hardware / Input:

- Arduino Uno
- Breadboard (maybe larger breadboard to fit more parts?)
- Potentiometers - to control parameters like volume or high pass / low pass effect
- LEDs - Visual feedback on the board
- Buttons to trigger audio channels / playback

Software

- Processing Sketch that triggers / loops audio tracks
- On / Off buttons on sketch to stop and start music at will (in case of hardware failiure)

## Block Diagram

ijiji

## Challenges

Since I haven't ever used Processing with Arduino or made sketches with audio, learning both of those methods and combining them would be the biggest challenge.

## Timeline

What parts of the project do you anticipate you will complete in each of the next 5 weeks? Your goal is to solve the scary problems as quickly as possible! 

- Week 1: Write proposal
- Week 2: Research Arduino / Processing coding, test audio on Processing sketch. See if extra components need to be bought. 
- Week 3: Start putting together Arduino hardware. Hardware and sketch testing. 
- Week 4: Iron out bugs, ensure everything is in working condition. Create fallbacks.
- Week 5: Present!

## References and link

- https://learn.sparkfun.com/tutorials/connecting-arduino-to-processing
- https://processing.org:8443/reference/libraries/sound/SoundFile.html
- https://p5js.org/reference/#/p5.SoundFile
- https://p5js.org/reference/#/p5.Filter
- https://processing.org:8443/reference/libraries/sound/HighPass.html
- https://processing.org:8443/reference/libraries/sound/LowPass.html
