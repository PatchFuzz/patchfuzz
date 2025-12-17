;

compileToStencil("", { fileName: "", module: true });
print(() => {
  compileToStencil("", { fileName: null, module: true });
}, Error);

if (helperThreadCount() > 0) {
  offThreadCompileModuleToStencil("", { fileName: "", module: true });
  print(() => {
    offThreadCompileModuleToStencil("", { fileName: null, module: true });
  }, Error);
}
