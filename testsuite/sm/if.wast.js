




let $0 = instantiate(`(module
  ;; Auxiliary definition
  (memory 1)

  (func $$dummy)

  (func (export "empty") (param i32)
    (if (local.get 0) (then))
    (if (local.get 0) (then) (else))
    (if $$l (local.get 0) (then))
    (if $$l (local.get 0) (then) (else))
  )

  (func (export "singular") (param i32) (result i32)
    (if (local.get 0) (then (nop)))
    (if (local.get 0) (then (nop)) (else (nop)))
    (if (result i32) (local.get 0) (then (i32.const 7)) (else (i32.const 8)))
  )

  (func (export "multi") (param i32) (result i32 i32)
    (if (local.get 0) (then (call $$dummy) (call $$dummy) (call $$dummy)))
    (if (local.get 0) (then) (else (call $$dummy) (call $$dummy) (call $$dummy)))
    (if (result i32) (local.get 0)
      (then (call $$dummy) (call $$dummy) (i32.const 8) (call $$dummy))
      (else (call $$dummy) (call $$dummy) (i32.const 9) (call $$dummy))
    )
    (if (result i32 i64 i32) (local.get 0)
      (then
        (call $$dummy) (call $$dummy) (i32.const 1) (call $$dummy)
        (call $$dummy) (call $$dummy) (i64.const 2) (call $$dummy)
        (call $$dummy) (call $$dummy) (i32.const 3) (call $$dummy)
      )
      (else
        (call $$dummy) (call $$dummy) (i32.const -1) (call $$dummy)
        (call $$dummy) (call $$dummy) (i64.const -2) (call $$dummy)
        (call $$dummy) (call $$dummy) (i32.const -3) (call $$dummy)
      )
    )
    (drop) (drop)
  )

  (func (export "nested") (param i32 i32) (result i32)
    (if (result i32) (local.get 0)
      (then
        (if (local.get 1) (then (call $$dummy) (block) (nop)))
        (if (local.get 1) (then) (else (call $$dummy) (block) (nop)))
        (if (result i32) (local.get 1)
          (then (call $$dummy) (i32.const 9))
          (else (call $$dummy) (i32.const 10))
        )
      )
      (else
        (if (local.get 1) (then (call $$dummy) (block) (nop)))
        (if (local.get 1) (then) (else (call $$dummy) (block) (nop)))
        (if (result i32) (local.get 1)
          (then (call $$dummy) (i32.const 10))
          (else (call $$dummy) (i32.const 11))
        )
      )
    )
  )

  (func (export "as-select-first") (param i32) (result i32)
    (select
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (i32.const 2) (i32.const 3)
    )
  )
  (func (export "as-select-mid") (param i32) (result i32)
    (select
      (i32.const 2)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (i32.const 3)
    )
  )
  (func (export "as-select-last") (param i32) (result i32)
    (select
      (i32.const 2) (i32.const 3)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
    )
  )

  (func (export "as-loop-first") (param i32) (result i32)
    (loop (result i32)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (call $$dummy) (call $$dummy)
    )
  )
  (func (export "as-loop-mid") (param i32) (result i32)
    (loop (result i32)
      (call $$dummy)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (call $$dummy)
    )
  )
  (func (export "as-loop-last") (param i32) (result i32)
    (loop (result i32)
      (call $$dummy) (call $$dummy)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
    )
  )

  (func (export "as-if-condition") (param i32) (result i32)
    (if (result i32)
      (if (result i32) (local.get 0)
        (then (i32.const 1)) (else (i32.const 0))
      )
      (then (call $$dummy) (i32.const 2))
      (else (call $$dummy) (i32.const 3))
    )
  )

  (func (export "as-br_if-first") (param i32) (result i32)
    (block (result i32)
      (br_if 0
        (if (result i32) (local.get 0)
          (then (call $$dummy) (i32.const 1))
          (else (call $$dummy) (i32.const 0))
        )
        (i32.const 2)
      )
      (return (i32.const 3))
    )
  )
  (func (export "as-br_if-last") (param i32) (result i32)
    (block (result i32)
      (br_if 0
        (i32.const 2)
        (if (result i32) (local.get 0)
          (then (call $$dummy) (i32.const 1))
          (else (call $$dummy) (i32.const 0))
        )
      )
      (return (i32.const 3))
    )
  )

  (func (export "as-br_table-first") (param i32) (result i32)
    (block (result i32)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (i32.const 2)
      (br_table 0 0)
    )
  )
  (func (export "as-br_table-last") (param i32) (result i32)
    (block (result i32)
      (i32.const 2)
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 1))
        (else (call $$dummy) (i32.const 0))
      )
      (br_table 0 0)
    )
  )

  (func $$func (param i32 i32) (result i32) (local.get 0))
  (type $$check (func (param i32 i32) (result i32)))
  (table funcref (elem $$func))
  (func (export "as-call_indirect-first") (param i32) (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (if (result i32) (local.get 0)
          (then (call $$dummy) (i32.const 1))
          (else (call $$dummy) (i32.const 0))
        )
        (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-mid") (param i32) (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 2)
        (if (result i32) (local.get 0)
          (then (call $$dummy) (i32.const 1))
          (else (call $$dummy) (i32.const 0))
        )
        (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-last") (param i32) (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 2) (i32.const 0)
        (if (result i32) (local.get 0)
          (then (call $$dummy) (i32.const 1))
          (else (call $$dummy) (i32.const 0))
        )
      )
    )
  )

  (func (export "as-store-first") (param i32)
    (if (result i32) (local.get 0)
      (then (call $$dummy) (i32.const 1))
      (else (call $$dummy) (i32.const 0))
    )
    (i32.const 2)
    (i32.store)
  )
  (func (export "as-store-last") (param i32)
    (i32.const 2)
    (if (result i32) (local.get 0)
      (then (call $$dummy) (i32.const 1))
      (else (call $$dummy) (i32.const 0))
    )
    (i32.store)
  )

  (func (export "as-memory.grow-value") (param i32) (result i32)
    (memory.grow
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    )
  )

  (func $$f (param i32) (result i32) (local.get 0))

  (func (export "as-call-value") (param i32) (result i32)
    (call $$f
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    )
  )
  (func (export "as-return-value") (param i32) (result i32)
    (if (result i32) (local.get 0)
      (then (i32.const 1))
      (else (i32.const 0)))
    (return)
  )
  (func (export "as-drop-operand") (param i32)
    (drop
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    )
  )
  (func (export "as-br-value") (param i32) (result i32)
    (block (result i32)
      (br 0
        (if (result i32) (local.get 0)
          (then (i32.const 1))
          (else (i32.const 0))
        )
      )
    )
  )
  (func (export "as-local.set-value") (param i32) (result i32)
    (local i32)
    (local.set 0
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    )
    (local.get 0)
  )
  (func (export "as-local.tee-value") (param i32) (result i32)
    (local.tee 0
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    )
  )
  (global $$a (mut i32) (i32.const 10))
  (func (export "as-global.set-value") (param i32) (result i32)
    (global.set $$a
      (if (result i32) (local.get 0)
        (then (i32.const 1))
        (else (i32.const 0))
      )
    ) (global.get $$a)
  )
  (func (export "as-load-operand") (param i32) (result i32)
    (i32.load
      (if (result i32) (local.get 0)
        (then (i32.const 11))
        (else (i32.const 10))
      )
    )
  )

  (func (export "as-unary-operand") (param i32) (result i32)
    (i32.ctz
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 13))
        (else (call $$dummy) (i32.const -13))
      )
    )
  )
  (func (export "as-binary-operand") (param i32 i32) (result i32)
    (i32.mul
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 3))
        (else (call $$dummy) (i32.const -3))
      )
      (if (result i32) (local.get 1)
        (then (call $$dummy) (i32.const 4))
        (else (call $$dummy) (i32.const -5))
      )
    )
  )
  (func (export "as-test-operand") (param i32) (result i32)
    (i32.eqz
      (if (result i32) (local.get 0)
        (then (call $$dummy) (i32.const 13))
        (else (call $$dummy) (i32.const 0))
      )
    )
  )
  (func (export "as-compare-operand") (param i32 i32) (result i32)
    (f32.gt
      (if (result f32) (local.get 0)
        (then (call $$dummy) (f32.const 3))
        (else (call $$dummy) (f32.const -3))
      )
      (if (result f32) (local.get 1)
        (then (call $$dummy) (f32.const 4))
        (else (call $$dummy) (f32.const -4))
      )
    )
  )
  (func (export "as-binary-operands") (param i32) (result i32)
    (i32.mul
      (if (result i32 i32) (local.get 0)
        (then (call $$dummy) (i32.const 3) (call $$dummy) (i32.const 4))
        (else (call $$dummy) (i32.const 3) (call $$dummy) (i32.const -4))
      )
    )
  )
  (func (export "as-compare-operands") (param i32) (result i32)
    (f32.gt
      (if (result f32 f32) (local.get 0)
        (then (call $$dummy) (f32.const 3) (call $$dummy) (f32.const 3))
        (else (call $$dummy) (f32.const -2) (call $$dummy) (f32.const -3))
      )
    )
  )
  (func (export "as-mixed-operands") (param i32) (result i32)
    (if (result i32 i32) (local.get 0)
      (then (call $$dummy) (i32.const 3) (call $$dummy) (i32.const 4))
      (else (call $$dummy) (i32.const -3) (call $$dummy) (i32.const -4))
    )
    (i32.const 5)
    (i32.add)
    (i32.mul)
  )

  (func (export "break-bare") (result i32)
    (if (i32.const 1) (then (br 0) (unreachable)))
    (if (i32.const 1) (then (br 0) (unreachable)) (else (unreachable)))
    (if (i32.const 0) (then (unreachable)) (else (br 0) (unreachable)))
    (if (i32.const 1) (then (br_if 0 (i32.const 1)) (unreachable)))
    (if (i32.const 1) (then (br_if 0 (i32.const 1)) (unreachable)) (else (unreachable)))
    (if (i32.const 0) (then (unreachable)) (else (br_if 0 (i32.const 1)) (unreachable)))
    (if (i32.const 1) (then (br_table 0 (i32.const 0)) (unreachable)))
    (if (i32.const 1) (then (br_table 0 (i32.const 0)) (unreachable)) (else (unreachable)))
    (if (i32.const 0) (then (unreachable)) (else (br_table 0 (i32.const 0)) (unreachable)))
    (i32.const 19)
  )

  (func (export "break-value") (param i32) (result i32)
    (if (result i32) (local.get 0)
      (then (br 0 (i32.const 18)) (i32.const 19))
      (else (br 0 (i32.const 21)) (i32.const 20))
    )
  )
  (func (export "break-multi-value") (param i32) (result i32 i32 i64)
    (if (result i32 i32 i64) (local.get 0)
      (then
        (br 0 (i32.const 18) (i32.const -18) (i64.const 18))
        (i32.const 19) (i32.const -19) (i64.const 19)
      )
      (else
        (br 0 (i32.const -18) (i32.const 18) (i64.const -18))
        (i32.const -19) (i32.const 19) (i64.const -19)
      )
    )
  )

  (func (export "param") (param i32) (result i32)
    (i32.const 1)
    (if (param i32) (result i32) (local.get 0)
      (then (i32.const 2) (i32.add))
      (else (i32.const -2) (i32.add))
    )
  )
  (func (export "params") (param i32) (result i32)
    (i32.const 1)
    (i32.const 2)
    (if (param i32 i32) (result i32) (local.get 0)
      (then (i32.add))
      (else (i32.sub))
    )
  )
  (func (export "params-id") (param i32) (result i32)
    (i32.const 1)
    (i32.const 2)
    (if (param i32 i32) (result i32 i32) (local.get 0) (then))
    (i32.add)
  )
  (func (export "param-break") (param i32) (result i32)
    (i32.const 1)
    (if (param i32) (result i32) (local.get 0)
      (then (i32.const 2) (i32.add) (br 0))
      (else (i32.const -2) (i32.add) (br 0))
    )
  )
  (func (export "params-break") (param i32) (result i32)
    (i32.const 1)
    (i32.const 2)
    (if (param i32 i32) (result i32) (local.get 0)
      (then (i32.add) (br 0))
      (else (i32.sub) (br 0))
    )
  )
  (func (export "params-id-break") (param i32) (result i32)
    (i32.const 1)
    (i32.const 2)
    (if (param i32 i32) (result i32 i32) (local.get 0) (then (br 0)))
    (i32.add)
  )

  (func (export "effects") (param i32) (result i32)
    (local i32)
    (if
      (block (result i32) (local.set 1 (i32.const 1)) (local.get 0))
      (then
        (local.set 1 (i32.mul (local.get 1) (i32.const 3)))
        (local.set 1 (i32.sub (local.get 1) (i32.const 5)))
        (local.set 1 (i32.mul (local.get 1) (i32.const 7)))
        (br 0)
        (local.set 1 (i32.mul (local.get 1) (i32.const 100)))
      )
      (else
        (local.set 1 (i32.mul (local.get 1) (i32.const 5)))
        (local.set 1 (i32.sub (local.get 1) (i32.const 7)))
        (local.set 1 (i32.mul (local.get 1) (i32.const 3)))
        (br 0)
        (local.set 1 (i32.mul (local.get 1) (i32.const 1000)))
      )
    )
    (local.get 1)
  )

  ;; Examples

  (func $$add64_u_with_carry (export "add64_u_with_carry")
    (param $$i i64) (param $$j i64) (param $$c i32) (result i64 i32)
    (local $$k i64)
    (local.set $$k
      (i64.add
        (i64.add (local.get $$i) (local.get $$j))
        (i64.extend_i32_u (local.get $$c))
      )
    )
    (return (local.get $$k) (i64.lt_u (local.get $$k) (local.get $$i)))
  )

  (func $$add64_u_saturated (export "add64_u_saturated")
    (param i64 i64) (result i64)
    (call $$add64_u_with_carry (local.get 0) (local.get 1) (i32.const 0))
    (if (param i64) (result i64)
      (then (drop) (i64.const -1))
    )
  )

  ;; Block signature syntax

  (type $$block-sig-1 (func))
  (type $$block-sig-2 (func (result i32)))
  (type $$block-sig-3 (func (param $$x i32)))
  (type $$block-sig-4 (func (param i32 f64 i32) (result i32 f64 i32)))

  (func (export "type-use")
    (if (type $$block-sig-1) (i32.const 1) (then))
    (if (type $$block-sig-2) (i32.const 1)
      (then (i32.const 0)) (else (i32.const 2))
    )
    (if (type $$block-sig-3) (i32.const 1) (then (drop)) (else (drop)))
    (i32.const 0) (f64.const 0) (i32.const 0)
    (if (type $$block-sig-4) (i32.const 1) (then))
    (drop) (drop) (drop)
    (if (type $$block-sig-2) (result i32) (i32.const 1)
      (then (i32.const 0)) (else (i32.const 2))
    )
    (if (type $$block-sig-3) (param i32) (i32.const 1)
      (then (drop)) (else (drop))
    )
    (i32.const 0) (f64.const 0) (i32.const 0)
    (if (type $$block-sig-4)
      (param i32) (param f64 i32) (result i32 f64) (result i32)
      (i32.const 1) (then)
    )
    (drop) (drop) (drop)
  )
)`);


