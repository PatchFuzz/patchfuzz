






let $0 = instantiate(`(module
  (func (export "i64x2.extmul_low_i32x4_s") (param v128 v128) (result v128) (i64x2.extmul_low_i32x4_s (local.get 0) (local.get 1)))
  (func (export "i64x2.extmul_high_i32x4_s") (param v128 v128) (result v128) (i64x2.extmul_high_i32x4_s (local.get 0) (local.get 1)))
  (func (export "i64x2.extmul_low_i32x4_u") (param v128 v128) (result v128) (i64x2.extmul_low_i32x4_u (local.get 0) (local.get 1)))
  (func (export "i64x2.extmul_high_i32x4_u") (param v128 v128) (result v128) (i64x2.extmul_high_i32x4_u (local.get 0) (local.get 1)))
)`);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x3fffffff, 0x3fffffff, 0x3fffffff, 0x3fffffff]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xc0000001, 0xc0000001, 0xc0000001, 0xc0000001]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xbfffffff, 0xbfffffff, 0xbfffffff, 0xbfffffff]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x1000000040000000n, 0x1000000040000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x7ffffffd, 0x7ffffffd, 0x7ffffffd, 0x7ffffffd]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffdn, 0x7ffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x7ffffffe, 0x7ffffffe, 0x7ffffffe, 0x7ffffffe]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffff80000000n, 0xffffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000002, 0x80000002, 0x80000002, 0x80000002]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7fffffffn, 0x7fffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x3fffffff00000001n, 0x3fffffff00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
  ]),
  [i64x2([0x3fffffff80000000n, 0x3fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0xffffffff80000001n, 0xffffffff80000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x3fffffff, 0x3fffffff, 0x3fffffff, 0x3fffffff]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xc0000001, 0xc0000001, 0xc0000001, 0xc0000001]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xbfffffff, 0xbfffffff, 0xbfffffff, 0xbfffffff]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x1000000040000000n, 0x1000000040000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x7ffffffd, 0x7ffffffd, 0x7ffffffd, 0x7ffffffd]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffdn, 0x7ffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x7ffffffe, 0x7ffffffe, 0x7ffffffe, 0x7ffffffe]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffff80000000n, 0xffffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000002, 0x80000002, 0x80000002, 0x80000002]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7fffffffn, 0x7fffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x3fffffff00000001n, 0x3fffffff00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
  ]),
  [i64x2([0x3fffffff80000000n, 0x3fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0xffffffff80000001n, 0xffffffff80000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_s`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xffffffffn, 0xffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x3fffffff, 0x3fffffff, 0x3fffffff, 0x3fffffff]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xc0000001, 0xc0000001, 0xc0000001, 0xc0000001]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x90000000c0000000n, 0x90000000c0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x9000000000000000n, 0x9000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xbfffffff, 0xbfffffff, 0xbfffffff, 0xbfffffff]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x8fffffff40000000n, 0x8fffffff40000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x7ffffffd, 0x7ffffffd, 0x7ffffffd, 0x7ffffffd]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffdn, 0x7ffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x7ffffffe, 0x7ffffffe, 0x7ffffffe, 0x7ffffffe]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000002, 0x80000002, 0x80000002, 0x80000002]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x800000017ffffffen, 0x800000017ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x800000007fffffffn, 0x800000007fffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7fffffff80000000n, 0x7fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x3fffffff00000001n, 0x3fffffff00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
  ]),
  [i64x2([0x4000000080000000n, 0x4000000080000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffffn, 0xffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x7ffffffe80000001n, 0x7ffffffe80000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x7fffffff80000000n, 0x7fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_low_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x0, 0x0, 0x0, 0x0]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x1, 0x1, 0x1, 0x1]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xffffffffn, 0xffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x3fffffff, 0x3fffffff, 0x3fffffff, 0x3fffffff]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0xfffffffc0000000n, 0xfffffffc0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
    i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000]),
  ]),
  [i64x2([0x1000000000000000n, 0x1000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xc0000001, 0xc0000001, 0xc0000001, 0xc0000001]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x90000000c0000000n, 0x90000000c0000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x9000000000000000n, 0x9000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xbfffffff, 0xbfffffff, 0xbfffffff, 0xbfffffff]),
    i32x4([0xc0000000, 0xc0000000, 0xc0000000, 0xc0000000]),
  ]),
  [i64x2([0x8fffffff40000000n, 0x8fffffff40000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x7ffffffd, 0x7ffffffd, 0x7ffffffd, 0x7ffffffd]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffdn, 0x7ffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x7ffffffe, 0x7ffffffe, 0x7ffffffe, 0x7ffffffe]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x7ffffffen, 0x7ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000002, 0x80000002, 0x80000002, 0x80000002]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x800000017ffffffen, 0x800000017ffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x800000007fffffffn, 0x800000007fffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x7fffffff80000000n, 0x7fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x3fffffff00000001n, 0x3fffffff00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
    i32x4([0x80000001, 0x80000001, 0x80000001, 0x80000001]),
  ]),
  [i64x2([0x4000000080000000n, 0x4000000080000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x0, 0x0, 0x0, 0x0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x1, 0x1, 0x1, 0x1]),
  ]),
  [i64x2([0xffffffffn, 0xffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff]),
  ]),
  [i64x2([0x7ffffffe80000001n, 0x7ffffffe80000001n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000]),
  ]),
  [i64x2([0x7fffffff80000000n, 0x7fffffff80000000n])],
);


assert_return(
  () => invoke($0, `i64x2.extmul_high_i32x4_u`, [
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0xfffffffe00000001n, 0xfffffffe00000001n])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.extmul_low_i32x4_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.extmul_high_i32x4_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.extmul_low_i32x4_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.extmul_high_i32x4_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_low_i32x4_s-1st-arg-empty (result v128)
      (i64x2.extmul_low_i32x4_s (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_low_i32x4_s-arg-empty (result v128)
      (i64x2.extmul_low_i32x4_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_high_i32x4_s-1st-arg-empty (result v128)
      (i64x2.extmul_high_i32x4_s (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_high_i32x4_s-arg-empty (result v128)
      (i64x2.extmul_high_i32x4_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_low_i32x4_u-1st-arg-empty (result v128)
      (i64x2.extmul_low_i32x4_u (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_low_i32x4_u-arg-empty (result v128)
      (i64x2.extmul_low_i32x4_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_high_i32x4_u-1st-arg-empty (result v128)
      (i64x2.extmul_high_i32x4_u (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.extmul_high_i32x4_u-arg-empty (result v128)
      (i64x2.extmul_high_i32x4_u)
    )
  )`),
  `type mismatch`,
);
