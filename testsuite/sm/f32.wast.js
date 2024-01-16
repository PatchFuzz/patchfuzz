




let $0 = instantiate(`(module
  (func (export "add") (param $$x f32) (param $$y f32) (result f32) (f32.add (local.get $$x) (local.get $$y)))
  (func (export "sub") (param $$x f32) (param $$y f32) (result f32) (f32.sub (local.get $$x) (local.get $$y)))
  (func (export "mul") (param $$x f32) (param $$y f32) (result f32) (f32.mul (local.get $$x) (local.get $$y)))
  (func (export "div") (param $$x f32) (param $$y f32) (result f32) (f32.div (local.get $$x) (local.get $$y)))
  (func (export "sqrt") (param $$x f32) (result f32) (f32.sqrt (local.get $$x)))
  (func (export "min") (param $$x f32) (param $$y f32) (result f32) (f32.min (local.get $$x) (local.get $$y)))
  (func (export "max") (param $$x f32) (param $$y f32) (result f32) (f32.max (local.get $$x) (local.get $$y)))
  (func (export "ceil") (param $$x f32) (result f32) (f32.ceil (local.get $$x)))
  (func (export "floor") (param $$x f32) (result f32) (f32.floor (local.get $$x)))
  (func (export "trunc") (param $$x f32) (result f32) (f32.trunc (local.get $$x)))
  (func (export "nearest") (param $$x f32) (result f32) (f32.nearest (local.get $$x)))
)`);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `add`, [value("f32", -0), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `add`, [value("f32", 0), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", -0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", 0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", -0)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", -1)]), [value("f32", -1.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", -1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 1.5)]);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", -6.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", 5.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", -5.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 6.7831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", -0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", 0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", -0)]), [value("f32", 1)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", 0)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", -0.5)]), [value("f32", -1.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 1.5)]);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", -1)]), [value("f32", -2)]);


assert_return(() => invoke($0, `add`, [value("f32", -1), value("f32", 1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", -1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `add`, [value("f32", 1), value("f32", 1)]), [value("f32", 2)]);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", -7.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", 5.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", -5.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", 7.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", -0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", 0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", -0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", 0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", -6.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", -5.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", 5.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 6.7831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", -7.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", -5.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", 5.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 7.2831855)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", -12.566371)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 12.566371)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", 0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", -0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `add`, [value("f32", -Infinity), value("f32", Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", -Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `add`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0), value("f32", 1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0), value("f32", 1)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), value("f32", -6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), value("f32", 6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), value("f32", -6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), value("f32", 6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754945)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754942)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", -0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", 0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", -0)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", -1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -0.5), value("f32", 1)]), [value("f32", -1.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", -1)]), [value("f32", 1.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 0.5), value("f32", 1)]), [value("f32", -0.5)]);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", 5.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", -6.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", 6.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", -5.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", -0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", 0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", -0)]), [value("f32", 1)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", 0)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", 0.5)]), [value("f32", -1.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", -0.5)]), [value("f32", 1.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", -1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `sub`, [value("f32", -1), value("f32", 1)]), [value("f32", -2)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", -1)]), [value("f32", 2)]);


