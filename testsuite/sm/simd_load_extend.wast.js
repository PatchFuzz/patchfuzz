






let $0 = instantiate(`(module
  (memory 1)
  (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0A\\0B\\0C\\0D\\0E\\0F\\80\\81\\82\\83\\84\\85\\86\\87\\88\\89")
  (data (i32.const 65520) "\\0A\\0B\\0C\\0D\\0E\\0F\\80\\81\\82\\83\\84\\85\\86\\87\\88\\89")

  (func (export "v128.load8x8_s") (param $$0 i32) (result v128)
    (v128.load8x8_s (local.get $$0))
  )
  (func (export "v128.load8x8_u") (param $$0 i32) (result v128)
    (v128.load8x8_u (local.get $$0))
  )
  (func (export "v128.load16x4_s") (param $$0 i32) (result v128)
    (v128.load16x4_s (local.get $$0))
  )
  (func (export "v128.load16x4_u") (param $$0 i32) (result v128)
    (v128.load16x4_u (local.get $$0))
  )
  (func (export "v128.load32x2_s") (param $$0 i32) (result v128)
    (v128.load32x2_s (local.get $$0))
  )
  (func (export "v128.load32x2_u") (param $$0 i32) (result v128)
    (v128.load32x2_u (local.get $$0))
  )

  ;; load by a constant amount
  (func (export "v128.load8x8_s_const0") (result v128)
    (v128.load8x8_s (i32.const 0))
  )
  (func (export "v128.load8x8_u_const8") (result v128)
    (v128.load8x8_u (i32.const 8))
  )
  (func (export "v128.load16x4_s_const10") (result v128)
    (v128.load16x4_s (i32.const 10))
  )
  (func (export "v128.load16x4_u_const20") (result v128)
    (v128.load16x4_u (i32.const 20))
  )
  (func (export "v128.load32x2_s_const65520") (result v128)
    (v128.load32x2_s (i32.const 65520))
  )
  (func (export "v128.load32x2_u_const65526") (result v128)
    (v128.load32x2_u (i32.const 65526))
  )

  ;; load data with different offset/align arguments
  ;; i16x8
  (func (export "v128.load8x8_s_offset0") (param $$0 i32) (result v128)
    (v128.load8x8_s offset=0 (local.get $$0))
  )
  (func (export "v128.load8x8_s_align1") (param $$0 i32) (result v128)
    (v128.load8x8_s align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_s_offset0_align1") (param $$0 i32) (result v128)
    (v128.load8x8_s offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_s_offset1_align1") (param $$0 i32) (result v128)
    (v128.load8x8_s offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_s_offset10_align4") (param $$0 i32) (result v128)
    (v128.load8x8_s offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load8x8_s_offset20_align8") (param $$0 i32) (result v128)
    (v128.load8x8_s offset=20 align=8 (local.get $$0))
  )
  (func (export "v128.load8x8_u_offset0") (param $$0 i32) (result v128)
    (v128.load8x8_u offset=0 (local.get $$0))
  )
  (func (export "v128.load8x8_u_align1") (param $$0 i32) (result v128)
    (v128.load8x8_u align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_u_offset0_align1") (param $$0 i32) (result v128)
    (v128.load8x8_u offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_u_offset1_align1") (param $$0 i32) (result v128)
    (v128.load8x8_u offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load8x8_u_offset10_align4") (param $$0 i32) (result v128)
    (v128.load8x8_u offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load8x8_u_offset20_align8") (param $$0 i32) (result v128)
    (v128.load8x8_u offset=20 align=8 (local.get $$0))
  )
  ;; i32x4
  (func (export "v128.load16x4_s_offset0") (param $$0 i32) (result v128)
    (v128.load16x4_s offset=0 (local.get $$0))
  )
  (func (export "v128.load16x4_s_align1") (param $$0 i32) (result v128)
    (v128.load16x4_s align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_s_offset0_align1") (param $$0 i32) (result v128)
    (v128.load16x4_s offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_s_offset1_align1") (param $$0 i32) (result v128)
    (v128.load16x4_s offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_s_offset10_align4") (param $$0 i32) (result v128)
    (v128.load16x4_s offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load16x4_s_offset20_align8") (param $$0 i32) (result v128)
    (v128.load16x4_s offset=20 align=8 (local.get $$0))
  )
  (func (export "v128.load16x4_u_offset0") (param $$0 i32) (result v128)
    (v128.load16x4_u offset=0 (local.get $$0))
  )
  (func (export "v128.load16x4_u_align1") (param $$0 i32) (result v128)
    (v128.load16x4_u align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_u_offset0_align1") (param $$0 i32) (result v128)
    (v128.load16x4_u offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_u_offset1_align1") (param $$0 i32) (result v128)
    (v128.load16x4_u offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load16x4_u_offset10_align4") (param $$0 i32) (result v128)
    (v128.load16x4_u offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load16x4_u_offset20_align8") (param $$0 i32) (result v128)
    (v128.load16x4_u offset=20 align=8 (local.get $$0))
  )
  ;; i64x2
  (func (export "v128.load32x2_s_offset0") (param $$0 i32) (result v128)
    (v128.load32x2_s offset=0 (local.get $$0))
  )
  (func (export "v128.load32x2_s_align1") (param $$0 i32) (result v128)
    (v128.load32x2_s align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_s_offset0_align1") (param $$0 i32) (result v128)
    (v128.load32x2_s offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_s_offset1_align1") (param $$0 i32) (result v128)
    (v128.load32x2_s offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_s_offset10_align4") (param $$0 i32) (result v128)
    (v128.load32x2_s offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load32x2_s_offset20_align8") (param $$0 i32) (result v128)
    (v128.load32x2_s offset=20 align=8 (local.get $$0))
  )
  (func (export "v128.load32x2_u_offset0") (param $$0 i32) (result v128)
    (v128.load32x2_u offset=0 (local.get $$0))
  )
  (func (export "v128.load32x2_u_align1") (param $$0 i32) (result v128)
    (v128.load32x2_u align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_u_offset0_align1") (param $$0 i32) (result v128)
    (v128.load32x2_u offset=0 align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_u_offset1_align1") (param $$0 i32) (result v128)
    (v128.load32x2_u offset=1 align=1 (local.get $$0))
  )
  (func (export "v128.load32x2_u_offset10_align4") (param $$0 i32) (result v128)
    (v128.load32x2_u offset=10 align=4 (local.get $$0))
  )
  (func (export "v128.load32x2_u_offset20_align8") (param $$0 i32) (result v128)
    (v128.load32x2_u offset=20 align=8 (local.get $$0))
  )
)`);


