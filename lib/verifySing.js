var fs = require("fs");
var path = require('path');
var crypto = require('crypto');

var keyFile = fs.readFileSync(path.join(__dirname, "/resources/afip-public-key.pem"), "utf8");

function verifySing(plainText, sing){

	var verifier = crypto.createVerify('sha1WithRSAEncryption');
	verifier.update ( plainText );
	
	return verifier.verify( keyFile,  sing, "base64");
}

module.exports = verifySing;