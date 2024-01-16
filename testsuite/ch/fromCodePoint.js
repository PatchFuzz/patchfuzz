




function f() {
    var var_0 = new Array(1024);
    for (var var_1 = 0; ; var_1 += 1024) {
        var_0[var_1] = String.fromCodePoint(var_1);
    }
}

try {
    f();
}
catch(e) {
    WScript.Echo("pass");
}
