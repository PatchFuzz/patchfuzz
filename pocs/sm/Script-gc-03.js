var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var arr = [];
dbg.onDebuggerStatement = function (frame) { arr.push(frame.script); };
g.eval("for (var i = 0; i < 100; i++) Function('debugger;')();");
print(arr.length, 100);

gc(g);

for (var i = 0; i < arr.length; i++)
    print(arr[i].lineCount, 4);

gc();
