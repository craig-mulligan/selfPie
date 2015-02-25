var express = require('express');
var RaspiCam = require("raspicam");
var url = require('url');

var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(process.env.PORT || 8080);
console.log("Listening on port " + 8080);

function selfie(){
	var camera = new RaspiCam({
	mode: "photo",
	output: "../data/image.jpg",
	encoding: "jpg",
	timeout: 100 
	});

	camera.on("started", function( err, timestamp ){
		console.log("photo started at " + timestamp );
	});


	camera.on("read", function( err, timestamp, filename ){
		console.log("photo image captured with filename: " + filename );
		//we can now do stuff with the captured image, which is stored in /data
	});

	camera.on("exit", function( timestamp ){
		console.log("photo child process has exited at " + timestamp );
	});

	camera.start();
}

app.get("/send", function(request, response){
    // Get data
    var queryData = url.parse(request.url, true).query;
    console.log("State " + queryData.pic + " received.");

    // Apply command
    if (queryData.pic == 'true') {
    	console.log("lamp: ON");
        selfie();    
    }
});




