




offThreadCompileModuleToStencil("export { x };");
assertThrowsInstanceOf(() => {
  var stencil = finishOffThreadStencil();
  instantiateModuleStencil(stencil);
}, SyntaxError);
