




let $0 = instantiate(`(module
  (func (export "func-unwind-by-unreachable")
    (i32.const 3) (i64.const 1) (unreachable)
  )
  (func (export "func-unwind-by-br")
    (i32.const 3) (i64.const 1) (br 0)
  )
  (func (export "func-unwind-by-br-value") (result i32)
    (i32.const 3) (i64.const 1) (br 0 (i32.const 9))
  )
  (func (export "func-unwind-by-br_if")
    (i32.const 3) (i64.const 1) (drop (drop (br_if 0 (i32.const 1))))
  )
  (func (export "func-unwind-by-br_if-value") (result i32)
    (i32.const 3) (i64.const 1) (drop (drop (br_if 0 (i32.const 9) (i32.const 1))))
  )
  (func (export "func-unwind-by-br_table")
    (i32.const 3) (i64.const 1) (br_table 0 (i32.const 0))
  )
  (func (export "func-unwind-by-br_table-value") (result i32)
    (i32.const 3) (i64.const 1) (br_table 0 (i32.const 9) (i32.const 0))
  )
  (func (export "func-unwind-by-return") (result i32)
    (i32.const 3) (i64.const 1) (return (i32.const 9))
  )

  (func (export "block-unwind-by-unreachable")
    (block (i32.const 3) (i64.const 1) (unreachable))
  )
  (func (export "block-unwind-by-br") (result i32)
    (block (i32.const 3) (i64.const 1) (br 0)) (i32.const 9)
  )
  (func (export "block-unwind-by-br-value") (result i32)
    (block (result i32) (i32.const 3) (i64.const 1) (br 0 (i32.const 9)))
  )
  (func (export "block-unwind-by-br_if") (result i32)
    (block (i32.const 3) (i64.const 1) (drop (drop (br_if 0 (i32.const 1))))) (i32.const 9)
  )
  (func (export "block-unwind-by-br_if-value") (result i32)
    (block (result i32)
      (i32.const 3) (i64.const 1) (drop (drop (br_if 0 (i32.const 9) (i32.const 1))))
    )
  )
  (func (export "block-unwind-by-br_table") (result i32)
    (block (i32.const 3) (i64.const 1) (br_table 0 (i32.const 0))) (i32.const 9)
  )
  (func (export "block-unwind-by-br_table-value") (result i32)
    (block (result i32)
      (i32.const 3) (i64.const 1) (br_table 0 (i32.const 9) (i32.const 0))
    )
  )
  (func (export "block-unwind-by-return") (result i32)
    (block (result i32) (i32.const 3) (i64.const 1) (return (i32.const 9)))
  )

  (func (export "block-nested-unwind-by-unreachable") (result i32)
    (block (result i32) (i32.const 3) (block (i64.const 1) (unreachable)))
  )
  (func (export "block-nested-unwind-by-br") (result i32)
    (block (i32.const 3) (block (i64.const 1) (br 1)) (drop)) (i32.const 9)
  )
  (func (export "block-nested-unwind-by-br-value") (result i32)
    (block (result i32)
      (i32.const 3) (block (i64.const 1) (br 1 (i32.const 9)))
    )
  )
  (func (export "block-nested-unwind-by-br_if") (result i32)
    (block (i32.const 3) (block (i64.const 1) (drop (br_if 1 (i32.const 1)))) (drop)) (i32.const 9)
  )
  (func (export "block-nested-unwind-by-br_if-value") (result i32)
    (block (result i32)
      (i32.const 3) (block (i64.const 1) (drop (drop (br_if 1 (i32.const 9) (i32.const 1)))))
    )
  )
  (func (export "block-nested-unwind-by-br_table") (result i32)
    (block
      (i32.const 3) (block (i64.const 1) (br_table 1 (i32.const 1)))
      (drop)
    )
    (i32.const 9)
  )
  (func (export "block-nested-unwind-by-br_table-value") (result i32)
    (block (result i32)
      (i32.const 3)
      (block (i64.const 1) (br_table 1 (i32.const 9) (i32.const 1)))
    )
  )
  (func (export "block-nested-unwind-by-return") (result i32)
    (block (result i32)
      (i32.const 3) (block (i64.const 1) (return (i32.const 9)))
    )
  )

  (func (export "unary-after-unreachable") (result i32)
    (f32.const 0) (unreachable) (i64.eqz)
  )
  (func (export "unary-after-br") (result i32)
    (block (result i32) (f32.const 0) (br 0 (i32.const 9)) (i64.eqz))
  )
  (func (export "unary-after-br_if") (result i32)
    (block (result i32)
      (i64.const 0) (drop (br_if 0 (i32.const 9) (i32.const 1))) (i64.eqz)
    )
  )
  (func (export "unary-after-br_table") (result i32)
    (block (result i32)
      (f32.const 0) (br_table 0 0 (i32.const 9) (i32.const 0)) (i64.eqz)
    )
  )
  (func (export "unary-after-return") (result i32)
    (f32.const 0) (return (i32.const 9)) (i64.eqz)
  )

  (func (export "binary-after-unreachable") (result i32)
    (f32.const 0) (f64.const 1) (unreachable) (i64.eq)
  )
  (func (export "binary-after-br") (result i32)
    (block (result i32)
      (f32.const 0) (f64.const 1) (br 0 (i32.const 9)) (i64.eq)
    )
  )
  (func (export "binary-after-br_if") (result i32)
    (block (result i32)
      (i64.const 0) (i64.const 1) (drop (br_if 0 (i32.const 9) (i32.const 1)))
      (i64.eq)
    )
  )
  (func (export "binary-after-br_table") (result i32)
    (block (result i32)
      (f32.const 0) (f64.const 1) (br_table 0 (i32.const 9) (i32.const 0))
      (i64.eq)
    )
  )
  (func (export "binary-after-return") (result i32)
    (f32.const 0) (f64.const 1) (return (i32.const 9)) (i64.eq)
  )

  (func (export "select-after-unreachable") (result i32)
    (f32.const 0) (f64.const 1) (i64.const 0) (unreachable) (select)
  )
  (func (export "select-after-br") (result i32)
    (block (result i32)
      (f32.const 0) (f64.const 1) (i64.const 0) (br 0 (i32.const 9)) (select)
    )
  )
  (func (export "select-after-br_if") (result i32)
    (block (result i32)
      (i32.const 0) (i32.const 1) (i32.const 0)
      (drop (br_if 0 (i32.const 9) (i32.const 1)))
      (select)
    )
  )
  (func (export "select-after-br_table") (result i32)
    (block (result i32)
      (f32.const 0) (f64.const 1) (i64.const 0)
      (br_table 0 (i32.const 9) (i32.const 0))
      (select)
    )
  )
  (func (export "select-after-return") (result i32)
    (f32.const 0) (f64.const 1) (i64.const 1) (return (i32.const 9)) (select)
  )

  (func (export "block-value-after-unreachable") (result i32)
    (block (result i32) (f32.const 0) (unreachable))
  )
  (func (export "block-value-after-br") (result i32)
    (block (result i32) (f32.const 0) (br 0 (i32.const 9)))
  )
  (func (export "block-value-after-br_if") (result i32)
    (block (result i32)
      (i32.const 0) (drop (br_if 0 (i32.const 9) (i32.const 1)))
    )
  )
  (func (export "block-value-after-br_table") (result i32)
    (block (result i32)
      (f32.const 0) (br_table 0 0 (i32.const 9) (i32.const 0))
    )
  )
  (func (export "block-value-after-return") (result i32)
    (block (result i32) (f32.const 0) (return (i32.const 9)))
  )

  (func (export "loop-value-after-unreachable") (result i32)
    (loop (result i32) (f32.const 0) (unreachable))
  )
  (func (export "loop-value-after-br") (result i32)
    (block (result i32) (loop (result i32) (f32.const 0) (br 1 (i32.const 9))))
  )
  (func (export "loop-value-after-br_if") (result i32)
    (block (result i32)
      (loop (result i32)
        (i32.const 0) (drop (br_if 1 (i32.const 9) (i32.const 1)))
      )
    )
  )

  (func (export "loop-value-after-br_table") (result i32)
    (block (result i32)
      (loop (result i32)
        (f32.const 0) (br_table 1 1 (i32.const 9) (i32.const 0))
      )
    )
  )
  (func (export "loop-value-after-return") (result i32)
    (loop (result i32) (f32.const 0) (return (i32.const 9)))
  )
)`);


