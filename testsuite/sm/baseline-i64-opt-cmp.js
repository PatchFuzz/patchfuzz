



wasmEvalText(
    `(module
      (func $run (param i64) (param i64) (result i64)
        block (result i64)
	  i64.const 1
          (i64.lt_s (local.get 0) (local.get 1))
	  br_if 0
	  drop
          i64.const 2
        end)
      (export "run" (func $run)))`
);
