var RaspiCam = require("raspicam");
var express = require('express');
var Dropbox = require("dropbox");
var fs = require("fs");

// launch server on port 8080 
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(8080);

// Setup dropbox client
var client = new Dropbox.Client({
    key: process.env.KEY,
    secret: process.env.SECRET,
    token: process.env.TOKEN
});

// respond to button press
app.get("/send", function(request, response){
		// Take photo and upload to dropbox
		selfie();
       	response.end();
});

// upload file to dropbox
// image = local file
// rename = what to name the file on dropbox
function upload(image, renamed){
	fs.readFile(image, function(error, data) {
  // No encoding passed, readFile produces a Buffer instance
	  if (error) {
	    return console.log(error);
	  }
	  client.writeFile(renamed, data, function(error, stat) {
	    if (error) {
	      return console.log(error);
	    }
	    // The image has been succesfully written.
	  });
	});
}

function selfie(){
	var camera = new RaspiCam({
	mode: "photo",
	output: "image.jpg",
	encoding: "jpg",
	timeout: 1, 
	});

	camera.on("exit", function( timestamp ){
		console.log("photo child process has exited at " + timestamp );
		stamp = new Date().getTime();
		upload("image.jpg", "image-" + stamp + ".jpg");
	});

	camera.start();
}