




let $0 = instantiate(`(module
  ;; Auxiliary definitions
  (func $$dummy)
  (func $$3-ary (param i32 i32 i32) (result i32)
    local.get 0 local.get 1 local.get 2 i32.sub i32.add
  )
  (memory 1)

  (func (export "as-func-first") (result i32)
    (nop) (i32.const 1)
  )
  (func (export "as-func-mid") (result i32)
    (call $$dummy) (nop) (i32.const 2)
  )
  (func (export "as-func-last") (result i32)
    (call $$dummy) (i32.const 3) (nop)
  )
  (func (export "as-func-everywhere") (result i32)
    (nop) (nop) (call $$dummy) (nop) (i32.const 4) (nop) (nop)
  )

  (func (export "as-drop-first") (param i32)
    (nop) (local.get 0) (drop)
  )
  (func (export "as-drop-last") (param i32)
    (local.get 0) (nop) (drop)
  )
  (func (export "as-drop-everywhere") (param i32)
    (nop) (nop) (local.get 0) (nop) (nop) (drop)
  )

  (func (export "as-select-first") (param i32) (result i32)
    (nop) (local.get 0) (local.get 0) (local.get 0) (select)
  )
  (func (export "as-select-mid1") (param i32) (result i32)
    (local.get 0) (nop) (local.get 0) (local.get 0) (select)
  )
  (func (export "as-select-mid2") (param i32) (result i32)
    (local.get 0) (local.get 0) (nop) (local.get 0) (select)
  )
  (func (export "as-select-last") (param i32) (result i32)
    (local.get 0) (local.get 0) (local.get 0) (nop) (select)
  )
  (func (export "as-select-everywhere") (param i32) (result i32)
    (nop) (local.get 0) (nop) (nop) (local.get 0)
    (nop) (nop) (local.get 0) (nop) (nop) (select)
  )

  (func (export "as-block-first") (result i32)
    (block (result i32) (nop) (i32.const 2))
  )
  (func (export "as-block-mid") (result i32)
    (block (result i32) (call $$dummy) (nop) (i32.const 2))
  )
  (func (export "as-block-last") (result i32)
    (block (result i32) (nop) (call $$dummy) (i32.const 3) (nop))
  )
  (func (export "as-block-everywhere") (result i32)
    (block (result i32)
      (nop) (nop) (call $$dummy) (nop) (i32.const 4) (nop) (nop)
    )
  )

  (func (export "as-loop-first") (result i32)
    (loop (result i32) (nop) (i32.const 2))
  )
  (func (export "as-loop-mid") (result i32)
    (loop (result i32) (call $$dummy) (nop) (i32.const 2))
  )
  (func (export "as-loop-last") (result i32)
    (loop (result i32) (call $$dummy) (i32.const 3) (nop))
  )
  (func (export "as-loop-everywhere") (result i32)
    (loop (result i32)
      (nop) (nop) (call $$dummy) (nop) (i32.const 4) (nop) (nop)
    )
  )

  (func (export "as-if-condition") (param i32)
    (local.get 0) (nop) (if (then (call $$dummy)))
  )
  (func (export "as-if-then") (param i32)
    (if (local.get 0) (then (nop)) (else (call $$dummy)))
  )
  (func (export "as-if-else") (param i32)
    (if (local.get 0) (then (call $$dummy)) (else (nop)))
  )

  (func (export "as-br-first") (param i32) (result i32)
    (block (result i32) (nop) (local.get 0) (br 0))
  )
  (func (export "as-br-last") (param i32) (result i32)
    (block (result i32) (local.get 0) (nop) (br 0))
  )
  (func (export "as-br-everywhere") (param i32) (result i32)
    (block (result i32) (nop) (nop) (local.get 0) (nop) (nop) (br 0))
  )

  (func (export "as-br_if-first") (param i32) (result i32)
    (block (result i32) (nop) (local.get 0) (local.get 0) (br_if 0))
  )
  (func (export "as-br_if-mid") (param i32) (result i32)
    (block (result i32) (local.get 0) (nop) (local.get 0) (br_if 0))
  )
  (func (export "as-br_if-last") (param i32) (result i32)
    (block (result i32) (local.get 0) (local.get 0) (nop) (br_if 0))
  )
  (func (export "as-br_if-everywhere") (param i32) (result i32)
    (block (result i32)
      (nop) (nop) (local.get 0) (nop) (nop) (local.get 0) (nop) (nop)
      (br_if 0)
    )
  )

  (func (export "as-br_table-first") (param i32) (result i32)
    (block (result i32) (nop) (local.get 0) (local.get 0) (br_table 0 0))
  )
  (func (export "as-br_table-mid") (param i32) (result i32)
    (block (result i32) (local.get 0) (nop) (local.get 0) (br_table 0 0))
  )
  (func (export "as-br_table-last") (param i32) (result i32)
    (block (result i32) (local.get 0) (local.get 0) (nop) (br_table 0 0))
  )
  (func (export "as-br_table-everywhere") (param i32) (result i32)
    (block (result i32)
      (nop) (nop) (local.get 0) (nop) (nop) (local.get 0) (nop) (nop)
      (br_table 0 0)
    )
  )

  (func (export "as-return-first") (param i32) (result i32)
    (nop) (local.get 0) (return)
  )
  (func (export "as-return-last") (param i32) (result i32)
    (local.get 0) (nop) (return)
  )
  (func (export "as-return-everywhere") (param i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) (return)
  )

  (func (export "as-call-first") (param i32 i32 i32) (result i32)
    (nop) (local.get 0) (local.get 1) (local.get 2) (call $$3-ary)
  )
  (func (export "as-call-mid1") (param i32 i32 i32) (result i32)
    (local.get 0) (nop) (local.get 1) (local.get 2) (call $$3-ary)
  )
  (func (export "as-call-mid2") (param i32 i32 i32) (result i32)
    (local.get 0) (local.get 1) (nop) (local.get 2) (call $$3-ary)
  )
  (func (export "as-call-last") (param i32 i32 i32) (result i32)
    (local.get 0) (local.get 1) (local.get 2) (nop) (call $$3-ary)
  )
  (func (export "as-call-everywhere") (param i32 i32 i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) (local.get 1)
    (nop) (nop) (local.get 2) (nop) (nop) (call $$3-ary)
  )

  (func (export "as-unary-first") (param i32) (result i32)
    (nop) (local.get 0) (i32.ctz)
  )
  (func (export "as-unary-last") (param i32) (result i32)
    (local.get 0) (nop) (i32.ctz)
  )
  (func (export "as-unary-everywhere") (param i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) (i32.ctz)
  )

  (func (export "as-binary-first") (param i32) (result i32)
    (nop) (local.get 0) (local.get 0) (i32.add)
  )
  (func (export "as-binary-mid") (param i32) (result i32)
    (local.get 0) (nop) (local.get 0) (i32.add)
  )
  (func (export "as-binary-last") (param i32) (result i32)
    (local.get 0) (local.get 0) (nop) (i32.add)
  )
  (func (export "as-binary-everywhere") (param i32) (result i32)
    (nop) (local.get 0) (nop) (nop) (local.get 0) (nop) (nop) (i32.add)
  )

  (func (export "as-test-first") (param i32) (result i32)
    (nop) (local.get 0) (i32.eqz)
  )
  (func (export "as-test-last") (param i32) (result i32)
    (local.get 0) (nop) (i32.eqz)
  )
  (func (export "as-test-everywhere") (param i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) i32.eqz
  )

  (func (export "as-compare-first") (param i32) (result i32)
    (nop) (local.get 0) (local.get 0) (i32.ne)
  )
  (func (export "as-compare-mid") (param i32) (result i32)
    (local.get 0) (nop) (local.get 0) (i32.ne)
  )
  (func (export "as-compare-last") (param i32) (result i32)
    (local.get 0) (local.get 0) (nop) (i32.lt_u)
  )
  (func (export "as-compare-everywhere") (param i32) (result i32)
    (nop) (local.get 0) (nop) (nop) (local.get 0) (nop) (nop) (i32.le_s)
  )

  (func (export "as-memory.grow-first") (param i32) (result i32)
    (nop) (local.get 0) (memory.grow)
  )
  (func (export "as-memory.grow-last") (param i32) (result i32)
    (local.get 0) (nop) (memory.grow)
  )
  (func (export "as-memory.grow-everywhere") (param i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) (memory.grow)
  )

  (func $$func (param i32 i32) (result i32) (local.get 0))
  (type $$check (func (param i32 i32) (result i32)))
  (table funcref (elem $$func))
  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (nop) (i32.const 1) (i32.const 2) (i32.const 0)
      (call_indirect (type $$check))
    )
  )
  (func (export "as-call_indirect-mid1") (result i32)
    (block (result i32)
      (i32.const 1) (nop) (i32.const 2) (i32.const 0)
      (call_indirect (type $$check))
    )
  )
  (func (export "as-call_indirect-mid2") (result i32)
    (block (result i32)
      (i32.const 1) (i32.const 2) (nop) (i32.const 0)
      (call_indirect (type $$check))
    )
  )
  (func (export "as-call_indirect-last") (result i32)
    (block (result i32)
      (i32.const 1) (i32.const 2) (i32.const 0) (nop)
      (call_indirect (type $$check))
    )
  )
  (func (export "as-call_indirect-everywhere") (result i32)
    (block (result i32)
      (nop) (nop) (i32.const 1) (nop) (nop) (i32.const 2) (nop) (nop) (i32.const 0) (nop) (nop)
      (call_indirect (type $$check))
    )
  )

  (func (export "as-local.set-first") (param i32) (result i32)
    (nop) (i32.const 2) (local.set 0) (local.get 0)
  )
  (func (export "as-local.set-last") (param i32) (result i32)
    (i32.const 2) (nop) (local.set 0) (local.get 0)
  )
  (func (export "as-local.set-everywhere") (param i32) (result i32)
    (nop) (nop) (i32.const 2) (nop) (nop) (local.set 0) (local.get 0)
  )

  (func (export "as-local.tee-first") (param i32) (result i32)
    (nop) (i32.const 2) (local.tee 0)
  )
  (func (export "as-local.tee-last") (param i32) (result i32)
    (i32.const 2) (nop) (local.tee 0)
  )
  (func (export "as-local.tee-everywhere") (param i32) (result i32)
    (nop) (nop) (i32.const 2) (nop) (nop) (local.tee 0)
  )

  (global $$a (mut i32) (i32.const 0))
  (func (export "as-global.set-first") (result i32)
    (nop) (i32.const 2) (global.set $$a) (global.get $$a)
  )
  (func (export "as-global.set-last") (result i32)
    (i32.const 2) (nop) (global.set $$a) (global.get $$a)
  )
  (func (export "as-global.set-everywhere") (result i32)
    (nop) (nop) (i32.const 2) (nop) (nop) (global.set 0)
    (global.get $$a)
  )

  (func (export "as-load-first") (param i32) (result i32)
    (nop) (local.get 0) (i32.load)
  )
  (func (export "as-load-last") (param i32) (result i32)
    (local.get 0) (nop) (i32.load)
  )
  (func (export "as-load-everywhere") (param i32) (result i32)
    (nop) (nop) (local.get 0) (nop) (nop) (i32.load)
  )

  (func (export "as-store-first") (param i32 i32)
    (nop) (local.get 0) (local.get 1) (i32.store)
  )
  (func (export "as-store-mid") (param i32 i32)
    (local.get 0) (nop) (local.get 1) (i32.store)
  )
  (func (export "as-store-last") (param i32 i32)
    (local.get 0) (local.get 1) (nop) (i32.store)
  )
  (func (export "as-store-everywhere") (param i32 i32)
    (nop) (nop) (local.get 0) (nop) (nop) (local.get 1) (nop) (nop) (i32.store)
  )
)`);


