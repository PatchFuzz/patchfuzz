




let $0 = instantiate(`(module
  (table $$t 10 externref)

  (func (export "fill") (param $$i i32) (param $$r externref) (param $$n i32)
    (table.fill $$t (local.get $$i) (local.get $$r) (local.get $$n))
  )

  (func (export "fill-abbrev") (param $$i i32) (param $$r externref) (param $$n i32)
    (table.fill (local.get $$i) (local.get $$r) (local.get $$n))
  )

  (func (export "get") (param $$i i32) (result externref)
    (table.get $$t (local.get $$i))
  )
)`);


assert_return(() => invoke($0, `get`, [1]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [2]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [3]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [4]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [5]), [value('externref', null)]);


assert_return(() => invoke($0, `fill`, [2, externref(1), 3]), []);


assert_return(() => invoke($0, `get`, [1]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [2]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `get`, [3]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `get`, [4]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `get`, [5]), [value('externref', null)]);


assert_return(() => invoke($0, `fill`, [4, externref(2), 2]), []);


assert_return(() => invoke($0, `get`, [3]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `get`, [4]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `get`, [5]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `get`, [6]), [value('externref', null)]);


assert_return(() => invoke($0, `fill`, [4, externref(3), 0]), []);


assert_return(() => invoke($0, `get`, [3]), [value('externref', externref(1))]);


assert_return(() => invoke($0, `get`, [4]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `get`, [5]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `fill`, [8, externref(4), 2]), []);


assert_return(() => invoke($0, `get`, [7]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [8]), [value('externref', externref(4))]);


assert_return(() => invoke($0, `get`, [9]), [value('externref', externref(4))]);


assert_return(() => invoke($0, `fill-abbrev`, [9, null, 1]), []);


assert_return(() => invoke($0, `get`, [8]), [value('externref', externref(4))]);


assert_return(() => invoke($0, `get`, [9]), [value('externref', null)]);


assert_return(() => invoke($0, `fill`, [10, externref(5), 0]), []);


assert_return(() => invoke($0, `get`, [9]), [value('externref', null)]);


assert_trap(() => invoke($0, `fill`, [8, externref(6), 3]), `out of bounds table access`);


assert_return(() => invoke($0, `get`, [7]), [value('externref', null)]);


assert_return(() => invoke($0, `get`, [8]), [value('externref', externref(4))]);


assert_return(() => invoke($0, `get`, [9]), [value('externref', null)]);


assert_trap(() => invoke($0, `fill`, [11, null, 0]), `out of bounds table access`);


assert_trap(() => invoke($0, `fill`, [11, null, 10]), `out of bounds table access`);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-index-value-length-empty-vs-i32-i32
      (table.fill $$t)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-index-empty-vs-i32
      (table.fill $$t (ref.null extern) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-value-empty-vs
      (table.fill $$t (i32.const 1) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 10 externref)
    (func $$type-length-empty-vs-i32
      (table.fill $$t (i32.const 1) (ref.null extern))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-index-f32-vs-i32
      (table.fill $$t (f32.const 1) (ref.null extern) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 funcref)
    (func $$type-value-vs-funcref (param $$r externref)
      (table.fill $$t (i32.const 1) (local.get $$r) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-length-f32-vs-i32
      (table.fill $$t (i32.const 1) (ref.null extern) (f32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t1 1 externref)
    (table $$t2 1 funcref)
    (func $$type-value-externref-vs-funcref-multi (param $$r externref)
      (table.fill $$t2 (i32.const 0) (local.get $$r) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 1 externref)
    (func $$type-result-empty-vs-num (result i32)
      (table.fill $$t (i32.const 0) (ref.null extern) (i32.const 1))
    )
  )`),
  `type mismatch`,
);
