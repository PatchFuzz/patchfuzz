




let $0 = instantiate(`(module
  ;; Auxiliary definitions
  (func $$const-i32 (result i32) (i32.const 0x132))
  (func $$const-i64 (result i64) (i64.const 0x164))
  (func $$const-f32 (result f32) (f32.const 0xf32))
  (func $$const-f64 (result f64) (f64.const 0xf64))
  (func $$const-i32-i64 (result i32 i64) (i32.const 0x132) (i64.const 0x164))

  (func $$id-i32 (param i32) (result i32) (local.get 0))
  (func $$id-i64 (param i64) (result i64) (local.get 0))
  (func $$id-f32 (param f32) (result f32) (local.get 0))
  (func $$id-f64 (param f64) (result f64) (local.get 0))
  (func $$id-i32-f64 (param i32 f64) (result i32 f64)
    (local.get 0) (local.get 1)
  )

  (func $$swap-i32-i32 (param i32 i32) (result i32 i32)
    (local.get 1) (local.get 0)
  )
  (func $$swap-f32-f64 (param f32 f64) (result f64 f32)
    (local.get 1) (local.get 0)
  )
  (func $$swap-f64-i32 (param f64 i32) (result i32 f64)
    (local.get 1) (local.get 0)
  )

  (func $$f32-i32 (param f32 i32) (result i32) (local.get 1))
  (func $$i32-i64 (param i32 i64) (result i64) (local.get 1))
  (func $$f64-f32 (param f64 f32) (result f32) (local.get 1))
  (func $$i64-f64 (param i64 f64) (result f64) (local.get 1))

  ;; Typing

  (func (export "type-i32") (result i32) (call $$const-i32))
  (func (export "type-i64") (result i64) (call $$const-i64))
  (func (export "type-f32") (result f32) (call $$const-f32))
  (func (export "type-f64") (result f64) (call $$const-f64))
  (func (export "type-i32-i64") (result i32 i64) (call $$const-i32-i64))

  (func (export "type-first-i32") (result i32) (call $$id-i32 (i32.const 32)))
  (func (export "type-first-i64") (result i64) (call $$id-i64 (i64.const 64)))
  (func (export "type-first-f32") (result f32) (call $$id-f32 (f32.const 1.32)))
  (func (export "type-first-f64") (result f64) (call $$id-f64 (f64.const 1.64)))

  (func (export "type-second-i32") (result i32)
    (call $$f32-i32 (f32.const 32.1) (i32.const 32))
  )
  (func (export "type-second-i64") (result i64)
    (call $$i32-i64 (i32.const 32) (i64.const 64))
  )
  (func (export "type-second-f32") (result f32)
    (call $$f64-f32 (f64.const 64) (f32.const 32))
  )
  (func (export "type-second-f64") (result f64)
    (call $$i64-f64 (i64.const 64) (f64.const 64.1))
  )

  (func (export "type-all-i32-f64") (result i32 f64)
    (call $$id-i32-f64 (i32.const 32) (f64.const 1.64))
  )
  (func (export "type-all-i32-i32") (result i32 i32)
    (call $$swap-i32-i32 (i32.const 1) (i32.const 2))
  )
  (func (export "type-all-f32-f64") (result f64 f32)
    (call $$swap-f32-f64 (f32.const 1) (f64.const 2))
  )
  (func (export "type-all-f64-i32") (result i32 f64)
    (call $$swap-f64-i32 (f64.const 1) (i32.const 2))
  )

  ;; Composition

  (func (export "as-binary-all-operands") (result i32)
    (i32.add (call $$swap-i32-i32 (i32.const 3) (i32.const 4)))
  )

  (func (export "as-mixed-operands") (result i32)
    (call $$swap-i32-i32 (i32.const 3) (i32.const 4))
    (i32.const 5)
    (i32.add)
    (i32.mul)
  )

  (func (export "as-call-all-operands") (result i32 i32)
    (call $$swap-i32-i32 (call $$swap-i32-i32 (i32.const 3) (i32.const 4)))
  )

  ;; Recursion

  (func $$fac (export "fac") (param i64) (result i64)
    (if (result i64) (i64.eqz (local.get 0))
      (then (i64.const 1))
      (else
        (i64.mul
          (local.get 0)
          (call $$fac (i64.sub (local.get 0) (i64.const 1)))
        )
      )
    )
  )

  (func $$fac-acc (export "fac-acc") (param i64 i64) (result i64)
    (if (result i64) (i64.eqz (local.get 0))
      (then (local.get 1))
      (else
        (call $$fac-acc
          (i64.sub (local.get 0) (i64.const 1))
          (i64.mul (local.get 0) (local.get 1))
        )
      )
    )
  )

  (func $$fib (export "fib") (param i64) (result i64)
    (if (result i64) (i64.le_u (local.get 0) (i64.const 1))
      (then (i64.const 1))
      (else
        (i64.add
          (call $$fib (i64.sub (local.get 0) (i64.const 2)))
          (call $$fib (i64.sub (local.get 0) (i64.const 1)))
        )
      )
    )
  )

  (func $$even (export "even") (param i64) (result i32)
    (if (result i32) (i64.eqz (local.get 0))
      (then (i32.const 44))
      (else (call $$odd (i64.sub (local.get 0) (i64.const 1))))
    )
  )
  (func $$odd (export "odd") (param i64) (result i32)
    (if (result i32) (i64.eqz (local.get 0))
      (then (i32.const 99))
      (else (call $$even (i64.sub (local.get 0) (i64.const 1))))
    )
  )

  ;; Stack exhaustion

  ;; Implementations are required to have every call consume some abstract
  ;; resource towards exhausting some abstract finite limit, such that
  ;; infinitely recursive test cases reliably trap in finite time. This is
  ;; because otherwise applications could come to depend on it on those
  ;; implementations and be incompatible with implementations that don't do
  ;; it (or don't do it under the same circumstances).

  (func $$runaway (export "runaway") (call $$runaway))

  (func $$mutual-runaway1 (export "mutual-runaway") (call $$mutual-runaway2))
  (func $$mutual-runaway2 (call $$mutual-runaway1))

  ;; As parameter of control constructs and instructions

  (memory 1)

  (func (export "as-select-first") (result i32)
    (select (call $$const-i32) (i32.const 2) (i32.const 3))
  )
  (func (export "as-select-mid") (result i32)
    (select (i32.const 2) (call $$const-i32) (i32.const 3))
  )
  (func (export "as-select-last") (result i32)
    (select (i32.const 2) (i32.const 3) (call $$const-i32))
  )

  (func (export "as-if-condition") (result i32)
    (if (result i32) (call $$const-i32) (then (i32.const 1)) (else (i32.const 2)))
  )

  (func (export "as-br_if-first") (result i32)
    (block (result i32) (br_if 0 (call $$const-i32) (i32.const 2)))
  )
  (func (export "as-br_if-last") (result i32)
    (block (result i32) (br_if 0 (i32.const 2) (call $$const-i32)))
  )

  (func (export "as-br_table-first") (result i32)
    (block (result i32) (call $$const-i32) (i32.const 2) (br_table 0 0))
  )
  (func (export "as-br_table-last") (result i32)
    (block (result i32) (i32.const 2) (call $$const-i32) (br_table 0 0))
  )

  (func $$func (param i32 i32) (result i32) (local.get 0))
  (type $$check (func (param i32 i32) (result i32)))
  (table funcref (elem $$func))
  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (call $$const-i32) (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-mid") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 2) (call $$const-i32) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-last") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 1) (i32.const 2) (call $$const-i32)
      )
    )
  )

  (func (export "as-store-first")
    (call $$const-i32) (i32.const 1) (i32.store)
  )
  (func (export "as-store-last")
    (i32.const 10) (call $$const-i32) (i32.store)
  )

  (func (export "as-memory.grow-value") (result i32)
    (memory.grow (call $$const-i32))
  )
  (func (export "as-return-value") (result i32)
    (call $$const-i32) (return)
  )
  (func (export "as-drop-operand")
    (call $$const-i32) (drop)
  )
  (func (export "as-br-value") (result i32)
    (block (result i32) (br 0 (call $$const-i32)))
  )
  (func (export "as-local.set-value") (result i32)
    (local i32) (local.set 0 (call $$const-i32)) (local.get 0)
  )
  (func (export "as-local.tee-value") (result i32)
    (local i32) (local.tee 0 (call $$const-i32))
  )
  (global $$a (mut i32) (i32.const 10))
  (func (export "as-global.set-value") (result i32)
    (global.set $$a (call $$const-i32))
    (global.get $$a)
  )
  (func (export "as-load-operand") (result i32)
    (i32.load (call $$const-i32))
  )

  (func $$dummy (param i32) (result i32) (local.get 0))
  (func $$du (param f32) (result f32) (local.get 0))
  (func (export "as-unary-operand") (result f32)
    (block (result f32) (f32.sqrt (call $$du (f32.const 0x0p+0))))
  )

  (func (export "as-binary-left") (result i32)
    (block (result i32) (i32.add (call $$dummy (i32.const 1)) (i32.const 10)))
  )
  (func (export "as-binary-right") (result i32)
    (block (result i32) (i32.sub (i32.const 10) (call $$dummy (i32.const 1))))
  )

  (func (export "as-test-operand") (result i32)
    (block (result i32) (i32.eqz (call $$dummy (i32.const 1))))
  )

  (func (export "as-compare-left") (result i32)
    (block (result i32) (i32.le_u (call $$dummy (i32.const 1)) (i32.const 10)))
  )
  (func (export "as-compare-right") (result i32)
    (block (result i32) (i32.ne (i32.const 10) (call $$dummy (i32.const 1))))
  )

  (func (export "as-convert-operand") (result i64)
    (block (result i64) (i64.extend_i32_s (call $$dummy (i32.const 1))))
  )

  ;; Test correct argument passing

  (func $$return-from-long-argument-list-helper (param f32 i32 i32 f64 f32 f32 f32 f64 f32 i32 i32 f32 f64 i64 i64 i32 i64 i64 f32 i64 i64 i64 i32 f32 f32 f32 f64 f32 i32 i64 f32 f64 f64 f32 i32 f32 f32 f64 i64 f64 i32 i64 f32 f64 i32 i32 i32 i64 f64 i32 i64 i64 f64 f64 f64 f64 f64 f64 i32 f32 f64 f64 i32 i64 f32 f32 f32 i32 f64 f64 f64 f64 f64 f32 i64 i64 i32 i32 i32 f32 f64 i32 i64 f32 f32 f32 i32 i32 f32 f64 i64 f32 f64 f32 f32 f32 i32 f32 i64 i32) (result i32)
    (local.get 99)
  )

  (func (export "return-from-long-argument-list") (param i32) (result i32)
    (call $$return-from-long-argument-list-helper (f32.const 0) (i32.const 0) (i32.const 0) (f64.const 0) (f32.const 0) (f32.const 0) (f32.const 0) (f64.const 0) (f32.const 0) (i32.const 0) (i32.const 0) (f32.const 0) (f64.const 0) (i64.const 0) (i64.const 0) (i32.const 0) (i64.const 0) (i64.const 0) (f32.const 0) (i64.const 0) (i64.const 0) (i64.const 0) (i32.const 0) (f32.const 0) (f32.const 0) (f32.const 0) (f64.const 0) (f32.const 0) (i32.const 0) (i64.const 0) (f32.const 0) (f64.const 0) (f64.const 0) (f32.const 0) (i32.const 0) (f32.const 0) (f32.const 0) (f64.const 0) (i64.const 0) (f64.const 0) (i32.const 0) (i64.const 0) (f32.const 0) (f64.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i64.const 0) (f64.const 0) (i32.const 0) (i64.const 0) (i64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (i32.const 0) (f32.const 0) (f64.const 0) (f64.const 0) (i32.const 0) (i64.const 0) (f32.const 0) (f32.const 0) (f32.const 0) (i32.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f64.const 0) (f32.const 0) (i64.const 0) (i64.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (f32.const 0) (f64.const 0) (i32.const 0) (i64.const 0) (f32.const 0) (f32.const 0) (f32.const 0) (i32.const 0) (i32.const 0) (f32.const 0) (f64.const 0) (i64.const 0) (f32.const 0) (f64.const 0) (f32.const 0) (f32.const 0) (f32.const 0) (i32.const 0) (f32.const 0) (i64.const 0) (local.get 0))
  )
)`);


