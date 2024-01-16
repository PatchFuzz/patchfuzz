

load(libdir + "asserts.js");

offThreadCompileToStencil("var shouldFailToParse =");

assertThrowsInstanceOf(() => finishOffThreadStencil(), SyntaxError);
