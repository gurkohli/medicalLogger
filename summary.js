addPatient.controller("summary", summaryController)

function summaryController($scope, unifiedDataModel) {
	$scope.$on("personalDataSubmit", function() {
		$scope.$apply(function() {
			$scope.personalDetails = unifiedDataModel.personalDetails;
		})
	})
	$scope.$on("diagnosisDataSubmit", function() {
		$scope.$apply(function() {
			$scope.diagnosisDetails = unifiedDataModel.diagnosisDetails;
		})
	})
}