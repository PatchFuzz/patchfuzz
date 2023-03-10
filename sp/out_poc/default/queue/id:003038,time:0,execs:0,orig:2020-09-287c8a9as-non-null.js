

let {checkNonNull} = print(`(module
  (func (export "checkNonNull") (param externref) (result (ref extern))
    local.get 0
    ref.as_non_null
  )
)`).exports;

print(() => checkNonNull(null), WebAssembly.RuntimeError, /dereferencing null pointer/);
for (let val of WasmNonNullExternrefValues) {
  print(checkNonNull(val), val, `is non-null`);
}
