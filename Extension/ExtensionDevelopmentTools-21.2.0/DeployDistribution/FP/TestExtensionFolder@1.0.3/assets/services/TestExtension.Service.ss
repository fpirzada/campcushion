
function service(request, response)
{
	'use strict';
	try 
	{
		require('FP.TestExtensionFolder.TestExtension.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('FP.TestExtensionFolder.TestExtension.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}