addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
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
}

ddController.prototype.submit = function($scope, unifiedDataModel) {
	$scope.$root.$broadcast("diagnosisDataSubmit");
	$scope.$apply(function() {
		//Copy data to unified data model. Data is stringified to and parsed from JSON to remove the internal-use values
		unifiedDataModel.diagnosisDetails.diagnoses[unifiedDataModel.diagnosisDetails.count] = JSON.parse(angular.toJson($scope.model));
		unifiedDataModel.diagnosisDetails.count++;
		$scope.$root.isDDActive = false;
		$scope.$root.isSummaryActive = true;	
	});
}


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
			'<input class="medication-name" type="text" ng-model="medication.name"/>'+
			'<input class="medication-dose" type="text" ng-model="medication.dose"/>'+
			'<addbutton></addbutton>'+
			'</span>'
		}
});

addPatient.directive("submitddbutton", function(unifiedDataModel) {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				scope.dd.submit(scope, unifiedDataModel);
			});
		}
	}
});