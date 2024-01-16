




let $0 = instantiate(`(module
  ;; Statement switch
  (func (export "stmt") (param $$i i32) (result i32)
    (local $$j i32)
    (local.set $$j (i32.const 100))
    (block $$switch
      (block $$7
        (block $$default
          (block $$6
            (block $$5
              (block $$4
                (block $$3
                  (block $$2
                    (block $$1
                      (block $$0
                        (br_table $$0 $$1 $$2 $$3 $$4 $$5 $$6 $$7 $$default
                          (local.get $$i)
                        )
                      ) ;; 0
                      (return (local.get $$i))
                    ) ;; 1
                    (nop)
                    ;; fallthrough
                  ) ;; 2
                  ;; fallthrough
                ) ;; 3
                (local.set $$j (i32.sub (i32.const 0) (local.get $$i)))
                (br $$switch)
              ) ;; 4
              (br $$switch)
            ) ;; 5
            (local.set $$j (i32.const 101))
            (br $$switch)
          ) ;; 6
          (local.set $$j (i32.const 101))
          ;; fallthrough
        ) ;; default
        (local.set $$j (i32.const 102))
      ) ;; 7
      ;; fallthrough
    )
    (return (local.get $$j))
  )

  ;; Expression switch
  (func (export "expr") (param $$i i64) (result i64)
    (local $$j i64)
    (local.set $$j (i64.const 100))
    (return
      (block $$switch (result i64)
        (block $$7
          (block $$default
            (block $$4
              (block $$5
                (block $$6
                  (block $$3
                    (block $$2
                      (block $$1
                        (block $$0
                          (br_table $$0 $$1 $$2 $$3 $$4 $$5 $$6 $$7 $$default
                            (i32.wrap_i64 (local.get $$i))
                          )
                        ) ;; 0
                        (return (local.get $$i))
                      ) ;; 1
                      (nop)
                      ;; fallthrough
                    ) ;; 2
                    ;; fallthrough
                  ) ;; 3
                  (br $$switch (i64.sub (i64.const 0) (local.get $$i)))
                ) ;; 6
                (local.set $$j (i64.const 101))
                ;; fallthrough
              ) ;; 4
              ;; fallthrough
            ) ;; 5
            ;; fallthrough
          ) ;; default
          (br $$switch (local.get $$j))
        ) ;; 7
        (i64.const -5)
      )
    )
  )

  ;; Argument switch
  (func (export "arg") (param $$i i32) (result i32)
    (return
      (block $$2 (result i32)
        (i32.add (i32.const 10)
          (block $$1 (result i32)
            (i32.add (i32.const 100)
              (block $$0 (result i32)
                (i32.add (i32.const 1000)
                  (block $$default (result i32)
                    (br_table $$0 $$1 $$2 $$default
                      (i32.mul (i32.const 2) (local.get $$i))
                      (i32.and (i32.const 3) (local.get $$i))
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )

  ;; Corner cases
  (func (export "corner") (result i32)
    (block
      (br_table 0 (i32.const 0))
    )
    (i32.const 1)
  )
)`);


assert_return(() => invoke($0, `stmt`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `stmt`, [1]), [value("i32", -1)]);


assert_return(() => invoke($0, `stmt`, [2]), [value("i32", -2)]);


assert_return(() => invoke($0, `stmt`, [3]), [value("i32", -3)]);


assert_return(() => invoke($0, `stmt`, [4]), [value("i32", 100)]);


assert_return(() => invoke($0, `stmt`, [5]), [value("i32", 101)]);


assert_return(() => invoke($0, `stmt`, [6]), [value("i32", 102)]);


assert_return(() => invoke($0, `stmt`, [7]), [value("i32", 100)]);


assert_return(() => invoke($0, `stmt`, [-10]), [value("i32", 102)]);


assert_return(() => invoke($0, `expr`, [0n]), [value("i64", 0n)]);


assert_return(() => invoke($0, `expr`, [1n]), [value("i64", -1n)]);


assert_return(() => invoke($0, `expr`, [2n]), [value("i64", -2n)]);


assert_return(() => invoke($0, `expr`, [3n]), [value("i64", -3n)]);


assert_return(() => invoke($0, `expr`, [6n]), [value("i64", 101n)]);


assert_return(() => invoke($0, `expr`, [7n]), [value("i64", -5n)]);


assert_return(() => invoke($0, `expr`, [-10n]), [value("i64", 100n)]);


assert_return(() => invoke($0, `arg`, [0]), [value("i32", 110)]);


assert_return(() => invoke($0, `arg`, [1]), [value("i32", 12)]);


assert_return(() => invoke($0, `arg`, [2]), [value("i32", 4)]);


assert_return(() => invoke($0, `arg`, [3]), [value("i32", 1116)]);


assert_return(() => invoke($0, `arg`, [4]), [value("i32", 118)]);


assert_return(() => invoke($0, `arg`, [5]), [value("i32", 20)]);


assert_return(() => invoke($0, `arg`, [6]), [value("i32", 12)]);


assert_return(() => invoke($0, `arg`, [7]), [value("i32", 1124)]);


assert_return(() => invoke($0, `arg`, [8]), [value("i32", 126)]);


assert_return(() => invoke($0, `corner`, []), [value("i32", 1)]);


assert_invalid(
  () => instantiate(`(module (func (br_table 3 (i32.const 0))))`),
  `unknown label`,
);
