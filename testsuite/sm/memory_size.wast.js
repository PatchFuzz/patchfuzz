




let $0 = instantiate(`(module
  (memory 0)
  (func (export "size") (result i32) (memory.size))
  (func (export "grow") (param $$sz i32) (drop (memory.grow (local.get $$sz))))
)`);


assert_return(() => invoke($0, `size`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `grow`, [1]), []);


assert_return(() => invoke($0, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `grow`, [4]), []);


assert_return(() => invoke($0, `size`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `grow`, [0]), []);


assert_return(() => invoke($0, `size`, []), [value("i32", 5)]);


let $1 = instantiate(`(module
  (memory 1)
  (func (export "size") (result i32) (memory.size))
  (func (export "grow") (param $$sz i32) (drop (memory.grow (local.get $$sz))))
)`);


assert_return(() => invoke($1, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($1, `grow`, [1]), []);


assert_return(() => invoke($1, `size`, []), [value("i32", 2)]);


assert_return(() => invoke($1, `grow`, [4]), []);


assert_return(() => invoke($1, `size`, []), [value("i32", 6)]);


assert_return(() => invoke($1, `grow`, [0]), []);


assert_return(() => invoke($1, `size`, []), [value("i32", 6)]);


let $2 = instantiate(`(module
  (memory 0 2)
  (func (export "size") (result i32) (memory.size))
  (func (export "grow") (param $$sz i32) (drop (memory.grow (local.get $$sz))))
)`);


assert_return(() => invoke($2, `size`, []), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [3]), []);


assert_return(() => invoke($2, `size`, []), [value("i32", 0)]);


assert_return(() => invoke($2, `grow`, [1]), []);


assert_return(() => invoke($2, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [0]), []);


assert_return(() => invoke($2, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [4]), []);


assert_return(() => invoke($2, `size`, []), [value("i32", 1)]);


assert_return(() => invoke($2, `grow`, [1]), []);


assert_return(() => invoke($2, `size`, []), [value("i32", 2)]);


let $3 = instantiate(`(module
  (memory 3 8)
  (func (export "size") (result i32) (memory.size))
  (func (export "grow") (param $$sz i32) (drop (memory.grow (local.get $$sz))))
)`);


assert_return(() => invoke($3, `size`, []), [value("i32", 3)]);


assert_return(() => invoke($3, `grow`, [1]), []);


assert_return(() => invoke($3, `size`, []), [value("i32", 4)]);


assert_return(() => invoke($3, `grow`, [3]), []);


assert_return(() => invoke($3, `size`, []), [value("i32", 7)]);


assert_return(() => invoke($3, `grow`, [0]), []);


assert_return(() => invoke($3, `size`, []), [value("i32", 7)]);


assert_return(() => invoke($3, `grow`, [2]), []);


assert_return(() => invoke($3, `size`, []), [value("i32", 7)]);


assert_return(() => invoke($3, `grow`, [1]), []);


assert_return(() => invoke($3, `size`, []), [value("i32", 8)]);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-result-i32-vs-empty
      (memory.size)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-result-i32-vs-f32 (result f32)
      (memory.size)
    )
  )`),
  `type mismatch`,
);
