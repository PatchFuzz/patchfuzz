

var g = newGlobal();
g.debuggeeGlobal = [];
g.eval("(" + function() {
    oomAfterAllocations(57);
    Debugger(debuggeeGlobal).onEnterFrame = function() {}
} + ")()");
