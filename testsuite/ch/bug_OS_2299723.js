








function f0() {
    let x = 0;

    try {
        eval("var x = 5");
    } catch (e) {
        WScript.Echo("eval('var x = 5') threw '" + e.message + "'");
    }

    try {
        eval("x = 5");
    } catch (e) {
        WScript.Echo("unexpected error thrown: '" + e.message + "'");
    }

    WScript.Echo("x: " + x);
}



f0();

function f1() {
    const y = 1;

    try {
        eval("var y = 5");
    } catch (e) {
        WScript.Echo("eval('var y = 5') threw '" + e.message + "'");
    }

    try {
        eval("y = 5");
    } catch (e) {
        WScript.Echo("eval('y = 5') threw '" + e.message + "'");
    }

    WScript.Echo("y: " + y);
}



f1();
