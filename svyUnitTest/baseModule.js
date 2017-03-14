
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"582501B6-19AF-49A7-A357-CF77D2AC4A7C"}
 */
function onSolutionOpen(arg, queryParams) {
    try {
        // Warning can not be suppressed
        scopes.istanbul_scope.initIstanbul();
    } catch (e) {
        // This is only useful for debugging in the CI pipeline. Else it is just really annoying when running tests locally
        application.output('cannot init istanbul_scope');
        application.output(e);
    }
}

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stoppable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"9C344B36-B2A3-46E8-A8A9-A2DD210762F5"}
 */
function onSolutionClose(force) {
	// write coverage json object.
    var coverageExists = false;
    try {
        // Warning can not be suppressed
        if (__coverage__) {
            coverageExists = true;
        }
    } catch (e) {
        // This is only useful for debugging in the CI pipeline. Else it is just really annoying when running tests locally
        application.output('__coverage__ is not defined');
    }

    if (coverageExists) {
        // ___report_coverage___ will be replaced by an Ant build step
        var filePath = "___report_coverage___";
        var jsFile = plugins.file.createFile(filePath);
        // Warning can not be suppressed
        if (!plugins.file.writeTXTFile(jsFile, JSON.stringify(__coverage__), 'UTF-8', 'json')) {
            application.output('Cannot write file ' + filePath);
        } else {
            application.output('coverage file ' + filePath + ' written with success');
        }
    }
    return true;
}
