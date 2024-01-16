




let $0 = instantiate(`(module
  ;; f32 special values
  (func (export "f32.nan") (result i32) (i32.reinterpret_f32 (f32.const nan)))
  (func (export "f32.positive_nan") (result i32) (i32.reinterpret_f32 (f32.const +nan)))
  (func (export "f32.negative_nan") (result i32) (i32.reinterpret_f32 (f32.const -nan)))
  (func (export "f32.plain_nan") (result i32) (i32.reinterpret_f32 (f32.const nan:0x400000)))
  (func (export "f32.informally_known_as_plain_snan") (result i32) (i32.reinterpret_f32 (f32.const nan:0x200000)))
  (func (export "f32.all_ones_nan") (result i32) (i32.reinterpret_f32 (f32.const -nan:0x7fffff)))
  (func (export "f32.misc_nan") (result i32) (i32.reinterpret_f32 (f32.const nan:0x012345)))
  (func (export "f32.misc_positive_nan") (result i32) (i32.reinterpret_f32 (f32.const +nan:0x304050)))
  (func (export "f32.misc_negative_nan") (result i32) (i32.reinterpret_f32 (f32.const -nan:0x2abcde)))
  (func (export "f32.infinity") (result i32) (i32.reinterpret_f32 (f32.const inf)))
  (func (export "f32.positive_infinity") (result i32) (i32.reinterpret_f32 (f32.const +inf)))
  (func (export "f32.negative_infinity") (result i32) (i32.reinterpret_f32 (f32.const -inf)))

  ;; f32 numbers
  (func (export "f32.zero") (result i32) (i32.reinterpret_f32 (f32.const 0x0.0p0)))
  (func (export "f32.positive_zero") (result i32) (i32.reinterpret_f32 (f32.const +0x0.0p0)))
  (func (export "f32.negative_zero") (result i32) (i32.reinterpret_f32 (f32.const -0x0.0p0)))
  (func (export "f32.misc") (result i32) (i32.reinterpret_f32 (f32.const 0x1.921fb6p+2)))
  (func (export "f32.min_positive") (result i32) (i32.reinterpret_f32 (f32.const 0x1p-149)))
  (func (export "f32.min_normal") (result i32) (i32.reinterpret_f32 (f32.const 0x1p-126)))
  (func (export "f32.max_finite") (result i32) (i32.reinterpret_f32 (f32.const 0x1.fffffep+127)))
  (func (export "f32.max_subnormal") (result i32) (i32.reinterpret_f32 (f32.const 0x1.fffffcp-127)))
  (func (export "f32.trailing_dot") (result i32) (i32.reinterpret_f32 (f32.const 0x1.p10)))

  ;; f32 in decimal format
  (func (export "f32_dec.zero") (result i32) (i32.reinterpret_f32 (f32.const 0.0e0)))
  (func (export "f32_dec.positive_zero") (result i32) (i32.reinterpret_f32 (f32.const +0.0e0)))
  (func (export "f32_dec.negative_zero") (result i32) (i32.reinterpret_f32 (f32.const -0.0e0)))
  (func (export "f32_dec.misc") (result i32) (i32.reinterpret_f32 (f32.const 6.28318548202514648)))
  (func (export "f32_dec.min_positive") (result i32) (i32.reinterpret_f32 (f32.const 1.4013e-45)))
  (func (export "f32_dec.min_normal") (result i32) (i32.reinterpret_f32 (f32.const 1.1754944e-38)))
  (func (export "f32_dec.max_subnormal") (result i32) (i32.reinterpret_f32 (f32.const 1.1754942e-38)))
  (func (export "f32_dec.max_finite") (result i32) (i32.reinterpret_f32 (f32.const 3.4028234e+38)))
  (func (export "f32_dec.trailing_dot") (result i32) (i32.reinterpret_f32 (f32.const 1.e10)))

  ;; https://twitter.com/Archivd/status/994637336506912768
  (func (export "f32_dec.root_beer_float") (result i32) (i32.reinterpret_f32 (f32.const 1.000000119)))

  ;; f64 special values
  (func (export "f64.nan") (result i64) (i64.reinterpret_f64 (f64.const nan)))
  (func (export "f64.positive_nan") (result i64) (i64.reinterpret_f64 (f64.const +nan)))
  (func (export "f64.negative_nan") (result i64) (i64.reinterpret_f64 (f64.const -nan)))
  (func (export "f64.plain_nan") (result i64) (i64.reinterpret_f64 (f64.const nan:0x8000000000000)))
  (func (export "f64.informally_known_as_plain_snan") (result i64) (i64.reinterpret_f64 (f64.const nan:0x4000000000000)))
  (func (export "f64.all_ones_nan") (result i64) (i64.reinterpret_f64 (f64.const -nan:0xfffffffffffff)))
  (func (export "f64.misc_nan") (result i64) (i64.reinterpret_f64 (f64.const nan:0x0123456789abc)))
  (func (export "f64.misc_positive_nan") (result i64) (i64.reinterpret_f64 (f64.const +nan:0x3040506070809)))
  (func (export "f64.misc_negative_nan") (result i64) (i64.reinterpret_f64 (f64.const -nan:0x2abcdef012345)))
  (func (export "f64.infinity") (result i64) (i64.reinterpret_f64 (f64.const inf)))
  (func (export "f64.positive_infinity") (result i64) (i64.reinterpret_f64 (f64.const +inf)))
  (func (export "f64.negative_infinity") (result i64) (i64.reinterpret_f64 (f64.const -inf)))

  ;; f64 numbers
  (func (export "f64.zero") (result i64) (i64.reinterpret_f64 (f64.const 0x0.0p0)))
  (func (export "f64.positive_zero") (result i64) (i64.reinterpret_f64 (f64.const +0x0.0p0)))
  (func (export "f64.negative_zero") (result i64) (i64.reinterpret_f64 (f64.const -0x0.0p0)))
  (func (export "f64.misc") (result i64) (i64.reinterpret_f64 (f64.const 0x1.921fb54442d18p+2)))
  (func (export "f64.min_positive") (result i64) (i64.reinterpret_f64 (f64.const 0x0.0000000000001p-1022)))
  (func (export "f64.min_normal") (result i64) (i64.reinterpret_f64 (f64.const 0x1p-1022)))
  (func (export "f64.max_subnormal") (result i64) (i64.reinterpret_f64 (f64.const 0x0.fffffffffffffp-1022)))
  (func (export "f64.max_finite") (result i64) (i64.reinterpret_f64 (f64.const 0x1.fffffffffffffp+1023)))
  (func (export "f64.trailing_dot") (result i64) (i64.reinterpret_f64 (f64.const 0x1.p100)))

  ;; f64 numbers in decimal format
  (func (export "f64_dec.zero") (result i64) (i64.reinterpret_f64 (f64.const 0.0e0)))
  (func (export "f64_dec.positive_zero") (result i64) (i64.reinterpret_f64 (f64.const +0.0e0)))
  (func (export "f64_dec.negative_zero") (result i64) (i64.reinterpret_f64 (f64.const -0.0e0)))
  (func (export "f64_dec.misc") (result i64) (i64.reinterpret_f64 (f64.const 6.28318530717958623)))
  (func (export "f64_dec.min_positive") (result i64) (i64.reinterpret_f64 (f64.const 4.94066e-324)))
  (func (export "f64_dec.min_normal") (result i64) (i64.reinterpret_f64 (f64.const 2.2250738585072012e-308)))
  (func (export "f64_dec.max_subnormal") (result i64) (i64.reinterpret_f64 (f64.const 2.2250738585072011e-308)))
  (func (export "f64_dec.max_finite") (result i64) (i64.reinterpret_f64 (f64.const 1.7976931348623157e+308)))
  (func (export "f64_dec.trailing_dot") (result i64) (i64.reinterpret_f64 (f64.const 1.e100)))

  ;; https://twitter.com/Archivd/status/994637336506912768
  (func (export "f64_dec.root_beer_float") (result i64) (i64.reinterpret_f64 (f64.const 1.000000119)))

  (func (export "f32-dec-sep1") (result f32) (f32.const 1_000_000))
  (func (export "f32-dec-sep2") (result f32) (f32.const 1_0_0_0))
  (func (export "f32-dec-sep3") (result f32) (f32.const 100_3.141_592))
  (func (export "f32-dec-sep4") (result f32) (f32.const 99e+1_3))
  (func (export "f32-dec-sep5") (result f32) (f32.const 122_000.11_3_54E0_2_3))
  (func (export "f32-hex-sep1") (result f32) (f32.const 0xa_0f_00_99))
  (func (export "f32-hex-sep2") (result f32) (f32.const 0x1_a_A_0_f))
  (func (export "f32-hex-sep3") (result f32) (f32.const 0xa0_ff.f141_a59a))
  (func (export "f32-hex-sep4") (result f32) (f32.const 0xf0P+1_3))
  (func (export "f32-hex-sep5") (result f32) (f32.const 0x2a_f00a.1f_3_eep2_3))

  (func (export "f64-dec-sep1") (result f64) (f64.const 1_000_000))
  (func (export "f64-dec-sep2") (result f64) (f64.const 1_0_0_0))
  (func (export "f64-dec-sep3") (result f64) (f64.const 100_3.141_592))
  (func (export "f64-dec-sep4") (result f64) (f64.const 99e-1_23))
  (func (export "f64-dec-sep5") (result f64) (f64.const 122_000.11_3_54e0_2_3))
  (func (export "f64-hex-sep1") (result f64) (f64.const 0xa_f00f_0000_9999))
  (func (export "f64-hex-sep2") (result f64) (f64.const 0x1_a_A_0_f))
  (func (export "f64-hex-sep3") (result f64) (f64.const 0xa0_ff.f141_a59a))
  (func (export "f64-hex-sep4") (result f64) (f64.const 0xf0P+1_3))
  (func (export "f64-hex-sep5") (result f64) (f64.const 0x2a_f00a.1f_3_eep2_3))
)`);


