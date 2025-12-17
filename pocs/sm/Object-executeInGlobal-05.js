;

var dbg = new Debugger();

var g1 = newGlobal({newCompartment: true});
var dg1 = dbg.addDebuggee(g1);

var g2 = newGlobal({newCompartment: true});
var dg2 = dbg.addDebuggee(g2);


var dg1wg2 = dg1.makeDebuggeeValue(g2);
print(dg1wg2.unwrap(), dg2.makeDebuggeeValue(g2));
print(function () { dg1wg2.executeInGlobal('1'); }, TypeError);
print(function () { dg1wg2.executeInGlobalWithBindings('x', { x: 1 }); }, TypeError);


print(dg1.executeInGlobal('1729').return, 1729);
print(dg1.executeInGlobalWithBindings('x', { x: 1729 }).return, 1729);
