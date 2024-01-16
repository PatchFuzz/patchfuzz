











var g1 = newGlobal({newCompartment: true});
g1.eval('function f() { return "from f"; }');
g1.eval('function g() { return "from g"; }');
g1.eval('this.h = f.bind(g, 42, "foo");');


var g2 = newGlobal({newCompartment: true});
var dbg = new Debugger;
var g2w = dbg.addDebuggee(g2);
g2.f = g1.f;
g2.g = g1.g;
g2.h = g1.h;





var fDO = g2w.getOwnPropertyDescriptor('f').value;
assertEq(fDO.unwrap().class, "Function");
assertEq(fDO.unwrap().script, null);


var gDO = g2w.getOwnPropertyDescriptor('g').value;
assertEq(gDO.unwrap().parameterNames, undefined);


var hDO = g2w.getOwnPropertyDescriptor('h').value;
assertEq(hDO.unwrap().class, "BoundFunctionObject");
assertEq(hDO.unwrap().isBoundFunction, true);
assertEq(hDO.unwrap().isArrowFunction, undefined);
assertEq(hDO.unwrap().boundTargetFunction, undefined);
assertEq(hDO.unwrap().boundThis, undefined);
assertEq(hDO.unwrap().boundArguments, undefined);


dbg.addDebuggee(g1);
assertEq(fDO.unwrap().script instanceof Debugger.Script, true);
assertEq(gDO.unwrap().parameterNames instanceof Array, true);
assertEq(hDO.unwrap().isBoundFunction, true);
assertEq(hDO.unwrap().isArrowFunction, undefined);
assertEq(hDO.unwrap().boundTargetFunction, fDO.unwrap());
assertEq(hDO.unwrap().boundThis, gDO.unwrap());
assertEq(hDO.unwrap().boundArguments.length, 2);
assertEq(hDO.unwrap().boundArguments[0], 42);
assertEq(hDO.unwrap().boundArguments[1], "foo");
