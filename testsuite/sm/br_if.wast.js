




let $0 = instantiate(`(module
  (func $$dummy)

  (func (export "type-i32")
    (block (drop (i32.ctz (br_if 0 (i32.const 0) (i32.const 1)))))
  )
  (func (export "type-i64")
    (block (drop (i64.ctz (br_if 0 (i64.const 0) (i32.const 1)))))
  )
  (func (export "type-f32")
    (block (drop (f32.neg (br_if 0 (f32.const 0) (i32.const 1)))))
  )
  (func (export "type-f64")
    (block (drop (f64.neg (br_if 0 (f64.const 0) (i32.const 1)))))
  )

  (func (export "type-i32-value") (result i32)
    (block (result i32) (i32.ctz (br_if 0 (i32.const 1) (i32.const 1))))
  )
  (func (export "type-i64-value") (result i64)
    (block (result i64) (i64.ctz (br_if 0 (i64.const 2) (i32.const 1))))
  )
  (func (export "type-f32-value") (result f32)
    (block (result f32) (f32.neg (br_if 0 (f32.const 3) (i32.const 1))))
  )
  (func (export "type-f64-value") (result f64)
    (block (result f64) (f64.neg (br_if 0 (f64.const 4) (i32.const 1))))
  )

  (func (export "as-block-first") (param i32) (result i32)
    (block (br_if 0 (local.get 0)) (return (i32.const 2))) (i32.const 3)
  )
  (func (export "as-block-mid") (param i32) (result i32)
    (block (call $$dummy) (br_if 0 (local.get 0)) (return (i32.const 2)))
    (i32.const 3)
  )
  (func (export "as-block-last") (param i32)
    (block (call $$dummy) (call $$dummy) (br_if 0 (local.get 0)))
  )
  (func (export "as-block-first-value") (param i32) (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.const 10) (local.get 0))) (return (i32.const 11))
    )
  )
  (func (export "as-block-mid-value") (param i32) (result i32)
    (block (result i32)
      (call $$dummy)
      (drop (br_if 0 (i32.const 20) (local.get 0)))
      (return (i32.const 21))
    )
  )
  (func (export "as-block-last-value") (param i32) (result i32)
    (block (result i32)
      (call $$dummy) (call $$dummy) (br_if 0 (i32.const 11) (local.get 0))
    )
  )

  (func (export "as-loop-first") (param i32) (result i32)
    (block (loop (br_if 1 (local.get 0)) (return (i32.const 2)))) (i32.const 3)
  )
  (func (export "as-loop-mid") (param i32) (result i32)
    (block (loop (call $$dummy) (br_if 1 (local.get 0)) (return (i32.const 2))))
    (i32.const 4)
  )
  (func (export "as-loop-last") (param i32)
    (loop (call $$dummy) (br_if 1 (local.get 0)))
  )

  (func (export "as-br-value") (result i32)
    (block (result i32) (br 0 (br_if 0 (i32.const 1) (i32.const 2))))
  )

  (func (export "as-br_if-cond")
    (block (br_if 0 (br_if 0 (i32.const 1) (i32.const 1))))
  )
  (func (export "as-br_if-value") (result i32)
    (block (result i32)
      (drop (br_if 0 (br_if 0 (i32.const 1) (i32.const 2)) (i32.const 3)))
      (i32.const 4)
    )
  )
  (func (export "as-br_if-value-cond") (param i32) (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.const 2) (br_if 0 (i32.const 1) (local.get 0))))
      (i32.const 4)
    )
  )

  (func (export "as-br_table-index")
    (block (br_table 0 0 0 (br_if 0 (i32.const 1) (i32.const 2))))
  )
  (func (export "as-br_table-value") (result i32)
    (block (result i32)
      (br_table 0 0 0 (br_if 0 (i32.const 1) (i32.const 2)) (i32.const 3)) (i32.const 4)
    )
  )
  (func (export "as-br_table-value-index") (result i32)
    (block (result i32)
      (br_table 0 0 (i32.const 2) (br_if 0 (i32.const 1) (i32.const 3))) (i32.const 4)
    )
  )
  (func (export "as-return-value") (result i64)
    (block (result i64) (return (br_if 0 (i64.const 1) (i32.const 2))))
  )

  (func (export "as-if-cond") (param i32) (result i32)
    (block (result i32)
      (if (result i32)
        (br_if 0 (i32.const 1) (local.get 0))
        (then (i32.const 2))
        (else (i32.const 3))
      )
    )
  )
  (func (export "as-if-then") (param i32 i32)
    (block
      (if (local.get 0) (then (br_if 1 (local.get 1))) (else (call $$dummy)))
    )
  )
  (func (export "as-if-else") (param i32 i32)
    (block
      (if (local.get 0) (then (call $$dummy)) (else (br_if 1 (local.get 1))))
    )
  )

  (func (export "as-select-first") (param i32) (result i32)
    (block (result i32)
      (select (br_if 0 (i32.const 3) (i32.const 10)) (i32.const 2) (local.get 0))
    )
  )
  (func (export "as-select-second") (param i32) (result i32)
    (block (result i32)
      (select (i32.const 1) (br_if 0 (i32.const 3) (i32.const 10)) (local.get 0))
    )
  )
  (func (export "as-select-cond") (result i32)
    (block (result i32)
      (select (i32.const 1) (i32.const 2) (br_if 0 (i32.const 3) (i32.const 10)))
    )
  )

 (func $$f (param i32 i32 i32) (result i32) (i32.const -1))
  (func (export "as-call-first") (result i32)
    (block (result i32)
      (call $$f
        (br_if 0 (i32.const 12) (i32.const 1)) (i32.const 2) (i32.const 3)
      )
    )
  )
  (func (export "as-call-mid") (result i32)
    (block (result i32)
      (call $$f
        (i32.const 1) (br_if 0 (i32.const 13) (i32.const 1)) (i32.const 3)
      )
    )
  )
  (func (export "as-call-last") (result i32)
    (block (result i32)
      (call $$f
        (i32.const 1) (i32.const 2) (br_if 0 (i32.const 14) (i32.const 1))
      )
    )
  )

  (func $$func (param i32 i32 i32) (result i32) (local.get 0))
  (type $$check (func (param i32 i32 i32) (result i32)))
  (table funcref (elem $$func))
  (func (export "as-call_indirect-func") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (br_if 0 (i32.const 4) (i32.const 10))
        (i32.const 1) (i32.const 2) (i32.const 0)
      )
    )
  )

  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 1) (br_if 0 (i32.const 4) (i32.const 10)) (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-mid") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 1) (i32.const 2) (br_if 0 (i32.const 4) (i32.const 10)) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-last") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 1) (i32.const 2) (i32.const 3) (br_if 0 (i32.const 4) (i32.const 10))
      )
    )
  )

  (func (export "as-local.set-value") (param i32) (result i32)
    (local i32)
    (block (result i32)
      (local.set 0 (br_if 0 (i32.const 17) (local.get 0)))
      (i32.const -1)
    )
  )
  (func (export "as-local.tee-value") (param i32) (result i32)
    (block (result i32)
      (local.tee 0 (br_if 0 (i32.const 1) (local.get 0)))
      (return (i32.const -1))
    )
  )
  (global $$a (mut i32) (i32.const 10))
  (func (export "as-global.set-value") (param i32) (result i32)
    (block (result i32)
      (global.set $$a (br_if 0 (i32.const 1) (local.get 0)))
      (return (i32.const -1))
    )
  )

  (memory 1)
  (func (export "as-load-address") (result i32)
    (block (result i32) (i32.load (br_if 0 (i32.const 1) (i32.const 1))))
  )
  (func (export "as-loadN-address") (result i32)
    (block (result i32) (i32.load8_s (br_if 0 (i32.const 30) (i32.const 1))))
  )

  (func (export "as-store-address") (result i32)
    (block (result i32)
      (i32.store (br_if 0 (i32.const 30) (i32.const 1)) (i32.const 7)) (i32.const -1)
    )
  )
  (func (export "as-store-value") (result i32)
    (block (result i32)
      (i32.store (i32.const 2) (br_if 0 (i32.const 31) (i32.const 1))) (i32.const -1)
    )
  )

  (func (export "as-storeN-address") (result i32)
    (block (result i32)
      (i32.store8 (br_if 0 (i32.const 32) (i32.const 1)) (i32.const 7)) (i32.const -1)
    )
  )
  (func (export "as-storeN-value") (result i32)
    (block (result i32)
      (i32.store16 (i32.const 2) (br_if 0 (i32.const 33) (i32.const 1))) (i32.const -1)
    )
  )

  (func (export "as-unary-operand") (result f64)
    (block (result f64) (f64.neg (br_if 0 (f64.const 1.0) (i32.const 1))))
  )
  (func (export "as-binary-left") (result i32)
    (block (result i32) (i32.add (br_if 0 (i32.const 1) (i32.const 1)) (i32.const 10)))
  )
  (func (export "as-binary-right") (result i32)
    (block (result i32) (i32.sub (i32.const 10) (br_if 0 (i32.const 1) (i32.const 1))))
  )
  (func (export "as-test-operand") (result i32)
    (block (result i32) (i32.eqz (br_if 0 (i32.const 0) (i32.const 1))))
  )
  (func (export "as-compare-left") (result i32)
    (block (result i32) (i32.le_u (br_if 0 (i32.const 1) (i32.const 1)) (i32.const 10)))
  )
  (func (export "as-compare-right") (result i32)
    (block (result i32) (i32.ne (i32.const 10) (br_if 0 (i32.const 1) (i32.const 42))))
  )

  (func (export "as-memory.grow-size") (result i32)
    (block (result i32) (memory.grow (br_if 0 (i32.const 1) (i32.const 1))))
  )

  (func (export "nested-block-value") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (i32.add
          (i32.const 4)
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0)))
            (i32.const 16)
          )
        )
      )
    )
  )

  (func (export "nested-br-value") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (br 0
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0))) (i32.const 4)
          )
        )
        (i32.const 16)
      )
    )
  )

  (func (export "nested-br_if-value") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (drop (br_if 0
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0))) (i32.const 4)
          )
          (i32.const 1)
        ))
        (i32.const 16)
      )
    )
  )

  (func (export "nested-br_if-value-cond") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (drop (br_if 0
          (i32.const 4)
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0))) (i32.const 1)
          )
        ))
        (i32.const 16)
      )
    )
  )

  (func (export "nested-br_table-value") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (br_table 0
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0))) (i32.const 4)
          )
          (i32.const 1)
        )
        (i32.const 16)
      )
    )
  )

  (func (export "nested-br_table-value-index") (param i32) (result i32)
    (i32.add
      (i32.const 1)
      (block (result i32)
        (drop (i32.const 2))
        (br_table 0
          (i32.const 4)
          (block (result i32)
            (drop (br_if 1 (i32.const 8) (local.get 0))) (i32.const 1)
          )
        )
        (i32.const 16)
      )
    )
  )

)`);


