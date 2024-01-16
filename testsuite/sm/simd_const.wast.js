






let $0 = instantiate(`(module (func (v128.const i8x16  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF) drop))`);


let $1 = instantiate(`(module (func (v128.const i8x16 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80) drop))`);


let $2 = instantiate(`(module (func (v128.const i8x16  255  255  255  255  255  255  255  255  255  255  255  255  255  255  255  255) drop))`);


let $3 = instantiate(`(module (func (v128.const i8x16 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128 -128) drop))`);


let $4 = instantiate(`(module (func (v128.const i16x8  0xFFFF  0xFFFF  0xFFFF  0xFFFF  0xFFFF  0xFFFF  0xFFFF  0xFFFF) drop))`);


let $5 = instantiate(`(module (func (v128.const i16x8 -0x8000 -0x8000 -0x8000 -0x8000 -0x8000 -0x8000 -0x8000 -0x8000) drop))`);


let $6 = instantiate(`(module (func (v128.const i16x8  65535  65535  65535  65535  65535  65535  65535  65535) drop))`);


let $7 = instantiate(`(module (func (v128.const i16x8 -32768 -32768 -32768 -32768 -32768 -32768 -32768 -32768) drop))`);


let $8 = instantiate(`(module (func (v128.const i16x8  65_535  65_535  65_535  65_535  65_535  65_535  65_535  65_535) drop))`);


let $9 = instantiate(`(module (func (v128.const i16x8 -32_768 -32_768 -32_768 -32_768 -32_768 -32_768 -32_768 -32_768) drop))`);


let $10 = instantiate(`(module (func (v128.const i16x8  0_123_45 0_123_45 0_123_45 0_123_45 0_123_45 0_123_45 0_123_45 0_123_45) drop))`);


let $11 = instantiate(`(module (func (v128.const i16x8  0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234 0x0_1234) drop))`);


let $12 = instantiate(`(module (func (v128.const i32x4  0xffffffff  0xffffffff  0xffffffff  0xffffffff) drop))`);


let $13 = instantiate(`(module (func (v128.const i32x4 -0x80000000 -0x80000000 -0x80000000 -0x80000000) drop))`);


let $14 = instantiate(`(module (func (v128.const i32x4  4294967295  4294967295  4294967295  4294967295) drop))`);


let $15 = instantiate(`(module (func (v128.const i32x4 -2147483648 -2147483648 -2147483648 -2147483648) drop))`);


let $16 = instantiate(`(module (func (v128.const i32x4  0xffff_ffff  0xffff_ffff  0xffff_ffff  0xffff_ffff) drop))`);


let $17 = instantiate(`(module (func (v128.const i32x4 -0x8000_0000 -0x8000_0000 -0x8000_0000 -0x8000_0000) drop))`);


let $18 = instantiate(`(module (func (v128.const i32x4 4_294_967_295  4_294_967_295  4_294_967_295  4_294_967_295) drop))`);


let $19 = instantiate(`(module (func (v128.const i32x4 -2_147_483_648 -2_147_483_648 -2_147_483_648 -2_147_483_648) drop))`);


let $20 = instantiate(`(module (func (v128.const i32x4 0_123_456_789 0_123_456_789 0_123_456_789 0_123_456_789) drop))`);


let $21 = instantiate(`(module (func (v128.const i32x4 0x0_9acf_fBDF 0x0_9acf_fBDF 0x0_9acf_fBDF 0x0_9acf_fBDF) drop))`);


let $22 = instantiate(`(module (func (v128.const i64x2  0xffffffffffffffff  0xffffffffffffffff) drop))`);


let $23 = instantiate(`(module (func (v128.const i64x2 -0x8000000000000000 -0x8000000000000000) drop))`);


let $24 = instantiate(`(module (func (v128.const i64x2  18446744073709551615 18446744073709551615) drop))`);


let $25 = instantiate(`(module (func (v128.const i64x2 -9223372036854775808 -9223372036854775808) drop))`);


let $26 = instantiate(`(module (func (v128.const i64x2  0xffff_ffff_ffff_ffff  0xffff_ffff_ffff_ffff) drop))`);


let $27 = instantiate(`(module (func (v128.const i64x2 -0x8000_0000_0000_0000 -0x8000_0000_0000_0000) drop))`);


let $28 = instantiate(`(module (func (v128.const i64x2  18_446_744_073_709_551_615 18_446_744_073_709_551_615) drop))`);


let $29 = instantiate(`(module (func (v128.const i64x2 -9_223_372_036_854_775_808 -9_223_372_036_854_775_808) drop))`);


let $30 = instantiate(`(module (func (v128.const i64x2  0_123_456_789 0_123_456_789) drop))`);


let $31 = instantiate(`(module (func (v128.const i64x2  0x0125_6789_ADEF_bcef 0x0125_6789_ADEF_bcef) drop))`);


let $32 = instantiate(`(module (func (v128.const f32x4  0x1p127  0x1p127  0x1p127  0x1p127) drop))`);


let $33 = instantiate(`(module (func (v128.const f32x4 -0x1p127 -0x1p127 -0x1p127 -0x1p127) drop))`);


let $34 = instantiate(`(module (func (v128.const f32x4  1e38  1e38  1e38  1e38) drop))`);


let $35 = instantiate(`(module (func (v128.const f32x4 -1e38 -1e38 -1e38 -1e38) drop))`);


let $36 = instantiate(`(module (func (v128.const f32x4  340282356779733623858607532500980858880 340282356779733623858607532500980858880
                                 340282356779733623858607532500980858880 340282356779733623858607532500980858880) drop))`);


let $37 = instantiate(`(module (func (v128.const f32x4 -340282356779733623858607532500980858880 -340282356779733623858607532500980858880
                                -340282356779733623858607532500980858880 -340282356779733623858607532500980858880) drop))`);


let $38 = instantiate(`(module (func (v128.const f32x4 nan:0x1 nan:0x1 nan:0x1 nan:0x1) drop))`);


let $39 = instantiate(`(module (func (v128.const f32x4 nan:0x7f_ffff nan:0x7f_ffff nan:0x7f_ffff nan:0x7f_ffff) drop))`);


let $40 = instantiate(`(module (func (v128.const f32x4 0123456789 0123456789 0123456789 0123456789) drop))`);


let $41 = instantiate(`(module (func (v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019) drop))`);


let $42 = instantiate(`(module (func (v128.const f32x4 0123456789e+019 0123456789e+019 0123456789e+019 0123456789e+019) drop))`);


let $43 = instantiate(`(module (func (v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019) drop))`);


let $44 = instantiate(`(module (func (v128.const f32x4 0123456789. 0123456789. 0123456789. 0123456789.) drop))`);


let $45 = instantiate(`(module (func (v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019) drop))`);


let $46 = instantiate(`(module (func (v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019) drop))`);


let $47 = instantiate(`(module (func (v128.const f32x4 0123456789.e-019 0123456789.e-019 0123456789.e-019 0123456789.e-019) drop))`);


let $48 = instantiate(`(module (func (v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789) drop))`);


let $49 = instantiate(`(module (func (v128.const f32x4 0123456789.0123456789e019 0123456789.0123456789e019 0123456789.0123456789e019 0123456789.0123456789e019) drop))`);


let $50 = instantiate(`(module (func (v128.const f32x4 0123456789.0123456789e+019 0123456789.0123456789e+019 0123456789.0123456789e+019 0123456789.0123456789e+019) drop))`);


let $51 = instantiate(`(module (func (v128.const f32x4 0123456789.0123456789e-019 0123456789.0123456789e-019 0123456789.0123456789e-019 0123456789.0123456789e-019) drop))`);


let $52 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF 0x0123456789ABCDEF 0x0123456789ABCDEF 0x0123456789ABCDEF) drop))`);


let $53 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEFp019 0x0123456789ABCDEFp019 0x0123456789ABCDEFp019 0x0123456789ABCDEFp019) drop))`);


let $54 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEFp+019 0x0123456789ABCDEFp+019 0x0123456789ABCDEFp+019 0x0123456789ABCDEFp+019) drop))`);


let $55 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEFp-019 0x0123456789ABCDEFp-019 0x0123456789ABCDEFp-019 0x0123456789ABCDEFp-019) drop))`);


let $56 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF. 0x0123456789ABCDEF. 0x0123456789ABCDEF. 0x0123456789ABCDEF.) drop))`);


let $57 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.p019 0x0123456789ABCDEF.p019 0x0123456789ABCDEF.p019 0x0123456789ABCDEF.p019) drop))`);


let $58 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.p+019 0x0123456789ABCDEF.p+019 0x0123456789ABCDEF.p+019 0x0123456789ABCDEF.p+019) drop))`);


let $59 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.p-019 0x0123456789ABCDEF.p-019 0x0123456789ABCDEF.p-019 0x0123456789ABCDEF.p-019) drop))`);


let $60 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.019aF 0x0123456789ABCDEF.019aF 0x0123456789ABCDEF.019aF 0x0123456789ABCDEF.019aF) drop))`);


let $61 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.019aFp019 0x0123456789ABCDEF.019aFp019 0x0123456789ABCDEF.019aFp019 0x0123456789ABCDEF.019aFp019) drop))`);


