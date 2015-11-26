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