assert_return(() => invoke($0, `type-i32`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `type-i64`, []), [value("i64", 356n)]);


assert_return(() => invoke($0, `type-f32`, []), [value("f32", 3890)]);


assert_return(() => invoke($0, `type-f64`, []), [value("f64", 3940)]);


assert_return(() => invoke($0, `type-i32-i64`, []), [value("i32", 306), value("i64", 356n)]);


assert_return(() => invoke($0, `type-first-i32`, []), [value("i32", 32)]);


assert_return(() => invoke($0, `type-first-i64`, []), [value("i64", 64n)]);


assert_return(() => invoke($0, `type-first-f32`, []), [value("f32", 1.32)]);


assert_return(() => invoke($0, `type-first-f64`, []), [value("f64", 1.64)]);


assert_return(() => invoke($0, `type-second-i32`, []), [value("i32", 32)]);


assert_return(() => invoke($0, `type-second-i64`, []), [value("i64", 64n)]);


assert_return(() => invoke($0, `type-second-f32`, []), [value("f32", 32)]);


assert_return(() => invoke($0, `type-second-f64`, []), [value("f64", 64.1)]);


assert_return(() => invoke($0, `type-all-i32-f64`, []), [value("i32", 32), value("f64", 1.64)]);


assert_return(() => invoke($0, `type-all-i32-i32`, []), [value("i32", 2), value("i32", 1)]);


