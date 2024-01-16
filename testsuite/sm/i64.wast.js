




let $0 = instantiate(`(module
  (func (export "add") (param $$x i64) (param $$y i64) (result i64) (i64.add (local.get $$x) (local.get $$y)))
  (func (export "sub") (param $$x i64) (param $$y i64) (result i64) (i64.sub (local.get $$x) (local.get $$y)))
  (func (export "mul") (param $$x i64) (param $$y i64) (result i64) (i64.mul (local.get $$x) (local.get $$y)))
  (func (export "div_s") (param $$x i64) (param $$y i64) (result i64) (i64.div_s (local.get $$x) (local.get $$y)))
  (func (export "div_u") (param $$x i64) (param $$y i64) (result i64) (i64.div_u (local.get $$x) (local.get $$y)))
  (func (export "rem_s") (param $$x i64) (param $$y i64) (result i64) (i64.rem_s (local.get $$x) (local.get $$y)))
  (func (export "rem_u") (param $$x i64) (param $$y i64) (result i64) (i64.rem_u (local.get $$x) (local.get $$y)))
  (func (export "and") (param $$x i64) (param $$y i64) (result i64) (i64.and (local.get $$x) (local.get $$y)))
  (func (export "or") (param $$x i64) (param $$y i64) (result i64) (i64.or (local.get $$x) (local.get $$y)))
  (func (export "xor") (param $$x i64) (param $$y i64) (result i64) (i64.xor (local.get $$x) (local.get $$y)))
  (func (export "shl") (param $$x i64) (param $$y i64) (result i64) (i64.shl (local.get $$x) (local.get $$y)))
  (func (export "shr_s") (param $$x i64) (param $$y i64) (result i64) (i64.shr_s (local.get $$x) (local.get $$y)))
  (func (export "shr_u") (param $$x i64) (param $$y i64) (result i64) (i64.shr_u (local.get $$x) (local.get $$y)))
  (func (export "rotl") (param $$x i64) (param $$y i64) (result i64) (i64.rotl (local.get $$x) (local.get $$y)))
  (func (export "rotr") (param $$x i64) (param $$y i64) (result i64) (i64.rotr (local.get $$x) (local.get $$y)))
  (func (export "clz") (param $$x i64) (result i64) (i64.clz (local.get $$x)))
  (func (export "ctz") (param $$x i64) (result i64) (i64.ctz (local.get $$x)))
  (func (export "popcnt") (param $$x i64) (result i64) (i64.popcnt (local.get $$x)))
  (func (export "extend8_s") (param $$x i64) (result i64) (i64.extend8_s (local.get $$x)))
  (func (export "extend16_s") (param $$x i64) (result i64) (i64.extend16_s (local.get $$x)))
  (func (export "extend32_s") (param $$x i64) (result i64) (i64.extend32_s (local.get $$x)))
  (func (export "eqz") (param $$x i64) (result i32) (i64.eqz (local.get $$x)))
  (func (export "eq") (param $$x i64) (param $$y i64) (result i32) (i64.eq (local.get $$x) (local.get $$y)))
  (func (export "ne") (param $$x i64) (param $$y i64) (result i32) (i64.ne (local.get $$x) (local.get $$y)))
  (func (export "lt_s") (param $$x i64) (param $$y i64) (result i32) (i64.lt_s (local.get $$x) (local.get $$y)))
  (func (export "lt_u") (param $$x i64) (param $$y i64) (result i32) (i64.lt_u (local.get $$x) (local.get $$y)))
  (func (export "le_s") (param $$x i64) (param $$y i64) (result i32) (i64.le_s (local.get $$x) (local.get $$y)))
  (func (export "le_u") (param $$x i64) (param $$y i64) (result i32) (i64.le_u (local.get $$x) (local.get $$y)))
  (func (export "gt_s") (param $$x i64) (param $$y i64) (result i32) (i64.gt_s (local.get $$x) (local.get $$y)))
  (func (export "gt_u") (param $$x i64) (param $$y i64) (result i32) (i64.gt_u (local.get $$x) (local.get $$y)))
  (func (export "ge_s") (param $$x i64) (param $$y i64) (result i32) (i64.ge_s (local.get $$x) (local.get $$y)))
  (func (export "ge_u") (param $$x i64) (param $$y i64) (result i32) (i64.ge_u (local.get $$x) (local.get $$y)))
)`);


