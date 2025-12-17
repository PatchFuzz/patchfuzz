function f() {
    var x = {};
    x = 0;
    var handler = {
        construct: function () {
            x;
        }
    };
    for (let i = 0; i < 1; i++)
        (function () { i });
    new Proxy(function() { }, handler);
}
f();
f();
