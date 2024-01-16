


let g = newGlobal({newCompartment: true});

let dbg = new Debugger();
let gw = dbg.addDebuggee(g);


let nativeBuiltin = gw.makeDebuggeeValue(g.Array);
assertEq(nativeBuiltin.script, undefined);


let selfhostedBuiltin = gw.makeDebuggeeValue(g.Array.prototype[Symbol.iterator]);
assertEq(selfhostedBuiltin.script, undefined);
