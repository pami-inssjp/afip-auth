module.exports = verifyApplication;

function verifyApplication(appName){
	
	var systems = data.sso.operation.login.system;

	return  systems.indexOf(appName) >= 0;
}