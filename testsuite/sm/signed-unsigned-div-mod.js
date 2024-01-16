




assertEq(wasmEvalText(
    `(module
      (func (result i32)
       (i32.const -1)
       (i32.const 0)
       i32.shr_u
       (i32.const 10000)
       i32.rem_s)
      (export "f" (func 0)))`).exports.f(), -1);



wasmAssert(
    `(module
      (func $run (result i64)
       (i64.const -1)
       (i64.const 0)
       i64.shr_u
       (i64.const 10000)
       i64.rem_s)
     )`, [{type:'i64', expected:'0xffffffffffffffff', func:'$run'}]);




assertEq(wasmEvalText(
    `(module
      (func (result i32)
       (i32.const -1)
       (i32.const 0)
       i32.shl
       (i32.const 10000)
       i32.rem_u)
      (export "f" (func 0)))`).exports.f(), 7295);




assertEq(wasmEvalText(
    `(module
      (func (result i32)
       (i32.const 0x80000000)
       (i32.const 0)
       i32.shr_u
       (i32.const 10000)
       i32.div_s)
      (export "f" (func 0)))`).exports.f(), -214748);

assertEq(wasmEvalText(
    `(module
      (func (result i32)
       (i32.const 0x80000000)
       (i32.const 0)
       i32.shr_u
       (i32.const -10000)
       i32.div_s)
      (export "f" (func 0)))`).exports.f(), 214748);



assertEq(wasmEvalText(
    `(module
      (func (result i32)
       (i32.const 0x80000000)
       (i32.const 0)
       i32.shr_u
       (i32.const 10000)
       i32.div_u)
      (export "f" (func 0)))`).exports.f(), 214748);

