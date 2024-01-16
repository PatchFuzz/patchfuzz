




let $0 = instantiate(`(module
  (func (export "block") (result i32)
    (block $$exit (result i32)
      (br $$exit (i32.const 1))
      (i32.const 0)
    )
  )

  (func (export "loop1") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block $$exit (result i32)
      (loop $$cont (result i32)
        (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
        (if (i32.eq (local.get $$i) (i32.const 5))
          (then (br $$exit (local.get $$i)))
        )
        (br $$cont)
      )
    )
  )

  (func (export "loop2") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block $$exit (result i32)
      (loop $$cont (result i32)
        (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
        (if (i32.eq (local.get $$i) (i32.const 5))
          (then (br $$cont))
        )
        (if (i32.eq (local.get $$i) (i32.const 8))
          (then (br $$exit (local.get $$i)))
        )
        (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
        (br $$cont)
      )
    )
  )

  (func (export "loop3") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block $$exit (result i32)
      (loop $$cont (result i32)
        (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
        (if (i32.eq (local.get $$i) (i32.const 5))
          (then (br $$exit (local.get $$i)))
        )
        (local.get $$i)
      )
    )
  )

  (func (export "loop4") (param $$max i32) (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 1))
    (block $$exit (result i32)
      (loop $$cont (result i32)
        (local.set $$i (i32.add (local.get $$i) (local.get $$i)))
        (if (i32.gt_u (local.get $$i) (local.get $$max))
          (then (br $$exit (local.get $$i)))
        )
        (br $$cont)
      )
    )
  )

  (func (export "loop5") (result i32)
    (i32.add
      (loop $$l (result i32) (i32.const 1))
      (i32.const 1)
    )
  )

  (func (export "loop6") (result i32)
    (loop (result i32)
      (br_if 0 (i32.const 0))
      (i32.const 3)
    )
  )

  (func (export "if") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block
      (if $$l
        (i32.const 1)
        (then (br $$l) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if $$l
        (i32.const 1)
        (then (br $$l) (local.set $$i (i32.const 666)))
        (else (local.set $$i (i32.const 888)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if $$l
        (i32.const 1)
        (then (br $$l) (local.set $$i (i32.const 666)))
        (else (local.set $$i (i32.const 888)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if $$l
        (i32.const 0)
        (then (local.set $$i (i32.const 888)))
        (else (br $$l) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if $$l
        (i32.const 0)
        (then (local.set $$i (i32.const 888)))
        (else (br $$l) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
    )
    (local.get $$i)
  )

  (func (export "if2") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block
      (if
        (i32.const 1)
        (then (br 0) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if
        (i32.const 1)
        (then (br 0) (local.set $$i (i32.const 666)))
        (else (local.set $$i (i32.const 888)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if
        (i32.const 1)
        (then (br 0) (local.set $$i (i32.const 666)))
        (else (local.set $$i (i32.const 888)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if
        (i32.const 0)
        (then (local.set $$i (i32.const 888)))
        (else (br 0) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
      (if
        (i32.const 0)
        (then (local.set $$i (i32.const 888)))
        (else (br 0) (local.set $$i (i32.const 666)))
      )
      (local.set $$i (i32.add (local.get $$i) (i32.const 1)))
    )
    (local.get $$i)
  )

  (func (export "switch") (param i32) (result i32)
    (block $$ret (result i32)
      (i32.mul (i32.const 10)
        (block $$exit (result i32)
          (block $$0
            (block $$default
              (block $$3
                (block $$2
                  (block $$1
                    (br_table $$0 $$1 $$2 $$3 $$default (local.get 0))
                  ) ;; 1
                ) ;; 2
                (br $$exit (i32.const 2))
              ) ;; 3
              (br $$ret (i32.const 3))
            ) ;; default
          ) ;; 0
          (i32.const 5)
        )
      )
    )
  )

  (func (export "return") (param i32) (result i32)
    (block $$default
      (block $$1
        (block $$0
          (br_table $$0 $$1 (local.get 0))
          (br $$default)
        ) ;; 0
        (return (i32.const 0))
      ) ;; 1
    ) ;; default
    (i32.const 2)
  )

  (func (export "br_if0") (result i32)
    (local $$i i32)
    (local.set $$i (i32.const 0))
    (block $$outer (result i32)
      (block $$inner
        (br_if $$inner (i32.const 0))
        (local.set $$i (i32.or (local.get $$i) (i32.const 0x1)))
        (br_if $$inner (i32.const 1))
        (local.set $$i (i32.or (local.get $$i) (i32.const 0x2)))
      )
      (drop (br_if $$outer
        (block (result i32)
          (local.set $$i (i32.or (local.get $$i) (i32.const 0x4)))
          (local.get $$i)
        )
        (i32.const 0)
      ))
      (local.set $$i (i32.or (local.get $$i) (i32.const 0x8)))
      (drop (br_if $$outer
        (block (result i32)
          (local.set $$i (i32.or (local.get $$i) (i32.const 0x10)))
          (local.get $$i)
        )
        (i32.const 1)
      ))
      (local.set $$i (i32.or (local.get $$i) (i32.const 0x20))) (local.get $$i)
    )
  )

  (func (export "br_if1") (result i32)
    (block $$l0 (result i32)
      (drop
        (br_if $$l0
          (block $$l1 (result i32) (br $$l1 (i32.const 1)))
          (i32.const 1)
        )
      )
      (i32.const 0)
    )
  )

  (func (export "br_if2") (result i32)
    (block $$l0 (result i32)
      (if (i32.const 1)
        (then
          (drop
            (br_if $$l0
              (block $$l1 (result i32) (br $$l1 (i32.const 1)))
              (i32.const 1)
            )
          )
        )
      )
      (i32.const 0)
    )
  )

  (func (export "br_if3") (result i32)
    (local $$i1 i32)
    (drop
      (i32.add
        (block $$l0 (result i32)
          (drop (br_if $$l0
            (block (result i32) (local.set $$i1 (i32.const 1)) (local.get $$i1))
            (block (result i32) (local.set $$i1 (i32.const 2)) (local.get $$i1))
          ))
          (i32.const 0)
        )
        (i32.const 0)
      )
    )
    (local.get $$i1)
  )

  (func (export "br") (result i32)
    (block $$l0 (result i32)
      (if (i32.const 1)
        (then (br $$l0 (block $$l1 (result i32) (br $$l1 (i32.const 1)))))
        (else (block (drop (block $$l1 (result i32) (br $$l1 (i32.const 1))))))
      )
      (i32.const 1)
    )
  )

  (func (export "shadowing") (result i32)
    (block $$l1 (result i32) (i32.xor (br $$l1 (i32.const 1)) (i32.const 2)))
  )

  (func (export "redefinition") (result i32)
    (block $$l1 (result i32)
      (i32.add
        (block $$l1 (result i32) (i32.const 2))
        (block $$l1 (result i32) (br $$l1 (i32.const 3)))
      )
    )
  )
)`);


