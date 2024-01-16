






for (var i = 0; i < 4; i++) {
    var g = newGlobal({newCompartment: true});
    var dbg = new Debugger(g);
    dbg.onDebuggerStatement = function () { throw "FAIL"; };
    dbg.o = makeFinalizeObserver();
}

gc();
assertEq(finalizeCount() > 0, true);
