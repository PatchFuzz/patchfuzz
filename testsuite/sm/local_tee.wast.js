




let $0 = instantiate(`(module
  ;; Typing

  (func (export "type-local-i32") (result i32) (local i32) (local.tee 0 (i32.const 0)))
  (func (export "type-local-i64") (result i64) (local i64) (local.tee 0 (i64.const 0)))
  (func (export "type-local-f32") (result f32) (local f32) (local.tee 0 (f32.const 0)))
  (func (export "type-local-f64") (result f64) (local f64) (local.tee 0 (f64.const 0)))

  (func (export "type-param-i32") (param i32) (result i32) (local.tee 0 (i32.const 10)))
  (func (export "type-param-i64") (param i64) (result i64) (local.tee 0 (i64.const 11)))
  (func (export "type-param-f32") (param f32) (result f32) (local.tee 0 (f32.const 11.1)))
  (func (export "type-param-f64") (param f64) (result f64) (local.tee 0 (f64.const 12.2)))

  (func (export "type-mixed") (param i64 f32 f64 i32 i32) (local f32 i64 i64 f64)
    (drop (i64.eqz (local.tee 0 (i64.const 0))))
    (drop (f32.neg (local.tee 1 (f32.const 0))))
    (drop (f64.neg (local.tee 2 (f64.const 0))))
    (drop (i32.eqz (local.tee 3 (i32.const 0))))
    (drop (i32.eqz (local.tee 4 (i32.const 0))))
    (drop (f32.neg (local.tee 5 (f32.const 0))))
    (drop (i64.eqz (local.tee 6 (i64.const 0))))
    (drop (i64.eqz (local.tee 7 (i64.const 0))))
    (drop (f64.neg (local.tee 8 (f64.const 0))))
  )

  ;; Writing

  (func (export "write") (param i64 f32 f64 i32 i32) (result i64) (local f32 i64 i64 f64)
    (drop (local.tee 1 (f32.const -0.3)))
    (drop (local.tee 3 (i32.const 40)))
    (drop (local.tee 4 (i32.const -7)))
    (drop (local.tee 5 (f32.const 5.5)))
    (drop (local.tee 6 (i64.const 6)))
    (drop (local.tee 8 (f64.const 8)))
    (i64.trunc_f64_s
      (f64.add
        (f64.convert_i64_u (local.get 0))
        (f64.add
          (f64.promote_f32 (local.get 1))
          (f64.add
            (local.get 2)
            (f64.add
              (f64.convert_i32_u (local.get 3))
              (f64.add
                (f64.convert_i32_s (local.get 4))
                (f64.add
                  (f64.promote_f32 (local.get 5))
                  (f64.add
                    (f64.convert_i64_u (local.get 6))
                    (f64.add
                      (f64.convert_i64_u (local.get 7))
                      (local.get 8)
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )

  ;; Result

  (func (export "result") (param i64 f32 f64 i32 i32) (result f64)
    (local f32 i64 i64 f64)
    (f64.add
      (f64.convert_i64_u (local.tee 0 (i64.const 1)))
      (f64.add
        (f64.promote_f32 (local.tee 1 (f32.const 2)))
        (f64.add
          (local.tee 2 (f64.const 3.3))
          (f64.add
            (f64.convert_i32_u (local.tee 3 (i32.const 4)))
            (f64.add
              (f64.convert_i32_s (local.tee 4 (i32.const 5)))
              (f64.add
                (f64.promote_f32 (local.tee 5 (f32.const 5.5)))
                (f64.add
                  (f64.convert_i64_u (local.tee 6 (i64.const 6)))
                  (f64.add
                    (f64.convert_i64_u (local.tee 7 (i64.const 0)))
                    (local.tee 8 (f64.const 8))
                  )
                )
              )
            )
          )
        )
      )
    )
  )

  (func $$dummy)

  (func (export "as-block-first") (param i32) (result i32)
    (block (result i32) (local.tee 0 (i32.const 1)) (call $$dummy))
  )
  (func (export "as-block-mid") (param i32) (result i32)
    (block (result i32) (call $$dummy) (local.tee 0 (i32.const 1)) (call $$dummy))
  )
  (func (export "as-block-last") (param i32) (result i32)
    (block (result i32) (call $$dummy) (call $$dummy) (local.tee 0 (i32.const 1)))
  )

  (func (export "as-loop-first") (param i32) (result i32)
    (loop (result i32) (local.tee 0 (i32.const 3)) (call $$dummy))
  )
  (func (export "as-loop-mid") (param i32) (result i32)
    (loop (result i32) (call $$dummy) (local.tee 0 (i32.const 4)) (call $$dummy))
  )
  (func (export "as-loop-last") (param i32) (result i32)
    (loop (result i32) (call $$dummy) (call $$dummy) (local.tee 0 (i32.const 5)))
  )

  (func (export "as-br-value") (param i32) (result i32)
    (block (result i32) (br 0 (local.tee 0 (i32.const 9))))
  )

  (func (export "as-br_if-cond") (param i32)
    (block (br_if 0 (local.tee 0 (i32.const 1))))
  )
  (func (export "as-br_if-value") (param i32) (result i32)
    (block (result i32)
      (drop (br_if 0 (local.tee 0 (i32.const 8)) (i32.const 1))) (i32.const 7)
    )
  )
  (func (export "as-br_if-value-cond") (param i32) (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.const 6) (local.tee 0 (i32.const 9)))) (i32.const 7)
    )
  )

  (func (export "as-br_table-index") (param i32)
    (block (br_table 0 0 0 (local.tee 0 (i32.const 0))))
  )
  (func (export "as-br_table-value") (param i32) (result i32)
    (block (result i32)
      (br_table 0 0 0 (local.tee 0 (i32.const 10)) (i32.const 1)) (i32.const 7)
    )
  )
  (func (export "as-br_table-value-index") (param i32) (result i32)
    (block (result i32)
      (br_table 0 0 (i32.const 6) (local.tee 0 (i32.const 11))) (i32.const 7)
    )
  )

  (func (export "as-return-value") (param i32) (result i32)
    (return (local.tee 0 (i32.const 7)))
  )

  (func (export "as-if-cond") (param i32) (result i32)
    (if (result i32) (local.tee 0 (i32.const 2))
      (then (i32.const 0)) (else (i32.const 1))
    )
  )
  (func (export "as-if-then") (param i32) (result i32)
    (if (result i32) (local.get 0)
      (then (local.tee 0 (i32.const 3))) (else (local.get 0))
    )
  )
  (func (export "as-if-else") (param i32) (result i32)
    (if (result i32) (local.get 0)
      (then (local.get 0)) (else (local.tee 0 (i32.const 4)))
    )
  )

  (func (export "as-select-first") (param i32 i32) (result i32)
    (select (local.tee 0 (i32.const 5)) (local.get 0) (local.get 1))
  )
  (func (export "as-select-second") (param i32 i32) (result i32)
    (select (local.get 0) (local.tee 0 (i32.const 6)) (local.get 1))
  )
  (func (export "as-select-cond") (param i32) (result i32)
    (select (i32.const 0) (i32.const 1) (local.tee 0 (i32.const 7)))
  )

  (func $$f (param i32 i32 i32) (result i32) (i32.const -1))
  (func (export "as-call-first") (param i32) (result i32)
    (call $$f (local.tee 0 (i32.const 12)) (i32.const 2) (i32.const 3))
  )
  (func (export "as-call-mid") (param i32) (result i32)
    (call $$f (i32.const 1) (local.tee 0 (i32.const 13)) (i32.const 3))
  )
  (func (export "as-call-last") (param i32) (result i32)
    (call $$f (i32.const 1) (i32.const 2) (local.tee 0 (i32.const 14)))
  )

  (type $$sig (func (param i32 i32 i32) (result i32)))
  (table funcref (elem $$f))
  (func (export "as-call_indirect-first") (param i32) (result i32)
    (call_indirect (type $$sig)
      (local.tee 0 (i32.const 1)) (i32.const 2) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-mid") (param i32) (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (local.tee 0 (i32.const 2)) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-last") (param i32) (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (local.tee 0 (i32.const 3)) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-index") (param i32) (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (i32.const 3) (local.tee 0 (i32.const 0))
    )
  )

  (func (export "as-local.set-value") (local i32)
    (local.set 0 (local.tee 0 (i32.const 1)))
  )
  (func (export "as-local.tee-value") (param i32) (result i32)
    (local.tee 0 (local.tee 0 (i32.const 1)))
  )
  (global $$g (mut i32) (i32.const 0))
  (func (export "as-global.set-value") (local i32)
    (global.set $$g (local.tee 0 (i32.const 1)))
  )

  (memory 1)
  (func (export "as-load-address") (param i32) (result i32)
    (i32.load (local.tee 0 (i32.const 1)))
  )
  (func (export "as-loadN-address") (param i32) (result i32)
    (i32.load8_s (local.tee 0 (i32.const 3)))
  )

  (func (export "as-store-address") (param i32)
    (i32.store (local.tee 0 (i32.const 30)) (i32.const 7))
  )
  (func (export "as-store-value") (param i32)
    (i32.store (i32.const 2) (local.tee 0 (i32.const 1)))
  )

  (func (export "as-storeN-address") (param i32)
    (i32.store8 (local.tee 0 (i32.const 1)) (i32.const 7))
  )
  (func (export "as-storeN-value") (param i32)
    (i32.store16 (i32.const 2) (local.tee 0 (i32.const 1)))
  )

  (func (export "as-unary-operand") (param f32) (result f32)
    (f32.neg (local.tee 0 (f32.const nan:0x0f1e2)))
  )

  (func (export "as-binary-left") (param i32) (result i32)
    (i32.add (local.tee 0 (i32.const 3)) (i32.const 10))
  )
  (func (export "as-binary-right") (param i32) (result i32)
    (i32.sub (i32.const 10) (local.tee 0 (i32.const 4)))
  )

  (func (export "as-test-operand") (param i32) (result i32)
    (i32.eqz (local.tee 0 (i32.const 0)))
  )

  (func (export "as-compare-left") (param i32) (result i32)
    (i32.le_s (local.tee 0 (i32.const 43)) (i32.const 10))
  )
  (func (export "as-compare-right") (param i32) (result i32)
    (i32.ne (i32.const 10) (local.tee 0 (i32.const 42)))
  )

  (func (export "as-convert-operand") (param i64) (result i32)
    (i32.wrap_i64 (local.tee 0 (i64.const 41)))
  )

  (func (export "as-memory.grow-size") (param i32) (result i32)
    (memory.grow (local.tee 0 (i32.const 40)))
  )

)`);


