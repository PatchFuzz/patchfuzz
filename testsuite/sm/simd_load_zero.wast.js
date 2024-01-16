






let $0 = instantiate(`(module
  (memory 1)
  (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F\\80\\81\\82\\83\\84\\85\\86\\87\\88\\89")
  (data (i32.const 65520) "\\0A\\0B\\0C\\0D\\0E\\0F\\80\\81\\82\\83\\84\\85\\86\\87\\88\\89")

  (func (export "v128.load32_zero") (param $$0 i32) (result v128)
    (v128.load32_zero (local.get $$0))
  )
  (func (export "v128.load64_zero") (param $$0 i32) (result v128)
    (v128.load64_zero (local.get $$0))
  )

  ;; load by a constant amount
  (func (export "v128.load32_zero_const0") (result v128)
    (v128.load32_zero (i32.const 0))
  )
  (func (export "v128.load64_zero_const8") (result v128)
    (v128.load64_zero (i32.const 8))
  )

  ;; load data with different offset/align arguments
  ;; i16x8
  (func (export "v128.load32_zero_offset0") (param $$0 i32) (result v128)
    (v128.load32_zero offset=0 (local.get $$0))
  )
  (func (export "v128.load32_zero_align1") (param $$0 i32) (result v128)
    (v128.load32_zero align=1 (local.get $$0))
  )
  (func (export "v128.load32_zero_offset0_align1") (param $$0 i32) (result v128)
    (v128.load32_zero offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load32_zero_offset1_align1") (param $$0 i32) (result v128)
    (v128.load32_zero offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load32_zero_offset10_align4") (param $$0 i32) (result v128)
    (v128.load32_zero offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load64_zero_offset0") (param $$0 i32) (result v128)
    (v128.load64_zero offset=0 (local.get $$0))
  )
  (func (export "v128.load64_zero_align1") (param $$0 i32) (result v128)
    (v128.load64_zero align=1 (local.get $$0))
  )
  (func (export "v128.load64_zero_offset0_align1") (param $$0 i32) (result v128)
    (v128.load64_zero offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load64_zero_offset1_align1") (param $$0 i32) (result v128)
    (v128.load64_zero offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load64_zero_offset10_align4") (param $$0 i32) (result v128)
    (v128.load64_zero offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load64_zero_offset20_align8") (param $$0 i32) (result v128)
    (v128.load64_zero offset=20 align=8 (local.get $$0))
  )
)`);


assert_return(() => invoke($0, `v128.load32_zero`, [0]), [i32x4([0x3020100, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `v128.load64_zero`, [0]), [i64x2([0x706050403020100n, 0x0n])]);


assert_return(() => invoke($0, `v128.load32_zero`, [10]), [i32x4([0xd0c0b0a, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `v128.load64_zero`, [10]), [i64x2([0x81800f0e0d0c0b0an, 0x0n])]);


assert_return(() => invoke($0, `v128.load32_zero`, [20]), [i32x4([0x87868584, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `v128.load64_zero`, [20]), [i64x2([0x898887868584n, 0x0n])]);


assert_return(() => invoke($0, `v128.load32_zero_const0`, []), [i32x4([0x3020100, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `v128.load64_zero_const8`, []), [i64x2([0xf0e0d0c0b0a0908n, 0x0n])]);


assert_return(() => invoke($0, `v128.load32_zero_offset0`, [0]), [i32x4([0x3020100, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `v128.load32_zero_align1`, [1]), [i32x4([0x4030201, 0x0, 0x0, 0x0])]);


assert_return(
  () => invoke($0, `v128.load32_zero_offset0_align1`, [2]),
  [i32x4([0x5040302, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `v128.load32_zero_offset10_align4`, [3]),
  [i32x4([0x800f0e0d, 0x0, 0x0, 0x0])],
);


assert_return(() => invoke($0, `v128.load64_zero_offset0`, [0]), [i64x2([0x706050403020100n, 0x0n])]);


assert_return(() => invoke($0, `v128.load64_zero_align1`, [1]), [i64x2([0x807060504030201n, 0x0n])]);


assert_return(
  () => invoke($0, `v128.load64_zero_offset0_align1`, [2]),
  [i64x2([0x908070605040302n, 0x0n])],
);


assert_return(
  () => invoke($0, `v128.load64_zero_offset10_align4`, [3]),
  [i64x2([0x84838281800f0e0dn, 0x0n])],
);


assert_return(() => invoke($0, `v128.load64_zero_offset20_align8`, [4]), [i64x2([0x8988n, 0x0n])]);


assert_trap(() => invoke($0, `v128.load32_zero`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load64_zero`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load32_zero_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load64_zero_offset1_align1`, [-1]), `out of bounds memory access`);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load32_zero (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load64_zero (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load32_zero-arg-empty (result v128)
      (v128.load32_zero)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load64_zero-arg-empty (result v128)
      (v128.load64_zero)
    )
  )`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i16x8.load16x4_s (i32.const 0)))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i16x8.load16x4_u (i32.const 0)))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i32x4.load32x2_s (i32.const 0)))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i32x4.load32x2_u (i32.const 0)))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i64x2.load64x1_s (i32.const 0)))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (drop (i64x2.load64x1_u (i32.const 0)))) `),
  `unknown operator`,
);


let $1 = instantiate(`(module
  (memory 1)
  (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F\\80\\81\\82\\83\\84\\85\\86\\87\\88\\89")
  (func (export "v128.load32_zero-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load32_zero (i32.const 0))))
  )
  (func (export "v128.load64_zero-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load64_zero (i32.const 1))))
  )
  (func (export "v128.load32_zero-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load32_zero (i32.const 6))))
  )
  (func (export "v128.load64_zero-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load64_zero (i32.const 7))))
  )
  (func (export "v128.load32_zero-extract_lane_s-operand") (result i32)
    (i32x4.extract_lane 0 (v128.load32_zero (i32.const 12)))
  )
  (func (export "v128.load64_zero-extract_lane_s-operand") (result i64)
    (i64x2.extract_lane 0 (v128.load64_zero (i32.const 13)))
  )
)`);


assert_return(() => invoke($1, `v128.load32_zero-in-block`, []), [i32x4([0x3020100, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($1, `v128.load64_zero-in-block`, []), [i64x2([0x807060504030201n, 0x0n])]);


assert_return(() => invoke($1, `v128.load32_zero-as-br-value`, []), [i32x4([0x9080706, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($1, `v128.load64_zero-as-br-value`, []), [i64x2([0xe0d0c0b0a090807n, 0x0n])]);


assert_return(() => invoke($1, `v128.load32_zero-extract_lane_s-operand`, []), [value("i32", 252579084)]);


assert_return(
  () => invoke($1, `v128.load64_zero-extract_lane_s-operand`, []),
  [value("i64", -8898124946043105779n)],
);
