var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var fw = gw.executeInGlobal("function f() {}; f").return;
print(fw.isBoundFunction, false);
print(fw.boundThis, undefined);
print(fw.boundArguments, undefined);
print(fw.boundTargetFunction, undefined);

var nw = gw.executeInGlobal("var n = Math.max; n").return;
print(nw.isBoundFunction, false);
print(nw.boundThis, undefined);
print(fw.boundArguments, undefined);
print(nw.boundTargetFunction, undefined);

var ow = gw.executeInGlobal("var o = {}; o").return;
print(ow.isBoundFunction, false);
print(ow.boundThis, undefined);
print(fw.boundArguments, undefined);
print(ow.boundTargetFunction, undefined);
