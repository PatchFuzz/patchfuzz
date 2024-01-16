






function Run() {
    var intl = new Intl.Collator();
    intl.compare('a','b');
    WScript.Echo('PASS');
}

WScript.Attach(Run);
