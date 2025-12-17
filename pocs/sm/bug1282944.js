evaluate(`
offThreadCompileToStencil("var x = -1");
var stencil = finishOffThreadStencil();
evalStencil(stencil);
`,
         { global: newGlobal() });



for (var i = 0; i < 1000; ++i) {
  offThreadCompileToStencil('var x = ' + i);
  var stencil = finishOffThreadStencil();
  evalStencil(stencil);
}
