addPatient.controller("personalDetails", pdController);

function pdController($scope, unifiedDataModel) {
	$scope.$root.isEmpty = {
		personalDetails: {},
		diagnosisDetails: {}
	};
	$scope.$root.isEmpty.personalDetails = {
		date: true,
		firstName: true,
		lastName: true,
		phoneNumber: true
	};
	$scope.$root.isPDActive = true;
	$scope.model = {};
};

pdController.prototype.init = function() {
	
};

pdController.prototype.validateData = function($scope) {
	if ($scope.model) {
		var result = {
			validationPass: true,
			date: true,
			firstName: true,
			lastName: true,
			phoneNumber: true
		};
		if ($scope.model.date === undefined || $scope.model.date === "" ) {
			result.validationPass = false;
			result.date = false;
		}
		if ($scope.model.firstName === undefined || $scope.model.firstName === "" ) {
			result.validationPass = false;
			result.firstName = false;
		}
		if ($scope.model.lastName === undefined || $scope.model.lastName === "" ) {
			result.validationPass = false;
			result.lastName = false;
		}
		if ($scope.model.phoneNumber === undefined || $scope.model.phoneNumber === "" ) {
			result.validationPass = false;
			result.phoneNumber = false;
		}
		return result;
	}
};

pdController.prototype.submit = function($scope, unifiedDataModel, $rootScope) {
	$scope.$apply(function() {
		unifiedDataModel.personalDetails = angular.copy($scope.model);
		$scope.$root.isPDActive = false;
		$scope.$root.isDDActive = true;	
	});
	$rootScope.$broadcast("personalDataSubmit")
};

addPatient.directive("submitpdbutton", function(unifiedDataModel, $rootScope) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				var validationResult = scope.pd.validateData(scope);
				if (validationResult && validationResult.validationPass === true) {
					scope.pd.submit(scope, unifiedDataModel, $rootScope)
				} else {
					scope.$apply(function() {
						scope.$root.isEmpty.personalDetails = validationResult;
					})
				}
			});
		}
	}
});