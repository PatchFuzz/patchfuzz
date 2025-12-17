var g = newGlobal({newCompartment: true});
var dbg = new Debugger();
var gw = dbg.addDebuggee(g);
var expr = "function f() { return this; }; var bf = f.bind(1, 2).bind(3, 4); bf";
var bfw = gw.executeInGlobal(expr).return;

print(bfw.isBoundFunction, true);
print(bfw.boundThis, 3);
var args = bfw.boundArguments;
print(args.length, 1);
print(args[0], 4);

print(bfw.boundTargetFunction.isBoundFunction, true);
print(bfw.boundTargetFunction.boundThis, 1);
args = bfw.boundTargetFunction.boundArguments;
print(args.length, 1);
print(args[0], 2);
