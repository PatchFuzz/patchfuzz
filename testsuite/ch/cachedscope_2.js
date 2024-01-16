




function f() {
    var x = { y: 0 };
    g.escape();
    function g() {
        return eval('x.y');
    }
}

var foo;
Function.prototype.escape = function () { foo = this; }

f();
if (foo() === 0) {
    WScript.Echo('pass');
}
