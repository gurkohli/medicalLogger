addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
	this.symptoms = "Works Bro";
	this.examinations = "UNIQUE"
	this.appliedProcedures = "Works Bro";
	this.medicationName = "Works Bro";
	this.medicationDosage = "Works Bro";

	this.medications = {};
	this.medications[this.medicationName] = this.medicationDosage;
}
ddController.prototype.init = function() {
	
}

ddController.prototype.medicationAddButtonClicked = function() {
	
}

ddController.prototype._createMedicationField = function() {

}

addPatient.directive("addbutton", function($compile){
	return {
		scope: true,
		link: function(scope, elem, attrs) {
			scope.addField = function(){
				elem.parent().parent().append($compile("<medicationsfield>")(scope));
				elem.replaceWith($compile("<removebutton>")(scope))
				//elem.removeAttr("addbuttonclick").attr("removebuttonclick","").text("-");
				//$compile(elem)(scope);
				console.log(attrs)
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
				console.log(elem)
				console.log(scope)
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