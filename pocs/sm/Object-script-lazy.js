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
print(fDO.unwrap().class, "Function");
print(fDO.unwrap().script, null);


var gDO = g2w.getOwnPropertyDescriptor('g').value;
print(gDO.unwrap().parameterNames, undefined);


var hDO = g2w.getOwnPropertyDescriptor('h').value;
print(hDO.unwrap().class, "BoundFunctionObject");
print(hDO.unwrap().isBoundFunction, true);
print(hDO.unwrap().isArrowFunction, undefined);
print(hDO.unwrap().boundTargetFunction, undefined);
print(hDO.unwrap().boundThis, undefined);
print(hDO.unwrap().boundArguments, undefined);


dbg.addDebuggee(g1);
print(fDO.unwrap().script instanceof Debugger.Script, true);
print(gDO.unwrap().parameterNames instanceof Array, true);
print(hDO.unwrap().isBoundFunction, true);
print(hDO.unwrap().isArrowFunction, undefined);
print(hDO.unwrap().boundTargetFunction, fDO.unwrap());
print(hDO.unwrap().boundThis, gDO.unwrap());
print(hDO.unwrap().boundArguments.length, 2);
print(hDO.unwrap().boundArguments[0], 42);
print(hDO.unwrap().boundArguments[1], "foo");
