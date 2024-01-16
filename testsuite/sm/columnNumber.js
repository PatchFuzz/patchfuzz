

load(libdir + 'asserts.js');

assertEq(evaluate("saveStack().column"), 1);
assertEq(evaluate("saveStack().column", { columnNumber: 1729 }), 1730);
assertEq(evaluate("\nsaveStack().column", { columnNumber: 1729 }), 1);
assertEq(evaluate("saveStack().column", { columnNumber: "42" }), 43);
assertThrowsInstanceOf(() => evaluate("saveStack().column", { columnNumber: -10 }),
                       RangeError);
assertThrowsInstanceOf(() => evaluate("saveStack().column", { columnNumber: Math.pow(2,30) }),
                       RangeError);

if (helperThreadCount() > 0) {
  print("offThreadCompileToStencil 1");
  offThreadCompileToStencil("saveStack().column", { columnNumber: -10 });
  assertThrowsInstanceOf(() => {
    var stencil = finishOffThreadStencil();
    evalStencil(stencil);
  }, RangeError);

  print("offThreadCompileToStencil 2");
  offThreadCompileToStencil("saveStack().column", { columnNumber: Math.pow(2,30) });
  assertThrowsInstanceOf(() => {
    var stencil = finishOffThreadStencil();
    evalStencil();
  }, RangeError);

  print("offThreadCompileToStencil 3");
  offThreadCompileToStencil("saveStack().column", { columnNumber: 10000 });
  stencil = finishOffThreadStencil();
  assertEq(evalStencil(stencil), 10001);
}




const maxColumn = Math.pow(2, 30) - 1;
assertEq(evaluate("saveStack().column", { columnNumber: maxColumn }),
         maxColumn + 1);



assertEq(evaluate(" saveStack().column", { columnNumber: maxColumn }),
         maxColumn + 1);




assertThrowsInstanceOf(() => evaluate("function x(y,y) { 'use strict'; } x()",
                                      { columnNumber: 10 }),
                       SyntaxError);
