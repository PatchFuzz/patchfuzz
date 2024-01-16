




let $0 = instantiate(`(module (func (i32.const 0_123_456_789) drop))`);


let $1 = instantiate(`(module (func (i32.const 0x0_9acf_fBDF) drop))`);


assert_malformed(() => instantiate(`(func (i32.const) drop) `), `unexpected token`);


assert_malformed(() => instantiate(`(func (i32.const 0x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (i32.const 1x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (i32.const 0xg) drop) `), `unknown operator`);


let $2 = instantiate(`(module (func (i64.const 0_123_456_789) drop))`);


let $3 = instantiate(`(module (func (i64.const 0x0125_6789_ADEF_bcef) drop))`);


assert_malformed(() => instantiate(`(func (i64.const) drop) `), `unexpected token`);


assert_malformed(() => instantiate(`(func (i64.const 0x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (i64.const 1x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (i64.const 0xg) drop) `), `unknown operator`);


let $4 = instantiate(`(module (func (f32.const 0123456789) drop))`);


let $5 = instantiate(`(module (func (f32.const 0123456789e019) drop))`);


let $6 = instantiate(`(module (func (f32.const 0123456789e+019) drop))`);


let $7 = instantiate(`(module (func (f32.const 0123456789e-019) drop))`);


let $8 = instantiate(`(module (func (f32.const 0123456789.) drop))`);


let $9 = instantiate(`(module (func (f32.const 0123456789.e019) drop))`);


let $10 = instantiate(`(module (func (f32.const 0123456789.e+019) drop))`);


let $11 = instantiate(`(module (func (f32.const 0123456789.e-019) drop))`);


let $12 = instantiate(`(module (func (f32.const 0123456789.0123456789) drop))`);


let $13 = instantiate(`(module (func (f32.const 0123456789.0123456789e019) drop))`);


let $14 = instantiate(`(module (func (f32.const 0123456789.0123456789e+019) drop))`);


let $15 = instantiate(`(module (func (f32.const 0123456789.0123456789e-019) drop))`);


let $16 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF) drop))`);


let $17 = instantiate(`(module (func (f32.const 0x0123456789ABCDEFp019) drop))`);


let $18 = instantiate(`(module (func (f32.const 0x0123456789ABCDEFp+019) drop))`);


let $19 = instantiate(`(module (func (f32.const 0x0123456789ABCDEFp-019) drop))`);


let $20 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.) drop))`);


let $21 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.p019) drop))`);


let $22 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.p+019) drop))`);


let $23 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.p-019) drop))`);


let $24 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.019aF) drop))`);


let $25 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.019aFp019) drop))`);


let $26 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.019aFp+019) drop))`);


let $27 = instantiate(`(module (func (f32.const 0x0123456789ABCDEF.019aFp-019) drop))`);


assert_malformed(() => instantiate(`(func (f32.const) drop) `), `unexpected token`);


assert_malformed(() => instantiate(`(func (f32.const .0) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const .0e0) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0e) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0e+) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0.0e) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0.0e-) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 1x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0xg) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x.) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x0.g) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x0p) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x0p+) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x0p-) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f32.const 0x0.0p) drop) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(func (f32.const 0x0.0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (f32.const 0x0.0p-) drop) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(func (f32.const 0x0pA) drop) `), `unknown operator`);


let $28 = instantiate(`(module (func (f64.const 0123456789) drop))`);


let $29 = instantiate(`(module (func (f64.const 0123456789e019) drop))`);


let $30 = instantiate(`(module (func (f64.const 0123456789e+019) drop))`);


let $31 = instantiate(`(module (func (f64.const 0123456789e-019) drop))`);


let $32 = instantiate(`(module (func (f64.const 0123456789.) drop))`);


let $33 = instantiate(`(module (func (f64.const 0123456789.e019) drop))`);


let $34 = instantiate(`(module (func (f64.const 0123456789.e+019) drop))`);


let $35 = instantiate(`(module (func (f64.const 0123456789.e-019) drop))`);


let $36 = instantiate(`(module (func (f64.const 0123456789.0123456789) drop))`);


let $37 = instantiate(`(module (func (f64.const 0123456789.0123456789e019) drop))`);


let $38 = instantiate(`(module (func (f64.const 0123456789.0123456789e+019) drop))`);


let $39 = instantiate(`(module (func (f64.const 0123456789.0123456789e-019) drop))`);


let $40 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9) drop))`);


let $41 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9.) drop))`);


let $42 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9.0_1_2_3_4_5_6_7_8_9) drop))`);


let $43 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9e+0_1_9) drop))`);


let $44 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9.e+0_1_9) drop))`);


let $45 = instantiate(`(module (func (f64.const 0_1_2_3_4_5_6_7_8_9.0_1_2_3_4_5_6_7_8_9e0_1_9) drop))`);


let $46 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef) drop))`);


let $47 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdefp019) drop))`);


let $48 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdefp+019) drop))`);


let $49 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdefp-019) drop))`);


let $50 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.) drop))`);


let $51 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.p019) drop))`);


let $52 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.p+019) drop))`);


let $53 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.p-019) drop))`);


let $54 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdef) drop))`);


let $55 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp019) drop))`);


let $56 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp+019) drop))`);


let $57 = instantiate(`(module (func (f64.const 0x0123456789ABCDEFabcdef.0123456789ABCDEFabcdefp-019) drop))`);


let $58 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f) drop))`);


let $59 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f.) drop))`);


let $60 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f.0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f) drop))`);


let $61 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_fp0_1_9) drop))`);


