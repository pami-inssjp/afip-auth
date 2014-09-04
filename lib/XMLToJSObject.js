function XMLToJSObject(XMLDoc){

	var relation = function(key, reltype){
		this.key = key;
		this.reltype = reltype;
	};

	var tokenData = function(version){
		
		var relations = new Array();
		relations.addRelation = function(key, reltype){
			return Array.prototype.push.apply(this, new relation(key, reltype));
		};

		this.version = version;
		this.id = {
			src:"",
			dst:"",
			unique_id:"",
			gen_time:0,
			exp_time:0
		};
		this.operation = {
			type:"",
			value:"",
			login: {
				entity:"",
				service:"",
				uid:"",
				authmethod: "",
				regmethod: "",
				system: [],
				relations: relations,
				servicedata: {
					src:"",
					other:{}
				}
			}
		}
	};

	var result = new tokenData(XMLDoc.documentElement.getAttribute('version'));
	var idNode = XMLDoc.getElementsByTagName('id')[0];
	result.id.src = idNode.getAttribute('src');
	result.id.dst = idNode.getAttribute('dst');
	result.id.unique_id = idNode.getAttribute('unique_id');
	result.id.gen_time = idNode.getAttribute('gen_time');
	result.id.exp_time = idNode.getAttribute('exp_time');
	var operationNode = XMLDoc.getElementsByTagName('operation')[0];
	result.operation.type = operationNode.getAttribute('type');
	result.operation.value = operationNode.getAttribute('value');
	var loginNode = operationNode.getElementsByTagName('login')[0];
	result.operation.login.entity = loginNode.getAttribute('entity');
	result.operation.login.service = loginNode.getAttribute('service');
	result.operation.login.uid = loginNode.getAttribute('uid');
	result.operation.login.authmethod = loginNode.getAttribute('authmethod');
	result.operation.login.regmethod = loginNode.getAttribute('regmethod');
	result.operation.login.system = loginNode.getAttribute('system').split(',');

	return result;
}

module.exports = XMLToJSObject;