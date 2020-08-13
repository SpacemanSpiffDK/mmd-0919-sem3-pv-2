// JS by Dan Høegh
// UCN MMD 2020

// Setting options in a json object
let options = {
    "controls": true, 
    "autoplay": false, 
    "preload": "auto", 
    "muted": true
};

// Initiate the video using video.js
videojs('video1', options);

// First, we need to find the video element in the HTML DOM
// using video.js the video tag has been transformed, so we need to take an extra element in to find it


const elmVideo = document.querySelector('#video1 > video');

elmVideo.addEventListener('play', (event) => {
    console.log('Play!');
});

// This does the same thing as above, but isn't using the ES6 arrow-function, use whatever you're comfortable with
// elmVideo.addEventListener('play', function(event) {
//     console.log('Play!');
// });

elmVideo.addEventListener('pause', (event) => {
    console.log('Pause!');
});

// Check out https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement#Events 
// to find a list of events that are triggered when using <video>


