;

const g = newGlobal({ newCompartment: true });

g.eval(`
var arr = [];
`);

const dbg = new Debugger();


print(() => {
  dbg.findObjects({ class: g.Array });
}, TypeError);
print(() => {
  dbg.findObjects({ class: g.arr });
}, TypeError);
print(() => {
  dbg.findObjects({ class: null });
}, TypeError);
print(() => {
  dbg.findObjects({ class: {} });
}, TypeError);
