;

compileToStencil("", { lineNumber: 1, module: true });
print(() => {
  compileToStencil("", { lineNumber: 0, module: true });
}, Error);

compileToStencilXDR("", { lineNumber: 1, module: true });
print(() => {
  compileToStencilXDR("", { lineNumber: 0, module: true });
}, Error);

if (helperThreadCount() > 0) {
  offThreadCompileModuleToStencil("", { lineNumber: 1, module: true });
  print(() => {
    offThreadCompileModuleToStencil("", { lineNumber: 0, module: true });
  }, Error);
}
