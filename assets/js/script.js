// JS by Dan Høegh
// UCN MMD 2020

// Setting options in a json object
let options = {
    "controls": true, 
    "autoplay": true, 
    "preload": "auto", 
    "muted": true
};

// Initiate the video using video.js
videojs('video1', options);

// First, we need to find the video element in the HTML DOM
// using video.js the video tag has been transformed, so we need to take an extra element in to find it


const elmVideo = document.querySelector('#video1 > video');

const elmStatus = document.querySelector('#status');
elmVideo.addEventListener('play', (event) => {
    elmStatus.innerHTML = 'Play';
    console.log(event); // see what's inside the event object
});

// // This does the same thing as above, but isn't using the ES6 arrow-function, use whatever you're comfortable with
// elmVideo.addEventListener('play', function(event) {
//     console.log('Play!');
// });
    
elmVideo.addEventListener('pause', (event) => {
    elmStatus.innerHTML = 'Pause';
});

elmVideo.addEventListener('seeking', (event) => {
    elmStatus.innerHTML = 'Seeking';
});

// Check out https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#Events 
// to find a list of events that are triggered when using <video>

// Try it yourself - use 15 minutes to test a couple of events
// Example what's the difference between "seeked" and "seeking"


// Set current time: .currentTime = 5;
// read current time: .currentTime
// when the time changed: .ontimeupdate = () => {}


// view current time
const elmCounter = document.querySelector('#counter');
elmVideo.ontimeupdate = () => {
    let time = elmVideo.currentTime;
    // elmCounter.innerHTML = time;
    // elmCounter.innerHTML = Math.floor(time);
    elmCounter.innerHTML = displayTime(time);
}

const displayTime = (timeInSeconds) => {
    // set the length of a minute in seconds
    const minuteLength = 60;
    // round seconds to integer
    time = Math.floor(timeInSeconds);
    // initialize variables for the display numbers
    let seconds = 0;
    let minutes = 0;
    // seconds is the time in seconds 
    // modulus the amount of seconds in a minute
    seconds = time % minuteLength;
    // if we're above the length of the first minute we need 
    // to figure out how many minutes we have
    if (time >= minuteLength) {
        minutes = Math.floor(time/minuteLength);
    }
    // Add a zero before seconds if there's only one digit
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // write the result into a string    
    time = `${minutes}:${seconds}`;
    // return the string
    return time;
} 