let $62 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f.p0_1_9) drop))`);


let $63 = instantiate(`(module (func (f64.const 0x0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_f.0_1_2_3_4_5_6_7_8_9_A_B_C_D_E_F_a_b_c_d_e_fp0_1_9) drop))`);


assert_malformed(() => instantiate(`(func (f64.const) drop) `), `unexpected token`);


assert_malformed(() => instantiate(`(func (f64.const .0) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const .0e0) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0e) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0e+) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0.0e) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0.0e-) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 1x) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0xg) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x.) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x0.g) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x0p) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x0p+) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x0p-) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const 0x0.0p) drop) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(func (f64.const 0x0.0p+) drop) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(func (f64.const 0x0.0p-) drop) `),
  `unknown operator`,
);


assert_malformed(() => instantiate(`(func (f64.const 0x0pA) drop) `), `unknown operator`);


let $64 = instantiate(`(module (func (i32.const 0xffffffff) drop))`);


let $65 = instantiate(`(module (func (i32.const -0x80000000) drop))`);


assert_malformed(
  () => instantiate(`(func (i32.const 0x100000000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (i32.const -0x80000001) drop) `),
  `constant out of range`,
);


let $66 = instantiate(`(module (func (i32.const 4294967295) drop))`);


let $67 = instantiate(`(module (func (i32.const -2147483648) drop))`);


assert_malformed(
  () => instantiate(`(func (i32.const 4294967296) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (i32.const -2147483649) drop) `),
  `constant out of range`,
);


let $68 = instantiate(`(module (func (i64.const 0xffffffffffffffff) drop))`);


let $69 = instantiate(`(module (func (i64.const -0x8000000000000000) drop))`);


assert_malformed(
  () => instantiate(`(func (i64.const 0x10000000000000000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (i64.const -0x8000000000000001) drop) `),
  `constant out of range`,
);


let $70 = instantiate(`(module (func (i64.const 18446744073709551615) drop))`);


let $71 = instantiate(`(module (func (i64.const -9223372036854775808) drop))`);


assert_malformed(
  () => instantiate(`(func (i64.const 18446744073709551616) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (i64.const -9223372036854775809) drop) `),
  `constant out of range`,
);


let $72 = instantiate(`(module (func (f32.const 0x1p127) drop))`);


let $73 = instantiate(`(module (func (f32.const -0x1p127) drop))`);


let $74 = instantiate(`(module (func (f32.const 0x1.fffffep127) drop))`);


let $75 = instantiate(`(module (func (f32.const -0x1.fffffep127) drop))`);


let $76 = instantiate(`(module (func (f32.const 0x1.fffffe7p127) drop))`);


let $77 = instantiate(`(module (func (f32.const -0x1.fffffe7p127) drop))`);


let $78 = instantiate(`(module (func (f32.const 0x1.fffffefffffff8000000p127) drop))`);


let $79 = instantiate(`(module (func (f32.const -0x1.fffffefffffff8000000p127) drop))`);


let $80 = instantiate(`(module (func (f32.const 0x1.fffffefffffffffffffp127) drop))`);


let $81 = instantiate(`(module (func (f32.const -0x1.fffffefffffffffffffp127) drop))`);


assert_malformed(
  () => instantiate(`(func (f32.const 0x1p128) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const -0x1p128) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const 0x1.ffffffp127) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const -0x1.ffffffp127) drop) `),
  `constant out of range`,
);


let $82 = instantiate(`(module (func (f32.const 1e38) drop))`);


let $83 = instantiate(`(module (func (f32.const -1e38) drop))`);


assert_malformed(
  () => instantiate(`(func (f32.const 1e39) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const -1e39) drop) `),
  `constant out of range`,
);


let $84 = instantiate(`(module (func (f32.const 340282356779733623858607532500980858880) drop))`);


let $85 = instantiate(`(module (func (f32.const -340282356779733623858607532500980858880) drop))`);


assert_malformed(
  () => instantiate(`(func (f32.const 340282356779733661637539395458142568448) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const -340282356779733661637539395458142568448) drop) `),
  `constant out of range`,
);


let $86 = instantiate(`(module (func (f64.const 0x1p1023) drop))`);


let $87 = instantiate(`(module (func (f64.const -0x1p1023) drop))`);


let $88 = instantiate(`(module (func (f64.const 0x1.fffffffffffffp1023) drop))`);


let $89 = instantiate(`(module (func (f64.const -0x1.fffffffffffffp1023) drop))`);


let $90 = instantiate(`(module (func (f64.const 0x1.fffffffffffff7p1023) drop))`);


let $91 = instantiate(`(module (func (f64.const -0x1.fffffffffffff7p1023) drop))`);


let $92 = instantiate(`(module (func (f64.const 0x1.fffffffffffff7ffffffp1023) drop))`);


let $93 = instantiate(`(module (func (f64.const -0x1.fffffffffffff7ffffffp1023) drop))`);


assert_malformed(
  () => instantiate(`(func (f64.const 0x1p1024) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const -0x1p1024) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const 0x1.fffffffffffff8p1023) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const -0x1.fffffffffffff8p1023) drop) `),
  `constant out of range`,
);


let $94 = instantiate(`(module (func (f64.const 1e308) drop))`);


let $95 = instantiate(`(module (func (f64.const -1e308) drop))`);


assert_malformed(
  () => instantiate(`(func (f64.const 1e309) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const -1e309) drop) `),
  `constant out of range`,
);


let $96 = instantiate(`(module (func (f64.const 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) drop))`);


let $97 = instantiate(`(module (func (f64.const -179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368) drop))`);


assert_malformed(
  () => instantiate(`(func (f64.const 269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const -269653970229347356221791135597556535197105851288767494898376215204735891170042808140884337949150317257310688430271573696351481990334196274152701320055306275479074865864826923114368235135583993416113802762682700913456874855354834422248712838998185022412196739306217084753107265771378949821875606039276187287552) drop) `),
  `constant out of range`,
);


let $98 = instantiate(`(module (func (f32.const nan:0x1) drop))`);


let $99 = instantiate(`(module (func (f64.const nan:0x1) drop))`);


let $100 = instantiate(`(module (func (f32.const nan:0x7f_ffff) drop))`);


let $101 = instantiate(`(module (func (f64.const nan:0xf_ffff_ffff_ffff) drop))`);


assert_malformed(() => instantiate(`(func (f32.const nan:1) drop) `), `unknown operator`);


assert_malformed(() => instantiate(`(func (f64.const nan:1) drop) `), `unknown operator`);


assert_malformed(
  () => instantiate(`(func (f32.const nan:0x0) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const nan:0x0) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f32.const nan:0x80_0000) drop) `),
  `constant out of range`,
);


assert_malformed(
  () => instantiate(`(func (f64.const nan:0x10_0000_0000_0000) drop) `),
  `constant out of range`,
);


let $102 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000100000000000p-50)))`);


