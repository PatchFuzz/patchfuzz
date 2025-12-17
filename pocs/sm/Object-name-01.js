var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var name;
dbg.onDebuggerStatement = function (frame) { name = frame.callee.name; };

g.eval("(function f() { debugger; })();");
print(name, "f");
g.eval("(function () { debugger; })();");
print(name, undefined);
g.eval("Function('debugger;')();");
print(name, "anonymous");
g.eval("(async function grondo() { debugger; })();");
print(name, "grondo");
g.eval("(async function* estux() { debugger; })().next();");
print(name, "estux");
