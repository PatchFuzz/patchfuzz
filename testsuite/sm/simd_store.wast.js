






let $0 = instantiate(`(module
  (memory 1)
  (func (export "v128.store_i8x16") (result v128)
    (v128.store (i32.const 0) (v128.const i8x16 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i16x8") (result v128)
    (v128.store (i32.const 0) (v128.const i16x8 0 1 2 3 4 5 6 7))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i16x8_2") (result v128)
    (v128.store (i32.const 0) (v128.const i16x8 012_345 012_345 012_345 012_345 012_345 012_345 012_345 012_345))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i16x8_3") (result v128)
    (v128.store (i32.const 0) (v128.const i16x8 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i32x4") (result v128)
    (v128.store (i32.const 0) (v128.const i32x4 0 1 2 3))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i32x4_2") (result v128)
    (v128.store (i32.const 0) (v128.const i32x4 0_123_456_789 0_123_456_789 0_123_456_789 0_123_456_789))
    (v128.load (i32.const 0))
  )
  (func (export "v128.store_i32x4_3") (result v128)
    (v128.store (i32.const 0) (v128.const i32x4 0x0_1234_5678 0x0_1234_5678 0x0_1234_5678 0x0_1234_5678))
    (v128.load (i32.const 0))
  )

  (func (export "v128.store_f32x4") (result v128)
    (v128.store (i32.const 0) (v128.const f32x4 0 1 2 3))
    (v128.load (i32.const 0))
  )
)`);


assert_return(
  () => invoke($0, `v128.store_i8x16`, []),
  [
    i8x16([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf]),
  ],
);


assert_return(() => invoke($0, `v128.store_i16x8`, []), [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])]);


assert_return(
  () => invoke($0, `v128.store_i16x8_2`, []),
  [i16x8([0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039])],
);


assert_return(
  () => invoke($0, `v128.store_i16x8_3`, []),
  [i16x8([0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234])],
);


assert_return(() => invoke($0, `v128.store_i32x4`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(
  () => invoke($0, `v128.store_i32x4_2`, []),
  [i32x4([0x75bcd15, 0x75bcd15, 0x75bcd15, 0x75bcd15])],
);


assert_return(
  () => invoke($0, `v128.store_i32x4_3`, []),
  [i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678])],
);


assert_return(
  () => invoke($0, `v128.store_f32x4`, []),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 1),
      value("f32", 2),
      value("f32", 3),
    ),
  ],
);


let $1 = instantiate(`(module
  (memory 1)
  (func (export "as-block-value")
    (block (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)))
  )
  (func (export "as-loop-value")
    (loop (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)))
  )
  (func (export "as-br-value")
    (block (br 0 (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0))))
  )
  (func (export "as-br_if-value")
    (block
      (br_if 0 (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)) (i32.const 1))
    )
  )
  (func (export "as-br_if-value-cond")
    (block
      (br_if 0 (i32.const 6) (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)))
    )
  )
  (func (export "as-br_table-value")
    (block
      (br_table 0 (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)) (i32.const 1))
    )
  )
  (func (export "as-return-value")
    (return (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0)))
  )
  (func (export "as-if-then")
    (if (i32.const 1) (then (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0))))
  )
  (func (export "as-if-else")
    (if (i32.const 0) (then) (else (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0))))
  )
)`);


assert_return(() => invoke($1, `as-block-value`, []), []);


assert_return(() => invoke($1, `as-loop-value`, []), []);


assert_return(() => invoke($1, `as-br-value`, []), []);


assert_return(() => invoke($1, `as-br_if-value`, []), []);


assert_return(() => invoke($1, `as-br_if-value-cond`, []), []);


assert_return(() => invoke($1, `as-br_table-value`, []), []);


assert_return(() => invoke($1, `as-return-value`, []), []);


assert_return(() => invoke($1, `as-if-then`, []), []);


assert_return(() => invoke($1, `as-if-else`, []), []);


assert_malformed(
  () => instantiate(`(memory 1) (func (v128.store8 (i32.const 0) (v128.const i32x4 0 0 0 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (v128.store16 (i32.const 0) (v128.const i32x4 0 0 0 0))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (v128.store32 (i32.const 0) (v128.const i32x4 0 0 0 0))) `),
  `unknown operator`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (v128.store (f32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (local v128) (block (br_if 0 (v128.store)))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1) (func (result v128) (v128.store (i32.const 0) (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.store-1st-arg-empty
      (v128.store (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.store-2nd-arg-empty
      (v128.store (i32.const 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.store-arg-empty
      (v128.store)
    )
  )`),
  `type mismatch`,
);
