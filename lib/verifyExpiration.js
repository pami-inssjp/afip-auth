module.exports = verifyExpiration;

function verifyExpiration(data){
	return parseInt(data.sso.id.exp_time) <= Date.now()/1000;
}