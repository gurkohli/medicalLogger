addPatient.controller("diagnosisDetails", ddController);

function ddController($scope) {
	this.symptoms = "Works Bro";
	this.examinations = "Works Bro"
	this.appliedProcedures = "Works Bro";
	this.medicationName = "Works Bro";
	this.medicationDosage = "Works Bro";

	this.medications = {};
	this.medications[this.medicationName] = this.medicationDosage;
	this.medicationCount = 1;
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
				// /scope.pd.submit(scope)
				angular.element(document.getElementById("personalDetails_form")).removeClass("hidden");
				//angular.element(document.getElementById("diagnosisDetails_form")).addClass("hidden");
			});
		}
	}
});