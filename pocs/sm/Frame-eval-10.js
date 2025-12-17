var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var hits = 0;
dbg.onDebuggerStatement = function (frame) {
    if (hits++ === 0)
        print(frame.eval("debugger;"), null);
    else
        return null;
};
print(g.eval("debugger; 'ok';"), "ok");
print(hits, 2);