assert_return(() => invoke($0, `type-local-i32`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `type-local-i64`, []), [value("i64", 0n)]);


assert_return(() => invoke($0, `type-local-f32`, []), [value("f32", 0)]);


assert_return(() => invoke($0, `type-local-f64`, []), [value("f64", 0)]);


assert_return(() => invoke($0, `type-param-i32`, [2]), [value("i32", 10)]);


assert_return(() => invoke($0, `type-param-i64`, [3n]), [value("i64", 11n)]);


assert_return(() => invoke($0, `type-param-f32`, [value("f32", 4.4)]), [value("f32", 11.1)]);


assert_return(() => invoke($0, `type-param-f64`, [value("f64", 5.5)]), [value("f64", 12.2)]);


assert_return(() => invoke($0, `as-block-first`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-block-mid`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-block-last`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-loop-first`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-loop-mid`, [0]), [value("i32", 4)]);


assert_return(() => invoke($0, `as-loop-last`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-br-value`, [0]), [value("i32", 9)]);


assert_return(() => invoke($0, `as-br_if-cond`, [0]), []);


assert_return(() => invoke($0, `as-br_if-value`, [0]), [value("i32", 8)]);


assert_return(() => invoke($0, `as-br_if-value-cond`, [0]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_table-index`, [0]), []);


