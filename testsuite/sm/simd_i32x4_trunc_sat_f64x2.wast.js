






let $0 = instantiate(`(module
  (func (export "i32x4.trunc_sat_f64x2_s_zero") (param v128) (result v128) (i32x4.trunc_sat_f64x2_s_zero (local.get 0)))
  (func (export "i32x4.trunc_sat_f64x2_u_zero") (param v128) (result v128) (i32x4.trunc_sat_f64x2_u_zero (local.get 0)))
)`);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([0, 0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-0, -0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([1.5, 1.5])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-1.5, -1.5])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([1.9, 1.9])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([2, 2])]),
  [i32x4([0x2, 0x2, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-1.9, -1.9])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-2, -2])]),
  [i32x4([0xfffffffe, 0xfffffffe, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([2147483520, 2147483520])]),
  [i32x4([0x7fffff80, 0x7fffff80, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-2147483520, -2147483520])]),
  [i32x4([0x80000080, 0x80000080, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([2147483648, 2147483648])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-2147483648, -2147483648])]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([4294967294, 4294967294])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-4294967294, -4294967294])]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([2147483647, 2147483647])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-2147483647, -2147483647])]),
  [i32x4([0x80000001, 0x80000001, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([4294967294, 4294967294])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([4294967295, 4294967295])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([4294967296, 4294967296])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      0.000000000000000000000000000000000000000000001401298464324817,
      0.000000000000000000000000000000000000000000001401298464324817,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      -0.000000000000000000000000000000000000000000001401298464324817,
      -0.000000000000000000000000000000000000000000001401298464324817,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      0.000000000000000000000000000000000000011754943508222875,
      0.000000000000000000000000000000000000011754943508222875,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      -0.000000000000000000000000000000000000011754943508222875,
      -0.000000000000000000000000000000000000011754943508222875,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([0.5, 0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-0.5, -0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([1, 1])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-1, -1])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([1.100000023841858, 1.100000023841858]),
  ]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([-1.100000023841858, -1.100000023841858]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([6.2831854820251465, 6.2831854820251465]),
  ]),
  [i32x4([0x6, 0x6, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([-6.2831854820251465, -6.2831854820251465]),
  ]),
  [i32x4([0xfffffffa, 0xfffffffa, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      -340282346638528860000000000000000000000,
      -340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([0.8999999761581421, 0.8999999761581421]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([-0.8999999761581421, -0.8999999761581421]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([0.9999999403953552, 0.9999999403953552]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([-0.9999999403953552, -0.9999999403953552]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([6.2831854820251465, 6.2831854820251465]),
  ]),
  [i32x4([0x6, 0x6, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([-6.2831854820251465, -6.2831854820251465]),
  ]),
  [i32x4([0xfffffffa, 0xfffffffa, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    f64x2([
      -340282346638528860000000000000000000000,
      -340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([Infinity, Infinity])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-Infinity, -Infinity])]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0x7f,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0xff,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    bytes('v128', [
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0x7f,
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [
    bytes('v128', [
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0xff,
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([42, 42])]),
  [i32x4([0x2a, 0x2a, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([-42, -42])]),
  [i32x4([0xffffffd6, 0xffffffd6, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([123456792, 123456792])]),
  [i32x4([0x75bcd18, 0x75bcd18, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_s_zero`, [f64x2([1234567890, 1234567890])]),
  [i32x4([0x499602d2, 0x499602d2, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([0, 0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-0, -0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([1.5, 1.5])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-1.5, -1.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([1.9, 1.9])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([2, 2])]),
  [i32x4([0x2, 0x2, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-1.9, -1.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-2, -2])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([2147483520, 2147483520])]),
  [i32x4([0x7fffff80, 0x7fffff80, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-2147483520, -2147483520])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([2147483648, 2147483648])]),
  [i32x4([0x80000000, 0x80000000, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-2147483648, -2147483648])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([4294967294, 4294967294])]),
  [i32x4([0xfffffffe, 0xfffffffe, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-4294967294, -4294967294])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([2147483647, 2147483647])]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-2147483647, -2147483647])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([4294967294, 4294967294])]),
  [i32x4([0xfffffffe, 0xfffffffe, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([4294967295, 4294967295])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([4294967296, 4294967296])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      0.000000000000000000000000000000000000000000001401298464324817,
      0.000000000000000000000000000000000000000000001401298464324817,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      -0.000000000000000000000000000000000000000000001401298464324817,
      -0.000000000000000000000000000000000000000000001401298464324817,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      0.000000000000000000000000000000000000011754943508222875,
      0.000000000000000000000000000000000000011754943508222875,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      -0.000000000000000000000000000000000000011754943508222875,
      -0.000000000000000000000000000000000000011754943508222875,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([0.5, 0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-0.5, -0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([1, 1])]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-1, -1])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([1.100000023841858, 1.100000023841858]),
  ]),
  [i32x4([0x1, 0x1, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([-1.100000023841858, -1.100000023841858]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([6.2831854820251465, 6.2831854820251465]),
  ]),
  [i32x4([0x6, 0x6, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([-6.2831854820251465, -6.2831854820251465]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      -340282346638528860000000000000000000000,
      -340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([0.8999999761581421, 0.8999999761581421]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([-0.8999999761581421, -0.8999999761581421]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([0.9999999403953552, 0.9999999403953552]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([-0.9999999403953552, -0.9999999403953552]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([6.2831854820251465, 6.2831854820251465]),
  ]),
  [i32x4([0x6, 0x6, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([-6.2831854820251465, -6.2831854820251465]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      340282346638528860000000000000000000000,
      340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    f64x2([
      -340282346638528860000000000000000000000,
      -340282346638528860000000000000000000000,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([Infinity, Infinity])]),
  [i32x4([0xffffffff, 0xffffffff, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-Infinity, -Infinity])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0x7f,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0xff,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xf8,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    bytes('v128', [
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0x7f,
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [
    bytes('v128', [
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0xff,
      0x44,
      0x44,
      0x44,
      0x0,
      0x0,
      0x0,
      0xf0,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([42, 42])]),
  [i32x4([0x2a, 0x2a, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([-42, -42])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([123456792, 123456792])]),
  [i32x4([0x75bcd18, 0x75bcd18, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f64x2_u_zero`, [f64x2([1234567890, 1234567890])]),
  [i32x4([0x499602d2, 0x499602d2, 0x0, 0x0])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.trunc_sat_f64x2_s_zero (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.trunc_sat_f64x2_u_zero (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.trunc_sat_f64x2_s_zero-arg-empty (result v128)
      (i32x4.trunc_sat_f64x2_s_zero)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.trunc_sat_f64x2_u_zero-arg-empty (result v128)
      (i32x4.trunc_sat_f64x2_u_zero)
    )
  )`),
  `type mismatch`,
);