assert_trap(() => invoke($0, `func-unwind-by-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `func-unwind-by-br`, []), []);


assert_return(() => invoke($0, `func-unwind-by-br-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `func-unwind-by-br_if`, []), []);


assert_return(() => invoke($0, `func-unwind-by-br_if-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `func-unwind-by-br_table`, []), []);


assert_return(() => invoke($0, `func-unwind-by-br_table-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `func-unwind-by-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `block-unwind-by-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `block-unwind-by-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-br-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-br_if-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-br_table-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-unwind-by-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `block-nested-unwind-by-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `block-nested-unwind-by-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-br-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-br_if-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-br_table-value`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-nested-unwind-by-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `unary-after-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `unary-after-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `unary-after-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `unary-after-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `unary-after-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `binary-after-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `binary-after-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `binary-after-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `binary-after-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `binary-after-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `select-after-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `select-after-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `select-after-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `select-after-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `select-after-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `block-value-after-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `block-value-after-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-value-after-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-value-after-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `block-value-after-return`, []), [value("i32", 9)]);


assert_trap(() => invoke($0, `loop-value-after-unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `loop-value-after-br`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `loop-value-after-br_if`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `loop-value-after-br_table`, []), [value("i32", 9)]);


assert_return(() => invoke($0, `loop-value-after-return`, []), [value("i32", 9)]);
