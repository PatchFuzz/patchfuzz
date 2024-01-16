




let $0 = instantiate(`(module
  (table $$t0 0 externref)
  (table $$t1 1 externref)
  (table $$t2 0 2 externref)
  (table $$t3 3 8 externref)

  (func (export "size-t0") (result i32) table.size)
  (func (export "size-t1") (result i32) (table.size $$t1))
  (func (export "size-t2") (result i32) (table.size $$t2))
  (func (export "size-t3") (result i32) (table.size $$t3))

  (func (export "grow-t0") (param $$sz i32)
    (drop (table.grow $$t0 (ref.null extern) (local.get $$sz)))
  )
  (func (export "grow-t1") (param $$sz i32)
    (drop (table.grow $$t1 (ref.null extern) (local.get $$sz)))
  )
  (func (export "grow-t2") (param $$sz i32)
    (drop (table.grow $$t2 (ref.null extern) (local.get $$sz)))
  )
  (func (export "grow-t3") (param $$sz i32)
    (drop (table.grow $$t3 (ref.null extern) (local.get $$sz)))
  )
)`);


assert_return(() => invoke($0, `size-t0`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `grow-t0`, [1]), []);


assert_return(() => invoke($0, `size-t0`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow-t0`, [4]), []);


assert_return(() => invoke($0, `size-t0`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `grow-t0`, [0]), []);


assert_return(() => invoke($0, `size-t0`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `size-t1`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow-t1`, [1]), []);


assert_return(() => invoke($0, `size-t1`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `grow-t1`, [4]), []);


assert_return(() => invoke($0, `size-t1`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `grow-t1`, [0]), []);


assert_return(() => invoke($0, `size-t1`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `grow-t2`, [3]), []);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `grow-t2`, [1]), []);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow-t2`, [0]), []);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow-t2`, [4]), []);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow-t2`, [1]), []);


assert_return(() => invoke($0, `size-t2`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `grow-t3`, [1]), []);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 4)]);


assert_return(() => invoke($0, `grow-t3`, [3]), []);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `grow-t3`, [0]), []);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `grow-t3`, [2]), []);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `grow-t3`, [1]), []);


assert_return(() => invoke($0, `size-t3`, []), [value("i32", 8)]);


assert_invalid(
  () => instantiate(`(module
    (table $$t 1 externref)
    (func $$type-result-i32-vs-empty
      (table.size $$t)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table $$t 1 externref)
    (func $$type-result-i32-vs-f32 (result f32)
      (table.size $$t)
    )
  )`),
  `type mismatch`,
);