assert_return(() => invoke($0, `block`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `loop1`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `loop2`, []), [value("i32", 8)]);


assert_return(() => invoke($0, `loop3`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `loop4`, [8]), [value("i32", 16)]);


assert_return(() => invoke($0, `loop5`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `loop6`, []), [value("i32", 3)]);


assert_return(() => invoke($0, `if`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `if2`, []), [value("i32", 5)]);


assert_return(() => invoke($0, `switch`, [0]), [value("i32", 50)]);


assert_return(() => invoke($0, `switch`, [1]), [value("i32", 20)]);


assert_return(() => invoke($0, `switch`, [2]), [value("i32", 20)]);


assert_return(() => invoke($0, `switch`, [3]), [value("i32", 3)]);


assert_return(() => invoke($0, `switch`, [4]), [value("i32", 50)]);


assert_return(() => invoke($0, `switch`, [5]), [value("i32", 50)]);


assert_return(() => invoke($0, `return`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `return`, [1]), [value("i32", 2)]);


assert_return(() => invoke($0, `return`, [2]), [value("i32", 2)]);


assert_return(() => invoke($0, `br_if0`, []), [value("i32", 29)]);


assert_return(() => invoke($0, `br_if1`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `br_if2`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `br_if3`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `br`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `shadowing`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `redefinition`, []), [value("i32", 5)]);


assert_invalid(
  () => instantiate(`(module (func (block $$l (f32.neg (br_if $$l (i32.const 1))) (nop))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (block $$l (br_if $$l (f32.const 0) (i32.const 1)))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (block $$l (br_if $$l (f32.const 0) (i32.const 1)))))`),
  `type mismatch`,
);