assert_return(() => invoke($102, `f`, []), [value("f32", 0.0000000000000008881784)]);


let $103 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000100000000000p-50)))`);


assert_return(() => invoke($103, `f`, []), [value("f32", -0.0000000000000008881784)]);


let $104 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000100000000001p-50)))`);


assert_return(() => invoke($104, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $105 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000100000000001p-50)))`);


assert_return(() => invoke($105, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $106 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000001fffffffffffp-50)))`);


assert_return(() => invoke($106, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $107 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000001fffffffffffp-50)))`);


assert_return(() => invoke($107, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $108 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000200000000000p-50)))`);


assert_return(() => invoke($108, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $109 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000200000000000p-50)))`);


assert_return(() => invoke($109, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $110 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000200000000001p-50)))`);


assert_return(() => invoke($110, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $111 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000200000000001p-50)))`);


assert_return(() => invoke($111, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $112 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000002fffffffffffp-50)))`);


assert_return(() => invoke($112, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $113 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000002fffffffffffp-50)))`);


assert_return(() => invoke($113, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $114 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000300000000000p-50)))`);


assert_return(() => invoke($114, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $115 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000300000000000p-50)))`);


assert_return(() => invoke($115, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $116 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000300000000001p-50)))`);


assert_return(() => invoke($116, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $117 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000300000000001p-50)))`);


assert_return(() => invoke($117, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $118 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000003fffffffffffp-50)))`);


assert_return(() => invoke($118, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $119 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000003fffffffffffp-50)))`);


assert_return(() => invoke($119, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $120 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000400000000000p-50)))`);


assert_return(() => invoke($120, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $121 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000400000000000p-50)))`);


assert_return(() => invoke($121, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $122 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000400000000001p-50)))`);


assert_return(() => invoke($122, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $123 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000400000000001p-50)))`);


assert_return(() => invoke($123, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $124 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000004fffffffffffp-50)))`);


assert_return(() => invoke($124, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $125 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000004fffffffffffp-50)))`);


assert_return(() => invoke($125, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $126 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000500000000000p-50)))`);


assert_return(() => invoke($126, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $127 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000500000000000p-50)))`);


assert_return(() => invoke($127, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $128 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000500000000001p-50)))`);


assert_return(() => invoke($128, `f`, []), [value("f32", 0.0000000000000008881787)]);


let $129 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000500000000001p-50)))`);


assert_return(() => invoke($129, `f`, []), [value("f32", -0.0000000000000008881787)]);


let $130 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.004000000p-64)))`);


assert_return(() => invoke($130, `f`, []), [value("f32", 0.0000000000000008881784)]);


let $131 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.004000000p-64)))`);


assert_return(() => invoke($131, `f`, []), [value("f32", -0.0000000000000008881784)]);


let $132 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.004000001p-64)))`);


assert_return(() => invoke($132, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $133 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.004000001p-64)))`);


assert_return(() => invoke($133, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $134 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.007ffffffp-64)))`);


assert_return(() => invoke($134, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $135 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.007ffffffp-64)))`);


assert_return(() => invoke($135, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $136 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.008000000p-64)))`);


assert_return(() => invoke($136, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $137 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.008000000p-64)))`);


assert_return(() => invoke($137, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $138 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.008000001p-64)))`);


assert_return(() => invoke($138, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $139 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.008000001p-64)))`);


assert_return(() => invoke($139, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $140 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.00bffffffp-64)))`);


assert_return(() => invoke($140, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $141 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.00bffffffp-64)))`);


assert_return(() => invoke($141, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $142 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.00c000000p-64)))`);


assert_return(() => invoke($142, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $143 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.00c000000p-64)))`);


assert_return(() => invoke($143, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $144 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.00c000001p-64)))`);


assert_return(() => invoke($144, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $145 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.00c000001p-64)))`);


assert_return(() => invoke($145, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $146 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.00fffffffp-64)))`);


assert_return(() => invoke($146, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $147 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.00fffffffp-64)))`);


assert_return(() => invoke($147, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $148 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.010000001p-64)))`);


assert_return(() => invoke($148, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $149 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.010000001p-64)))`);


assert_return(() => invoke($149, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $150 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.013ffffffp-64)))`);


assert_return(() => invoke($150, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $151 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.013ffffffp-64)))`);


assert_return(() => invoke($151, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $152 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000.014000001p-64)))`);


assert_return(() => invoke($152, `f`, []), [value("f32", 0.0000000000000008881787)]);