assert_return(() => invoke($0, `empty`, [0]), []);


assert_return(() => invoke($0, `empty`, [1]), []);


assert_return(() => invoke($0, `empty`, [100]), []);


assert_return(() => invoke($0, `empty`, [-2]), []);


assert_return(() => invoke($0, `singular`, [0]), [value("i32", 8)]);


assert_return(() => invoke($0, `singular`, [1]), [value("i32", 7)]);


assert_return(() => invoke($0, `singular`, [10]), [value("i32", 7)]);


assert_return(() => invoke($0, `singular`, [-10]), [value("i32", 7)]);


assert_return(() => invoke($0, `multi`, [0]), [value("i32", 9), value("i32", -1)]);


assert_return(() => invoke($0, `multi`, [1]), [value("i32", 8), value("i32", 1)]);


assert_return(() => invoke($0, `multi`, [13]), [value("i32", 8), value("i32", 1)]);


assert_return(() => invoke($0, `multi`, [-5]), [value("i32", 8), value("i32", 1)]);


assert_return(() => invoke($0, `nested`, [0, 0]), [value("i32", 11)]);


assert_return(() => invoke($0, `nested`, [1, 0]), [value("i32", 10)]);


assert_return(() => invoke($0, `nested`, [0, 1]), [value("i32", 10)]);


