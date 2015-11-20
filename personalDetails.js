addPatient.controller("personalDetails", pdController);

function pdController() {
	this.date = "Works Bro";
	this.UID = "UNIQUE"
	this.firstName = "Works Bro";
	this.lastName = "";
	this.age = "";
	this.dob = "";
	this.sex = "";
	this.phoneNumber = "";
	this.addressLine1 = "";
	this.addressLine2 = "";
	this.city = "";
	this.state = "";
	this.pincode = "";
}
pdController.prototype.init = function() {
	
}