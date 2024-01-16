




evalInWorker(`
  var lfGlobal = newGlobal();
  lfGlobal.offThreadCompileToStencil(\`{ let x; throw 42; }\`);
`);
