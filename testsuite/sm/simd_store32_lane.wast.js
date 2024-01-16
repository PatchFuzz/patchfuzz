






let $0 = instantiate(`(module
  (memory 1)
  (global $$zero (mut v128) (v128.const i32x4 0 0 0 0))
  (func (export "v128.store32_lane_0")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane 0 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store (local.get $$address) (global.get $$zero))    (local.get $$ret))
  (func (export "v128.store32_lane_1")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane 1 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store (local.get $$address) (global.get $$zero))    (local.get $$ret))
  (func (export "v128.store32_lane_2")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane 2 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store (local.get $$address) (global.get $$zero))    (local.get $$ret))
  (func (export "v128.store32_lane_3")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane 3 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store (local.get $$address) (global.get $$zero))    (local.get $$ret))
  (func (export "v128.store32_lane_0_offset_0")
    (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane offset=0 0 (i32.const 0) (local.get $$x))
    (local.set $$ret (i64.load offset=0 (i32.const 0)))
    (v128.store offset=0 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_1_offset_1")
    (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane offset=1 1 (i32.const 0) (local.get $$x))
    (local.set $$ret (i64.load offset=1 (i32.const 0)))
    (v128.store offset=1 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_2_offset_2")
    (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane offset=2 2 (i32.const 0) (local.get $$x))
    (local.set $$ret (i64.load offset=2 (i32.const 0)))
    (v128.store offset=2 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_3_offset_3")
    (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane offset=3 3 (i32.const 0) (local.get $$x))
    (local.set $$ret (i64.load offset=3 (i32.const 0)))
    (v128.store offset=3 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_0_align_1")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=1 0 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=0 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_0_align_2")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=2 0 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=0 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_0_align_4")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=4 0 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=0 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_1_align_1")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=1 1 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=1 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_1_align_2")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=2 1 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=1 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_1_align_4")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=4 1 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=1 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_2_align_1")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=1 2 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=2 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_2_align_2")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=2 2 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=2 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_2_align_4")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=4 2 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=2 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_3_align_1")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=1 3 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=3 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_3_align_2")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=2 3 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=3 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
  (func (export "v128.store32_lane_3_align_4")
    (param $$address i32) (param $$x v128) (result i64) (local $$ret i64)
    (v128.store32_lane align=4 3 (local.get $$address) (local.get $$x))
    (local.set $$ret (i64.load (local.get $$address)))
    (v128.store offset=3 (i32.const 0) (global.get $$zero))
    (local.get $$ret))
)`);


assert_return(
  () => invoke($0, `v128.store32_lane_0`, [0, i32x4([0x3020100, 0x0, 0x0, 0x0])]),
  [value("i64", 50462976n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_1`, [1, i32x4([0x0, 0x4030201, 0x0, 0x0])]),
  [value("i64", 67305985n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_2`, [2, i32x4([0x0, 0x0, 0x5040302, 0x0])]),
  [value("i64", 84148994n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_3`, [3, i32x4([0x0, 0x0, 0x0, 0x6050403])]),
  [value("i64", 100992003n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_0_offset_0`, [i32x4([0x3020100, 0x0, 0x0, 0x0])]),
  [value("i64", 50462976n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_1_offset_1`, [i32x4([0x0, 0x4030201, 0x0, 0x0])]),
  [value("i64", 67305985n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_2_offset_2`, [i32x4([0x0, 0x0, 0x5040302, 0x0])]),
  [value("i64", 84148994n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_3_offset_3`, [i32x4([0x0, 0x0, 0x0, 0x6050403])]),
  [value("i64", 100992003n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_0_align_1`, [
    0,
    i32x4([0x3020100, 0x0, 0x0, 0x0]),
  ]),
  [value("i64", 50462976n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_0_align_2`, [
    0,
    i32x4([0x3020100, 0x0, 0x0, 0x0]),
  ]),
  [value("i64", 50462976n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_0_align_4`, [
    0,
    i32x4([0x3020100, 0x0, 0x0, 0x0]),
  ]),
  [value("i64", 50462976n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_1_align_1`, [
    1,
    i32x4([0x0, 0x4030201, 0x0, 0x0]),
  ]),
  [value("i64", 67305985n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_1_align_2`, [
    1,
    i32x4([0x0, 0x4030201, 0x0, 0x0]),
  ]),
  [value("i64", 67305985n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_1_align_4`, [
    1,
    i32x4([0x0, 0x4030201, 0x0, 0x0]),
  ]),
  [value("i64", 67305985n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_2_align_1`, [
    2,
    i32x4([0x0, 0x0, 0x5040302, 0x0]),
  ]),
  [value("i64", 84148994n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_2_align_2`, [
    2,
    i32x4([0x0, 0x0, 0x5040302, 0x0]),
  ]),
  [value("i64", 84148994n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_2_align_4`, [
    2,
    i32x4([0x0, 0x0, 0x5040302, 0x0]),
  ]),
  [value("i64", 84148994n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_3_align_1`, [
    3,
    i32x4([0x0, 0x0, 0x0, 0x6050403]),
  ]),
  [value("i64", 100992003n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_3_align_2`, [
    3,
    i32x4([0x0, 0x0, 0x0, 0x6050403]),
  ]),
  [value("i64", 100992003n)],
);


assert_return(
  () => invoke($0, `v128.store32_lane_3_align_4`, [
    3,
    i32x4([0x0, 0x0, 0x0, 0x6050403]),
  ]),
  [value("i64", 100992003n)],
);


assert_invalid(
  () => instantiate(`(module (memory 1)
          (func (param $$x v128) (result v128)
            (v128.store32_lane 0 (local.get $$x) (i32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (memory 1)
          (func (param $$x v128) (result v128)
            (v128.store32_lane 4 (i32.const 0) (local.get $$x))))`),
  `invalid lane index`,
);


assert_invalid(
  () => instantiate(`(module (memory 1)
          (func (param $$x v128) (result v128)
          (v128.store32_lane align=8 0 (i32.const 0) (local.get $$x))))`),
  `alignment must not be larger than natural`,
);
