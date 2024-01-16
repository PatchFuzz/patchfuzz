

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var type;
dbg.onEnterFrame = function (frame) {
    try {
        assertEq(frame instanceof Debugger.Frame, true);
        assertEq(frame.onStack, true);
        type = frame.type;
    } catch (exc) {
        type = "Exception thrown: " + exc;
    }
};

function test(f, expected) {
    type = undefined;
    f();
    assertEq(type, expected);
}


test(function () { g.eval("function h() { return 1; }"); }, "eval");


test(function () { assertEq(g.h(), 1); }, "call");


test(function () { g.evaluate("var x = 5;"); assertEq(g.x, 5); }, "global");
