var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    var offs = frame.script.getLineOffsets(g.line0 + 2);
    print(Array.isArray(offs), true);
    print(offs.length, 0);
    hits++;
};
g.eval("var line0 = Error().lineNumber; debugger;");
print(hits, 1);
