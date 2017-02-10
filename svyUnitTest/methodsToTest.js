/**
 * @properties={typeid:24,uuid:"BC961640-E25D-41A4-9FD3-71F069CF444B"}
 */
function methodA(arg1) {
	if(arg1) {
		return true;
	} else {
		return false;
	}
}

/**
 * @properties={typeid:24,uuid:"5DE05C9B-1CEB-4618-A750-8EC2BED61E3A"}
 */
function methodB() {
	for(var i = 1; i <= 20; i++) {
		if(i == 25) {
			return false;
		} else {
			application.output('Running loop step: ' + i);
		}
	}
	
	return true;
}