




let $0 = instantiate(`(module
  (memory 1)

  (func (export "as-br-value") (result i32)
    (block (result i32) (br 0 (i32.load (i32.const 0))))
  )

  (func (export "as-br_if-cond")
    (block (br_if 0 (i32.load (i32.const 0))))
  )
  (func (export "as-br_if-value") (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.load (i32.const 0)) (i32.const 1))) (i32.const 7)
    )
  )
  (func (export "as-br_if-value-cond") (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.const 6) (i32.load (i32.const 0)))) (i32.const 7)
    )
  )

  (func (export "as-br_table-index")
    (block (br_table 0 0 0 (i32.load (i32.const 0))))
  )
  (func (export "as-br_table-value") (result i32)
    (block (result i32)
      (br_table 0 0 0 (i32.load (i32.const 0)) (i32.const 1)) (i32.const 7)
    )
  )
  (func (export "as-br_table-value-index") (result i32)
    (block (result i32)
      (br_table 0 0 (i32.const 6) (i32.load (i32.const 0))) (i32.const 7)
    )
  )

  (func (export "as-return-value") (result i32)
    (return (i32.load (i32.const 0)))
  )

  (func (export "as-if-cond") (result i32)
    (if (result i32) (i32.load (i32.const 0))
      (then (i32.const 0)) (else (i32.const 1))
    )
  )
  (func (export "as-if-then") (result i32)
    (if (result i32) (i32.const 1)
      (then (i32.load (i32.const 0))) (else (i32.const 0))
    )
  )
  (func (export "as-if-else") (result i32)
    (if (result i32) (i32.const 0)
      (then (i32.const 0)) (else (i32.load (i32.const 0)))
    )
  )

  (func (export "as-select-first") (param i32 i32) (result i32)
    (select (i32.load (i32.const 0)) (local.get 0) (local.get 1))
  )
  (func (export "as-select-second") (param i32 i32) (result i32)
    (select (local.get 0) (i32.load (i32.const 0)) (local.get 1))
  )
  (func (export "as-select-cond") (result i32)
    (select (i32.const 0) (i32.const 1) (i32.load (i32.const 0)))
  )

  (func $$f (param i32 i32 i32) (result i32) (i32.const -1))
  (func (export "as-call-first") (result i32)
    (call $$f (i32.load (i32.const 0)) (i32.const 2) (i32.const 3))
  )
  (func (export "as-call-mid") (result i32)
    (call $$f (i32.const 1) (i32.load (i32.const 0)) (i32.const 3))
  )
  (func (export "as-call-last") (result i32)
    (call $$f (i32.const 1) (i32.const 2) (i32.load (i32.const 0)))
  )

  (type $$sig (func (param i32 i32 i32) (result i32)))
  (table funcref (elem $$f))
  (func (export "as-call_indirect-first") (result i32)
    (call_indirect (type $$sig)
      (i32.load (i32.const 0)) (i32.const 2) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-mid") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.load (i32.const 0)) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-last") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (i32.load (i32.const 0)) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-index") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (i32.const 3) (i32.load (i32.const 0))
    )
  )

  (func (export "as-local.set-value") (local i32)
    (local.set 0 (i32.load (i32.const 0)))
  )
  (func (export "as-local.tee-value") (result i32) (local i32)
    (local.tee 0 (i32.load (i32.const 0)))
  )
  (global $$g (mut i32) (i32.const 0))
  (func (export "as-global.set-value") (local i32)
    (global.set $$g (i32.load (i32.const 0)))
  )

  (func (export "as-load-address") (result i32)
    (i32.load (i32.load (i32.const 0)))
  )
  (func (export "as-loadN-address") (result i32)
    (i32.load8_s (i32.load (i32.const 0)))
  )

  (func (export "as-store-address")
    (i32.store (i32.load (i32.const 0)) (i32.const 7))
  )
  (func (export "as-store-value")
    (i32.store (i32.const 2) (i32.load (i32.const 0)))
  )

  (func (export "as-storeN-address")
    (i32.store8 (i32.load8_s (i32.const 0)) (i32.const 7))
  )
  (func (export "as-storeN-value")
    (i32.store16 (i32.const 2) (i32.load (i32.const 0)))
  )

  (func (export "as-unary-operand") (result i32)
    (i32.clz (i32.load (i32.const 100)))
  )

  (func (export "as-binary-left") (result i32)
    (i32.add (i32.load (i32.const 100)) (i32.const 10))
  )
  (func (export "as-binary-right") (result i32)
    (i32.sub (i32.const 10) (i32.load (i32.const 100)))
  )

  (func (export "as-test-operand") (result i32)
    (i32.eqz (i32.load (i32.const 100)))
  )

  (func (export "as-compare-left") (result i32)
    (i32.le_s (i32.load (i32.const 100)) (i32.const 10))
  )
  (func (export "as-compare-right") (result i32)
    (i32.ne (i32.const 10) (i32.load (i32.const 100)))
  )

  (func (export "as-memory.grow-size") (result i32)
    (memory.grow (i32.load (i32.const 100)))
  )
)`);


