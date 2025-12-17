var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);
dbg.onDebuggerStatement = function(frame) {
    print(frame.eval("var x = 3; x").return, 3);
    hits++;
}
var hits = 0;
g.eval("(function() { debugger; })()");
print(hits, 1);
g.eval("(function() { var x = 4; debugger; })()");
print(hits, 2);
