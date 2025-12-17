var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var name;
dbg.onDebuggerStatement = function (frame) { name = frame.callee.displayName; };

g.eval("(function f() { debugger; })();");
print(name, "f");
g.eval("(function () { debugger; })();");
print(name, undefined);
g.eval("Function('debugger;')();");
print(name, "anonymous");
g.eval("var f = function() { debugger; }; f()");
print(name, "f");
g.eval("var a = {}; a.f = function() { debugger; }; a.f()");
print(name, "a.f");
g.eval("(async function grondo() { debugger; })();");
print(name, "grondo");
g.eval("(async function* estux() { debugger; })().next();");
print(name, "estux");
