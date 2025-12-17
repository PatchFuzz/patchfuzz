;

offThreadCompileToStencil('Math.sin(Math.PI/2)');
var stencil = finishOffThreadStencil();
print(evalStencil(stencil), 1);

offThreadCompileToStencil('a string which cannot be reduced to the start symbol');
print(() => {
  var stencil = finishOffThreadStencil();
  evalStencil(stencil);
}, SyntaxError);

offThreadCompileToStencil('smerg;');
print(() => {
  var stencil = finishOffThreadStencil();
  evalStencil(stencil);
}, ReferenceError);

offThreadCompileToStencil('throw "blerg";');
print(() => {
  var stencil = finishOffThreadStencil();
  evalStencil(stencil);
}, 'blerg');
