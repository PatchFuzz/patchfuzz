var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);

g.evaluate(`
  var x = 42;
  let y = "foo"
`);

var globalLexical = gw.asEnvironment();
print(globalLexical.names().length, 1);
print(globalLexical.getVariable("y"), "foo");
print(globalLexical.parent.getVariable("x"), 42);