assert_return(() => invoke($0, `f32.nan`, []), [value("i32", 2143289344)]);


assert_return(() => invoke($0, `f32.positive_nan`, []), [value("i32", 2143289344)]);


assert_return(() => invoke($0, `f32.negative_nan`, []), [value("i32", -4194304)]);


assert_return(() => invoke($0, `f32.plain_nan`, []), [value("i32", 2143289344)]);


assert_return(() => invoke($0, `f32.informally_known_as_plain_snan`, []), [value("i32", 2141192192)]);


assert_return(() => invoke($0, `f32.all_ones_nan`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `f32.misc_nan`, []), [value("i32", 2139169605)]);


assert_return(() => invoke($0, `f32.misc_positive_nan`, []), [value("i32", 2142257232)]);


assert_return(() => invoke($0, `f32.misc_negative_nan`, []), [value("i32", -5587746)]);


assert_return(() => invoke($0, `f32.infinity`, []), [value("i32", 2139095040)]);


assert_return(() => invoke($0, `f32.positive_infinity`, []), [value("i32", 2139095040)]);


assert_return(() => invoke($0, `f32.negative_infinity`, []), [value("i32", -8388608)]);


assert_return(() => invoke($0, `f32.zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32.positive_zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32.negative_zero`, []), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `f32.misc`, []), [value("i32", 1086918619)]);


