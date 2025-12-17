const g = newGlobal({ newCompartment: true });

g.eval(`
var x1 = {};
var x2 = { __proto__: null };
`);

const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

const x1DO = gDO.makeDebuggeeValue(g.x1);
const x2DO = gDO.makeDebuggeeValue(g.x2);


const ObjectDO = gDO.makeDebuggeeValue(g.Object);
print(dbg.findObjects({ class: ObjectDO }).includes(x1DO), true);


print(dbg.findObjects({ class: ObjectDO }).includes(x2DO), false);
