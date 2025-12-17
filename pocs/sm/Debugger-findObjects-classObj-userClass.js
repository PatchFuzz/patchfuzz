const g = newGlobal({ newCompartment: true });

g.eval(`
var c1 = class C1 {
};
var c2 = class C2 extends c1 {
};

var x1 = new c1();
var x2 = new c2();
`);

const dbg = new Debugger();
const gDO = dbg.addDebuggee(g);

const x1DO = gDO.makeDebuggeeValue(g.x1);
const x2DO = gDO.makeDebuggeeValue(g.x2);


const c1DO = gDO.makeDebuggeeValue(g.c1);
print(dbg.findObjects({ class: c1DO }).includes(x1DO), true);
const c1ProtoDO = gDO.makeDebuggeeValue(g.c1.prototype);
print(dbg.findObjects({ class: c1ProtoDO }).includes(x1DO), true);

const c2DO = gDO.makeDebuggeeValue(g.c2);
print(dbg.findObjects({ class: c2DO }).includes(x2DO), true);
const c2ProtoDO = gDO.makeDebuggeeValue(g.c2.prototype);
print(dbg.findObjects({ class: c2ProtoDO }).includes(x2DO), true);


print(dbg.findObjects({ class: c1DO }).includes(x2DO), true);
print(dbg.findObjects({ class: c1ProtoDO }).includes(x2DO), true);


print(dbg.findObjects({ class: c1DO }).includes(c2ProtoDO), true);
print(dbg.findObjects({ class: c1ProtoDO }).includes(c2ProtoDO), true);


print(dbg.findObjects({ class: c1DO }).includes(c2DO), true);


print(dbg.findObjects({ class: c1ProtoDO }).includes(c2DO), false);