let $153 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000.014000001p-64)))`);


assert_return(() => invoke($153, `f`, []), [value("f32", -0.0000000000000008881787)]);


let $154 = instantiate(`(module (func (export "f") (result f32) (f32.const +8.8817847263968443573e-16)))`);


assert_return(() => invoke($154, `f`, []), [value("f32", 0.0000000000000008881784)]);


let $155 = instantiate(`(module (func (export "f") (result f32) (f32.const -8.8817847263968443573e-16)))`);


assert_return(() => invoke($155, `f`, []), [value("f32", -0.0000000000000008881784)]);


let $156 = instantiate(`(module (func (export "f") (result f32) (f32.const +8.8817847263968443574e-16)))`);


assert_return(() => invoke($156, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $157 = instantiate(`(module (func (export "f") (result f32) (f32.const -8.8817847263968443574e-16)))`);


assert_return(() => invoke($157, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $158 = instantiate(`(module (func (export "f") (result f32) (f32.const +8.8817857851880284252e-16)))`);


assert_return(() => invoke($158, `f`, []), [value("f32", 0.0000000000000008881785)]);


let $159 = instantiate(`(module (func (export "f") (result f32) (f32.const -8.8817857851880284252e-16)))`);


assert_return(() => invoke($159, `f`, []), [value("f32", -0.0000000000000008881785)]);


let $160 = instantiate(`(module (func (export "f") (result f32) (f32.const +8.8817857851880284253e-16)))`);


assert_return(() => invoke($160, `f`, []), [value("f32", 0.0000000000000008881786)]);


let $161 = instantiate(`(module (func (export "f") (result f32) (f32.const -8.8817857851880284253e-16)))`);


assert_return(() => invoke($161, `f`, []), [value("f32", -0.0000000000000008881786)]);


let $162 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000100000000000p+50)))`);


assert_return(() => invoke($162, `f`, []), [value("f32", 1125899900000000)]);


let $163 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000100000000000p+50)))`);


assert_return(() => invoke($163, `f`, []), [value("f32", -1125899900000000)]);


let $164 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000100000000001p+50)))`);


assert_return(() => invoke($164, `f`, []), [value("f32", 1125900000000000)]);


let $165 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000100000000001p+50)))`);


assert_return(() => invoke($165, `f`, []), [value("f32", -1125900000000000)]);


let $166 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000001fffffffffffp+50)))`);


assert_return(() => invoke($166, `f`, []), [value("f32", 1125900000000000)]);


let $167 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000001fffffffffffp+50)))`);


assert_return(() => invoke($167, `f`, []), [value("f32", -1125900000000000)]);


let $168 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000200000000000p+50)))`);


assert_return(() => invoke($168, `f`, []), [value("f32", 1125900000000000)]);


let $169 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000200000000000p+50)))`);


assert_return(() => invoke($169, `f`, []), [value("f32", -1125900000000000)]);


let $170 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000200000000001p+50)))`);


assert_return(() => invoke($170, `f`, []), [value("f32", 1125900000000000)]);


let $171 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000200000000001p+50)))`);


assert_return(() => invoke($171, `f`, []), [value("f32", -1125900000000000)]);


let $172 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000002fffffffffffp+50)))`);


assert_return(() => invoke($172, `f`, []), [value("f32", 1125900000000000)]);


let $173 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000002fffffffffffp+50)))`);


assert_return(() => invoke($173, `f`, []), [value("f32", -1125900000000000)]);


let $174 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000300000000000p+50)))`);


assert_return(() => invoke($174, `f`, []), [value("f32", 1125900200000000)]);


let $175 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000300000000000p+50)))`);


assert_return(() => invoke($175, `f`, []), [value("f32", -1125900200000000)]);


let $176 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000300000000001p+50)))`);


assert_return(() => invoke($176, `f`, []), [value("f32", 1125900200000000)]);


let $177 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000300000000001p+50)))`);


assert_return(() => invoke($177, `f`, []), [value("f32", -1125900200000000)]);


let $178 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000003fffffffffffp+50)))`);


assert_return(() => invoke($178, `f`, []), [value("f32", 1125900200000000)]);


let $179 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000003fffffffffffp+50)))`);


assert_return(() => invoke($179, `f`, []), [value("f32", -1125900200000000)]);


let $180 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000400000000000p+50)))`);


assert_return(() => invoke($180, `f`, []), [value("f32", 1125900200000000)]);


let $181 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000400000000000p+50)))`);


assert_return(() => invoke($181, `f`, []), [value("f32", -1125900200000000)]);


let $182 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000400000000001p+50)))`);


assert_return(() => invoke($182, `f`, []), [value("f32", 1125900200000000)]);


let $183 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000400000000001p+50)))`);


assert_return(() => invoke($183, `f`, []), [value("f32", -1125900200000000)]);


let $184 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.000004fffffffffffp+50)))`);


assert_return(() => invoke($184, `f`, []), [value("f32", 1125900200000000)]);


let $185 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.000004fffffffffffp+50)))`);


assert_return(() => invoke($185, `f`, []), [value("f32", -1125900200000000)]);


let $186 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000500000000000p+50)))`);


assert_return(() => invoke($186, `f`, []), [value("f32", 1125900200000000)]);


let $187 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000500000000000p+50)))`);


assert_return(() => invoke($187, `f`, []), [value("f32", -1125900200000000)]);


let $188 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.00000500000000001p+50)))`);


assert_return(() => invoke($188, `f`, []), [value("f32", 1125900300000000)]);


let $189 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.00000500000000001p+50)))`);


assert_return(() => invoke($189, `f`, []), [value("f32", -1125900300000000)]);


let $190 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000004000000)))`);


assert_return(() => invoke($190, `f`, []), [value("f32", 1125899900000000)]);


let $191 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000004000000)))`);


assert_return(() => invoke($191, `f`, []), [value("f32", -1125899900000000)]);


let $192 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000004000001)))`);


assert_return(() => invoke($192, `f`, []), [value("f32", 1125900000000000)]);


let $193 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000004000001)))`);


assert_return(() => invoke($193, `f`, []), [value("f32", -1125900000000000)]);


let $194 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000007ffffff)))`);


assert_return(() => invoke($194, `f`, []), [value("f32", 1125900000000000)]);


let $195 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000007ffffff)))`);


assert_return(() => invoke($195, `f`, []), [value("f32", -1125900000000000)]);


let $196 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000008000000)))`);


assert_return(() => invoke($196, `f`, []), [value("f32", 1125900000000000)]);


