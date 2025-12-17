evalInWorker(`
  let b = new WeakRef(Symbol.hasInstance);
  b.deref();
`);
