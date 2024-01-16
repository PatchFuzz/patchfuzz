






let $0 = instantiate(`(module
  (func (export "i32x4.extmul_low_i16x8_s") (param v128 v128) (result v128) (i32x4.extmul_low_i16x8_s (local.get 0) (local.get 1)))
  (func (export "i32x4.extmul_high_i16x8_s") (param v128 v128) (result v128) (i32x4.extmul_high_i16x8_s (local.get 0) (local.get 1)))
  (func (export "i32x4.extmul_low_i16x8_u") (param v128 v128) (result v128) (i32x4.extmul_low_i16x8_u (local.get 0) (local.get 1)))
  (func (export "i32x4.extmul_high_i16x8_u") (param v128 v128) (result v128) (i32x4.extmul_high_i16x8_u (local.get 0) (local.get 1)))
)`);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x10004000, 0x10004000, 0x10004000, 0x10004000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffff8000, 0xffff8000, 0xffff8000, 0xffff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x3fff0001, 0x3fff0001, 0x3fff0001, 0x3fff0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0x3fff8000, 0x3fff8000, 0x3fff8000, 0x3fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0xffff8001, 0xffff8001, 0xffff8001, 0xffff8001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x10004000, 0x10004000, 0x10004000, 0x10004000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffff8000, 0xffff8000, 0xffff8000, 0xffff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x3fff0001, 0x3fff0001, 0x3fff0001, 0x3fff0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0x3fff8000, 0x3fff8000, 0x3fff8000, 0x3fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0xffff8001, 0xffff8001, 0xffff8001, 0xffff8001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x9000c000, 0x9000c000, 0x9000c000, 0x9000c000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x90000000, 0x90000000, 0x90000000, 0x90000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x8fff4000, 0x8fff4000, 0x8fff4000, 0x8fff4000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x80017ffe, 0x80017ffe, 0x80017ffe, 0x80017ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x80007fff, 0x80007fff, 0x80007fff, 0x80007fff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7fff8000, 0x7fff8000, 0x7fff8000, 0x7fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x3fff0001, 0x3fff0001, 0x3fff0001, 0x3fff0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0x40008000, 0x40008000, 0x40008000, 0x40008000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x7ffe8001, 0x7ffe8001, 0x7ffe8001, 0x7ffe8001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x7fff8000, 0x7fff8000, 0x7fff8000, 0x7fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_low_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff, 0x3fff]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0xfffc000, 0xfffc000, 0xfffc000, 0xfffc000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
    i16x8([0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000, 0x4000]),
  ]),
  [i32x4([0x10000000, 0x10000000, 0x10000000, 0x10000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001, 0xc001]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x9000c000, 0x9000c000, 0x9000c000, 0x9000c000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x90000000, 0x90000000, 0x90000000, 0x90000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff, 0xbfff]),
    i16x8([0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000, 0xc000]),
  ]),
  [i32x4([0x8fff4000, 0x8fff4000, 0x8fff4000, 0x8fff4000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffd, 0x7ffd, 0x7ffd, 0x7ffd])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002, 0x8002]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x80017ffe, 0x80017ffe, 0x80017ffe, 0x80017ffe])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x80007fff, 0x80007fff, 0x80007fff, 0x80007fff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x7fff8000, 0x7fff8000, 0x7fff8000, 0x7fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x3fff0001, 0x3fff0001, 0x3fff0001, 0x3fff0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x40000000, 0x40000000, 0x40000000, 0x40000000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0x40008000, 0x40008000, 0x40008000, 0x40008000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0x7ffe8001, 0x7ffe8001, 0x7ffe8001, 0x7ffe8001])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x7fff8000, 0x7fff8000, 0x7fff8000, 0x7fff8000])],
);


assert_return(
  () => invoke($0, `i32x4.extmul_high_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffe0001, 0xfffe0001, 0xfffe0001, 0xfffe0001])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extmul_low_i16x8_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extmul_high_i16x8_s (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extmul_low_i16x8_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extmul_high_i16x8_u (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_low_i16x8_s-1st-arg-empty (result v128)
      (i32x4.extmul_low_i16x8_s (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_low_i16x8_s-arg-empty (result v128)
      (i32x4.extmul_low_i16x8_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_high_i16x8_s-1st-arg-empty (result v128)
      (i32x4.extmul_high_i16x8_s (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_high_i16x8_s-arg-empty (result v128)
      (i32x4.extmul_high_i16x8_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_low_i16x8_u-1st-arg-empty (result v128)
      (i32x4.extmul_low_i16x8_u (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_low_i16x8_u-arg-empty (result v128)
      (i32x4.extmul_low_i16x8_u)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_high_i16x8_u-1st-arg-empty (result v128)
      (i32x4.extmul_high_i16x8_u (v128.const i32x4 0 0 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extmul_high_i16x8_u-arg-empty (result v128)
      (i32x4.extmul_high_i16x8_u)
    )
  )`),
  `type mismatch`,
);