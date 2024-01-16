




let $0 = instantiate(`(module
  (global (import "spectest" "global_i32") i32)
  (global (import "spectest" "global_i64") i64)

  (global $$a i32 (i32.const -2))
  (global (;3;) f32 (f32.const -3))
  (global (;4;) f64 (f64.const -4))
  (global $$b i64 (i64.const -5))

  (global $$x (mut i32) (i32.const -12))
  (global (;7;) (mut f32) (f32.const -13))
  (global (;8;) (mut f64) (f64.const -14))
  (global $$y (mut i64) (i64.const -15))

  (global $$z1 i32 (global.get 0))
  (global $$z2 i64 (global.get 1))
  (global $$z3 i32 (i32.add (i32.sub (i32.mul (i32.const 20) (i32.const 2)) (i32.const 2)) (i32.const 4)))
  (global $$z4 i64 (i64.add (i64.sub (i64.mul (i64.const 20) (i64.const 2)) (i64.const 2)) (i64.const 5)))
  (global $$z5 i32 (i32.add (global.get 0) (i32.const 42)))
  (global $$z6 i64 (i64.add (global.get 1) (i64.const 42)))

  (global $$r externref (ref.null extern))
  (global $$mr (mut externref) (ref.null extern))
  (global funcref (ref.null func))

  (func (export "get-a") (result i32) (global.get $$a))
  (func (export "get-b") (result i64) (global.get $$b))
  (func (export "get-r") (result externref) (global.get $$r))
  (func (export "get-mr") (result externref) (global.get $$mr))
  (func (export "get-x") (result i32) (global.get $$x))
  (func (export "get-y") (result i64) (global.get $$y))
  (func (export "get-z1") (result i32) (global.get $$z1))
  (func (export "get-z2") (result i64) (global.get $$z2))
  (func (export "get-z3") (result i32) (global.get $$z3))
  (func (export "get-z4") (result i64) (global.get $$z4))
  (func (export "get-z5") (result i32) (global.get $$z5))
  (func (export "get-z6") (result i64) (global.get $$z6))
  (func (export "set-x") (param i32) (global.set $$x (local.get 0)))
  (func (export "set-y") (param i64) (global.set $$y (local.get 0)))
  (func (export "set-mr") (param externref) (global.set $$mr (local.get 0)))

  (func (export "get-3") (result f32) (global.get 3))
  (func (export "get-4") (result f64) (global.get 4))
  (func (export "get-7") (result f32) (global.get 7))
  (func (export "get-8") (result f64) (global.get 8))
  (func (export "set-7") (param f32) (global.set 7 (local.get 0)))
  (func (export "set-8") (param f64) (global.set 8 (local.get 0)))

  ;; As the argument of control constructs and instructions

  (memory 1)

  (func $$dummy)

  (func (export "as-select-first") (result i32)
    (select (global.get $$x) (i32.const 2) (i32.const 3))
  )
  (func (export "as-select-mid") (result i32)
    (select (i32.const 2) (global.get $$x) (i32.const 3))
  )
  (func (export "as-select-last") (result i32)
    (select (i32.const 2) (i32.const 3) (global.get $$x))
  )

  (func (export "as-loop-first") (result i32)
    (loop (result i32)
      (global.get $$x) (call $$dummy) (call $$dummy)
    )
  )
  (func (export "as-loop-mid") (result i32)
    (loop (result i32)
      (call $$dummy) (global.get $$x) (call $$dummy)
    )
  )
  (func (export "as-loop-last") (result i32)
    (loop (result i32)
      (call $$dummy) (call $$dummy) (global.get $$x)
    )
  )

  (func (export "as-if-condition") (result i32)
    (if (result i32) (global.get $$x)
      (then (call $$dummy) (i32.const 2))
      (else (call $$dummy) (i32.const 3))
    )
  )
  (func (export "as-if-then") (result i32)
    (if (result i32) (i32.const 1)
      (then (global.get $$x)) (else (i32.const 2))
    )
  )
  (func (export "as-if-else") (result i32)
    (if (result i32) (i32.const 0)
      (then (i32.const 2)) (else (global.get $$x))
    )
  )

  (func (export "as-br_if-first") (result i32)
    (block (result i32)
      (br_if 0 (global.get $$x) (i32.const 2))
      (return (i32.const 3))
    )
  )
  (func (export "as-br_if-last") (result i32)
    (block (result i32)
      (br_if 0 (i32.const 2) (global.get $$x))
      (return (i32.const 3))
    )
  )

  (func (export "as-br_table-first") (result i32)
    (block (result i32)
      (global.get $$x) (i32.const 2) (br_table 0 0)
    )
  )
  (func (export "as-br_table-last") (result i32)
    (block (result i32)
      (i32.const 2) (global.get $$x) (br_table 0 0)
    )
  )

  (func $$func (param i32 i32) (result i32) (local.get 0))
  (type $$check (func (param i32 i32) (result i32)))
  (table funcref (elem $$func))
  (func (export "as-call_indirect-first") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (global.get $$x) (i32.const 2) (i32.const 0)
      )
    )
  )
  (func (export "as-call_indirect-mid") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 2) (global.get $$x) (i32.const 0)
      )
    )
  )
 (func (export "as-call_indirect-last") (result i32)
    (block (result i32)
      (call_indirect (type $$check)
        (i32.const 2) (i32.const 0) (global.get $$x)
      )
    )
  )

  (func (export "as-store-first")
    (global.get $$x) (i32.const 1) (i32.store)
  )
  (func (export "as-store-last")
    (i32.const 0) (global.get $$x) (i32.store)
  )
  (func (export "as-load-operand") (result i32)
    (i32.load (global.get $$x))
  )
  (func (export "as-memory.grow-value") (result i32)
    (memory.grow (global.get $$x))
  )

  (func $$f (param i32) (result i32) (local.get 0))
  (func (export "as-call-value") (result i32)
    (call $$f (global.get $$x))
  )

  (func (export "as-return-value") (result i32)
    (global.get $$x) (return)
  )
  (func (export "as-drop-operand")
    (drop (global.get $$x))
  )
  (func (export "as-br-value") (result i32)
    (block (result i32) (br 0 (global.get $$x)))
  )

  (func (export "as-local.set-value") (param i32) (result i32)
    (local.set 0 (global.get $$x))
    (local.get 0)
  )
  (func (export "as-local.tee-value") (param i32) (result i32)
    (local.tee 0 (global.get $$x))
  )
  (func (export "as-global.set-value") (result i32)
    (global.set $$x (global.get $$x))
    (global.get $$x)
  )

  (func (export "as-unary-operand") (result i32)
    (i32.eqz (global.get $$x))
  )
  (func (export "as-binary-operand") (result i32)
    (i32.mul
      (global.get $$x) (global.get $$x)
    )
  )
  (func (export "as-compare-operand") (result i32)
    (i32.gt_u
      (global.get 0) (i32.const 1)
    )
  )
)`);


