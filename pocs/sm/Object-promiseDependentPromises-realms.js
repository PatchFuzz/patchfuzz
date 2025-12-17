let g1 = newGlobal({newCompartment: true});
let p1 = new g1.Promise((_resolve, _reject) => {});


let g2 = newGlobal({newCompartment: true});
let p2 = g2.Promise.prototype.then.call(p1, g2.eval(`value => {}`));


let dbg = new Debugger;
let g1w = dbg.addDebuggee(g1);
let g2w = dbg.addDebuggee(g2);
let dependents = g1w.makeDebuggeeValue(p1).promiseDependentPromises;
print(dependents.length, 1);
print(dependents[0], g2w.makeDebuggeeValue(p2));
