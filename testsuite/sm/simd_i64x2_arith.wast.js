






let $0 = instantiate(`(module
  (func (export "i64x2.add") (param v128 v128) (result v128) (i64x2.add (local.get 0) (local.get 1)))
  (func (export "i64x2.sub") (param v128 v128) (result v128) (i64x2.sub (local.get 0) (local.get 1)))
  (func (export "i64x2.mul") (param v128 v128) (result v128) (i64x2.mul (local.get 0) (local.get 1)))
  (func (export "i64x2.neg") (param v128) (result v128) (i64x2.neg (local.get 0)))
)`);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x0n, 0x0n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x1n, 0x1n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0x2n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x0n, 0x0n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1n, 0x1n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xbfffffffffffffffn, 0xbfffffffffffffffn]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7ffffffffffffffdn, 0x7ffffffffffffffdn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000002n, 0x8000000000000002n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x0n, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xfbfffffff0000001n, 0xfbfffffff0000001n]),
  ]),
  [i64x2([0xbbfffffff0000002n, 0xbbfffffff0000002n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfc00000000000000n, 0xfc00000000000000n]),
  ]),
  [i64x2([0xbc00000000000000n, 0xbc00000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfbffffffffffffffn, 0xfbffffffffffffffn]),
  ]),
  [i64x2([0xbbffffffffffffffn, 0xbbffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7ffffffffffffffn, 0x7ffffffffffffffn]),
  ]),
  [i64x2([0x87fffffffffffffen, 0x87fffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x80, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x80]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1n, 0x1n]),
    i8x16([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i16x8([0x0, 0x0, 0x0, 0x8000, 0x0, 0x0, 0x0, 0x8000]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1n, 0x1n]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i32x4([0x0, 0x80000000, 0x0, 0x80000000]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1n, 0x1n]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([0, 0]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([-0, -0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([1, 1]),
  ]),
  [i64x2([0xbff0000000000000n, 0xbff0000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([-1, -1]),
  ]),
  [i64x2([0x3ff0000000000000n, 0x3ff0000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x1n, 0x1n]), f64x2([Infinity, Infinity])]),
  [i64x2([0x7ff0000000000001n, 0x7ff0000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x1n, 0x1n]), f64x2([-Infinity, -Infinity])]),
  [i64x2([0xfff0000000000001n, 0xfff0000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1n, 0x1n]),
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
  [i64x2([0x7ff8000000000001n, 0x7ff8000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [i64x2([0x0n, 0x1n]), i64x2([0x0n, 0x2n])]),
  [i64x2([0x0n, 0x3n])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x112210f47de98115n, 0x112210f47de98115n]),
    i64x2([0x112210f47de98115n, 0x112210f47de98115n]),
  ]),
  [i64x2([0x224421e8fbd3022an, 0x224421e8fbd3022an])],
);


assert_return(
  () => invoke($0, `i64x2.add`, [
    i64x2([0x1234567890abcdefn, 0x1234567890abcdefn]),
    i64x2([0x90abcdef12345678n, 0x90abcdef12345678n]),
  ]),
  [i64x2([0xa2e02467a2e02467n, 0xa2e02467a2e02467n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x0n, 0x0n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x1n, 0x1n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x0n, 0x0n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x1n, 0x1n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x2n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xbfffffffffffffffn, 0xbfffffffffffffffn]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7ffffffffffffffdn, 0x7ffffffffffffffdn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffcn, 0x7ffffffffffffffcn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffdn, 0x7ffffffffffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000002n, 0x8000000000000002n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000003n, 0x8000000000000003n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000002n, 0x8000000000000002n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x0n, 0x0n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xfbfffffff0000001n, 0xfbfffffff0000001n]),
  ]),
  [i64x2([0xc400000010000000n, 0xc400000010000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfc00000000000000n, 0xfc00000000000000n]),
  ]),
  [i64x2([0xc400000000000000n, 0xc400000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfbffffffffffffffn, 0xfbffffffffffffffn]),
  ]),
  [i64x2([0xc400000000000001n, 0xc400000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7ffffffffffffffn, 0x7ffffffffffffffn]),
  ]),
  [i64x2([0x7800000000000000n, 0x7800000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0xfffffffffffffffen, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x80, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x80]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x1n, 0x1n]),
    i8x16([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ]),
  [i64x2([0x2n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i16x8([0x0, 0x0, 0x0, 0x8000, 0x0, 0x0, 0x0, 0x8000]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x1n, 0x1n]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i64x2([0x2n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i32x4([0x0, 0x80000000, 0x0, 0x80000000]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x1n, 0x1n]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x2n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([0, 0]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([-0, -0]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([1, 1]),
  ]),
  [i64x2([0x4010000000000000n, 0x4010000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    f64x2([-1, -1]),
  ]),
  [i64x2([0xc010000000000000n, 0xc010000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x1n, 0x1n]), f64x2([Infinity, Infinity])]),
  [i64x2([0x8010000000000001n, 0x8010000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x1n, 0x1n]), f64x2([-Infinity, -Infinity])]),
  [i64x2([0x10000000000001n, 0x10000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x1n, 0x1n]),
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
  [i64x2([0x8008000000000001n, 0x8008000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [i64x2([0x0n, 0x1n]), i64x2([0x0n, 0x2n])]),
  [i64x2([0x0n, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x2c9c7076ed2f8115n, 0x2c9c7076ed2f8115n]),
    i64x2([0x112210f47de98115n, 0x112210f47de98115n]),
  ]),
  [i64x2([0x1b7a5f826f460000n, 0x1b7a5f826f460000n])],
);


assert_return(
  () => invoke($0, `i64x2.sub`, [
    i64x2([0x90abcdef87654321n, 0x90abcdef87654321n]),
    i64x2([0x1234567890abcdefn, 0x1234567890abcdefn]),
  ]),
  [i64x2([0x7e777776f6b97532n, 0x7e777776f6b97532n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x0n, 0x0n]), i64x2([0x0n, 0x0n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x0n, 0x0n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x1n, 0x1n]), i64x2([0x1n, 0x1n])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x0n, 0x0n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x1n, 0x1n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0xc000000000000000n, 0xc000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0xc000000000000000n, 0xc000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xbfffffffffffffffn, 0xbfffffffffffffffn]),
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7ffffffffffffffdn, 0x7ffffffffffffffdn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffdn, 0x7ffffffffffffffdn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000002n, 0x8000000000000002n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000001n, 0x8000000000000001n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x0n, 0x0n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x3fffffffffffffffn, 0x3fffffffffffffffn]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0xc000000000000000n, 0xc000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
    i64x2([0x4000000000000000n, 0x4000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xc000000000000001n, 0xc000000000000001n]),
    i64x2([0xfbfffffff0000001n, 0xfbfffffff0000001n]),
  ]),
  [i64x2([0xbbfffffff0000001n, 0xbbfffffff0000001n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfc00000000000000n, 0xfc00000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xc000000000000000n, 0xc000000000000000n]),
    i64x2([0xfbffffffffffffffn, 0xfbffffffffffffffn]),
  ]),
  [i64x2([0x4000000000000000n, 0x4000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x7ffffffffffffffn, 0x7ffffffffffffffn]),
  ]),
  [i64x2([0x7800000000000001n, 0x7800000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0x1n, 0x1n]),
  ]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i8x16([0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2, 0x2]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i8x16([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i16x8([0x0, 0x0, 0x0, 0x2, 0x0, 0x0, 0x0, 0x2]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x8000000000000000n, 0x8000000000000000n]),
    i32x4([0x0, 0x2, 0x0, 0x2]),
  ]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0xffffffffffffffffn, 0xffffffffffffffffn]),
    i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff]),
  ]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x80000000n, 0x80000000n]), f64x2([0, 0])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x80000000n, 0x80000000n]), f64x2([-0, -0])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x80000000n, 0x80000000n]), f64x2([1, 1])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x80000000n, 0x80000000n]), f64x2([-1, -1])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x1n, 0x1n]), f64x2([Infinity, Infinity])]),
  [i64x2([0x7ff0000000000000n, 0x7ff0000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x1n, 0x1n]), f64x2([-Infinity, -Infinity])]),
  [i64x2([0xfff0000000000000n, 0xfff0000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x1n, 0x1n]),
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
  [i64x2([0x7ff8000000000000n, 0x7ff8000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0xffffffffffffffffn]),
  ]),
  [i64x2([0x0n, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [i64x2([0x0n, 0x1n]), i64x2([0x0n, 0x2n])]),
  [i64x2([0x0n, 0x2n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x112210f47de98115n, 0x112210f47de98115n]),
    i64x2([0x112210f47de98115n, 0x112210f47de98115n]),
  ]),
  [i64x2([0x86c28d12bb502bb9n, 0x86c28d12bb502bb9n])],
);


