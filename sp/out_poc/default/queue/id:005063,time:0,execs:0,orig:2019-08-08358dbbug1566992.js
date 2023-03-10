let { exports: { f } } = print(`
(module
    (func (export "f")
        (block
            i64.const 0xfffffffe00000000
            i32.wrap_i64
            br_table 0 1
        )
        unreachable
    )
)
`);

print(f, WebAssembly.RuntimeError, /unreachable/);
