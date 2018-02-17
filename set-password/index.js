var keychain = require('keychain');

let user;
if(process.argv.indexOf("-user") != -1) {
	user = process.argv[process.argv.indexOf("-user") + 1];
}
let password;
if(process.argv.indexOf("-pass") != -1) {
	password = process.argv[process.argv.indexOf("-pass") + 1];
}
let service;
if(process.argv.indexOf("-service") != -1) {
	service = process.argv[process.argv.indexOf("-service") + 1];
}

keychain.setPassword({ account: user, service: service, password: password }, function(err) {
	if(!err) {
		console.log('> Password has been set');
	} else {
		console.log('> Error setting password:', err);
	}
});
