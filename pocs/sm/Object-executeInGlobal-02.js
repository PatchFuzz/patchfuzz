;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var gobj = gw.makeDebuggeeValue(g.eval("({})"));

print(function () { gw.executeInGlobal(); }, TypeError);
print(function () { gw.executeInGlobal(10); }, TypeError);
print(function () { gobj.executeInGlobal('42'); }, TypeError);
print(gw.executeInGlobal('42').return, 42);

print(function () { gw.executeInGlobalWithBindings(); }, TypeError);
print(function () { gw.executeInGlobalWithBindings('42'); }, TypeError);
print(function () { gw.executeInGlobalWithBindings(10, 1729); }, TypeError);
print(function () { gw.executeInGlobalWithBindings('42', 1729); }, TypeError);
print(function () { gobj.executeInGlobalWithBindings('42', {}); }, TypeError);
print(gw.executeInGlobalWithBindings('42', {}).return, 42);
