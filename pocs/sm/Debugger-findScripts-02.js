var g = newGlobal({newCompartment: true});
g.eval('function f(){}');
g.eval('function g(){}');
g.eval('function h(){}');

var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var fw = gw.makeDebuggeeValue(g.f);
var gw = gw.makeDebuggeeValue(g.g);
var hw = gw.makeDebuggeeValue(g.h);

print(dbg.findScripts().indexOf(fw.script) != -1, true);
print(dbg.findScripts().indexOf(gw.script) != -1, true);
print(dbg.findScripts().indexOf(hw.script) != -1, true);