assert_return(
  () => invoke($0, `v128.load8x8_s`, [0]),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u`, [0]),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(() => invoke($0, `v128.load16x4_s`, [0]), [i32x4([0x100, 0x302, 0x504, 0x706])]);


assert_return(() => invoke($0, `v128.load16x4_u`, [0]), [i32x4([0x100, 0x302, 0x504, 0x706])]);


assert_return(() => invoke($0, `v128.load32x2_s`, [0]), [i64x2([0x3020100n, 0x7060504n])]);


assert_return(() => invoke($0, `v128.load32x2_u`, [0]), [i64x2([0x3020100n, 0x7060504n])]);


assert_return(
  () => invoke($0, `v128.load8x8_s`, [10]),
  [i16x8([0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0xff80, 0xff81])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u`, [10]),
  [i16x8([0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x80, 0x81])],
);


assert_return(() => invoke($0, `v128.load16x4_s`, [10]), [i32x4([0xb0a, 0xd0c, 0xf0e, 0xffff8180])]);


assert_return(() => invoke($0, `v128.load16x4_u`, [10]), [i32x4([0xb0a, 0xd0c, 0xf0e, 0x8180])]);


assert_return(() => invoke($0, `v128.load32x2_s`, [10]), [i64x2([0xd0c0b0an, 0xffffffff81800f0en])]);