assert_return(() => invoke($0, `nested`, [3, 2]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested`, [0, -100]), [value("i32", 10)]);


assert_return(() => invoke($0, `nested`, [10, 10]), [value("i32", 9)]);


assert_return(() => invoke($0, `nested`, [0, -1]), [value("i32", 10)]);


assert_return(() => invoke($0, `nested`, [-111, -2]), [value("i32", 9)]);


assert_return(() => invoke($0, `as-select-first`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-select-first`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-select-mid`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-select-mid`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-select-last`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-last`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-first`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-loop-first`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-loop-mid`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-loop-mid`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-loop-last`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-loop-last`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-if-condition`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-if-condition`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_if-first`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br_if-first`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_if-last`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-br_if-last`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_table-first`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br_table-first`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-br_table-last`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_table-last`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call_indirect-first`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-call_indirect-first`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, [0]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call_indirect-last`, [0]), [value("i32", 2)]);


assert_trap(() => invoke($0, `as-call_indirect-last`, [1]), `undefined element`);


assert_return(() => invoke($0, `as-store-first`, [0]), []);


assert_return(() => invoke($0, `as-store-first`, [1]), []);


assert_return(() => invoke($0, `as-store-last`, [0]), []);


assert_return(() => invoke($0, `as-store-last`, [1]), []);


assert_return(() => invoke($0, `as-memory.grow-value`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-call-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-return-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-return-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-drop-operand`, [0]), []);


