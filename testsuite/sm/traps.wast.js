




let $0 = instantiate(`(module
  (func (export "no_dce.i32.div_s") (param $$x i32) (param $$y i32)
    (drop (i32.div_s (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i32.div_u") (param $$x i32) (param $$y i32)
    (drop (i32.div_u (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i64.div_s") (param $$x i64) (param $$y i64)
    (drop (i64.div_s (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i64.div_u") (param $$x i64) (param $$y i64)
    (drop (i64.div_u (local.get $$x) (local.get $$y))))
)`);


assert_trap(() => invoke($0, `no_dce.i32.div_s`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `no_dce.i32.div_u`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `no_dce.i64.div_s`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `no_dce.i64.div_u`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `no_dce.i32.div_s`, [-2147483648, -1]), `integer overflow`);


assert_trap(() => invoke($0, `no_dce.i64.div_s`, [-9223372036854775808n, -1n]), `integer overflow`);


let $1 = instantiate(`(module
  (func (export "no_dce.i32.rem_s") (param $$x i32) (param $$y i32)
    (drop (i32.rem_s (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i32.rem_u") (param $$x i32) (param $$y i32)
    (drop (i32.rem_u (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i64.rem_s") (param $$x i64) (param $$y i64)
    (drop (i64.rem_s (local.get $$x) (local.get $$y))))
  (func (export "no_dce.i64.rem_u") (param $$x i64) (param $$y i64)
    (drop (i64.rem_u (local.get $$x) (local.get $$y))))
)`);


assert_trap(() => invoke($1, `no_dce.i32.rem_s`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($1, `no_dce.i32.rem_u`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($1, `no_dce.i64.rem_s`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($1, `no_dce.i64.rem_u`, [1n, 0n]), `integer divide by zero`);


let $2 = instantiate(`(module
  (func (export "no_dce.i32.trunc_f32_s") (param $$x f32) (drop (i32.trunc_f32_s (local.get $$x))))
  (func (export "no_dce.i32.trunc_f32_u") (param $$x f32) (drop (i32.trunc_f32_u (local.get $$x))))
  (func (export "no_dce.i32.trunc_f64_s") (param $$x f64) (drop (i32.trunc_f64_s (local.get $$x))))
  (func (export "no_dce.i32.trunc_f64_u") (param $$x f64) (drop (i32.trunc_f64_u (local.get $$x))))
  (func (export "no_dce.i64.trunc_f32_s") (param $$x f32) (drop (i64.trunc_f32_s (local.get $$x))))
  (func (export "no_dce.i64.trunc_f32_u") (param $$x f32) (drop (i64.trunc_f32_u (local.get $$x))))
  (func (export "no_dce.i64.trunc_f64_s") (param $$x f64) (drop (i64.trunc_f64_s (local.get $$x))))
  (func (export "no_dce.i64.trunc_f64_u") (param $$x f64) (drop (i64.trunc_f64_u (local.get $$x))))
)`);


assert_trap(
  () => invoke($2, `no_dce.i32.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i32.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i32.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i32.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i64.trunc_f32_s`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i64.trunc_f32_u`, [bytes("f32", [0x0, 0x0, 0xc0, 0x7f])]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i64.trunc_f64_s`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


assert_trap(
  () => invoke($2, `no_dce.i64.trunc_f64_u`, [
    bytes("f64", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0xf8, 0x7f]),
  ]),
  `invalid conversion to integer`,
);


let $3 = instantiate(`(module
    (memory 1)

    (func (export "no_dce.i32.load") (param $$i i32) (drop (i32.load (local.get $$i))))
    (func (export "no_dce.i32.load16_s") (param $$i i32) (drop (i32.load16_s (local.get $$i))))
    (func (export "no_dce.i32.load16_u") (param $$i i32) (drop (i32.load16_u (local.get $$i))))
    (func (export "no_dce.i32.load8_s") (param $$i i32) (drop (i32.load8_s (local.get $$i))))
    (func (export "no_dce.i32.load8_u") (param $$i i32) (drop (i32.load8_u (local.get $$i))))
    (func (export "no_dce.i64.load") (param $$i i32) (drop (i64.load (local.get $$i))))
    (func (export "no_dce.i64.load32_s") (param $$i i32) (drop (i64.load32_s (local.get $$i))))
    (func (export "no_dce.i64.load32_u") (param $$i i32) (drop (i64.load32_u (local.get $$i))))
    (func (export "no_dce.i64.load16_s") (param $$i i32) (drop (i64.load16_s (local.get $$i))))
    (func (export "no_dce.i64.load16_u") (param $$i i32) (drop (i64.load16_u (local.get $$i))))
    (func (export "no_dce.i64.load8_s") (param $$i i32) (drop (i64.load8_s (local.get $$i))))
    (func (export "no_dce.i64.load8_u") (param $$i i32) (drop (i64.load8_u (local.get $$i))))
    (func (export "no_dce.f32.load") (param $$i i32) (drop (f32.load (local.get $$i))))
    (func (export "no_dce.f64.load") (param $$i i32) (drop (f64.load (local.get $$i))))
)`);


assert_trap(() => invoke($3, `no_dce.i32.load`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i32.load16_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i32.load16_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i32.load8_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i32.load8_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load32_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load32_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load16_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load16_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load8_s`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.i64.load8_u`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.f32.load`, [65536]), `out of bounds memory access`);


assert_trap(() => invoke($3, `no_dce.f64.load`, [65536]), `out of bounds memory access`);
