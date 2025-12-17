var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var seen = new WeakMap();
var hits = 0;
dbg.onNewScript = function (s) {
    
    
    print(s instanceof Debugger.Script, true);
    print(!seen.has(s), true);
    seen.set(s, true);
    hits++;
};

dbg.uncaughtExceptionHook = function () { hits = -999; };


hits = 0;
print(g.eval("2 + 2"), 4);
print(hits, 1);

hits = 0;
print(g.eval("eval('2 + 3')"), 5);
print(hits, 2);


hits = 0;
g.evaluate("3 + 4");
print(hits, 1);


hits = 0;
var fn = g.Function("a", "return 5 + a;");
print(hits, 1);
print(fn(8), 13);
print(hits, 1);
