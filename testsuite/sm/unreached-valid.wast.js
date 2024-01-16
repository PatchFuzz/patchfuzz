




let $0 = instantiate(`(module

  ;; Check that both sides of the select are evaluated
  (func (export "select-trap-left") (param $$cond i32) (result i32)
    (select (unreachable) (i32.const 0) (local.get $$cond))
  )
  (func (export "select-trap-right") (param $$cond i32) (result i32)
    (select (i32.const 0) (unreachable) (local.get $$cond))
  )

  (func (export "select-unreached")
    (unreachable) (select)
    (unreachable) (i32.const 0) (select)
    (unreachable) (i32.const 0) (i32.const 0) (select)
    (unreachable) (i32.const 0) (i32.const 0) (i32.const 0) (select)
    (unreachable) (f32.const 0) (i32.const 0) (select)
    (unreachable)
  )

  (func (export "select_unreached_result_1") (result i32)
    (unreachable) (i32.add (select))
  )

  (func (export "select_unreached_result_2") (result i64)
    (unreachable) (i64.add (select (i64.const 0) (i32.const 0)))
  )

  (func (export "unreachable-num")
    (unreachable)
    (select)
    (i32.eqz)
    (drop)
  )
  (func (export "unreachable-ref")
    (unreachable)
    (select)
    (ref.is_null)
    (drop)
  )
)`);


assert_trap(() => invoke($0, `select-trap-left`, [1]), `unreachable`);


assert_trap(() => invoke($0, `select-trap-left`, [0]), `unreachable`);


assert_trap(() => invoke($0, `select-trap-right`, [1]), `unreachable`);


assert_trap(() => invoke($0, `select-trap-right`, [0]), `unreachable`);


let $1 = instantiate(`(module
  (func (export "meet-bottom")
    (block (result f64)
      (block (result f32)
        (unreachable)
        (br_table 0 1 1 (i32.const 1))
      )
      (drop)
      (f64.const 0)
    )
    (drop)
  )
)`);


assert_trap(() => invoke($1, `meet-bottom`, []), `unreachable`);
