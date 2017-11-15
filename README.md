# freebitco.in-Bot
A bot for auto-clicking in freebitco.in


To use this Script you need the following:

* Firefox (version 56.0.2 or below):						[Firefox]
* Or Waterfox:  [Waterfox]
* iMacros 8.9.7 for firefox:			[iMacros]
* This script:				[Freebitco.in-bot]
* An account in 9kw.eu:			[9kw]	
* An account in freebitco.in:	[freebitcoin]



There're two main macros base_macro_A and base_macro_Av2  
base_macro_A is for text captcha  
base_macro_Av2 is for recaptchav2


To use the macros you have to edit these parts of the code:
```imacros
'===== CONFIGURATION ====='

SET url http://freebitco.in/?r=1327941

'= Login settings ='
'Used when login-in by BTC address'
SET btc YOUR_BTC_ADDRESS
'Used when login-in by mail'
SET mail mail
'The password of your freebetco.in account'
SET pw pass


'= API KEY ='
'API key from 9kw.eu'
SET apikey API_KEY


'And priority (prio 1-20)
'Priority in our system like min. 0 to max. 20 (cost +0-20)
SET priority 0

'Set wait time for the requested captcha'
'Default is 300, increase if low amount workers'
SET Wait_9kw 300

'===== END OF CONFIG ====='
```
and
```
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:login_form_btc_address CONTENT={{mail}}
```

you should change the following:

    line 9		"YOURBTCADRESS" to your login bitcoin addres in freebitco.in
    line 10		the seccond "mail" to your email addres in freebitco.in
    line 11		"pass" to your freebitco.in password
    line 12		"API_KEY" to the API Key of 9kw that your are using to submit captchas
    line 13		"temp_path" to the path where a temporal file with the captcha image will be created
					in windows this could be for example C:\tmp\ or C:\users\youruser\tmp\
					in linux /tmp/ or /home/youruser/tmp/

					remember to put the \ or the / after the path, if you don't it won't work
        
    line 14		"freebitcoin.jpg" is the name that the saved image will have, you could leave it as it
    line 22		if you want to login with your  BTC address instead of your mail, change "mail" to "btc"

	
[Firefox]:https://ftp.mozilla.org/pub/firefox/releases/56.0.2/
[Waterfox]:https://www.waterfoxproject.org/
[iMacros]:https://addons.mozilla.org/es/firefox/addon/imacros-for-firefox/versions/
[Freebitco.in-bot]:https://github.com/Darkangeel-hd/freebitco.in-Bot
[9kw]:https://www.9kw.eu/register_104519.html
[freebitcoin]:http://freebitco.in/?r=1327941
