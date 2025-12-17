offThreadCompileToStencil("Error()");
var stencil = finishOffThreadStencil();
print(!!evalStencil(stencil).stack.match(/^@<string>:1:1\n/), true);

offThreadCompileToStencil("Error()", { fileName: "candelabra", lineNumber: 6502 });
stencil = finishOffThreadStencil();
print(!!evalStencil(stencil).stack.match(/^@candelabra:6502:1\n/), true);

var element = {};
offThreadCompileToStencil("Error()"); 
stencil = finishOffThreadStencil();
evalStencil(stencil, { element });

var elementAttributeName = "molybdenum";
elementAttributeName +=
  elementAttributeName + elementAttributeName + elementAttributeName;
offThreadCompileToStencil("Error()"); 
stencil = finishOffThreadStencil();
evalStencil(stencil, {
  elementAttributeName,
});