assert_return(() => invoke($0, `f32.min_positive`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `f32.min_normal`, []), [value("i32", 8388608)]);


assert_return(() => invoke($0, `f32.max_subnormal`, []), [value("i32", 8388607)]);


assert_return(() => invoke($0, `f32.max_finite`, []), [value("i32", 2139095039)]);


assert_return(() => invoke($0, `f32.trailing_dot`, []), [value("i32", 1149239296)]);


assert_return(() => invoke($0, `f32_dec.zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32_dec.positive_zero`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `f32_dec.negative_zero`, []), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `f32_dec.misc`, []), [value("i32", 1086918619)]);


assert_return(() => invoke($0, `f32_dec.min_positive`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `f32_dec.min_normal`, []), [value("i32", 8388608)]);


assert_return(() => invoke($0, `f32_dec.max_subnormal`, []), [value("i32", 8388607)]);


assert_return(() => invoke($0, `f32_dec.max_finite`, []), [value("i32", 2139095039)]);


assert_return(() => invoke($0, `f32_dec.trailing_dot`, []), [value("i32", 1343554297)]);


assert_return(() => invoke($0, `f32_dec.root_beer_float`, []), [value("i32", 1065353217)]);


assert_return(() => invoke($0, `f64.nan`, []), [value("i64", 9221120237041090560n)]);