let $62 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.019aFp+019 0x0123456789ABCDEF.019aFp+019 0x0123456789ABCDEF.019aFp+019 0x0123456789ABCDEF.019aFp+019) drop))`);


let $63 = instantiate(`(module (func (v128.const f32x4 0x0123456789ABCDEF.019aFp-019 0x0123456789ABCDEF.019aFp-019 0x0123456789ABCDEF.019aFp-019 0x0123456789ABCDEF.019aFp-019) drop))`);


let $64 = instantiate(`(module (func (v128.const f64x2  0x1p1023  0x1p1023) drop))`);


let $65 = instantiate(`(module (func (v128.const f64x2 -0x1p1023 -0x1p1023) drop))`);


let $66 = instantiate(`(module (func (v128.const f64x2  1e308  1e308) drop))`);


let $67 = instantiate(`(module (func (v128.const f64x2 -1e308 -1e308) drop))`);


let $68 = instantiate(`(module (func (v128.const f64x2  179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368
                                 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) drop))`);


let $69 = instantiate(`(module (func (v128.const f64x2 -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368
                                -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) drop))`);


let $70 = instantiate(`(module (func (v128.const f64x2 nan:0x1 nan:0x1) drop))`);


let $71 = instantiate(`(module (func (v128.const f64x2 nan:0xf_ffff_ffff_ffff nan:0xf_ffff_ffff_ffff) drop))`);


let $72 = instantiate(`(module (func (v128.const f64x2 0123456789 0123456789) drop))`);


let $73 = instantiate(`(module (func (v128.const f64x2 0123456789e019 0123456789e019) drop))`);


let $74 = instantiate(`(module (func (v128.const f64x2 0123456789e+019 0123456789e+019) drop))`);


let $75 = instantiate(`(module (func (v128.const f64x2 0123456789e-019 0123456789e-019) drop))`);


let $76 = instantiate(`(module (func (v128.const f64x2 0123456789. 0123456789.) drop))`);


let $77 = instantiate(`(module (func (v128.const f64x2 0123456789.e019 0123456789.e019) drop))`);


let $78 = instantiate(`(module (func (v128.const f64x2 0123456789.e+019 0123456789.e+019) drop))`);


let $79 = instantiate(`(module (func (v128.const f64x2 0123456789.e-019 0123456789.e-019) drop))`);


let $80 = instantiate(`(module (func (v128.const f64x2 0123456789.0123456789 0123456789.0123456789) drop))`);


let $81 = instantiate(`(module (func (v128.const f64x2 0123456789.0123456789e019 0123456789.0123456789e019) drop))`);


let $82 = instantiate(`(module (func (v128.const f64x2 0123456789.0123456789e+019 0123456789.0123456789e+019) drop))`);


let $83 = instantiate(`(module (func (v128.const f64x2 0123456789.0123456789e-019 0123456789.0123456789e-019) drop))`);


let $84 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef 0x0123456789ABCDEFabcdef) drop))`);


let $85 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdefp019 0x0123456789ABCDEFabcdefp019) drop))`);


let $86 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdefp+019 0x0123456789ABCDEFabcdefp+019) drop))`);


let $87 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdefp-019 0x0123456789ABCDEFabcdefp-019) drop))`);


let $88 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef. 0x0123456789ABCDEFabcdef.) drop))`);


let $89 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.p019 0x0123456789ABCDEFabcdef.p019) drop))`);


let $90 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.p+019 0x0123456789ABCDEFabcdef.p+019) drop))`);


let $91 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.p-019 0x0123456789ABCDEFabcdef.p-019) drop))`);


let $92 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdef 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdef) drop))`);


let $93 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp019 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp019) drop))`);


let $94 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp+019 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp+019) drop))`);


let $95 = instantiate(`(module (func (v128.const f64x2 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp-019 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp-019) drop))`);


let $96 = instantiate(`(module (func (v128.const i8x16  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF  0xFF
                                -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80) drop))`);


let $97 = instantiate(`(module (func (v128.const i8x16  0xFF  0xFF  0xFF  0xFF   255   255   255   255
                                -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80 -0x80) drop))`);


let $98 = instantiate(`(module (func (v128.const i8x16  0xFF  0xFF  0xFF  0xFF   255   255   255   255
                                -0x80 -0x80 -0x80 -0x80  -128  -128  -128  -128) drop))`);


let $99 = instantiate(`(module (func (v128.const i16x8 0xFF 0xFF  0xFF  0xFF -0x8000 -0x8000 -0x8000 -0x8000) drop))`);


let $100 = instantiate(`(module (func (v128.const i16x8 0xFF 0xFF 65535 65535 -0x8000 -0x8000 -0x8000 -0x8000) drop))`);


let $101 = instantiate(`(module (func (v128.const i16x8 0xFF 0xFF 65535 65535 -0x8000 -0x8000  -32768  -32768) drop))`);


let $102 = instantiate(`(module (func (v128.const i32x4 0xffffffff 0xffffffff -0x80000000 -0x80000000) drop))`);


let $103 = instantiate(`(module (func (v128.const i32x4 0xffffffff 4294967295 -0x80000000 -0x80000000) drop))`);


let $104 = instantiate(`(module (func (v128.const i32x4 0xffffffff 4294967295 -0x80000000 -2147483648) drop))`);


let $105 = instantiate(`(module (func (v128.const f32x4 0x1p127 0x1p127 -0x1p127 -1e38) drop))`);


let $106 = instantiate(`(module (func (v128.const f32x4 0x1p127 340282356779733623858607532500980858880 -1e38 -340282356779733623858607532500980858880) drop))`);


let $107 = instantiate(`(module (func (v128.const f32x4 nan -nan inf -inf) drop))`);


let $108 = instantiate(`(module (func (v128.const i64x2 0xffffffffffffffff 0x8000000000000000) drop))`);


let $109 = instantiate(`(module (func (v128.const i64x2 0xffffffffffffffff -9223372036854775808) drop))`);


let $110 = instantiate(`(module (func (v128.const f64x2 0x1p1023 -1e308) drop))`);


let $111 = instantiate(`(module (func (v128.const f64x2 nan -inf) drop))`);


let $112 = instantiate(`(module (memory 1))`);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100 0x100) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81 -0x81) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 256 256 256 256 256 256 256 256 256 256 256 256 256 256 256 256) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129 -129) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 0x10000 0x10000 0x10000 0x10000 0x10000 0x10000 0x10000 0x10000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 -0x8001 -0x8001 -0x8001 -0x8001 -0x8001 -0x8001 -0x8001 -0x8001) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 65536 65536 65536 65536 65536 65536 65536 65536) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 -32769 -32769 -32769 -32769 -32769 -32769 -32769 -32769) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4  0x100000000  0x100000000  0x100000000  0x100000000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 -0x80000001 -0x80000001 -0x80000001 -0x80000001) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4  4294967296  4294967296  4294967296  4294967296) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 -2147483649 -2147483649 -2147483649 -2147483649) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4  0x1p128  0x1p128  0x1p128  0x1p128) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 -0x1p128 -0x1p128 -0x1p128 -0x1p128) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4  1e39  1e39  1e39  1e39) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 -1e39 -1e39 -1e39 -1e39) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4  340282356779733661637539395458142568448 340282356779733661637539395458142568448                          340282356779733661637539395458142568448 340282356779733661637539395458142568448) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 -340282356779733661637539395458142568448 -340282356779733661637539395458142568448                         -340282356779733661637539395458142568448 -340282356779733661637539395458142568448) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 nan:0x80_0000 nan:0x80_0000 nan:0x80_0000 nan:0x80_0000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2  269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552                          269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 -269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552                         -269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 nan:0x10_0000_0000_0000 nan:0x10_0000_0000_0000) drop) `),
  `constant out of range`,
);


assert_malformed(() => instantiate(`(func (v128.const) drop) `), `unexpected token`);


assert_malformed(
  () => instantiate(`(func (v128.const 0 0 0 0) drop) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i8x16 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 0x 0x 0x 0x 0x 0x 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 1x 1x 1x 1x 1x 1x 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i16x8 0xg 0xg 0xg 0xg 0xg 0xg 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 0x 0x 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 1x 1x 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 0xg 0xg 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i64x2) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i64x2 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 .0 .0 .0 .0) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 .0e0 .0e0 .0e0 .0e0) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0e 0e 0e 0e) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0e+ 0e+ 0e+ 0e+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0.0e 0.0e 0.0e 0.0e) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0.0e- 0.0e- 0.0e- 0.0e-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x 0x 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 1x 1x 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0xg 0xg 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x. 0x. 0x. 0x.) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0.g 0x0.g 0x0.g 0x0.g) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0p 0x0p 0x0p 0x0p) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0p+ 0x0p+ 0x0p+ 0x0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0p- 0x0p- 0x0p- 0x0p-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0.0p 0x0.0p 0x0.0p 0x0.0p) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0.0p+ 0x0.0p+ 0x0.0p+ 0x0.0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0.0p- 0x0.0p- 0x0.0p- 0x0.0p-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 0x0pA 0x0pA 0x0pA 0x0pA) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 nan:1 nan:1 nan:1 nan:1) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f32x4 nan:0x0 nan:0x0 nan:0x0 nan:0x0) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 .0 .0) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 .0e0 .0e0) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0e 0e) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0e+ 0e+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0.0e+ 0.0e+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0.0e- 0.0e-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x 0x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 1x 1x) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0xg 0xg) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x. 0x.) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0.g 0x0.g) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0p 0x0p) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0p+ 0x0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0p- 0x0p-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0.0p 0x0.0p) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0.0p+ 0x0.0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0.0p- 0x0.0p-) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 0x0pA 0x0pA) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 nan:1 nan:1) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (v128.const f64x2 nan:0x0 nan:0x0) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 0x10000000000000000 0x10000000000000000) drop) `),
  `wrong number of lane literals`,
);


assert_malformed(
  () => instantiate(`(func (v128.const i32x4 0x1 0x1 0x1 0x1 0x1) drop) `),
  `wrong number of lane literals`,
);


let $113 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.00000100000000000p-50 +0x1.00000100000000000p-50 +0x1.00000100000000000p-50 +0x1.00000100000000000p-50)))`);


assert_return(
  () => invoke($113, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
    ),
  ],
);


