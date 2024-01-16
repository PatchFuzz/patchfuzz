








wasmEvalText(`
(module
 (func $run
  (drop (block (result f64)
   (drop (br_if 0 (f64.const 1) (f64.eq (f64.const 1) (f64.const 0))))
   (drop (br 0 (f64.const 2))))))
 (export "run" (func $run)))`);
