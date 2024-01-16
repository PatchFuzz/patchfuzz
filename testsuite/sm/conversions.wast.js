




let $0 = instantiate(`(module
  (func (export "i64.extend_i32_s") (param $$x i32) (result i64) (i64.extend_i32_s (local.get $$x)))
  (func (export "i64.extend_i32_u") (param $$x i32) (result i64) (i64.extend_i32_u (local.get $$x)))
  (func (export "i32.wrap_i64") (param $$x i64) (result i32) (i32.wrap_i64 (local.get $$x)))
  (func (export "i32.trunc_f32_s") (param $$x f32) (result i32) (i32.trunc_f32_s (local.get $$x)))
  (func (export "i32.trunc_f32_u") (param $$x f32) (result i32) (i32.trunc_f32_u (local.get $$x)))
  (func (export "i32.trunc_f64_s") (param $$x f64) (result i32) (i32.trunc_f64_s (local.get $$x)))
  (func (export "i32.trunc_f64_u") (param $$x f64) (result i32) (i32.trunc_f64_u (local.get $$x)))
  (func (export "i64.trunc_f32_s") (param $$x f32) (result i64) (i64.trunc_f32_s (local.get $$x)))
  (func (export "i64.trunc_f32_u") (param $$x f32) (result i64) (i64.trunc_f32_u (local.get $$x)))
  (func (export "i64.trunc_f64_s") (param $$x f64) (result i64) (i64.trunc_f64_s (local.get $$x)))
  (func (export "i64.trunc_f64_u") (param $$x f64) (result i64) (i64.trunc_f64_u (local.get $$x)))
  (func (export "i32.trunc_sat_f32_s") (param $$x f32) (result i32) (i32.trunc_sat_f32_s (local.get $$x)))
  (func (export "i32.trunc_sat_f32_u") (param $$x f32) (result i32) (i32.trunc_sat_f32_u (local.get $$x)))
  (func (export "i32.trunc_sat_f64_s") (param $$x f64) (result i32) (i32.trunc_sat_f64_s (local.get $$x)))
  (func (export "i32.trunc_sat_f64_u") (param $$x f64) (result i32) (i32.trunc_sat_f64_u (local.get $$x)))
  (func (export "i64.trunc_sat_f32_s") (param $$x f32) (result i64) (i64.trunc_sat_f32_s (local.get $$x)))
  (func (export "i64.trunc_sat_f32_u") (param $$x f32) (result i64) (i64.trunc_sat_f32_u (local.get $$x)))
  (func (export "i64.trunc_sat_f64_s") (param $$x f64) (result i64) (i64.trunc_sat_f64_s (local.get $$x)))
  (func (export "i64.trunc_sat_f64_u") (param $$x f64) (result i64) (i64.trunc_sat_f64_u (local.get $$x)))
  (func (export "f32.convert_i32_s") (param $$x i32) (result f32) (f32.convert_i32_s (local.get $$x)))
  (func (export "f32.convert_i64_s") (param $$x i64) (result f32) (f32.convert_i64_s (local.get $$x)))
  (func (export "f64.convert_i32_s") (param $$x i32) (result f64) (f64.convert_i32_s (local.get $$x)))
  (func (export "f64.convert_i64_s") (param $$x i64) (result f64) (f64.convert_i64_s (local.get $$x)))
  (func (export "f32.convert_i32_u") (param $$x i32) (result f32) (f32.convert_i32_u (local.get $$x)))
  (func (export "f32.convert_i64_u") (param $$x i64) (result f32) (f32.convert_i64_u (local.get $$x)))
  (func (export "f64.convert_i32_u") (param $$x i32) (result f64) (f64.convert_i32_u (local.get $$x)))
  (func (export "f64.convert_i64_u") (param $$x i64) (result f64) (f64.convert_i64_u (local.get $$x)))
  (func (export "f64.promote_f32") (param $$x f32) (result f64) (f64.promote_f32 (local.get $$x)))
  (func (export "f32.demote_f64") (param $$x f64) (result f32) (f32.demote_f64 (local.get $$x)))
  (func (export "f32.reinterpret_i32") (param $$x i32) (result f32) (f32.reinterpret_i32 (local.get $$x)))
  (func (export "f64.reinterpret_i64") (param $$x i64) (result f64) (f64.reinterpret_i64 (local.get $$x)))
  (func (export "i32.reinterpret_f32") (param $$x f32) (result i32) (i32.reinterpret_f32 (local.get $$x)))
  (func (export "i64.reinterpret_f64") (param $$x f64) (result i64) (i64.reinterpret_f64 (local.get $$x)))
)`);