let $114 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.00000100000000000p-50 -0x1.00000100000000000p-50 -0x1.00000100000000000p-50 -0x1.00000100000000000p-50)))`);


assert_return(
  () => invoke($114, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
    ),
  ],
);


let $115 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.00000500000000001p-50 +0x1.00000500000000001p-50 +0x1.00000500000000001p-50 +0x1.00000500000000001p-50)))`);


assert_return(
  () => invoke($115, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
    ),
  ],
);


let $116 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.00000500000000001p-50 -0x1.00000500000000001p-50 -0x1.00000500000000001p-50 -0x1.00000500000000001p-50)))`);


assert_return(
  () => invoke($116, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
    ),
  ],
);


let $117 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x4000.004000000p-64 +0x4000.004000000p-64 +0x4000.004000000p-64 +0x4000.004000000p-64)))`);


assert_return(
  () => invoke($117, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
    ),
  ],
);


let $118 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x4000.004000000p-64 -0x4000.004000000p-64 -0x4000.004000000p-64 -0x4000.004000000p-64)))`);


assert_return(
  () => invoke($118, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
    ),
  ],
);


let $119 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x4000.014000001p-64 +0x4000.014000001p-64 +0x4000.014000001p-64 +0x4000.014000001p-64)))`);


assert_return(
  () => invoke($119, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
      value("f32", 0.0000000000000008881787),
    ),
  ],
);


let $120 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x4000.014000001p-64 -0x4000.014000001p-64 -0x4000.014000001p-64 -0x4000.014000001p-64)))`);


assert_return(
  () => invoke($120, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
      value("f32", -0.0000000000000008881787),
    ),
  ],
);


let $121 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +8.8817847263968443573e-16 +8.8817847263968443573e-16 +8.8817847263968443573e-16 +8.8817847263968443573e-16)))`);


assert_return(
  () => invoke($121, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
      value("f32", 0.0000000000000008881784),
    ),
  ],
);


let $122 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -8.8817847263968443573e-16 -8.8817847263968443573e-16 -8.8817847263968443573e-16 -8.8817847263968443573e-16)))`);


assert_return(
  () => invoke($122, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
      value("f32", -0.0000000000000008881784),
    ),
  ],
);


let $123 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +8.8817857851880284253e-16 +8.8817857851880284253e-16 +8.8817857851880284253e-16 +8.8817857851880284253e-16)))`);


assert_return(
  () => invoke($123, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.0000000000000008881786),
      value("f32", 0.0000000000000008881786),
      value("f32", 0.0000000000000008881786),
      value("f32", 0.0000000000000008881786),
    ),
  ],
);


let $124 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -8.8817857851880284253e-16 -8.8817857851880284253e-16 -8.8817857851880284253e-16 -8.8817857851880284253e-16)))`);


assert_return(
  () => invoke($124, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.0000000000000008881786),
      value("f32", -0.0000000000000008881786),
      value("f32", -0.0000000000000008881786),
      value("f32", -0.0000000000000008881786),
    ),
  ],
);


let $125 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.00000100000000000p+50 +0x1.00000100000000000p+50 +0x1.00000100000000000p+50 +0x1.00000100000000000p+50)))`);


assert_return(
  () => invoke($125, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
    ),
  ],
);


let $126 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.00000100000000000p+50 -0x1.00000100000000000p+50 -0x1.00000100000000000p+50 -0x1.00000100000000000p+50)))`);


assert_return(
  () => invoke($126, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
    ),
  ],
);


let $127 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.00000500000000001p+50 +0x1.00000500000000001p+50 +0x1.00000500000000001p+50 +0x1.00000500000000001p+50)))`);


assert_return(
  () => invoke($127, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125900300000000),
      value("f32", 1125900300000000),
      value("f32", 1125900300000000),
      value("f32", 1125900300000000),
    ),
  ],
);


let $128 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.00000500000000001p+50 -0x1.00000500000000001p+50 -0x1.00000500000000001p+50 -0x1.00000500000000001p+50)))`);


assert_return(
  () => invoke($128, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125900300000000),
      value("f32", -1125900300000000),
      value("f32", -1125900300000000),
      value("f32", -1125900300000000),
    ),
  ],
);


let $129 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x4000004000000 +0x4000004000000 +0x4000004000000 +0x4000004000000)))`);


assert_return(
  () => invoke($129, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
    ),
  ],
);


let $130 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x4000004000000 -0x4000004000000 -0x4000004000000 -0x4000004000000)))`);


assert_return(
  () => invoke($130, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
    ),
  ],
);


let $131 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x400000c000000 +0x400000c000000 +0x400000c000000 +0x400000c000000)))`);


assert_return(
  () => invoke($131, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
    ),
  ],
);


let $132 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x400000c000000 -0x400000c000000 -0x400000c000000 -0x400000c000000)))`);


assert_return(
  () => invoke($132, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
    ),
  ],
);


let $133 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +1125899973951488 +1125899973951488 +1125899973951488 +1125899973951488)))`);


assert_return(
  () => invoke($133, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
      value("f32", 1125899900000000),
    ),
  ],
);


let $134 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -1125899973951488 -1125899973951488 -1125899973951488 -1125899973951488)))`);


assert_return(
  () => invoke($134, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
      value("f32", -1125899900000000),
    ),
  ],
);


let $135 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +1125900108169216 +1125900108169216 +1125900108169216 +1125900108169216)))`);


assert_return(
  () => invoke($135, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
      value("f32", 1125900200000000),
    ),
  ],
);


let $136 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -1125900108169216 -1125900108169216 -1125900108169216 -1125900108169216)))`);


assert_return(
  () => invoke($136, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
      value("f32", -1125900200000000),
    ),
  ],
);


let $137 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x0.00000100000000000p-126 +0x0.00000100000000000p-126 +0x0.00000100000000000p-126 +0x0.00000100000000000p-126)))`);


assert_return(
  () => invoke($137, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


let $138 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x0.00000100000000000p-126 -0x0.00000100000000000p-126 -0x0.00000100000000000p-126 -0x0.00000100000000000p-126)))`);


assert_return(
  () => invoke($138, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
      value("f32", -0),
    ),
  ],
);


let $139 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x0.00000500000000001p-126 +0x0.00000500000000001p-126 +0x0.00000500000000001p-126 +0x0.00000500000000001p-126)))`);


assert_return(
  () => invoke($139, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 0.000000000000000000000000000000000000000000004),
      value("f32", 0.000000000000000000000000000000000000000000004),
      value("f32", 0.000000000000000000000000000000000000000000004),
      value("f32", 0.000000000000000000000000000000000000000000004),
    ),
  ],
);


let $140 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x0.00000500000000001p-126 -0x0.00000500000000001p-126 -0x0.00000500000000001p-126 -0x0.00000500000000001p-126)))`);


assert_return(
  () => invoke($140, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -0.000000000000000000000000000000000000000000004),
      value("f32", -0.000000000000000000000000000000000000000000004),
      value("f32", -0.000000000000000000000000000000000000000000004),
      value("f32", -0.000000000000000000000000000000000000000000004),
    ),
  ],
);


let $141 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.fffffe8p127 +0x1.fffffe8p127 +0x1.fffffe8p127 +0x1.fffffe8p127)))`);


assert_return(
  () => invoke($141, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
    ),
  ],
);


let $142 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.fffffe8p127 -0x1.fffffe8p127 -0x1.fffffe8p127 -0x1.fffffe8p127)))`);


assert_return(
  () => invoke($142, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
    ),
  ],
);


let $143 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 +0x1.fffffefffffffffffp127 +0x1.fffffefffffffffffp127 +0x1.fffffefffffffffffp127 +0x1.fffffefffffffffffp127)))`);


assert_return(
  () => invoke($143, `f`, []),
  [
    new F32x4Pattern(
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
    ),
  ],
);


let $144 = instantiate(`(module (func (export "f") (result v128) (v128.const f32x4 -0x1.fffffefffffffffffp127 -0x1.fffffefffffffffffp127 -0x1.fffffefffffffffffp127 -0x1.fffffefffffffffffp127)))`);


assert_return(
  () => invoke($144, `f`, []),
  [
    new F32x4Pattern(
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
    ),
  ],
);


let $145 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000000p-600)))`);


assert_return(
  () => invoke($145, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $146 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000000p-600)))`);


assert_return(
  () => invoke($146, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $147 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000001p-600)))`);


assert_return(
  () => invoke($147, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $148 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000001p-600)))`);


assert_return(
  () => invoke($148, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $149 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000000fffffffffffp-600)))`);


assert_return(
  () => invoke($149, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $150 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000000fffffffffffp-600)))`);


assert_return(
  () => invoke($150, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $151 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000000p-600)))`);


assert_return(
  () => invoke($151, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $152 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000000p-600)))`);


assert_return(
  () => invoke($152, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $153 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000001p-600)))`);


assert_return(
  () => invoke($153, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $154 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000001p-600)))`);


assert_return(
  () => invoke($154, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $155 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000017ffffffffffp-600)))`);


assert_return(
  () => invoke($155, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $156 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000017ffffffffffp-600)))`);


assert_return(
  () => invoke($156, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $157 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000000p-600)))`);


assert_return(
  () => invoke($157, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $158 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000000p-600)))`);


assert_return(
  () => invoke($158, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $159 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000001p-600)))`);


assert_return(
  () => invoke($159, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $160 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000001p-600)))`);


assert_return(
  () => invoke($160, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $161 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000001fffffffffffp-600)))`);


assert_return(
  () => invoke($161, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $162 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000001fffffffffffp-600)))`);


assert_return(
  () => invoke($162, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $163 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000000p-600)))`);


assert_return(
  () => invoke($163, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $164 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000000p-600)))`);


assert_return(
  () => invoke($164, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $165 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000001p-600)))`);


assert_return(
  () => invoke($165, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $166 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000001p-600)))`);


