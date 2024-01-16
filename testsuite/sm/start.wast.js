




assert_invalid(() => instantiate(`(module (func) (start 1))`), `unknown function`);


assert_invalid(
  () => instantiate(`(module
    (func $$main (result i32) (return (i32.const 0)))
    (start $$main)
  )`),
  `start function`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$main (param $$a i32))
    (start $$main)
  )`),
  `start function`,
);


let $0 = instantiate(`(module
  (memory (data "A"))
  (func $$inc
    (i32.store8
      (i32.const 0)
      (i32.add
        (i32.load8_u (i32.const 0))
        (i32.const 1)
      )
    )
  )
  (func $$get (result i32)
    (return (i32.load8_u (i32.const 0)))
  )
  (func $$main
    (call $$inc)
    (call $$inc)
    (call $$inc)
  )

  (start $$main)
  (export "inc" (func $$inc))
  (export "get" (func $$get))
)`);


assert_return(() => invoke($0, `get`, []), [value("i32", 68)]);


invoke($0, `inc`, []);


assert_return(() => invoke($0, `get`, []), [value("i32", 69)]);


invoke($0, `inc`, []);


assert_return(() => invoke($0, `get`, []), [value("i32", 70)]);


let $1 = instantiate(`(module
  (memory (data "A"))
  (func $$inc
    (i32.store8
      (i32.const 0)
      (i32.add
        (i32.load8_u (i32.const 0))
        (i32.const 1)
      )
    )
  )
  (func $$get (result i32)
    (return (i32.load8_u (i32.const 0)))
  )
  (func $$main
    (call $$inc)
    (call $$inc)
    (call $$inc)
  )
  (start 2)
  (export "inc" (func $$inc))
  (export "get" (func $$get))
)`);


assert_return(() => invoke($1, `get`, []), [value("i32", 68)]);


invoke($1, `inc`, []);


assert_return(() => invoke($1, `get`, []), [value("i32", 69)]);


invoke($1, `inc`, []);


assert_return(() => invoke($1, `get`, []), [value("i32", 70)]);


let $2 = instantiate(`(module
  (func $$print_i32 (import "spectest" "print_i32") (param i32))
  (func $$main (call $$print_i32 (i32.const 1)))
  (start 1)
)`);


let $3 = instantiate(`(module
  (func $$print_i32 (import "spectest" "print_i32") (param i32))
  (func $$main (call $$print_i32 (i32.const 2)))
  (start $$main)
)`);


let $4 = instantiate(`(module
  (func $$print (import "spectest" "print"))
  (start $$print)
)`);


assert_trap(
  () => instantiate(`(module (func $$main (unreachable)) (start $$main))`),
  `unreachable`,
);


assert_malformed(
  () => instantiate(`(module (func $$a (unreachable)) (func $$b (unreachable)) (start $$a) (start $$b)) `),
  `multiple start sections`,
);
