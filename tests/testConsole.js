module.exports = testConsole();

function testConsole(){

	var _log = console.log;

	var color = {
		reset: "\x1b[0m",
		bold: "\x1b[1m",
		bold_off: "\x1b[22m",
		red: "\x1b[31m",
    	green: "\x1b[32m",
    	yellow: "\x1b[33m",
    	blue: "\x1b[34m"
    };

    console.status = {
    	SUCCESS: 0,
    	FAILURE: 1,
    	WARNING: 2,
    	ERROR: 3,
    	INFO: 4
    };

	console.log = function(text, status){

		var message = new String();

		switch(status){
			case this.status.SUCCESS:
				message += color.green;
			break;
			case this.status.FAILURE:
				message += color.red;
			break;
			case this.status.WARNING:
				message += color.bold+color.yellow;
			break;
			case this.status.ERROR:
				message += color.bold+color.red;
			break;
			case this.status.INFO:
				message += color.blue;
			break;
			default:
				message += color.reset;
		}

		message += text + color.reset;

		_log.apply(console, [message]);
	};
}