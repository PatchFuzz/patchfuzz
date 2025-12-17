evalInWorker(`
  a = new WeakSet
  a.add(Symbol.hasInstance)
  gczeal(14)(0 .b)
`)
