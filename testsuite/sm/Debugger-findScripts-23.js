



var dbg = new Debugger();

var g = newGlobal({newCompartment: true});
g.eval('function f(){}');
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.removeAllDebuggees();
relazifyFunctions();
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
var scripts = dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), true);
