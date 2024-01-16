




let $0 = instantiate(`(module
  (tag $$e0)
  (tag $$e1)

  (func (export "catch-rethrow-0")
    (try
      (do (throw $$e0))
      (catch $$e0 (rethrow 0))
    )
  )

  (func (export "catch-rethrow-1") (param i32) (result i32)
    (try (result i32)
      (do (throw $$e0))
      (catch $$e0
        (if (i32.eqz (local.get 0)) (then (rethrow 1))) (i32.const 23)
      )
    )
  )

  (func (export "catchall-rethrow-0")
    (try
      (do (throw $$e0))
      (catch_all (rethrow 0))
    )
  )

  (func (export "catchall-rethrow-1") (param i32) (result i32)
    (try (result i32)
      (do (throw $$e0))
      (catch_all
        (if (i32.eqz (local.get 0)) (then (rethrow 1))) (i32.const 23)
      )
    )
  )

  (func (export "rethrow-nested") (param i32) (result i32)
    (try (result i32)
      (do (throw $$e1))
      (catch $$e1
        (try (result i32)
          (do (throw $$e0))
          (catch $$e0
            (if (i32.eq (local.get 0) (i32.const 0)) (then (rethrow 1)))
            (if (i32.eq (local.get 0) (i32.const 1)) (then (rethrow 2)))
            (i32.const 23)
          )
        )
      )
    )
  )

  (func (export "rethrow-recatch") (param i32) (result i32)
    (try (result i32)
      (do (throw $$e0))
      (catch $$e0
        (try (result i32)
         (do (if (i32.eqz (local.get 0)) (then (rethrow 2))) (i32.const 42))
         (catch $$e0 (i32.const 23))
        )
      )
    )
  )

  (func (export "rethrow-stack-polymorphism")
    (try
      (do (throw $$e0))
      (catch $$e0 (i32.const 1) (rethrow 0))
    )
  )
)`);


assert_exception(() => invoke($0, `catch-rethrow-0`, []));


assert_exception(() => invoke($0, `catch-rethrow-1`, [0]));


assert_return(() => invoke($0, `catch-rethrow-1`, [1]), [value("i32", 23)]);


assert_exception(() => invoke($0, `catchall-rethrow-0`, []));


assert_exception(() => invoke($0, `catchall-rethrow-1`, [0]));


assert_return(() => invoke($0, `catchall-rethrow-1`, [1]), [value("i32", 23)]);


assert_exception(() => invoke($0, `rethrow-nested`, [0]));


assert_exception(() => invoke($0, `rethrow-nested`, [1]));


assert_return(() => invoke($0, `rethrow-nested`, [2]), [value("i32", 23)]);


assert_return(() => invoke($0, `rethrow-recatch`, [0]), [value("i32", 23)]);


assert_return(() => invoke($0, `rethrow-recatch`, [1]), [value("i32", 42)]);


assert_exception(() => invoke($0, `rethrow-stack-polymorphism`, []));


assert_invalid(() => instantiate(`(module (func (rethrow 0)))`), `invalid rethrow label`);


assert_invalid(
  () => instantiate(`(module (func (block (rethrow 0))))`),
  `invalid rethrow label`,
);


assert_invalid(
  () => instantiate(`(module (func (try (do (rethrow 0)) (delegate 0))))`),
  `invalid rethrow label`,
);
