var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    hits++;
    print(dbg.findScripts().indexOf(dbg.getNewestFrame().script) !== -1, true);
};
gw.executeInGlobal("debugger;");
print(hits, 1);
