var QCD = QCD || {};
QCD.components = QCD.components || {};
QCD.components.elements = QCD.components.elements || {};

QCD.components.elements.DynamicComboBox = function(_element, _mainController) {
	$.extend(this, new QCD.components.Component(_element, _mainController));

	var mainController = _mainController;
	
	var element = _element;
	
	var select = $("#"+element.attr('id')+"_select");
	
	this.getComponentValue = function() {
		var selectedVal = select.val();
		if (!selectedVal || selectedVal.trim() == "") {
			selectedVal = null;
		}
		var value = {
			selectedValue: selectedVal
		}
		return value;
	}
	
	this.setComponentValue = function(value) {
		select.children().remove();
		select.append("<option value=''></option>");
		for (var i in value.values) {
			var val = value.values[i];
			select.append("<option value='"+val+"'>"+val+"</option>");
		}
		select.val(value.selectedValue);
	}
	
	this.setComponentEnabled = function(isEnabled) {
		if (isEnabled) {
			select.removeAttr('disabled');
		} else {
			select.attr('disabled', 'true');
		}
	}
	
	this.setComponentLoading = function(isLoadingVisible) {

	}
}