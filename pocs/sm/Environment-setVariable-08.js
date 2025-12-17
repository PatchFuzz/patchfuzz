;

function test(code) {
    var g = newGlobal({newCompartment: true});
    var dbg = new Debugger(g);
    var hits = 0;
    dbg.onDebuggerStatement = function (frame) {
        var env = frame.older.environment;
        print(function () { env.setVariable("y", 2); }, Error);
        hits++;
    };
    g.eval("var y = 0; function d() { debugger; }");

    print(g.eval(code), 0);

    print(g.y, 0);
    print(hits, 1);
}


test("function f() { var x = 1; d(); return y; }  f();");


test("function h(x) { if (x) { let x = 1; d(); return y; } }  h(3);");


test("'use strict'; eval('d(); y;');");
