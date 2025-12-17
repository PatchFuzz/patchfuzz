let g1 = newGlobal({newCompartment: true});
let dbg = new Debugger;
print(dbg.hasDebuggee(g1), false);

let g1w = dbg.makeGlobalObjectReference(g1);
print(dbg.hasDebuggee(g1), false);
print(g1w.unsafeDereference(), g1);
print(g1, g1w.makeDebuggeeValue(g1).unsafeDereference());

print(dbg.addDebuggee(g1w), g1w);
print(dbg.hasDebuggee(g1), true);
print(dbg.hasDebuggee(g1w), true);
print(g1w.unsafeDereference(), g1);
print(g1, g1w.makeDebuggeeValue(g1).unsafeDereference());


let g2 = newGlobal({newCompartment: true});
g2.g1 = g1;
let g2w = dbg.addDebuggee(g2);
let g2g1w = g2w.getOwnPropertyDescriptor('g1').value;
print(g2g1w !== g1w, true);
print(g2g1w.unwrap(), g1w.makeDebuggeeValue(g1));
print(dbg.makeGlobalObjectReference(g2g1w), g1w);
