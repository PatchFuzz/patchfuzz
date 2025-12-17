;

offThreadCompileToStencil("var shouldFailToParse =");

print(() => finishOffThreadStencil(), SyntaxError);
