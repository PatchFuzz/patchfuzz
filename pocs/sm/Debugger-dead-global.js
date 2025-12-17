var g1 = newGlobal({newCompartment: true});

const dbg = new Debugger();

function print(f) {
  let caught = false;
  try {
    f();
  } catch (e) {
    print(e.message, "can't access dead object");
    caught = true;
  }
  print(caught, true);
}

nukeAllCCWs();


print(() => dbg.addDebuggee(g1));
print(() => dbg.removeDebuggee(g1));
print(() => dbg.findScripts({global: g1}));
print(() => dbg.makeGlobalObjectReference(g1));
print(() => dbg.enableAsyncStack(g1));
print(() => dbg.disableAsyncStack(g1));
print(() => dbg.enableUnlimitedStacksCapturing(g1));
print(() => dbg.disableUnlimitedStacksCapturing(g1));