assert_return(() => invoke($0, `type-i32`, []), []);


assert_return(() => invoke($0, `type-i64`, []), []);


assert_return(() => invoke($0, `type-f32`, []), []);


assert_return(() => invoke($0, `type-f64`, []), []);


assert_return(() => invoke($0, `type-i32-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `type-i64-value`, []), [value("i64", 2n)]);


assert_return(() => invoke($0, `type-f32-value`, []), [value("f32", 3)]);


assert_return(() => invoke($0, `type-f64-value`, []), [value("f64", 4)]);


assert_return(() => invoke($0, `as-block-first`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-block-first`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-block-mid`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-block-mid`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-block-last`, [0]), []);


assert_return(() => invoke($0, `as-block-last`, [1]), []);


assert_return(() => invoke($0, `as-block-first-value`, [0]), [value("i32", 11)]);


assert_return(() => invoke($0, `as-block-first-value`, [1]), [value("i32", 10)]);


assert_return(() => invoke($0, `as-block-mid-value`, [0]), [value("i32", 21)]);


assert_return(() => invoke($0, `as-block-mid-value`, [1]), [value("i32", 20)]);


assert_return(() => invoke($0, `as-block-last-value`, [0]), [value("i32", 11)]);


assert_return(() => invoke($0, `as-block-last-value`, [1]), [value("i32", 11)]);


assert_return(() => invoke($0, `as-loop-first`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-first`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-loop-mid`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-mid`, [1]), [value("i32", 4)]);


