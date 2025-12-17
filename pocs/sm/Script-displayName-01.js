var g = newGlobal({newCompartment: true});
var dbg = Debugger(g);
var name;
dbg.onDebuggerStatement = f => { name = f.callee.script.displayName; };

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
