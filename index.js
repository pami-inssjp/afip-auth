//var verifySing = require('./lib/verifySing');
//var decodeToObject = require('./lib/decodeToObject');
//var verifyExpiration = require('./lib/verifyExpiration');
//var verifyApplication = require('./lib/verificationApplication');

var afip_auth = require('./lib/afip_auth');

function verifyAndDecode(token, sing){
	if(!verifySing(token, sing)){
		throw new Error('The token wasn\'t signed by AFIP');
	}

	var data = decodeToObject(token);

	if(!verifyExpiration( data )){
		throw new Error('The token is espired');
	}

	return data;
}

module.exports = afip_auth;