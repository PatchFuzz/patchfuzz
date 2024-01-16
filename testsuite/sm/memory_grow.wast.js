




let $0 = instantiate(`(module
    (memory 0)

    (func (export "load_at_zero") (result i32) (i32.load (i32.const 0)))
    (func (export "store_at_zero") (i32.store (i32.const 0) (i32.const 2)))

    (func (export "load_at_page_size") (result i32) (i32.load (i32.const 0x10000)))
    (func (export "store_at_page_size") (i32.store (i32.const 0x10000) (i32.const 3)))

    (func (export "grow") (param $$sz i32) (result i32) (memory.grow (local.get $$sz)))
    (func (export "size") (result i32) (memory.size))
)`);


assert_return(() => invoke($0, `size`, []), [value("i32", 0)]);


assert_trap(() => invoke($0, `store_at_zero`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_zero`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `store_at_page_size`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_page_size`, []), `out of bounds memory access`);


assert_return(() => invoke($0, `grow`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `store_at_zero`, []), []);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_trap(() => invoke($0, `store_at_page_size`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_page_size`, []), `out of bounds memory access`);


assert_return(() => invoke($0, `grow`, [4]), [value("i32", 1)]);


assert_return(() => invoke($0, `size`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `store_at_zero`, []), []);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `load_at_page_size`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `store_at_page_size`, []), []);


assert_return(() => invoke($0, `load_at_page_size`, []), [value("i32", 3)]);


let $1 = instantiate(`(module
  (memory 0)
  (func (export "grow") (param i32) (result i32) (memory.grow (local.get 0)))
)`);


assert_return(() => invoke($1, `grow`, [0]), [value("i32", 0)]);


assert_return(() => invoke($1, `grow`, [1]), [value("i32", 0)]);


assert_return(() => invoke($1, `grow`, [0]), [value("i32", 1)]);


assert_return(() => invoke($1, `grow`, [2]), [value("i32", 1)]);


assert_return(() => invoke($1, `grow`, [800]), [value("i32", 3)]);


assert_return(() => invoke($1, `grow`, [65536]), [value("i32", -1)]);


assert_return(() => invoke($1, `grow`, [64736]), [value("i32", -1)]);


assert_return(() => invoke($1, `grow`, [1]), [value("i32", 803)]);


let $2 = instantiate(`(module
  (memory 0 10)
  (func (export "grow") (param i32) (result i32) (memory.grow (local.get 0)))
)`);


assert_return(() => invoke($2, `grow`, [0]), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [1]), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [1]), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [2]), [value("i32", 2)]);


assert_return(() => invoke($2, `grow`, [6]), [value("i32", 4)]);


assert_return(() => invoke($2, `grow`, [0]), [value("i32", 10)]);


assert_return(() => invoke($2, `grow`, [1]), [value("i32", -1)]);


assert_return(() => invoke($2, `grow`, [65536]), [value("i32", -1)]);


let $3 = instantiate(`(module
  (memory 1)
  (func (export "grow") (param i32) (result i32)
    (memory.grow (local.get 0))
  )
  (func (export "check-memory-zero") (param i32 i32) (result i32)
    (local i32)
    (local.set 2 (i32.const 1))
    (block
      (loop
        (local.set 2 (i32.load8_u (local.get 0)))
        (br_if 1 (i32.ne (local.get 2) (i32.const 0)))
        (br_if 1 (i32.ge_u (local.get 0) (local.get 1)))
        (local.set 0 (i32.add (local.get 0) (i32.const 1)))
        (br_if 0 (i32.le_u (local.get 0) (local.get 1)))
      )
    )
    (local.get 2)
  )
)`);


assert_return(() => invoke($3, `check-memory-zero`, [0, 65535]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 1)]);


assert_return(() => invoke($3, `check-memory-zero`, [65536, 131071]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 2)]);


assert_return(() => invoke($3, `check-memory-zero`, [131072, 196607]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 3)]);


assert_return(() => invoke($3, `check-memory-zero`, [196608, 262143]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 4)]);


assert_return(() => invoke($3, `check-memory-zero`, [262144, 327679]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 5)]);


assert_return(() => invoke($3, `check-memory-zero`, [327680, 393215]), [value("i32", 0)]);


let $4 = instantiate(`(module
  (memory 1)

  (func (export "as-br-value") (result i32)
    (block (result i32) (br 0 (memory.grow (i32.const 0))))
  )

  (func (export "as-br_if-cond")
    (block (br_if 0 (memory.grow (i32.const 0))))
  )
  (func (export "as-br_if-value") (result i32)
    (block (result i32)
      (drop (br_if 0 (memory.grow (i32.const 0)) (i32.const 1))) (i32.const 7)
    )
  )
  (func (export "as-br_if-value-cond") (result i32)
    (block (result i32)
      (drop (br_if 0 (i32.const 6) (memory.grow (i32.const 0)))) (i32.const 7)
    )
  )

  (func (export "as-br_table-index")
    (block (br_table 0 0 0 (memory.grow (i32.const 0))))
  )
  (func (export "as-br_table-value") (result i32)
    (block (result i32)
      (br_table 0 0 0 (memory.grow (i32.const 0)) (i32.const 1)) (i32.const 7)
    )
  )
  (func (export "as-br_table-value-index") (result i32)
    (block (result i32)
      (br_table 0 0 (i32.const 6) (memory.grow (i32.const 0))) (i32.const 7)
    )
  )

  (func (export "as-return-value") (result i32)
    (return (memory.grow (i32.const 0)))
  )

  (func (export "as-if-cond") (result i32)
    (if (result i32) (memory.grow (i32.const 0))
      (then (i32.const 0)) (else (i32.const 1))
    )
  )
  (func (export "as-if-then") (result i32)
    (if (result i32) (i32.const 1)
      (then (memory.grow (i32.const 0))) (else (i32.const 0))
    )
  )
  (func (export "as-if-else") (result i32)
    (if (result i32) (i32.const 0)
      (then (i32.const 0)) (else (memory.grow (i32.const 0)))
    )
  )

  (func (export "as-select-first") (param i32 i32) (result i32)
    (select (memory.grow (i32.const 0)) (local.get 0) (local.get 1))
  )
  (func (export "as-select-second") (param i32 i32) (result i32)
    (select (local.get 0) (memory.grow (i32.const 0)) (local.get 1))
  )
  (func (export "as-select-cond") (result i32)
    (select (i32.const 0) (i32.const 1) (memory.grow (i32.const 0)))
  )

  (func $$f (param i32 i32 i32) (result i32) (i32.const -1))
  (func (export "as-call-first") (result i32)
    (call $$f (memory.grow (i32.const 0)) (i32.const 2) (i32.const 3))
  )
  (func (export "as-call-mid") (result i32)
    (call $$f (i32.const 1) (memory.grow (i32.const 0)) (i32.const 3))
  )
  (func (export "as-call-last") (result i32)
    (call $$f (i32.const 1) (i32.const 2) (memory.grow (i32.const 0)))
  )

  (type $$sig (func (param i32 i32 i32) (result i32)))
  (table funcref (elem $$f))
  (func (export "as-call_indirect-first") (result i32)
    (call_indirect (type $$sig)
      (memory.grow (i32.const 0)) (i32.const 2) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-mid") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (memory.grow (i32.const 0)) (i32.const 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-last") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (memory.grow (i32.const 0)) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-index") (result i32)
    (call_indirect (type $$sig)
      (i32.const 1) (i32.const 2) (i32.const 3) (memory.grow (i32.const 0))
    )
  )

  (func (export "as-local.set-value") (local i32)
    (local.set 0 (memory.grow (i32.const 0)))
  )
  (func (export "as-local.tee-value") (result i32) (local i32)
    (local.tee 0 (memory.grow (i32.const 0)))
  )
  (global $$g (mut i32) (i32.const 0))
  (func (export "as-global.set-value") (local i32)
    (global.set $$g (memory.grow (i32.const 0)))
  )

  (func (export "as-load-address") (result i32)
    (i32.load (memory.grow (i32.const 0)))
  )
  (func (export "as-loadN-address") (result i32)
    (i32.load8_s (memory.grow (i32.const 0)))
  )

  (func (export "as-store-address")
    (i32.store (memory.grow (i32.const 0)) (i32.const 7))
  )
  (func (export "as-store-value")
    (i32.store (i32.const 2) (memory.grow (i32.const 0)))
  )

  (func (export "as-storeN-address")
    (i32.store8 (memory.grow (i32.const 0)) (i32.const 7))
  )
  (func (export "as-storeN-value")
    (i32.store16 (i32.const 2) (memory.grow (i32.const 0)))
  )

  (func (export "as-unary-operand") (result i32)
    (i32.clz (memory.grow (i32.const 0)))
  )

  (func (export "as-binary-left") (result i32)
    (i32.add (memory.grow (i32.const 0)) (i32.const 10))
  )
  (func (export "as-binary-right") (result i32)
    (i32.sub (i32.const 10) (memory.grow (i32.const 0)))
  )

  (func (export "as-test-operand") (result i32)
    (i32.eqz (memory.grow (i32.const 0)))
  )

  (func (export "as-compare-left") (result i32)
    (i32.le_s (memory.grow (i32.const 0)) (i32.const 10))
  )
  (func (export "as-compare-right") (result i32)
    (i32.ne (i32.const 10) (memory.grow (i32.const 0)))
  )

  (func (export "as-memory.grow-size") (result i32)
    (memory.grow (memory.grow (i32.const 0)))
  )
)`);


assert_return(() => invoke($4, `as-br-value`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-br_if-cond`, []), []);


