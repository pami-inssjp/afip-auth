var XMLDOM = require('xmldom').DOMParser;

module.exports = function(xmltext){
	return new XMLDOM().parseFromString(xmltext,'text/xml');
}