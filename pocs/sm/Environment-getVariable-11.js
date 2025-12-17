var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var a = frame.environment.parent.getVariable('Math');
    print(a instanceof Debugger.Object, true);
    var b = gw.getOwnPropertyDescriptor('Math').value;
    print(a, b);
    hits++;
};
g.eval("debugger;");
print(hits, 1);
