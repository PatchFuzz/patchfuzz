






let $0 = instantiate(`(module
  (func (export "i32x4.extadd_pairwise_i16x8_s") (param v128) (result v128) (i32x4.extadd_pairwise_i16x8_s (local.get 0)))
  (func (export "i32x4.extadd_pairwise_i16x8_u") (param v128) (result v128) (i32x4.extadd_pairwise_i16x8_u (local.get 0)))
)`);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffffffe, 0xfffffffe, 0xfffffffe, 0xfffffffe])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
  ]),
  [i32x4([0xfffc, 0xfffc, 0xfffc, 0xfffc])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0xffff0002, 0xffff0002, 0xffff0002, 0xffff0002])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0xffff0000, 0xffff0000, 0xffff0000, 0xffff0000])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0xfffe, 0xfffe, 0xfffe, 0xfffe])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_s`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0xfffffffe, 0xfffffffe, 0xfffffffe, 0xfffffffe])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ]),
  [i32x4([0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ]),
  [i32x4([0x2, 0x2, 0x2, 0x2])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1fffe, 0x1fffe, 0x1fffe, 0x1fffe])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe, 0x7ffe]),
  ]),
  [i32x4([0xfffc, 0xfffc, 0xfffc, 0xfffc])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001, 0x8001]),
  ]),
  [i32x4([0x10002, 0x10002, 0x10002, 0x10002])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000]),
  ]),
  [i32x4([0x10000, 0x10000, 0x10000, 0x10000])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff]),
  ]),
  [i32x4([0xfffe, 0xfffe, 0xfffe, 0xfffe])],
);


assert_return(
  () => invoke($0, `i32x4.extadd_pairwise_i16x8_u`, [
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i32x4([0x1fffe, 0x1fffe, 0x1fffe, 0x1fffe])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extadd_pairwise_i16x8_s (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i32x4.extadd_pairwise_i16x8_u (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extadd_pairwise_i16x8_s-arg-empty (result v128)
      (i32x4.extadd_pairwise_i16x8_s)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.extadd_pairwise_i16x8_u-arg-empty (result v128)
      (i32x4.extadd_pairwise_i16x8_u)
    )
  )`),
  `type mismatch`,
);