assert_return(
  () => invoke($166, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $167 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000027ffffffffffp-600)))`);


assert_return(
  () => invoke($167, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $168 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000027ffffffffffp-600)))`);


assert_return(
  () => invoke($168, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $169 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000280000000001p-600)))`);


assert_return(
  () => invoke($169, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $170 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000280000000001p-600)))`);


assert_return(
  () => invoke($170, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $171 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000400000000000p-627)))`);


assert_return(
  () => invoke($171, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $172 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000400000000000p-627)))`);


assert_return(
  () => invoke($172, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $173 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000400000000001p-627)))`);


assert_return(
  () => invoke($173, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $174 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000400000000001p-627)))`);


assert_return(
  () => invoke($174, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $175 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.0000007fffffffffffp-627)))`);


assert_return(
  () => invoke($175, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $176 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.0000007fffffffffffp-627)))`);


assert_return(
  () => invoke($176, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $177 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000800000000000p-627)))`);


assert_return(
  () => invoke($177, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $178 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000800000000000p-627)))`);


assert_return(
  () => invoke($178, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $179 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000800000000001p-627)))`);


assert_return(
  () => invoke($179, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $180 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000800000000001p-627)))`);


assert_return(
  () => invoke($180, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $181 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000bfffffffffffp-627)))`);


assert_return(
  () => invoke($181, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $182 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000bfffffffffffp-627)))`);


assert_return(
  () => invoke($182, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $183 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000c00000000000p-627)))`);


assert_return(
  () => invoke($183, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $184 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000c00000000000p-627)))`);


assert_return(
  () => invoke($184, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $185 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000c00000000001p-627)))`);


assert_return(
  () => invoke($185, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $186 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000c00000000001p-627)))`);


assert_return(
  () => invoke($186, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $187 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000ffffffffffffp-627)))`);


assert_return(
  () => invoke($187, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $188 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000ffffffffffffp-627)))`);


assert_return(
  () => invoke($188, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $189 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001000000000000p-627)))`);


assert_return(
  () => invoke($189, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $190 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001000000000000p-627)))`);


assert_return(
  () => invoke($190, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $191 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001000000000001p-627)))`);


assert_return(
  () => invoke($191, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $192 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001000000000001p-627)))`);


assert_return(
  () => invoke($192, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $193 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.0000013fffffffffffp-627)))`);


assert_return(
  () => invoke($193, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $194 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.0000013fffffffffffp-627)))`);


assert_return(
  () => invoke($194, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $195 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001400000000001p-627)))`);


assert_return(
  () => invoke($195, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $196 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001400000000001p-627)))`);


assert_return(
  () => invoke($196, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $197 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313371995e+300)))`);


assert_return(
  () => invoke($197, `f`, []),
  [
    value("f64", 5357543035931337000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $198 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313371995e+300)))`);


assert_return(
  () => invoke($198, `f`, []),
  [
    value("f64", -5357543035931337000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $199 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313371996e+300)))`);


assert_return(
  () => invoke($199, `f`, []),
  [
    value("f64", 5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $200 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313371996e+300)))`);


assert_return(
  () => invoke($200, `f`, []),
  [
    value("f64", -5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $201 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313383891e+300)))`);


assert_return(
  () => invoke($201, `f`, []),
  [
    value("f64", 5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $202 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313383891e+300)))`);


assert_return(
  () => invoke($202, `f`, []),
  [
    value("f64", -5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $203 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313383892e+300)))`);


assert_return(
  () => invoke($203, `f`, []),
  [
    value("f64", 5357543035931339000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $204 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313383892e+300)))`);


assert_return(
  () => invoke($204, `f`, []),
  [
    value("f64", -5357543035931339000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $205 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000080000000000p+600 +0x1.000000000000080000000000p+600)))`);


assert_return(
  () => invoke($205, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $206 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000080000000000p+600 -0x1.000000000000080000000000p+600)))`);


assert_return(
  () => invoke($206, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $207 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000080000000001p+600 +0x1.000000000000080000000001p+600)))`);


assert_return(
  () => invoke($207, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $208 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000080000000001p+600 -0x1.000000000000080000000001p+600)))`);


assert_return(
  () => invoke($208, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $209 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.0000000000000fffffffffffp+600 +0x1.0000000000000fffffffffffp+600)))`);


assert_return(
  () => invoke($209, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $210 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.0000000000000fffffffffffp+600 -0x1.0000000000000fffffffffffp+600)))`);


assert_return(
  () => invoke($210, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $211 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000100000000000p+600 +0x1.000000000000100000000000p+600)))`);


assert_return(
  () => invoke($211, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $212 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000100000000000p+600 -0x1.000000000000100000000000p+600)))`);


assert_return(
  () => invoke($212, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $213 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000100000000001p+600 +0x1.000000000000100000000001p+600)))`);


assert_return(
  () => invoke($213, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $214 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000100000000001p+600 -0x1.000000000000100000000001p+600)))`);


assert_return(
  () => invoke($214, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $215 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.00000000000017ffffffffffp+600 +0x1.00000000000017ffffffffffp+600)))`);


assert_return(
  () => invoke($215, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $216 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.00000000000017ffffffffffp+600 -0x1.00000000000017ffffffffffp+600)))`);


assert_return(
  () => invoke($216, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $217 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000180000000000p+600 +0x1.000000000000180000000000p+600)))`);


assert_return(
  () => invoke($217, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $218 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000180000000000p+600 -0x1.000000000000180000000000p+600)))`);


assert_return(
  () => invoke($218, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $219 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000180000000001p+600 +0x1.000000000000180000000001p+600)))`);


assert_return(
  () => invoke($219, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $220 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000180000000001p+600 -0x1.000000000000180000000001p+600)))`);


assert_return(
  () => invoke($220, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $221 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.0000000000001fffffffffffp+600 +0x1.0000000000001fffffffffffp+600)))`);


assert_return(
  () => invoke($221, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $222 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.0000000000001fffffffffffp+600 -0x1.0000000000001fffffffffffp+600)))`);


assert_return(
  () => invoke($222, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $223 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000200000000000p+600 +0x1.000000000000200000000000p+600)))`);


assert_return(
  () => invoke($223, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $224 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000200000000000p+600 -0x1.000000000000200000000000p+600)))`);


assert_return(
  () => invoke($224, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $225 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000200000000001p+600 +0x1.000000000000200000000001p+600)))`);


assert_return(
  () => invoke($225, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $226 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000200000000001p+600 -0x1.000000000000200000000001p+600)))`);


assert_return(
  () => invoke($226, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $227 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.00000000000027ffffffffffp+600 +0x1.00000000000027ffffffffffp+600)))`);


assert_return(
  () => invoke($227, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $228 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.00000000000027ffffffffffp+600 -0x1.00000000000027ffffffffffp+600)))`);


assert_return(
  () => invoke($228, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $229 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000280000000000p+600 +0x1.000000000000280000000000p+600)))`);


assert_return(
  () => invoke($229, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $230 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000280000000000p+600 -0x1.000000000000280000000000p+600)))`);


assert_return(
  () => invoke($230, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $231 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000280000000001p+600 +0x1.000000000000280000000001p+600)))`);


assert_return(
  () => invoke($231, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $232 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000280000000001p+600 -0x1.000000000000280000000001p+600)))`);


assert_return(
  () => invoke($232, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $233 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000100000000000 +0x2000000000000100000000000)))`);


assert_return(
  () => invoke($233, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528680000000000000),
      value("f64", 158456325028528680000000000000),
    ),
  ],
);


let $234 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000100000000000 -0x2000000000000100000000000)))`);


assert_return(
  () => invoke($234, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528680000000000000),
      value("f64", -158456325028528680000000000000),
    ),
  ],
);


let $235 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000100000000001 +0x2000000000000100000000001)))`);


assert_return(
  () => invoke($235, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528700000000000000),
      value("f64", 158456325028528700000000000000),
    ),
  ],
);


let $236 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000100000000001 -0x2000000000000100000000001)))`);


assert_return(
  () => invoke($236, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528700000000000000),
      value("f64", -158456325028528700000000000000),
    ),
  ],
);


let $237 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x20000000000001fffffffffff +0x20000000000001fffffffffff)))`);


assert_return(
  () => invoke($237, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528700000000000000),
      value("f64", 158456325028528700000000000000),
    ),
  ],
);


let $238 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x20000000000001fffffffffff -0x20000000000001fffffffffff)))`);


assert_return(
  () => invoke($238, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528700000000000000),
      value("f64", -158456325028528700000000000000),
    ),
  ],
);


let $239 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000200000000000 +0x2000000000000200000000000)))`);


assert_return(
  () => invoke($239, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528700000000000000),
      value("f64", 158456325028528700000000000000),
    ),
  ],
);


let $240 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000200000000000 -0x2000000000000200000000000)))`);


assert_return(
  () => invoke($240, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528700000000000000),
      value("f64", -158456325028528700000000000000),
    ),
  ],
);


let $241 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000200000000001 +0x2000000000000200000000001)))`);


assert_return(
  () => invoke($241, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528700000000000000),
      value("f64", 158456325028528700000000000000),
    ),
  ],
);


let $242 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000200000000001 -0x2000000000000200000000001)))`);


assert_return(
  () => invoke($242, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528700000000000000),
      value("f64", -158456325028528700000000000000),
    ),
  ],
);


let $243 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x20000000000002fffffffffff +0x20000000000002fffffffffff)))`);


assert_return(
  () => invoke($243, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528700000000000000),
      value("f64", 158456325028528700000000000000),
    ),
  ],
);


let $244 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x20000000000002fffffffffff -0x20000000000002fffffffffff)))`);


assert_return(
  () => invoke($244, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528700000000000000),
      value("f64", -158456325028528700000000000000),
    ),
  ],
);


