var g = newGlobal({newCompartment: true});
g.evaluate("function f(x) { return x + 1; }");
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var s = dbg.findScripts();
var fw = gw.getOwnPropertyDescriptor("f").value;
print(s.indexOf(fw.script) !== -1, true);
