

load(libdir + "asserts.js");

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hit = false;
dbg.onExceptionUnwind = function (frame, exc) {
    
    
    assertEq(arguments.length, 2);
    assertEq(frame instanceof Debugger.Frame, true);
    if (!hit) {
        assertEq(exc, 101);
        assertEq(frame.type, "call");
        assertEq(frame.callee.name, "f");
        assertEq(frame.older.type, "eval");
        hit = true;
    }
};

g.eval("function f() { throw 101; }");
assertThrowsValue(function () { g.eval("f();"); }, 101);
assertEq(hit, true);
