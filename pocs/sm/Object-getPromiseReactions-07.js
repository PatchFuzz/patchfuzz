async function f(arg) {
  await arg;

  const g = newGlobal({ sameZoneAs: {} });
  const dbg = g.Debugger({});
  const promise = dbg.getNewestFrame().asyncPromise;
  dbg.removeAllDebuggees();

  
  print(promise.getPromiseReactions().length, 0);
}

const p = f();
f(p);