assert_return(() => invoke($0, `sub`, [value("f32", 1), value("f32", 1)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", 5.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", -7.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", 7.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", -5.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", -0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", 0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", -0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", 0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", -5.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", -6.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", 6.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 5.7831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", -5.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", -7.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", 7.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 5.2831855)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", -12.566371)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", 12.566371)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", 0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", -0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `sub`, [value("f32", Infinity), value("f32", Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `sub`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", -0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", 0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", -1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", 1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", -1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", 1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", -6.2831855)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", 6.2831855)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", -6.2831855)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", 6.2831855)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", -Infinity)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", -0), value("f32", Infinity)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", -Infinity)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", 0), value("f32", Infinity)]), [`canonical_nan`]);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000005877472)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000005877472)],
);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", 0.25)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", -0.25)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", -0.25)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 0.25)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", -1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", -0.5), value("f32", 1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", -1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", 3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", -3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", -3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `mul`, [value("f32", -1), value("f32", 1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `mul`, [value("f32", 1), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000008)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.00000000000000000000000000000000000007385849)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", 3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", -3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", -3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 3.1415927)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", 39.47842)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", -39.47842)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", -39.47842)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 39.47842)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.00000047683713)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 3.9999998)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", 170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", -170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 170141170000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `mul`, [value("f32", -Infinity), value("f32", -0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", -Infinity), value("f32", 0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", Infinity), value("f32", -0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `mul`, [value("f32", Infinity), value("f32", 0)]), [`canonical_nan`]);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `mul`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", -0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", 0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", -0)]), [`canonical_nan`]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", 0)]), [`canonical_nan`]);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", -0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", 0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", -1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", 1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", -1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", 1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", -6.2831855)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", 6.2831855)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", -6.2831855)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", 6.2831855)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", -Infinity)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0), value("f32", Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", -Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0), value("f32", Infinity)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `div`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.00000011920929)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.00000011920929)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.00000011920929)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.00000011920929)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000003)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 8388608)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -8388608)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -8388608)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 8388608)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000023509887)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000001870857)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000001870857)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000001870857)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000001870857)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", -0)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", 0)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", -0)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", 0)]), [value("f32", Infinity)]);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 42535296000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -42535296000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -42535296000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 42535296000000000000000000000000000000)],
);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", -1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", 1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", -1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", 0.07957747)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", -0.07957747)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", -0.07957747)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 0.07957747)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000001469368)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000001469368)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000001469368)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000001469368)],
);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", -Infinity)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -0.5), value("f32", Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", -Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 0.5), value("f32", Infinity)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", -0)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", 0)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", -0)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", 0)]), [value("f32", Infinity)]);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 85070590000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -85070590000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -85070590000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 85070590000000000000000000000000000000)],
);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", -0.5)]), [value("f32", 2)]);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", 0.5)]), [value("f32", -2)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", -0.5)]), [value("f32", -2)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 2)]);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", 1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", 0.15915494)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", -0.15915494)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", -0.15915494)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", 0.15915494)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000002938736)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000002938736)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000002938736)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000002938736)],
);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", -Infinity)]), [value("f32", 0)]);


assert_return(() => invoke($0, `div`, [value("f32", -1), value("f32", Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", -Infinity)]), [value("f32", -0)]);


assert_return(() => invoke($0, `div`, [value("f32", 1), value("f32", Infinity)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", -0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", 0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", 12.566371)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", -12.566371)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", -12.566371)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 12.566371)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000018464624)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000018464624)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000018464624)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000018464624)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", 54157613000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", -54157613000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -54157613000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 54157613000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", -0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", 0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", -Infinity), value("f32", Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", -Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [value("f32", Infinity), value("f32", Infinity)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `div`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", 0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", 0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", 1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", 1)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", 6.2831855)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", 6.2831855)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", -0), value("f32", Infinity)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", 0), value("f32", Infinity)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", -0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", 0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", -0.5), value("f32", 1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", 0.5), value("f32", Infinity)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", -0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", 0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", 0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", 1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", 6.2831855)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", 6.2831855)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", -1), value("f32", Infinity)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", 1), value("f32", Infinity)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", -0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", 0)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", 6.2831855), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", 6.2831855), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", -6.2831855)],
);


assert_return(() => invoke($0, `min`, [value("f32", 6.2831855), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", 6.2831855), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", 0)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", Infinity), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `min`, [value("f32", Infinity), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(() => invoke($0, `min`, [value("f32", Infinity), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", -Infinity)],
);


assert_return(() => invoke($0, `min`, [value("f32", Infinity), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `min`, [value("f32", Infinity), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `min`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `min`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", -0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", -1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", -1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", -6.2831855)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", -6.2831855)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `max`, [value("f32", -0), value("f32", -Infinity)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(() => invoke($0, `max`, [value("f32", 0), value("f32", -Infinity)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", -0)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", -1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", -0.5), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", -1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", -0)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", 0)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", -0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", -0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", -6.2831855)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", -6.2831855)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `max`, [value("f32", -1), value("f32", -Infinity)]), [value("f32", -1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(() => invoke($0, `max`, [value("f32", 1), value("f32", -Infinity)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `max`, [value("f32", -6.2831855), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -6.2831855), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", -0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", 0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 6.2831855)],
);


