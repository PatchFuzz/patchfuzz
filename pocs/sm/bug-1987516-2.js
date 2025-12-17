try {
  evalInWorker('new WeakRef(Symbol.hasInstance)');
} catch (e) {
  
  print(e.toString().includes("--no-threads"), true);
}
