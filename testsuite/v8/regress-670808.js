



var sym = Symbol();
function asm(stdlib, ffi) {
  "use asm";
  var get_sym = ffi.get_sym;
  function crash() {
    get_sym()|0;
  }
  return {crash: crash};
}
function get_sym() {
  return sym;
}
try {
  asm(null, {get_sym: get_sym}).crash();
} catch (e) {
  if (!(e instanceof TypeError))
    throw e;
}
