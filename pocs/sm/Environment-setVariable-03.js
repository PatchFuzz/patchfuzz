;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    print(function () { frame.environment.setVariable("x", 7); }, TypeError);
    hits++;
};
g.eval("debugger");
print("x" in g, false);
print(hits, 1);