assert_return(() => invoke($0, `i64.extend_i32_s`, [0]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.extend_i32_s`, [10000]), [value("i64", 10000n)]);


assert_return(() => invoke($0, `i64.extend_i32_s`, [-10000]), [value("i64", -10000n)]);


assert_return(() => invoke($0, `i64.extend_i32_s`, [-1]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.extend_i32_s`, [2147483647]), [value("i64", 2147483647n)]);


assert_return(() => invoke($0, `i64.extend_i32_s`, [-2147483648]), [value("i64", -2147483648n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [0]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [10000]), [value("i64", 10000n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [-10000]), [value("i64", 4294957296n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [-1]), [value("i64", 4294967295n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [2147483647]), [value("i64", 2147483647n)]);


assert_return(() => invoke($0, `i64.extend_i32_u`, [-2147483648]), [value("i64", 2147483648n)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-1n]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-100000n]), [value("i32", -100000)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [2147483648n]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-2147483649n]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-4294967296n]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-4294967297n]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [-4294967295n]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [1311768467463790320n]), [value("i32", -1698898192)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [4294967295n]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [4294967296n]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.wrap_i64`, [4294967297n]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_f32_s`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_f32_s`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -1.1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -1.5)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -1.9)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -2)]), [value("i32", -2)]);


assert_return(
  () => invoke($0, `i32.trunc_f32_s`, [value("f32", 2147483500)]),
  [value("i32", 2147483520)],
);


assert_return(
  () => invoke($0, `i32.trunc_f32_s`, [value("f32", -2147483600)]),
  [value("i32", -2147483648)],
);


assert_trap(() => invoke($0, `i32.trunc_f32_s`, [value("f32", 2147483600)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -2147484000)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_s`, [value("f32", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_s`, [value("f32", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i32.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_f32_u`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_f32_u`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 1.9)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 2)]), [value("i32", 2)]);


assert_return(
  () => invoke($0, `i32.trunc_f32_u`, [value("f32", 2147483600)]),
  [value("i32", -2147483648)],
);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 4294967000)]), [value("i32", -256)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", -0.9)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f32_u`, [value("f32", -0.99999994)]), [value("i32", 0)]);


assert_trap(() => invoke($0, `i32.trunc_f32_u`, [value("f32", 4294967300)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_u`, [value("f32", -1)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_u`, [value("f32", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f32_u`, [value("f32", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i32.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -1.1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -1.5)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -1.9)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -2)]), [value("i32", -2)]);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [value("f64", 2147483647)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [value("f64", -2147483648)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [value("f64", -2147483648.9)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_f64_s`, [value("f64", 2147483647.9)]),
  [value("i32", 2147483647)],
);


assert_trap(() => invoke($0, `i32.trunc_f64_s`, [value("f64", 2147483648)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -2147483649)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_s`, [value("f64", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_s`, [value("f64", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i32.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_f64_u`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_f64_u`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 1.9)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 2)]), [value("i32", 2)]);


assert_return(
  () => invoke($0, `i32.trunc_f64_u`, [value("f64", 2147483648)]),
  [value("i32", -2147483648)],
);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 4294967295)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", -0.9)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_f64_u`, [value("f64", -0.9999999999999999)]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 100000000)]), [value("i32", 100000000)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", -0.9)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 4294967295.9)]), [value("i32", -1)]);


assert_trap(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 4294967296)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_u`, [value("f64", -1)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_u`, [value("f64", 10000000000000000)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [value("f64", 1000000000000000000000000000000)]),
  `integer overflow`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [value("f64", 9223372036854776000)]),
  `integer overflow`,
);


