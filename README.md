# Selfie app with resin.io's new device urls

This sets up an express server on your raspberry pi with resin.io's new device urls. 

It's very simple one page application. When you click the big red button an image is captured by the camera module and then uploaded to dropbox. 

![alt text](http://i.imgur.com/adL1vbw.png "Selfie!")


Here are the steps need to get it running on your raspberry pi.

* signup with [resin.io](https://www.resin.io) & create an app. 
* signup with [dropbox](https://www.dropbox.com) and create an app. 
* Create 3 enviroment variables on your [resin.io](https://www.resin.io) dashboard corresponding to your dropbox app credentials.

![alt text](http://i.imgur.com/XkTwT5a.png "Enviroment variables")

* Clone this repo. 

* And add your resin app's remote git endpoint and then push. 

```
$ git remote add resin git@git.resin.io:$USER/$APP.git
```

```
$ git push resin master
```

* Navigate to actions tab of the device on the resin.io dashboard and enable your device url. It will then generate a url and your good to go!  
![alt text](http://i.imgur.com/934CU7Q.png "Device Url").

* Connect your PiCam module, as illustrated in the gif below. If you don't have a camera module, you can still push this repo & visit the device url. It will just throw an error when you click the big red button. 

![alt text](http://i.imgur.com/zscAtP1.gif "Cam Module")

* Selfies at the click of a big red button!
