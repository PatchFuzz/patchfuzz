verifyprebarriers()
evalInWorker(`
  Object.defineProperty(this, "x", {});
`);
