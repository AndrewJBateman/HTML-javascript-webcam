//declare variable that selects video element in html
let video = document.querySelector("#videoElement");

//code for accessing the getUserMedia API:
if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true}) //constraints
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(error) { //catch any errors here
    console.log("Something went wrong!");
  });
}