let $197 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000008000000)))`);


assert_return(() => invoke($197, `f`, []), [value("f32", -1125900000000000)]);


let $198 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x4000008000001)))`);


assert_return(() => invoke($198, `f`, []), [value("f32", 1125900000000000)]);


let $199 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x4000008000001)))`);


assert_return(() => invoke($199, `f`, []), [value("f32", -1125900000000000)]);


let $200 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x400000bffffff)))`);


assert_return(() => invoke($200, `f`, []), [value("f32", 1125900000000000)]);


let $201 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x400000bffffff)))`);


assert_return(() => invoke($201, `f`, []), [value("f32", -1125900000000000)]);


let $202 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x400000c000000)))`);


assert_return(() => invoke($202, `f`, []), [value("f32", 1125900200000000)]);


let $203 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x400000c000000)))`);


assert_return(() => invoke($203, `f`, []), [value("f32", -1125900200000000)]);


let $204 = instantiate(`(module (func (export "f") (result f32) (f32.const +1125899973951488)))`);


assert_return(() => invoke($204, `f`, []), [value("f32", 1125899900000000)]);


let $205 = instantiate(`(module (func (export "f") (result f32) (f32.const -1125899973951488)))`);


assert_return(() => invoke($205, `f`, []), [value("f32", -1125899900000000)]);


let $206 = instantiate(`(module (func (export "f") (result f32) (f32.const +1125899973951489)))`);


assert_return(() => invoke($206, `f`, []), [value("f32", 1125900000000000)]);


let $207 = instantiate(`(module (func (export "f") (result f32) (f32.const -1125899973951489)))`);


assert_return(() => invoke($207, `f`, []), [value("f32", -1125900000000000)]);


let $208 = instantiate(`(module (func (export "f") (result f32) (f32.const +1125900108169215)))`);


assert_return(() => invoke($208, `f`, []), [value("f32", 1125900000000000)]);


let $209 = instantiate(`(module (func (export "f") (result f32) (f32.const -1125900108169215)))`);


assert_return(() => invoke($209, `f`, []), [value("f32", -1125900000000000)]);


let $210 = instantiate(`(module (func (export "f") (result f32) (f32.const +1125900108169216)))`);


assert_return(() => invoke($210, `f`, []), [value("f32", 1125900200000000)]);


let $211 = instantiate(`(module (func (export "f") (result f32) (f32.const -1125900108169216)))`);


assert_return(() => invoke($211, `f`, []), [value("f32", -1125900200000000)]);


let $212 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000100000000000p-126)))`);


assert_return(() => invoke($212, `f`, []), [value("f32", 0)]);


let $213 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000100000000000p-126)))`);


assert_return(() => invoke($213, `f`, []), [value("f32", -0)]);


let $214 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000100000000001p-126)))`);


assert_return(
  () => invoke($214, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


let $215 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000100000000001p-126)))`);


assert_return(
  () => invoke($215, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


let $216 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.000001fffffffffffp-126)))`);


assert_return(
  () => invoke($216, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


let $217 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.000001fffffffffffp-126)))`);


assert_return(
  () => invoke($217, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


let $218 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000200000000000p-126)))`);


assert_return(
  () => invoke($218, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


let $219 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000200000000000p-126)))`);


assert_return(
  () => invoke($219, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


let $220 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000200000000001p-126)))`);


assert_return(
  () => invoke($220, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


let $221 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000200000000001p-126)))`);


assert_return(
  () => invoke($221, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


let $222 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.000002fffffffffffp-126)))`);


assert_return(
  () => invoke($222, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


let $223 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.000002fffffffffffp-126)))`);


assert_return(
  () => invoke($223, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


let $224 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000300000000000p-126)))`);


assert_return(
  () => invoke($224, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $225 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000300000000000p-126)))`);


assert_return(
  () => invoke($225, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $226 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000300000000001p-126)))`);


assert_return(
  () => invoke($226, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $227 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000300000000001p-126)))`);


assert_return(
  () => invoke($227, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $228 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.000003fffffffffffp-126)))`);


assert_return(
  () => invoke($228, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $229 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.000003fffffffffffp-126)))`);


assert_return(
  () => invoke($229, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $230 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000400000000000p-126)))`);


assert_return(
  () => invoke($230, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $231 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000400000000000p-126)))`);


assert_return(
  () => invoke($231, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $232 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000400000000001p-126)))`);


assert_return(
  () => invoke($232, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $233 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000400000000001p-126)))`);


assert_return(
  () => invoke($233, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $234 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.000004fffffffffffp-126)))`);


assert_return(
  () => invoke($234, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $235 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.000004fffffffffffp-126)))`);


assert_return(
  () => invoke($235, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $236 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000500000000000p-126)))`);


assert_return(
  () => invoke($236, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


let $237 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000500000000000p-126)))`);


assert_return(
  () => invoke($237, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


let $238 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x0.00000500000000001p-126)))`);


assert_return(
  () => invoke($238, `f`, []),
  [value("f32", 0.000000000000000000000000000000000000000000004)],
);


let $239 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x0.00000500000000001p-126)))`);


assert_return(
  () => invoke($239, `f`, []),
  [value("f32", -0.000000000000000000000000000000000000000000004)],
);


let $240 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.fffffe8p127)))`);


assert_return(() => invoke($240, `f`, []), [value("f32", 340282350000000000000000000000000000000)]);


let $241 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.fffffe8p127)))`);


assert_return(() => invoke($241, `f`, []), [value("f32", -340282350000000000000000000000000000000)]);


let $242 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.fffffefffffff8p127)))`);


assert_return(() => invoke($242, `f`, []), [value("f32", 340282350000000000000000000000000000000)]);