assert_trap(() => invoke($0, `i32.trunc_f64_u`, [value("f64", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i32.trunc_f64_u`, [value("f64", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i32.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", 1.5)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -1.1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -1.5)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -1.9)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -2)]), [value("i64", -2n)]);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", 4294967300)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", -4294967300)]),
  [value("i64", -4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", 9223371500000000000)]),
  [value("i64", 9223371487098961920n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", -9223372000000000000)]),
  [value("i64", -9223372036854775808n)],
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", 9223372000000000000)]),
  `integer overflow`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [value("f32", -9223373000000000000)]),
  `integer overflow`,
);


assert_trap(() => invoke($0, `i64.trunc_f32_s`, [value("f32", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f32_s`, [value("f32", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_f32_u`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_u`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", 1.5)]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `i64.trunc_f32_u`, [value("f32", 4294967300)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f32_u`, [value("f32", 18446743000000000000)]),
  [value("i64", -1099511627776n)],
);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", -0.9)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_f32_u`, [value("f32", -0.99999994)]), [value("i64", 0n)]);


assert_trap(
  () => invoke($0, `i64.trunc_f32_u`, [value("f32", 18446744000000000000)]),
  `integer overflow`,
);


assert_trap(() => invoke($0, `i64.trunc_f32_u`, [value("f32", -1)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f32_u`, [value("f32", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f32_u`, [value("f32", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i64.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", 1.5)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -1.1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -1.5)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -1.9)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -2)]), [value("i64", -2n)]);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", 4294967296)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", -4294967296)]),
  [value("i64", -4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", 9223372036854775000)]),
  [value("i64", 9223372036854774784n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", -9223372036854776000)]),
  [value("i64", -9223372036854775808n)],
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", 9223372036854776000)]),
  `integer overflow`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [value("f64", -9223372036854778000)]),
  `integer overflow`,
);


assert_trap(() => invoke($0, `i64.trunc_f64_s`, [value("f64", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f64_s`, [value("f64", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", 1.5)]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 4294967295)]),
  [value("i64", 4294967295n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 4294967296)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 18446744073709550000)]),
  [value("i64", -2048n)],
);


assert_return(() => invoke($0, `i64.trunc_f64_u`, [value("f64", -0.9)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", -0.9999999999999999)]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 100000000)]),
  [value("i64", 100000000n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 10000000000000000)]),
  [value("i64", 10000000000000000n)],
);


assert_return(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 9223372036854776000)]),
  [value("i64", -9223372036854775808n)],
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_u`, [value("f64", 18446744073709552000)]),
  `integer overflow`,
);


assert_trap(() => invoke($0, `i64.trunc_f64_u`, [value("f64", -1)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f64_u`, [value("f64", Infinity)]), `integer overflow`);


assert_trap(() => invoke($0, `i64.trunc_f64_u`, [value("f64", -Infinity)]), `integer overflow`);


assert_trap(
  () => invoke($0, `i64.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($0, `i64.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  `invalid conversion to integer`,
);


assert_return(() => invoke($0, `f32.convert_i32_s`, [1]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [-1]), [value("f32", -1)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [0]), [value("f32", 0)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [2147483647]), [value("f32", 2147483600)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [-2147483648]), [value("f32", -2147483600)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [1234567890]), [value("f32", 1234568000)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -1.1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -1.5)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -1.9)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -2)]), [value("i32", -2)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 2147483500)]),
  [value("i32", 2147483520)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -2147483600)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", 2147483600)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -2147484000)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", Infinity)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [value("f32", -Infinity)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 1.9)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 2)]), [value("i32", 2)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 2147483600)]),
  [value("i32", -2147483648)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 4294967000)]), [value("i32", -256)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", -0.9)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", -0.99999994)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", 4294967300)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", Infinity)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f32_u`, [value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -1.1)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -1.5)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -1.9)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -2)]), [value("i32", -2)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 2147483647)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -2147483648)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", 2147483648)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -2147483649)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", Infinity)]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [value("f64", -Infinity)]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", -0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 1.1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 1.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 1.9)]), [value("i32", 1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 2)]), [value("i32", 2)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 2147483648)]),
  [value("i32", -2147483648)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 4294967295)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", -0.9)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", -0.9999999999999999)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 100000000)]),
  [value("i32", 100000000)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 4294967296)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", -1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 10000000000000000)]),
  [value("i32", -1)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    value("f64", 1000000000000000000000000000000),
  ]),
  [value("i32", -1)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", 9223372036854776000)]),
  [value("i32", -1)],
);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", Infinity)]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32.trunc_sat_f64_u`, [value("f64", -Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `i32.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 1.5)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -1.1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -1.5)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -1.9)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -2)]), [value("i64", -2n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 4294967300)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -4294967300)]),
  [value("i64", -4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 9223371500000000000)]),
  [value("i64", 9223371487098961920n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -9223372000000000000)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", 9223372000000000000)]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -9223373000000000000)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", Infinity)]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [value("f32", -Infinity)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_s`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 1.5)]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 4294967300)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 18446743000000000000)]),
  [value("i64", -1099511627776n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", -0.9)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", -0.99999994)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", 18446744000000000000)]),
  [value("i64", -1n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", -1)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", Infinity)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f32_u`, [value("f32", -Infinity)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f32_u`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 1.5)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -1.1)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -1.5)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -1.9)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -2)]), [value("i64", -2n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 4294967296)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -4294967296)]),
  [value("i64", -4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 9223372036854775000)]),
  [value("i64", 9223372036854774784n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -9223372036854776000)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", 9223372036854776000)]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -9223372036854778000)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", Infinity)]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [value("f64", -Infinity)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 0)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", -0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 1.1)]), [value("i64", 1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 1.5)]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 4294967295)]),
  [value("i64", 4294967295n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 4294967296)]),
  [value("i64", 4294967296n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 18446744073709550000)]),
  [value("i64", -2048n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", -0.9)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", -0.9999999999999999)]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 100000000)]),
  [value("i64", 100000000n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 10000000000000000)]),
  [value("i64", 10000000000000000n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 9223372036854776000)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", 18446744073709552000)]),
  [value("i64", -1n)],
);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", -1)]), [value("i64", 0n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", Infinity)]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64.trunc_sat_f64_u`, [value("f64", -Infinity)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `i64.trunc_sat_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `f32.convert_i32_s`, [16777217]), [value("f32", 16777216)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [-16777217]), [value("f32", -16777216)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [16777219]), [value("f32", 16777220)]);


assert_return(() => invoke($0, `f32.convert_i32_s`, [-16777219]), [value("f32", -16777220)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [1n]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [-1n]), [value("f32", -1)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [0n]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [9223372036854775807n]),
  [value("f32", 9223372000000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [-9223372036854775808n]),
  [value("f32", -9223372000000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [314159265358979n]),
  [value("f32", 314159280000000)],
);


assert_return(() => invoke($0, `f32.convert_i64_s`, [16777217n]), [value("f32", 16777216)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [-16777217n]), [value("f32", -16777216)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [16777219n]), [value("f32", 16777220)]);


assert_return(() => invoke($0, `f32.convert_i64_s`, [-16777219n]), [value("f32", -16777220)]);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [9223371212221054977n]),
  [value("f32", 9223371500000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [-9223371761976868863n]),
  [value("f32", -9223371500000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [9007199791611905n]),
  [value("f32", 9007200000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_s`, [-9007199791611905n]),
  [value("f32", -9007200000000000)],
);


assert_return(() => invoke($0, `f64.convert_i32_s`, [1]), [value("f64", 1)]);


assert_return(() => invoke($0, `f64.convert_i32_s`, [-1]), [value("f64", -1)]);


assert_return(() => invoke($0, `f64.convert_i32_s`, [0]), [value("f64", 0)]);


assert_return(() => invoke($0, `f64.convert_i32_s`, [2147483647]), [value("f64", 2147483647)]);


assert_return(() => invoke($0, `f64.convert_i32_s`, [-2147483648]), [value("f64", -2147483648)]);


assert_return(() => invoke($0, `f64.convert_i32_s`, [987654321]), [value("f64", 987654321)]);


assert_return(() => invoke($0, `f64.convert_i64_s`, [1n]), [value("f64", 1)]);


assert_return(() => invoke($0, `f64.convert_i64_s`, [-1n]), [value("f64", -1)]);


assert_return(() => invoke($0, `f64.convert_i64_s`, [0n]), [value("f64", 0)]);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [9223372036854775807n]),
  [value("f64", 9223372036854776000)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [-9223372036854775808n]),
  [value("f64", -9223372036854776000)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [4669201609102990n]),
  [value("f64", 4669201609102990)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [9007199254740993n]),
  [value("f64", 9007199254740992)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [-9007199254740993n]),
  [value("f64", -9007199254740992)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [9007199254740995n]),
  [value("f64", 9007199254740996)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_s`, [-9007199254740995n]),
  [value("f64", -9007199254740996)],
);


assert_return(() => invoke($0, `f32.convert_i32_u`, [1]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [0]), [value("f32", 0)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [2147483647]), [value("f32", 2147483600)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-2147483648]), [value("f32", 2147483600)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [305419896]), [value("f32", 305419900)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-1]), [value("f32", 4294967300)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-2147483520]), [value("f32", 2147483600)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-2147483519]), [value("f32", 2147484000)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-2147483518]), [value("f32", 2147484000)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-384]), [value("f32", 4294966800)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-383]), [value("f32", 4294967000)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [-382]), [value("f32", 4294967000)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [16777217]), [value("f32", 16777216)]);


assert_return(() => invoke($0, `f32.convert_i32_u`, [16777219]), [value("f32", 16777220)]);


assert_return(() => invoke($0, `f32.convert_i64_u`, [1n]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.convert_i64_u`, [0n]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [9223372036854775807n]),
  [value("f32", 9223372000000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [-9223372036854775808n]),
  [value("f32", 9223372000000000000)],
);


assert_return(() => invoke($0, `f32.convert_i64_u`, [-1n]), [value("f32", 18446744000000000000)]);


assert_return(() => invoke($0, `f32.convert_i64_u`, [16777217n]), [value("f32", 16777216)]);


assert_return(() => invoke($0, `f32.convert_i64_u`, [16777219n]), [value("f32", 16777220)]);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [9007199791611905n]),
  [value("f32", 9007200000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [9223371761976868863n]),
  [value("f32", 9223371500000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [-9223371487098961919n]),
  [value("f32", 9223373000000000000)],
);


assert_return(
  () => invoke($0, `f32.convert_i64_u`, [-1649267441663n]),
  [value("f32", 18446743000000000000)],
);


assert_return(() => invoke($0, `f64.convert_i32_u`, [1]), [value("f64", 1)]);


assert_return(() => invoke($0, `f64.convert_i32_u`, [0]), [value("f64", 0)]);


assert_return(() => invoke($0, `f64.convert_i32_u`, [2147483647]), [value("f64", 2147483647)]);


assert_return(() => invoke($0, `f64.convert_i32_u`, [-2147483648]), [value("f64", 2147483648)]);


assert_return(() => invoke($0, `f64.convert_i32_u`, [-1]), [value("f64", 4294967295)]);


assert_return(() => invoke($0, `f64.convert_i64_u`, [1n]), [value("f64", 1)]);


assert_return(() => invoke($0, `f64.convert_i64_u`, [0n]), [value("f64", 0)]);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [9223372036854775807n]),
  [value("f64", 9223372036854776000)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [-9223372036854775808n]),
  [value("f64", 9223372036854776000)],
);