assert_return(
  () => invoke($0, `i64x2.mul`, [
    i64x2([0x1234567890abcdefn, 0x1234567890abcdefn]),
    i64x2([0x90abcdef87654321n, 0x90abcdef87654321n]),
  ]),
  [i64x2([0x602f05e9e55618cfn, 0x602f05e9e55618cfn])],
);


assert_return(() => invoke($0, `i64x2.neg`, [i64x2([0x0n, 0x0n])]), [i64x2([0x0n, 0x0n])]);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x1n, 0x1n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x7ffffffffffffffen, 0x7ffffffffffffffen])]),
  [i64x2([0x8000000000000002n, 0x8000000000000002n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x8000000000000001n, 0x8000000000000001n])]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x1n, 0x1n])]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x8000000000000001n, 0x8000000000000001n])]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])]),
  [i64x2([0x8000000000000001n, 0x8000000000000001n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0x8000000000000000n, 0x8000000000000000n])]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.neg`, [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])]),
  [i64x2([0x1n, 0x1n])],
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.neg (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.add (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.sub (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) (i64x2.mul (i32.const 0) (f32.const 0.0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.neg-arg-empty (result v128)
      (i64x2.neg)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.add-1st-arg-empty (result v128)
      (i64x2.add (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.add-arg-empty (result v128)
      (i64x2.add)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.sub-1st-arg-empty (result v128)
      (i64x2.sub (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.sub-arg-empty (result v128)
      (i64x2.sub)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.mul-1st-arg-empty (result v128)
      (i64x2.mul (v128.const i64x2 0 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.mul-arg-empty (result v128)
      (i64x2.mul)
    )
  )`),
  `type mismatch`,
);


