




let $0 = instantiate(`(module
  (table $$t2 1 externref)
  (table $$t3 2 funcref)
  (elem (table $$t3) (i32.const 1) func $$dummy)
  (func $$dummy)

  (func (export "get-externref") (param $$i i32) (result externref)
    (table.get $$t2 (local.get $$i))
  )
  (func $$f3 (export "get-funcref") (param $$i i32) (result funcref)
    (table.get $$t3 (local.get $$i))
  )

  (func (export "set-externref") (param $$i i32) (param $$r externref)
    (table.set (local.get $$i) (local.get $$r))
  )
  (func (export "set-funcref") (param $$i i32) (param $$r funcref)
    (table.set $$t3 (local.get $$i) (local.get $$r))
  )
  (func (export "set-funcref-from") (param $$i i32) (param $$j i32)
    (table.set $$t3 (local.get $$i) (table.get $$t3 (local.get $$j)))
  )

  (func (export "is_null-funcref") (param $$i i32) (result i32)
    (ref.is_null (call $$f3 (local.get $$i)))
  )
)`);


assert_return(() => invoke($0, `get-externref`, [0]), [value('externref', null)]);


assert_return(() => invoke($0, `set-externref`, [0, externref(1)]), []);


assert_return(() => invoke($0, `get-externref`, [0]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `set-externref`, [0, null]), []);


assert_return(() => invoke($0, `get-externref`, [0]), [value('externref', null)]);


assert_return(() => invoke($0, `get-funcref`, [0]), [value('anyfunc', null)]);


assert_return(() => invoke($0, `set-funcref-from`, [0, 1]), []);


assert_return(() => invoke($0, `is_null-funcref`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `set-funcref`, [0, null]), []);


assert_return(() => invoke($0, `get-funcref`, [0]), [value('anyfunc', null)]);


assert_trap(() => invoke($0, `set-externref`, [2, null]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-funcref`, [3, null]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-externref`, [-1, null]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-funcref`, [-1, null]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-externref`, [2, externref(0)]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-funcref-from`, [3, 1]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-externref`, [-1, externref(0)]), `out of bounds table access`);


assert_trap(() => invoke($0, `set-funcref-from`, [-1, 1]), `out of bounds table access`);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-index-value-empty-vs-i32-externref
      (table.set $$t)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-index-empty-vs-i32
      (table.set $$t (ref.null extern))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-value-empty-vs-externref
      (table.set $$t (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-size-f32-vs-i32
      (table.set $$t (f32.const 1) (ref.null extern))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 funcref)
    (func $$type-value-externref-vs-funcref (param $$r externref)
      (table.set $$t (i32.const 1) (local.get $$r))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t1 1 externref)
    (table $$t2 1 funcref)
    (func $$type-value-externref-vs-funcref-multi (param $$r externref)
      (table.set $$t2 (i32.const 0) (local.get $$r))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-result-empty-vs-num (result i32)
      (table.set $$t (i32.const 0) (ref.null extern))
    )
  )`),
  `type mismatch`,
);
