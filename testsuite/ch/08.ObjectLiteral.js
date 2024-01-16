




function write(v) { WScript.Echo(v + ""); }

function exceptToString(ee) {
    if (ee instanceof TypeError) return "TypeError";
    if (ee instanceof ReferenceError) return "ReferenceError";
    if (ee instanceof EvalError) return "EvalError";
    if (ee instanceof SyntaxError) return "SyntaxError";
    return "Unknown Error";
}

(function Test1() {
    var str = "Same name property";

        try {
        var o = { x: 10, x : 20 };
        write("o.x : " + o.x);
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
     write("Return: "  + str);
}) ();

(function Test2() {
    var str = "Same name getter";

    try {
        var o = { get x() {return "first";} , get x() {return "second";}};

        write("o.x : " + o.x);
    } catch (e) {
        write("Exception: " + str + " " + exceptToString(e));
        return;
    }
     write("Return: "  + str);
}) ();