assert_return(() => invoke($0, `add`, [1n, 1n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `add`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `add`, [-1n, -1n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `add`, [-1n, 1n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `add`, [9223372036854775807n, 1n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `add`, [-9223372036854775808n, -1n]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `add`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `add`, [1073741823n, 1n]), [value("i64", 1073741824n)]);


assert_return(() => invoke($0, `sub`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `sub`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `sub`, [-1n, -1n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `sub`, [9223372036854775807n, -1n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `sub`, [-9223372036854775808n, 1n]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `sub`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i64", 0n)],
);


assert_return(() => invoke($0, `sub`, [1073741823n, -1n]), [value("i64", 1073741824n)]);


assert_return(() => invoke($0, `mul`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `mul`, [1n, 0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `mul`, [-1n, -1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `mul`, [1152921504606846976n, 4096n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `mul`, [-9223372036854775808n, 0n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `mul`, [-9223372036854775808n, -1n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `mul`, [9223372036854775807n, -1n]),
  [value("i64", -9223372036854775807n)],
);


assert_return(
  () => invoke($0, `mul`, [81985529216486895n, -81985529216486896n]),
  [value("i64", 2465395958572223728n)],
);


assert_return(() => invoke($0, `mul`, [9223372036854775807n, 9223372036854775807n]), [value("i64", 1n)]);


assert_trap(() => invoke($0, `div_s`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_s`, [0n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_s`, [-9223372036854775808n, -1n]), `integer overflow`);


assert_trap(() => invoke($0, `div_s`, [-9223372036854775808n, 0n]), `integer divide by zero`);


assert_return(() => invoke($0, `div_s`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `div_s`, [0n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `div_s`, [0n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `div_s`, [-1n, -1n]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `div_s`, [-9223372036854775808n, 2n]),
  [value("i64", -4611686018427387904n)],
);


assert_return(
  () => invoke($0, `div_s`, [-9223372036854775807n, 1000n]),
  [value("i64", -9223372036854775n)],
);


assert_return(() => invoke($0, `div_s`, [5n, 2n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_s`, [-5n, 2n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `div_s`, [5n, -2n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `div_s`, [-5n, -2n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_s`, [7n, 3n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_s`, [-7n, 3n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `div_s`, [7n, -3n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `div_s`, [-7n, -3n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_s`, [11n, 5n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_s`, [17n, 7n]), [value("i64", 2n)]);


assert_trap(() => invoke($0, `div_u`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_u`, [0n, 0n]), `integer divide by zero`);


assert_return(() => invoke($0, `div_u`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `div_u`, [0n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `div_u`, [-1n, -1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `div_u`, [-9223372036854775808n, -1n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `div_u`, [-9223372036854775808n, 2n]),
  [value("i64", 4611686018427387904n)],
);


assert_return(
  () => invoke($0, `div_u`, [-8074936608141340688n, 4294967297n]),
  [value("i64", 2414874607n)],
);


assert_return(
  () => invoke($0, `div_u`, [-9223372036854775807n, 1000n]),
  [value("i64", 9223372036854775n)],
);


assert_return(() => invoke($0, `div_u`, [5n, 2n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_u`, [-5n, 2n]), [value("i64", 9223372036854775805n)]);


assert_return(() => invoke($0, `div_u`, [5n, -2n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `div_u`, [-5n, -2n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `div_u`, [7n, 3n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_u`, [11n, 5n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `div_u`, [17n, 7n]), [value("i64", 2n)]);


assert_trap(() => invoke($0, `rem_s`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `rem_s`, [0n, 0n]), `integer divide by zero`);


assert_return(() => invoke($0, `rem_s`, [9223372036854775807n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [0n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [0n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [-1n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [-9223372036854775808n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [-9223372036854775808n, 2n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_s`, [-9223372036854775807n, 1000n]), [value("i64", -807n)]);


assert_return(() => invoke($0, `rem_s`, [5n, 2n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_s`, [-5n, 2n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rem_s`, [5n, -2n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_s`, [-5n, -2n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rem_s`, [7n, 3n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_s`, [-7n, 3n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rem_s`, [7n, -3n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_s`, [-7n, -3n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rem_s`, [11n, 5n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_s`, [17n, 7n]), [value("i64", 3n)]);


assert_trap(() => invoke($0, `rem_u`, [1n, 0n]), `integer divide by zero`);


assert_trap(() => invoke($0, `rem_u`, [0n, 0n]), `integer divide by zero`);


assert_return(() => invoke($0, `rem_u`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_u`, [0n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `rem_u`, [-1n, -1n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `rem_u`, [-9223372036854775808n, -1n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(() => invoke($0, `rem_u`, [-9223372036854775808n, 2n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `rem_u`, [-8074936608141340688n, 4294967297n]),
  [value("i64", 2147483649n)],
);


assert_return(() => invoke($0, `rem_u`, [-9223372036854775807n, 1000n]), [value("i64", 809n)]);


assert_return(() => invoke($0, `rem_u`, [5n, 2n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_u`, [-5n, 2n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_u`, [5n, -2n]), [value("i64", 5n)]);


assert_return(() => invoke($0, `rem_u`, [-5n, -2n]), [value("i64", -5n)]);


assert_return(() => invoke($0, `rem_u`, [7n, 3n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_u`, [11n, 5n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rem_u`, [17n, 7n]), [value("i64", 3n)]);


assert_return(() => invoke($0, `and`, [1n, 0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `and`, [0n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `and`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `and`, [0n, 0n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `and`, [9223372036854775807n, -9223372036854775808n]),
  [value("i64", 0n)],
);


assert_return(
  () => invoke($0, `and`, [9223372036854775807n, -1n]),
  [value("i64", 9223372036854775807n)],
);


assert_return(() => invoke($0, `and`, [4042326015n, 4294963440n]), [value("i64", 4042322160n)]);


assert_return(() => invoke($0, `and`, [-1n, -1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `or`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `or`, [0n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `or`, [1n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `or`, [0n, 0n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `or`, [9223372036854775807n, -9223372036854775808n]),
  [value("i64", -1n)],
);


assert_return(
  () => invoke($0, `or`, [-9223372036854775808n, 0n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(() => invoke($0, `or`, [4042326015n, 4294963440n]), [value("i64", 4294967295n)]);


assert_return(() => invoke($0, `or`, [-1n, -1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `xor`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `xor`, [0n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `xor`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `xor`, [0n, 0n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `xor`, [9223372036854775807n, -9223372036854775808n]),
  [value("i64", -1n)],
);


assert_return(
  () => invoke($0, `xor`, [-9223372036854775808n, 0n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(
  () => invoke($0, `xor`, [-1n, -9223372036854775808n]),
  [value("i64", 9223372036854775807n)],
);


assert_return(
  () => invoke($0, `xor`, [-1n, 9223372036854775807n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(() => invoke($0, `xor`, [4042326015n, 4294963440n]), [value("i64", 252645135n)]);


assert_return(() => invoke($0, `xor`, [-1n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shl`, [1n, 1n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `shl`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shl`, [9223372036854775807n, 1n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `shl`, [-1n, 1n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `shl`, [-9223372036854775808n, 1n]), [value("i64", 0n)]);


assert_return(
  () => invoke($0, `shl`, [4611686018427387904n, 1n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(() => invoke($0, `shl`, [1n, 63n]), [value("i64", -9223372036854775808n)]);


assert_return(() => invoke($0, `shl`, [1n, 64n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shl`, [1n, 65n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `shl`, [1n, -1n]), [value("i64", -9223372036854775808n)]);


assert_return(
  () => invoke($0, `shl`, [1n, 9223372036854775807n]),
  [value("i64", -9223372036854775808n)],
);


assert_return(() => invoke($0, `shr_s`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_s`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, 1n]), [value("i64", -1n)]);


assert_return(
  () => invoke($0, `shr_s`, [9223372036854775807n, 1n]),
  [value("i64", 4611686018427387903n)],
);


assert_return(
  () => invoke($0, `shr_s`, [-9223372036854775808n, 1n]),
  [value("i64", -4611686018427387904n)],
);


assert_return(
  () => invoke($0, `shr_s`, [4611686018427387904n, 1n]),
  [value("i64", 2305843009213693952n)],
);


assert_return(() => invoke($0, `shr_s`, [1n, 64n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_s`, [1n, 65n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_s`, [1n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_s`, [1n, 9223372036854775807n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_s`, [1n, -9223372036854775808n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_s`, [-9223372036854775808n, 63n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, 64n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, 65n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, -1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, 9223372036854775807n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_s`, [-1n, -9223372036854775808n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_u`, [1n, 1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_u`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, 1n]), [value("i64", 9223372036854775807n)]);


assert_return(
  () => invoke($0, `shr_u`, [9223372036854775807n, 1n]),
  [value("i64", 4611686018427387903n)],
);


assert_return(
  () => invoke($0, `shr_u`, [-9223372036854775808n, 1n]),
  [value("i64", 4611686018427387904n)],
);


assert_return(
  () => invoke($0, `shr_u`, [4611686018427387904n, 1n]),
  [value("i64", 2305843009213693952n)],
);


assert_return(() => invoke($0, `shr_u`, [1n, 64n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [1n, 65n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_u`, [1n, -1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_u`, [1n, 9223372036854775807n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `shr_u`, [1n, -9223372036854775808n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [-9223372036854775808n, 63n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, 64n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, 65n]), [value("i64", 9223372036854775807n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, -1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, 9223372036854775807n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `shr_u`, [-1n, -9223372036854775808n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rotl`, [1n, 1n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `rotl`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rotl`, [-1n, 1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rotl`, [1n, 64n]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `rotl`, [-6067025490386449714n, 1n]),
  [value("i64", 6312693092936652189n)],
);


assert_return(
  () => invoke($0, `rotl`, [-144115184384868352n, 4n]),
  [value("i64", -2305842950157893617n)],
);


assert_return(
  () => invoke($0, `rotl`, [-6067173104435169271n, 53n]),
  [value("i64", 87109505680009935n)],
);


assert_return(
  () => invoke($0, `rotl`, [-6066028401059725156n, 63n]),
  [value("i64", 6190357836324913230n)],
);


assert_return(
  () => invoke($0, `rotl`, [-6067173104435169271n, 245n]),
  [value("i64", 87109505680009935n)],
);


assert_return(
  () => invoke($0, `rotl`, [-6067067139002042359n, -19n]),
  [value("i64", -3530481836149793302n)],
);


assert_return(
  () => invoke($0, `rotl`, [-6066028401059725156n, -9223372036854775745n]),
  [value("i64", 6190357836324913230n)],
);


assert_return(() => invoke($0, `rotl`, [1n, 63n]), [value("i64", -9223372036854775808n)]);


assert_return(() => invoke($0, `rotl`, [-9223372036854775808n, 1n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rotr`, [1n, 1n]), [value("i64", -9223372036854775808n)]);


assert_return(() => invoke($0, `rotr`, [1n, 0n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `rotr`, [-1n, 1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `rotr`, [1n, 64n]), [value("i64", 1n)]);


assert_return(
  () => invoke($0, `rotr`, [-6067025490386449714n, 1n]),
  [value("i64", 6189859291661550951n)],
);


assert_return(
  () => invoke($0, `rotr`, [-144115184384868352n, 4n]),
  [value("i64", 1143914305582792704n)],
);


assert_return(
  () => invoke($0, `rotr`, [-6067173104435169271n, 53n]),
  [value("i64", 7534987797011123550n)],
);


assert_return(
  () => invoke($0, `rotr`, [-6066028401059725156n, 63n]),
  [value("i64", 6314687271590101305n)],
);


assert_return(
  () => invoke($0, `rotr`, [-6067173104435169271n, 245n]),
  [value("i64", 7534987797011123550n)],
);


assert_return(
  () => invoke($0, `rotr`, [-6067067139002042359n, -19n]),
  [value("i64", -7735078922541506965n)],
);


assert_return(
  () => invoke($0, `rotr`, [-6066028401059725156n, -9223372036854775745n]),
  [value("i64", 6314687271590101305n)],
);


assert_return(() => invoke($0, `rotr`, [1n, 63n]), [value("i64", 2n)]);


assert_return(() => invoke($0, `rotr`, [-9223372036854775808n, 63n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `clz`, [-1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `clz`, [0n]), [value("i64", 64n)]);


assert_return(() => invoke($0, `clz`, [32768n]), [value("i64", 48n)]);


assert_return(() => invoke($0, `clz`, [255n]), [value("i64", 56n)]);


assert_return(() => invoke($0, `clz`, [-9223372036854775808n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `clz`, [1n]), [value("i64", 63n)]);


assert_return(() => invoke($0, `clz`, [2n]), [value("i64", 62n)]);


assert_return(() => invoke($0, `clz`, [9223372036854775807n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `ctz`, [-1n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `ctz`, [0n]), [value("i64", 64n)]);


assert_return(() => invoke($0, `ctz`, [32768n]), [value("i64", 15n)]);


assert_return(() => invoke($0, `ctz`, [65536n]), [value("i64", 16n)]);


assert_return(() => invoke($0, `ctz`, [-9223372036854775808n]), [value("i64", 63n)]);


assert_return(() => invoke($0, `ctz`, [9223372036854775807n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `popcnt`, [-1n]), [value("i64", 64n)]);


assert_return(() => invoke($0, `popcnt`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `popcnt`, [32768n]), [value("i64", 1n)]);


assert_return(() => invoke($0, `popcnt`, [-9223231297218904064n]), [value("i64", 4n)]);


assert_return(() => invoke($0, `popcnt`, [9223372036854775807n]), [value("i64", 63n)]);


assert_return(() => invoke($0, `popcnt`, [-6148914692668172971n]), [value("i64", 32n)]);


assert_return(() => invoke($0, `popcnt`, [-7378697629197489494n]), [value("i64", 32n)]);


assert_return(() => invoke($0, `popcnt`, [-2401053088876216593n]), [value("i64", 48n)]);


assert_return(() => invoke($0, `extend8_s`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend8_s`, [127n]), [value("i64", 127n)]);


assert_return(() => invoke($0, `extend8_s`, [128n]), [value("i64", -128n)]);


assert_return(() => invoke($0, `extend8_s`, [255n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `extend8_s`, [81985529216486656n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend8_s`, [-81985529216486784n]), [value("i64", -128n)]);


assert_return(() => invoke($0, `extend8_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `extend16_s`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend16_s`, [32767n]), [value("i64", 32767n)]);


assert_return(() => invoke($0, `extend16_s`, [32768n]), [value("i64", -32768n)]);


assert_return(() => invoke($0, `extend16_s`, [65535n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `extend16_s`, [1311768467463733248n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend16_s`, [-81985529216466944n]), [value("i64", -32768n)]);


assert_return(() => invoke($0, `extend16_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `extend32_s`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend32_s`, [32767n]), [value("i64", 32767n)]);


assert_return(() => invoke($0, `extend32_s`, [32768n]), [value("i64", 32768n)]);


assert_return(() => invoke($0, `extend32_s`, [65535n]), [value("i64", 65535n)]);


assert_return(() => invoke($0, `extend32_s`, [2147483647n]), [value("i64", 2147483647n)]);


assert_return(() => invoke($0, `extend32_s`, [2147483648n]), [value("i64", -2147483648n)]);


assert_return(() => invoke($0, `extend32_s`, [4294967295n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `extend32_s`, [81985526906748928n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `extend32_s`, [-81985529054232576n]), [value("i64", -2147483648n)]);


assert_return(() => invoke($0, `extend32_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `eqz`, [0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eqz`, [1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [-9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [-1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [-1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-9223372036854775808n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [-1n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [1n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-9223372036854775808n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-9223372036854775808n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-1n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-9223372036854775808n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [9223372036854775807n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [0n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [-1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-9223372036854775808n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [-1n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [1n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [0n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-9223372036854775808n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [0n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-9223372036854775808n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-1n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-9223372036854775808n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [9223372036854775807n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [0n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-1n, 1n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `lt_s`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt_s`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-1n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [1n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [0n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [-9223372036854775808n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [0n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-9223372036854775808n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [-1n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt_s`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `lt_s`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt_u`, [0n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-1n, 1n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt_u`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `lt_u`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-1n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [1n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [0n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-9223372036854775808n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [0n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-9223372036854775808n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-1n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `lt_u`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `lt_u`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le_s`, [0n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1n, 1n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `le_s`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le_s`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [1n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_s`, [0n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-9223372036854775808n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [0n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_s`, [-9223372036854775808n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le_s`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `le_s`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `le_u`, [0n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1n, 1n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le_u`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `le_u`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [1n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [0n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-9223372036854775808n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [0n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-9223372036854775808n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `le_u`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `le_u`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt_s`, [0n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1n, 1n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `gt_s`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt_s`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [1n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [0n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-9223372036854775808n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [0n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [-9223372036854775808n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt_s`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `gt_s`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `gt_u`, [0n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [1n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1n, 1n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt_u`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `gt_u`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [1n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [0n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-9223372036854775808n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [0n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-9223372036854775808n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `gt_u`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `gt_u`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_return(() => invoke($0, `ge_s`, [0n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-1n, 1n]), [value("i32", 0)]);


assert_return(
  () => invoke($0, `ge_s`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge_s`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-1n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [1n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [0n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [-9223372036854775808n, 0n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [0n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-9223372036854775808n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [-1n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge_s`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 0)],
);


assert_return(
  () => invoke($0, `ge_s`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge_u`, [0n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [1n, 1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-1n, 1n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge_u`, [-9223372036854775808n, -9223372036854775808n]),
  [value("i32", 1)],
);


assert_return(() => invoke($0, `ge_u`, [9223372036854775807n, 9223372036854775807n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-1n, -1n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [1n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [0n, 1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-9223372036854775808n, 0n]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [0n, -9223372036854775808n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-9223372036854775808n, -1n]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-1n, -9223372036854775808n]), [value("i32", 1)]);


assert_return(
  () => invoke($0, `ge_u`, [-9223372036854775808n, 9223372036854775807n]),
  [value("i32", 1)],
);


assert_return(
  () => invoke($0, `ge_u`, [9223372036854775807n, -9223372036854775808n]),
  [value("i32", 0)],
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.add (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.and (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.div_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.div_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.mul (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.or (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.rem_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.rem_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.rotl (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.rotr (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.shl (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.shr_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.shr_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.sub (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.xor (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.eqz (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.clz (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.ctz (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.popcnt (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.eq (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.ge_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.ge_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.gt_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.gt_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.le_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.le_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.lt_s (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.lt_u (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i64) (i64.ne (i32.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(func (result i64) (i64.const nan:arithmetic)) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (result i64) (i64.const nan:canonical)) `),
  `unexpected token`,
);
