

load(libdir + "asserts.js");

function test(code) {
    var g = newGlobal({newCompartment: true});
    var dbg = new Debugger(g);
    var hits = 0;
    dbg.onDebuggerStatement = function (frame) {
        var env = frame.older.environment;
        assertThrowsInstanceOf(function () { env.setVariable("y", 2); }, Error);
        hits++;
    };
    g.eval("var y = 0; function d() { debugger; }");

    assertEq(g.eval(code), 0);

    assertEq(g.y, 0);
    assertEq(hits, 1);
}


test("function f() { var x = 1; d(); return y; }  f();");


test("function h(x) { if (x) { let x = 1; d(); return y; } }  h(3);");


test("'use strict'; eval('d(); y;');");
