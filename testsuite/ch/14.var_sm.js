




"use strict";

function write(v) { WScript.Echo(v + ""); }

function exceptToString(ee) {
    if (ee instanceof TypeError) return "TypeError";
    if (ee instanceof ReferenceError) return "ReferenceError";
    if (ee instanceof EvalError) return "EvalError";
    if (ee instanceof SyntaxError) return "SyntaxError";
    return "Unknown Error";
}

(function Test1() {
    var str = "var named eval";
    
    try {
        eval("var eval;");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test2() {
    var str = "var named eval inital value";
    
    try {
        eval("var eval = 10;");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test3() {
    var str = "var named arguments";
    
    try {
        eval("var arguments;");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test4() {
    var str = "var named arguments inital value";
    
    try {
        eval("var arguments = 10;");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();