assert_return(() => invoke($0, `as-func-first`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-func-mid`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-func-last`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `as-func-everywhere`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-drop-first`, [0]), []);


assert_return(() => invoke($0, `as-drop-last`, [0]), []);


assert_return(() => invoke($0, `as-drop-everywhere`, [0]), []);


assert_return(() => invoke($0, `as-select-first`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-mid1`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-mid2`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-last`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-select-everywhere`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-block-first`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-block-mid`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-block-last`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `as-block-everywhere`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-loop-first`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-mid`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-last`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `as-loop-everywhere`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `as-if-condition`, [0]), []);


assert_return(() => invoke($0, `as-if-condition`, [-1]), []);


assert_return(() => invoke($0, `as-if-then`, [0]), []);


assert_return(() => invoke($0, `as-if-then`, [4]), []);


assert_return(() => invoke($0, `as-if-else`, [0]), []);


assert_return(() => invoke($0, `as-if-else`, [3]), []);


assert_return(() => invoke($0, `as-br-first`, [5]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-br-last`, [6]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br-everywhere`, [7]), [value("i32", 7)]);


assert_return(() => invoke($0, `as-br_if-first`, [4]), [value("i32", 4)]);


assert_return(() => invoke($0, `as-br_if-mid`, [5]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-br_if-last`, [6]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_if-everywhere`, [7]), [value("i32", 7)]);


assert_return(() => invoke($0, `as-br_table-first`, [4]), [value("i32", 4)]);


assert_return(() => invoke($0, `as-br_table-mid`, [5]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-br_table-last`, [6]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_table-everywhere`, [7]), [value("i32", 7)]);


assert_return(() => invoke($0, `as-return-first`, [5]), [value("i32", 5)]);


assert_return(() => invoke($0, `as-return-last`, [6]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-return-everywhere`, [7]), [value("i32", 7)]);