let $245 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000300000000000 +0x2000000000000300000000000)))`);


assert_return(
  () => invoke($245, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $246 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000300000000000 -0x2000000000000300000000000)))`);


assert_return(
  () => invoke($246, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $247 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000300000000001 +0x2000000000000300000000001)))`);


assert_return(
  () => invoke($247, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $248 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000300000000001 -0x2000000000000300000000001)))`);


assert_return(
  () => invoke($248, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $249 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x20000000000003fffffffffff +0x20000000000003fffffffffff)))`);


assert_return(
  () => invoke($249, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $250 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x20000000000003fffffffffff -0x20000000000003fffffffffff)))`);


assert_return(
  () => invoke($250, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $251 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000400000000000 +0x2000000000000400000000000)))`);


assert_return(
  () => invoke($251, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $252 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000400000000000 -0x2000000000000400000000000)))`);


assert_return(
  () => invoke($252, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $253 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000400000000001 +0x2000000000000400000000001)))`);


assert_return(
  () => invoke($253, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $254 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000400000000001 -0x2000000000000400000000001)))`);


assert_return(
  () => invoke($254, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $255 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x20000000000004fffffffffff +0x20000000000004fffffffffff)))`);


assert_return(
  () => invoke($255, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $256 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x20000000000004fffffffffff -0x20000000000004fffffffffff)))`);


assert_return(
  () => invoke($256, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $257 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000500000000000 +0x2000000000000500000000000)))`);


assert_return(
  () => invoke($257, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528750000000000000),
      value("f64", 158456325028528750000000000000),
    ),
  ],
);


let $258 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000500000000000 -0x2000000000000500000000000)))`);


assert_return(
  () => invoke($258, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528750000000000000),
      value("f64", -158456325028528750000000000000),
    ),
  ],
);


let $259 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x2000000000000500000000001 +0x2000000000000500000000001)))`);


assert_return(
  () => invoke($259, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 158456325028528780000000000000),
      value("f64", 158456325028528780000000000000),
    ),
  ],
);


let $260 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x2000000000000500000000001 -0x2000000000000500000000001)))`);


assert_return(
  () => invoke($260, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -158456325028528780000000000000),
      value("f64", -158456325028528780000000000000),
    ),
  ],
);


let $261 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +1152921504606847104 +1152921504606847104)))`);


assert_return(
  () => invoke($261, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 1152921504606847000),
      value("f64", 1152921504606847000),
    ),
  ],
);


let $262 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -1152921504606847104 -1152921504606847104)))`);


assert_return(
  () => invoke($262, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -1152921504606847000),
      value("f64", -1152921504606847000),
    ),
  ],
);


let $263 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +1152921504606847105 +1152921504606847105)))`);


assert_return(
  () => invoke($263, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 1152921504606847200),
      value("f64", 1152921504606847200),
    ),
  ],
);


let $264 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -1152921504606847105 -1152921504606847105)))`);


assert_return(
  () => invoke($264, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -1152921504606847200),
      value("f64", -1152921504606847200),
    ),
  ],
);


let $265 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +1152921504606847359 +1152921504606847359)))`);


assert_return(
  () => invoke($265, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 1152921504606847200),
      value("f64", 1152921504606847200),
    ),
  ],
);


let $266 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -1152921504606847359 -1152921504606847359)))`);


assert_return(
  () => invoke($266, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -1152921504606847200),
      value("f64", -1152921504606847200),
    ),
  ],
);


let $267 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +1152921504606847360 +1152921504606847360)))`);


assert_return(
  () => invoke($267, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 1152921504606847500),
      value("f64", 1152921504606847500),
    ),
  ],
);


let $268 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -1152921504606847360 -1152921504606847360)))`);


assert_return(
  () => invoke($268, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -1152921504606847500),
      value("f64", -1152921504606847500),
    ),
  ],
);


let $269 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000080000000000p-1022 +0x0.000000000000080000000000p-1022)))`);


assert_return(() => invoke($269, `f`, []), [new F64x2Pattern(value("f64", 0), value("f64", 0))]);


let $270 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000080000000000p-1022 -0x0.000000000000080000000000p-1022)))`);


assert_return(() => invoke($270, `f`, []), [new F64x2Pattern(value("f64", -0), value("f64", -0))]);


let $271 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000080000000001p-1022 +0x0.000000000000080000000001p-1022)))`);


assert_return(
  () => invoke($271, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $272 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000080000000001p-1022 -0x0.000000000000080000000001p-1022)))`);


assert_return(
  () => invoke($272, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $273 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.0000000000000fffffffffffp-1022 +0x0.0000000000000fffffffffffp-1022)))`);


assert_return(
  () => invoke($273, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $274 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.0000000000000fffffffffffp-1022 -0x0.0000000000000fffffffffffp-1022)))`);


assert_return(
  () => invoke($274, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $275 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000100000000000p-1022 +0x0.000000000000100000000000p-1022)))`);


assert_return(
  () => invoke($275, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $276 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000100000000000p-1022 -0x0.000000000000100000000000p-1022)))`);


assert_return(
  () => invoke($276, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $277 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000100000000001p-1022 +0x0.000000000000100000000001p-1022)))`);


assert_return(
  () => invoke($277, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $278 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000100000000001p-1022 -0x0.000000000000100000000001p-1022)))`);


assert_return(
  () => invoke($278, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $279 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.00000000000017ffffffffffp-1022 +0x0.00000000000017ffffffffffp-1022)))`);


assert_return(
  () => invoke($279, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $280 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.00000000000017ffffffffffp-1022 -0x0.00000000000017ffffffffffp-1022)))`);


assert_return(
  () => invoke($280, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


let $281 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000180000000000p-1022 +0x0.000000000000180000000000p-1022)))`);


assert_return(
  () => invoke($281, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $282 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000180000000000p-1022 -0x0.000000000000180000000000p-1022)))`);


assert_return(
  () => invoke($282, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $283 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000180000000001p-1022 +0x0.000000000000180000000001p-1022)))`);


assert_return(
  () => invoke($283, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $284 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000180000000001p-1022 -0x0.000000000000180000000001p-1022)))`);


assert_return(
  () => invoke($284, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $285 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.0000000000001fffffffffffp-1022 +0x0.0000000000001fffffffffffp-1022)))`);


assert_return(
  () => invoke($285, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $286 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.0000000000001fffffffffffp-1022 -0x0.0000000000001fffffffffffp-1022)))`);


assert_return(
  () => invoke($286, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $287 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000200000000000p-1022 +0x0.000000000000200000000000p-1022)))`);


assert_return(
  () => invoke($287, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $288 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000200000000000p-1022 -0x0.000000000000200000000000p-1022)))`);


assert_return(
  () => invoke($288, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $289 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000200000000001p-1022 +0x0.000000000000200000000001p-1022)))`);


assert_return(
  () => invoke($289, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $290 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000200000000001p-1022 -0x0.000000000000200000000001p-1022)))`);


assert_return(
  () => invoke($290, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $291 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.00000000000027ffffffffffp-1022 +0x0.00000000000027ffffffffffp-1022)))`);


assert_return(
  () => invoke($291, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $292 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.00000000000027ffffffffffp-1022 -0x0.00000000000027ffffffffffp-1022)))`);


assert_return(
  () => invoke($292, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $293 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x0.000000000000280000000000p-1022 +0x0.000000000000280000000000p-1022)))`);


assert_return(
  () => invoke($293, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $294 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x0.000000000000280000000000p-1022 -0x0.000000000000280000000000p-1022)))`);


assert_return(
  () => invoke($294, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
    ),
  ],
);


let $295 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.000000000000280000000001p-1022 +0x1.000000000000280000000001p-1022)))`);


assert_return(
  () => invoke($295, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
      value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
    ),
  ],
);


let $296 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.000000000000280000000001p-1022 -0x1.000000000000280000000001p-1022)))`);


assert_return(
  () => invoke($296, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
      value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
    ),
  ],
);


let $297 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.fffffffffffff4p1023 +0x1.fffffffffffff4p1023)))`);


assert_return(
  () => invoke($297, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $298 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.fffffffffffff4p1023 -0x1.fffffffffffff4p1023)))`);


