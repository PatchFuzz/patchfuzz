var g = newGlobal({newCompartment: true});
var dbg = new Debugger;
var gw = dbg.addDebuggee(g);
var arrw = gw.executeInGlobal("var arr = []; arr;").return;
var pushw = gw.executeInGlobal("var push = arr.push.bind(arr); push;").return;
print(pushw.isBoundFunction, true);
print(pushw.boundThis, arrw);
print(pushw.boundArguments.length, 0);

var arr2 = gw.executeInGlobal("var arr2 = []; arr2").return;
print(pushw.call(arr2, "tuesday").return, 1);
g.eval("print(arr.length, 1);");
g.eval("print(arr[0], 'tuesday');");
g.eval("print(arr2.length, 0);");

g.eval("push = arr.push.bind(arr, 1, 'seven', {x: 'q'});");
pushw = gw.getOwnPropertyDescriptor("push").value;
print(pushw.isBoundFunction, true);
var args = pushw.boundArguments;
print(args.length, 3);
print(args[0], 1);
print(args[1], 'seven');
print(args[2] instanceof Debugger.Object, true);
print(args[2].getOwnPropertyDescriptor("x").value, "q");