assert_return(() => invoke($0, `v128.load32x2_u`, [10]), [i64x2([0xd0c0b0an, 0x81800f0en])]);


assert_return(
  () => invoke($0, `v128.load8x8_s`, [20]),
  [i16x8([0xff84, 0xff85, 0xff86, 0xff87, 0xff88, 0xff89, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u`, [20]),
  [i16x8([0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `v128.load16x4_s`, [20]),
  [i32x4([0xffff8584, 0xffff8786, 0xffff8988, 0x0])],
);


assert_return(() => invoke($0, `v128.load16x4_u`, [20]), [i32x4([0x8584, 0x8786, 0x8988, 0x0])]);


assert_return(() => invoke($0, `v128.load32x2_s`, [20]), [i64x2([0xffffffff87868584n, 0x8988n])]);


assert_return(() => invoke($0, `v128.load32x2_u`, [20]), [i64x2([0x87868584n, 0x8988n])]);


assert_return(
  () => invoke($0, `v128.load8x8_s_const0`, []),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_const8`, []),
  [i16x8([0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf])],
);


assert_return(() => invoke($0, `v128.load16x4_s_const10`, []), [i32x4([0xb0a, 0xd0c, 0xf0e, 0xffff8180])]);


assert_return(() => invoke($0, `v128.load16x4_u_const20`, []), [i32x4([0x8584, 0x8786, 0x8988, 0x0])]);


assert_return(
  () => invoke($0, `v128.load32x2_s_const65520`, []),
  [i64x2([0xd0c0b0an, 0xffffffff81800f0en])],
);


assert_return(() => invoke($0, `v128.load32x2_u_const65526`, []), [i64x2([0x83828180n, 0x87868584n])]);


assert_return(
  () => invoke($0, `v128.load8x8_s_offset0`, [0]),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(
  () => invoke($0, `v128.load8x8_s_align1`, [1]),
  [i16x8([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])],
);


assert_return(
  () => invoke($0, `v128.load8x8_s_offset0_align1`, [2]),
  [i16x8([0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9])],
);


assert_return(
  () => invoke($0, `v128.load8x8_s_offset10_align4`, [3]),
  [i16x8([0xd, 0xe, 0xf, 0xff80, 0xff81, 0xff82, 0xff83, 0xff84])],
);


assert_return(
  () => invoke($0, `v128.load8x8_s_offset20_align8`, [4]),
  [i16x8([0xff88, 0xff89, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_offset0`, [0]),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_align1`, [1]),
  [i16x8([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_offset0_align1`, [2]),
  [i16x8([0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_offset10_align4`, [3]),
  [i16x8([0xd, 0xe, 0xf, 0x80, 0x81, 0x82, 0x83, 0x84])],
);


assert_return(
  () => invoke($0, `v128.load8x8_u_offset20_align8`, [4]),
  [i16x8([0x88, 0x89, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);


assert_return(() => invoke($0, `v128.load16x4_s_offset0`, [0]), [i32x4([0x100, 0x302, 0x504, 0x706])]);


assert_return(() => invoke($0, `v128.load16x4_s_align1`, [1]), [i32x4([0x201, 0x403, 0x605, 0x807])]);


assert_return(
  () => invoke($0, `v128.load16x4_s_offset0_align1`, [2]),
  [i32x4([0x302, 0x504, 0x706, 0x908])],
);


assert_return(
  () => invoke($0, `v128.load16x4_s_offset10_align4`, [3]),
  [i32x4([0xe0d, 0xffff800f, 0xffff8281, 0xffff8483])],
);


assert_return(
  () => invoke($0, `v128.load16x4_s_offset20_align8`, [4]),
  [i32x4([0xffff8988, 0x0, 0x0, 0x0])],
);


assert_return(() => invoke($0, `v128.load16x4_u_offset0`, [0]), [i32x4([0x100, 0x302, 0x504, 0x706])]);


assert_return(() => invoke($0, `v128.load16x4_u_align1`, [1]), [i32x4([0x201, 0x403, 0x605, 0x807])]);


assert_return(
  () => invoke($0, `v128.load16x4_u_offset0_align1`, [2]),
  [i32x4([0x302, 0x504, 0x706, 0x908])],
);


assert_return(
  () => invoke($0, `v128.load16x4_u_offset10_align4`, [3]),
  [i32x4([0xe0d, 0x800f, 0x8281, 0x8483])],
);


assert_return(
  () => invoke($0, `v128.load16x4_u_offset20_align8`, [4]),
  [i32x4([0x8988, 0x0, 0x0, 0x0])],
);


assert_return(() => invoke($0, `v128.load32x2_s_offset0`, [0]), [i64x2([0x3020100n, 0x7060504n])]);


assert_return(() => invoke($0, `v128.load32x2_s_align1`, [1]), [i64x2([0x4030201n, 0x8070605n])]);


assert_return(
  () => invoke($0, `v128.load32x2_s_offset0_align1`, [2]),
  [i64x2([0x5040302n, 0x9080706n])],
);


assert_return(
  () => invoke($0, `v128.load32x2_s_offset10_align4`, [3]),
  [i64x2([0xffffffff800f0e0dn, 0xffffffff84838281n])],
);


assert_return(() => invoke($0, `v128.load32x2_s_offset20_align8`, [4]), [i64x2([0x8988n, 0x0n])]);


assert_return(() => invoke($0, `v128.load32x2_u_offset0`, [0]), [i64x2([0x3020100n, 0x7060504n])]);


assert_return(() => invoke($0, `v128.load32x2_u_align1`, [1]), [i64x2([0x4030201n, 0x8070605n])]);


assert_return(
  () => invoke($0, `v128.load32x2_u_offset0_align1`, [2]),
  [i64x2([0x5040302n, 0x9080706n])],
);


assert_return(
  () => invoke($0, `v128.load32x2_u_offset10_align4`, [3]),
  [i64x2([0x800f0e0dn, 0x84838281n])],
);


assert_return(() => invoke($0, `v128.load32x2_u_offset20_align8`, [4]), [i64x2([0x8988n, 0x0n])]);


assert_trap(() => invoke($0, `v128.load8x8_s`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load8x8_u`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load16x4_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load16x4_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load32x2_s`, [65529]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load32x2_u`, [65529]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load8x8_s_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load8x8_u_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load16x4_s_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load16x4_u_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load32x2_s_offset1_align1`, [-1]), `out of bounds memory access`);


assert_trap(() => invoke($0, `v128.load32x2_u_offset1_align1`, [-1]), `out of bounds memory access`);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load8x8_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load8x8_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load16x4_s (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load16x4_u (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load32x2_s (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0) (func (result v128) (v128.load32x2_u (v128.const i32x4 0 0 0 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load8x8_s-arg-empty (result v128)
      (v128.load8x8_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load8x8_u-arg-empty (result v128)
      (v128.load8x8_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load16x4_s-arg-empty (result v128)
      (v128.load16x4_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load16x4_u-arg-empty (result v128)
      (v128.load16x4_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load32x2_s-arg-empty (result v128)
      (v128.load32x2_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 0)
    (func $$v128.load32x2_u-arg-empty (result v128)
      (v128.load32x2_u)
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
  (func (export "v128.load8x8_s-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load8x8_s (i32.const 0))))
  )
  (func (export "v128.load8x8_u-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load8x8_u (i32.const 1))))
  )
  (func (export "v128.load16x4_s-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load16x4_s (i32.const 2))))
  )
  (func (export "v128.load16x4_u-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load16x4_u (i32.const 3))))
  )
  (func (export "v128.load32x2_s-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load32x2_s (i32.const 4))))
  )
  (func (export "v128.load32x2_u-in-block") (result v128)
    (block (result v128) (block (result v128) (v128.load32x2_u (i32.const 5))))
  )
  (func (export "v128.load8x8_s-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load8x8_s (i32.const 6))))
  )
  (func (export "v128.load8x8_u-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load8x8_u (i32.const 7))))
  )
  (func (export "v128.load16x4_s-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load16x4_s (i32.const 8))))
  )
  (func (export "v128.load16x4_u-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load16x4_u (i32.const 9))))
  )
  (func (export "v128.load32x2_s-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load32x2_s (i32.const 10))))
  )
  (func (export "v128.load32x2_u-as-br-value") (result v128)
    (block (result v128) (br 0 (v128.load32x2_u (i32.const 11))))
  )
  (func (export "v128.load8x8_s-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load8x8_s (i32.const 12)))
  )
  (func (export "v128.load8x8_u-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load8x8_u (i32.const 13)))
  )
  (func (export "v128.load16x4_s-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load16x4_s (i32.const 14)))
  )
  (func (export "v128.load16x4_u-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load16x4_u (i32.const 15)))
  )
  (func (export "v128.load32x2_s-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load32x2_s (i32.const 16)))
  )
  (func (export "v128.load32x2_u-extract_lane_s-operand") (result i32)
    (i8x16.extract_lane_s 0 (v128.load32x2_u (i32.const 17)))
  )
)`);


assert_return(
  () => invoke($1, `v128.load8x8_s-in-block`, []),
  [i16x8([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7])],
);


assert_return(
  () => invoke($1, `v128.load8x8_u-in-block`, []),
  [i16x8([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8])],
);


assert_return(() => invoke($1, `v128.load16x4_s-in-block`, []), [i32x4([0x302, 0x504, 0x706, 0x908])]);


assert_return(() => invoke($1, `v128.load16x4_u-in-block`, []), [i32x4([0x403, 0x605, 0x807, 0xa09])]);


assert_return(() => invoke($1, `v128.load32x2_s-in-block`, []), [i64x2([0x7060504n, 0xb0a0908n])]);


assert_return(() => invoke($1, `v128.load32x2_u-in-block`, []), [i64x2([0x8070605n, 0xc0b0a09n])]);


assert_return(
  () => invoke($1, `v128.load8x8_s-as-br-value`, []),
  [i16x8([0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd])],
);


assert_return(
  () => invoke($1, `v128.load8x8_u-as-br-value`, []),
  [i16x8([0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe])],
);


assert_return(() => invoke($1, `v128.load16x4_s-as-br-value`, []), [i32x4([0x908, 0xb0a, 0xd0c, 0xf0e])]);


assert_return(() => invoke($1, `v128.load16x4_u-as-br-value`, []), [i32x4([0xa09, 0xc0b, 0xe0d, 0x800f])]);


assert_return(
  () => invoke($1, `v128.load32x2_s-as-br-value`, []),
  [i64x2([0xd0c0b0an, 0xffffffff81800f0en])],
);


assert_return(() => invoke($1, `v128.load32x2_u-as-br-value`, []), [i64x2([0xe0d0c0bn, 0x8281800fn])]);


assert_return(() => invoke($1, `v128.load8x8_s-extract_lane_s-operand`, []), [value("i32", 12)]);


assert_return(() => invoke($1, `v128.load8x8_u-extract_lane_s-operand`, []), [value("i32", 13)]);


assert_return(() => invoke($1, `v128.load16x4_s-extract_lane_s-operand`, []), [value("i32", 14)]);


assert_return(() => invoke($1, `v128.load16x4_u-extract_lane_s-operand`, []), [value("i32", 15)]);


assert_return(() => invoke($1, `v128.load32x2_s-extract_lane_s-operand`, []), [value("i32", -128)]);


assert_return(() => invoke($1, `v128.load32x2_u-extract_lane_s-operand`, []), [value("i32", -127)]);
