/**
 * @properties={typeid:24,uuid:"354176AA-1ACC-4DDD-AAA7-D742E50BB0E1"}
 */
function test_methodA_false() {
	var arg = null;
	
	var result = scopes.methodsToTest.methodA(arg);
	
	jsunit.assertFalse(result);
}

/**
 * @properties={typeid:24,uuid:"8780D49E-B5A8-4715-928A-906DE6202042"}
 */
function test_methodA_true() {
	var arg = 'aa';
	
	var result = scopes.methodsToTest.methodA(arg);
	
	jsunit.assertTrue(result);
}

/**
 * @properties={typeid:24,uuid:"FBE5170B-AB2F-46CF-993A-3E95D76F915F"}
 */
function test_methodB() {
	var result = scopes.methodsToTest.methodB();
	
	jsunit.assertTrue(result);
}