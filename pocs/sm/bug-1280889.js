evalInWorker(`
  function f() {
    fullcompartmentchecks(f);
  }
  try { f(); } catch(e) {}
`);
