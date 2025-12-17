var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);


var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(frame.older.eval('arguments[0]').return, 'ponies');
    hits++;
};
g.eval("function g() { debugger; }");
g.eval("function f() { g(); }");
g.eval("f('ponies')");
print(hits, 1);
