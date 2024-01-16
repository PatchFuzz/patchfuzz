






WScript.Echo("In Global");

eval("var inEvalFunc1 = function () { return 'inEvalFunc1'; }");

function foo() {
    var a = 10;
    var f1 = function () {
        
    }

    WScript.Echo("In function foo");

    function g() {
        return 10;
    }
    g();

    try {
        a = "asfdssd"
    }
    catch (t) {
        var s = function (a, b) {
            eval('');
            return a + b;
        }
    }
}
foo();

WScript.Attach(foo);
