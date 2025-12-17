offThreadCompileModuleToStencil("export { x };");
print(() => {
  var stencil = finishOffThreadStencil();
  instantiateModuleStencil(stencil);
}, SyntaxError);