assert_return(() => invoke($0, `f64.positive_nan`, []), [value("i64", 9221120237041090560n)]);


assert_return(() => invoke($0, `f64.negative_nan`, []), [value("i64", -2251799813685248n)]);


assert_return(() => invoke($0, `f64.plain_nan`, []), [value("i64", 9221120237041090560n)]);


assert_return(
  () => invoke($0, `f64.informally_known_as_plain_snan`, []),
  [value("i64", 9219994337134247936n)],
);


assert_return(() => invoke($0, `f64.all_ones_nan`, []), [value("i64", -1n)]);


assert_return(() => invoke($0, `f64.misc_nan`, []), [value("i64", 9218888453225749180n)]);


assert_return(() => invoke($0, `f64.misc_positive_nan`, []), [value("i64", 9219717281780008969n)]);


assert_return(() => invoke($0, `f64.misc_negative_nan`, []), [value("i64", -3751748707474619n)]);


assert_return(() => invoke($0, `f64.infinity`, []), [value("i64", 9218868437227405312n)]);


assert_return(() => invoke($0, `f64.positive_infinity`, []), [value("i64", 9218868437227405312n)]);


assert_return(() => invoke($0, `f64.negative_infinity`, []), [value("i64", -4503599627370496n)]);


assert_return(() => invoke($0, `f64.zero`, []), [value("i64", 0n)]);


assert_return(() => invoke($0, `f64.positive_zero`, []), [value("i64", 0n)]);


assert_return(() => invoke($0, `f64.negative_zero`, []), [value("i64", -9223372036854775808n)]);


assert_return(() => invoke($0, `f64.misc`, []), [value("i64", 4618760256179416344n)]);


assert_return(() => invoke($0, `f64.min_positive`, []), [value("i64", 1n)]);


assert_return(() => invoke($0, `f64.min_normal`, []), [value("i64", 4503599627370496n)]);


assert_return(() => invoke($0, `f64.max_subnormal`, []), [value("i64", 4503599627370495n)]);


assert_return(() => invoke($0, `f64.max_finite`, []), [value("i64", 9218868437227405311n)]);


assert_return(() => invoke($0, `f64.trailing_dot`, []), [value("i64", 5057542381537067008n)]);


assert_return(() => invoke($0, `f64_dec.zero`, []), [value("i64", 0n)]);


assert_return(() => invoke($0, `f64_dec.positive_zero`, []), [value("i64", 0n)]);


assert_return(() => invoke($0, `f64_dec.negative_zero`, []), [value("i64", -9223372036854775808n)]);


assert_return(() => invoke($0, `f64_dec.misc`, []), [value("i64", 4618760256179416344n)]);


assert_return(() => invoke($0, `f64_dec.min_positive`, []), [value("i64", 1n)]);


assert_return(() => invoke($0, `f64_dec.min_normal`, []), [value("i64", 4503599627370496n)]);


assert_return(() => invoke($0, `f64_dec.max_subnormal`, []), [value("i64", 4503599627370495n)]);


assert_return(() => invoke($0, `f64_dec.max_finite`, []), [value("i64", 9218868437227405311n)]);


assert_return(() => invoke($0, `f64_dec.trailing_dot`, []), [value("i64", 6103021453049119613n)]);


assert_return(() => invoke($0, `f64_dec.root_beer_float`, []), [value("i64", 4607182419335945764n)]);


assert_return(() => invoke($0, `f32-dec-sep1`, []), [value("f32", 1000000)]);


