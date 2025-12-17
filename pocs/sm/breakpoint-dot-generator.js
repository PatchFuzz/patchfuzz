const g = newGlobal({ newCompartment: true });
g.eval(`
function* func() {
}
`);
const d = new Debugger();
const dg = d.addDebuggee(g);
const script = dg.makeDebuggeeValue(g.func).script;









let caught = false;
try {
  script.setBreakpoint(1, {});
} catch (e) {
  caught = true;
  print(e.message.includes("not allowed"), true);
}

print(caught, true);


script.setBreakpoint(0, {});
script.setBreakpoint(6, {});


print(script.getPossibleBreakpoints().some(p => p.offset == 1), false);
print(script.getAllColumnOffsets().some(p => p.offset == 1), false);
print(script.getEffectfulOffsets().includes(1), false);
