var addPatient = angular.module('addPatient', ['ngAnimate']);

addPatient.factory('unifiedDataModel', function() {
	var unifiedDataModel = {};
	unifiedDataModel.personalDetails = {};
	unifiedDataModel.diagnosisDetails = {
		count: 0,
		diagnoses: []
	};
	unifiedDataModel.patientUID = "UID123456_TEST"
	console.info("Patient UID Not Wired Yet!")
	return unifiedDataModel;
});

addPatient.controller("rootController", function($scope, unifiedDataModel) {
	$scope.$root.isEmpty = {
		personalDetails: {},
		diagnosisDetails: {}
	};
	$scope.$root.patientUID = angular.copy(unifiedDataModel.patientUID)
})

addPatient.directive("submitnewdata", function() {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				console.info("Submit button not wired yet")
			});
		}
	}
});

addPatient.animation(".animate", function() {
	return {
		enter: function(element, done) {
			element.css('display','none')
			element.slideDown(400, function() {
				done();
			});
		},
		leave: function(element, done) {
			element.slideUp(100, function() {
				done();
			});
		}
	};
});