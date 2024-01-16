




let $0 = instantiate(`(module
  (func $$f1 (export "funcref") (param $$x funcref) (result i32)
    (ref.is_null (local.get $$x))
  )
  (func $$f2 (export "externref") (param $$x externref) (result i32)
    (ref.is_null (local.get $$x))
  )

  (table $$t1 2 funcref)
  (table $$t2 2 externref)
  (elem (table $$t1) (i32.const 1) func $$dummy)
  (func $$dummy)

  (func (export "init") (param $$r externref)
    (table.set $$t2 (i32.const 1) (local.get $$r))
  )
  (func (export "deinit")
    (table.set $$t1 (i32.const 1) (ref.null func))
    (table.set $$t2 (i32.const 1) (ref.null extern))
  )

  (func (export "funcref-elem") (param $$x i32) (result i32)
    (call $$f1 (table.get $$t1 (local.get $$x)))
  )
  (func (export "externref-elem") (param $$x i32) (result i32)
    (call $$f2 (table.get $$t2 (local.get $$x)))
  )
)`);


assert_return(() => invoke($0, `funcref`, [null]), [value("i32", 1)]);


assert_return(() => invoke($0, `externref`, [null]), [value("i32", 1)]);


assert_return(() => invoke($0, `externref`, [externref(1)]), [value("i32", 0)]);


invoke($0, `init`, [externref(0)]);


assert_return(() => invoke($0, `funcref-elem`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `externref-elem`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `funcref-elem`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `externref-elem`, [1]), [value("i32", 0)]);


invoke($0, `deinit`, []);


assert_return(() => invoke($0, `funcref-elem`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `externref-elem`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `funcref-elem`, [1]), [value("i32", 1)]);


assert_return(() => invoke($0, `externref-elem`, [1]), [value("i32", 1)]);


assert_invalid(
  () => instantiate(`(module (func $$ref-vs-num (param i32) (ref.is_null (local.get 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func $$ref-vs-empty (ref.is_null)))`),
  `type mismatch`,
);
