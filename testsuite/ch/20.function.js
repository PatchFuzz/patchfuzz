




function write(v) { WScript.Echo(v + ""); }

function exceptToString(ee) {
    if (ee instanceof TypeError) return "TypeError";
    if (ee instanceof ReferenceError) return "ReferenceError";
    if (ee instanceof EvalError) return "EvalError";
    if (ee instanceof SyntaxError) return "SyntaxError";
    return "Unknown Error";
}

(function Test1() {
    var str = "function named 'arguments'";
        
    try {
        eval("function arguments() {}");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();

(function Test2() {
    var str = "function named 'eval'";
        
    try {
        eval("function eval() {}");
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
    write("Return: " + str);
})();