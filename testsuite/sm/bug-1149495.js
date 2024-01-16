try {
  offThreadCompileToStencil('Error()', { lineNumber: (4294967295)});
  var stencil = finishOffThreadStencil();
  evalStencil(stencil).stack;
} catch (e) {
  
}
