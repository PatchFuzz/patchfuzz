

evalInWorker(`
  function f() {
    f.apply([], new Array(20000));
  }
  f()
`);
