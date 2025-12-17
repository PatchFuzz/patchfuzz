;

var g = newGlobal({newCompartment: true});
var actual = 0;
var expected = 0;

function f() {
    for (var i = 0; i < 20; i++) {
        var dbg = new Debugger(g);
        dbg.num = i;
        dbg.onExceptionUnwind = function (stack, exc) { actual += this.num; };
        expected += i;
    }
}

f();
gc();
print(function () { g.eval("throw 'fit';"); }, "fit");
print(actual, expected);
