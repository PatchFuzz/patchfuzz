




var a = new Date(Date.now());
a.setMilliseconds(491);
var b = new Date(a);
WScript.Echo("Date A: ",a.getMilliseconds());
WScript.Echo("Date B: ",b.getMilliseconds());
