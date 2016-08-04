addPatient.controller("personalDetails", pdController);

function pdController($scope, unifiedDataModel) {
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

addPatient.directive("validate", function() {
	return {
		link: function(scope, elem, attrs) {
			elem.on("input", function() {
				if (attrs.validatetype === "length") {
					var maxLength = parseInt(attrs.validatemax);
					if (elem.val().length > maxLength) {
						elem.val(elem.val().slice(0,maxLength));
						scope.model[attrs.ngModel.split('.')[1]] = parseInt(elem.val());
						//scope[attrs.ngmodel] = elem.val();
					}	
				} else if (attrs.validatetype === "sex") {
					var value = elem.val().toLowerCase();
					if (value[0] === 'm' && value !== "mal") {
						elem.val("Male");
					} else if (value[0] === 'f' && value !== "femal") {
						elem.val("Female");
					} else if (value === "mal" || value === "femal") {
						elem.val("");
					} else {
						elem.val("");
					}
					scope.model.sex = elem.val();
				} else if (attrs.validatetype === "nonumber") {
					var value = elem.val();
					var length = elem.val().length
					if (value.match(/^[a-zA-Z ]+$/) === null) {
						elem.val(elem.val().slice(0, length-1))
					}
					scope.model[attrs.ngModel.split('.')[1]] = elem.val();
				}
			});
		}
	}
});

addPatient.directive("calculateage", function() {
	return {
		link: function (scope, elem, attrs) {
			elem.on("change", function () {
				if (scope.model.dob !== undefined) {
					var today = new Date();
					var todayYear = today.getFullYear()
					scope.model.age = todayYear - scope.model.dob.getFullYear();
					scope.$apply();
				}
			})
		}
	}
})

addPatient.directive("submitpdbutton", function(unifiedDataModel, $rootScope) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				//var validationResult = scope.pd.validateData(scope);
				validationResult = {validationPass: true}
				console.warn("Data Validation Bypassed") 
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