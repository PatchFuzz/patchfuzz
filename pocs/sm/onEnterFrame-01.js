var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var type;
dbg.onEnterFrame = function (frame) {
    try {
        print(frame instanceof Debugger.Frame, true);
        print(frame.onStack, true);
        type = frame.type;
    } catch (exc) {
        type = "Exception thrown: " + exc;
    }
};

function test(f, expected) {
    type = undefined;
    f();
    print(type, expected);
}


test(function () { g.eval("function h() { return 1; }"); }, "eval");


test(function () { print(g.h(), 1); }, "call");


test(function () { g.evaluate("var x = 5;"); print(g.x, 5); }, "global");
