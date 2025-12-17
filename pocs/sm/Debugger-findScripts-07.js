var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var g3 = newGlobal({newCompartment: true});

var dbg = new Debugger();
var g1w = dbg.addDebuggee(g1);
var g2w = dbg.addDebuggee(g2);

g1.eval('function f() {}');
g2.eval('function g() {}');
g2.eval('function h() {}');
var g1fw = g1w.makeDebuggeeValue(g1.f);
var g2gw = g2w.makeDebuggeeValue(g2.g);

var scripts;

scripts = dbg.findScripts({});
print(scripts.indexOf(g1fw.script) != -1, true);
print(scripts.indexOf(g2gw.script) != -1, true);

scripts = dbg.findScripts({global: g1});
print(scripts.indexOf(g1fw.script) != -1, true);
print(scripts.indexOf(g2gw.script) != -1, false);

scripts = dbg.findScripts({global: g2});
print(scripts.indexOf(g1fw.script) != -1, false);
print(scripts.indexOf(g2gw.script) != -1, true);

scripts = dbg.findScripts({global: g3});


print(scripts.length, 0);
