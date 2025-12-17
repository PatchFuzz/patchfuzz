var g = newGlobal({newCompartment: true});
var calls = 0;

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) {
    calls++;
    debugger;
};

print(g.eval("debugger; 7;"), 7);
print(calls, 1);
