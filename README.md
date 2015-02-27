# Basic Resin.io Node.js Project

This sets up an express server on your raspberry pi with resin.io's new device urls. 

It's very simple one page application. When you click the big red button a an image is captured by the camera module and then uploaded to dropbox. 

Here are the steps need to get it running on your raspberry pi.

1. signup with resin.io & create an app. 
2. signup with dropbox and create an app. 
3. Create 3 enviroment variables on your resin.io dashboard corresponding to your dropbox app credentials.

![alt text](https://github.com/craig-mulligan/selfPie/images/envars.png "Enviroment variables")

KEY: $dropbox-app-key
SECRET: $dropbox-app-secret
TOKEN: $Dropbox-app-token

4. Clone this repo. 

5. And you resin apps remote git endpoint and then push. 



