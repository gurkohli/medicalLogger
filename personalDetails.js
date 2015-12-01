addPatient.controller("personalDetails", pdController);

function pdController($scope, unifiedDataModel) {
	$scope.model = {};
};

pdController.prototype.init = function() {
	
};

pdController.prototype.submit = function($scope, unifiedDataModel) {
	unifiedDataModel.personalDetails = JSON.parse(angular.toJson($scope.model));
	$scope.$root.$broadcast("personalDataSubmit")
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