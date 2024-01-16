




let $0 = instantiate(`(module
    (func (export "f32x4.relaxed_min") (param v128 v128) (result v128) (f32x4.relaxed_min (local.get 0) (local.get 1)))
    (func (export "f32x4.relaxed_max") (param v128 v128) (result v128) (f32x4.relaxed_max (local.get 0) (local.get 1)))
    (func (export "f64x2.relaxed_max") (param v128 v128) (result v128) (f64x2.relaxed_max (local.get 0) (local.get 1)))
    (func (export "f64x2.relaxed_min") (param v128 v128) (result v128) (f64x2.relaxed_min (local.get 0) (local.get 1)))
)`);


assert_return(
  () => invoke($0, `f32x4.relaxed_min`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    either(
      new F32x4Pattern(
        `canonical_nan`,
        `canonical_nan`,
        `canonical_nan`,
        `canonical_nan`,
      ),
      new F32x4Pattern(
        `canonical_nan`,
        `canonical_nan`,
        value("f32", 0),
        value("f32", 0),
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", 0),
        `canonical_nan`,
        `canonical_nan`,
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", 0),
        value("f32", 0),
        value("f32", 0),
      ),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.relaxed_min`, [f32x4([0, -0, 0, -0]), f32x4([-0, 0, 0, -0])]),
  [
    either(
      new F32x4Pattern(
        value("f32", -0),
        value("f32", -0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", -0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", -0),
        value("f32", 0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", -0),
        value("f32", -0),
        value("f32", 0),
        value("f32", -0),
      ),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.relaxed_max`, [
    bytes('v128', [
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0x7f,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
    ]),
    bytes('v128', [
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0x0,
      0xc0,
      0xff,
      0x0,
      0x0,
      0xc0,
      0x7f,
    ]),
  ]),
  [
    either(
      new F32x4Pattern(
        `canonical_nan`,
        `canonical_nan`,
        `canonical_nan`,
        `canonical_nan`,
      ),
      new F32x4Pattern(
        `canonical_nan`,
        `canonical_nan`,
        value("f32", 0),
        value("f32", 0),
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", 0),
        `canonical_nan`,
        `canonical_nan`,
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", 0),
        value("f32", 0),
        value("f32", 0),
      ),
    ),
  ],
);


assert_return(
  () => invoke($0, `f32x4.relaxed_max`, [f32x4([0, -0, 0, -0]), f32x4([-0, 0, 0, -0])]),
  [
    either(
      new F32x4Pattern(
        value("f32", 0),
        value("f32", 0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", 0),
        value("f32", -0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", -0),
        value("f32", 0),
        value("f32", 0),
        value("f32", -0),
      ),
      new F32x4Pattern(
        value("f32", -0),
        value("f32", -0),
        value("f32", 0),
        value("f32", -0),
      ),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_min`, [
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
      0x7f,
    ]),
    f64x2([0, 0]),
  ]),
  [
    either(
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_min`, [
    f64x2([0, 0]),
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
      0x7f,
    ]),
  ]),
  [
    either(
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_min`, [f64x2([0, -0]), f64x2([-0, 0])]),
  [
    either(
      new F64x2Pattern(value("f64", -0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", -0), value("f64", 0)),
      new F64x2Pattern(value("f64", -0), value("f64", -0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_min`, [f64x2([0, -0]), f64x2([0, -0])]),
  [
    either(
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_max`, [
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
      0x7f,
    ]),
    f64x2([0, 0]),
  ]),
  [
    either(
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_max`, [
    f64x2([0, 0]),
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
      0x7f,
    ]),
  ]),
  [
    either(
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
      new F64x2Pattern(`canonical_nan`, `canonical_nan`),
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_max`, [f64x2([0, -0]), f64x2([-0, 0])]),
  [
    either(
      new F64x2Pattern(value("f64", 0), value("f64", 0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", -0), value("f64", 0)),
      new F64x2Pattern(value("f64", -0), value("f64", -0)),
    ),
  ],
);


assert_return(
  () => invoke($0, `f64x2.relaxed_max`, [f64x2([0, -0]), f64x2([0, -0])]),
  [
    either(
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
      new F64x2Pattern(value("f64", 0), value("f64", -0)),
    ),
  ],
);
