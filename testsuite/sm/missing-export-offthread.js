

load(libdir + "asserts.js")


offThreadCompileModuleToStencil("export { x };");
assertThrowsInstanceOf(() => {
  var stencil = finishOffThreadStencil();
  instantiateModuleStencil(stencil);
}, SyntaxError);
