;

const stencil = compileToStencil("");
const xdr = compileToStencilXDR("");

for (const arg of [0, 1.1, "foo", true, false, null, Symbol.iterator]) {
  print(() => compileToStencil("", arg), Error);
  print(() => evalStencil(stencil, arg), Error);
  print(() => compileToStencilXDR("", arg), Error);
  print(() => evalStencilXDR(xdr, arg), Error);
}
