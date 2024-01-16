













wasmEvalText(`(module
    (memory 1)
    (func $run (param i64) (param i32) (param i32)
        local.get 1
        local.get 2
        i32.add

        local.get 1
        local.get 2
        i32.add

        i32.const 0
        local.get 0
        i64.store8

        drop
        drop
    )
    (export "run" (func $run))
)`);
