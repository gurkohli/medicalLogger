addPatient.controller("summary", summaryController)

function summaryController($scope, unifiedDataModel) {
	$scope.personalDetails = unifiedDataModel.personalDetails
}

addPatient.directive("summarybody", function() {
	return {
		template: '<div id = "summary_body">'
					+'<div id ="summary_body_personalDetails">'
						+'<span><label>Date: {{personalDetails.date}}</label>'
							+'<label>Patient UID: {{personalDetails.uid}}</label></span>'
						+'<span><label>First Name: {{personalDetails.firstName}}</label>'
							+'<label>Last Name: {{personalDetails.lastName}}</label></span>'
						+'<span><label>Phone Number: {{personalDetails.phoneNumber}}</label>'
							+'<label class="small-input">Age: {{personalDetails.age}}</label>'
							+'<label class="small-input">Sex: {{personalDetails.sex}}</label></span>'
						+'<span><label>Address Line 1: {{personalDetails.addressLine1}}</label></span>'
						+'<span><label>Address Line 2: {{personalDetails.addressLine2}}</label></span>'
						+'<span><label>City: {{personalDetails.city}}</label>'
							+'<label>State: {{personalDetails.state}}</label>'
							+'<label>Pin Code: {{personalDetails.pincode}}</label>'
						+'</span></div></div>',
		controller: "summary",
		link: function(scope, elem, attrs, controller) {
			console.log(scope);
			console.log(controller);
		}
	}
})