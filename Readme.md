# Download Invoices Scripts

This little node tool lets you download the latest invoice from websites automatically. It requires macOS Sierra or later.

## Installation

* Before you go, make sure you have Node.js (and maybe *yarn*) installed.
* Download this package and put it somewhere on your drive.
* Open up your terminal and run *all commands* from the directory this package is in:

```
cd [PATH-TO-PACKAGE]
```

If you are new to this: Type 'cd' (change directory) and then use double-TAB to see suggestions.

* Run node package installations

with just Node.js installed
```
npm install
```

with yarn installed
```
yarn install 
```

## Setup

### Allow remote automation in Safari

For this to work you will have to allow remote automation in your Safari browser. Therefore

1. activate developer tools in Safari
2. and allow remote automation from Safaris developer menu

### Setup service

Every service you want to download invoices from must be set up. The script will save your username to a config file (./user-data/config.json) and your password to your macOS keychain. This is how you do it:

```
node ./set-config -user [USERNAME] -pass [PASSWORD] -service [SERVICE] 
```

Make sure the service matches the string from supported websites list.

## Download Invoice

To download invoices run

```
node ./invoces-from/[SERVICE].js
```

## Supported Websites

Service [SERVICE]

* Klarmobil.de [klarmobil]

## Contrubutions welcome!

If you want to add to the list of supported websites or improve/update scripts you are very welcome! 👍
These scripts are using webdriver.io to run your browser.
