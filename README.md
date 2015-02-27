# Basic Resin.io Node.js Project

This sets up an express server on your raspberry pi with resin.io's new device urls. 

It's very simple one page application. When you click the big red button an image is captured by the camera module and then uploaded to dropbox. 

Here are the steps need to get it running on your raspberry pi.

1. signup with [resin.io](https://www.resin.io) & create an app. 
2. signup with [dropbox](https://www.dropbox.com) and create an app. 
3. Create 3 enviroment variables on your [resin.io](https://www.resin.io) dashboard corresponding to your dropbox app credentials.

![alt text](https://github.com/craig-mulligan/selfPie/blob/master/images/envars.png "Enviroment variables")

⋅⋅* KEY: $dropbox-app-key
⋅⋅* SECRET: $dropbox-app-secret
⋅⋅* TOKEN: $Dropbox-app-token

4. Clone this repo. 

5. And you resin apps remote git endpoint and then push. 

6. Navigate to actions tab of the device on the resin.io dashboard and enable your device url. It will then generate a url and your good to go! Selfies at the click of a big red button! 
![alt text](https://github.com/craig-mulligan/selfPie/blob/master/images/device-url.png "Device Url") 