assert_return(() => invoke($4, `as-br_if-value`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-br_if-value-cond`, []), [value("i32", 6)]);


assert_return(() => invoke($4, `as-br_table-index`, []), []);


assert_return(() => invoke($4, `as-br_table-value`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-br_table-value-index`, []), [value("i32", 6)]);


assert_return(() => invoke($4, `as-return-value`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-if-cond`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `as-if-then`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-if-else`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-select-first`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($4, `as-select-second`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($4, `as-select-cond`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `as-call-first`, []), [value("i32", -1)]);


assert_return(() => invoke($4, `as-call-mid`, []), [value("i32", -1)]);


assert_return(() => invoke($4, `as-call-last`, []), [value("i32", -1)]);


assert_return(() => invoke($4, `as-call_indirect-first`, []), [value("i32", -1)]);


assert_return(() => invoke($4, `as-call_indirect-mid`, []), [value("i32", -1)]);


assert_return(() => invoke($4, `as-call_indirect-last`, []), [value("i32", -1)]);


assert_trap(() => invoke($4, `as-call_indirect-index`, []), `undefined element`);


assert_return(() => invoke($4, `as-local.set-value`, []), []);


assert_return(() => invoke($4, `as-local.tee-value`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-global.set-value`, []), []);


assert_return(() => invoke($4, `as-load-address`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `as-loadN-address`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `as-store-address`, []), []);


