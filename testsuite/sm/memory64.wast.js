




let $0 = instantiate(`(module (memory i64 0 0))`);


let $1 = instantiate(`(module (memory i64 0 1))`);


let $2 = instantiate(`(module (memory i64 1 256))`);


let $3 = instantiate(`(module (memory i64 0 65536))`);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (memory i64 0))`),
  `multiple memories`,
);


assert_invalid(
  () => instantiate(`(module (memory (import "spectest" "memory") i64 0) (memory i64 0))`),
  `multiple memories`,
);


let $4 = instantiate(`(module (memory i64 (data)) (func (export "memsize") (result i64) (memory.size)))`);


assert_return(() => invoke($4, `memsize`, []), [value("i64", 0n)]);


let $5 = instantiate(`(module (memory i64 (data "")) (func (export "memsize") (result i64) (memory.size)))`);


assert_return(() => invoke($5, `memsize`, []), [value("i64", 0n)]);


let $6 = instantiate(`(module (memory i64 (data "x")) (func (export "memsize") (result i64) (memory.size)))`);


assert_return(() => invoke($6, `memsize`, []), [value("i64", 1n)]);


assert_invalid(() => instantiate(`(module (data (i64.const 0)))`), `unknown memory`);


assert_invalid(() => instantiate(`(module (data (i64.const 0) ""))`), `unknown memory`);


assert_invalid(() => instantiate(`(module (data (i64.const 0) "x"))`), `unknown memory`);


assert_invalid(
  () => instantiate(`(module (func (drop (f32.load (i64.const 0)))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (func (f32.store (i64.const 0) (f32.const 0))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (func (drop (i32.load8_s (i64.const 0)))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (func (i32.store8 (i64.const 0) (i32.const 0))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (func (drop (memory.size))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (func (drop (memory.grow (i64.const 0)))))`),
  `unknown memory`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 1 0))`),
  `size minimum must not be greater than maximum`,
);


let $7 = instantiate(`(module
  (memory i64 1)
  (data (i64.const 0) "ABC\\a7D") (data (i64.const 20) "WASM")

  ;; Data section
  (func (export "data") (result i32)
    (i32.and
      (i32.and
        (i32.and
          (i32.eq (i32.load8_u (i64.const 0)) (i32.const 65))
          (i32.eq (i32.load8_u (i64.const 3)) (i32.const 167))
        )
        (i32.and
          (i32.eq (i32.load8_u (i64.const 6)) (i32.const 0))
          (i32.eq (i32.load8_u (i64.const 19)) (i32.const 0))
        )
      )
      (i32.and
        (i32.and
          (i32.eq (i32.load8_u (i64.const 20)) (i32.const 87))
          (i32.eq (i32.load8_u (i64.const 23)) (i32.const 77))
        )
        (i32.and
          (i32.eq (i32.load8_u (i64.const 24)) (i32.const 0))
          (i32.eq (i32.load8_u (i64.const 1023)) (i32.const 0))
        )
      )
    )
  )

  ;; Memory cast
  (func (export "cast") (result f64)
    (i64.store (i64.const 8) (i64.const -12345))
    (if
      (f64.eq
        (f64.load (i64.const 8))
        (f64.reinterpret_i64 (i64.const -12345))
      )
      (then (return (f64.const 0)))
    )
    (i64.store align=1 (i64.const 9) (i64.const 0))
    (i32.store16 align=1 (i64.const 15) (i32.const 16453))
    (f64.load align=1 (i64.const 9))
  )

  ;; Sign and zero extending memory loads
  (func (export "i32_load8_s") (param $$i i32) (result i32)
	(i32.store8 (i64.const 8) (local.get $$i))
	(i32.load8_s (i64.const 8))
  )
  (func (export "i32_load8_u") (param $$i i32) (result i32)
	(i32.store8 (i64.const 8) (local.get $$i))
	(i32.load8_u (i64.const 8))
  )
  (func (export "i32_load16_s") (param $$i i32) (result i32)
	(i32.store16 (i64.const 8) (local.get $$i))
	(i32.load16_s (i64.const 8))
  )
  (func (export "i32_load16_u") (param $$i i32) (result i32)
	(i32.store16 (i64.const 8) (local.get $$i))
	(i32.load16_u (i64.const 8))
  )
  (func (export "i64_load8_s") (param $$i i64) (result i64)
	(i64.store8 (i64.const 8) (local.get $$i))
	(i64.load8_s (i64.const 8))
  )
  (func (export "i64_load8_u") (param $$i i64) (result i64)
	(i64.store8 (i64.const 8) (local.get $$i))
	(i64.load8_u (i64.const 8))
  )
  (func (export "i64_load16_s") (param $$i i64) (result i64)
	(i64.store16 (i64.const 8) (local.get $$i))
	(i64.load16_s (i64.const 8))
  )
  (func (export "i64_load16_u") (param $$i i64) (result i64)
	(i64.store16 (i64.const 8) (local.get $$i))
	(i64.load16_u (i64.const 8))
  )
  (func (export "i64_load32_s") (param $$i i64) (result i64)
	(i64.store32 (i64.const 8) (local.get $$i))
	(i64.load32_s (i64.const 8))
  )
  (func (export "i64_load32_u") (param $$i i64) (result i64)
	(i64.store32 (i64.const 8) (local.get $$i))
	(i64.load32_u (i64.const 8))
  )
)`);


assert_return(() => invoke($7, `data`, []), [value("i32", 1)]);


assert_return(() => invoke($7, `cast`, []), [value("f64", 42)]);


assert_return(() => invoke($7, `i32_load8_s`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($7, `i32_load8_u`, [-1]), [value("i32", 255)]);


assert_return(() => invoke($7, `i32_load16_s`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($7, `i32_load16_u`, [-1]), [value("i32", 65535)]);


assert_return(() => invoke($7, `i32_load8_s`, [100]), [value("i32", 100)]);


assert_return(() => invoke($7, `i32_load8_u`, [200]), [value("i32", 200)]);


assert_return(() => invoke($7, `i32_load16_s`, [20000]), [value("i32", 20000)]);


assert_return(() => invoke($7, `i32_load16_u`, [40000]), [value("i32", 40000)]);


assert_return(() => invoke($7, `i32_load8_s`, [-19110589]), [value("i32", 67)]);


assert_return(() => invoke($7, `i32_load8_s`, [878104047]), [value("i32", -17)]);


assert_return(() => invoke($7, `i32_load8_u`, [-19110589]), [value("i32", 67)]);


assert_return(() => invoke($7, `i32_load8_u`, [878104047]), [value("i32", 239)]);


assert_return(() => invoke($7, `i32_load16_s`, [-19110589]), [value("i32", 25923)]);


assert_return(() => invoke($7, `i32_load16_s`, [878104047]), [value("i32", -12817)]);


assert_return(() => invoke($7, `i32_load16_u`, [-19110589]), [value("i32", 25923)]);


assert_return(() => invoke($7, `i32_load16_u`, [878104047]), [value("i32", 52719)]);


assert_return(() => invoke($7, `i64_load8_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($7, `i64_load8_u`, [-1n]), [value("i64", 255n)]);


assert_return(() => invoke($7, `i64_load16_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($7, `i64_load16_u`, [-1n]), [value("i64", 65535n)]);


assert_return(() => invoke($7, `i64_load32_s`, [-1n]), [value("i64", -1n)]);


assert_return(() => invoke($7, `i64_load32_u`, [-1n]), [value("i64", 4294967295n)]);


assert_return(() => invoke($7, `i64_load8_s`, [100n]), [value("i64", 100n)]);


assert_return(() => invoke($7, `i64_load8_u`, [200n]), [value("i64", 200n)]);


assert_return(() => invoke($7, `i64_load16_s`, [20000n]), [value("i64", 20000n)]);


assert_return(() => invoke($7, `i64_load16_u`, [40000n]), [value("i64", 40000n)]);


assert_return(() => invoke($7, `i64_load32_s`, [20000n]), [value("i64", 20000n)]);


assert_return(() => invoke($7, `i64_load32_u`, [40000n]), [value("i64", 40000n)]);


assert_return(() => invoke($7, `i64_load8_s`, [-81985529755441853n]), [value("i64", 67n)]);


assert_return(() => invoke($7, `i64_load8_s`, [3771275841602506223n]), [value("i64", -17n)]);


assert_return(() => invoke($7, `i64_load8_u`, [-81985529755441853n]), [value("i64", 67n)]);


assert_return(() => invoke($7, `i64_load8_u`, [3771275841602506223n]), [value("i64", 239n)]);


assert_return(() => invoke($7, `i64_load16_s`, [-81985529755441853n]), [value("i64", 25923n)]);


assert_return(() => invoke($7, `i64_load16_s`, [3771275841602506223n]), [value("i64", -12817n)]);


assert_return(() => invoke($7, `i64_load16_u`, [-81985529755441853n]), [value("i64", 25923n)]);


assert_return(() => invoke($7, `i64_load16_u`, [3771275841602506223n]), [value("i64", 52719n)]);


assert_return(() => invoke($7, `i64_load32_s`, [-81985529755441853n]), [value("i64", 1446274371n)]);


assert_return(() => invoke($7, `i64_load32_s`, [3771275841602506223n]), [value("i64", -1732588049n)]);


assert_return(() => invoke($7, `i64_load32_u`, [-81985529755441853n]), [value("i64", 1446274371n)]);


assert_return(() => invoke($7, `i64_load32_u`, [3771275841602506223n]), [value("i64", 2562379247n)]);
