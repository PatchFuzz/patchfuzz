

load(libdir + "asserts.js");

function asmCompile() {
  var f = Function.apply(null, arguments);
  return f;
}
var code = asmCompile('glob', 'imp', 'b', `
"use asm";
function f(i,j) {
  i=i|0;
  j=j|0;
}
return f
`);
let g80 = newGlobal({newCompartment: true});

assertThrowsInstanceOf(() => g80.compileToStencilXDR(code, {}), g80.Error);