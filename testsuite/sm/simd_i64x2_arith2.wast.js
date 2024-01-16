






let $0 = instantiate(`(module
  (func (export "i64x2.abs") (param v128) (result v128) (i64x2.abs (local.get 0)))
  (func (export "i64x2.abs_with_const_0") (result v128) (i64x2.abs (v128.const i64x2 -9223372036854775808 9223372036854775807)))
)`);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x1n, 0x1n])]), [i64x2([0x1n, 0x1n])]);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x7bn, 0x7bn])]), [i64x2([0x7bn, 0x7bn])]);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffff85n, 0xffffffffffffff85n])]),
  [i64x2([0x7bn, 0x7bn])],
);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x80n, 0x80n])]), [i64x2([0x80n, 0x80n])]);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffff80n, 0xffffffffffffff80n])]),
  [i64x2([0x80n, 0x80n])],
);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x80n, 0x80n])]), [i64x2([0x80n, 0x80n])]);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0xffffffffffffff80n, 0xffffffffffffff80n])]),
  [i64x2([0x80n, 0x80n])],
);


assert_return(
  () => invoke($0, `i64x2.abs_with_const_0`, []),
  [i64x2([0x8000000000000000n, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.abs`, [i64x2([0x8000000000000000n, 0x7fffffffffffffffn])]),
  [i64x2([0x8000000000000000n, 0x7fffffffffffffffn])],
);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($0, `i64x2.abs`, [i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.abs (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.abs-arg-empty (result v128)
      (i64x2.abs)
    )
  )`),
  `type mismatch`,
);


let $1 = instantiate(`(module
  (func (export "i64x2.abs-i64x2.abs") (param v128) (result v128) (i64x2.abs (i64x2.abs (local.get 0))))
)`);


assert_return(
  () => invoke($1, `i64x2.abs-i64x2.abs`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);