assert_return(() => invoke($0, `get-a`, []), [value("i32", -2)]);


assert_return(() => invoke($0, `get-b`, []), [value("i64", -5n)]);


assert_return(() => invoke($0, `get-r`, []), [value('externref', null)]);


assert_return(() => invoke($0, `get-mr`, []), [value('externref', null)]);


assert_return(() => invoke($0, `get-x`, []), [value("i32", -12)]);


assert_return(() => invoke($0, `get-y`, []), [value("i64", -15n)]);


assert_return(() => invoke($0, `get-z1`, []), [value("i32", 666)]);


assert_return(() => invoke($0, `get-z2`, []), [value("i64", 666n)]);


assert_return(() => invoke($0, `get-z3`, []), [value("i32", 42)]);


assert_return(() => invoke($0, `get-z4`, []), [value("i64", 43n)]);


assert_return(() => invoke($0, `get-z5`, []), [value("i32", 708)]);


assert_return(() => invoke($0, `get-z6`, []), [value("i64", 708n)]);


assert_return(() => invoke($0, `get-3`, []), [value("f32", -3)]);


assert_return(() => invoke($0, `get-4`, []), [value("f64", -4)]);


assert_return(() => invoke($0, `get-7`, []), [value("f32", -13)]);


assert_return(() => invoke($0, `get-8`, []), [value("f64", -14)]);


assert_return(() => invoke($0, `set-x`, [6]), []);


assert_return(() => invoke($0, `set-y`, [7n]), []);


