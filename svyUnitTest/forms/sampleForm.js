/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"505A1E42-B3B0-4125-A4F6-1EEC8D71B35B",variableType:4}
 */
var field_one = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5D44D7D7-18BD-420E-A7C2-904C6898D538",variableType:4}
 */
var field_two = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2BD5B80D-3854-4819-BDE5-9AB59ACCF7EF",variableType:4}
 */
var result = 0;


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"DEE502BC-2712-455E-9357-CE219DFF9D46"}
 */
function onAction(event) {
	result = field_one + field_two;
}
