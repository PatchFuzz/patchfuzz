let g = newGlobal({newCompartment: true});
g.eval(`
  async function f() {
    debugger;
    await Promise.resolve(0);
    return 'ok';
  }
`);

let dbg = Debugger(g);
let hit = false;
dbg.onDebuggerStatement = frame => {
    frame.onPop = completion => {
        frame.onStep = () => { hit = true; };
        frame.onPop = undefined;
    };
    dbg.onDebuggerStatement = undefined;
    dbg = null;
};

g.f();
print(dbg, null);
gc();
print(hit, false);
drainJobQueue();
print(hit, true);