assert_return(() => invoke($0, `f64.convert_i64_u`, [-1n]), [value("f64", 18446744073709552000)]);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [-9223372036854774784n]),
  [value("f64", 9223372036854776000)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [-9223372036854774783n]),
  [value("f64", 9223372036854778000)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [-9223372036854774782n]),
  [value("f64", 9223372036854778000)],
);


assert_return(() => invoke($0, `f64.convert_i64_u`, [-3072n]), [value("f64", 18446744073709548000)]);


assert_return(() => invoke($0, `f64.convert_i64_u`, [-3071n]), [value("f64", 18446744073709550000)]);


assert_return(() => invoke($0, `f64.convert_i64_u`, [-3070n]), [value("f64", 18446744073709550000)]);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [9007199254740993n]),
  [value("f64", 9007199254740992)],
);


assert_return(
  () => invoke($0, `f64.convert_i64_u`, [9007199254740995n]),
  [value("f64", 9007199254740996)],
);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", 0)]), [value("f64", 0)]);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", -0)]), [value("f64", -0)]);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f64", 0.000000000000000000000000000000000000000000001401298464324817)],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [
    value("f64", -0.000000000000000000000000000000000000000000001401298464324817),
  ],
);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", 1)]), [value("f64", 1)]);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", -1)]), [value("f64", -1)]);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f64", -340282346638528860000000000000000000000)],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f64", 340282346638528860000000000000000000000)],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", 0.0000000000000000000000000000000000015046328),
  ]),
  [value("f64", 0.000000000000000000000000000000000001504632769052528)],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [
    value("f32", 66382537000000000000000000000000000000),
  ]),
  [value("f64", 66382536710104395000000000000000000000)],
);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", Infinity)]), [value("f64", Infinity)]);