let $243 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.fffffefffffff8p127)))`);


assert_return(() => invoke($243, `f`, []), [value("f32", -340282350000000000000000000000000000000)]);


let $244 = instantiate(`(module (func (export "f") (result f32) (f32.const +0x1.fffffefffffffffffp127)))`);


assert_return(() => invoke($244, `f`, []), [value("f32", 340282350000000000000000000000000000000)]);


let $245 = instantiate(`(module (func (export "f") (result f32) (f32.const -0x1.fffffefffffffffffp127)))`);


assert_return(() => invoke($245, `f`, []), [value("f32", -340282350000000000000000000000000000000)]);


let $246 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000000p-600)))`);


assert_return(
  () => invoke($246, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $247 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000000p-600)))`);


assert_return(
  () => invoke($247, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $248 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000001p-600)))`);


assert_return(
  () => invoke($248, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $249 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000001p-600)))`);


assert_return(
  () => invoke($249, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $250 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000000fffffffffffp-600)))`);


assert_return(
  () => invoke($250, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $251 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000000fffffffffffp-600)))`);


assert_return(
  () => invoke($251, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $252 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000000p-600)))`);


assert_return(
  () => invoke($252, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $253 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000000p-600)))`);


assert_return(
  () => invoke($253, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $254 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000001p-600)))`);


assert_return(
  () => invoke($254, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $255 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000001p-600)))`);


assert_return(
  () => invoke($255, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $256 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000017ffffffffffp-600)))`);


assert_return(
  () => invoke($256, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $257 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000017ffffffffffp-600)))`);


assert_return(
  () => invoke($257, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $258 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000000p-600)))`);


assert_return(
  () => invoke($258, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $259 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000000p-600)))`);


assert_return(
  () => invoke($259, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $260 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000001p-600)))`);


assert_return(
  () => invoke($260, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $261 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000001p-600)))`);


assert_return(
  () => invoke($261, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $262 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000001fffffffffffp-600)))`);


assert_return(
  () => invoke($262, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $263 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000001fffffffffffp-600)))`);


assert_return(
  () => invoke($263, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $264 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000000p-600)))`);


assert_return(
  () => invoke($264, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $265 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000000p-600)))`);


assert_return(
  () => invoke($265, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $266 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000001p-600)))`);


assert_return(
  () => invoke($266, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $267 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000001p-600)))`);


assert_return(
  () => invoke($267, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $268 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000027ffffffffffp-600)))`);


assert_return(
  () => invoke($268, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $269 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000027ffffffffffp-600)))`);


assert_return(
  () => invoke($269, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $270 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000280000000001p-600)))`);


assert_return(
  () => invoke($270, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $271 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000280000000001p-600)))`);


assert_return(
  () => invoke($271, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $272 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000400000000000p-627)))`);


assert_return(
  () => invoke($272, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $273 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000400000000000p-627)))`);


assert_return(
  () => invoke($273, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102884),
  ],
);


let $274 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000400000000001p-627)))`);


assert_return(
  () => invoke($274, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $275 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000400000000001p-627)))`);


assert_return(
  () => invoke($275, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $276 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.0000007fffffffffffp-627)))`);


assert_return(
  () => invoke($276, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $277 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.0000007fffffffffffp-627)))`);


assert_return(
  () => invoke($277, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $278 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000800000000000p-627)))`);


assert_return(
  () => invoke($278, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $279 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000800000000000p-627)))`);


assert_return(
  () => invoke($279, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $280 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000800000000001p-627)))`);


assert_return(
  () => invoke($280, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $281 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000800000000001p-627)))`);


assert_return(
  () => invoke($281, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $282 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000bfffffffffffp-627)))`);


assert_return(
  () => invoke($282, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $283 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000bfffffffffffp-627)))`);


assert_return(
  () => invoke($283, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028847),
  ],
);


let $284 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000c00000000000p-627)))`);


assert_return(
  () => invoke($284, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $285 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000c00000000000p-627)))`);


assert_return(
  () => invoke($285, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $286 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000c00000000001p-627)))`);


assert_return(
  () => invoke($286, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $287 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000c00000000001p-627)))`);


assert_return(
  () => invoke($287, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $288 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000000ffffffffffffp-627)))`);


assert_return(
  () => invoke($288, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $289 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000000ffffffffffffp-627)))`);


assert_return(
  () => invoke($289, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $290 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001000000000000p-627)))`);


assert_return(
  () => invoke($290, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $291 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001000000000000p-627)))`);


assert_return(
  () => invoke($291, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $292 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001000000000001p-627)))`);


assert_return(
  () => invoke($292, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $293 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001000000000001p-627)))`);


assert_return(
  () => invoke($293, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $294 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.0000013fffffffffffp-627)))`);


assert_return(
  () => invoke($294, `f`, []),
  [
    value("f64", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $295 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.0000013fffffffffffp-627)))`);


assert_return(
  () => invoke($295, `f`, []),
  [
    value("f64", -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002409919865102885),
  ],
);


let $296 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x8000000.000001400000000001p-627)))`);


assert_return(
  () => invoke($296, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $297 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x8000000.000001400000000001p-627)))`);


assert_return(
  () => invoke($297, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024099198651028857),
  ],
);


let $298 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313371995e+300)))`);


assert_return(
  () => invoke($298, `f`, []),
  [
    value("f64", 5357543035931337000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $299 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313371995e+300)))`);


assert_return(
  () => invoke($299, `f`, []),
  [
    value("f64", -5357543035931337000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $300 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313371996e+300)))`);


assert_return(
  () => invoke($300, `f`, []),
  [
    value("f64", 5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $301 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313371996e+300)))`);


assert_return(
  () => invoke($301, `f`, []),
  [
    value("f64", -5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $302 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313383891e+300)))`);