assert_return(() => invoke($0, `as-loop-last`, [0]), []);


assert_return(() => invoke($0, `as-loop-last`, [1]), []);


assert_return(() => invoke($0, `as-br-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_if-cond`, []), []);


assert_return(() => invoke($0, `as-br_if-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_if-value-cond`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_if-value-cond`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_table-index`, []), []);


assert_return(() => invoke($0, `as-br_table-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_table-value-index`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-return-value`, []), [value("i64", 1n)]);


assert_return(() => invoke($0, `as-if-cond`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-if-cond`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-if-then`, [0, 0]), []);


assert_return(() => invoke($0, `as-if-then`, [4, 0]), []);


assert_return(() => invoke($0, `as-if-then`, [0, 1]), []);


assert_return(() => invoke($0, `as-if-then`, [4, 1]), []);


assert_return(() => invoke($0, `as-if-else`, [0, 0]), []);


assert_return(() => invoke($0, `as-if-else`, [3, 0]), []);


assert_return(() => invoke($0, `as-if-else`, [0, 1]), []);


assert_return(() => invoke($0, `as-if-else`, [3, 1]), []);


assert_return(() => invoke($0, `as-select-first`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-first`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-second`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-second`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-cond`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `as-call-first`, []), [value("i32", 12)]);


assert_return(() => invoke($0, `as-call-mid`, []), [value("i32", 13)]);


assert_return(() => invoke($0, `as-call-last`, []), [value("i32", 14)]);


assert_return(() => invoke($0, `as-call_indirect-func`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-call_indirect-first`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-call_indirect-last`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-local.set-value`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-local.set-value`, [1]), [value("i32", 17)]);


assert_return(() => invoke($0, `as-local.tee-value`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-local.tee-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-global.set-value`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `as-global.set-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-load-address`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-loadN-address`, []), [value("i32", 30)]);


assert_return(() => invoke($0, `as-store-address`, []), [value("i32", 30)]);


assert_return(() => invoke($0, `as-store-value`, []), [value("i32", 31)]);


assert_return(() => invoke($0, `as-storeN-address`, []), [value("i32", 32)]);


assert_return(() => invoke($0, `as-storeN-value`, []), [value("i32", 33)]);


assert_return(() => invoke($0, `as-unary-operand`, []), [value("f64", 1)]);


assert_return(() => invoke($0, `as-binary-left`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-binary-right`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-test-operand`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-left`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-right`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-size`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `nested-block-value`, [0]), [value("i32", 21)]);


