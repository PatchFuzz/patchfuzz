





try {
    var e = Error("123");
    e.somevalue = "xyz";
    e.stack = "abacaba";
    WScript.Echo("description = " + e.message);
    WScript.Echo("stack = " + e.stack);
    for (var p in e) {
        WScript.Echo(p + " = " + e[p]);
    }
    
    throw e;
}
catch (ex) {
    WScript.Echo("----------------------");
    WScript.Echo("description = " + e.message);
    WScript.Echo("stack = " + e.stack);
    for (var p in ex) {
        WScript.Echo(p + " = " + ex[p]);
    }
}