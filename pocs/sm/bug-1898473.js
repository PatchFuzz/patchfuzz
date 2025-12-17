evalInWorker(`
  new FinalizationRegistry(Set).register(newGlobal())
  gc()
`);
