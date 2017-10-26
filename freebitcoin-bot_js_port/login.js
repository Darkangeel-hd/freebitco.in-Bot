var login_iim;

login_iim = "CODE:"

//we need to load this part from config file

login_iim += "'Used when login-in by mail'" + "\n";
login_iim += "SET mail mail" + "\n";
login_iim += "'The password of your freebetco.in account'" + "\n";
login_iim += "SET pw pass" + "\n";


login_iim += "'Login in'" + "\n";
login_iim += "TAG POS=1 TYPE=A ATTR=TXT:LOGIN" + "\n";
login_iim += "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login_form ATTR=ID:login_form_btc_address CONTENT={{mail}}" + "\n";
login_iim += "SET !ENCRYPTION NO" + "\n";
login_iim += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login_form ATTR=ID:login_form_password CONTENT={{pw}}" + "\n";
login_iim += "TAG POS=1 TYPE=BUTTON ATTR=ID:login_button" + "\n";
login_iim += "WAIT SECONDS=5" + "\n";
login_iim += "" + "\n";
login_iim += "" + "\n";
login_iim += "'Wait a random number (1 to 5) of seconds" + "\n";
login_iim += "SET WAIT_TM_0 EVAL(\"Math.floor(Math.random()*5 + 1);\")" + "\n";
login_iim += "WAIT SECONDS={{WAIT_TM_0}}" + "\n";
iimPlay(login_iim);

