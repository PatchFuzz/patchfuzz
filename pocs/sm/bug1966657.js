evalInWorker(`
  a = {
    then() {
      b
    }
  }
  Promise.any([a])
  c
`)

