const keychain = require('keychain');
const fs = require('fs');

/*
	Load config file
 */

const configPath = './user-data/config.json';
let config = { services: {} }
if (fs.existsSync(configPath)) {
	config = require(`.${configPath}`);
}

/*
	Get settings
 */

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

/*
	Save settings
 */

config.services[service] = user;
fs.writeFile(configPath, JSON.stringify(config), function(err) {
	if(err) {
		console.error('\x1b[31m%s\x1b[37m', err);
		return;
	} else {
		keychain.setPassword({ account: user, service: service, password: password }, function(err) {
			if(!err) {
				console.error('\x1b[32m%s\x1b[37m', 'Config saved!');
			} else {
				console.error('\x1b[31m%s\x1b[37m', err);
			}
		});
	}
});
