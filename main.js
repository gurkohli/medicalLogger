var addPatient = angular.module('addPatient', []);

addPatient.factory('unifiedDataModel', function() {
	var unifiedDataModel = {};
	unifiedDataModel.personalDetails = {};
	unifiedDataModel.diagnosisDetails = {
		count: 0,
		diagnoses: []
	};
	return unifiedDataModel;
});

addPatient.directive("submitnewdata", function() {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				console.info("Submit button not wired yet")
			});
		}
	}
});