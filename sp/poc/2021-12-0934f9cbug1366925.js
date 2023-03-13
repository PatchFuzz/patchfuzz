// |jit-test| skip-if: helperThreadCount() === 0
// Avoid printing with --no-threads

// JS shell shutdown ordering

evalInWorker(`
  var lfGlobal = newGlobal();
  lfGlobal.offThreadCompileToStencil(\`{ let x; throw 42; }\`);
`);
