




WScript.SetTimeout(function() {
    WScript.Echo("OK");
}, 10);
WScript.SetTimeout(function() {
    this.is.an.exception = null;
}, 100);
