var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var log;

g.eval('function f() { return function g() { return function h() { return "Squee!"; } } }');
var fw = gw.makeDebuggeeValue(g.f);
var gw = gw.makeDebuggeeValue(g.f());
var hw = gw.makeDebuggeeValue(g.f()());

print(fw.script != gw.script, true);
print(fw.script != hw.script, true);

var scripts = dbg.findScripts();
print(scripts.indexOf(fw.script) != -1, true);
print(scripts.indexOf(gw.script) != -1, true);
print(scripts.indexOf(hw.script) != -1, true);
