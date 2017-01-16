# Medical Patient Data Logger - Front end interface

Medical Patient Data Logger is an AngularJS web application front end interface that can be used by software professionals working towards creating applications that log patient data.

It provides a responsive and interactive user interface that lets a user input the patient's personal details and diagnosis details and views the data at the end in a summary layout.
The data is currently saved in a global variable called **unifiedDataModel** and outputs to console when the submit button is clicked.

# Features
	*AngularJS framework
	*Real-time data validation on necessary fields.
	*Option to add more than one diagnosis to a patient.
	*Input data is stored in a clean JSON for manipulation, transmission to back-end or database storage.
	*Simple clutter-free UX design

# Installation Steps
To test the application, create an http server and serve the files using it. 

## Steps for Windows Machines
1) Download node.js (https://nodejs.org/en/download/)

2) Download http-server (https://www.npmjs.com/package/http-server) using node.js command line interface:
```sh
npm install http-server -g
```

3) Start an http-server using node.js command line interface:
```sh
cd <Directory_Containing_Files>
http-server ./
```

4) Using a browser, open http://www.localhost:8080/

## Steps for Mac OS
1) Open terminal and start an HTTP Server using Python
```sh
cd <Directory_Containing_Files>
python -m SimpleHTTPServer
```

# Disclaimer:
Copyright ©20XX. Gur Kohli. All Rights Reserved.
The Material may not be reproduced or distributed, in whole or in part, without prior written permission of Gur Kohli (the "Owner"). However, reproduction and distribution, in whole or in part, by non-profit, research or educational institutions for their own use is permitted if proper credit is given, with full citation, and copyright is acknowledged and this paragraph appear in all copies, modifications, and distributions. Any other reproduction or distribution, in whatever form and by whatever media, is expressly prohibited without the prior written consent of the Owner.
