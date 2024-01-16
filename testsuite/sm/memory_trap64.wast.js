




let $0 = instantiate(`(module
    (memory i64 1)

    (func $$addr_limit (result i64)
      (i64.mul (memory.size) (i64.const 0x10000))
    )

    (func (export "store") (param $$i i64) (param $$v i32)
      (i32.store (i64.add (call $$addr_limit) (local.get $$i)) (local.get $$v))
    )

    (func (export "load") (param $$i i64) (result i32)
      (i32.load (i64.add (call $$addr_limit) (local.get $$i)))
    )

    (func (export "memory.grow") (param i64) (result i64)
      (memory.grow (local.get 0))
    )
)`);


assert_return(() => invoke($0, `store`, [-4n, 42]), []);


assert_return(() => invoke($0, `load`, [-4n]), [value("i32", 42)]);


assert_trap(() => invoke($0, `store`, [-3n, 13]), `out of bounds memory access`);


assert_trap(() => invoke($0, `load`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `store`, [-2n, 13]), `out of bounds memory access`);


assert_trap(() => invoke($0, `load`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `store`, [-1n, 13]), `out of bounds memory access`);


assert_trap(() => invoke($0, `load`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `store`, [0n, 13]), `out of bounds memory access`);


assert_trap(() => invoke($0, `load`, [0n]), `out of bounds memory access`);


assert_trap(() => invoke($0, `store`, [2147483648n, 13]), `out of bounds memory access`);


assert_trap(() => invoke($0, `load`, [2147483648n]), `out of bounds memory access`);


let $1 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "abcdefgh")
  (data (i64.const 0xfff8) "abcdefgh")

  (func (export "i32.load") (param $$a i64) (result i32)
    (i32.load (local.get $$a))
  )
  (func (export "i64.load") (param $$a i64) (result i64)
    (i64.load (local.get $$a))
  )
  (func (export "f32.load") (param $$a i64) (result f32)
    (f32.load (local.get $$a))
  )
  (func (export "f64.load") (param $$a i64) (result f64)
    (f64.load (local.get $$a))
  )
  (func (export "i32.load8_s") (param $$a i64) (result i32)
    (i32.load8_s (local.get $$a))
  )
  (func (export "i32.load8_u") (param $$a i64) (result i32)
    (i32.load8_u (local.get $$a))
  )
  (func (export "i32.load16_s") (param $$a i64) (result i32)
    (i32.load16_s (local.get $$a))
  )
  (func (export "i32.load16_u") (param $$a i64) (result i32)
    (i32.load16_u (local.get $$a))
  )
  (func (export "i64.load8_s") (param $$a i64) (result i64)
    (i64.load8_s (local.get $$a))
  )
  (func (export "i64.load8_u") (param $$a i64) (result i64)
    (i64.load8_u (local.get $$a))
  )
  (func (export "i64.load16_s") (param $$a i64) (result i64)
    (i64.load16_s (local.get $$a))
  )
  (func (export "i64.load16_u") (param $$a i64) (result i64)
    (i64.load16_u (local.get $$a))
  )
  (func (export "i64.load32_s") (param $$a i64) (result i64)
    (i64.load32_s (local.get $$a))
  )
  (func (export "i64.load32_u") (param $$a i64) (result i64)
    (i64.load32_u (local.get $$a))
  )
  (func (export "i32.store") (param $$a i64) (param $$v i32)
    (i32.store (local.get $$a) (local.get $$v))
  )
  (func (export "i64.store") (param $$a i64) (param $$v i64)
    (i64.store (local.get $$a) (local.get $$v))
  )
  (func (export "f32.store") (param $$a i64) (param $$v f32)
    (f32.store (local.get $$a) (local.get $$v))
  )
  (func (export "f64.store") (param $$a i64) (param $$v f64)
    (f64.store (local.get $$a) (local.get $$v))
  )
  (func (export "i32.store8") (param $$a i64) (param $$v i32)
    (i32.store8 (local.get $$a) (local.get $$v))
  )
  (func (export "i32.store16") (param $$a i64) (param $$v i32)
    (i32.store16 (local.get $$a) (local.get $$v))
  )
  (func (export "i64.store8") (param $$a i64) (param $$v i64)
    (i64.store8 (local.get $$a) (local.get $$v))
  )
  (func (export "i64.store16") (param $$a i64) (param $$v i64)
    (i64.store16 (local.get $$a) (local.get $$v))
  )
  (func (export "i64.store32") (param $$a i64) (param $$v i64)
    (i64.store32 (local.get $$a) (local.get $$v))
  )
)`);


assert_trap(() => invoke($1, `i32.store`, [65536n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [65535n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [65534n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [65533n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [-1n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [-2n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [-3n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store`, [-4n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65536n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65535n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65534n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65533n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65532n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65531n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65530n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [65529n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-1n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-2n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-3n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-4n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-5n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-6n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-7n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store`, [-8n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [65536n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [65535n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [65534n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [65533n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [-1n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [-2n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [-3n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.store`, [-4n, value("f32", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65536n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65535n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65534n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65533n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65532n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65531n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65530n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [65529n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-1n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-2n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-3n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-4n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-5n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-6n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-7n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.store`, [-8n, value("f64", 0)]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store8`, [65536n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store8`, [-1n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store16`, [65536n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store16`, [65535n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store16`, [-1n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.store16`, [-2n, 0]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store8`, [65536n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store8`, [-1n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store16`, [65536n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store16`, [65535n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store16`, [-1n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store16`, [-2n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [65536n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [65535n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [65534n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [65533n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [-1n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [-2n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [-3n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.store32`, [-4n, 0n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load`, [-4n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65532n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65531n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65530n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [65529n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-4n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-5n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-6n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-7n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load`, [-8n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f32.load`, [-4n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65532n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65531n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65530n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [65529n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-4n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-5n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-6n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-7n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `f64.load`, [-8n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load8_s`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load8_s`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load8_u`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load8_u`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_s`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_s`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_s`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_s`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_u`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_u`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_u`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i32.load16_u`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load8_s`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load8_s`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load8_u`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load8_u`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_s`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_s`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_s`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_s`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_u`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_u`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_u`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load16_u`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_s`, [-4n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [65536n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [65535n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [65534n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [65533n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [-1n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [-2n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [-3n]), `out of bounds memory access`);


assert_trap(() => invoke($1, `i64.load32_u`, [-4n]), `out of bounds memory access`);



if (!partialOobWriteMayWritePartialData()) {
    
    assert_return(() => invoke($1, `i64.load`, [65528n]), [
        value("i64", 7523094288207667809n),
    ]);

    
    assert_return(() => invoke($1, `i64.load`, [0n]), [
        value("i64", 7523094288207667809n),
    ]);
}
