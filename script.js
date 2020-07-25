//declare variable that selects video element in html
let video = document.querySelector('#videoElement');

/* getUserMedia returns a promise that returns an object of type mediaStreanm.
syntax: var promise = navigator.mediaDevices.getUserMedia(constraints); */
if (navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices
		.getUserMedia({ audio: false, video: true }) //constraints in ({})
		.then(function (stream) {
			video.srcObject = stream; //set stream to video source element property
		})
		.catch(function (error) {
			//catch any errors here
			console.log('Something went wrong!');
		});
}