assert_return(() => invoke($0, `f64.promote_f32`, [value("f32", -Infinity)]), [value("f64", -Infinity)]);


assert_return(
  () => invoke($0, `f64.promote_f32`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `f64.promote_f32`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", -0)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("f32", -0)],
);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", -1)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000011754942807573643),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.000000000000000000000000000000000000011754942807573643),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000011754942807573642),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.000000000000000000000000000000000000011754942807573642),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000000000001401298464324817),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.000000000000000000000000000000000000000000001401298464324817),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 340282336497324060000000000000000000000),
  ]),
  [value("f32", 340282330000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -340282336497324060000000000000000000000),
  ]),
  [value("f32", -340282330000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 340282336497324100000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -340282336497324100000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 340282346638528860000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -340282346638528860000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 340282356779733620000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -340282356779733620000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 340282356779733660000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -340282356779733660000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000001504632769052528),
  ]),
  [value("f32", 0.0000000000000000000000000000000000015046328)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 66382536710104395000000000000000000000),
  ]),
  [value("f32", 66382537000000000000000000000000000000)],
);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", -Infinity)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 1.0000000000000002)]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 0.9999999999999999)]), [value("f32", 1)]);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 1.0000000596046448)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 1.000000059604645)]),
  [value("f32", 1.0000001)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 1.000000178813934)]),
  [value("f32", 1.0000001)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 1.0000001788139343)]),
  [value("f32", 1.0000002)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 1.0000002980232239)]),
  [value("f32", 1.0000002)],
);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 16777217)]), [value("f32", 16777216)]);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 16777217.000000004)]),
  [value("f32", 16777218)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 16777218.999999996)]),
  [value("f32", 16777218)],
);