assert_return(
  () => invoke($302, `f`, []),
  [
    value("f64", 5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $303 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313383891e+300)))`);


assert_return(
  () => invoke($303, `f`, []),
  [
    value("f64", -5357543035931338000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $304 = instantiate(`(module (func (export "f") (result f64) (f64.const +5.3575430359313383892e+300)))`);


assert_return(
  () => invoke($304, `f`, []),
  [
    value("f64", 5357543035931339000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $305 = instantiate(`(module (func (export "f") (result f64) (f64.const -5.3575430359313383892e+300)))`);


assert_return(
  () => invoke($305, `f`, []),
  [
    value("f64", -5357543035931339000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $306 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000000p+600)))`);


assert_return(
  () => invoke($306, `f`, []),
  [
    value("f64", 4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $307 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000000p+600)))`);


assert_return(
  () => invoke($307, `f`, []),
  [
    value("f64", -4149515568880993000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $308 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000080000000001p+600)))`);


assert_return(
  () => invoke($308, `f`, []),
  [
    value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $309 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000080000000001p+600)))`);


assert_return(
  () => invoke($309, `f`, []),
  [
    value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $310 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000000fffffffffffp+600)))`);


assert_return(
  () => invoke($310, `f`, []),
  [
    value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $311 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000000fffffffffffp+600)))`);


assert_return(
  () => invoke($311, `f`, []),
  [
    value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $312 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000000p+600)))`);


assert_return(
  () => invoke($312, `f`, []),
  [
    value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $313 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000000p+600)))`);


assert_return(
  () => invoke($313, `f`, []),
  [
    value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $314 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000100000000001p+600)))`);


assert_return(
  () => invoke($314, `f`, []),
  [
    value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $315 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000100000000001p+600)))`);


assert_return(
  () => invoke($315, `f`, []),
  [
    value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $316 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000017ffffffffffp+600)))`);


assert_return(
  () => invoke($316, `f`, []),
  [
    value("f64", 4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $317 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000017ffffffffffp+600)))`);


assert_return(
  () => invoke($317, `f`, []),
  [
    value("f64", -4149515568880994000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $318 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000000p+600)))`);


assert_return(
  () => invoke($318, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $319 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000000p+600)))`);


assert_return(
  () => invoke($319, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $320 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000180000000001p+600)))`);


assert_return(
  () => invoke($320, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $321 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000180000000001p+600)))`);


assert_return(
  () => invoke($321, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $322 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.0000000000001fffffffffffp+600)))`);


assert_return(
  () => invoke($322, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $323 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.0000000000001fffffffffffp+600)))`);


assert_return(
  () => invoke($323, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $324 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000000p+600)))`);


assert_return(
  () => invoke($324, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $325 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000000p+600)))`);


assert_return(
  () => invoke($325, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $326 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000200000000001p+600)))`);


assert_return(
  () => invoke($326, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $327 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000200000000001p+600)))`);


assert_return(
  () => invoke($327, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $328 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.00000000000027ffffffffffp+600)))`);


assert_return(
  () => invoke($328, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $329 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.00000000000027ffffffffffp+600)))`);


assert_return(
  () => invoke($329, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $330 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000280000000000p+600)))`);


assert_return(
  () => invoke($330, `f`, []),
  [
    value("f64", 4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $331 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000280000000000p+600)))`);


assert_return(
  () => invoke($331, `f`, []),
  [
    value("f64", -4149515568880995000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $332 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000280000000001p+600)))`);


assert_return(
  () => invoke($332, `f`, []),
  [
    value("f64", 4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $333 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000280000000001p+600)))`);


assert_return(
  () => invoke($333, `f`, []),
  [
    value("f64", -4149515568880996000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $334 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000100000000000)))`);


assert_return(() => invoke($334, `f`, []), [value("f64", 158456325028528680000000000000)]);


let $335 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000100000000000)))`);


assert_return(() => invoke($335, `f`, []), [value("f64", -158456325028528680000000000000)]);


let $336 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000100000000001)))`);


assert_return(() => invoke($336, `f`, []), [value("f64", 158456325028528700000000000000)]);


let $337 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000100000000001)))`);


assert_return(() => invoke($337, `f`, []), [value("f64", -158456325028528700000000000000)]);


let $338 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x20000000000001fffffffffff)))`);


assert_return(() => invoke($338, `f`, []), [value("f64", 158456325028528700000000000000)]);


let $339 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x20000000000001fffffffffff)))`);


assert_return(() => invoke($339, `f`, []), [value("f64", -158456325028528700000000000000)]);


let $340 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000200000000000)))`);


assert_return(() => invoke($340, `f`, []), [value("f64", 158456325028528700000000000000)]);


let $341 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000200000000000)))`);


assert_return(() => invoke($341, `f`, []), [value("f64", -158456325028528700000000000000)]);


let $342 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000200000000001)))`);


assert_return(() => invoke($342, `f`, []), [value("f64", 158456325028528700000000000000)]);


let $343 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000200000000001)))`);


assert_return(() => invoke($343, `f`, []), [value("f64", -158456325028528700000000000000)]);


let $344 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x20000000000002fffffffffff)))`);


assert_return(() => invoke($344, `f`, []), [value("f64", 158456325028528700000000000000)]);


let $345 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x20000000000002fffffffffff)))`);


assert_return(() => invoke($345, `f`, []), [value("f64", -158456325028528700000000000000)]);


let $346 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000300000000000)))`);


assert_return(() => invoke($346, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $347 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000300000000000)))`);


assert_return(() => invoke($347, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $348 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000300000000001)))`);


assert_return(() => invoke($348, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $349 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000300000000001)))`);


assert_return(() => invoke($349, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $350 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x20000000000003fffffffffff)))`);


assert_return(() => invoke($350, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $351 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x20000000000003fffffffffff)))`);


assert_return(() => invoke($351, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $352 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000400000000000)))`);


assert_return(() => invoke($352, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $353 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000400000000000)))`);


assert_return(() => invoke($353, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $354 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000400000000001)))`);


assert_return(() => invoke($354, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $355 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000400000000001)))`);


assert_return(() => invoke($355, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $356 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x20000000000004fffffffffff)))`);


