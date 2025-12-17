var g1 = newGlobal({newCompartment: true});
g1.eval("var g2 = newGlobal('same-compartment')");
var g2 = g1.g2;
g1.eval("function f() { debugger; g2.g(); }");
g2.eval("function g() { debugger; }");

var log;
var dbg = new Debugger;
dbg.onDebuggerStatement = function (frame) { log += frame.callee.name; };


log = '';
g1.f();
print(log, '');


var g1w = dbg.addDebuggee(g1);
log = '';
g1.f();
print(log, 'f');


dbg.addDebuggee(g2);
log = '';
g1.f();
print(log, 'fg');


print(dbg.removeDebuggee(g1w), undefined);
log = '';
g1.f();
print(log, 'g');
