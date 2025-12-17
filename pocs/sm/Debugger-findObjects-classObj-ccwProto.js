const g = newGlobal({ newCompartment: true });

g.OtherObject = Object;

g.eval(`
var x1 = { __proto__: OtherObject.prototype };
`);

const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

const x1DO = gDO.makeDebuggeeValue(g.x1);




const ObjectDO = gDO.makeDebuggeeValue(g.Object);
print(dbg.findObjects({ class: ObjectDO }).includes(x1DO), false);
const ObjectProtoDO = gDO.makeDebuggeeValue(g.Object.prototype);
print(dbg.findObjects({ class: ObjectProtoDO }).includes(x1DO), false);

const OtherObjectDO = gDO.makeDebuggeeValue(Object);
print(dbg.findObjects({ class: OtherObjectDO }).includes(x1DO), true);
const OtherObjectProtoDO = gDO.makeDebuggeeValue(Object.prototype);
print(dbg.findObjects({ class: OtherObjectProtoDO }).includes(x1DO), true);
