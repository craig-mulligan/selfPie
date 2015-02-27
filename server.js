var express = require('express');
var RaspiCam = require("raspicam");
var express = require('express');
var Dropbox = require("dropbox");
var fs = require("fs");
 
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(8080);

app.get("/send", function(request, response){
		selfie();
       	response.end();
});

var client = new Dropbox.Client({
    key: process.env.KEY,
    secret: process.env.SECRET,
    token: process.env.TOKEN
});


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
	timeout: 100, 
	});

	camera.on("start", function( err, timestamp ){
		console.log("photo started at " + timestamp );
	});

	camera.on("read", function( err, timestamp, filename ){
		console.log("photo image captured with filename: " + filename );
		stamp = new Date().getTime();
       	upload(filename, "image-" + stamp + ".jpg");
       	camera.stop();
		//we can now do stuff with the captured image, which is stored in /data
	});

	camera.on("exit", function( timestamp ){
		console.log("photo child process has exited at " + timestamp );
	});

	camera.start();
}