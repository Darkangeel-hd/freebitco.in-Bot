# freebitco.in-Bot
A bot for auto-clicking in freebitco.in


To use this Script you need the following:

* Firefox:						[Firefox]
* iMacros for firefox:			[iMacros]
* This script
* An account in 9kw.eu:			[9kw]	
* An account in freebitco.in:	[freebitcoin]


    the difference between base.iim and base.iim is that base.iim logouts
    you after every roll and the next hour will log in and roll another time
    while base2.imm will log in but not logout


To use the macros you have to edit these parts of the code:
```imacros
SET url http://freebitco.in/?r=1327941
SET btc YOURBTCADRESS
SET mail mail
SET pw pass
SET apikey API_KEY
SET path ruta_al_directorio_temporal
SET file freebitcoin.jpg
```
and
```
TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:login_form_btc_address CONTENT={{mail}}
```

you should change that to the following:

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

	
[Firefox]:https://www.mozilla.org/en-US/firefox/all/
[iMacros]:https://addons.mozilla.org/es/firefox/addon/imacros-for-firefox/
[9kw]:https://www.9kw.eu
[freebitcoin]:http://freebitco.in/?r=1327941