assert_return(() => invoke($0, `f32.demote_f64`, [value("f64", 16777219)]), [value("f32", 16777220)]);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", 424258443299142700000000000000000)]),
  [value("f32", 424258450000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.0000000000000000000000000000000001569262107843488),
  ]),
  [value("f32", 0.00000000000000000000000000000000015692621)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000010551773688605172),
  ]),
  [value("f32", 0.000000000000000000000000000000000000010551773)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [value("f64", -2.8238128484141933)]),
  [value("f32", -2.823813)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -9063376370095757000000000000000000),
  ]),
  [value("f32", -9063376000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.0000000000000000000000000000000000000000000007006492321624085),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.0000000000000000000000000000000000000000000007006492321624085),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", 0.0000000000000000000000000000000000000000000007006492321624087),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `f32.demote_f64`, [
    value("f64", -0.0000000000000000000000000000000000000000000007006492321624087),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(() => invoke($0, `f32.reinterpret_i32`, [0]), [value("f32", 0)]);


assert_return(() => invoke($0, `f32.reinterpret_i32`, [-2147483648]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [1]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(() => invoke($0, `f32.reinterpret_i32`, [-1]), [bytes("f32", [0xff, 0xff, 0xff, 0xff])]);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [123456789]),
  [value("f32", 0.00000000000000000000000000000000016535997)],
);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [-2147483647]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(() => invoke($0, `f32.reinterpret_i32`, [2139095040]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `f32.reinterpret_i32`, [-8388608]), [value("f32", -Infinity)]);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [2143289344]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [-4194304]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [2141192192]),
  [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])],
);