assert_return(() => invoke($0, `max`, [value("f32", -6.2831855), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `max`, [value("f32", -6.2831855), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `max`, [value("f32", -Infinity), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `max`, [value("f32", -Infinity), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", -0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(() => invoke($0, `max`, [value("f32", -Infinity), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `max`, [value("f32", -Infinity), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", Infinity),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(
  () => invoke($0, `max`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [`arithmetic_nan`],
);


assert_return(() => invoke($0, `sqrt`, [value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `sqrt`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `sqrt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sqrt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.00000000000000000000003743392)],
);


assert_return(
  () => invoke($0, `sqrt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sqrt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.00000000000000000010842022)],
);


assert_return(() => invoke($0, `sqrt`, [value("f32", -0.5)]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [value("f32", 0.5)]), [value("f32", 0.70710677)]);


assert_return(() => invoke($0, `sqrt`, [value("f32", -1)]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `sqrt`, [value("f32", -6.2831855)]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [value("f32", 6.2831855)]), [value("f32", 2.5066283)]);


assert_return(
  () => invoke($0, `sqrt`, [value("f32", -340282350000000000000000000000000000000)]),
  [`canonical_nan`],
);


assert_return(
  () => invoke($0, `sqrt`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 18446743000000000000)],
);


assert_return(() => invoke($0, `sqrt`, [value("f32", -Infinity)]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `sqrt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `sqrt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]), [`canonical_nan`]);


assert_return(() => invoke($0, `sqrt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `floor`, [value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `floor`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `floor`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `floor`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `floor`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `floor`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `floor`, [value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `floor`, [value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `floor`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `floor`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `floor`, [value("f32", -6.2831855)]), [value("f32", -7)]);


assert_return(() => invoke($0, `floor`, [value("f32", 6.2831855)]), [value("f32", 6)]);


assert_return(
  () => invoke($0, `floor`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `floor`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `floor`, [value("f32", -Infinity)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `floor`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `floor`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]), [`canonical_nan`]);


assert_return(() => invoke($0, `floor`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `floor`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]), [`canonical_nan`]);


assert_return(() => invoke($0, `floor`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `ceil`, [value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `ceil`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `ceil`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `ceil`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `ceil`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `ceil`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(() => invoke($0, `ceil`, [value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `ceil`, [value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `ceil`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `ceil`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `ceil`, [value("f32", -6.2831855)]), [value("f32", -6)]);


assert_return(() => invoke($0, `ceil`, [value("f32", 6.2831855)]), [value("f32", 7)]);


assert_return(
  () => invoke($0, `ceil`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `ceil`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `ceil`, [value("f32", -Infinity)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `ceil`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `ceil`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]), [`canonical_nan`]);


assert_return(() => invoke($0, `ceil`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `ceil`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]), [`canonical_nan`]);


assert_return(() => invoke($0, `ceil`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `trunc`, [value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `trunc`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `trunc`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `trunc`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `trunc`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `trunc`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `trunc`, [value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `trunc`, [value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `trunc`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `trunc`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `trunc`, [value("f32", -6.2831855)]), [value("f32", -6)]);


assert_return(() => invoke($0, `trunc`, [value("f32", 6.2831855)]), [value("f32", 6)]);


assert_return(
  () => invoke($0, `trunc`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `trunc`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `trunc`, [value("f32", -Infinity)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `trunc`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `trunc`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]), [`canonical_nan`]);


assert_return(() => invoke($0, `trunc`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `trunc`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]), [`canonical_nan`]);


assert_return(() => invoke($0, `trunc`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `nearest`, [value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `nearest`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `nearest`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `nearest`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `nearest`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `nearest`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `nearest`, [value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `nearest`, [value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `nearest`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `nearest`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `nearest`, [value("f32", -6.2831855)]), [value("f32", -6)]);


assert_return(() => invoke($0, `nearest`, [value("f32", 6.2831855)]), [value("f32", 6)]);


assert_return(
  () => invoke($0, `nearest`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `nearest`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `nearest`, [value("f32", -Infinity)]), [value("f32", -Infinity)]);


assert_return(() => invoke($0, `nearest`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `nearest`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]), [`canonical_nan`]);


assert_return(() => invoke($0, `nearest`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff])]), [`arithmetic_nan`]);


assert_return(() => invoke($0, `nearest`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]), [`canonical_nan`]);


assert_return(() => invoke($0, `nearest`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]), [`arithmetic_nan`]);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.add (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.div (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.max (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.min (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.mul (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.sub (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.ceil (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.floor (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.nearest (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.sqrt (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.trunc (i64.const 0))))`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(func (result f32) (f32.const nan:arithmetic)) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (result f32) (f32.const nan:canonical)) `),
  `unexpected token`,
);
