




let $0 = instantiate(`(module
  (func (export "abs") (param $$x f32) (result f32) (f32.abs (local.get $$x)))
  (func (export "neg") (param $$x f32) (result f32) (f32.neg (local.get $$x)))
  (func (export "copysign") (param $$x f32) (param $$y f32) (result f32) (f32.copysign (local.get $$x) (local.get $$y)))
)`);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", 0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", -0)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", -0.5)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", 0.5)]), [value("f32", 0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", -1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -0), value("f32", 1)]), [value("f32", 0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", -1)]), [value("f32", -0)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0), value("f32", 1)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), value("f32", -6.2831855)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), value("f32", 6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), value("f32", -6.2831855)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), value("f32", 6.2831855)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), value("f32", -Infinity)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), value("f32", Infinity)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), value("f32", -Infinity)]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), value("f32", Infinity)]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("f32", -0)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("f32", 0)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", -0)]),
  [value("f32", -0.5)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", -0.5), value("f32", 0)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0.5), value("f32", -0)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0.5), value("f32", 0)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", 0.5)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0.5), value("f32", -0.5)]),
  [value("f32", -0.5)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", 0.5), value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", -1)]),
  [value("f32", -0.5)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", -0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0.5), value("f32", -1)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 0.5), value("f32", 1)]), [value("f32", 0.5)]);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", -6.2831855)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", 6.2831855)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0.5), value("f32", -6.2831855)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0.5), value("f32", 6.2831855)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", -Infinity)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -0.5), value("f32", Infinity)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0.5), value("f32", -Infinity)]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 0.5), value("f32", Infinity)]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -0.5),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -0.5)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 0.5),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 0.5)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", -0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", 0)]), [value("f32", 1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", -0)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", 0)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 1)],
);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", -0.5)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", 0.5)]), [value("f32", 1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", -1), value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `copysign`, [value("f32", 1), value("f32", 1)]), [value("f32", 1)]);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), value("f32", -6.2831855)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), value("f32", 6.2831855)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), value("f32", -6.2831855)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), value("f32", 6.2831855)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), value("f32", -Infinity)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), value("f32", Infinity)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), value("f32", -Infinity)]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), value("f32", Infinity)]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("f32", -1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("f32", 1)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", -0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", 0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", -0)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", 0)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", -0.5)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", 0.5)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", -0.5)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", 0.5)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", -1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", 1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", -1)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", 1)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 6.2831855)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", -0)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", 0)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", -0.5)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", 0.5)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", -1)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", 1)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("f32", -Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [
    value("f32", Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("f32", Infinity)],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.5),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.5),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.5),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.5),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", Infinity),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", Infinity),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_return(
  () => invoke($0, `copysign`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(() => invoke($0, `abs`, [value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `abs`, [value("f32", 0)]), [value("f32", 0)]);


assert_return(
  () => invoke($0, `abs`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `abs`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `abs`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `abs`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `abs`, [value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `abs`, [value("f32", 0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `abs`, [value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `abs`, [value("f32", 1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `abs`, [value("f32", -6.2831855)]), [value("f32", 6.2831855)]);


assert_return(() => invoke($0, `abs`, [value("f32", 6.2831855)]), [value("f32", 6.2831855)]);


assert_return(
  () => invoke($0, `abs`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `abs`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `abs`, [value("f32", -Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `abs`, [value("f32", Infinity)]), [value("f32", Infinity)]);


assert_return(
  () => invoke($0, `abs`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `abs`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(() => invoke($0, `neg`, [value("f32", -0)]), [value("f32", 0)]);


assert_return(() => invoke($0, `neg`, [value("f32", 0)]), [value("f32", -0)]);


assert_return(
  () => invoke($0, `neg`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", 0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `neg`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("f32", -0.000000000000000000000000000000000000000000001)],
);


assert_return(
  () => invoke($0, `neg`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", 0.000000000000000000000000000000000000011754944)],
);


assert_return(
  () => invoke($0, `neg`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("f32", -0.000000000000000000000000000000000000011754944)],
);


assert_return(() => invoke($0, `neg`, [value("f32", -0.5)]), [value("f32", 0.5)]);


assert_return(() => invoke($0, `neg`, [value("f32", 0.5)]), [value("f32", -0.5)]);


assert_return(() => invoke($0, `neg`, [value("f32", -1)]), [value("f32", 1)]);


assert_return(() => invoke($0, `neg`, [value("f32", 1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `neg`, [value("f32", -6.2831855)]), [value("f32", 6.2831855)]);


assert_return(() => invoke($0, `neg`, [value("f32", 6.2831855)]), [value("f32", -6.2831855)]);


assert_return(
  () => invoke($0, `neg`, [value("f32", -340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(
  () => invoke($0, `neg`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", -340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `neg`, [value("f32", -Infinity)]), [value("f32", Infinity)]);


assert_return(() => invoke($0, `neg`, [value("f32", Infinity)]), [value("f32", -Infinity)]);


assert_return(
  () => invoke($0, `neg`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])],
);


assert_return(
  () => invoke($0, `neg`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [bytes("f32", [0x0, 0x0, 0xc0, 0xff])],
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.copysign (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.abs (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.neg (i64.const 0))))`),
  `type mismatch`,
);
