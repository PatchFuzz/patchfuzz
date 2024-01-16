




let $0 = instantiate(`(module
  (memory i64 1)

  ;; Stores an i16 value in little-endian-format
  (func $$i16_store_little (param $$address i64) (param $$value i32)
    (i32.store8 (local.get $$address) (local.get $$value))
    (i32.store8 (i64.add (local.get $$address) (i64.const 1)) (i32.shr_u (local.get $$value) (i32.const 8)))
  )

  ;; Stores an i32 value in little-endian format
  (func $$i32_store_little (param $$address i64) (param $$value i32)
    (call $$i16_store_little (local.get $$address) (local.get $$value))
    (call $$i16_store_little (i64.add (local.get $$address) (i64.const 2)) (i32.shr_u (local.get $$value) (i32.const 16)))
  )

  ;; Stores an i64 value in little-endian format
  (func $$i64_store_little (param $$address i64) (param $$value i64)
    (call $$i32_store_little (local.get $$address) (i32.wrap_i64 (local.get $$value)))
    (call $$i32_store_little (i64.add (local.get $$address) (i64.const 4)) (i32.wrap_i64 (i64.shr_u (local.get $$value) (i64.const 32))))
  )

  ;; Loads an i16 value in little-endian format
  (func $$i16_load_little (param $$address i64) (result i32)
    (i32.or
      (i32.load8_u (local.get $$address))
      (i32.shl (i32.load8_u (i64.add (local.get $$address) (i64.const 1))) (i32.const 8))
    )
  )

  ;; Loads an i32 value in little-endian format
  (func $$i32_load_little (param $$address i64) (result i32)
    (i32.or
      (call $$i16_load_little (local.get $$address))
      (i32.shl (call $$i16_load_little (i64.add (local.get $$address) (i64.const 2))) (i32.const 16))
    )
  )

  ;; Loads an i64 value in little-endian format
  (func $$i64_load_little (param $$address i64) (result i64)
    (i64.or
      (i64.extend_i32_u (call $$i32_load_little (local.get $$address)))
      (i64.shl (i64.extend_i32_u (call $$i32_load_little (i64.add (local.get $$address) (i64.const 4)))) (i64.const 32))
    )
  )

  (func (export "i32_load16_s") (param $$value i32) (result i32)
    (call $$i16_store_little (i64.const 0) (local.get $$value))
    (i32.load16_s (i64.const 0))
  )

  (func (export "i32_load16_u") (param $$value i32) (result i32)
    (call $$i16_store_little (i64.const 0) (local.get $$value))
    (i32.load16_u (i64.const 0))
  )

  (func (export "i32_load") (param $$value i32) (result i32)
    (call $$i32_store_little (i64.const 0) (local.get $$value))
    (i32.load (i64.const 0))
  )

  (func (export "i64_load16_s") (param $$value i64) (result i64)
    (call $$i16_store_little (i64.const 0) (i32.wrap_i64 (local.get $$value)))
    (i64.load16_s (i64.const 0))
  )

  (func (export "i64_load16_u") (param $$value i64) (result i64)
    (call $$i16_store_little (i64.const 0) (i32.wrap_i64 (local.get $$value)))
    (i64.load16_u (i64.const 0))
  )

  (func (export "i64_load32_s") (param $$value i64) (result i64)
    (call $$i32_store_little (i64.const 0) (i32.wrap_i64 (local.get $$value)))
    (i64.load32_s (i64.const 0))
  )

  (func (export "i64_load32_u") (param $$value i64) (result i64)
    (call $$i32_store_little (i64.const 0) (i32.wrap_i64 (local.get $$value)))
    (i64.load32_u (i64.const 0))
  )

  (func (export "i64_load") (param $$value i64) (result i64)
    (call $$i64_store_little (i64.const 0) (local.get $$value))
    (i64.load (i64.const 0))
  )

  (func (export "f32_load") (param $$value f32) (result f32)
    (call $$i32_store_little (i64.const 0) (i32.reinterpret_f32 (local.get $$value)))
    (f32.load (i64.const 0))
  )

  (func (export "f64_load") (param $$value f64) (result f64)
    (call $$i64_store_little (i64.const 0) (i64.reinterpret_f64 (local.get $$value)))
    (f64.load (i64.const 0))
  )


  (func (export "i32_store16") (param $$value i32) (result i32)
    (i32.store16 (i64.const 0) (local.get $$value))
    (call $$i16_load_little (i64.const 0))
  )

  (func (export "i32_store") (param $$value i32) (result i32)
    (i32.store (i64.const 0) (local.get $$value))
    (call $$i32_load_little (i64.const 0))
  )

  (func (export "i64_store16") (param $$value i64) (result i64)
    (i64.store16 (i64.const 0) (local.get $$value))
    (i64.extend_i32_u (call $$i16_load_little (i64.const 0)))
  )

  (func (export "i64_store32") (param $$value i64) (result i64)
    (i64.store32 (i64.const 0) (local.get $$value))
    (i64.extend_i32_u (call $$i32_load_little (i64.const 0)))
  )

  (func (export "i64_store") (param $$value i64) (result i64)
    (i64.store (i64.const 0) (local.get $$value))
    (call $$i64_load_little (i64.const 0))
  )

  (func (export "f32_store") (param $$value f32) (result f32)
    (f32.store (i64.const 0) (local.get $$value))
    (f32.reinterpret_i32 (call $$i32_load_little (i64.const 0)))
  )

  (func (export "f64_store") (param $$value f64) (result f64)
    (f64.store (i64.const 0) (local.get $$value))
    (f64.reinterpret_i64 (call $$i64_load_little (i64.const 0)))
  )
)`);


