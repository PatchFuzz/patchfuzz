

var dbgs = [];
var nonDebugGlobals = [];
var f = gc;
for (var i = 0; i < 4; i++) {
    
    var g1 = newGlobal({newCompartment: true});
    var g2 = g1.eval("newGlobal('same-compartment')");
    var dbg = Debugger(g1);
    dbg.onDebuggerStatement = function () {};

    
    g2.eval("function f() { return g() + 1; }");
    g2.g = f;
    f = g2.f;

    
    dbgs[i] = dbg;
    nonDebugGlobals[i] = g2;
}




nonDebugGlobals[nonDebugGlobals.length - 1].f();

gc();
nonDebugGlobals[0].g = function () { return 0; }
assertEq(nonDebugGlobals[nonDebugGlobals.length - 1].f(), nonDebugGlobals.length);
