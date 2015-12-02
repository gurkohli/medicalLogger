addPatient.controller("personalDetails", pdController);

function pdController($scope, unifiedDataModel) {
	$scope.$root.isPDActive = true;
	$scope.model = {};
};

pdController.prototype.init = function() {
	
};

pdController.prototype.submit = function($scope, unifiedDataModel) {
	$scope.$root.$broadcast("personalDataSubmit")
	$scope.$apply(function() {
		unifiedDataModel.personalDetails = JSON.parse(angular.toJson($scope.model));
		$scope.$root.isPDActive = false;
		$scope.$root.isDDActive = true;	
	});
};

addPatient.directive("submitpdbutton", function(unifiedDataModel) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				scope.pd.submit(scope, unifiedDataModel)
			});
		}
	}
});