addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
	$scope.model = {}
	$scope.model.primaryDiagnosis = "Primary Diagnosis Test";
	$scope.model.symptoms = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis ";
	$scope.model.examinations = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis "
	$scope.model.appliedProcedures = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis ";
	//$scope.model.medicationName = "Works Bro";
	//$scope.model.medicationDosage = "Works Bro";

	$scope.model.medications = [];
	$scope.medicationHashKeys = [];
	$scope.model.medications[0] = {name: "Works", dose: "Works"}
	$scope.model.medicationCount = 0;
}
ddController.prototype.init = function() {
	
}

ddController.prototype.submit = function($scope, unifiedDataModel) {
	//Copy data to unified data model. Data is stringified to and parsed from JSON to remove the internal-use values
	unifiedDataModel.diagnosisDetails.diagnoses[unifiedDataModel.diagnosisDetails.count] = JSON.parse(angular.toJson($scope.model));
	unifiedDataModel.diagnosisDetails.count++;
	$scope.$root.$broadcast("diagnosisDataSubmit");
}

ddController.prototype._createMedicationField = function() {

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
				scope.dd.submit(scope, unifiedDataModel)
				angular.element(document.getElementById("diagnosisDetails_form")).addClass("hidden");
				//angular.element(document.getElementById("diagnosisDetails_form")).addClass("hidden");
			});
		}
	}
});