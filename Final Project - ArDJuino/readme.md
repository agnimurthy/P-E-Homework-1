For my final project, I created an interactive experience using Arduino and Processing, that allows a user to "play with music" by manipulating the volume of individual audio parts of the song "All Star" by Smash Mouth. 

I coded this experience mainly on Processing 3. First, I used the Minim library for audio playback. In order to control the Processing sketch with my Arduino board / hardware, I had to upload the Firmata firmware to my board, then I could use the Serial and Arduino (Firmata) libraries to send data from the board to Arduino.

I rigged my Arduino board with 5 potentiometers to control the volumes of the 5 separate audio tracks / stems from "All Star", and then created a simple reactive sketch with 5 intersecting circles that would become big or small depending on the volume that has been set on the current track.

Along the way, I changed the song I was doing from "Feel Good Inc" by the Gorillaz to "All Star" by Smash Mouth because the song stems of the latter were of better quality. For me, the most difficult part of this project was getting Arduino to work properly with Processing, something that took me a weekend of searching and testing to figure out. I experimenting with allowing users to apply High Pass or Low Pass filters to the song instead of just changing the volume, but the Minim library performed very poorly when it came to real time filter changes, so I decided to stick with simply controlling volumes, and there were no alternative Processing libaries for applying audio filters that allowed for smooth, real time changes.

If I had enough time, and there was anything I would do differently with this project , it would be to explore making the Processing sketch's feedback to be more visually complex, and I would also try and create a box or casing for the potentiometers in order to make the overall object more ergonomically and aesthetically pleasing

5 Most Difficult problems:

* Getting Arduino to work with Processing - a lot of tutorials online were usually for older versions of Processing and the Arduino language, and only after experimentation and playing with examples did I figure out the right solution.

* Attempting to get real time filtering (High Pass/Low Pass) on existing audio tracks - offering real time filter control with Arduino created major lag and crashes, so I didn't end up implementing this and stuck to controlling the volumes of audio

* The quality of the audio stems for "Feel Good Inc" - at a full volume you could still hear the rest of the song in the background on each individual audio track - these were clearly DIY stems. Ended up choosing a different song, "All Star" by Smash Mouth where I had access to audio of a higher quality.

* Coming up with and coding a fun visualization - Although the idea for my visualization was simple, it took me a lot of experimentation to create a set of visually aligned and accurate circles that would be reponsive to the screen size.
