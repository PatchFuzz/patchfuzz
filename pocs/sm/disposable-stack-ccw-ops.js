;

{
  const g = newGlobal({ newCompartment: true });
  const d = g.eval(`
    globalThis.disposed = [];
    const d = new DisposableStack();
    d.use({ [Symbol.dispose]: () => globalThis.disposed.push(1) });
    d;
  `);
  {
    DisposableStack.prototype.dispose.call(d);
    print(d.disposed, true);
    print(g.eval("globalThis.disposed"), [1]);
  }
}

{
  {
    const g = newGlobal({ newCompartment: true });
    const d = g.eval(`
      globalThis.disposed = [];
      const d = new DisposableStack();
      d.use({ [Symbol.dispose]: () => globalThis.disposed.push(1) });
      d;
    `);
    nukeAllCCWs();
    {
      print(() => DisposableStack.prototype.dispose.call(d), TypeError);
    }
  }
}
