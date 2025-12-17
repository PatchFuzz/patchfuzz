var dbg = new Debugger();

var g = newGlobal({newCompartment: true});
g.eval('function f(){}');
print(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
dbg.findScripts();
print(g.eval('isLazyFunction(f)'), true);

dbg.removeAllDebuggees();
relazifyFunctions();
print(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
var scripts = dbg.findScripts();
print(g.eval('isLazyFunction(f)'), true);