assert_return(() => invoke($0, `as-br_table-value`, [0]), [value("i32", 10)]);


assert_return(() => invoke($0, `as-br_table-value-index`, [0]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-return-value`, [0]), [value("i32", 7)]);


assert_return(() => invoke($0, `as-if-cond`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-if-then`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-if-else`, [0]), [value("i32", 4)]);


assert_return(() => invoke($0, `as-select-first`, [0, 1]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-select-second`, [0, 0]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-select-cond`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-call-first`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call-mid`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call-last`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-first`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-last`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-call_indirect-index`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-local.set-value`, []), []);


assert_return(() => invoke($0, `as-local.tee-value`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-global.set-value`, []), []);


assert_return(() => invoke($0, `as-load-address`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-loadN-address`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-store-address`, [0]), []);


assert_return(() => invoke($0, `as-store-value`, [0]), []);


assert_return(() => invoke($0, `as-storeN-address`, [0]), []);


assert_return(() => invoke($0, `as-storeN-value`, [0]), []);


assert_return(
  () => invoke($0, `as-unary-operand`, [value("f32", 0)]),
  [bytes("f32", [0xe2, 0xf1, 0x80, 0xff])],
);


assert_return(() => invoke($0, `as-binary-left`, [0]), [value("i32", 13)]);


assert_return(() => invoke($0, `as-binary-right`, [0]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-test-operand`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-left`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-right`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-convert-operand`, [0n]), [value("i32", 41)]);


assert_return(() => invoke($0, `as-memory.grow-size`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `type-mixed`, [1n, value("f32", 2.2), value("f64", 3.3), 4, 5]), []);


assert_return(
  () => invoke($0, `write`, [1n, value("f32", 2), value("f64", 3.3), 4, 5]),
  [value("i64", 56n)],
);


assert_return(
  () => invoke($0, `result`, [-1n, value("f32", -2), value("f64", -3.3), -4, -5]),
  [value("f64", 34.8)],
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-num-vs-num (result i64) (local i32) (local.tee 0 (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-num-vs-num (local f32) (i32.eqz (local.tee 0 (f32.const 0)))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-num-vs-num (local f64 i64) (f64.neg (local.tee 1 (i64.const 0)))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-arg-void-vs-num (local i32) (local.tee 0 (nop))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-arg-num-vs-num (local i32) (local.tee 0 (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-arg-num-vs-num (local f32) (local.tee 0 (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-local-arg-num-vs-num (local f64 i64) (local.tee 1 (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-num (param i32) (result i64) (local.get 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-num (param f32) (i32.eqz (local.get 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-num (param f64 i64) (f64.neg (local.get 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-arg-void-vs-num (param i32) (local.tee 0 (nop))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-arg-num-vs-num (param i32) (local.tee 0 (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-arg-num-vs-num (param f32) (local.tee 0 (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-arg-num-vs-num (param f64 i64) (local.tee 1 (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num (param i32)
      (local.tee 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-block (param i32)
      (i32.const 0)
      (block (local.tee 0) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-loop (param i32)
      (i32.const 0)
      (loop (local.tee 0) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-then (param i32)
      (i32.const 0) (i32.const 0)
      (if (then (local.tee 0) (drop)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-else (param i32)
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (local.tee 0))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-br (param i32)
      (i32.const 0)
      (block (br 0 (local.tee 0)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-br_if (param i32)
      (i32.const 0)
      (block (br_if 0 (local.tee 0) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-br_table (param i32)
      (i32.const 0)
      (block (br_table 0 (local.tee 0)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-return (param i32)
      (return (local.tee 0)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-select (param i32)
      (select (local.tee 0) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-call (param i32)
      (call 1 (local.tee 0)) (drop)
    )
    (func (param i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-param-arg-empty-vs-num-in-call_indirect (param i32)
      (block (result i32)
        (call_indirect (type $$sig)
          (local.tee 0) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-local.set (param i32)
      (local.set 0 (local.tee 0)) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-param-arg-empty-vs-num-in-local.tee (param i32)
      (local.tee 0 (local.tee 0)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-param-arg-empty-vs-num-in-global.set (param i32)
      (global.set $$x (local.tee 0)) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-param-arg-empty-vs-num-in-memory.grow (param i32)
      (memory.grow (local.tee 0)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-param-arg-empty-vs-num-in-load (param i32)
      (i32.load (local.tee 0)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-param-arg-empty-vs-num-in-store (param i32)
      (i32.store (local.tee 0) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-mixed-arg-num-vs-num (param f32) (local i32) (local.tee 1 (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-mixed-arg-num-vs-num (param i64 i32) (local f32) (local.tee 1 (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-mixed-arg-num-vs-num (param i64) (local f64 i64) (local.tee 1 (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-local (local i32 i64) (local.tee 3 (i32.const 0)) drop))`),
  `unknown local`,
);


assert_invalid(
  () => instantiate(`(module (func $$large-local (local i32 i64) (local.tee 14324343 (i32.const 0)) drop))`),
  `unknown local`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-param (param i32 i64) (local.tee 2 (i32.const 0)) drop))`),
  `unknown local`,
);


assert_invalid(
  () => instantiate(`(module (func $$large-param (param i32 i64) (local.tee 714324343 (i32.const 0)) drop))`),
  `unknown local`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-mixed (param i32) (local i32 i64) (local.tee 3 (i32.const 0)) drop))`),
  `unknown local`,
);


assert_invalid(
  () => instantiate(`(module (func $$large-mixed (param i64) (local i32 i64) (local.tee 214324343 (i32.const 0)) drop))`),
  `unknown local`,
);
