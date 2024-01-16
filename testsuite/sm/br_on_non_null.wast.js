




let $0 = instantiate(`(module
  (type $$t (func (result i32)))

  (func $$nn (param $$r (ref $$t)) (result i32)
    (call_ref $$t
      (block $$l (result (ref $$t))
        (br_on_non_null $$l (local.get $$r))
        (return (i32.const -1))
      )
    )
  )
  (func $$n (param $$r (ref null $$t)) (result i32)
    (call_ref $$t
      (block $$l (result (ref $$t))
        (br_on_non_null $$l (local.get $$r))
        (return (i32.const -1))
      )
    )
  )

  (elem func $$f)
  (func $$f (result i32) (i32.const 7))

  (func (export "nullable-null") (result i32) (call $$n (ref.null $$t)))
  (func (export "nonnullable-f") (result i32) (call $$nn (ref.func $$f)))
  (func (export "nullable-f") (result i32) (call $$n (ref.func $$f)))

  (func (export "unreachable") (result i32)
    (block $$l (result (ref $$t))
      (br_on_non_null $$l (unreachable))
      (return (i32.const -1))
    )
    (call_ref $$t)
  )
)`);


assert_trap(() => invoke($0, `unreachable`, []), `unreachable`);


assert_return(() => invoke($0, `nullable-null`, []), [value("i32", -1)]);


assert_return(() => invoke($0, `nonnullable-f`, []), [value("i32", 7)]);


assert_return(() => invoke($0, `nullable-f`, []), [value("i32", 7)]);


let $1 = instantiate(`(module
  (type $$t (func))
  (func (param $$r (ref null $$t)) (drop (block (result (ref $$t)) (br_on_non_null 0 (local.get $$r)) (unreachable))))
  (func (param $$r (ref null func)) (drop (block (result (ref func)) (br_on_non_null 0 (local.get $$r)) (unreachable))))
  (func (param $$r (ref null extern)) (drop (block (result (ref extern)) (br_on_non_null 0 (local.get $$r)) (unreachable))))
)`);


let $2 = instantiate(`(module
  (type $$t (func (param i32) (result i32)))
  (elem func $$f)
  (func $$f (param i32) (result i32) (i32.mul (local.get 0) (local.get 0)))

  (func $$a (param $$n i32) (param $$r (ref null $$t)) (result i32)
    (call_ref $$t
      (block $$l (result i32 (ref $$t))
        (return (br_on_non_null $$l (local.get $$n) (local.get $$r)))
      )
    )
  )

  (func (export "args-null") (param $$n i32) (result i32)
    (call $$a (local.get $$n) (ref.null $$t))
  )
  (func (export "args-f") (param $$n i32) (result i32)
    (call $$a (local.get $$n) (ref.func $$f))
  )
)`);


assert_return(() => invoke($2, `args-null`, [3]), [value("i32", 3)]);


assert_return(() => invoke($2, `args-f`, [3]), [value("i32", 9)]);
