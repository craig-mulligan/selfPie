var express = require('express');
var RaspiCam = require("raspicam");
var url = require('url');

var app = express();

app.use(express.static(__dirname + '../data/'));
app.use(express.static(__dirname + '/static'));

app.listen(8080);

app.get("/send", function(request, response){
    // Get data
    var queryData = url.parse(request.url, true).query;
    console.log(queryData.pic);

    // take picture
    if (queryData.pic == 'true') {
       	selfie();
    }
    // Answer
    response.sendfile('../data/image.jpg');
    
});

function selfie(){
	var camera = new RaspiCam({
	mode: "photo",
	output: "../data/image.jpg",
	encoding: "jpg",
	timeout: 10, 
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
	console.log('camera');
}
