






let $0 = instantiate(`(module
  (func (export "i32x4.trunc_sat_f32x4_s") (param v128) (result v128) (i32x4.trunc_sat_f32x4_s (local.get 0)))
  (func (export "i32x4.trunc_sat_f32x4_u") (param v128) (result v128) (i32x4.trunc_sat_f32x4_u (local.get 0)))
)`);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([0, 0, 0, 0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-0, -0, -0, -0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([1.5, 1.5, 1.5, 1.5])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-1.5, -1.5, -1.5, -1.5])]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([1.9, 1.9, 1.9, 1.9])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([2, 2, 2, 2])]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-1.9, -1.9, -1.9, -1.9])]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-2, -2, -2, -2])]),
  [i32x4([0xfffffffe, 0xfffffffe, 0xfffffffe, 0xfffffffe])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([2147483500, 2147483500, 2147483500, 2147483500]),
  ]),
  [i32x4([0x7fffff80, 0x7fffff80, 0x7fffff80, 0x7fffff80])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-2147483500, -2147483500, -2147483500, -2147483500]),
  ]),
  [i32x4([0x80000080, 0x80000080, 0x80000080, 0x80000080])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([2147483600, 2147483600, 2147483600, 2147483600]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-2147483600, -2147483600, -2147483600, -2147483600]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-4294967300, -4294967300, -4294967300, -4294967300]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([2147483600, 2147483600, 2147483600, 2147483600]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-2147483600, -2147483600, -2147483600, -2147483600]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([0.5, 0.5, 0.5, 0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-0.5, -0.5, -0.5, -0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([1, 1, 1, 1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-1, -1, -1, -1])]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([1.1, 1.1, 1.1, 1.1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-1.1, -1.1, -1.1, -1.1])]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([6.2831855, 6.2831855, 6.2831855, 6.2831855]),
  ]),
  [i32x4([0x6, 0x6, 0x6, 0x6])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-6.2831855, -6.2831855, -6.2831855, -6.2831855]),
  ]),
  [i32x4([0xfffffffa, 0xfffffffa, 0xfffffffa, 0xfffffffa])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([0.9, 0.9, 0.9, 0.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-0.9, -0.9, -0.9, -0.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([0.99999994, 0.99999994, 0.99999994, 0.99999994]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-0.99999994, -0.99999994, -0.99999994, -0.99999994]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([6.2831855, 6.2831855, 6.2831855, 6.2831855]),
  ]),
  [i32x4([0x6, 0x6, 0x6, 0x6])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-6.2831855, -6.2831855, -6.2831855, -6.2831855]),
  ]),
  [i32x4([0xfffffffa, 0xfffffffa, 0xfffffffa, 0xfffffffa])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    bytes('v128', [
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    bytes('v128', [
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([42, 42, 42, 42])]),
  [i32x4([0x2a, 0x2a, 0x2a, 0x2a])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [f32x4([-42, -42, -42, -42])]),
  [i32x4([0xffffffd6, 0xffffffd6, 0xffffffd6, 0xffffffd6])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([123456790, 123456790, 123456790, 123456790]),
  ]),
  [i32x4([0x75bcd18, 0x75bcd18, 0x75bcd18, 0x75bcd18])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_s`, [
    f32x4([1234568000, 1234568000, 1234568000, 1234568000]),
  ]),
  [i32x4([0x49960300, 0x49960300, 0x49960300, 0x49960300])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([0, 0, 0, 0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-0, -0, -0, -0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([1.5, 1.5, 1.5, 1.5])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-1.5, -1.5, -1.5, -1.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([1.9, 1.9, 1.9, 1.9])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([2, 2, 2, 2])]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-1.9, -1.9, -1.9, -1.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-2, -2, -2, -2])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([2147483500, 2147483500, 2147483500, 2147483500]),
  ]),
  [i32x4([0x7fffff80, 0x7fffff80, 0x7fffff80, 0x7fffff80])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-2147483500, -2147483500, -2147483500, -2147483500]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([2147483600, 2147483600, 2147483600, 2147483600]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-2147483600, -2147483600, -2147483600, -2147483600]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-4294967300, -4294967300, -4294967300, -4294967300]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([2147483600, 2147483600, 2147483600, 2147483600]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-2147483600, -2147483600, -2147483600, -2147483600]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([4294967300, 4294967300, 4294967300, 4294967300]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
      0.000000000000000000000000000000000000000000001,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
      -0.000000000000000000000000000000000000000000001,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
      0.000000000000000000000000000000000000011754944,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
      -0.000000000000000000000000000000000000011754944,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([0.5, 0.5, 0.5, 0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-0.5, -0.5, -0.5, -0.5])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([1, 1, 1, 1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-1, -1, -1, -1])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([1.1, 1.1, 1.1, 1.1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-1.1, -1.1, -1.1, -1.1])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([6.2831855, 6.2831855, 6.2831855, 6.2831855]),
  ]),
  [i32x4([0x6, 0x6, 0x6, 0x6])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-6.2831855, -6.2831855, -6.2831855, -6.2831855]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([0.9, 0.9, 0.9, 0.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-0.9, -0.9, -0.9, -0.9])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([0.99999994, 0.99999994, 0.99999994, 0.99999994]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-0.99999994, -0.99999994, -0.99999994, -0.99999994]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([6.2831855, 6.2831855, 6.2831855, 6.2831855]),
  ]),
  [i32x4([0x6, 0x6, 0x6, 0x6])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-6.2831855, -6.2831855, -6.2831855, -6.2831855]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
      340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
      -340282350000000000000000000000000000000,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([Infinity, Infinity, Infinity, Infinity]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([-Infinity, -Infinity, -Infinity, -Infinity]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    bytes('v128', [
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
      0x44,
      0x44,
      0xc4,
      0x7f,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    bytes('v128', [
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
      0x44,
      0x44,
      0xc4,
      0xff,
    ]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([42, 42, 42, 42])]),
  [i32x4([0x2a, 0x2a, 0x2a, 0x2a])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [f32x4([-42, -42, -42, -42])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([123456790, 123456790, 123456790, 123456790]),
  ]),
  [i32x4([0x75bcd18, 0x75bcd18, 0x75bcd18, 0x75bcd18])],
);


assert_return(
  () => invoke($0, `i32x4.trunc_sat_f32x4_u`, [
    f32x4([1234568000, 1234568000, 1234568000, 1234568000]),
  ]),
  [i32x4([0x49960300, 0x49960300, 0x49960300, 0x49960300])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.trunc_sat_f32x4_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.trunc_sat_f32x4_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.trunc_sat_f32x4_s-arg-empty (result v128)
      (i32x4.trunc_sat_f32x4_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.trunc_sat_f32x4_u-arg-empty (result v128)
      (i32x4.trunc_sat_f32x4_u)
    )
  )`),
  `type mismatch`,
);
