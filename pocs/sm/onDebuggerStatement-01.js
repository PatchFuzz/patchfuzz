var g = newGlobal({newCompartment: true});
g.log = '';

var dbg = Debugger(g);
dbg.onDebuggerStatement = function (stack) { g.log += '!'; };
print(g.eval("log += '1'; debugger; log += '2'; 3;"), 3);
print(g.log, '1!2');
