addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
	$scope.$root.isEmpty.diagnosisDetails.primaryDiagnosis = true;
	$scope.$root.isDDActive = false;

	$scope.reset = function() {
		$scope.model = {}
		$scope.model.medications = [];
		$scope.model.medications[0] = {name: "", dose: ""}
		$scope.model.medicationCount = 0;
		$scope.medicationHashKeys = [];
	}

	$scope.reset($scope);

	$scope.$watch('isDDActive', function(newValue, oldValue) {
		if (newValue === true) {
			$scope.reset($scope);
		}
	})
};

ddController.prototype.validateData = function($scope) {
	if ($scope.model) {
		var result = {
			validationPass: true,
			primaryDiagnosis: true
		};
		if ($scope.model.primaryDiagnosis === undefined || $scope.model.primaryDiagnosis === "" ) {
			result.validationPass = false;
			result.primaryDiagnosis = false;
		}
		return result;
	}
};

ddController.prototype.submit = function($scope, unifiedDataModel, $rootScope) {
	$scope.$apply(function() {
		//Copy data to unified data model. Data is stringified to and parsed from JSON to remove the internal-use values
		$scope.model.medications = JSON.parse(angular.toJson($scope.model.medications));
		unifiedDataModel.diagnosisDetails.diagnoses[unifiedDataModel.diagnosisDetails.count] = angular.copy($scope.model);
		unifiedDataModel.diagnosisDetails.count++;
		$scope.$root.isDDActive = false;
		$scope.$root.isSummaryActive = true;	
	});
	$rootScope.$broadcast("diagnosisDataSubmit");
};

addPatient.directive("addbutton", function($compile){
	return {
		scope: true,
		link: function(scope, elem, attrs) {
			scope.addField = function(){
				var index = scope.model.medicationCount;
				scope.model.medications[index+1] = {name: "", dose: ""}
				
				var removeButton = $compile("<removebutton>")(scope);
				scope.medicationHashKeys[index] = scope.medication.$$hashKey
				removeButton.attr("index", index)
				elem.replaceWith(removeButton)
				scope.model.medicationCount++;
			}
		},
		template: '<button class="medication-add-button" type="button" ng-click="addField()">+</button>'
	}
});

addPatient.directive("removebutton", function($compile){
	return {
		scope: true,
		link: function(scope, elem, attrs) {
			scope.removeField = function() {
				var index = scope.medicationHashKeys.indexOf(scope.medication.$$hashKey)
				scope.model.medications.splice(index,1);
				scope.medicationHashKeys.splice(index,1)
				scope.model.medicationCount -= 1;
			}
		},
		template: '<button class="medication-remove-button" type="button" ng-click="removeField()">-</button>'
	}
});

addPatient.directive("medicationsfield", function(){
	return {
		template: '<span class="inline-fields">'+
			'<input class="medication-name" placeholder="Medication Name" type="text" ng-model="medication.name"/>'+
			'<input class="medication-dose" placeholder="Medication Dose" type="text" ng-model="medication.dose"/>'+
			'<addbutton></addbutton>'+
			'</span>'
		}
});

addPatient.directive("submitddbutton", function(unifiedDataModel, $rootScope) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				//var validationResult = scope.dd.validateData(scope);
				validationResult = {validationPass: true}
				console.warn("Data Validation Bypassed") 
				if (validationResult && validationResult.validationPass === true) {
					scope.dd.submit(scope, unifiedDataModel, $rootScope)
				} else {
					scope.$apply(function() {
						scope.$root.isEmpty.diagnosisDetails = validationResult;
					})
				}
			});
		}
	}
});