require('./testConsole');
var omfg = require('./omfg.js');

module.exports = function(testFunction){
	var filename = omfg().filename;
	
	try{
		console.log('<===== RUN TEST: ' + filename + ' =====>');
		testFunction();
		console.log('SUCCESS', console.status.SUCCESS);
	}
	catch(err){
		console.log('<===== ERROR TEST =====>');
		console.log(err.stack, console.status.ERROR);
		throw err;
	}
	finally{
		console.log('<===== END TEST =====>')
	}
}