assert_return(() => invoke($0, `as-br-value`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br_if-cond`, []), []);


assert_return(() => invoke($0, `as-br_if-value`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br_if-value-cond`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `as-br_table-index`, []), []);


assert_return(() => invoke($0, `as-br_table-value`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br_table-value-index`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-return-value`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-if-cond`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-if-then`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-if-else`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-select-first`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-select-second`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-select-cond`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call-first`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call-mid`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call-last`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-first`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-last`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-index`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `as-local.set-value`, []), []);


assert_return(() => invoke($0, `as-local.tee-value`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-global.set-value`, []), []);


assert_return(() => invoke($0, `as-load-address`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-loadN-address`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-store-address`, []), []);


assert_return(() => invoke($0, `as-store-value`, []), []);


assert_return(() => invoke($0, `as-storeN-address`, []), []);


assert_return(() => invoke($0, `as-storeN-value`, []), []);


assert_return(() => invoke($0, `as-unary-operand`, []), [value("i32", 32)]);


assert_return(() => invoke($0, `as-binary-left`, []), [value("i32", 10)]);


assert_return(() => invoke($0, `as-binary-right`, []), [value("i32", 10)]);


assert_return(() => invoke($0, `as-test-operand`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-left`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-right`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-size`, []), [value("i32", 1)]);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load32 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load32_u (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load32_s (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load64 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load64_u (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i32) (i32.load64_s (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i64) (i64.load64 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i64) (i64.load64_u (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result i64) (i64.load64_s (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result f32) (f32.load32 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result f32) (f32.load64 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result f64) (f64.load32 (local.get 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (param i32) (result f64) (f64.load64 (local.get 0))) `),
  `unknown operator`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load_i32 (i32.load (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load8_s_i32 (i32.load8_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load8_u_i32 (i32.load8_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load16_s_i32 (i32.load16_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load16_u_i32 (i32.load16_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load_i64 (i64.load (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load8_s_i64 (i64.load8_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load8_u_i64 (i64.load8_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load16_s_i64 (i64.load16_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load16_u_i64 (i64.load16_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load32_s_i64 (i64.load32_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load32_u_i64 (i64.load32_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load_f32 (f32.load (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func $$load_f64 (f64.load (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i32) (i32.load (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i32) (i32.load8_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i32) (i32.load8_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i32) (i32.load16_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i32) (i32.load16_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load8_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load8_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load16_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load16_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load32_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result i64) (i64.load32_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result f32) (f32.load (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result f64) (f64.load (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty
      (i32.load) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-block
      (i32.const 0)
      (block (i32.load) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-loop
      (i32.const 0)
      (loop (i32.load) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-then
      (i32.const 0) (i32.const 0)
      (if (then (i32.load) (drop)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-else
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (i32.load))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-br
      (i32.const 0)
      (block (br 0 (i32.load)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-br_if
      (i32.const 0)
      (block (br_if 0 (i32.load) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-br_table
      (i32.const 0)
      (block (br_table 0 (i32.load)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-return
      (return (i32.load)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-select
      (select (i32.load) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-call
      (call 1 (i32.load)) (drop)
    )
    (func (param i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-address-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (i32.load) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-local.set
      (local i32)
      (local.set 0 (i32.load)) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-local.tee
      (local i32)
      (local.tee 0 (i32.load)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (global $$x (mut i32) (i32.const 0))
    (func $$type-address-empty-in-global.set
      (global.set $$x (i32.load)) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-memory.grow
      (memory.grow (i32.load)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-address-empty-in-load
      (i32.load (i32.load)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-address-empty-in-store
      (i32.store (i32.load) (i32.const 1))
    )
  )`),
  `type mismatch`,
);