assert_return(() => invoke($0, `i32_load16_s`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32_load16_s`, [-4242]), [value("i32", -4242)]);


assert_return(() => invoke($0, `i32_load16_s`, [42]), [value("i32", 42)]);


assert_return(() => invoke($0, `i32_load16_s`, [12816]), [value("i32", 12816)]);


assert_return(() => invoke($0, `i32_load16_u`, [-1]), [value("i32", 65535)]);


assert_return(() => invoke($0, `i32_load16_u`, [-4242]), [value("i32", 61294)]);


assert_return(() => invoke($0, `i32_load16_u`, [42]), [value("i32", 42)]);


assert_return(() => invoke($0, `i32_load16_u`, [51966]), [value("i32", 51966)]);


assert_return(() => invoke($0, `i32_load`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32_load`, [-42424242]), [value("i32", -42424242)]);


assert_return(() => invoke($0, `i32_load`, [42424242]), [value("i32", 42424242)]);


assert_return(() => invoke($0, `i32_load`, [-1414717974]), [value("i32", -1414717974)]);


assert_return(() => invoke($0, `i64_load16_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64_load16_s`, [-4242n]), [value("i64", -4242n)]);


assert_return(() => invoke($0, `i64_load16_s`, [42n]), [value("i64", 42n)]);


assert_return(() => invoke($0, `i64_load16_s`, [12816n]), [value("i64", 12816n)]);


assert_return(() => invoke($0, `i64_load16_u`, [-1n]), [value("i64", 65535n)]);


assert_return(() => invoke($0, `i64_load16_u`, [-4242n]), [value("i64", 61294n)]);


assert_return(() => invoke($0, `i64_load16_u`, [42n]), [value("i64", 42n)]);


assert_return(() => invoke($0, `i64_load16_u`, [51966n]), [value("i64", 51966n)]);


assert_return(() => invoke($0, `i64_load32_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64_load32_s`, [-42424242n]), [value("i64", -42424242n)]);


assert_return(() => invoke($0, `i64_load32_s`, [42424242n]), [value("i64", 42424242n)]);


assert_return(() => invoke($0, `i64_load32_s`, [305419896n]), [value("i64", 305419896n)]);


assert_return(() => invoke($0, `i64_load32_u`, [-1n]), [value("i64", 4294967295n)]);


assert_return(() => invoke($0, `i64_load32_u`, [-42424242n]), [value("i64", 4252543054n)]);


assert_return(() => invoke($0, `i64_load32_u`, [42424242n]), [value("i64", 42424242n)]);


assert_return(() => invoke($0, `i64_load32_u`, [2880249322n]), [value("i64", 2880249322n)]);


