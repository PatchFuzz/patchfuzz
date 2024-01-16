




let $0 = instantiate(`(module
  (table $$t 0 externref)

  (func (export "get") (param $$i i32) (result externref) (table.get $$t (local.get $$i)))
  (func (export "set") (param $$i i32) (param $$r externref) (table.set $$t (local.get $$i) (local.get $$r)))

  (func (export "grow") (param $$sz i32) (param $$init externref) (result i32)
    (table.grow $$t (local.get $$init) (local.get $$sz))
  )
  (func (export "grow-abbrev") (param $$sz i32) (param $$init externref) (result i32)
    (table.grow (local.get $$init) (local.get $$sz))
  )
  (func (export "size") (result i32) (table.size $$t))
)`);


assert_return(() => invoke($0, `size`, []), [value("i32", 0)]);


assert_trap(() => invoke($0, `set`, [0, externref(2)]), `out of bounds table access`);


assert_trap(() => invoke($0, `get`, [0]), `out of bounds table access`);


assert_return(() => invoke($0, `grow`, [1, null]), [value("i32", 0)]);


assert_return(() => invoke($0, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `get`, [0]), [value('externref', null)]);


assert_return(() => invoke($0, `set`, [0, externref(2)]), []);


assert_return(() => invoke($0, `get`, [0]), [value('externref', externref(2))]);


assert_trap(() => invoke($0, `set`, [1, externref(2)]), `out of bounds table access`);


assert_trap(() => invoke($0, `get`, [1]), `out of bounds table access`);


assert_return(() => invoke($0, `grow-abbrev`, [4, externref(3)]), [value("i32", 1)]);


assert_return(() => invoke($0, `size`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `get`, [0]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `set`, [0, externref(2)]), []);


assert_return(() => invoke($0, `get`, [0]), [value('externref', externref(2))]);


assert_return(() => invoke($0, `get`, [1]), [value('externref', externref(3))]);


assert_return(() => invoke($0, `get`, [4]), [value('externref', externref(3))]);


assert_return(() => invoke($0, `set`, [4, externref(4)]), []);


assert_return(() => invoke($0, `get`, [4]), [value('externref', externref(4))]);


assert_trap(() => invoke($0, `set`, [5, externref(2)]), `out of bounds table access`);


assert_trap(() => invoke($0, `get`, [5]), `out of bounds table access`);


let $1 = instantiate(`(module
  (table $$t 0x10 funcref)
  (elem declare func $$f)
  (func $$f (export "grow") (result i32)
    (table.grow $$t (ref.func $$f) (i32.const 0xffff_fff0))
  )
)`);


assert_return(() => invoke($1, `grow`, []), [value("i32", -1)]);


let $2 = instantiate(`(module
  (table $$t 0 externref)
  (func (export "grow") (param i32) (result i32)
    (table.grow $$t (ref.null extern) (local.get 0))
  )
)`);


assert_return(() => invoke($2, `grow`, [0]), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [1]), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [0]), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [2]), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [800]), [value("i32", 3)]);


let $3 = instantiate(`(module
  (table $$t 0 10 externref)
  (func (export "grow") (param i32) (result i32)
    (table.grow $$t (ref.null extern) (local.get 0))
  )
)`);


assert_return(() => invoke($3, `grow`, [0]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", 1)]);


assert_return(() => invoke($3, `grow`, [2]), [value("i32", 2)]);


assert_return(() => invoke($3, `grow`, [6]), [value("i32", 4)]);


assert_return(() => invoke($3, `grow`, [0]), [value("i32", 10)]);


assert_return(() => invoke($3, `grow`, [1]), [value("i32", -1)]);


assert_return(() => invoke($3, `grow`, [65536]), [value("i32", -1)]);


let $4 = instantiate(`(module
  (table $$t 10 funcref)
  (func (export "grow") (param i32) (result i32)
    (table.grow $$t (ref.null func) (local.get 0))
  )
  (elem declare func 1)
  (func (export "check-table-null") (param i32 i32) (result funcref)
    (local funcref)
    (local.set 2 (ref.func 1))
    (block
      (loop
        (local.set 2 (table.get $$t (local.get 0)))
        (br_if 1 (i32.eqz (ref.is_null (local.get 2))))
        (br_if 1 (i32.ge_u (local.get 0) (local.get 1)))
        (local.set 0 (i32.add (local.get 0) (i32.const 1)))
        (br_if 0 (i32.le_u (local.get 0) (local.get 1)))
      )
    )
    (local.get 2)
  )
)`);


assert_return(() => invoke($4, `check-table-null`, [0, 9]), [value('anyfunc', null)]);


assert_return(() => invoke($4, `grow`, [10]), [value("i32", 10)]);


assert_return(() => invoke($4, `check-table-null`, [0, 19]), [value('anyfunc', null)]);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-init-size-empty-vs-i32-externref (result i32)
      (table.grow $$t)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-size-empty-vs-i32 (result i32)
      (table.grow $$t (ref.null extern))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-init-empty-vs-externref (result i32)
      (table.grow $$t (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 externref)
    (func $$type-size-f32-vs-i32 (result i32)
      (table.grow $$t (ref.null extern) (f32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 0 funcref)
    (func $$type-init-externref-vs-funcref (param $$r externref) (result i32)
      (table.grow $$t (local.get $$r) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 1 externref)
    (func $$type-result-i32-vs-empty
      (table.grow $$t (ref.null extern) (i32.const 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 1 externref)
    (func $$type-result-i32-vs-f32 (result f32)
      (table.grow $$t (ref.null extern) (i32.const 0))
    )
  )`),
  `type mismatch`,
);
