

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var seen = new WeakMap();
var hits = 0;
dbg.onNewScript = function (s) {
    
    
    assertEq(s instanceof Debugger.Script, true);
    assertEq(!seen.has(s), true);
    seen.set(s, true);
    hits++;
};

dbg.uncaughtExceptionHook = function () { hits = -999; };


hits = 0;
assertEq(g.eval("2 + 2"), 4);
assertEq(hits, 1);

hits = 0;
assertEq(g.eval("eval('2 + 3')"), 5);
assertEq(hits, 2);


hits = 0;
g.evaluate("3 + 4");
assertEq(hits, 1);


hits = 0;
var fn = g.Function("a", "return 5 + a;");
assertEq(hits, 1);
assertEq(fn(8), 13);
assertEq(hits, 1);
