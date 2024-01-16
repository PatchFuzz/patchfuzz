




let $0 = instantiate(`(module (memory i64 0) (func (drop (i32.load8_s align=1 (i64.const 0)))))`);


let $1 = instantiate(`(module (memory i64 0) (func (drop (i32.load8_u align=1 (i64.const 0)))))`);


let $2 = instantiate(`(module (memory i64 0) (func (drop (i32.load16_s align=2 (i64.const 0)))))`);


let $3 = instantiate(`(module (memory i64 0) (func (drop (i32.load16_u align=2 (i64.const 0)))))`);


let $4 = instantiate(`(module (memory i64 0) (func (drop (i32.load align=4 (i64.const 0)))))`);


let $5 = instantiate(`(module (memory i64 0) (func (drop (i64.load8_s align=1 (i64.const 0)))))`);


let $6 = instantiate(`(module (memory i64 0) (func (drop (i64.load8_u align=1 (i64.const 0)))))`);


let $7 = instantiate(`(module (memory i64 0) (func (drop (i64.load16_s align=2 (i64.const 0)))))`);


let $8 = instantiate(`(module (memory i64 0) (func (drop (i64.load16_u align=2 (i64.const 0)))))`);


let $9 = instantiate(`(module (memory i64 0) (func (drop (i64.load32_s align=4 (i64.const 0)))))`);


let $10 = instantiate(`(module (memory i64 0) (func (drop (i64.load32_u align=4 (i64.const 0)))))`);


let $11 = instantiate(`(module (memory i64 0) (func (drop (i64.load align=8 (i64.const 0)))))`);


let $12 = instantiate(`(module (memory i64 0) (func (drop (f32.load align=4 (i64.const 0)))))`);


let $13 = instantiate(`(module (memory i64 0) (func (drop (f64.load align=8 (i64.const 0)))))`);


let $14 = instantiate(`(module (memory i64 0) (func (i32.store8 align=1 (i64.const 0) (i32.const 1))))`);


let $15 = instantiate(`(module (memory i64 0) (func (i32.store16 align=2 (i64.const 0) (i32.const 1))))`);


let $16 = instantiate(`(module (memory i64 0) (func (i32.store align=4 (i64.const 0) (i32.const 1))))`);


let $17 = instantiate(`(module (memory i64 0) (func (i64.store8 align=1 (i64.const 0) (i64.const 1))))`);


let $18 = instantiate(`(module (memory i64 0) (func (i64.store16 align=2 (i64.const 0) (i64.const 1))))`);


let $19 = instantiate(`(module (memory i64 0) (func (i64.store32 align=4 (i64.const 0) (i64.const 1))))`);


let $20 = instantiate(`(module (memory i64 0) (func (i64.store align=8 (i64.const 0) (i64.const 1))))`);


let $21 = instantiate(`(module (memory i64 0) (func (f32.store align=4 (i64.const 0) (f32.const 1.0))))`);


