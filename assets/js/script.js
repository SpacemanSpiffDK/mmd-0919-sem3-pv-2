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
    // console.log(event); // see what's inside the event object
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

// NEXT => BACK TO SLIDES!!!

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

// 
// 
// Setting the current time of a video
// 
// 

// NEXT => BACK TO SLIDES!!!
// PART 1: Jump to 20 sec button (Comedy gold, right there)

// Find the button in the HTML DOM, put it in a constant
const elmJumpTo20 = document.querySelector('#btnJumpTo20'); // find the jump to 20 seconds button
const funcJumpTo20 = () => { // function that sets video time to 20 seconds
    elmVideo.currentTime = 20; // set video time to 20 seconds
}
elmJumpTo20.addEventListener('click', funcJumpTo20); // bind the function to the button's click eventlistener

// NEXT => BACK TO SLIDES!!!
// PART 2: function that skips forward or backwards depending on the parameter
const elmsScanBtns = document.querySelectorAll('.btnScan'); // find all scan buttons 
elmsScanBtns.forEach((btn) => { // loop through the scan buttons
    const skipSeconds = parseInt(btn.dataset.skip); // get the amount of seconds we want the video to skip by (positive/negative)
    btn.addEventListener('click', () => { // add a click eventlistener to the current button
        let now = elmVideo.currentTime; // Get the current time from the video
        let newTime = now + skipSeconds; // calculate the time we want to jump to
        elmVideo.currentTime = newTime; // set the video to the new time
    });
});