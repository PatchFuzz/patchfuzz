const g = newGlobal({ newCompartment: true });

g.eval(`
var x1 = new Proxy({}, {});
`);

const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

const x1DO = gDO.makeDebuggeeValue(g.x1);


const ProxyDO = gDO.makeDebuggeeValue(g.Proxy);
print(dbg.findObjects({ class: ProxyDO }).includes(x1DO), false);
const ObjectDO = gDO.makeDebuggeeValue(g.Object);
print(dbg.findObjects({ class: ObjectDO }).includes(x1DO), false);
