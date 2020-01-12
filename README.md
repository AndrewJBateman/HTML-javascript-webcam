# HTML Javascript Webcam

Uses HTML and javascript to view video from a local webcam.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Works in Google Chrome & internet explorer.

## Screenshots

![Example screenshot](./img/webcam.png).

## Technologies

* Ran in Google Chrome browser with: [Javascript engine V8 7.9.317.32 for Windows (x64)](https://v8.dev/).

## Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## Code Examples

* code for accessing the getUserMedia API:

```javascript
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({audio: false, video: true}) //constraints in ({})
  .then(function(stream) {
    video.srcObject = stream; //set stream to video source element property
  })
  .catch(function(error) { //catch any errors here
    console.log("Something went wrong!");
  });
}
```

## Features

*  Uses the latest `video.srcObject` to show video data.

## Status & To-Do List

* Status: Working.

* To-Do: Nothing.

## Inspiration

* [Kirupa article: Accessing Your Webcam in HTML](https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm)
* [MDN Web Docs: MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!