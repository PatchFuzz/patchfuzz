const g = newGlobal({ newCompartment: true });

g.eval(`
var arr = [];
`);

const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

const arrDO = gDO.makeDebuggeeValue(g.arr);


const ArrayDO = gDO.makeDebuggeeValue(g.Array);
print(dbg.findObjects({ class: ArrayDO }).includes(arrDO), true);
const ArrayProtoDO = gDO.makeDebuggeeValue(g.Array.prototype);
print(dbg.findObjects({ class: ArrayProtoDO }).includes(arrDO), true);


const ObjectDO = gDO.makeDebuggeeValue(g.Object);
print(dbg.findObjects({ class: ObjectDO }).includes(arrDO), true);
const ObjectProtoDO = gDO.makeDebuggeeValue(g.Object.prototype);
print(dbg.findObjects({ class: ObjectProtoDO }).includes(arrDO), true);


const RegExpDO = gDO.makeDebuggeeValue(g.RegExp);
print(dbg.findObjects({ class: RegExpDO }).includes(arrDO), false);
const RegExpProtoDO = gDO.makeDebuggeeValue(g.RegExp.prototype);
print(dbg.findObjects({ class: RegExpProtoDO }).includes(arrDO), false);


print(dbg.findObjects({ class: arrDO }).includes(arrDO), false);


const OtherArrayDO = gDO.makeDebuggeeValue(Array);
print(dbg.findObjects({ class: OtherArrayDO }).includes(arrDO), false);
const OtherArrayProtoDO = gDO.makeDebuggeeValue(Array.prototype);
print(dbg.findObjects({ class: OtherArrayProtoDO }).includes(arrDO), false);
