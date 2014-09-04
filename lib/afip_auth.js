var XMLDoc = require('./XMLDOMDocument');
var JSObject = require('./XMLToJSObject');

module.exports = function afipAuth(systemName, token, sing){

	var self = this;
	var _systemName = systemName;
	var _token = token;
	var _sing = sing;
	var _xmltext = new String(new Buffer(_token, 'base64'));
	var _xmlDOM = XMLDoc(_xmltext);
	var _Data = JSObject(_xmlDOM);

	self.systemName = function(){ return _systemName;};
	self.token = function(){ return _token;};
	self.sing = function(){ return _sing;};
	self.getXMLText = function(){ return _xmltext;};
	self.getXMLDOM = function(){ return _xmlDOM;};
	self.getData = function(){ return _Data;};
	self.getJSON = function(){};
	self.getTaxpayerCUIT = function(){};
	self.getRelationsCUITs = function(){};
	self.isValid = function(){};
	self.isExpired = function(){};
	self.isOwner = function(){};
};