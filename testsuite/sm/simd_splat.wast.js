






let $0 = instantiate(`(module
  (func (export "i8x16.splat") (param i32) (result v128) (i8x16.splat (local.get 0)))
  (func (export "i16x8.splat") (param i32) (result v128) (i16x8.splat (local.get 0)))
  (func (export "i32x4.splat") (param i32) (result v128) (i32x4.splat (local.get 0)))
  (func (export "f32x4.splat") (param f32) (result v128) (f32x4.splat (local.get 0)))
  (func (export "i64x2.splat") (param i64) (result v128) (i64x2.splat (local.get 0)))
  (func (export "f64x2.splat") (param f64) (result v128) (f64x2.splat (local.get 0)))
)`);


assert_return(
  () => invoke($0, `i8x16.splat`, [0]),
  [
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [5]),
  [
    i8x16([0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [-5]),
  [
    i8x16([0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [257]),
  [
    i8x16([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [255]),
  [
    i8x16([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [-128]),
  [
    i8x16([0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [127]),
  [
    i8x16([0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [-129]),
  [
    i8x16([0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [128]),
  [
    i8x16([0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [65407]),
  [
    i8x16([0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [128]),
  [
    i8x16([0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80]),
  ],
);


assert_return(
  () => invoke($0, `i8x16.splat`, [171]),
  [i32x4([0xabababab, 0xabababab, 0xabababab, 0xabababab])],
);


assert_return(() => invoke($0, `i16x8.splat`, [0]), [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `i16x8.splat`, [5]), [i16x8([0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5, 0x5])]);


assert_return(
  () => invoke($0, `i16x8.splat`, [-5]),
  [i16x8([0xfffb, 0xfffb, 0xfffb, 0xfffb, 0xfffb, 0xfffb, 0xfffb, 0xfffb])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [65537]),
  [i16x8([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [65535]),
  [i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [-32768]),
  [i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [32767]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [-32769]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [32768]),
  [i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [-32769]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [32768]),
  [i16x8([0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000, 0x8000])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [43981]),
  [i32x4([0xabcdabcd, 0xabcdabcd, 0xabcdabcd, 0xabcdabcd])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [12345]),
  [i16x8([0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039, 0x3039])],
);


assert_return(
  () => invoke($0, `i16x8.splat`, [4660]),
  [i16x8([0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234, 0x1234])],
);


assert_return(() => invoke($0, `i32x4.splat`, [0]), [i32x4([0x0, 0x0, 0x0, 0x0])]);


assert_return(() => invoke($0, `i32x4.splat`, [5]), [i32x4([0x5, 0x5, 0x5, 0x5])]);


assert_return(
  () => invoke($0, `i32x4.splat`, [-5]),
  [i32x4([0xfffffffb, 0xfffffffb, 0xfffffffb, 0xfffffffb])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [-1]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [-1]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [-2147483648]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [2147483647]),
  [i32x4([0x7fffffff, 0x7fffffff, 0x7fffffff, 0x7fffffff])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [-2147483648]),
  [i32x4([0x80000000, 0x80000000, 0x80000000, 0x80000000])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [1234567890]),
  [i32x4([0x499602d2, 0x499602d2, 0x499602d2, 0x499602d2])],
);


assert_return(
  () => invoke($0, `i32x4.splat`, [305419896]),
  [i32x4([0x12345678, 0x12345678, 0x12345678, 0x12345678])],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 0)]),
  [
    new F32x4Pattern(
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
      value("f32", 0),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 1.1)]),
  [
    new F32x4Pattern(
      value("f32", 1.1),
      value("f32", 1.1),
      value("f32", 1.1),
      value("f32", 1.1),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", -1.1)]),
  [
    new F32x4Pattern(
      value("f32", -1.1),
      value("f32", -1.1),
      value("f32", -1.1),
      value("f32", -1.1),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", 100000000000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", 100000000000000000000000000000000000000),
      value("f32", 100000000000000000000000000000000000000),
      value("f32", 100000000000000000000000000000000000000),
      value("f32", 100000000000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", -100000000000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", -100000000000000000000000000000000000000),
      value("f32", -100000000000000000000000000000000000000),
      value("f32", -100000000000000000000000000000000000000),
      value("f32", -100000000000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
      value("f32", 340282350000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
      value("f32", -340282350000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", 170141180000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", 170141180000000000000000000000000000000),
      value("f32", 170141180000000000000000000000000000000),
      value("f32", 170141180000000000000000000000000000000),
      value("f32", 170141180000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [
    value("f32", -170141180000000000000000000000000000000),
  ]),
  [
    new F32x4Pattern(
      value("f32", -170141180000000000000000000000000000000),
      value("f32", -170141180000000000000000000000000000000),
      value("f32", -170141180000000000000000000000000000000),
      value("f32", -170141180000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", Infinity)]),
  [
    new F32x4Pattern(
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
      value("f32", Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", -Infinity)]),
  [
    new F32x4Pattern(
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
      value("f32", -Infinity),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [
    new F32x4Pattern(
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
      bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [bytes("f32", [0x1, 0x0, 0x80, 0x7f])]),
  [
    new F32x4Pattern(
      bytes("f32", [0x1, 0x0, 0x80, 0x7f]),
      bytes("f32", [0x1, 0x0, 0x80, 0x7f]),
      bytes("f32", [0x1, 0x0, 0x80, 0x7f]),
      bytes("f32", [0x1, 0x0, 0x80, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [bytes("f32", [0xff, 0xff, 0xff, 0x7f])]),
  [
    new F32x4Pattern(
      bytes("f32", [0xff, 0xff, 0xff, 0x7f]),
      bytes("f32", [0xff, 0xff, 0xff, 0x7f]),
      bytes("f32", [0xff, 0xff, 0xff, 0x7f]),
      bytes("f32", [0xff, 0xff, 0xff, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 123456790)]),
  [
    new F32x4Pattern(
      value("f32", 123456790),
      value("f32", 123456790),
      value("f32", 123456790),
      value("f32", 123456790),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 123456790)]),
  [
    new F32x4Pattern(
      value("f32", 123456790),
      value("f32", 123456790),
      value("f32", 123456790),
      value("f32", 123456790),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 81985530000000000)]),
  [
    new F32x4Pattern(
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 81985530000000000)]),
  [
    new F32x4Pattern(
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
      value("f32", 81985530000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 1234567900000000000000000000)]),
  [
    new F32x4Pattern(
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 1234567900000000000000000000)]),
  [
    new F32x4Pattern(
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
      value("f32", 1234567900000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 42984030000000000000000)]),
  [
    new F32x4Pattern(
      value("f32", 42984030000000000000000),
      value("f32", 42984030000000000000000),
      value("f32", 42984030000000000000000),
      value("f32", 42984030000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.splat`, [value("f32", 156374990000)]),
  [
    new F32x4Pattern(
      value("f32", 156374990000),
      value("f32", 156374990000),
      value("f32", 156374990000),
      value("f32", 156374990000),
    ),
  ],
);


assert_return(() => invoke($0, `i64x2.splat`, [0n]), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($0, `i64x2.splat`, [0n]), [i64x2([0x0n, 0x0n])]);


assert_return(() => invoke($0, `i64x2.splat`, [1n]), [i64x2([0x1n, 0x1n])]);


assert_return(
  () => invoke($0, `i64x2.splat`, [-1n]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-9223372036854775808n]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-9223372036854775808n]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [9223372036854775807n]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-1n]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [9223372036854775807n]),
  [i64x2([0x7fffffffffffffffn, 0x7fffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-1n]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-9223372036854775808n]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [-9223372036854775808n]),
  [i64x2([0x8000000000000000n, 0x8000000000000000n])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [1234567890123456789n]),
  [i64x2([0x112210f47de98115n, 0x112210f47de98115n])],
);


assert_return(
  () => invoke($0, `i64x2.splat`, [1311768467294899695n]),
  [i64x2([0x1234567890abcdefn, 0x1234567890abcdefn])],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 0)]),
  [new F64x2Pattern(value("f64", 0), value("f64", 0))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -0)]),
  [new F64x2Pattern(value("f64", -0), value("f64", -0))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1.1)]),
  [new F64x2Pattern(value("f64", 1.1), value("f64", 1.1))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -1.1)]),
  [new F64x2Pattern(value("f64", -1.1), value("f64", -1.1))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
  ]),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
  ]),
  [
    new F64x2Pattern(
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
      value("f64", 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
  ]),
  [
    new F64x2Pattern(
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
      value("f64", -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 0.5)]),
  [new F64x2Pattern(value("f64", 0.5), value("f64", 0.5))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -0.5)]),
  [new F64x2Pattern(value("f64", -0.5), value("f64", -0.5))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1)]),
  [new F64x2Pattern(value("f64", 1), value("f64", 1))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -1)]),
  [new F64x2Pattern(value("f64", -1), value("f64", -1))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 6.283185307179586)]),
  [
    new F64x2Pattern(
      value("f64", 6.283185307179586),
      value("f64", 6.283185307179586),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -6.283185307179586)]),
  [
    new F64x2Pattern(
      value("f64", -6.283185307179586),
      value("f64", -6.283185307179586),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [
    new F64x2Pattern(
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [
    new F64x2Pattern(
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
      value("f64", -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", Infinity)]),
  [new F64x2Pattern(value("f64", Infinity), value("f64", Infinity))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", -Infinity)]),
  [new F64x2Pattern(value("f64", -Infinity), value("f64", -Infinity))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  [
    new F64x2Pattern(
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
  ]),
  [
    new F64x2Pattern(
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0xff]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
  ]),
  [
    new F64x2Pattern(
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0x7f]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
  ]),
  [
    new F64x2Pattern(
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
      bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf4, 0xff]),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 123456789)]),
  [new F64x2Pattern(value("f64", 123456789), value("f64", 123456789))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 123456789)]),
  [new F64x2Pattern(value("f64", 123456789), value("f64", 123456789))],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1375488932539311400000000)]),
  [
    new F64x2Pattern(
      value("f64", 1375488932539311400000000),
      value("f64", 1375488932539311400000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1375488932539311400000000)]),
  [
    new F64x2Pattern(
      value("f64", 1375488932539311400000000),
      value("f64", 1375488932539311400000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1234567890000000000000000000)]),
  [
    new F64x2Pattern(
      value("f64", 1234567890000000000000000000),
      value("f64", 1234567890000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 1234567890000000000000000000)]),
  [
    new F64x2Pattern(
      value("f64", 1234567890000000000000000000),
      value("f64", 1234567890000000000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 721152341463170500000000000000)]),
  [
    new F64x2Pattern(
      value("f64", 721152341463170500000000000000),
      value("f64", 721152341463170500000000000000),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.splat`, [value("f64", 2623536934927580700)]),
  [
    new F64x2Pattern(
      value("f64", 2623536934927580700),
      value("f64", 2623536934927580700),
    ),
  ],
);


assert_malformed(
  () => instantiate(`(func (result v128) (v128.splat (i32.const 0))) `),
  `unknown operator`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i8x16.splat (i64.const 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i8x16.splat (f32.const 0.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i8x16.splat (f64.const 0.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i16x8.splat (i64.const 1)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i16x8.splat (f32.const 1.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i16x8.splat (f64.const 1.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i32x4.splat (i64.const 2)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i32x4.splat (f32.const 2.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i32x4.splat (f64.const 2.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) f32x4.splat (i32.const 4)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) f32x4.splat (i64.const 4)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) f32x4.splat (f64.const 4.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i64x2.splat (i32.const 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) i64x2.splat (f64.const 0.0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) f64x2.splat (i32.const 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result v128) f64x2.splat (f32.const 0.0)))`),
  `type mismatch`,
);


let $1 = instantiate(`(module (memory 1)
  (func (export "as-v128_store-operand-1") (param i32) (result v128)
    (v128.store (i32.const 0) (i8x16.splat (local.get 0)))
    (v128.load (i32.const 0)))
  (func (export "as-v128_store-operand-2") (param i32) (result v128)
    (v128.store (i32.const 0) (i16x8.splat (local.get 0)))
    (v128.load (i32.const 0)))
  (func (export "as-v128_store-operand-3") (param i32) (result v128)
    (v128.store (i32.const 0) (i32x4.splat (local.get 0)))
    (v128.load (i32.const 0)))
  (func (export "as-v128_store-operand-4") (param i64) (result v128)
    (v128.store (i32.const 0) (i64x2.splat (local.get 0)))
    (v128.load (i32.const 0)))
  (func (export "as-v128_store-operand-5") (param f64) (result v128)
    (v128.store (i32.const 0) (f64x2.splat (local.get 0)))
    (v128.load (i32.const 0)))
)`);


assert_return(
  () => invoke($1, `as-v128_store-operand-1`, [1]),
  [
    i8x16([0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1, 0x1]),
  ],
);


assert_return(
  () => invoke($1, `as-v128_store-operand-2`, [256]),
  [i16x8([0x100, 0x100, 0x100, 0x100, 0x100, 0x100, 0x100, 0x100])],
);


assert_return(
  () => invoke($1, `as-v128_store-operand-3`, [-1]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(() => invoke($1, `as-v128_store-operand-4`, [1n]), [i64x2([0x1n, 0x1n])]);


assert_return(
  () => invoke($1, `as-v128_store-operand-5`, [value("f64", -1)]),
  [new F64x2Pattern(value("f64", -1), value("f64", -1))],
);


let $2 = instantiate(`(module
  ;; Accessing lane
  (func (export "as-i8x16_extract_lane_s-operand-first") (param i32) (result i32)
    (i8x16.extract_lane_s 0 (i8x16.splat (local.get 0))))
  (func (export "as-i8x16_extract_lane_s-operand-last") (param i32) (result i32)
    (i8x16.extract_lane_s 15 (i8x16.splat (local.get 0))))
  (func (export "as-i16x8_extract_lane_s-operand-first") (param i32) (result i32)
    (i16x8.extract_lane_s 0 (i16x8.splat (local.get 0))))
  (func (export "as-i16x8_extract_lane_s-operand-last") (param i32) (result i32)
    (i16x8.extract_lane_s 7 (i16x8.splat (local.get 0))))
  (func (export "as-i32x4_extract_lane_s-operand-first") (param i32) (result i32)
    (i32x4.extract_lane 0 (i32x4.splat (local.get 0))))
  (func (export "as-i32x4_extract_lane_s-operand-last") (param i32) (result i32)
    (i32x4.extract_lane 3 (i32x4.splat (local.get 0))))
  (func (export "as-f32x4_extract_lane_s-operand-first") (param f32) (result f32)
    (f32x4.extract_lane 0 (f32x4.splat (local.get 0))))
  (func (export "as-f32x4_extract_lane_s-operand-last") (param f32) (result f32)
    (f32x4.extract_lane 3 (f32x4.splat (local.get 0))))
  (func (export "as-v8x16_swizzle-operands") (param i32) (param i32) (result v128)
    (i8x16.swizzle (i8x16.splat (local.get 0)) (i8x16.splat (local.get 1))))
  (func (export "as-i64x2_extract_lane-operand-first") (param i64) (result i64)
    (i64x2.extract_lane 0 (i64x2.splat (local.get 0))))
  (func (export "as-i64x2_extract_lane-operand-last") (param i64) (result i64)
    (i64x2.extract_lane 1 (i64x2.splat (local.get 0))))
  (func (export "as-f64x2_extract_lane-operand-first") (param f64) (result f64)
    (f64x2.extract_lane 0 (f64x2.splat (local.get 0))))
  (func (export "as-f64x2_extract_lane-operand-last") (param f64) (result f64)
    (f64x2.extract_lane 1 (f64x2.splat (local.get 0))))

  ;; Integer arithmetic
  (func (export "as-i8x16_add_sub-operands") (param i32 i32 i32) (result v128)
    (i8x16.add (i8x16.splat (local.get 0))
      (i8x16.sub (i8x16.splat (local.get 1)) (i8x16.splat (local.get 2)))))
  (func (export "as-i16x8_add_sub_mul-operands") (param i32 i32 i32 i32) (result v128)
    (i16x8.add (i16x8.splat (local.get 0))
      (i16x8.sub (i16x8.splat (local.get 1))
        (i16x8.mul (i16x8.splat (local.get 2)) (i16x8.splat (local.get 3))))))
  (func (export "as-i32x4_add_sub_mul-operands") (param i32 i32 i32 i32) (result v128)
    (i32x4.add (i32x4.splat (local.get 0))
      (i32x4.sub (i32x4.splat (local.get 1))
        (i32x4.mul (i32x4.splat (local.get 2)) (i32x4.splat (local.get 3))))))

  (func (export "as-i64x2_add_sub_mul-operands") (param i64 i64 i64 i64) (result v128)
    (i64x2.add (i64x2.splat (local.get 0))
      (i64x2.sub (i64x2.splat (local.get 1))
        (i64x2.mul (i64x2.splat (local.get 2)) (i64x2.splat (local.get 3))))))
  (func (export "as-f64x2_add_sub_mul-operands") (param f64 f64 f64 f64) (result v128)
    (f64x2.add (f64x2.splat (local.get 0))
      (f64x2.sub (f64x2.splat (local.get 1))
        (f64x2.mul (f64x2.splat (local.get 2)) (f64x2.splat (local.get 3))))))

  ;; Saturating integer arithmetic
  (func (export "as-i8x16_add_sat_s-operands") (param i32 i32) (result v128)
    (i8x16.add_sat_s (i8x16.splat (local.get 0)) (i8x16.splat (local.get 1))))
  (func (export "as-i16x8_add_sat_s-operands") (param i32 i32) (result v128)
    (i16x8.add_sat_s (i16x8.splat (local.get 0)) (i16x8.splat (local.get 1))))
  (func (export "as-i8x16_sub_sat_u-operands") (param i32 i32) (result v128)
    (i8x16.sub_sat_u (i8x16.splat (local.get 0)) (i8x16.splat (local.get 1))))
  (func (export "as-i16x8_sub_sat_u-operands") (param i32 i32) (result v128)
    (i16x8.sub_sat_u (i16x8.splat (local.get 0)) (i16x8.splat (local.get 1))))

  ;; Bit shifts
  (func (export "as-i8x16_shr_s-operand") (param i32 i32) (result v128)
    (i8x16.shr_s (i8x16.splat (local.get 0)) (local.get 1)))
  (func (export "as-i16x8_shr_s-operand") (param i32 i32) (result v128)
    (i16x8.shr_s (i16x8.splat (local.get 0)) (local.get 1)))
  (func (export "as-i32x4_shr_s-operand") (param i32 i32) (result v128)
    (i32x4.shr_s (i32x4.splat (local.get 0)) (local.get 1)))

  ;; Bitwise operantions
  (func (export "as-v128_and-operands") (param i32 i32) (result v128)
    (v128.and (i8x16.splat (local.get 0)) (i8x16.splat (local.get 1))))
  (func (export "as-v128_or-operands") (param i32 i32) (result v128)
    (v128.or (i16x8.splat (local.get 0)) (i16x8.splat (local.get 1))))
  (func (export "as-v128_xor-operands") (param i32 i32) (result v128)
    (v128.xor (i32x4.splat (local.get 0)) (i32x4.splat (local.get 1))))

  ;; Boolean horizontal reductions
  (func (export "as-i8x16_all_true-operand") (param i32) (result i32)
    (i8x16.all_true (i8x16.splat (local.get 0))))
  (func (export "as-i16x8_all_true-operand") (param i32) (result i32)
    (i16x8.all_true (i16x8.splat (local.get 0))))
  (func (export "as-i32x4_all_true-operand1") (param i32) (result i32)
    (i32x4.all_true (i32x4.splat (local.get 0))))
  (func (export "as-i32x4_all_true-operand2") (param i64) (result i32)
    (i32x4.all_true (i64x2.splat (local.get 0))))

  ;; Comparisons
  (func (export "as-i8x16_eq-operands") (param i32 i32) (result v128)
    (i8x16.eq (i8x16.splat (local.get 0)) (i8x16.splat (local.get 1))))
  (func (export "as-i16x8_eq-operands") (param i32 i32) (result v128)
    (i16x8.eq (i16x8.splat (local.get 0)) (i16x8.splat (local.get 1))))
  (func (export "as-i32x4_eq-operands1") (param i32 i32) (result v128)
    (i32x4.eq (i32x4.splat (local.get 0)) (i32x4.splat (local.get 1))))
  (func (export "as-i32x4_eq-operands2") (param i64 i64) (result v128)
    (i32x4.eq (i64x2.splat (local.get 0)) (i64x2.splat (local.get 1))))
  (func (export "as-f32x4_eq-operands") (param f32 f32) (result v128)
    (f32x4.eq (f32x4.splat (local.get 0)) (f32x4.splat (local.get 1))))
  (func (export "as-f64x2_eq-operands") (param f64 f64) (result v128)
    (f64x2.eq (f64x2.splat (local.get 0)) (f64x2.splat (local.get 1))))

  ;; Floating-point sign bit operations
  (func (export "as-f32x4_abs-operand") (param f32) (result v128)
    (f32x4.abs (f32x4.splat (local.get 0))))

  ;; Floating-point min
  (func (export "as-f32x4_min-operands") (param f32 f32) (result v128)
    (f32x4.min (f32x4.splat (local.get 0)) (f32x4.splat (local.get 1))))

  ;; Floating-point arithmetic
  (func (export "as-f32x4_div-operands") (param f32 f32) (result v128)
    (f32x4.div (f32x4.splat (local.get 0)) (f32x4.splat (local.get 1))))

  ;; Conversions
  (func (export "as-f32x4_convert_s_i32x4-operand") (param i32) (result v128)
    (f32x4.convert_i32x4_s (i32x4.splat (local.get 0))))
  (func (export "as-i32x4_trunc_s_f32x4_sat-operand") (param f32) (result v128)
    (i32x4.trunc_sat_f32x4_s (f32x4.splat (local.get 0))))
)`);


assert_return(() => invoke($2, `as-i8x16_extract_lane_s-operand-first`, [42]), [value("i32", 42)]);


assert_return(() => invoke($2, `as-i8x16_extract_lane_s-operand-last`, [-42]), [value("i32", -42)]);


assert_return(
  () => invoke($2, `as-i16x8_extract_lane_s-operand-first`, [-32769]),
  [value("i32", 32767)],
);


assert_return(() => invoke($2, `as-i16x8_extract_lane_s-operand-last`, [32768]), [value("i32", -32768)]);


assert_return(
  () => invoke($2, `as-i32x4_extract_lane_s-operand-first`, [2147483647]),
  [value("i32", 2147483647)],
);


assert_return(
  () => invoke($2, `as-i32x4_extract_lane_s-operand-last`, [-2147483648]),
  [value("i32", -2147483648)],
);


assert_return(
  () => invoke($2, `as-f32x4_extract_lane_s-operand-first`, [value("f32", 1.5)]),
  [value("f32", 1.5)],
);


assert_return(
  () => invoke($2, `as-f32x4_extract_lane_s-operand-last`, [value("f32", -0.25)]),
  [value("f32", -0.25)],
);


assert_return(
  () => invoke($2, `as-v8x16_swizzle-operands`, [1, -1]),
  [
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ],
);


assert_return(() => invoke($2, `as-i64x2_extract_lane-operand-last`, [-42n]), [value("i64", -42n)]);


assert_return(() => invoke($2, `as-i64x2_extract_lane-operand-first`, [42n]), [value("i64", 42n)]);


assert_return(
  () => invoke($2, `as-f64x2_extract_lane-operand-first`, [value("f64", 1.5)]),
  [value("f64", 1.5)],
);


assert_return(
  () => invoke($2, `as-f64x2_extract_lane-operand-last`, [value("f64", -1)]),
  [value("f64", -1)],
);


assert_return(
  () => invoke($2, `as-i8x16_add_sub-operands`, [3, 2, 1]),
  [
    i8x16([0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4, 0x4]),
  ],
);


assert_return(
  () => invoke($2, `as-i16x8_add_sub_mul-operands`, [257, 128, 16, 16]),
  [i16x8([0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81, 0x81])],
);


assert_return(
  () => invoke($2, `as-i32x4_add_sub_mul-operands`, [65535, 65537, 256, 256]),
  [i32x4([0x10000, 0x10000, 0x10000, 0x10000])],
);


assert_return(
  () => invoke($2, `as-i64x2_add_sub_mul-operands`, [
    2147483647n,
    4294967297n,
    65536n,
    65536n,
  ]),
  [i64x2([0x80000000n, 0x80000000n])],
);


assert_return(
  () => invoke($2, `as-f64x2_add_sub_mul-operands`, [
    value("f64", 0.5),
    value("f64", 0.75),
    value("f64", 0.5),
    value("f64", 0.5),
  ]),
  [new F64x2Pattern(value("f64", 1), value("f64", 1))],
);


assert_return(
  () => invoke($2, `as-i8x16_add_sat_s-operands`, [127, 1]),
  [
    i8x16([0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f, 0x7f]),
  ],
);


assert_return(
  () => invoke($2, `as-i16x8_add_sat_s-operands`, [32767, 1]),
  [i16x8([0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff, 0x7fff])],
);


assert_return(
  () => invoke($2, `as-i8x16_sub_sat_u-operands`, [127, 255]),
  [
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ],
);


assert_return(
  () => invoke($2, `as-i16x8_sub_sat_u-operands`, [32767, 65535]),
  [i16x8([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0])],
);


assert_return(
  () => invoke($2, `as-i8x16_shr_s-operand`, [240, 3]),
  [
    i8x16([0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe]),
  ],
);


assert_return(
  () => invoke($2, `as-i16x8_shr_s-operand`, [256, 4]),
  [i16x8([0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10])],
);


assert_return(
  () => invoke($2, `as-i32x4_shr_s-operand`, [-1, 16]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($2, `as-v128_and-operands`, [17, 255]),
  [
    i8x16([0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x11]),
  ],
);


assert_return(
  () => invoke($2, `as-v128_or-operands`, [0, 65535]),
  [i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($2, `as-v128_xor-operands`, [-252645136, -1]),
  [i32x4([0xf0f0f0f, 0xf0f0f0f, 0xf0f0f0f, 0xf0f0f0f])],
);


assert_return(() => invoke($2, `as-i8x16_all_true-operand`, [0]), [value("i32", 0)]);


assert_return(() => invoke($2, `as-i16x8_all_true-operand`, [65535]), [value("i32", 1)]);


assert_return(() => invoke($2, `as-i32x4_all_true-operand1`, [-252645136]), [value("i32", 1)]);


assert_return(() => invoke($2, `as-i32x4_all_true-operand2`, [-1n]), [value("i32", 1)]);


assert_return(
  () => invoke($2, `as-i8x16_eq-operands`, [1, 2]),
  [
    i8x16([0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]),
  ],
);


assert_return(
  () => invoke($2, `as-i16x8_eq-operands`, [-1, 65535]),
  [i16x8([0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff, 0xffff])],
);


assert_return(
  () => invoke($2, `as-i32x4_eq-operands1`, [-1, -1]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($2, `as-f32x4_eq-operands`, [value("f32", 0), value("f32", -0)]),
  [i32x4([0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff])],
);


assert_return(
  () => invoke($2, `as-i32x4_eq-operands2`, [1n, 2n]),
  [i64x2([0xffffffff00000000n, 0xffffffff00000000n])],
);


assert_return(
  () => invoke($2, `as-f64x2_eq-operands`, [value("f64", 0), value("f64", -0)]),
  [i64x2([0xffffffffffffffffn, 0xffffffffffffffffn])],
);


assert_return(
  () => invoke($2, `as-f32x4_abs-operand`, [value("f32", -1.125)]),
  [
    new F32x4Pattern(
      value("f32", 1.125),
      value("f32", 1.125),
      value("f32", 1.125),
      value("f32", 1.125),
    ),
  ],
);


assert_return(
  () => invoke($2, `as-f32x4_min-operands`, [
    value("f32", 0.25),
    value("f32", 0.00000000000000000000000000000000000001),
  ]),
  [
    new F32x4Pattern(
      value("f32", 0.00000000000000000000000000000000000001),
      value("f32", 0.00000000000000000000000000000000000001),
      value("f32", 0.00000000000000000000000000000000000001),
      value("f32", 0.00000000000000000000000000000000000001),
    ),
  ],
);


assert_return(
  () => invoke($2, `as-f32x4_div-operands`, [value("f32", 1), value("f32", 8)]),
  [
    new F32x4Pattern(
      value("f32", 0.125),
      value("f32", 0.125),
      value("f32", 0.125),
      value("f32", 0.125),
    ),
  ],
);


assert_return(
  () => invoke($2, `as-f32x4_convert_s_i32x4-operand`, [12345]),
  [
    new F32x4Pattern(
      value("f32", 12345),
      value("f32", 12345),
      value("f32", 12345),
      value("f32", 12345),
    ),
  ],
);


assert_return(
  () => invoke($2, `as-i32x4_trunc_s_f32x4_sat-operand`, [value("f32", 1.1)]),
  [i32x4([0x1, 0x1, 0x1, 0x1])],
);


let $3 = instantiate(`(module
  (global $$g (mut v128) (v128.const f32x4 0.0 0.0 0.0 0.0))
  (func (export "as-br-value1") (param i32) (result v128)
    (block (result v128) (br 0 (i8x16.splat (local.get 0)))))
  (func (export "as-return-value1") (param i32) (result v128)
    (return (i16x8.splat (local.get 0))))
  (func (export "as-local_set-value1") (param i32) (result v128) (local v128)
    (local.set 1 (i32x4.splat (local.get 0)))
    (return (local.get 1)))
  (func (export "as-global_set-value1") (param f32) (result v128)
    (global.set $$g (f32x4.splat (local.get 0)))
    (return (global.get $$g)))
  (func (export "as-br-value2") (param i64) (result v128)
    (block (result v128) (br 0 (i64x2.splat (local.get 0)))))
  (func (export "as-return-value2") (param i64) (result v128)
    (return (i64x2.splat (local.get 0))))
  (func (export "as-local_set-value2") (param i64) (result v128) (local v128)
    (local.set 1 (i64x2.splat (local.get 0)))
    (return (local.get 1)))
  (func (export "as-global_set-value2") (param f64) (result v128)
    (global.set $$g (f64x2.splat (local.get 0)))
    (return (global.get $$g)))
)`);


assert_return(
  () => invoke($3, `as-br-value1`, [171]),
  [
    i8x16([0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab]),
  ],
);


assert_return(
  () => invoke($3, `as-return-value1`, [43981]),
  [i16x8([0xabcd, 0xabcd, 0xabcd, 0xabcd, 0xabcd, 0xabcd, 0xabcd, 0xabcd])],
);


assert_return(
  () => invoke($3, `as-local_set-value1`, [65536]),
  [i32x4([0x10000, 0x10000, 0x10000, 0x10000])],
);


assert_return(
  () => invoke($3, `as-global_set-value1`, [value("f32", 1)]),
  [
    new F32x4Pattern(
      value("f32", 1),
      value("f32", 1),
      value("f32", 1),
      value("f32", 1),
    ),
  ],
);


assert_return(() => invoke($3, `as-br-value2`, [43981n]), [i64x2([0xabcdn, 0xabcdn])]);


assert_return(() => invoke($3, `as-return-value2`, [43981n]), [i64x2([0xabcdn, 0xabcdn])]);


assert_return(() => invoke($3, `as-local_set-value2`, [65536n]), [i64x2([0x10000n, 0x10000n])]);


assert_return(
  () => invoke($3, `as-global_set-value2`, [value("f64", 1)]),
  [new F64x2Pattern(value("f64", 1), value("f64", 1))],
);


assert_invalid(
  () => instantiate(`(module
    (func $$i8x16.splat-arg-empty (result v128)
      (i8x16.splat)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i16x8.splat-arg-empty (result v128)
      (i16x8.splat)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i32x4.splat-arg-empty (result v128)
      (i32x4.splat)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f32x4.splat-arg-empty (result v128)
      (f32x4.splat)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$i64x2.splat-arg-empty (result v128)
      (i64x2.splat)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f64x2.splat-arg-empty (result v128)
      (f64x2.splat)
    )
  )`),
  `type mismatch`,
);
