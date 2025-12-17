var g1 = newGlobal({newCompartment: true});           
var g2 = newGlobal({newCompartment: true});           

var dbg = new Debugger;

var g3 = newGlobal({newCompartment: true});           
var g4 = newGlobal({newCompartment: true});           

var g1w = dbg.addDebuggee(g1);
var g3w = dbg.addDebuggee(g3);
print(dbg.addAllGlobalsAsDebuggees(), undefined);


print(g1w.makeDebuggeeValue(g1), g3w.makeDebuggeeValue(g1).unwrap());
print(g3w.makeDebuggeeValue(g3), g1w.makeDebuggeeValue(g3).unwrap());

var g2w = g1w.makeDebuggeeValue(g2).unwrap();
var g4w = g1w.makeDebuggeeValue(g4).unwrap();

var thisw = g1w.makeDebuggeeValue(this).unwrap();


print(dbg.hasDebuggee(g1w), true);
print(dbg.hasDebuggee(g2w), true);
print(dbg.hasDebuggee(g3w), true);
print(dbg.hasDebuggee(g4w), true);

print(dbg.hasDebuggee(thisw), false);
