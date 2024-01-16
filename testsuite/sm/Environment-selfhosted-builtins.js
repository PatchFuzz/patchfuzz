


let g = newGlobal({newCompartment: true});

let dbg = new Debugger();
let gw = dbg.addDebuggee(g);


let nativeBuiltin = gw.makeDebuggeeValue(g.Array);
assertEq(nativeBuiltin.environment, undefined);


let selfhostedBuiltin = gw.makeDebuggeeValue(g.Array.prototype[Symbol.iterator]);
assertEq(selfhostedBuiltin.environment, undefined);