assert_return(() => invoke($0, `type-all-f32-f64`, []), [value("f64", 2), value("f32", 1)]);


assert_return(() => invoke($0, `type-all-f64-i32`, []), [value("i32", 2), value("f64", 1)]);


assert_return(() => invoke($0, `as-binary-all-operands`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `as-mixed-operands`, []), [value("i32", 32)]);


assert_return(() => invoke($0, `as-call-all-operands`, []), [value("i32", 3), value("i32", 4)]);


assert_return(() => invoke($0, `fac`, [0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fac`, [1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fac`, [5n]), [value("i64", 120n)]);


assert_return(() => invoke($0, `fac`, [25n]), [value("i64", 7034535277573963776n)]);


assert_return(() => invoke($0, `fac-acc`, [0n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fac-acc`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fac-acc`, [5n, 1n]), [value("i64", 120n)]);


assert_return(() => invoke($0, `fac-acc`, [25n, 1n]), [value("i64", 7034535277573963776n)]);


assert_return(() => invoke($0, `fib`, [0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fib`, [1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `fib`, [2n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `fib`, [5n]), [value("i64", 8n)]);


assert_return(() => invoke($0, `fib`, [20n]), [value("i64", 10946n)]);


assert_return(() => invoke($0, `even`, [0n]), [value("i32", 44)]);


assert_return(() => invoke($0, `even`, [1n]), [value("i32", 99)]);


assert_return(() => invoke($0, `even`, [100n]), [value("i32", 44)]);


assert_return(() => invoke($0, `even`, [77n]), [value("i32", 99)]);


assert_return(() => invoke($0, `odd`, [0n]), [value("i32", 99)]);


assert_return(() => invoke($0, `odd`, [1n]), [value("i32", 44)]);


assert_return(() => invoke($0, `odd`, [200n]), [value("i32", 99)]);


assert_return(() => invoke($0, `odd`, [77n]), [value("i32", 44)]);


assert_exhaustion(() => invoke($0, `runaway`, []), `call stack exhausted`);


assert_exhaustion(() => invoke($0, `mutual-runaway`, []), `call stack exhausted`);


assert_return(() => invoke($0, `as-select-first`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-select-mid`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-select-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-if-condition`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_if-first`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-br_if-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_table-first`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-br_table-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call_indirect-first`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, []), [value("i32", 2)]);


assert_trap(() => invoke($0, `as-call_indirect-last`, []), `undefined element`);


assert_return(() => invoke($0, `as-store-first`, []), []);


assert_return(() => invoke($0, `as-store-last`, []), []);


assert_return(() => invoke($0, `as-memory.grow-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-return-value`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-drop-operand`, []), []);


assert_return(() => invoke($0, `as-br-value`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-local.set-value`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-local.tee-value`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-global.set-value`, []), [value("i32", 306)]);


assert_return(() => invoke($0, `as-load-operand`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-unary-operand`, []), [value("f32", 0)]);


assert_return(() => invoke($0, `as-binary-left`, []), [value("i32", 11)]);


assert_return(() => invoke($0, `as-binary-right`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `as-test-operand`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-left`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-right`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-convert-operand`, []), [value("i64", 1n)]);


assert_return(() => invoke($0, `return-from-long-argument-list`, [42]), [value("i32", 42)]);


assert_invalid(
  () => instantiate(`(module
    (func $$type-void-vs-num (i32.eqz (call 1)))
    (func)
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-num-vs-num (i32.eqz (call 1)))
    (func (result i64) (i64.const 1))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$arity-0-vs-1 (call 1))
    (func (param i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$arity-0-vs-2 (call 1))
    (func (param f64 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$arity-1-vs-0 (call 1 (i32.const 1)))
    (func)
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$arity-2-vs-0 (call 1 (f64.const 2) (i32.const 1)))
    (func)
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-first-void-vs-num (call 1 (nop) (i32.const 1)))
    (func (param i32 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-second-void-vs-num (call 1 (i32.const 1) (nop)))
    (func (param i32 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-first-num-vs-num (call 1 (f64.const 1) (i32.const 1)))
    (func (param i32 f64))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-second-num-vs-num (call 1 (i32.const 1) (f64.const 1)))
    (func (param f64 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-first-empty-in-block
      (block (call 1))
    )
    (func (param i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-second-empty-in-block
      (block (call 1 (i32.const 0)))
    )
    (func (param i32 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-first-empty-in-loop
      (loop (call 1))
    )
    (func (param i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-second-empty-in-loop
      (loop (call 1 (i32.const 0)))
    )
    (func (param i32 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-first-empty-in-then
      (if (i32.const 0) (then (call 1)))
    )
    (func (param i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-second-empty-in-then
      (if (i32.const 0) (then (call 1 (i32.const 0))))
    )
    (func (param i32 i32))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-func (call 1)))`),
  `unknown function`,
);


assert_invalid(
  () => instantiate(`(module (func $$large-func (call 1012321300)))`),
  `unknown function`,
);
