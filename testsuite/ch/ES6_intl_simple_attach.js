






function Run() {
    var coll = Intl.Collator();
    var numFormat = Intl.NumberFormat();
    var dttmFormat = Intl.DateTimeFormat();

    WScript.Echo('PASSED');
}

var x; 
WScript.Attach(Run);
WScript.Detach(Run);

