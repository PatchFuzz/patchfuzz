




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
    var str = "Property named eval";

    try {
        eval("var o = { set x(eval) { this.value = eval;}, get x() { return this.value;} };");

        o.x = 10;
        write("o.x : " + o.x);
        write("o.value : " + o.value);
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
     write("Return: "  + str);
}) ();

(function Test2() {
    var str = "Property named arguments";

    try {
        eval("var o = { set x(arguments) { this.value = arguments;}, get x() { return this.value;} };");

        o.x = 10;
        write("o.x : " + o.x);
        write("o.value : " + o.value);
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
     write("Return: "  + str);
}) ();