;

print(evaluate("saveStack().column"), 1);
print(evaluate("saveStack().column", { columnNumber: 1729 }), 1729);
print(evaluate("\nsaveStack().column", { columnNumber: 1729 }), 1);
print(evaluate("saveStack().column", { columnNumber: "42" }), 42);

print(evaluate("saveStack().column", { columnNumber: -10 }), 1);
print(() => evaluate("saveStack().column", { columnNumber: Math.pow(2,30) }),
                       RangeError);

if (helperThreadCount() > 0) {
  print("offThreadCompileToStencil 1");
  offThreadCompileToStencil("saveStack().column", { columnNumber: -10 });
  var stencil = finishOffThreadStencil();
  print(evalStencil(stencil), 1);

  print("offThreadCompileToStencil 2");
  offThreadCompileToStencil("saveStack().column", { columnNumber: Math.pow(2,30) });
  print(() => {
    var stencil = finishOffThreadStencil();
    evalStencil();
  }, RangeError);

  print("offThreadCompileToStencil 3");
  offThreadCompileToStencil("saveStack().column", { columnNumber: 10000 });
  stencil = finishOffThreadStencil();
  print(evalStencil(stencil), 10000);
}




const maxColumn = Math.pow(2, 30) - 2;
print(evaluate("saveStack().column", { columnNumber: maxColumn }),
         maxColumn);



print(evaluate(" saveStack().column", { columnNumber: maxColumn }),
         maxColumn + 1);




print(() => evaluate("function x(y,y) { 'use strict'; } x()",
                                      { columnNumber: 10 }),
                       SyntaxError);
