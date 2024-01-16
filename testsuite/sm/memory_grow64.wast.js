




let $0 = instantiate(`(module
    (memory i64 0)

    (func (export "load_at_zero") (result i32) (i32.load (i64.const 0)))
    (func (export "store_at_zero") (i32.store (i64.const 0) (i32.const 2)))

    (func (export "load_at_page_size") (result i32) (i32.load (i64.const 0x10000)))
    (func (export "store_at_page_size") (i32.store (i64.const 0x10000) (i32.const 3)))

    (func (export "grow") (param $$sz i64) (result i64) (memory.grow (local.get $$sz)))
    (func (export "size") (result i64) (memory.size))
)`);


assert_return(() => invoke($0, `size`, []), [value("i64", 0n)]);


assert_trap(() => invoke($0, `store_at_zero`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_zero`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `store_at_page_size`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_page_size`, []), `out of bounds memory access`);


assert_return(() => invoke($0, `grow`, [1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `size`, []), [value("i64", 1n)]);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `store_at_zero`, []), []);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_trap(() => invoke($0, `store_at_page_size`, []), `out of bounds memory access`);


assert_trap(() => invoke($0, `load_at_page_size`, []), `out of bounds memory access`);


assert_return(() => invoke($0, `grow`, [4n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `size`, []), [value("i64", 5n)]);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `store_at_zero`, []), []);


assert_return(() => invoke($0, `load_at_zero`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `load_at_page_size`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `store_at_page_size`, []), []);


assert_return(() => invoke($0, `load_at_page_size`, []), [value("i32", 3)]);


let $1 = instantiate(`(module
  (memory i64 0)
  (func (export "grow") (param i64) (result i64) (memory.grow (local.get 0)))
)`);


assert_return(() => invoke($1, `grow`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `grow`, [1n]), [value("i64", 0n)]);


assert_return(() => invoke($1, `grow`, [0n]), [value("i64", 1n)]);


assert_return(() => invoke($1, `grow`, [2n]), [value("i64", 1n)]);


assert_return(() => invoke($1, `grow`, [800n]), [value("i64", 3n)]);


assert_return(() => invoke($1, `grow`, [1n]), [value("i64", 803n)]);


let $2 = instantiate(`(module
  (memory i64 0 10)
  (func (export "grow") (param i64) (result i64) (memory.grow (local.get 0)))
)`);


assert_return(() => invoke($2, `grow`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($2, `grow`, [1n]), [value("i64", 0n)]);


assert_return(() => invoke($2, `grow`, [1n]), [value("i64", 1n)]);


assert_return(() => invoke($2, `grow`, [2n]), [value("i64", 2n)]);


assert_return(() => invoke($2, `grow`, [6n]), [value("i64", 4n)]);


assert_return(() => invoke($2, `grow`, [0n]), [value("i64", 10n)]);


assert_return(() => invoke($2, `grow`, [1n]), [value("i64", -1n)]);


assert_return(() => invoke($2, `grow`, [65536n]), [value("i64", -1n)]);


let $3 = instantiate(`(module
  (memory i64 1)
  (func (export "grow") (param i64) (result i64)
    (memory.grow (local.get 0))
  )
  (func (export "check-memory-zero") (param i64 i64) (result i32)
    (local i32)
    (local.set 2 (i32.const 1))
    (block
      (loop
        (local.set 2 (i32.load8_u (local.get 0)))
        (br_if 1 (i32.ne (local.get 2) (i32.const 0)))
        (br_if 1 (i64.ge_u (local.get 0) (local.get 1)))
        (local.set 0 (i64.add (local.get 0) (i64.const 1)))
        (br_if 0 (i64.le_u (local.get 0) (local.get 1)))
      )
    )
    (local.get 2)
  )
)`);


assert_return(() => invoke($3, `check-memory-zero`, [0n, 65535n]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1n]), [value("i64", 1n)]);


assert_return(() => invoke($3, `check-memory-zero`, [65536n, 131071n]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1n]), [value("i64", 2n)]);


assert_return(() => invoke($3, `check-memory-zero`, [131072n, 196607n]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1n]), [value("i64", 3n)]);


assert_return(() => invoke($3, `check-memory-zero`, [196608n, 262143n]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1n]), [value("i64", 4n)]);


assert_return(() => invoke($3, `check-memory-zero`, [262144n, 327679n]), [value("i32", 0)]);


assert_return(() => invoke($3, `grow`, [1n]), [value("i64", 5n)]);


assert_return(() => invoke($3, `check-memory-zero`, [327680n, 393215n]), [value("i32", 0)]);
