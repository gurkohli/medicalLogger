addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
	$scope.model = {}
	$scope.model.symptoms = "Works Bro";
	$scope.model.examinations = "Works Bro"
	$scope.model.appliedProcedures = "Works Bro";
	$scope.model.medicationName = "Works Bro";
	$scope.model.medicationDosage = "Works Bro";

	$scope.model.medications = {};
	$scope.model.medications[$scope.model.medicationName] = $scope.model.medicationDosage;
	$scope.model.medicationCount = 1;
}
ddController.prototype.init = function() {
	
}

ddController.prototype.submit = function($scope, unifiedDataModel) {
	unifiedDataModel.diagnosisDetails.diagnoses[unifiedDataModel.diagnosisDetails.count] = scope.model;
	unifiedDataModel.diagnosisDetails.count++;
}

ddController.prototype._createMedicationField = function() {

}

addPatient.directive("addbutton", function($compile){
	return {
		scope: true,
		link: function(scope, elem, attrs) {
			scope.addField = function(){
				var index = scope.dd.medicationCount;
				var newField = $compile("<medicationsfield>")(scope)
				newField.attr("id", "field_" + (index + 1));
				angular.element(document.getElementById("medicationsFieldContainer")).append(newField);
				
				var removeButton = $compile("<removebutton>")(scope);
				removeButton.attr("index", index)
				elem.replaceWith(removeButton)
				scope.dd.medicationCount += 1;
				//elem.removeAttr("addbuttonclick").attr("removebuttonclick","").text("-");
				//$compile(elem)(scope);
				//console.log(attrs)
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
				//var newMedicationField = "<medicationsfield>"
				//elem.parent().parent().append($compile(newMedicationField)(scope));
				elem.parent().parent().remove();
				scope.dd.medicationCount -= 1;
			}
		},
		template: '<button class="medication-remove-button" type="button" ng-click="removeField()">-</button>'
	}
});

addPatient.directive("medicationsfield", function(){
	return {
		template: '<span class="inline-fields">'+
			'<input class="medication-name" type="text" ng-model="dd.medicationName"/>'+
			'<input class="medication-dose" type="text" ng-model="dd.medicationDosage"/>'+
			'<addbutton></addbutton>'+
			'</span>'
		}
});

addPatient.directive("submitddbutton", function() {
	return {
		link: function(scope, elem, attrs) {
			elem.bind("click", function() {
				scope.dd.submit(scope)
				angular.element(document.getElementById("diagnosisDetails_form")).addClass("hidden");
				//angular.element(document.getElementById("diagnosisDetails_form")).addClass("hidden");
			});
		}
	}
});