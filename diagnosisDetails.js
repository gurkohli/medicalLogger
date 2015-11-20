addPatient.controller("diagnosisDetails", ddController);

function ddController() {
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

addPatient.directive("addbuttonclick", function(){
	return {
		link: function(scope, elem, attrs) {
			elem.bind('click', function() {
				alert("Works!")
			});
		}
	};
});