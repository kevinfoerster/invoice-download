# Download Invoices Scripts



## Set Passwords

If you are using the set-password/index.js to save passwords to your keychain, these scripts will be able to access them without keychain prompting. Use it like this from main dir:

```javascript
node ./set-password/index.js -user [USERNAME] -pass [PASSWORD] -service [SERVICE] 
```

## Supported Services

Service [SERVICE-SLUG as used in keychain]

* Klarmobil.de (klarmobil)
