




let $0 = instantiate(`(module
  (type $$ii (func (param i32) (result i32)))

  (func $$apply (param $$f (ref $$ii)) (param $$x i32) (result i32)
    (call_ref $$ii (local.get $$x) (local.get $$f))
  )

  (func $$f (type $$ii) (i32.mul (local.get 0) (local.get 0)))
  (func $$g (type $$ii) (i32.sub (i32.const 0) (local.get 0)))

  (elem declare func $$f $$g)

  (func (export "run") (param $$x i32) (result i32)
    (local $$rf (ref null $$ii))
    (local $$rg (ref null $$ii))
    (local.set $$rf (ref.func $$f))
    (local.set $$rg (ref.func $$g))
    (call_ref $$ii (call_ref $$ii (local.get $$x) (local.get $$rf)) (local.get $$rg))
  )

  (func (export "null") (result i32)
    (call_ref $$ii (i32.const 1) (ref.null $$ii))
  )
)`);


assert_return(() => invoke($0, `run`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `run`, [3]), [value("i32", -9)]);


assert_trap(() => invoke($0, `null`, []), `null function`);


let $1 = instantiate(`(module
  (type $$t (func))
  (func (export "unreachable") (result i32)
    (unreachable)
    (call_ref $$t)
  )
)`);


assert_trap(() => invoke($1, `unreachable`, []), `unreachable`);


let $2 = instantiate(`(module
  (elem declare func $$f)
  (type $$t (func (param i32) (result i32)))
  (func $$f (param i32) (result i32) (local.get 0))

  (func (export "unreachable") (result i32)
    (unreachable)
    (ref.func $$f)
    (call_ref $$t)
  )
)`);


assert_trap(() => invoke($2, `unreachable`, []), `unreachable`);


let $3 = instantiate(`(module
  (elem declare func $$f)
  (type $$t (func (param i32) (result i32)))
  (func $$f (param i32) (result i32) (local.get 0))

  (func (export "unreachable") (result i32)
    (unreachable)
    (i32.const 0)
    (ref.func $$f)
    (call_ref $$t)
    (drop)
    (i32.const 0)
  )
)`);


assert_trap(() => invoke($3, `unreachable`, []), `unreachable`);


assert_invalid(
  () => instantiate(`(module
    (elem declare func $$f)
    (type $$t (func (param i32) (result i32)))
    (func $$f (param i32) (result i32) (local.get 0))

    (func (export "unreachable") (result i32)
      (unreachable)
      (i64.const 0)
      (ref.func $$f)
      (call_ref $$t)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (elem declare func $$f)
    (type $$t (func (param i32) (result i32)))
    (func $$f (param i32) (result i32) (local.get 0))

    (func (export "unreachable") (result i32)
      (unreachable)
      (ref.func $$f)
      (call_ref $$t)
      (drop)
      (i64.const 0)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (type $$t (func))
    (func $$f (param $$r externref)
      (call_ref $$t (local.get $$r))
    )
  )`),
  `type mismatch`,
);