let $22 = instantiate(`(module (memory i64 0) (func (f64.store align=8 (i64.const 0) (f64.const 1.0))))`);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_s align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_s align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_u align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_u align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_s align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_s align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_u align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_u align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_s align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_s align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_u align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_u align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_s align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_s align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_u align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_u align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_s align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_s align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_u align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_u align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (f32.load align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (f32.load align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (f64.load align=0 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (drop (f64.load align=7 (i64.const 0))))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store8 align=0 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store8 align=7 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store16 align=0 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store16 align=7 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store align=0 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i32.store align=7 (i64.const 0) (i32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store8 align=0 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store8 align=7 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store16 align=0 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store16 align=7 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store32 align=0 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store32 align=7 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store align=0 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (i64.store align=7 (i64.const 0) (i64.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (f32.store align=0 (i64.const 0) (f32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (f32.store align=7 (i64.const 0) (f32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (f64.store align=0 (i64.const 0) (f32.const 0)))) `),
  `alignment`,
);


assert_malformed(
  () => instantiate(`(module (memory i64 0) (func (f64.store align=7 (i64.const 0) (f32.const 0)))) `),
  `alignment`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_s align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_u align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_s align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_u align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_s align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_u align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_s align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_u align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_s align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_u align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load align=16 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (f32.load align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (f64.load align=16 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_s align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load8_u align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_s align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load16_u align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i32.load align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_s align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load8_u align=2 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_s align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load16_u align=4 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_s align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load32_u align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (i64.load align=16 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (f32.load align=8 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (drop (f64.load align=16 (i64.const 0)))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i32.store8 align=2 (i64.const 0) (i32.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i32.store16 align=4 (i64.const 0) (i32.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i32.store align=8 (i64.const 0) (i32.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i64.store8 align=2 (i64.const 0) (i64.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i64.store16 align=4 (i64.const 0) (i64.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i64.store32 align=8 (i64.const 0) (i64.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (i64.store align=16 (i64.const 0) (i64.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (f32.store align=8 (i64.const 0) (f32.const 0))))`),
  `alignment must not be larger than natural`,
);


assert_invalid(
  () => instantiate(`(module (memory i64 0) (func (f64.store align=16 (i64.const 0) (f64.const 0))))`),
  `alignment must not be larger than natural`,
);


let $23 = instantiate(`(module
  (memory i64 1)

  ;; $$default: natural alignment, $$1: align=1, $$2: align=2, $$4: align=4, $$8: align=8

  (func (export "f32_align_switch") (param i32) (result f32)
    (local f32 f32)
    (local.set 1 (f32.const 10.0))
    (block $$4
      (block $$2
        (block $$1
          (block $$default
            (block $$0
              (br_table $$0 $$default $$1 $$2 $$4 (local.get 0))
            ) ;; 0
            (f32.store (i64.const 0) (local.get 1))
            (local.set 2 (f32.load (i64.const 0)))
            (br $$4)
          ) ;; default
          (f32.store align=1 (i64.const 0) (local.get 1))
          (local.set 2 (f32.load align=1 (i64.const 0)))
          (br $$4)
        ) ;; 1
        (f32.store align=2 (i64.const 0) (local.get 1))
        (local.set 2 (f32.load align=2 (i64.const 0)))
        (br $$4)
      ) ;; 2
      (f32.store align=4 (i64.const 0) (local.get 1))
      (local.set 2 (f32.load align=4 (i64.const 0)))
    ) ;; 4
    (local.get 2)
  )

  (func (export "f64_align_switch") (param i32) (result f64)
    (local f64 f64)
    (local.set 1 (f64.const 10.0))
    (block $$8
      (block $$4
        (block $$2
          (block $$1
            (block $$default
              (block $$0
                (br_table $$0 $$default $$1 $$2 $$4 $$8 (local.get 0))
              ) ;; 0
              (f64.store (i64.const 0) (local.get 1))
              (local.set 2 (f64.load (i64.const 0)))
              (br $$8)
            ) ;; default
            (f64.store align=1 (i64.const 0) (local.get 1))
            (local.set 2 (f64.load align=1 (i64.const 0)))
            (br $$8)
          ) ;; 1
          (f64.store align=2 (i64.const 0) (local.get 1))
          (local.set 2 (f64.load align=2 (i64.const 0)))
          (br $$8)
        ) ;; 2
        (f64.store align=4 (i64.const 0) (local.get 1))
        (local.set 2 (f64.load align=4 (i64.const 0)))
        (br $$8)
      ) ;; 4
      (f64.store align=8 (i64.const 0) (local.get 1))
      (local.set 2 (f64.load align=8 (i64.const 0)))
    ) ;; 8
    (local.get 2)
  )

  ;; $$8s: i32/i64.load8_s, $$8u: i32/i64.load8_u, $$16s: i32/i64.load16_s, $$16u: i32/i64.load16_u, $$32: i32.load
  ;; $$32s: i64.load32_s, $$32u: i64.load32_u, $$64: i64.load

  (func (export "i32_align_switch") (param i32 i32) (result i32)
    (local i32 i32)
    (local.set 2 (i32.const 10))
    (block $$32
      (block $$16u
        (block $$16s
          (block $$8u
            (block $$8s
              (block $$0
                (br_table $$0 $$8s $$8u $$16s $$16u $$32 (local.get 0))
              ) ;; 0
              (if (i32.eq (local.get 1) (i32.const 0))
                (then
                  (i32.store8 (i64.const 0) (local.get 2))
                  (local.set 3 (i32.load8_s (i64.const 0)))
                )
              )
              (if (i32.eq (local.get 1) (i32.const 1))
                (then
                  (i32.store8 align=1 (i64.const 0) (local.get 2))
                  (local.set 3 (i32.load8_s align=1 (i64.const 0)))
                )
              )
              (br $$32)
            ) ;; 8s
            (if (i32.eq (local.get 1) (i32.const 0))
              (then
                (i32.store8 (i64.const 0) (local.get 2))
                (local.set 3 (i32.load8_u (i64.const 0)))
              )
            )
            (if (i32.eq (local.get 1) (i32.const 1))
              (then
                (i32.store8 align=1 (i64.const 0) (local.get 2))
                (local.set 3 (i32.load8_u align=1 (i64.const 0)))
              )
            )
            (br $$32)
          ) ;; 8u
          (if (i32.eq (local.get 1) (i32.const 0))
            (then
              (i32.store16 (i64.const 0) (local.get 2))
              (local.set 3 (i32.load16_s (i64.const 0)))
            )
          )
          (if (i32.eq (local.get 1) (i32.const 1))
            (then
              (i32.store16 align=1 (i64.const 0) (local.get 2))
              (local.set 3 (i32.load16_s align=1 (i64.const 0)))
            )
          )
          (if (i32.eq (local.get 1) (i32.const 2))
            (then
              (i32.store16 align=2 (i64.const 0) (local.get 2))
              (local.set 3 (i32.load16_s align=2 (i64.const 0)))
            )
          )
          (br $$32)
        ) ;; 16s
        (if (i32.eq (local.get 1) (i32.const 0))
          (then
            (i32.store16 (i64.const 0) (local.get 2))
            (local.set 3 (i32.load16_u (i64.const 0)))
          )
        )
        (if (i32.eq (local.get 1) (i32.const 1))
          (then
            (i32.store16 align=1 (i64.const 0) (local.get 2))
            (local.set 3 (i32.load16_u align=1 (i64.const 0)))
          )
        )
        (if (i32.eq (local.get 1) (i32.const 2))
          (then
            (i32.store16 align=2 (i64.const 0) (local.get 2))
            (local.set 3 (i32.load16_u align=2 (i64.const 0)))
          )
        )
        (br $$32)
      ) ;; 16u
      (if (i32.eq (local.get 1) (i32.const 0))
        (then
          (i32.store (i64.const 0) (local.get 2))
          (local.set 3 (i32.load (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 1))
        (then
          (i32.store align=1 (i64.const 0) (local.get 2))
          (local.set 3 (i32.load align=1 (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 2))
        (then
          (i32.store align=2 (i64.const 0) (local.get 2))
          (local.set 3 (i32.load align=2 (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 4))
        (then
          (i32.store align=4 (i64.const 0) (local.get 2))
          (local.set 3 (i32.load align=4 (i64.const 0)))
        )
      )
    ) ;; 32
    (local.get 3)
  )

  (func (export "i64_align_switch") (param i32 i32) (result i64)
    (local i64 i64)
    (local.set 2 (i64.const 10))
    (block $$64
      (block $$32u
        (block $$32s
          (block $$16u
            (block $$16s
              (block $$8u
                (block $$8s
                  (block $$0
                    (br_table $$0 $$8s $$8u $$16s $$16u $$32s $$32u $$64 (local.get 0))
                  ) ;; 0
                  (if (i32.eq (local.get 1) (i32.const 0))
                    (then
                      (i64.store8 (i64.const 0) (local.get 2))
                      (local.set 3 (i64.load8_s (i64.const 0)))
                    )
                  )
                  (if (i32.eq (local.get 1) (i32.const 1))
                    (then
                      (i64.store8 align=1 (i64.const 0) (local.get 2))
                      (local.set 3 (i64.load8_s align=1 (i64.const 0)))
                    )
                  )
                  (br $$64)
                ) ;; 8s
                (if (i32.eq (local.get 1) (i32.const 0))
                  (then
                    (i64.store8 (i64.const 0) (local.get 2))
                    (local.set 3 (i64.load8_u (i64.const 0)))
                  )
                )
                (if (i32.eq (local.get 1) (i32.const 1))
                  (then
                    (i64.store8 align=1 (i64.const 0) (local.get 2))
                    (local.set 3 (i64.load8_u align=1 (i64.const 0)))
                  )
                )
                (br $$64)
              ) ;; 8u
              (if (i32.eq (local.get 1) (i32.const 0))
                (then
                  (i64.store16 (i64.const 0) (local.get 2))
                  (local.set 3 (i64.load16_s (i64.const 0)))
                )
              )
              (if (i32.eq (local.get 1) (i32.const 1))
                (then
                  (i64.store16 align=1 (i64.const 0) (local.get 2))
                  (local.set 3 (i64.load16_s align=1 (i64.const 0)))
                )
              )
              (if (i32.eq (local.get 1) (i32.const 2))
                (then
                  (i64.store16 align=2 (i64.const 0) (local.get 2))
                  (local.set 3 (i64.load16_s align=2 (i64.const 0)))
                )
              )
              (br $$64)
            ) ;; 16s
            (if (i32.eq (local.get 1) (i32.const 0))
              (then
                (i64.store16 (i64.const 0) (local.get 2))
                (local.set 3 (i64.load16_u (i64.const 0)))
              )
            )
            (if (i32.eq (local.get 1) (i32.const 1))
              (then
                (i64.store16 align=1 (i64.const 0) (local.get 2))
                (local.set 3 (i64.load16_u align=1 (i64.const 0)))
              )
            )
            (if (i32.eq (local.get 1) (i32.const 2))
              (then
                (i64.store16 align=2 (i64.const 0) (local.get 2))
                (local.set 3 (i64.load16_u align=2 (i64.const 0)))
              )
            )
            (br $$64)
          ) ;; 16u
          (if (i32.eq (local.get 1) (i32.const 0))
            (then
              (i64.store32 (i64.const 0) (local.get 2))
              (local.set 3 (i64.load32_s (i64.const 0)))
            )
          )
          (if (i32.eq (local.get 1) (i32.const 1))
            (then
              (i64.store32 align=1 (i64.const 0) (local.get 2))
              (local.set 3 (i64.load32_s align=1 (i64.const 0)))
            )
          )
          (if (i32.eq (local.get 1) (i32.const 2))
            (then
              (i64.store32 align=2 (i64.const 0) (local.get 2))
              (local.set 3 (i64.load32_s align=2 (i64.const 0)))
            )
          )
          (if (i32.eq (local.get 1) (i32.const 4))
            (then
              (i64.store32 align=4 (i64.const 0) (local.get 2))
              (local.set 3 (i64.load32_s align=4 (i64.const 0)))
            )
          )
          (br $$64)
        ) ;; 32s
        (if (i32.eq (local.get 1) (i32.const 0))
          (then
            (i64.store32 (i64.const 0) (local.get 2))
            (local.set 3 (i64.load32_u (i64.const 0)))
          )
        )
        (if (i32.eq (local.get 1) (i32.const 1))
          (then
            (i64.store32 align=1 (i64.const 0) (local.get 2))
            (local.set 3 (i64.load32_u align=1 (i64.const 0)))
          )
        )
        (if (i32.eq (local.get 1) (i32.const 2))
          (then
            (i64.store32 align=2 (i64.const 0) (local.get 2))
            (local.set 3 (i64.load32_u align=2 (i64.const 0)))
          )
        )
        (if (i32.eq (local.get 1) (i32.const 4))
          (then
            (i64.store32 align=4 (i64.const 0) (local.get 2))
            (local.set 3 (i64.load32_u align=4 (i64.const 0)))
          )
        )
        (br $$64)
      ) ;; 32u
      (if (i32.eq (local.get 1) (i32.const 0))
        (then
          (i64.store (i64.const 0) (local.get 2))
          (local.set 3 (i64.load (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 1))
        (then
          (i64.store align=1 (i64.const 0) (local.get 2))
          (local.set 3 (i64.load align=1 (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 2))
        (then
          (i64.store align=2 (i64.const 0) (local.get 2))
          (local.set 3 (i64.load align=2 (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 4))
        (then
          (i64.store align=4 (i64.const 0) (local.get 2))
          (local.set 3 (i64.load align=4 (i64.const 0)))
        )
      )
      (if (i32.eq (local.get 1) (i32.const 8))
        (then
          (i64.store align=8 (i64.const 0) (local.get 2))
          (local.set 3 (i64.load align=8 (i64.const 0)))
        )
      )
    ) ;; 64
    (local.get 3)
  )
)`);


assert_return(() => invoke($23, `f32_align_switch`, [0]), [value("f32", 10)]);


assert_return(() => invoke($23, `f32_align_switch`, [1]), [value("f32", 10)]);


assert_return(() => invoke($23, `f32_align_switch`, [2]), [value("f32", 10)]);


assert_return(() => invoke($23, `f32_align_switch`, [3]), [value("f32", 10)]);


assert_return(() => invoke($23, `f64_align_switch`, [0]), [value("f64", 10)]);


assert_return(() => invoke($23, `f64_align_switch`, [1]), [value("f64", 10)]);


assert_return(() => invoke($23, `f64_align_switch`, [2]), [value("f64", 10)]);


assert_return(() => invoke($23, `f64_align_switch`, [3]), [value("f64", 10)]);


assert_return(() => invoke($23, `f64_align_switch`, [4]), [value("f64", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [0, 0]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [0, 1]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [1, 0]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [1, 1]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [2, 0]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [2, 1]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [2, 2]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [3, 0]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [3, 1]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [3, 2]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [4, 0]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [4, 1]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [4, 2]), [value("i32", 10)]);


assert_return(() => invoke($23, `i32_align_switch`, [4, 4]), [value("i32", 10)]);


assert_return(() => invoke($23, `i64_align_switch`, [0, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [0, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [1, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [1, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [2, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [2, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [2, 2]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [3, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [3, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [3, 2]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [4, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [4, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [4, 2]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [4, 4]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [5, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [5, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [5, 2]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [5, 4]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [6, 0]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [6, 1]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [6, 2]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [6, 4]), [value("i64", 10n)]);


assert_return(() => invoke($23, `i64_align_switch`, [6, 8]), [value("i64", 10n)]);


let $24 = instantiate(`(module
  (memory i64 1)
  (func (export "store") (param i64 i64)
    (i64.store align=4 (local.get 0) (local.get 1))
  )
  (func (export "load") (param i64) (result i32)
    (i32.load (local.get 0))
  )
)`);



if (!partialOobWriteMayWritePartialData()) {
    
    assert_trap(
        () => invoke($24, `store`, [65532n, -1n]),
        `out of bounds memory access`,
    );

    
    assert_return(() => invoke($24, `load`, [65532n]), [value("i32", 0)]);
}
