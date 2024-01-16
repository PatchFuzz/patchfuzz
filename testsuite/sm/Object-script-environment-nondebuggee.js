

var g = newGlobal({newCompartment: true});
g.eval('function f() { return "from f"; }');

var dbg = new Debugger;
var gw = dbg.makeGlobalObjectReference(g);
var fw = gw.getOwnPropertyDescriptor('f').value;


assertEq(fw.script, null);
assertEq(fw.environment, null);


dbg.addDebuggee(g);
var fscript = fw.script;
var fenv = fw.environment;
assertEq(fscript instanceof Debugger.Script, true);
assertEq(fenv instanceof Debugger.Environment, true);


dbg.removeDebuggee(g);
assertEq(fw.script, null);
assertEq(fw.environment, null);
