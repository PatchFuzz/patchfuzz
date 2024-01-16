



if (typeof oomAfterAllocations == "function" && helperThreadCount() > 0) {
  offThreadCompileToStencil(`
[null, "", ""].forEach(function(locales) {
try {
Intl.NumberFormat(locales)
} catch (e) {}
oomAfterAllocations(100);
})
`);
  var stencil = finishOffThreadStencil();
  evalStencil(stencil);
}
