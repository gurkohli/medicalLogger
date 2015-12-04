addPatient.controller("summary", summaryController)

function summaryController($scope, unifiedDataModel) {
	$scope.$root.isSummaryActive = false;
	$scope.$on("personalDataSubmit", function() {
		$scope.$apply(function() {
			$scope.personalDetails = unifiedDataModel.personalDetails;
			$scope.personalDetails.date = unifiedDataModel.personalDetails.date.toLocaleDateString();
			if ($scope.personalDetails.dob !== undefined) {
				$scope.personalDetails.dob = unifiedDataModel.personalDetails.dob.toLocaleDateString();
			}
		})
	})
	$scope.$on("diagnosisDataSubmit", function() {
		$scope.$apply(function() {
			$scope.diagnosisDetails = unifiedDataModel.diagnosisDetails;
		})
	})
}

summaryController.prototype.addDiagnosis = function($scope) {
	$scope.$apply(function() {
		$scope.$root.isSummaryActive = false;
		$scope.$root.isDDActive = true;
	})
}

addPatient.directive("adddiagnosis", function(unifiedDataModel) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				scope.$apply(function() {
					scope.$root.isSummaryActive = false;
					scope.$root.isDDActive = true;
				})
			});
		}
	}
});