assert_return(() => invoke($0, `nested-block-value`, [1]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested-br-value`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `nested-br-value`, [1]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested-br_if-value`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `nested-br_if-value`, [1]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested-br_if-value-cond`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `nested-br_if-value-cond`, [1]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested-br_table-value`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `nested-br_table-value`, [1]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested-br_table-value-index`, [0]), [value("i32", 5)]);


assert_return(() => invoke($0, `nested-br_table-value-index`, [1]), [value("i32", 9)]);


assert_invalid(
  () => instantiate(`(module (func $$type-false-i32 (block (i32.ctz (br_if 0 (i32.const 0))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-i64 (block (i64.ctz (br_if 0 (i32.const 0))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-f32 (block (f32.neg (br_if 0 (i32.const 0))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-f64 (block (f64.neg (br_if 0 (i32.const 0))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-i32 (block (i32.ctz (br_if 0 (i32.const 1))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-i64 (block (i64.ctz (br_if 0 (i64.const 1))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-f32 (block (f32.neg (br_if 0 (f32.const 1))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-f64 (block (f64.neg (br_if 0 (i64.const 1))))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-arg-void-vs-num (result i32)
    (block (result i32) (br_if 0 (i32.const 0)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-arg-void-vs-num (result i32)
    (block (result i32) (br_if 0 (i32.const 1)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-arg-num-vs-void
    (block (br_if 0 (i32.const 0) (i32.const 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-arg-num-vs-void
    (block (br_if 0 (i32.const 0) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-arg-void-vs-num (result i32)
    (block (result i32) (br_if 0 (nop) (i32.const 0)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-arg-void-vs-num (result i32)
    (block (result i32) (br_if 0 (nop) (i32.const 1)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-false-arg-num-vs-num (result i32)
    (block (result i32)
      (drop (br_if 0 (i64.const 1) (i32.const 0))) (i32.const 1)
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-true-arg-num-vs-num (result i32)
    (block (result i32)
      (drop (br_if 0 (i64.const 1) (i32.const 0))) (i32.const 1)
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-cond-empty-vs-i32
    (block (br_if 0))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-cond-void-vs-i32
    (block (br_if 0 (nop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-cond-num-vs-i32
    (block (br_if 0 (i64.const 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-arg-cond-void-vs-i32 (result i32)
    (block (result i32) (br_if 0 (i32.const 0) (nop)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-arg-void-vs-num-nested (result i32)
    (block (result i32) (i32.const 0) (block (br_if 1 (i32.const 1))))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-arg-cond-num-vs-i32 (result i32)
    (block (result i32) (br_if 0 (i32.const 0) (i64.const 0)) (i32.const 1))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-1st-cond-empty-in-then
      (block
        (i32.const 0) (i32.const 0)
        (if (result i32) (then (br_if 0)))
      )
      (i32.eqz) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-2nd-cond-empty-in-then
      (block
        (i32.const 0) (i32.const 0)
        (if (result i32) (then (br_if 0 (i32.const 1))))
      )
      (i32.eqz) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-1st-cond-empty-in-return
      (block (result i32)
        (return (br_if 0))
      )
      (i32.eqz) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-2nd-cond-empty-in-return
      (block (result i32)
        (return (br_if 0 (i32.const 1)))
      )
      (i32.eqz) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-label (br_if 1 (i32.const 1))))`),
  `unknown label`,
);


assert_invalid(
  () => instantiate(`(module (func $$unbound-nested-label (block (block (br_if 5 (i32.const 1))))))`),
  `unknown label`,
);


assert_invalid(
  () => instantiate(`(module (func $$large-label (br_if 0x10000001 (i32.const 1))))`),
  `unknown label`,
);