assert_return(() => invoke($0, `f32-dec-sep2`, []), [value("f32", 1000)]);


assert_return(() => invoke($0, `f32-dec-sep3`, []), [value("f32", 1003.1416)]);


assert_return(() => invoke($0, `f32-dec-sep4`, []), [value("f32", 990000000000000)]);


assert_return(() => invoke($0, `f32-dec-sep5`, []), [value("f32", 12200012000000000000000000000)]);


assert_return(() => invoke($0, `f32-hex-sep1`, []), [value("f32", 168755360)]);


assert_return(() => invoke($0, `f32-hex-sep2`, []), [value("f32", 109071)]);


assert_return(() => invoke($0, `f32-hex-sep3`, []), [value("f32", 41215.94)]);


assert_return(() => invoke($0, `f32-hex-sep4`, []), [value("f32", 1966080)]);


assert_return(() => invoke($0, `f32-hex-sep5`, []), [value("f32", 23605224000000)]);


assert_return(() => invoke($0, `f64-dec-sep1`, []), [value("f64", 1000000)]);


assert_return(() => invoke($0, `f64-dec-sep2`, []), [value("f64", 1000)]);


assert_return(() => invoke($0, `f64-dec-sep3`, []), [value("f64", 1003.141592)]);


assert_return(
  () => invoke($0, `f64-dec-sep4`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000099),
  ],
);


assert_return(() => invoke($0, `f64-dec-sep5`, []), [value("f64", 12200011354000000000000000000)]);


assert_return(() => invoke($0, `f64-hex-sep1`, []), [value("f64", 3078696982321561)]);


assert_return(() => invoke($0, `f64-hex-sep2`, []), [value("f64", 109071)]);


assert_return(() => invoke($0, `f64-hex-sep3`, []), [value("f64", 41215.94240794191)]);


assert_return(() => invoke($0, `f64-hex-sep4`, []), [value("f64", 1966080)]);


assert_return(() => invoke($0, `f64-hex-sep5`, []), [value("f64", 23605225168752)]);


let $1 = instantiate(`(module binary
  ;; (func (export "4294967249") (result f64) (f64.const 4294967249))
  "\\00\\61\\73\\6d\\01\\00\\00\\00\\01\\85\\80\\80\\80\\00\\01\\60"
  "\\00\\01\\7c\\03\\82\\80\\80\\80\\00\\01\\00\\07\\8e\\80\\80\\80"
  "\\00\\01\\0a\\34\\32\\39\\34\\39\\36\\37\\32\\34\\39\\00\\00\\0a"
  "\\91\\80\\80\\80\\00\\01\\8b\\80\\80\\80\\00\\00\\44\\00\\00\\20"
  "\\fa\\ff\\ff\\ef\\41\\0b"
)`);


assert_return(() => invoke($1, `4294967249`, []), [value("f64", 4294967249)]);


assert_malformed(() => instantiate(`(global f32 (f32.const _100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const +_100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const -_100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 99_)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1__000)) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(global f32 (f32.const _1.0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1.0_)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1_.0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1._0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const _1e1)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1e1_)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1_e1)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f32 (f32.const 1e_1)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f32 (f32.const _1.0e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1.0e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1.0_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1.0e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1.0e+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 1.0e_+1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const _0x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0_x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x_100)) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(global f32 (f32.const 0x00_)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0xff__ffff)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x_1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x_1p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x_1.0p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0p+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f32 (f32.const 0x1.0p_+1)) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(global f64 (f64.const _100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const +_100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const -_100)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 99_)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1__000)) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(global f64 (f64.const _1.0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1.0_)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1_.0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1._0)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const _1e1)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1e1_)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1_e1)) `), `unknown operator`);


assert_malformed(() => instantiate(`(global f64 (f64.const 1e_1)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f64 (f64.const _1.0e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1.0e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1.0_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1.0e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1.0e+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 1.0e_+1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const _0x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0_x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x_100)) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(global f64 (f64.const 0x00_)) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0xff__ffff)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x_1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x_1p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x_1.0p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0p+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global f64 (f64.const 0x1.0p_+1)) `),
  `unknown operator`,
);
