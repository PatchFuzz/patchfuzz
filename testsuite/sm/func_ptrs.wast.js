




let $0 = instantiate(`(module
  (type    (func))                           ;; 0: void -> void
  (type $$S (func))                           ;; 1: void -> void
  (type    (func (param)))                   ;; 2: void -> void
  (type    (func (result i32)))              ;; 3: void -> i32
  (type    (func (param) (result i32)))      ;; 4: void -> i32
  (type $$T (func (param i32) (result i32)))  ;; 5: i32 -> i32
  (type $$U (func (param i32)))               ;; 6: i32 -> void

  (func $$print (import "spectest" "print_i32") (type 6))

  (func (type 0))
  (func (type $$S))

  (func (export "one") (type 4) (i32.const 13))
  (func (export "two") (type $$T) (i32.add (local.get 0) (i32.const 1)))

  ;; Both signature and parameters are allowed (and required to match)
  ;; since this allows the naming of parameters.
  (func (export "three") (type $$T) (param $$a i32) (result i32)
    (i32.sub (local.get 0) (i32.const 2))
  )

  (func (export "four") (type $$U) (call $$print (local.get 0)))
)`);


assert_return(() => invoke($0, `one`, []), [value("i32", 13)]);


assert_return(() => invoke($0, `two`, [13]), [value("i32", 14)]);


assert_return(() => invoke($0, `three`, [13]), [value("i32", 11)]);


invoke($0, `four`, [83]);


assert_invalid(() => instantiate(`(module (elem (i32.const 0)))`), `unknown table`);


assert_invalid(
  () => instantiate(`(module (elem (i32.const 0) 0) (func))`),
  `unknown table`,
);


assert_invalid(
  () => instantiate(`(module (table 1 funcref) (elem (i64.const 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (table 1 funcref) (elem (i32.ctz (i32.const 0))))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (table 1 funcref) (elem (nop)))`),
  `constant expression required`,
);


assert_invalid(() => instantiate(`(module (func (type 42)))`), `unknown type`);


assert_invalid(
  () => instantiate(`(module (import "spectest" "print_i32" (func (type 43))))`),
  `unknown type`,
);


let $1 = instantiate(`(module
  (type $$T (func (param) (result i32)))
  (type $$U (func (param) (result i32)))
  (table funcref (elem $$t1 $$t2 $$t3 $$u1 $$u2 $$t1 $$t3))

  (func $$t1 (type $$T) (i32.const 1))
  (func $$t2 (type $$T) (i32.const 2))
  (func $$t3 (type $$T) (i32.const 3))
  (func $$u1 (type $$U) (i32.const 4))
  (func $$u2 (type $$U) (i32.const 5))

  (func (export "callt") (param $$i i32) (result i32)
    (call_indirect (type $$T) (local.get $$i))
  )

  (func (export "callu") (param $$i i32) (result i32)
    (call_indirect (type $$U) (local.get $$i))
  )
)`);


assert_return(() => invoke($1, `callt`, [0]), [value("i32", 1)]);


assert_return(() => invoke($1, `callt`, [1]), [value("i32", 2)]);


assert_return(() => invoke($1, `callt`, [2]), [value("i32", 3)]);


assert_return(() => invoke($1, `callt`, [3]), [value("i32", 4)]);


assert_return(() => invoke($1, `callt`, [4]), [value("i32", 5)]);


assert_return(() => invoke($1, `callt`, [5]), [value("i32", 1)]);


assert_return(() => invoke($1, `callt`, [6]), [value("i32", 3)]);


assert_trap(() => invoke($1, `callt`, [7]), `undefined element`);


assert_trap(() => invoke($1, `callt`, [100]), `undefined element`);


assert_trap(() => invoke($1, `callt`, [-1]), `undefined element`);


assert_return(() => invoke($1, `callu`, [0]), [value("i32", 1)]);


assert_return(() => invoke($1, `callu`, [1]), [value("i32", 2)]);


assert_return(() => invoke($1, `callu`, [2]), [value("i32", 3)]);


assert_return(() => invoke($1, `callu`, [3]), [value("i32", 4)]);


assert_return(() => invoke($1, `callu`, [4]), [value("i32", 5)]);


assert_return(() => invoke($1, `callu`, [5]), [value("i32", 1)]);


assert_return(() => invoke($1, `callu`, [6]), [value("i32", 3)]);


assert_trap(() => invoke($1, `callu`, [7]), `undefined element`);


assert_trap(() => invoke($1, `callu`, [100]), `undefined element`);


assert_trap(() => invoke($1, `callu`, [-1]), `undefined element`);


let $2 = instantiate(`(module
  (type $$T (func (result i32)))
  (table funcref (elem 0 1))

  (func $$t1 (type $$T) (i32.const 1))
  (func $$t2 (type $$T) (i32.const 2))

  (func (export "callt") (param $$i i32) (result i32)
    (call_indirect (type $$T) (local.get $$i))
  )
)`);


assert_return(() => invoke($2, `callt`, [0]), [value("i32", 1)]);


assert_return(() => invoke($2, `callt`, [1]), [value("i32", 2)]);
