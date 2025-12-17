var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var arr = [];
dbg.onDebuggerStatement = function (frame) { arr.push(frame.script); };
g.eval("for (var i = 0; i < 10; i++) Function('debugger;')();");
print(arr.length, 10);

gc();

for (var i = 0; i < arr.length; i++)
    print(arr[i].lineCount, 4);