assert_return(
  () => invoke($298, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $299 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 +0x1.fffffffffffff7ffffffp1023 +0x1.fffffffffffff7ffffffp1023)))`);


assert_return(
  () => invoke($299, `f`, []),
  [
    new F64x2Pattern(
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $300 = instantiate(`(module (func (export "f") (result v128) (v128.const f64x2 -0x1.fffffffffffff7ffffffp1023 -0x1.fffffffffffff7ffffffp1023)))`);


assert_return(
  () => invoke($300, `f`, []),
  [
    new F64x2Pattern(
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


let $301 = instantiate(`(module (memory 1)
  (func (export "as-br-retval") (result v128)
    (block (result v128) (br 0 (v128.const i32x4 0x03020100 0x07060504 0x0b0a0908 0x0f0e0d0c)))
  )
  (func (export "as-br_if-retval") (result v128)
    (block (result v128)
      (br_if 0 (v128.const i32x4 0 1 2 3) (i32.const 1))
    )
  )
  (func (export "as-return-retval") (result v128)
    (return (v128.const i32x4 0 1 2 3))
  )
  (func (export "as-if-then-retval") (result v128)
    (if (result v128) (i32.const 1)
      (then (v128.const i32x4 0 1 2 3)) (else (v128.const i32x4 3 2 1 0))
    )
  )
  (func (export "as-if-else-retval") (result v128)
    (if (result v128) (i32.const 0)
      (then (v128.const i32x4 0 1 2 3)) (else (v128.const i32x4 3 2 1 0))
    )
  )
  (func $$f (param v128 v128 v128) (result v128) (v128.const i32x4 0 1 2 3))
  (func (export "as-call-param") (result v128)
    (call $$f (v128.const i32x4 0 1 2 3) (v128.const i32x4 0 1 2 3) (v128.const i32x4 0 1 2 3))
  )
  (func (export "as-block-retval") (result v128)
    (block (result v128) (v128.const i32x4 0 1 2 3))
  )
  (func (export "as-loop-retval") (result v128)
    (loop (result v128) (v128.const i32x4 0 1 2 3))
  )
  (func (export "as-drop-operand")
    (drop (v128.const i32x4 0 1 2 3))
  )

  (func (export "as-br-retval2") (result v128)
    (block (result v128) (br 0 (v128.const i64x2 0x0302010007060504 0x0b0a09080f0e0d0c)))
  )
  (func (export "as-br_if-retval2") (result v128)
    (block (result v128)
      (br_if 0 (v128.const i64x2 0 1) (i32.const 1))
    )
  )
  (func (export "as-return-retval2") (result v128)
    (return (v128.const i64x2 0 1))
  )
  (func (export "as-if-then-retval2") (result v128)
    (if (result v128) (i32.const 1)
      (then (v128.const i64x2 0 1)) (else (v128.const i64x2 1 0))
    )
  )
  (func (export "as-if-else-retval2") (result v128)
    (if (result v128) (i32.const 0)
      (then (v128.const i64x2 0 1)) (else (v128.const i64x2 1 0))
    )
  )
  (func $$f2 (param v128 v128 v128) (result v128) (v128.const i64x2 0 1))
  (func (export "as-call-param2") (result v128)
    (call $$f2 (v128.const i64x2 0 1) (v128.const i64x2 0 1) (v128.const i64x2 0 1))
  )

  (type $$sig (func (param v128 v128 v128) (result v128)))
  (table funcref (elem $$f $$f2))
  (func (export "as-call_indirect-param") (result v128)
    (call_indirect (type $$sig)
      (v128.const i32x4 0 1 2 3) (v128.const i32x4 0 1 2 3) (v128.const i32x4 0 1 2 3) (i32.const 0)
    )
  )
  (func (export "as-call_indirect-param2") (result v128)
    (call_indirect (type $$sig)
      (v128.const i64x2 0 1) (v128.const i64x2 0 1) (v128.const i64x2 0 1) (i32.const 1)
    )
  )
  (func (export "as-block-retval2") (result v128)
    (block (result v128) (v128.const i64x2 0 1))
  )
  (func (export "as-loop-retval2") (result v128)
    (loop (result v128) (v128.const i64x2 0 1))
  )
  (func (export "as-drop-operand2")
    (drop (v128.const i64x2 0 1))
  )
)`);


assert_return(
  () => invoke($301, `as-br-retval`, []),
  [i32x4([0x3020100, 0x7060504, 0xb0a0908, 0xf0e0d0c])],
);


assert_return(() => invoke($301, `as-br_if-retval`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-return-retval`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-if-then-retval`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-if-else-retval`, []), [i32x4([0x3, 0x2, 0x1, 0x0])]);


assert_return(() => invoke($301, `as-call-param`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-call_indirect-param`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-block-retval`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-loop-retval`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


assert_return(() => invoke($301, `as-drop-operand`, []), []);


assert_return(() => invoke($301, `as-br-retval2`, []), [i64x2([0x302010007060504n, 0xb0a09080f0e0d0cn])]);


assert_return(() => invoke($301, `as-br_if-retval2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-return-retval2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-if-then-retval2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-if-else-retval2`, []), [i64x2([0x1n, 0x0n])]);


assert_return(() => invoke($301, `as-call-param2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-call_indirect-param2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-block-retval2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-loop-retval2`, []), [i64x2([0x0n, 0x1n])]);


assert_return(() => invoke($301, `as-drop-operand2`, []), []);


let $302 = instantiate(`(module (memory 1)
  (func (export "as-local.set/get-value_0_0") (param $$0 v128) (result v128)
    (local v128 v128 v128 v128)
    (local.set 0 (local.get $$0))
    (local.get 0)
  )
  (func (export "as-local.set/get-value_0_1") (param $$0 v128) (result v128)
    (local v128 v128 v128 v128)
    (local.set 0 (local.get $$0))
    (local.set 1 (local.get 0))
    (local.set 2 (local.get 1))
    (local.set 3 (local.get 2))
    (local.get 0)
  )
  (func (export "as-local.set/get-value_3_0") (param $$0 v128) (result v128)
    (local v128 v128 v128 v128)
    (local.set 0 (local.get $$0))
    (local.set 1 (local.get 0))
    (local.set 2 (local.get 1))
    (local.set 3 (local.get 2))
    (local.get 3)
  )
  (func (export "as-local.tee-value") (result v128)
    (local v128)
    (local.tee 0 (v128.const i32x4 0 1 2 3))
  )
)`);


assert_return(
  () => invoke($302, `as-local.set/get-value_0_0`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($302, `as-local.set/get-value_0_1`, [i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($302, `as-local.set/get-value_3_0`, [i32x4([0x2, 0x2, 0x2, 0x2])]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(() => invoke($302, `as-local.tee-value`, []), [i32x4([0x0, 0x1, 0x2, 0x3])]);


let $303 = instantiate(`(module (memory 1)
  (global $$g0 (mut v128) (v128.const i32x4 0 1 2 3))
  (global $$g1 (mut v128) (v128.const i32x4 4 5 6 7))
  (global $$g2 (mut v128) (v128.const i32x4 8 9 10 11))
  (global $$g3 (mut v128) (v128.const i32x4 12 13 14 15))
  (global $$g4 (mut v128) (v128.const i32x4 16 17 18 19))

  (func $$set_g0 (export "as-global.set_value_$$g0") (param $$0 v128)
    (global.set $$g0 (local.get $$0))
  )
  (func $$set_g1_g2 (export "as-global.set_value_$$g1_$$g2") (param $$0 v128) (param $$1 v128)
    (global.set $$g1 (local.get $$0))
    (global.set $$g2 (local.get $$1))
  )
  (func $$set_g0_g1_g2_g3 (export "as-global.set_value_$$g0_$$g1_$$g2_$$g3") (param $$0 v128) (param $$1 v128) (param $$2 v128) (param $$3 v128)
    (call $$set_g0 (local.get $$0))
    (call $$set_g1_g2 (local.get $$1) (local.get $$2))
    (global.set $$g3 (local.get $$3))
  )
  (func (export "global.get_g0") (result v128)
    (global.get $$g0)
  )
  (func (export "global.get_g1") (result v128)
    (global.get $$g1)
  )
  (func (export "global.get_g2") (result v128)
    (global.get $$g2)
  )
  (func (export "global.get_g3") (result v128)
    (global.get $$g3)
  )
)`);


assert_return(
  () => invoke($303, `as-global.set_value_$$g0_$$g1_$$g2_$$g3`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
    i32x4([0x3, 0x3, 0x3, 0x3]),
    i32x4([0x4, 0x4, 0x4, 0x4]),
  ]),
  [],
);


assert_return(() => invoke($303, `global.get_g0`, []), [i32x4([0x1, 0x1, 0x1, 0x1])]);


assert_return(() => invoke($303, `global.get_g1`, []), [i32x4([0x2, 0x2, 0x2, 0x2])]);


assert_return(() => invoke($303, `global.get_g2`, []), [i32x4([0x3, 0x3, 0x3, 0x3])]);


assert_return(() => invoke($303, `global.get_g3`, []), [i32x4([0x4, 0x4, 0x4, 0x4])]);


let $304 = instantiate(`(module
  (func (export "i32x4.test") (result v128) (return (v128.const i32x4 0x0bAdD00D 0x0bAdD00D 0x0bAdD00D 0x0bAdD00D)))
  (func (export "i32x4.smax") (result v128) (return (v128.const i32x4 0x7fffffff 0x7fffffff 0x7fffffff 0x7fffffff)))
  (func (export "i32x4.neg_smax") (result v128) (return (v128.const i32x4 -0x7fffffff -0x7fffffff -0x7fffffff -0x7fffffff)))
  (func (export "i32x4.inc_smin") (result v128) (return (i32x4.add (v128.const i32x4 -0x80000000 -0x80000000 -0x80000000 -0x80000000) (v128.const i32x4 1 1 1 1))))
  (func (export "i32x4.neg_zero") (result v128) (return (v128.const i32x4 -0x0 -0x0 -0x0 -0x0)))
  (func (export "i32x4.not_octal") (result v128) (return (v128.const i32x4 010 010 010 010)))
  (func (export "i32x4.plus_sign") (result v128) (return (v128.const i32x4 +42 +42 +42 +42)))

  (func (export "i32x4-dec-sep1") (result v128) (v128.const i32x4 1_000_000 1_000_000 1_000_000 1_000_000))
  (func (export "i32x4-dec-sep2") (result v128) (v128.const i32x4 1_0_0_0 1_0_0_0 1_0_0_0 1_0_0_0))
  (func (export "i32x4-hex-sep1") (result v128) (v128.const i32x4 0xa_0f_00_99 0xa_0f_00_99 0xa_0f_00_99 0xa_0f_00_99))
  (func (export "i32x4-hex-sep2") (result v128) (v128.const i32x4 0x1_a_A_0_f 0x1_a_A_0_f 0x1_a_A_0_f 0x1_a_A_0_f))

  (func (export "i64x2.test") (result v128) (return (v128.const i64x2 0x0bAdD00D0bAdD00D 0x0bAdD00D0bAdD00D)))
  (func (export "i64x2.smax") (result v128) (return (v128.const i64x2 0x7fffffffffffffff 0x7fffffffffffffff)))
  (func (export "i64x2.neg_smax") (result v128) (return (v128.const i64x2 -0x7fffffffffffffff -0x7fffffffffffffff)))
  (func (export "i64x2.inc_smin") (result v128) (return (i64x2.add (v128.const i64x2 -0x8000000000000000 -0x8000000000000000) (v128.const i64x2 1 1))))
  (func (export "i64x2.neg_zero") (result v128) (return (v128.const i64x2 -0x0 -0x0)))
  (func (export "i64x2.not_octal") (result v128) (return (v128.const i64x2 010010 010010)))
  (func (export "i64x2.plus_sign") (result v128) (return (v128.const i64x2 +42 +42)))

  (func (export "i64x2-dec-sep1") (result v128) (v128.const i64x2 10_000_000_000_000 10_000_000_000_000))
  (func (export "i64x2-dec-sep2") (result v128) (v128.const i64x2 1_0_0_0_0_0_0_0 1_0_0_0_0_0_0_0))
  (func (export "i64x2-hex-sep1") (result v128) (v128.const i64x2 0xa_0f_00_99_0a_0f_00_99 0xa_0f_00_99_0a_0f_00_99))
  (func (export "i64x2-hex-sep2") (result v128) (v128.const i64x2 0x1_a_A_0_f_1_a_A_0_f 0x1_a_A_0_f_1_a_A_0_f))
)`);


assert_return(() => invoke($304, `i32x4.test`, []), [i32x4([0xbadd00d, 0xbadd00d, 0xbadd00d, 0xbadd00d])]);


assert_return(
  () => invoke($304, `i32x4.smax`, []),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($304, `i32x4.neg_smax`, []),
  [i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001])],
);


assert_return(
  () => invoke($304, `i32x4.inc_smin`, []),
  [i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001])],
);


assert_return(() => invoke($304, `i32x4.neg_zero`, []), [i32x4([0x0, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($304, `i32x4.not_octal`, []), [i32x4([0xa, 0xa, 0xa, 0xa])]);


assert_return(() => invoke($304, `i32x4.plus_sign`, []), [i32x4([0x2a, 0x2a, 0x2a, 0x2a])]);


assert_return(() => invoke($304, `i32x4-dec-sep1`, []), [i32x4([0xf4240, 0xf4240, 0xf4240, 0xf4240])]);


assert_return(() => invoke($304, `i32x4-dec-sep2`, []), [i32x4([0x3e8, 0x3e8, 0x3e8, 0x3e8])]);


assert_return(
  () => invoke($304, `i32x4-hex-sep1`, []),
  [i32x4([0xa0f0099, 0xa0f0099, 0xa0f0099, 0xa0f0099])],
);


assert_return(() => invoke($304, `i32x4-hex-sep2`, []), [i32x4([0x1aa0f, 0x1aa0f, 0x1aa0f, 0x1aa0f])]);


assert_return(() => invoke($304, `i64x2.test`, []), [i64x2([0xbadd00d0badd00dn, 0xbadd00d0badd00dn])]);


assert_return(() => invoke($304, `i64x2.smax`, []), [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])]);


assert_return(
  () => invoke($304, `i64x2.neg_smax`, []),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($304, `i64x2.inc_smin`, []),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(() => invoke($304, `i64x2.neg_zero`, []), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($304, `i64x2.not_octal`, []), [i64x2([0x271an, 0x271an])]);


assert_return(() => invoke($304, `i64x2.plus_sign`, []), [i64x2([0x2an, 0x2an])]);


assert_return(() => invoke($304, `i64x2-dec-sep1`, []), [i64x2([0x9184e72a000n, 0x9184e72a000n])]);


assert_return(() => invoke($304, `i64x2-dec-sep2`, []), [i64x2([0x989680n, 0x989680n])]);


assert_return(() => invoke($304, `i64x2-hex-sep1`, []), [i64x2([0xa0f00990a0f0099n, 0xa0f00990a0f0099n])]);


assert_return(() => invoke($304, `i64x2-hex-sep2`, []), [i64x2([0x1aa0f1aa0fn, 0x1aa0f1aa0fn])]);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 _100 _100 _100 _100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 +_100 +_100 +_100 +_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 -_100 -_100 -_100 -_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 99_ 99_ 99_ 99_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 1__000 1__000 1__000 1__000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 _0x100 _0x100 _0x100 _0x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 0_x100 0_x100 0_x100 0_x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 0x_100 0x_100 0x_100 0x_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 0x00_ 0x00_ 0x00_ 0x00_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i32x4 0xff__ffff 0xff__ffff 0xff__ffff 0xff__ffff)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 _100_100 _100_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 +_100_100 +_100_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 -_100_100 -_100_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 99_99_ 99_99_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 1__000_000 1__000_000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 _0x100000 _0x100000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 0_x100000 0_x100000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 0x_100000 0x_100000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 0x00_ 0x00_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const i64x2 0xff__ffff_ffff_ffff 0xff__ffff_ffff_ffff)) `),
  `unknown operator`,
);


