try {
  evalInWorker(`
    function a() {}
    b = function() {}
    c = new FinalizationRegistry(b);
    a(c.register(Symbol.hasInstance));
  `);
} catch (e) {
  
  print(e.toString().includes("--no-threads"), true);
}