assert_return(() => invoke($0, `as-drop-operand`, [1]), []);


assert_return(() => invoke($0, `as-br-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-br-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-local.set-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-local.set-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-local.tee-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-local.tee-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-global.set-value`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-global.set-value`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-load-operand`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-load-operand`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-unary-operand`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-unary-operand`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-unary-operand`, [-1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-binary-operand`, [0, 0]), [value("i32", 15)]);


assert_return(() => invoke($0, `as-binary-operand`, [0, 1]), [value("i32", -12)]);


assert_return(() => invoke($0, `as-binary-operand`, [1, 0]), [value("i32", -15)]);


assert_return(() => invoke($0, `as-binary-operand`, [1, 1]), [value("i32", 12)]);


assert_return(() => invoke($0, `as-test-operand`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-test-operand`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-operand`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-operand`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-operand`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-operand`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-binary-operands`, [0]), [value("i32", -12)]);


assert_return(() => invoke($0, `as-binary-operands`, [1]), [value("i32", 12)]);


assert_return(() => invoke($0, `as-compare-operands`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-operands`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-mixed-operands`, [0]), [value("i32", -3)]);


assert_return(() => invoke($0, `as-mixed-operands`, [1]), [value("i32", 27)]);


assert_return(() => invoke($0, `break-bare`, []), [value("i32", 19)]);


assert_return(() => invoke($0, `break-value`, [1]), [value("i32", 18)]);


assert_return(() => invoke($0, `break-value`, [0]), [value("i32", 21)]);


assert_return(
  () => invoke($0, `break-multi-value`, [0]),
  [value("i32", -18), value("i32", 18), value("i64", -18n)],
);


assert_return(
  () => invoke($0, `break-multi-value`, [1]),
  [value("i32", 18), value("i32", -18), value("i64", 18n)],
);


assert_return(() => invoke($0, `param`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `param`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `params`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `params`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `params-id`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `params-id`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `param-break`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `param-break`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `params-break`, [0]), [value("i32", -1)]);


assert_return(() => invoke($0, `params-break`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `params-id-break`, [0]), [value("i32", 3)]);


assert_return(() => invoke($0, `params-id-break`, [1]), [value("i32", 3)]);


assert_return(() => invoke($0, `effects`, [1]), [value("i32", -14)]);


assert_return(() => invoke($0, `effects`, [0]), [value("i32", -6)]);


assert_return(() => invoke($0, `add64_u_with_carry`, [0n, 0n, 0]), [value("i64", 0n), value("i32", 0)]);


assert_return(
  () => invoke($0, `add64_u_with_carry`, [100n, 124n, 0]),
  [value("i64", 224n), value("i32", 0)],
);


assert_return(
  () => invoke($0, `add64_u_with_carry`, [-1n, 0n, 0]),
  [value("i64", -1n), value("i32", 0)],
);


assert_return(() => invoke($0, `add64_u_with_carry`, [-1n, 1n, 0]), [value("i64", 0n), value("i32", 1)]);


assert_return(
  () => invoke($0, `add64_u_with_carry`, [-1n, -1n, 0]),
  [value("i64", -2n), value("i32", 1)],
);


assert_return(() => invoke($0, `add64_u_with_carry`, [-1n, 0n, 1]), [value("i64", 0n), value("i32", 1)]);


assert_return(() => invoke($0, `add64_u_with_carry`, [-1n, 1n, 1]), [value("i64", 1n), value("i32", 1)]);


assert_return(
  () => invoke($0, `add64_u_with_carry`, [
    -9223372036854775808n,
    -9223372036854775808n,
    0,
  ]),
  [value("i64", 0n), value("i32", 1)],
);


assert_return(() => invoke($0, `add64_u_saturated`, [0n, 0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `add64_u_saturated`, [1230n, 23n]), [value("i64", 1253n)]);


assert_return(() => invoke($0, `add64_u_saturated`, [-1n, 0n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `add64_u_saturated`, [-1n, 1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `add64_u_saturated`, [-1n, -1n]), [value("i64", -1n)]);


assert_return(
  () => invoke($0, `add64_u_saturated`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i64", -1n)],
);


assert_return(() => invoke($0, `type-use`, []), []);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0)   (if (type $$sig) (result i32) (param i32) (i32.const 1) (then)) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0)   (if (param i32) (type $$sig) (result i32) (i32.const 1) (then)) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0)   (if (param i32) (result i32) (type $$sig) (i32.const 1) (then)) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0)   (if (result i32) (type $$sig) (param i32) (i32.const 1) (then)) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0)   (if (result i32) (param i32) (type $$sig) (i32.const 1) (then)) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (i32.const 0) (if (result i32) (param i32) (i32.const 1) (then))) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (i32.const 0) (i32.const 1)   (if (param $$x i32) (then (drop)) (else (drop))) ) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func)) (func (i32.const 1)   (if (type $$sig) (result i32) (then (i32.const 0)) (else (i32.const 2)))   (unreachable) ) `),
  `inline function type`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 1)   (if (type $$sig) (result i32) (then (i32.const 0)) (else (i32.const 2)))   (unreachable) ) `),
  `inline function type`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32) (result i32))) (func (i32.const 0) (i32.const 1)   (if (type $$sig) (param i32) (then (drop)) (else (drop)))   (unreachable) ) `),
  `inline function type`,
);