assert_return(() => invoke($0, `as-call-first`, [3, 1, 2]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call-mid1`, [3, 1, 2]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call-mid2`, [0, 3, 1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call-last`, [10, 9, -1]), [value("i32", 20)]);


assert_return(() => invoke($0, `as-call-everywhere`, [2, 1, 5]), [value("i32", -2)]);


assert_return(() => invoke($0, `as-unary-first`, [30]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-unary-last`, [30]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-unary-everywhere`, [12]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-binary-first`, [3]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-binary-mid`, [3]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-binary-last`, [3]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-binary-everywhere`, [3]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-test-first`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-test-last`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-test-everywhere`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-compare-first`, [3]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-mid`, [3]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-last`, [3]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-compare-everywhere`, [3]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-first`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-last`, [2]), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-everywhere`, [12]), [value("i32", 3)]);


assert_return(() => invoke($0, `as-call_indirect-first`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call_indirect-mid1`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call_indirect-mid2`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call_indirect-last`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call_indirect-everywhere`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-local.set-first`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-local.set-last`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-local.set-everywhere`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-local.tee-first`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-local.tee-last`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-local.tee-everywhere`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `as-global.set-first`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-global.set-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-global.set-everywhere`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-load-first`, [100]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-load-last`, [100]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-load-everywhere`, [100]), [value("i32", 0)]);


assert_return(() => invoke($0, `as-store-first`, [0, 1]), []);


assert_return(() => invoke($0, `as-store-mid`, [0, 2]), []);


assert_return(() => invoke($0, `as-store-last`, [0, 3]), []);


assert_return(() => invoke($0, `as-store-everywhere`, [0, 4]), []);


assert_invalid(
  () => instantiate(`(module (func $$type-i32 (result i32) (nop)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-i64 (result i64) (nop)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-f32 (result f32) (nop)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$type-f64 (result f64) (nop)))`),
  `type mismatch`,
);