assert_return(() => invoke($0, `set-7`, [value("f32", 8)]), []);


assert_return(() => invoke($0, `set-8`, [value("f64", 9)]), []);


assert_return(() => invoke($0, `get-x`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `get-y`, []), [value("i64", 7n)]);


assert_return(() => invoke($0, `get-7`, []), [value("f32", 8)]);


assert_return(() => invoke($0, `get-8`, []), [value("f64", 9)]);


assert_return(() => invoke($0, `set-7`, [value("f32", 8)]), []);


assert_return(() => invoke($0, `set-8`, [value("f64", 9)]), []);


assert_return(() => invoke($0, `set-mr`, [externref(10)]), []);


assert_return(() => invoke($0, `get-x`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `get-y`, []), [value("i64", 7n)]);


assert_return(() => invoke($0, `get-7`, []), [value("f32", 8)]);


assert_return(() => invoke($0, `get-8`, []), [value("f64", 9)]);


assert_return(() => invoke($0, `get-mr`, []), [value('externref', externref(10))]);


assert_return(() => invoke($0, `as-select-first`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-select-mid`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-select-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-loop-first`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-loop-mid`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-loop-last`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-if-condition`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-if-then`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-if-else`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_if-first`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_if-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-br_table-first`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-br_table-last`, []), [value("i32", 2)]);


assert_return(() => invoke($0, `as-call_indirect-first`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-call_indirect-mid`, []), [value("i32", 2)]);


assert_trap(() => invoke($0, `as-call_indirect-last`, []), `undefined element`);


assert_return(() => invoke($0, `as-store-first`, []), []);


assert_return(() => invoke($0, `as-store-last`, []), []);


assert_return(() => invoke($0, `as-load-operand`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-memory.grow-value`, []), [value("i32", 1)]);


assert_return(() => invoke($0, `as-call-value`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-return-value`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-drop-operand`, []), []);


assert_return(() => invoke($0, `as-br-value`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-local.set-value`, [1]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-local.tee-value`, [1]), [value("i32", 6)]);


assert_return(() => invoke($0, `as-global.set-value`, []), [value("i32", 6)]);


assert_return(() => invoke($0, `as-unary-operand`, []), [value("i32", 0)]);


assert_return(() => invoke($0, `as-binary-operand`, []), [value("i32", 36)]);


assert_return(() => invoke($0, `as-compare-operand`, []), [value("i32", 1)]);


assert_invalid(
  () => instantiate(`(module (global f32 (f32.const 0)) (func (global.set 0 (f32.const 1))))`),
  `global is immutable`,
);


assert_invalid(
  () => instantiate(`(module (import "spectest" "global_i32" (global i32)) (func (global.set 0 (i32.const 1))))`),
  `global is immutable`,
);


let $1 = instantiate(`(module (global (mut f32) (f32.const 0)) (export "a" (global 0)))`);


let $2 = instantiate(`(module (global (export "a") (mut f32) (f32.const 0)))`);


