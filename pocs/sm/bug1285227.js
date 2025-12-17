evalInWorker(`
    (new WeakMap).set(FakeDOMObject.prototype, this)
`);
