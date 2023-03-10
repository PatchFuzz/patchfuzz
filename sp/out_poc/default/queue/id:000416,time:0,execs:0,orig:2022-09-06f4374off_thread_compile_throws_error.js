

;

offThreadCompileToStencil("var shouldFailToParse =");

assertThrowsInstanceOf(() => finishOffThreadStencil(), SyntaxError);