let $1 = instantiate(`(module
  (func (export "add-sub") (param v128 v128 v128) (result v128)
    (i64x2.add (i64x2.sub (local.get 0) (local.get 1))(local.get 2)))
  (func (export "mul-add") (param v128 v128 v128) (result v128)
    (i64x2.mul (i64x2.add (local.get 0) (local.get 1))(local.get 2)))
  (func (export "mul-sub") (param v128 v128 v128) (result v128)
    (i64x2.mul (i64x2.sub (local.get 0) (local.get 1))(local.get 2)))
  (func (export "sub-add") (param v128 v128 v128) (result v128)
    (i64x2.sub (i64x2.add (local.get 0) (local.get 1))(local.get 2)))
  (func (export "add-neg") (param v128 v128) (result v128)
    (i64x2.add (i64x2.neg (local.get 0)) (local.get 1)))
  (func (export "mul-neg") (param v128 v128) (result v128)
    (i64x2.mul (i64x2.neg (local.get 0)) (local.get 1)))
  (func (export "sub-neg") (param v128 v128) (result v128)
    (i64x2.sub (i64x2.neg (local.get 0)) (local.get 1)))
)`);


assert_return(
  () => invoke($1, `add-sub`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0x2n]),
    i64x2([0x0n, 0x2n]),
  ]),
  [i64x2([0x0n, 0x1n])],
);


assert_return(
  () => invoke($1, `mul-add`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0x1n]),
    i64x2([0x2n, 0x2n]),
  ]),
  [i64x2([0x0n, 0x4n])],
);


assert_return(
  () => invoke($1, `mul-sub`, [
    i64x2([0x0n, 0x2n]),
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0x1n]),
  ]),
  [i64x2([0x0n, 0x1n])],
);


assert_return(
  () => invoke($1, `sub-add`, [
    i64x2([0x0n, 0x1n]),
    i64x2([0x0n, 0x2n]),
    i64x2([0x0n, 0x2n]),
  ]),
  [i64x2([0x0n, 0x1n])],
);


assert_return(
  () => invoke($1, `add-neg`, [i64x2([0x0n, 0x1n]), i64x2([0x0n, 0x1n])]),
  [i64x2([0x0n, 0x0n])],
);


assert_return(
  () => invoke($1, `mul-neg`, [i64x2([0x0n, 0x1n]), i64x2([0x2n, 0x2n])]),
  [i64x2([0x0n, 0xfffffffffffffffen])],
);


assert_return(
  () => invoke($1, `sub-neg`, [i64x2([0x0n, 0x1n]), i64x2([0x0n, 0x1n])]),
  [i64x2([0x0n, 0xfffffffffffffffen])],
);
