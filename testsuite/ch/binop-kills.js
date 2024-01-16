






function foo() {
    var x = 0;
    var z = x & (x = 1)
    WScript.Echo(z)
    x = 0;
    x &= (x |= 1);
    WScript.Echo(x);
}
foo();

(function () {

    var f = 5;

    x = (f * (f++));

    WScript.Echo("x = " + x);

})();

var o = new Object();
function func(b) {
    b.blah = b.blah2 = b = null;
}

func(o);


