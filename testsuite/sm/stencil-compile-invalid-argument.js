


load(libdir + "asserts.js");

const stencil = compileToStencil("");
const xdr = compileToStencilXDR("");

for (const arg of [0, 1.1, "foo", true, false, null, Symbol.iterator]) {
  assertThrowsInstanceOf(() => compileToStencil("", arg), Error);
  assertThrowsInstanceOf(() => evalStencil(stencil, arg), Error);
  assertThrowsInstanceOf(() => compileToStencilXDR("", arg), Error);
  assertThrowsInstanceOf(() => evalStencilXDR(xdr, arg), Error);
}
