var g = newGlobal({newCompartment: true});
g.eval("function f(a, obj) { with (obj) return function () { return a; }; }");
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    
    
    var f1 = frame.eval("f(1, Math);").return;
    var f2 = frame.eval("f(2, Math);").return;
    print(f1.environment !== f2.environment, true);
    print(f1.object, f2.object);
    print(f1.call().return, 1);
    print(f2.call().return, 2);
    hits++;
};
g.eval("debugger;");
print(hits, 1);