assert_return(
  () => invoke($0, `f32.reinterpret_i32`, [-6291456]),
  [bytes("f32", [0x0, 0x0, 0xa0, 0xff])],
);


assert_return(() => invoke($0, `f64.reinterpret_i64`, [0n]), [value("f64", 0)]);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [1n]),
  [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [-1n]),
  [bytes("f64", [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff])],
);


assert_return(() => invoke($0, `f64.reinterpret_i64`, [-9223372036854775808n]), [value("f64", -0)]);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [1234567890n]),
  [
    value("f64", 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000609957582),
  ],
);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [-9223372036854775807n]),
  [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ],
);


assert_return(() => invoke($0, `f64.reinterpret_i64`, [9218868437227405312n]), [value("f64", Infinity)]);


assert_return(() => invoke($0, `f64.reinterpret_i64`, [-4503599627370496n]), [value("f64", -Infinity)]);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [9221120237041090560n]),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f])],
);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [-2251799813685248n]),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff])],
);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [9219994337134247936n]),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f])],
);


assert_return(
  () => invoke($0, `f64.reinterpret_i64`, [-3377699720527872n]),
  [bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff])],
);


assert_return(() => invoke($0, `i32.reinterpret_f32`, [value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `i32.reinterpret_f32`, [value("f32", -0)]), [value("i32", -2147483648)]);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [bytes("f32", [0xff, 0xff, 0xff, 0xff])]),
  [value("i32", -1)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", -2147483647)],
);


assert_return(() => invoke($0, `i32.reinterpret_f32`, [value("f32", 1)]), [value("i32", 1065353216)]);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [value("f32", 3.1415925)]),
  [value("i32", 1078530010)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 2139095039)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", -8388609)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [value("f32", Infinity)]),
  [value("i32", 2139095040)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [value("f32", -Infinity)]),
  [value("i32", -8388608)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 2143289344)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", -4194304)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 2141192192)],
);


assert_return(
  () => invoke($0, `i32.reinterpret_f32`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", -6291456)],
);


assert_return(() => invoke($0, `i64.reinterpret_f64`, [value("f64", 0)]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [value("f64", -0)]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", 1n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    bytes("f64", [0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ]),
  [value("i64", -1n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [value("i64", -9223372036854775807n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [value("f64", 1)]),
  [value("i64", 4607182418800017408n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [value("f64", 3.14159265358979)]),
  [value("i64", 4614256656552045841n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [value("i64", 9218868437227405311n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [value("i64", -4503599627370497n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [value("f64", Infinity)]),
  [value("i64", 9218868437227405312n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [value("f64", -Infinity)]),
  [value("i64", -4503599627370496n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [value("i64", 9221120237041090560n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [value("i64", -2251799813685248n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [value("i64", 9219994337134247936n)],
);


assert_return(
  () => invoke($0, `i64.reinterpret_f64`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [value("i64", -3377699720527872n)],
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.wrap_i64 (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.trunc_f32_s (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.trunc_f32_u (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.trunc_f64_s (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.trunc_f64_u (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.reinterpret_f32 (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.extend_i32_s (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.extend_i32_u (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.trunc_f32_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.trunc_f32_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.trunc_f64_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.trunc_f64_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.reinterpret_f64 (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.convert_i32_s (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.convert_i32_u (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.convert_i64_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.convert_i64_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.demote_f64 (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.reinterpret_i32 (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.convert_i32_s (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.convert_i32_u (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.convert_i64_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.convert_i64_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.promote_f32 (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f64) (f64.reinterpret_i64 (i32.const 0))))`),
  `type mismatch`,
);
