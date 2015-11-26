addPatient.controller("personalDetails", pdController);

function pdController($scope, unifiedDataModel) {
	$scope.model = unifiedDataModel.personalDetails;
};

pdController.prototype.init = function() {
	
};

pdController.prototype.submit = function($scope, unifiedDataModel) {
	unifiedDataModel.personalDetails = $scope.model
	console.log(unifiedDataModel)
};

addPatient.directive("submitpdbutton", function(unifiedDataModel) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				scope.pd.submit(scope, unifiedDataModel)
				angular.element(document.getElementById("diagnosisDetails_form")).removeClass("hidden");
				angular.element(document.getElementById("personalDetails_form")).addClass("hidden");
			});
		}
	}
});