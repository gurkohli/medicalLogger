var addPatient = angular.module('addPatient', ['ngAnimate', 'ui.bootstrap']);

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
	$scope.$root.isPDActive = true;
	$scope.$root.isDDActive = false;
	$scope.$root.isSummaryActive = false;
	$scope.$root.isEmpty = {
		personalDetails: {},
		diagnosisDetails: {}
	};
	$scope.$root.patientUID = angular.copy(unifiedDataModel.patientUID)
})

addPatient.directive("submitnewdata", function(unifiedDataModel) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				console.info("Data in variable unifiedDataModel")
				console.log(unifiedDataModel)
			});
		}
	}
});

addPatient.animation(".animate", function() {
	return {
		enter: function(element, done) {
			//element.css('display','none')
			//element.slideDown(400, function() {
			//	done();
			//});
		},
		leave: function(element, done) {
			//element.slideUp(100, function() {
			//	done();
			//});
		}
	};
});