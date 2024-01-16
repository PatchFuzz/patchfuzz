




let $0 = instantiate(`(module
  (func (export "eq") (param $$x f32) (param $$y f32) (result i32) (f32.eq (local.get $$x) (local.get $$y)))
  (func (export "ne") (param $$x f32) (param $$y f32) (result i32) (f32.ne (local.get $$x) (local.get $$y)))
  (func (export "lt") (param $$x f32) (param $$y f32) (result i32) (f32.lt (local.get $$x) (local.get $$y)))
  (func (export "le") (param $$x f32) (param $$y f32) (result i32) (f32.le (local.get $$x) (local.get $$y)))
  (func (export "gt") (param $$x f32) (param $$y f32) (result i32) (f32.gt (local.get $$x) (local.get $$y)))
  (func (export "ge") (param $$x f32) (param $$y f32) (result i32) (f32.ge (local.get $$x) (local.get $$y)))
)`);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `eq`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `eq`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ne`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ne`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `le`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", 0)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", 0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000000000001),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.000000000000000000000000000000000000011754944),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 0.5),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 0.5), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 0.5), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", 1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", -6.2831855)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", 6.2831855)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 1),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", -Infinity)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 1), value("f32", Infinity)]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 1), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", 6.2831855), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 6.2831855),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 0.5),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 1),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 6.2831855),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", -Infinity),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    value("f32", Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", 340282350000000000000000000000000000000),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", -0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", 0)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", -0)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", 0)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", -0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", 0.5)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", -0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", 0.5)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", -1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", -Infinity), value("f32", 1)]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", -1)]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge`, [value("f32", Infinity), value("f32", 1)]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge`, [value("f32", -Infinity), value("f32", -6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -Infinity), value("f32", 6.2831855)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), value("f32", -6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), value("f32", 6.2831855)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", Infinity),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", -Infinity), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), value("f32", -Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), value("f32", Infinity)]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    value("f32", -Infinity),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0xff])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [value("f32", Infinity), bytes("f32", [0x0, 0x0, 0xa0, 0x7f])]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000000000001),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 0.000000000000000000000000000000000000011754944),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 0.5)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", -1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", 1)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 6.2831855),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", 340282350000000000000000000000000000000),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0xff]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    value("f32", -Infinity),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [bytes("f32", [0x0, 0x0, 0xa0, 0x7f]), value("f32", Infinity)]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0xff]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xc0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge`, [
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
    bytes("f32", [0x0, 0x0, 0xa0, 0x7f]),
  ]),
  [value("i32", 0)],
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.eq (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.ge (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.gt (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.le (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.lt (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result f32) (f32.ne (i64.const 0) (f64.const 0))))`),
  `type mismatch`,
);
