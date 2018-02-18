/*
	Load settings
 */

const configPath = '../user-data/config.json';
const fs = require('fs');
if (!fs.existsSync(configPath)) {
	console.error('\x1b[31m%s\x1b[37m', 'Error: Run setup before running download');
	return;
}
const config = require(configPath);
const service = process.mainModule.filename.match(/([^\/]*)\/*$/)[1].replace('.js', '');
let user = config.services[service] || null;

/*
	Script
 */

if(!user) {
	console.error('\x1b[31m%s\x1b[37m', 'Error: User is not set. Use user-service map file');
	return;
}

const keychain = require('keychain');
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Until = webdriver.until
	Key = webdriver.Key;

// Access Keychain
keychain.getPassword({ account: user, service: service }, function(err, pass) {

	// Check for password
	if(err) {
		console.error('\x1b[31m%s\x1b[37m', 'Password was not found');
		return;
	}

	// Starting Webdriver
	var driver = new webdriver.Builder()
		.forBrowser('safari')
		.build();

	// Open site
	driver.navigate().to('https://onlineservice.klarmobil.de/login')
		.then(() => driver.manage().window().maximize())
		// Login
		.then(() => driver.findElement(By.id('f_username')).sendKeys(user))
		.then(() => driver.findElement(By.id('f_password')).sendKeys(pass + Key.ENTER))
		.then(() => driver.findElement(By.css('.kmbtn32.green')).click())
		// Click to Download
		.then(() => driver.wait(Until.elementLocated(By.xpath('//*[@class="lastInvoice"]//a'), 15000)))
		.then(() => driver.findElement(By.xpath('//*[@class="lastInvoice"]//a')).click())
		// Logout
		.then(() => driver.sleep(3000))
		.then(() => driver.findElement(By.css('.kmbtn32.green')).click())

		.then(() => driver.sleep(1000));
});