let $305 = instantiate(`(module
  (func (export "f32-dec-sep1") (result v128) (v128.const f32x4 1_000_000 1_000_000 1_000_000 1_000_000))
  (func (export "f32-dec-sep2") (result v128) (v128.const f32x4 1_0_0_0 1_0_0_0 1_0_0_0 1_0_0_0))
  (func (export "f32-dec-sep3") (result v128) (v128.const f32x4 100_3.141_592 100_3.141_592 100_3.141_592 100_3.141_592))
  (func (export "f32-dec-sep4") (result v128) (v128.const f32x4 99e+1_3 99e+1_3 99e+1_3 99e+1_3))
  (func (export "f32-dec-sep5") (result v128) (v128.const f32x4 122_000.11_3_54E0_2_3 122_000.11_3_54E0_2_3 122_000.11_3_54E0_2_3 122_000.11_3_54E0_2_3))
  (func (export "f32-hex-sep1") (result v128) (v128.const f32x4 0xa_0f_00_99 0xa_0f_00_99 0xa_0f_00_99 0xa_0f_00_99))
  (func (export "f32-hex-sep2") (result v128) (v128.const f32x4 0x1_a_A_0_f 0x1_a_A_0_f 0x1_a_A_0_f 0x1_a_A_0_f))
  (func (export "f32-hex-sep3") (result v128) (v128.const f32x4 0xa0_ff.f141_a59a 0xa0_ff.f141_a59a 0xa0_ff.f141_a59a 0xa0_ff.f141_a59a))
  (func (export "f32-hex-sep4") (result v128) (v128.const f32x4 0xf0P+1_3 0xf0P+1_3 0xf0P+1_3 0xf0P+1_3))
  (func (export "f32-hex-sep5") (result v128) (v128.const f32x4 0x2a_f00a.1f_3_eep2_3 0x2a_f00a.1f_3_eep2_3 0x2a_f00a.1f_3_eep2_3 0x2a_f00a.1f_3_eep2_3))
  (func (export "f64-dec-sep1") (result v128) (v128.const f64x2 1_000_000 1_000_000))
  (func (export "f64-dec-sep2") (result v128) (v128.const f64x2 1_0_0_0 1_0_0_0))
  (func (export "f64-dec-sep3") (result v128) (v128.const f64x2 100_3.141_592 100_3.141_592))
  (func (export "f64-dec-sep4") (result v128) (v128.const f64x2 99e+1_3 99e+1_3))
  (func (export "f64-dec-sep5") (result v128) (v128.const f64x2 122_000.11_3_54E0_2_3 122_000.11_3_54E0_2_3))
  (func (export "f64-hex-sep1") (result v128) (v128.const f64x2 0xa_0f_00_99 0xa_0f_00_99))
  (func (export "f64-hex-sep2") (result v128) (v128.const f64x2 0x1_a_A_0_f 0x1_a_A_0_f))
  (func (export "f64-hex-sep3") (result v128) (v128.const f64x2 0xa0_ff.f141_a59a 0xa0_ff.f141_a59a))
  (func (export "f64-hex-sep4") (result v128) (v128.const f64x2 0xf0P+1_3 0xf0P+1_3))
  (func (export "f64-hex-sep5") (result v128) (v128.const f64x2 0x2a_f00a.1f_3_eep2_3 0x2a_f00a.1f_3_eep2_3))
)`);


