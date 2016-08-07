# Medical Patient Data Logger - Front end interface

Medical Patient Data Logger is an AngularJS Web Application front end interface that can be used by software professionals working towards creating applications that log patient data.

It provides a responsive and interactive user interface that lets a user input the patient's personal details and diagnosis details and views the data at the end in a summary layout. 
The data is currently saved in a global variable called unifiedDataModel.

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
