function f() {
    var res = 0;
    for (var i=0; i<100; i++) {
        if (/a/.exec("a"))
            res++;
    }
    print(res, 100);
}
delete RegExp.prototype.test;
gc();
f();

RegExp.prototype.test = function() { print(0, 1); }
gc();
f();

Object.defineProperty(RegExp.prototype, "test", {get: function() { print(0, 1); }});
gc();
f();