assert_invalid(
  () => instantiate(`(module (global f32 (f32.neg (f32.const 0))))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (global f32 (local.get 0)))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (global f32 (f32.neg (f32.const 1))))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (i32.const 0) (nop)))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (i32.ctz (i32.const 0))))`),
  `constant expression required`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (nop)))`),
  `constant expression required`,
);


assert_invalid(() => instantiate(`(module (global i32 (f32.const 0)))`), `type mismatch`);


assert_invalid(
  () => instantiate(`(module (global i32 (i32.const 0) (i32.const 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (;empty instruction sequence;)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (global (import "" "") externref) (global funcref (global.get 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (global (import "test" "global-i32") i32) (global i32 (global.get 0) (global.get 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (global (import "test" "global-i32") i32) (global i32 (i32.const 0) (global.get 0)))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (global.get 0)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (i32.const 0)) (global i32 (global.get 0)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (global $$g i32 (i32.const 0)) (global i32 (global.get $$g)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (global i32 (global.get 1)) (global i32 (i32.const 0)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (global (import "test" "global-i32") i32) (global i32 (global.get 2)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (global (import "test" "global-mut-i32") (mut i32)) (global i32 (global.get 0)))`),
  `constant expression required`,
);


let $3 = instantiate(`(module
  (import "spectest" "global_i32" (global i32))
)`);


assert_malformed(
  () => instantiate(`(module binary
    "\\00asm" "\\01\\00\\00\\00"
    "\\02\\98\\80\\80\\80\\00"             ;; import section
      "\\01"                          ;; length 1
      "\\08\\73\\70\\65\\63\\74\\65\\73\\74"  ;; "spectest"
      "\\0a\\67\\6c\\6f\\62\\61\\6c\\5f\\69\\33\\32" ;; "global_i32"
      "\\03"                          ;; GlobalImport
      "\\7f"                          ;; i32
      "\\02"                          ;; malformed mutability
  )`),
  `malformed mutability`,
);


assert_malformed(
  () => instantiate(`(module binary
    "\\00asm" "\\01\\00\\00\\00"
    "\\02\\98\\80\\80\\80\\00"             ;; import section
      "\\01"                          ;; length 1
      "\\08\\73\\70\\65\\63\\74\\65\\73\\74"  ;; "spectest"
      "\\0a\\67\\6c\\6f\\62\\61\\6c\\5f\\69\\33\\32" ;; "global_i32"
      "\\03"                          ;; GlobalImport
      "\\7f"                          ;; i32
      "\\ff"                          ;; malformed mutability
  )`),
  `malformed mutability`,
);


let $4 = instantiate(`(module
  (global i32 (i32.const 0))
)`);


assert_malformed(
  () => instantiate(`(module binary
    "\\00asm" "\\01\\00\\00\\00"
    "\\06\\86\\80\\80\\80\\00"  ;; global section
      "\\01"               ;; length 1
      "\\7f"               ;; i32
      "\\02"               ;; malformed mutability
      "\\41\\00"            ;; i32.const 0
      "\\0b"               ;; end
  )`),
  `malformed mutability`,
);


assert_malformed(
  () => instantiate(`(module binary
    "\\00asm" "\\01\\00\\00\\00"
    "\\06\\86\\80\\80\\80\\00"  ;; global section
      "\\01"               ;; length 1
      "\\7f"               ;; i32
      "\\ff"               ;; malformed mutability
      "\\41\\00"            ;; i32.const 0
      "\\0b"               ;; end
  )`),
  `malformed mutability`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (global.get 0)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (global i32 (i32.const 0))
    (func (result i32) (global.get 1))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (import "spectest" "global_i32" (global i32))
    (func (result i32) (global.get 1))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (import "spectest" "global_i32" (global i32))
    (global i32 (i32.const 0))
    (func (result i32) (global.get 2))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module (func (i32.const 0) (global.set 0)))`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (global i32 (i32.const 0))
    (func (i32.const 0) (global.set 1))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (import "spectest" "global_i32" (global i32))
    (func (i32.const 0) (global.set 1))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (import "spectest" "global_i32" (global i32))
    (global i32 (i32.const 0))
    (func (i32.const 0) (global.set 2))
  )`),
  `unknown global`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty
      (global.set $$x)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-block
      (i32.const 0)
      (block (global.set $$x))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-loop
      (i32.const 0)
      (loop (global.set $$x))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-then
      (i32.const 0) (i32.const 0)
      (if (then (global.set $$x)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-else
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (global.set $$x)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-br
      (i32.const 0)
      (block (br 0 (global.set $$x)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-br_if
      (i32.const 0)
      (block (br_if 0 (global.set $$x)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-br_table
      (i32.const 0)
      (block (br_table 0 (global.set $$x)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-return
      (return (global.set $$x))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-select
      (select (global.set $$x) (i32.const 1) (i32.const 2))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-global.set-value-empty-in-call
      (call 1 (global.set $$x))
    )
    (func (param i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-global.set-value-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (global.set $$x) (i32.const 0)
        )
      )
    )
  )`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(global $$foo i32 (i32.const 0)) (global $$foo i32 (i32.const 0)) `),
  `duplicate global`,
);


assert_malformed(
  () => instantiate(`(import "" "" (global $$foo i32)) (global $$foo i32 (i32.const 0)) `),
  `duplicate global`,
);


assert_malformed(
  () => instantiate(`(import "" "" (global $$foo i32)) (import "" "" (global $$foo i32)) `),
  `duplicate global`,
);