assert_return(() => invoke($0, `i64_load`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64_load`, [-42424242n]), [value("i64", -42424242n)]);


assert_return(() => invoke($0, `i64_load`, [2880249322n]), [value("i64", 2880249322n)]);


assert_return(
  () => invoke($0, `i64_load`, [-6075977126246539798n]),
  [value("i64", -6075977126246539798n)],
);


assert_return(() => invoke($0, `f32_load`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `f32_load`, [value("f32", 0.01234)]), [value("f32", 0.01234)]);


assert_return(() => invoke($0, `f32_load`, [value("f32", 4242.4243)]), [value("f32", 4242.4243)]);


assert_return(
  () => invoke($0, `f32_load`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `f64_load`, [value("f64", -1)]), [value("f64", -1)]);


assert_return(() => invoke($0, `f64_load`, [value("f64", 1234.56789)]), [value("f64", 1234.56789)]);


assert_return(
  () => invoke($0, `f64_load`, [value("f64", 424242.424242)]),
  [value("f64", 424242.424242)],
);


assert_return(
  () => invoke($0, `f64_load`, [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);


assert_return(() => invoke($0, `i32_store16`, [-1]), [value("i32", 65535)]);


assert_return(() => invoke($0, `i32_store16`, [-4242]), [value("i32", 61294)]);


assert_return(() => invoke($0, `i32_store16`, [42]), [value("i32", 42)]);


assert_return(() => invoke($0, `i32_store16`, [51966]), [value("i32", 51966)]);


assert_return(() => invoke($0, `i32_store`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($0, `i32_store`, [-4242]), [value("i32", -4242)]);


assert_return(() => invoke($0, `i32_store`, [42424242]), [value("i32", 42424242)]);


assert_return(() => invoke($0, `i32_store`, [-559035650]), [value("i32", -559035650)]);


assert_return(() => invoke($0, `i64_store16`, [-1n]), [value("i64", 65535n)]);


assert_return(() => invoke($0, `i64_store16`, [-4242n]), [value("i64", 61294n)]);


assert_return(() => invoke($0, `i64_store16`, [42n]), [value("i64", 42n)]);


assert_return(() => invoke($0, `i64_store16`, [51966n]), [value("i64", 51966n)]);


assert_return(() => invoke($0, `i64_store32`, [-1n]), [value("i64", 4294967295n)]);


assert_return(() => invoke($0, `i64_store32`, [-4242n]), [value("i64", 4294963054n)]);


assert_return(() => invoke($0, `i64_store32`, [42424242n]), [value("i64", 42424242n)]);


assert_return(() => invoke($0, `i64_store32`, [3735931646n]), [value("i64", 3735931646n)]);


assert_return(() => invoke($0, `i64_store`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `i64_store`, [-42424242n]), [value("i64", -42424242n)]);


assert_return(() => invoke($0, `i64_store`, [2880249322n]), [value("i64", 2880249322n)]);


assert_return(
  () => invoke($0, `i64_store`, [-6075977126246539798n]),
  [value("i64", -6075977126246539798n)],
);


assert_return(() => invoke($0, `f32_store`, [value("f32", -1)]), [value("f32", -1)]);


assert_return(() => invoke($0, `f32_store`, [value("f32", 0.01234)]), [value("f32", 0.01234)]);


assert_return(() => invoke($0, `f32_store`, [value("f32", 4242.4243)]), [value("f32", 4242.4243)]);


assert_return(
  () => invoke($0, `f32_store`, [value("f32", 340282350000000000000000000000000000000)]),
  [value("f32", 340282350000000000000000000000000000000)],
);


assert_return(() => invoke($0, `f64_store`, [value("f64", -1)]), [value("f64", -1)]);


assert_return(() => invoke($0, `f64_store`, [value("f64", 1234.56789)]), [value("f64", 1234.56789)]);


assert_return(
  () => invoke($0, `f64_store`, [value("f64", 424242.424242)]),
  [value("f64", 424242.424242)],
);


assert_return(
  () => invoke($0, `f64_store`, [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ]),
  [
    value("f64", 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
  ],
);
