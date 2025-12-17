;

const maxLine = Math.pow(2,32) - 1;

print(evaluate("saveStack().line"), 1);
print(evaluate("saveStack().line", { lineNumber: maxLine }), maxLine);
print(evaluate("\nsaveStack().line"), 2);
print(evaluate("\nsaveStack().line", { lineNumber: 1000 }), 1001);
print(() => evaluate("\nsaveStack().line", { lineNumber: maxLine }),
                       RangeError);

if (helperThreadCount() > 0) {
  offThreadCompileToStencil("saveStack().line");
  var stencil = finishOffThreadStencil();
  print(evalStencil(stencil), 1);

  offThreadCompileToStencil("saveStack().line", { lineNumber: maxLine });
  stencil = finishOffThreadStencil();
  print(evalStencil(stencil), maxLine);

  offThreadCompileToStencil("\nsaveStack().line");
  stencil = finishOffThreadStencil();
  print(evalStencil(stencil), 2);

  offThreadCompileToStencil("\nsaveStack().line", { lineNumber: 1000 });
  stencil = finishOffThreadStencil();
  print(evalStencil(stencil), 1001);

  offThreadCompileToStencil("\nsaveStack().line", { lineNumber: maxLine });
  print(() => {
    stencil = finishOffThreadStencil();
    evalStencil(stencil);
  }, RangeError);
}