assert_malformed(
  () => instantiate(`(type $$sig (func (param i32 i32) (result i32))) (func (i32.const 0) (i32.const 1)   (if (type $$sig) (param i32) (result i32) (then)) (unreachable) ) `),
  `inline function type`,
);


assert_invalid(
  () => instantiate(`(module
    (type $$sig (func))
    (func (i32.const 1) (if (type $$sig) (i32.const 0) (then)))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-i32 (result i32) (if (i32.const 0) (then))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-i64 (result i64) (if (i32.const 0) (then))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-f32 (result f32) (if (i32.const 0) (then))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-f64 (result f64) (if (i32.const 0) (then))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-i32 (result i32) (if (i32.const 0) (then) (else))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-i64 (result i64) (if (i32.const 0) (then) (else))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-f32 (result f32) (if (i32.const 0) (then) (else))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-empty-f64 (result f64) (if (i32.const 0) (then) (else))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-num-vs-void
    (if (i32.const 1) (then (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-num-vs-void-else
    (if (i32.const 1) (then (i32.const 1)) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-num-vs-void
    (if (i32.const 1) (then) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-num-vs-void
    (if (i32.const 1) (then (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-nums-vs-void
    (if (i32.const 1) (then (i32.const 1) (i32.const 2)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-nums-vs-void-else
    (if (i32.const 1) (then (i32.const 1) (i32.const 2)) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-nums-vs-void
    (if (i32.const 1) (then) (else (i32.const 1) (i32.const 2)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-nums-vs-void
    (if (i32.const 1) (then (i32.const 1) (i32.const 2)) (else (i32.const 2) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-empty-vs-num (result i32)
    (if (result i32) (i32.const 1) (then) (else (i32.const 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-empty-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 0)) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-empty-vs-num (result i32)
    (if (result i32) (i32.const 1) (then) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-empty-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then) (else (i32.const 0) (i32.const 2)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-empty-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 0) (i32.const 1)) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-empty-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then) (else))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-no-else-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-no-else-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-void-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (nop)) (else (i32.const 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-void-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 0)) (else (nop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-void-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (nop)) (else (nop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (nop)) (else (i32.const 0) (i32.const 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 0) (i32.const 0)) (else (nop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (nop)) (else (nop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-num-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i64.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-num-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1)) (else (i64.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-num-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i64.const 1)) (else (i64.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-num-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1)) (else (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-num-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1) (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-num-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-partial-vs-nums (result i32 i32)
    (i32.const 0)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1)) (else (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-partial-vs-nums (result i32 i32)
    (i32.const 0)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1) (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-partial-vs-nums (result i32 i32)
    (i32.const 0)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-nums-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1) (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-nums-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1)) (else (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-value-nums-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1) (i32.const 1)) (else (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-different-value-num-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i64.const 1)) (else (f64.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-both-different-value-nums-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1) (i32.const 1) (i32.const 1)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-value-unreached-select (result i32)
    (if (result i64)
      (i32.const 0)
      (then (select (unreachable) (unreachable) (unreachable)))
      (else (i64.const 0))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-unreached-select (result i32)
    (if (result i64)
      (i32.const 1)
      (then (i64.const 0))
      (else (select (unreachable) (unreachable) (unreachable)))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-value-unreached-select (result i32)
    (if (result i64)
      (i32.const 1)
      (then (select (unreachable) (unreachable) (unreachable)))
      (else (select (unreachable) (unreachable) (unreachable)))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-last-void-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (br 0)) (else (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-last-void-vs-num (result i32)
    (if (result i32) (i32.const 1) (then (i32.const 1)) (else (br 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-last-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (br 0)) (else (i32.const 1) (i32.const 1)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-last-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1) (then (i32.const 1) (i32.const 1)) (else (br 0)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-empty-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (br 0) (i32.const 1))
      (else (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-empty-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (i32.const 1))
      (else (br 0) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-empty-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (br 0) (i32.const 1) (i32.const 1))
      (else (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-empty-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (i32.const 1) (i32.const 1))
      (else (br 0) (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-void-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (br 0 (nop)) (i32.const 1))
      (else (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-void-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (i32.const 1))
      (else (br 0 (nop)) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (br 0 (nop)) (i32.const 1) (i32.const 1))
      (else (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-void-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (i32.const 1) (i32.const 1))
      (else (br 0 (nop)) (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-num-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (br 0 (i64.const 1)) (i32.const 1))
      (else (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-num-vs-num (result i32)
    (if (result i32) (i32.const 1)
      (then (i32.const 1))
      (else (br 0 (i64.const 1)) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-num-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (br 0 (i64.const 1)) (i32.const 1) (i32.const 1))
      (else (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-num-vs-nums (result i32 i32)
    (if (result i32 i32) (i32.const 1)
      (then (i32.const 1) (i32.const 1))
      (else (br 0 (i64.const 1)) (i32.const 1) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-then-break-partial-vs-nums (result i32 i32)
    (i32.const 1)
    (if (result i32 i32) (i32.const 1)
      (then (br 0 (i64.const 1)) (i32.const 1))
      (else (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-else-break-partial-vs-nums (result i32 i32)
    (i32.const 1)
    (if (result i32 i32) (i32.const 1)
      (then (i32.const 1))
      (else (br 0 (i64.const 1)) (i32.const 1))
    )
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty
      (if (then))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-block
      (i32.const 0)
      (block (if (then)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-loop
      (i32.const 0)
      (loop (if (then)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-then
      (i32.const 0) (i32.const 0)
      (if (then (if (then))))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-else
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (if (then)) (i32.const 0)))
      (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-br
      (i32.const 0)
      (block (br 0 (if(then))) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-br_if
      (i32.const 0)
      (block (br_if 0 (if(then)) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-br_table
      (i32.const 0)
      (block (br_table 0 (if(then))) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-return
      (return (if(then))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-select
      (select (if(then)) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-call
      (call 1 (if(then))) (drop)
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
    (func $$type-condition-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (if(then)) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-local.set
      (local i32)
      (local.set 0 (if(then))) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-condition-empty-in-local.tee
      (local i32)
      (local.tee 0 (if(then))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-condition-empty-in-global.set
      (global.set $$x (if(then))) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-condition-empty-in-memory.grow
      (memory.grow (if(then))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-condition-empty-in-load
      (i32.load (if(then))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-condition-empty-in-store
      (i32.store (if(then)) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-void-vs-num
    (if (param i32) (i32.const 1) (then (drop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-void-vs-nums
    (if (param i32 f64) (i32.const 1) (then (drop) (drop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-num
    (f32.const 0) (if (param i32) (i32.const 1) (then (drop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-nums
    (f32.const 0) (if (param f32 i32) (i32.const 1) (then (drop) (drop)))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-nested-void-vs-num
    (block (if (param i32) (i32.const 1) (then (drop))))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-void-vs-nums
    (block (if (param i32 f64) (i32.const 1) (then (drop) (drop))))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-num
    (block (f32.const 0) (if (param i32) (i32.const 1) (then (drop))))
  ))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-param-num-vs-nums
    (block (f32.const 0) (if (param f32 i32) (i32.const 1) (then (drop) (drop))))
  ))`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(func (param i32) (result i32) if (param $$x i32) end) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (param i32) (result i32) (if (param $$x i32) (then))) `),
  `unexpected token`,
);


assert_malformed(() => instantiate(`(func i32.const 0 if end $$l) `), `mismatching label`);


assert_malformed(
  () => instantiate(`(func i32.const 0 if $$a end $$l) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if else $$l end) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if $$a else $$l end) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if else end $$l) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if else $$l end $$l) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if else $$l1 end $$l2) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if $$a else end $$l) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if $$a else $$a end $$l) `),
  `mismatching label`,
);


assert_malformed(
  () => instantiate(`(func i32.const 0 if $$a else $$l end $$l) `),
  `mismatching label`,
);
