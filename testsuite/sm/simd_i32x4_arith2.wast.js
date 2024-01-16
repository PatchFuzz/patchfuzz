






let $0 = instantiate(`(module
  (func (export "i32x4.min_s") (param v128 v128) (result v128) (i32x4.min_s (local.get 0) (local.get 1)))
  (func (export "i32x4.min_u") (param v128 v128) (result v128) (i32x4.min_u (local.get 0) (local.get 1)))
  (func (export "i32x4.max_s") (param v128 v128) (result v128) (i32x4.max_s (local.get 0) (local.get 1)))
  (func (export "i32x4.max_u") (param v128 v128) (result v128) (i32x4.max_u (local.get 0) (local.get 1)))
  (func (export "i32x4.abs") (param v128) (result v128) (i32x4.abs (local.get 0)))
  (func (export "i32x4.min_s_with_const_0") (result v128) (i32x4.min_s (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295) (v128.const i32x4 4294967295 1073741824 2147483647 -2147483648)))
  (func (export "i32x4.min_s_with_const_1") (result v128) (i32x4.min_s (v128.const i32x4 0 1 2 3) (v128.const i32x4 3 2 1 0)))
  (func (export "i32x4.min_u_with_const_2") (result v128) (i32x4.min_u (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295) (v128.const i32x4 4294967295 1073741824 2147483647 -2147483648)))
  (func (export "i32x4.min_u_with_const_3") (result v128) (i32x4.min_u (v128.const i32x4 0 1 2 3) (v128.const i32x4 3 2 1 0)))
  (func (export "i32x4.max_s_with_const_4") (result v128) (i32x4.max_s (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295) (v128.const i32x4 4294967295 1073741824 2147483647 -2147483648)))
  (func (export "i32x4.max_s_with_const_5") (result v128) (i32x4.max_s (v128.const i32x4 0 1 2 3) (v128.const i32x4 3 2 1 0)))
  (func (export "i32x4.max_u_with_const_6") (result v128) (i32x4.max_u (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295) (v128.const i32x4 4294967295 1073741824 2147483647 -2147483648)))
  (func (export "i32x4.max_u_with_const_7") (result v128) (i32x4.max_u (v128.const i32x4 0 1 2 3) (v128.const i32x4 3 2 1 0)))
  (func (export "i32x4.abs_with_const_8") (result v128) (i32x4.abs (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295)))
  (func (export "i32x4.min_s_with_const_9") (param v128) (result v128) (i32x4.min_s (local.get 0) (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295)))
  (func (export "i32x4.min_s_with_const_10") (param v128) (result v128) (i32x4.min_s (local.get 0) (v128.const i32x4 0 1 2 3)))
  (func (export "i32x4.min_u_with_const_11") (param v128) (result v128) (i32x4.min_u (local.get 0) (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295)))
  (func (export "i32x4.min_u_with_const_12") (param v128) (result v128) (i32x4.min_u (local.get 0) (v128.const i32x4 0 1 2 3)))
  (func (export "i32x4.max_s_with_const_13") (param v128) (result v128) (i32x4.max_s (local.get 0) (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295)))
  (func (export "i32x4.max_s_with_const_14") (param v128) (result v128) (i32x4.max_s (local.get 0) (v128.const i32x4 0 1 2 3)))
  (func (export "i32x4.max_u_with_const_15") (param v128) (result v128) (i32x4.max_u (local.get 0) (v128.const i32x4 -2147483648 2147483647 1073741824 4294967295)))
  (func (export "i32x4.max_u_with_const_16") (param v128) (result v128) (i32x4.max_u (local.get 0) (v128.const i32x4 0 1 2 3)))
)`);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
  ]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x80, 0x80, 0x80, 0x80]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
  ]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x80, 0x80, 0x80, 0x80]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
  ]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x80, 0x80, 0x80, 0x80]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0xffffffff, 0x0, 0xffffffff]),
  ]),
  [i32x4([0x0, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
    i32x4([0x7b, 0x7b, 0x7b, 0x7b]),
  ]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x80, 0x80, 0x80, 0x80]),
    i32x4([0x80, 0x80, 0x80, 0x80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x1, 0x1, 0x1, 0x1])]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x7b, 0x7b, 0x7b, 0x7b])]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffff85, 0xffffff85, 0xffffff85, 0xffffff85]),
  ]),
  [i32x4([0x7b, 0x7b, 0x7b, 0x7b])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x80, 0x80, 0x80, 0x80])]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffff80, 0xffffff80, 0xffffff80, 0xffffff80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x80, 0x80, 0x80, 0x80])]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0xffffff80, 0xffffff80, 0xffffff80, 0xffffff80]),
  ]),
  [i32x4([0x80, 0x80, 0x80, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.min_s_with_const_0`, []),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(() => invoke($0, `i32x4.min_s_with_const_1`, []), [i32x4([0x0, 0x1, 0x1, 0x0])]);


assert_return(
  () => invoke($0, `i32x4.min_u_with_const_2`, []),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(() => invoke($0, `i32x4.min_u_with_const_3`, []), [i32x4([0x0, 0x1, 0x1, 0x0])]);


assert_return(
  () => invoke($0, `i32x4.max_s_with_const_4`, []),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(() => invoke($0, `i32x4.max_s_with_const_5`, []), [i32x4([0x3, 0x2, 0x2, 0x3])]);


assert_return(
  () => invoke($0, `i32x4.max_u_with_const_6`, []),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(() => invoke($0, `i32x4.max_u_with_const_7`, []), [i32x4([0x3, 0x2, 0x2, 0x3])]);


assert_return(
  () => invoke($0, `i32x4.abs_with_const_8`, []),
  [i32x4([0x80000000, 0x7fffffff, 0x40000000, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.min_s_with_const_9`, [
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_s_with_const_10`, [i32x4([0x3, 0x2, 0x1, 0x0])]),
  [i32x4([0x0, 0x1, 0x1, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u_with_const_11`, [
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_u_with_const_12`, [i32x4([0x3, 0x2, 0x1, 0x0])]),
  [i32x4([0x0, 0x1, 0x1, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s_with_const_13`, [
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_s_with_const_14`, [i32x4([0x3, 0x2, 0x1, 0x0])]),
  [i32x4([0x3, 0x2, 0x2, 0x3])],
);


assert_return(
  () => invoke($0, `i32x4.max_u_with_const_15`, [
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u_with_const_16`, [i32x4([0x3, 0x2, 0x1, 0x0])]),
  [i32x4([0x3, 0x2, 0x2, 0x3])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x80000000, 0x7fffffff, 0x40000000, 0xffffffff]),
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x1, 0x2, 0x80]),
    i32x4([0x0, 0x2, 0x1, 0x80]),
  ]),
  [i32x4([0x0, 0x1, 0x1, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x80000000, 0x7fffffff, 0x40000000, 0xffffffff]),
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0x80000000, 0x40000000, 0x40000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x1, 0x2, 0x80]),
    i32x4([0x0, 0x2, 0x1, 0x80]),
  ]),
  [i32x4([0x0, 0x1, 0x1, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x80000000, 0x7fffffff, 0x40000000, 0xffffffff]),
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x1, 0x2, 0x80]),
    i32x4([0x0, 0x2, 0x1, 0x80]),
  ]),
  [i32x4([0x0, 0x2, 0x2, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x80000000, 0x7fffffff, 0x40000000, 0xffffffff]),
    i32x4([0xffffffff, 0x40000000, 0x7fffffff, 0x80000000]),
  ]),
  [i32x4([0xffffffff, 0x7fffffff, 0x7fffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x1, 0x2, 0x80]),
    i32x4([0x0, 0x2, 0x1, 0x80]),
  ]),
  [i32x4([0x0, 0x2, 0x2, 0x80])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [
    i32x4([0x80000000, 0x7fffffff, 0x40000000, 0xffffffff]),
  ]),
  [i32x4([0x80000000, 0x7fffffff, 0x40000000, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.abs`, [i32x4([0x0, 0x0, 0x0, 0x0])]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f32x4.min_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f32x4.min_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f32x4.max_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f32x4.max_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (i64x2.min_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (i64x2.min_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (i64x2.max_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (i64x2.max_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f64x2.min_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f64x2.min_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f64x2.max_s (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_malformed(
  () => instantiate(`(memory 1) (func (result v128) (f64x2.max_u (v128.const i32x4 0 0 0 0) (v128.const i32x4 1 1 1 1))) `),
  `unknown operator`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.min_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.min_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.max_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.max_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.abs (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.min_s-1st-arg-empty (result v128)
      (i32x4.min_s (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.min_s-arg-empty (result v128)
      (i32x4.min_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.min_u-1st-arg-empty (result v128)
      (i32x4.min_u (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.min_u-arg-empty (result v128)
      (i32x4.min_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.max_s-1st-arg-empty (result v128)
      (i32x4.max_s (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.max_s-arg-empty (result v128)
      (i32x4.max_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.max_u-1st-arg-empty (result v128)
      (i32x4.max_u (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.max_u-arg-empty (result v128)
      (i32x4.max_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.abs-arg-empty (result v128)
      (i32x4.abs)
    )
  )`),
  `type mismatch`,
);


let $1 = instantiate(`(module
  (func (export "i32x4.min_s-i32x4.max_u") (param v128 v128 v128) (result v128) (i32x4.min_s (i32x4.max_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_s-i32x4.max_s") (param v128 v128 v128) (result v128) (i32x4.min_s (i32x4.max_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_s-i32x4.min_u") (param v128 v128 v128) (result v128) (i32x4.min_s (i32x4.min_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_s-i32x4.min_s") (param v128 v128 v128) (result v128) (i32x4.min_s (i32x4.min_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_s-i32x4.abs") (param v128 v128) (result v128) (i32x4.min_s (i32x4.abs (local.get 0))(local.get 1)))
  (func (export "i32x4.abs-i32x4.min_s") (param v128 v128) (result v128) (i32x4.abs (i32x4.min_s (local.get 0) (local.get 1))))
  (func (export "i32x4.min_u-i32x4.max_u") (param v128 v128 v128) (result v128) (i32x4.min_u (i32x4.max_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_u-i32x4.max_s") (param v128 v128 v128) (result v128) (i32x4.min_u (i32x4.max_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_u-i32x4.min_u") (param v128 v128 v128) (result v128) (i32x4.min_u (i32x4.min_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_u-i32x4.min_s") (param v128 v128 v128) (result v128) (i32x4.min_u (i32x4.min_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.min_u-i32x4.abs") (param v128 v128) (result v128) (i32x4.min_u (i32x4.abs (local.get 0))(local.get 1)))
  (func (export "i32x4.abs-i32x4.min_u") (param v128 v128) (result v128) (i32x4.abs (i32x4.min_u (local.get 0) (local.get 1))))
  (func (export "i32x4.max_s-i32x4.max_u") (param v128 v128 v128) (result v128) (i32x4.max_s (i32x4.max_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_s-i32x4.max_s") (param v128 v128 v128) (result v128) (i32x4.max_s (i32x4.max_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_s-i32x4.min_u") (param v128 v128 v128) (result v128) (i32x4.max_s (i32x4.min_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_s-i32x4.min_s") (param v128 v128 v128) (result v128) (i32x4.max_s (i32x4.min_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_s-i32x4.abs") (param v128 v128) (result v128) (i32x4.max_s (i32x4.abs (local.get 0))(local.get 1)))
  (func (export "i32x4.abs-i32x4.max_s") (param v128 v128) (result v128) (i32x4.abs (i32x4.max_s (local.get 0) (local.get 1))))
  (func (export "i32x4.max_u-i32x4.max_u") (param v128 v128 v128) (result v128) (i32x4.max_u (i32x4.max_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_u-i32x4.max_s") (param v128 v128 v128) (result v128) (i32x4.max_u (i32x4.max_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_u-i32x4.min_u") (param v128 v128 v128) (result v128) (i32x4.max_u (i32x4.min_u (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_u-i32x4.min_s") (param v128 v128 v128) (result v128) (i32x4.max_u (i32x4.min_s (local.get 0) (local.get 1))(local.get 2)))
  (func (export "i32x4.max_u-i32x4.abs") (param v128 v128) (result v128) (i32x4.max_u (i32x4.abs (local.get 0))(local.get 1)))
  (func (export "i32x4.abs-i32x4.max_u") (param v128 v128) (result v128) (i32x4.abs (i32x4.max_u (local.get 0) (local.get 1))))
  (func (export "i32x4.abs-i32x4.abs") (param v128) (result v128) (i32x4.abs (i32x4.abs (local.get 0))))
)`);


assert_return(
  () => invoke($1, `i32x4.min_s-i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.min_s-i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.min_s-i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.min_s-i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.min_s-i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.abs-i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.min_u-i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.min_u-i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.min_u-i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.min_u-i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.min_u-i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.abs-i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.max_s-i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_s-i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_s-i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_s-i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_s-i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.abs-i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($1, `i32x4.max_u-i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_u-i32x4.max_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_u-i32x4.min_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_u-i32x4.min_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x2, 0x2, 0x2, 0x2]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($1, `i32x4.max_u-i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.abs-i32x4.max_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($1, `i32x4.abs-i32x4.abs`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);