assert_return(
  () => invoke($305, `f32-dec-sep1`, []),
  [
    new F32x4Pattern(
      value("f32", 1000000),
      value("f32", 1000000),
      value("f32", 1000000),
      value("f32", 1000000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-dec-sep2`, []),
  [
    new F32x4Pattern(
      value("f32", 1000),
      value("f32", 1000),
      value("f32", 1000),
      value("f32", 1000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-dec-sep3`, []),
  [
    new F32x4Pattern(
      value("f32", 1003.1416),
      value("f32", 1003.1416),
      value("f32", 1003.1416),
      value("f32", 1003.1416),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-dec-sep4`, []),
  [
    new F32x4Pattern(
      value("f32", 990000000000000),
      value("f32", 990000000000000),
      value("f32", 990000000000000),
      value("f32", 990000000000000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-dec-sep5`, []),
  [
    new F32x4Pattern(
      value("f32", 12200012000000000000000000000),
      value("f32", 12200012000000000000000000000),
      value("f32", 12200012000000000000000000000),
      value("f32", 12200012000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-hex-sep1`, []),
  [
    new F32x4Pattern(
      value("f32", 168755360),
      value("f32", 168755360),
      value("f32", 168755360),
      value("f32", 168755360),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-hex-sep2`, []),
  [
    new F32x4Pattern(
      value("f32", 109071),
      value("f32", 109071),
      value("f32", 109071),
      value("f32", 109071),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-hex-sep3`, []),
  [
    new F32x4Pattern(
      value("f32", 41215.94),
      value("f32", 41215.94),
      value("f32", 41215.94),
      value("f32", 41215.94),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-hex-sep4`, []),
  [
    new F32x4Pattern(
      value("f32", 1966080),
      value("f32", 1966080),
      value("f32", 1966080),
      value("f32", 1966080),
    ),
  ],
);


assert_return(
  () => invoke($305, `f32-hex-sep5`, []),
  [
    new F32x4Pattern(
      value("f32", 23605224000000),
      value("f32", 23605224000000),
      value("f32", 23605224000000),
      value("f32", 23605224000000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f64-dec-sep1`, []),
  [new F64x2Pattern(value("f64", 1000000), value("f64", 1000000))],
);


assert_return(
  () => invoke($305, `f64-dec-sep2`, []),
  [new F64x2Pattern(value("f64", 1000), value("f64", 1000))],
);


assert_return(
  () => invoke($305, `f64-dec-sep3`, []),
  [new F64x2Pattern(value("f64", 1003.141592), value("f64", 1003.141592))],
);


assert_return(
  () => invoke($305, `f64-dec-sep4`, []),
  [
    new F64x2Pattern(value("f64", 990000000000000), value("f64", 990000000000000)),
  ],
);


assert_return(
  () => invoke($305, `f64-dec-sep5`, []),
  [
    new F64x2Pattern(
      value("f64", 12200011354000000000000000000),
      value("f64", 12200011354000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($305, `f64-hex-sep1`, []),
  [new F64x2Pattern(value("f64", 168755353), value("f64", 168755353))],
);


assert_return(
  () => invoke($305, `f64-hex-sep2`, []),
  [new F64x2Pattern(value("f64", 109071), value("f64", 109071))],
);


assert_return(
  () => invoke($305, `f64-hex-sep3`, []),
  [
    new F64x2Pattern(
      value("f64", 41215.94240794191),
      value("f64", 41215.94240794191),
    ),
  ],
);


assert_return(
  () => invoke($305, `f64-hex-sep4`, []),
  [new F64x2Pattern(value("f64", 1966080), value("f64", 1966080))],
);


assert_return(
  () => invoke($305, `f64-hex-sep5`, []),
  [new F64x2Pattern(value("f64", 23605225168752), value("f64", 23605225168752))],
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 _100 _100 _100 _100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 +_100 +_100 +_100 +_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 -_100 -_100 -_100 -_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 99_ 99_ 99_ 99_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1__000 1__000 1__000 1__000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 _1.0 _1.0 _1.0 _1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0_ 1.0_ 1.0_ 1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1_.0 1_.0 1_.0 1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1._0 1._0 1._0 1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 _1e1 _1e1 _1e1 _1e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1e1_ 1e1_ 1e1_ 1e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1_e1 1_e1 1_e1 1_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1e_1 1e_1 1e_1 1e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 _1.0e1 _1.0e1 _1.0e1 _1.0e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0e1_ 1.0e1_ 1.0e1_ 1.0e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0_e1 1.0_e1 1.0_e1 1.0_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0e_1 1.0e_1 1.0e_1 1.0e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0e+_1 1.0e+_1 1.0e+_1 1.0e+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 1.0e_+1 1.0e_+1 1.0e_+1 1.0e_+1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 _0x100 _0x100 _0x100 _0x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0_x100 0_x100 0_x100 0_x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x_100 0x_100 0x_100 0x_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x00_ 0x00_ 0x00_ 0x00_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0xff__ffff 0xff__ffff 0xff__ffff 0xff__ffff)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x_1.0 0x_1.0 0x_1.0 0x_1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0_ 0x1.0_ 0x1.0_ 0x1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1_.0 0x1_.0 0x1_.0 0x1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1._0 0x1._0 0x1._0 0x1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x_1p1 0x_1p1 0x_1p1 0x_1p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1p1_ 0x1p1_ 0x1p1_ 0x1p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1_p1 0x1_p1 0x1_p1 0x1_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1p_1 0x1p_1 0x1p_1 0x1p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x_1.0p1 0x_1.0p1 0x_1.0p1 0x_1.0p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0p1_ 0x1.0p1_ 0x1.0p1_ 0x1.0p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0_p1 0x1.0_p1 0x1.0_p1 0x1.0_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0p_1 0x1.0p_1 0x1.0p_1 0x1.0p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0p+_1 0x1.0p+_1 0x1.0p+_1 0x1.0p+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f32x4 0x1.0p_+1 0x1.0p_+1 0x1.0p_+1 0x1.0p_+1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 _100 _100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 +_100 +_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 -_100 -_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 99_ 99_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1__000 1__000)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 _1.0 _1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0_ 1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1_.0 1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1._0 1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 _1e1 _1e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1e1_ 1e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1_e1 1_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1e_1 1e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 _1.0e1 _1.0e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0e1_ 1.0e1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0_e1 1.0_e1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0e_1 1.0e_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0e+_1 1.0e+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 1.0e_+1 1.0e_+1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 _0x100 _0x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0_x100 0_x100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x_100 0x_100)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x00_ 0x00_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0xff__ffff 0xff__ffff)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x_1.0 0x_1.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0_ 0x1.0_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1_.0 0x1_.0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1._0 0x1._0)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x_1p1 0x_1p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1p1_ 0x1p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1_p1 0x1_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1p_1 0x1p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x_1.0p1 0x_1.0p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0p1_ 0x1.0p1_)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0_p1 0x1.0_p1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0p_1 0x1.0p_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0p+_1 0x1.0p+_1)) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(global v128 (v128.const f64x2 0x1.0p_+1 0x1.0p_+1)) `),
  `unknown operator`,
);


let $306 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\69\\38\\78\\31\\36\\00\\00"  ;; export name (parse_i8x16)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\00\\00\\00\\00"                             ;; data lane 0~3   (0,    0,    0,    0)
  "\\80\\80\\80\\80"                             ;; data lane 4~7   (-128, -128, -128, -128)
  "\\ff\\ff\\ff\\ff"                             ;; data lane 8~11  (0xff, 0xff, 0xff, 0xff)
  "\\ff\\ff\\ff\\ff"                             ;; data lane 12~15 (255,  255,  255,  255)
  "\\0b"                                      ;; end
)`);


assert_return(
  () => invoke($306, `parse_i8x16`, []),
  [
    i8x16([0x0, 0x0, 0x0, 0x0, 0x80, 0x80, 0x80, 0x80, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ],
);


let $307 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\69\\31\\36\\78\\38\\00\\00"  ;; export name (parse_i16x8)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\00\\00\\00\\00"                             ;; data lane 0, 1 (0,      0)
  "\\00\\80\\00\\80"                             ;; data lane 2, 3 (-32768, -32768)
  "\\ff\\ff\\ff\\ff"                             ;; data lane 4, 5 (65535,  65535)
  "\\ff\\ff\\ff\\ff"                             ;; data lane 6, 7 (0xffff, 0xffff)
  "\\0b"                                      ;; end
)`);


assert_return(
  () => invoke($307, `parse_i16x8`, []),
  [i16x8([0x0, 0x0, 0x8000, 0x8000, 0xffff, 0xffff, 0xffff, 0xffff])],
);


let $308 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\69\\33\\32\\78\\34\\00\\00"  ;; export name (parse_i32x4)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\d1\\ff\\ff\\ff"                             ;; data lane 0 (4294967249)
  "\\d1\\ff\\ff\\ff"                             ;; data lane 1 (4294967249)
  "\\d1\\ff\\ff\\ff"                             ;; data lane 2 (4294967249)
  "\\d1\\ff\\ff\\ff"                             ;; data lane 3 (4294967249)
  "\\0b"                                      ;; end
)`);


assert_return(
  () => invoke($308, `parse_i32x4`, []),
  [i32x4([0xffffffd1, 0xffffffd1, 0xffffffd1, 0xffffffd1])],
);


let $309 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\69\\36\\34\\78\\32\\00\\00"  ;; export name (parse_i64x2)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\7f"                 ;; data lane 0 (9223372036854775807)
  "\\ff\\ff\\ff\\ff\\ff\\ff\\ff\\7f"                 ;; data lane 1 (9223372036854775807)
  "\\0b"                                      ;; end
)`);


assert_return(() => invoke($309, `parse_i64x2`, []), [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])]);


let $310 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\66\\33\\32\\78\\34\\00\\00"  ;; export name (parse_f32x4)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\00\\00\\80\\4f"                             ;; data lane 0 (4294967249)
  "\\00\\00\\80\\4f"                             ;; data lane 1 (4294967249)
  "\\00\\00\\80\\4f"                             ;; data lane 2 (4294967249)
  "\\00\\00\\80\\4f"                             ;; data lane 3 (4294967249)
  "\\0b"                                      ;; end
)`);


assert_return(
  () => invoke($310, `parse_f32x4`, []),
  [
    new F32x4Pattern(
      value("f32", 4294967300),
      value("f32", 4294967300),
      value("f32", 4294967300),
      value("f32", 4294967300),
    ),
  ],
);


let $311 = instantiate(`(module binary
  "\\00asm" "\\01\\00\\00\\00"
  "\\01\\05\\01"                                ;; type   section
  "\\60\\00\\01\\7b"                             ;; type 0 (func)
  "\\03\\02\\01\\00"                             ;; func   section
  "\\07\\0f\\01\\0b"                             ;; export section
  "\\70\\61\\72\\73\\65\\5f\\66\\36\\34\\78\\32\\00\\00"  ;; export name (parse_f64x2)
  "\\0a\\16\\01"                                ;; code   section
  "\\14\\00\\fd\\0c"                             ;; func body
  "\\ff\\ff\\ff\\ff\\ff\\ff\\ef\\7f"                 ;; data lane 0 (0x1.fffffffffffffp+1023)
  "\\ff\\ff\\ff\\ff\\ff\\ff\\ef\\7f"                 ;; data lane 1 (0x1.fffffffffffffp+1023)
  "\\0b"                                      ;; end
)`);


assert_return(
  () => invoke($311, `parse_f64x2`, []),
  [
    new F64x2Pattern(
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);
