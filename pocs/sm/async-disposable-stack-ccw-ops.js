;

{
  const g = newGlobal({ newCompartment: true });
  const d = g.eval(`
    globalThis.disposed = [];
    const d = new AsyncDisposableStack();
    d.use({ [Symbol.asyncDispose]: () => globalThis.disposed.push(1) });
    d;
  `);
  AsyncDisposableStack.prototype.disposeAsync.call(d);
  drainJobQueue();
  print(d.disposed, true);
  print(g.eval("globalThis.disposed"), [1]);
}

{
  const g = newGlobal({ newCompartment: true });
  const d = g.eval(`
    globalThis.disposed = [];
    const d = new AsyncDisposableStack();
    d.use({ [Symbol.asyncDispose]: () => globalThis.disposed.push(1) });
    d;
  `);
  nukeAllCCWs();
  print(() => AsyncDisposableStack.prototype.disposeAsync.call(d), TypeError);
}
