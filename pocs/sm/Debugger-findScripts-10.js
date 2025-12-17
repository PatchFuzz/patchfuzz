var g1 = newGlobal({newCompartment: true});
g1.eval('function f(){}');

var g2 = newGlobal({newCompartment: true});
g2.eval('function g(){}');

var dbg = new Debugger(g1);
print(dbg.findScripts({global:g1}).length > 0, true);
print(dbg.findScripts({global:g2}).length, 0);
print(dbg.findScripts({global:this}).length, 0);
