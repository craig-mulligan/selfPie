var express = require('express');
var RaspiCam = require("raspicam");
var url = require('url');
var fs = require('fs');
var ncp = require('ncp').ncp;
 
ncp.limit = 16;

var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(8080);

app.get("/send", function(request, response){
       	selfie();
	    response.setHeader('Content-Type', 'application/json');
	    response.json({ 'url': 'image.jpg' })
	    response.end();
});

function selfie(){
	var camera = new RaspiCam({
	mode: "photo",
	output: "../data/image.jpg",
	encoding: "jpg",
	timeout: 10, 
	});

	camera.on("start", function( err, timestamp ){
		console.log("photo started at " + timestamp );
	});

	camera.on("read", function( err, timestamp, filename ){
		console.log("photo image captured with filename: " + filename );
		ncp('../data/image.jpg', 'static/image.jpg', function (err) {
			 if (err) {
			   return console.error(err);
			 } else {
			 	camera.stop();
			 	console.log('done!');
			 }
		 
		});
		
		//we can now do stuff with the captured image, which is stored in /data
	});

	camera.on("exit", function( timestamp ){
		console.log("photo child process has exited at " + timestamp );
	});

	camera.start();
}