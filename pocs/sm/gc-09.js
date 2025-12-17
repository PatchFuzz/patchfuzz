for (var i = 0; i < 4; i++) {
    var g = newGlobal({newCompartment: true});
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function () { throw "FAIL"; };
    dbg.o = makeFinalizeObserver();
    dbg.loop = g; 
}

gc();
print(finalizeCount() > 0, true);
