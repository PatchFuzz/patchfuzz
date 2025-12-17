var N = 12;

var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var wrappers = [];

dbg.onDebuggerStatement = function (frame) { wrappers.push(frame.arguments[0]); };
g.eval("var originals = []; function f(x) { originals.push(x); debugger; }");
for (var i = 0; i < N; i++)
    g.eval("f({});");
print(wrappers.length, N);

for (var i = 0; i < N; i++)
    for (var j = i + 1; j < N; j++)
        print(wrappers[i] === wrappers[j], false);

gc();

dbg.onDebuggerStatement = function (frame) { print(frame.arguments[0], wrappers.pop()); };
g.eval("function h(x) { debugger; }");
for (var i = 0; i < N; i++)
    g.eval("h(originals.pop());");
print(wrappers.length, 0);