assert_return(() => invoke($356, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $357 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x20000000000004fffffffffff)))`);


assert_return(() => invoke($357, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $358 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000500000000000)))`);


assert_return(() => invoke($358, `f`, []), [value("f64", 158456325028528750000000000000)]);


let $359 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000500000000000)))`);


assert_return(() => invoke($359, `f`, []), [value("f64", -158456325028528750000000000000)]);


let $360 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x2000000000000500000000001)))`);


assert_return(() => invoke($360, `f`, []), [value("f64", 158456325028528780000000000000)]);


let $361 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x2000000000000500000000001)))`);


assert_return(() => invoke($361, `f`, []), [value("f64", -158456325028528780000000000000)]);


let $362 = instantiate(`(module (func (export "f") (result f64) (f64.const +1152921504606847104)))`);


assert_return(() => invoke($362, `f`, []), [value("f64", 1152921504606847000)]);


let $363 = instantiate(`(module (func (export "f") (result f64) (f64.const -1152921504606847104)))`);


assert_return(() => invoke($363, `f`, []), [value("f64", -1152921504606847000)]);


let $364 = instantiate(`(module (func (export "f") (result f64) (f64.const +1152921504606847105)))`);


assert_return(() => invoke($364, `f`, []), [value("f64", 1152921504606847200)]);


let $365 = instantiate(`(module (func (export "f") (result f64) (f64.const -1152921504606847105)))`);


assert_return(() => invoke($365, `f`, []), [value("f64", -1152921504606847200)]);


let $366 = instantiate(`(module (func (export "f") (result f64) (f64.const +1152921504606847359)))`);


assert_return(() => invoke($366, `f`, []), [value("f64", 1152921504606847200)]);


let $367 = instantiate(`(module (func (export "f") (result f64) (f64.const -1152921504606847359)))`);


assert_return(() => invoke($367, `f`, []), [value("f64", -1152921504606847200)]);


let $368 = instantiate(`(module (func (export "f") (result f64) (f64.const +1152921504606847360)))`);


assert_return(() => invoke($368, `f`, []), [value("f64", 1152921504606847500)]);


let $369 = instantiate(`(module (func (export "f") (result f64) (f64.const -1152921504606847360)))`);


assert_return(() => invoke($369, `f`, []), [value("f64", -1152921504606847500)]);


let $370 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000080000000000p-1022)))`);


assert_return(() => invoke($370, `f`, []), [value("f64", 0)]);


let $371 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000080000000000p-1022)))`);


assert_return(() => invoke($371, `f`, []), [value("f64", -0)]);


let $372 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000080000000001p-1022)))`);


assert_return(
  () => invoke($372, `f`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $373 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000080000000001p-1022)))`);


assert_return(
  () => invoke($373, `f`, []),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $374 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.0000000000000fffffffffffp-1022)))`);


assert_return(
  () => invoke($374, `f`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $375 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.0000000000000fffffffffffp-1022)))`);


assert_return(
  () => invoke($375, `f`, []),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $376 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000100000000000p-1022)))`);


assert_return(
  () => invoke($376, `f`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $377 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000100000000000p-1022)))`);


assert_return(
  () => invoke($377, `f`, []),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $378 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000100000000001p-1022)))`);


assert_return(
  () => invoke($378, `f`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $379 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000100000000001p-1022)))`);


assert_return(
  () => invoke($379, `f`, []),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $380 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.00000000000017ffffffffffp-1022)))`);


assert_return(
  () => invoke($380, `f`, []),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $381 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.00000000000017ffffffffffp-1022)))`);


assert_return(
  () => invoke($381, `f`, []),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


let $382 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000180000000000p-1022)))`);


assert_return(
  () => invoke($382, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $383 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000180000000000p-1022)))`);


assert_return(
  () => invoke($383, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $384 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000180000000001p-1022)))`);


assert_return(
  () => invoke($384, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $385 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000180000000001p-1022)))`);


assert_return(
  () => invoke($385, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $386 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.0000000000001fffffffffffp-1022)))`);


assert_return(
  () => invoke($386, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $387 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.0000000000001fffffffffffp-1022)))`);


assert_return(
  () => invoke($387, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $388 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000200000000000p-1022)))`);


assert_return(
  () => invoke($388, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $389 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000200000000000p-1022)))`);


assert_return(
  () => invoke($389, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $390 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000200000000001p-1022)))`);


assert_return(
  () => invoke($390, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $391 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000200000000001p-1022)))`);


assert_return(
  () => invoke($391, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $392 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.00000000000027ffffffffffp-1022)))`);


assert_return(
  () => invoke($392, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $393 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.00000000000027ffffffffffp-1022)))`);


assert_return(
  () => invoke($393, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $394 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x0.000000000000280000000000p-1022)))`);


assert_return(
  () => invoke($394, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $395 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x0.000000000000280000000000p-1022)))`);


assert_return(
  () => invoke($395, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001),
  ],
);


let $396 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.000000000000280000000001p-1022)))`);


assert_return(
  () => invoke($396, `f`, []),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
  ],
);


let $397 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.000000000000280000000001p-1022)))`);


assert_return(
  () => invoke($397, `f`, []),
  [
    value("f64", -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002225073858507203),
  ],
);


let $398 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.fffffffffffff4p1023)))`);


assert_return(
  () => invoke($398, `f`, []),
  [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $399 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.fffffffffffff4p1023)))`);


assert_return(
  () => invoke($399, `f`, []),
  [
    value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $400 = instantiate(`(module (func (export "f") (result f64) (f64.const +0x1.fffffffffffff7ffffffp1023)))`);


assert_return(
  () => invoke($400, `f`, []),
  [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


let $401 = instantiate(`(module (func (export "f") (result f64) (f64.const -0x1.fffffffffffff7ffffffp1023)))`);


assert_return(
  () => invoke($401, `f`, []),
  [
    value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);
