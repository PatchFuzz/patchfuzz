var g = newGlobal({newCompartment: true});
g.eval('function f() { return "from f"; }');

var dbg = new Debugger;
var gw = dbg.makeGlobalObjectReference(g);
var fw = gw.getOwnPropertyDescriptor('f').value;


print(fw.script, null);
print(fw.environment, null);


dbg.addDebuggee(g);
var fscript = fw.script;
var fenv = fw.environment;
print(fscript instanceof Debugger.Script, true);
print(fenv instanceof Debugger.Environment, true);


dbg.removeDebuggee(g);
print(fw.script, null);
print(fw.environment, null);
