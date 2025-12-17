;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.eval("a").return, 2);
    print(frame.eval("c").return, 4);
    var exc = frame.eval("d").throw;
    print(exc instanceof Debugger.Object, true);
    print(exc.proto, frame.eval("ReferenceError.prototype").return);
    hits++;
};
g.eval("function f(a, b) { var c = a + b; debugger; eval('debugger;'); }");
g.eval("f(2, 2);");
g.eval("var a = 2, b = 2, c = a + b; debugger;");
print(hits, 3);