assert_return(() => invoke($4, `as-store-value`, []), []);


assert_return(() => invoke($4, `as-storeN-address`, []), []);


assert_return(() => invoke($4, `as-storeN-value`, []), []);


assert_return(() => invoke($4, `as-unary-operand`, []), [value("i32", 31)]);


assert_return(() => invoke($4, `as-binary-left`, []), [value("i32", 11)]);


assert_return(() => invoke($4, `as-binary-right`, []), [value("i32", 9)]);


assert_return(() => invoke($4, `as-test-operand`, []), [value("i32", 0)]);


assert_return(() => invoke($4, `as-compare-left`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-compare-right`, []), [value("i32", 1)]);


assert_return(() => invoke($4, `as-memory.grow-size`, []), [value("i32", 1)]);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-size-empty-vs-i32 (result i32)
      (memory.grow)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-size-empty-vs-i32-in-block (result i32)
      (i32.const 0)
      (block (result i32) (memory.grow))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-size-empty-vs-i32-in-loop (result i32)
      (i32.const 0)
      (loop (result i32) (memory.grow))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-size-empty-vs-i32-in-then (result i32)
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (memory.grow)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-size-f32-vs-i32 (result i32)
      (memory.grow (f32.const 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-result-i32-vs-empty
      (memory.grow (i32.const 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-result-i32-vs-f32 (result f32)
      (memory.grow (i32.const 0))
    )
  )`),
  `type mismatch`,
);
