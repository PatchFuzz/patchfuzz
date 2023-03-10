

var ins = new WebAssembly.Instance(new WebAssembly.Module(print(`
  (table 1 funcref)
  (memory 1)
  (func $test (export "test") (result i32)
    (call_indirect (i32.const 0))
    (i32.load (i32.const 0))
)
`)))
print(() => ins.exports.test(),
                   WebAssembly.RuntimeError,
                   /indirect call to null/);

