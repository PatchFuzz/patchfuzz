




let $0 = instantiate(`(module
  (func (export "ef0") (result i32) (i32.const 0))
  (func (export "ef1") (result i32) (i32.const 1))
  (func (export "ef2") (result i32) (i32.const 2))
  (func (export "ef3") (result i32) (i32.const 3))
  (func (export "ef4") (result i32) (i32.const 4))
)`);


register($0, `a`);


let $1 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t0 1 (i32.const 7) (i32.const 0) (i32.const 4)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($1, `test`, []);


assert_trap(() => invoke($1, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($1, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($1, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($1, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($1, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($1, `check`, [6]), `uninitialized element`);


assert_return(() => invoke($1, `check`, [7]), [value("i32", 2)]);


assert_return(() => invoke($1, `check`, [8]), [value("i32", 7)]);


assert_return(() => invoke($1, `check`, [9]), [value("i32", 1)]);


assert_return(() => invoke($1, `check`, [10]), [value("i32", 8)]);


assert_trap(() => invoke($1, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($1, `check`, [12]), [value("i32", 7)]);


assert_return(() => invoke($1, `check`, [13]), [value("i32", 5)]);


assert_return(() => invoke($1, `check`, [14]), [value("i32", 2)]);


assert_return(() => invoke($1, `check`, [15]), [value("i32", 3)]);


assert_return(() => invoke($1, `check`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($1, `check`, [17]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [18]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [19]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [20]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [21]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [22]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [23]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [24]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($1, `check`, [29]), `uninitialized element`);


let $2 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t0 3 (i32.const 15) (i32.const 1) (i32.const 3)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($2, `test`, []);


assert_trap(() => invoke($2, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($2, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($2, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($2, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($2, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($2, `check`, [6]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [7]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [8]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [9]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [10]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($2, `check`, [12]), [value("i32", 7)]);


assert_return(() => invoke($2, `check`, [13]), [value("i32", 5)]);


assert_return(() => invoke($2, `check`, [14]), [value("i32", 2)]);


assert_return(() => invoke($2, `check`, [15]), [value("i32", 9)]);


assert_return(() => invoke($2, `check`, [16]), [value("i32", 2)]);


assert_return(() => invoke($2, `check`, [17]), [value("i32", 7)]);


assert_trap(() => invoke($2, `check`, [18]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [19]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [20]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [21]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [22]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [23]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [24]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($2, `check`, [29]), `uninitialized element`);


let $3 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t0 1 (i32.const 7) (i32.const 0) (i32.const 4))
         (elem.drop 1)
         (table.init $$t0 3 (i32.const 15) (i32.const 1) (i32.const 3))
         (elem.drop 3)
         (table.copy $$t0 0 (i32.const 20) (i32.const 15) (i32.const 5))
         (table.copy $$t0 0 (i32.const 21) (i32.const 29) (i32.const 1))
         (table.copy $$t0 0 (i32.const 24) (i32.const 10) (i32.const 1))
         (table.copy $$t0 0 (i32.const 13) (i32.const 11) (i32.const 4))
         (table.copy $$t0 0 (i32.const 19) (i32.const 20) (i32.const 5)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($3, `test`, []);


assert_trap(() => invoke($3, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($3, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($3, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($3, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($3, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($3, `check`, [6]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [7]), [value("i32", 2)]);


assert_return(() => invoke($3, `check`, [8]), [value("i32", 7)]);


assert_return(() => invoke($3, `check`, [9]), [value("i32", 1)]);


assert_return(() => invoke($3, `check`, [10]), [value("i32", 8)]);


assert_trap(() => invoke($3, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [12]), [value("i32", 7)]);


assert_trap(() => invoke($3, `check`, [13]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [14]), [value("i32", 7)]);


assert_return(() => invoke($3, `check`, [15]), [value("i32", 5)]);


assert_return(() => invoke($3, `check`, [16]), [value("i32", 2)]);


assert_return(() => invoke($3, `check`, [17]), [value("i32", 7)]);


assert_trap(() => invoke($3, `check`, [18]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [19]), [value("i32", 9)]);


assert_trap(() => invoke($3, `check`, [20]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [21]), [value("i32", 7)]);


assert_trap(() => invoke($3, `check`, [22]), `uninitialized element`);


assert_return(() => invoke($3, `check`, [23]), [value("i32", 8)]);


assert_return(() => invoke($3, `check`, [24]), [value("i32", 8)]);


assert_trap(() => invoke($3, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($3, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($3, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($3, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($3, `check`, [29]), `uninitialized element`);


let $4 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t1 1 (i32.const 7) (i32.const 0) (i32.const 4)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($4, `test`, []);


assert_trap(() => invoke($4, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($4, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($4, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($4, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($4, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($4, `check`, [6]), `uninitialized element`);


assert_return(() => invoke($4, `check`, [7]), [value("i32", 2)]);


assert_return(() => invoke($4, `check`, [8]), [value("i32", 7)]);


assert_return(() => invoke($4, `check`, [9]), [value("i32", 1)]);


assert_return(() => invoke($4, `check`, [10]), [value("i32", 8)]);


assert_trap(() => invoke($4, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($4, `check`, [12]), [value("i32", 7)]);


assert_return(() => invoke($4, `check`, [13]), [value("i32", 5)]);


assert_return(() => invoke($4, `check`, [14]), [value("i32", 2)]);


assert_return(() => invoke($4, `check`, [15]), [value("i32", 3)]);


assert_return(() => invoke($4, `check`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($4, `check`, [17]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [18]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [19]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [20]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [21]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [22]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [23]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [24]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($4, `check`, [29]), `uninitialized element`);


let $5 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t1 3 (i32.const 15) (i32.const 1) (i32.const 3)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($5, `test`, []);


assert_trap(() => invoke($5, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($5, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($5, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($5, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($5, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($5, `check`, [6]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [7]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [8]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [9]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [10]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($5, `check`, [12]), [value("i32", 7)]);


assert_return(() => invoke($5, `check`, [13]), [value("i32", 5)]);


assert_return(() => invoke($5, `check`, [14]), [value("i32", 2)]);


assert_return(() => invoke($5, `check`, [15]), [value("i32", 9)]);


assert_return(() => invoke($5, `check`, [16]), [value("i32", 2)]);


assert_return(() => invoke($5, `check`, [17]), [value("i32", 7)]);


assert_trap(() => invoke($5, `check`, [18]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [19]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [20]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [21]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [22]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [23]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [24]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($5, `check`, [29]), `uninitialized element`);


let $6 = instantiate(`(module
  (type (func (result i32)))  ;; type #0
  (import "a" "ef0" (func (result i32)))    ;; index 0
  (import "a" "ef1" (func (result i32)))
  (import "a" "ef2" (func (result i32)))
  (import "a" "ef3" (func (result i32)))
  (import "a" "ef4" (func (result i32)))    ;; index 4
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.init $$t1 1 (i32.const 7) (i32.const 0) (i32.const 4))
         (elem.drop 1)
         (table.init $$t1 3 (i32.const 15) (i32.const 1) (i32.const 3))
         (elem.drop 3)
         (table.copy $$t1 1 (i32.const 20) (i32.const 15) (i32.const 5))
         (table.copy $$t1 1 (i32.const 21) (i32.const 29) (i32.const 1))
         (table.copy $$t1 1 (i32.const 24) (i32.const 10) (i32.const 1))
         (table.copy $$t1 1 (i32.const 13) (i32.const 11) (i32.const 4))
         (table.copy $$t1 1 (i32.const 19) (i32.const 20) (i32.const 5)))
  (func (export "check") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($6, `test`, []);


assert_trap(() => invoke($6, `check`, [0]), `uninitialized element`);


assert_trap(() => invoke($6, `check`, [1]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [2]), [value("i32", 3)]);


assert_return(() => invoke($6, `check`, [3]), [value("i32", 1)]);


assert_return(() => invoke($6, `check`, [4]), [value("i32", 4)]);


assert_return(() => invoke($6, `check`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($6, `check`, [6]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [7]), [value("i32", 2)]);


assert_return(() => invoke($6, `check`, [8]), [value("i32", 7)]);


assert_return(() => invoke($6, `check`, [9]), [value("i32", 1)]);


assert_return(() => invoke($6, `check`, [10]), [value("i32", 8)]);


assert_trap(() => invoke($6, `check`, [11]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [12]), [value("i32", 7)]);


assert_trap(() => invoke($6, `check`, [13]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [14]), [value("i32", 7)]);


assert_return(() => invoke($6, `check`, [15]), [value("i32", 5)]);


assert_return(() => invoke($6, `check`, [16]), [value("i32", 2)]);


assert_return(() => invoke($6, `check`, [17]), [value("i32", 7)]);


assert_trap(() => invoke($6, `check`, [18]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [19]), [value("i32", 9)]);


assert_trap(() => invoke($6, `check`, [20]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [21]), [value("i32", 7)]);


assert_trap(() => invoke($6, `check`, [22]), `uninitialized element`);


assert_return(() => invoke($6, `check`, [23]), [value("i32", 8)]);


assert_return(() => invoke($6, `check`, [24]), [value("i32", 8)]);


assert_trap(() => invoke($6, `check`, [25]), `uninitialized element`);


assert_trap(() => invoke($6, `check`, [26]), `uninitialized element`);


assert_trap(() => invoke($6, `check`, [27]), `uninitialized element`);


assert_trap(() => invoke($6, `check`, [28]), `uninitialized element`);


assert_trap(() => invoke($6, `check`, [29]), `uninitialized element`);


assert_invalid(
  () => instantiate(`(module
    (func (export "test")
      (elem.drop 0)))`),
  `unknown elem segment 0`,
);


assert_invalid(
  () => instantiate(`(module
    (func (export "test")
      (table.init 0 (i32.const 12) (i32.const 1) (i32.const 1))))`),
  `unknown table 0`,
);


assert_invalid(
  () => instantiate(`(module
    (elem funcref (ref.func 0))
    (func (result i32) (i32.const 0))
    (func (export "test")
      (elem.drop 4)))`),
  `unknown elem segment 4`,
);


assert_invalid(
  () => instantiate(`(module
    (elem funcref (ref.func 0))
    (func (result i32) (i32.const 0))
    (func (export "test")
      (table.init 4 (i32.const 12) (i32.const 1) (i32.const 1))))`),
  `unknown table 0`,
);


let $7 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (elem.drop 2)
    ))`);


invoke($7, `test`, []);


let $8 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init 2 (i32.const 12) (i32.const 1) (i32.const 1))
    ))`);


assert_trap(() => invoke($8, `test`, []), `out of bounds table access`);


let $9 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init 1 (i32.const 12) (i32.const 1) (i32.const 1))
    (table.init 1 (i32.const 21) (i32.const 1) (i32.const 1))))`);


invoke($9, `test`, []);


let $10 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (elem.drop 1)
    (elem.drop 1)))`);


invoke($10, `test`, []);


let $11 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (elem.drop 1)
    (table.init 1 (i32.const 12) (i32.const 1) (i32.const 1))))`);


assert_trap(() => invoke($11, `test`, []), `out of bounds table access`);


let $12 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init 1 (i32.const 12) (i32.const 0) (i32.const 5))
    ))`);


assert_trap(() => invoke($12, `test`, []), `out of bounds table access`);


let $13 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init 1 (i32.const 12) (i32.const 2) (i32.const 3))
    ))`);


assert_trap(() => invoke($13, `test`, []), `out of bounds table access`);


let $14 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 28) (i32.const 1) (i32.const 3))
    ))`);


assert_trap(() => invoke($14, `test`, []), `out of bounds table access`);


let $15 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 12) (i32.const 4) (i32.const 0))
    ))`);


invoke($15, `test`, []);


let $16 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 12) (i32.const 5) (i32.const 0))
    ))`);


assert_trap(() => invoke($16, `test`, []), `out of bounds table access`);


let $17 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 30) (i32.const 2) (i32.const 0))
    ))`);


invoke($17, `test`, []);


let $18 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 31) (i32.const 2) (i32.const 0))
    ))`);


assert_trap(() => invoke($18, `test`, []), `out of bounds table access`);


let $19 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 30) (i32.const 4) (i32.const 0))
    ))`);


invoke($19, `test`, []);


let $20 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t0) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t0) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t0 1 (i32.const 31) (i32.const 5) (i32.const 0))
    ))`);


assert_trap(() => invoke($20, `test`, []), `out of bounds table access`);


let $21 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 26) (i32.const 1) (i32.const 3))
    ))`);


assert_trap(() => invoke($21, `test`, []), `out of bounds table access`);


let $22 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 12) (i32.const 4) (i32.const 0))
    ))`);


invoke($22, `test`, []);


let $23 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 12) (i32.const 5) (i32.const 0))
    ))`);


assert_trap(() => invoke($23, `test`, []), `out of bounds table access`);


let $24 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 28) (i32.const 2) (i32.const 0))
    ))`);


invoke($24, `test`, []);


let $25 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 29) (i32.const 2) (i32.const 0))
    ))`);


assert_trap(() => invoke($25, `test`, []), `out of bounds table access`);


let $26 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 28) (i32.const 4) (i32.const 0))
    ))`);


invoke($26, `test`, []);


let $27 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 28 28 funcref)
  (elem (table $$t1) (i32.const 2) func 3 1 4 1)
  (elem funcref
    (ref.func 2) (ref.func 7) (ref.func 1) (ref.func 8))
  (elem (table $$t1) (i32.const 12) func 7 5 2 3 6)
  (elem funcref
    (ref.func 5) (ref.func 9) (ref.func 2) (ref.func 7) (ref.func 6))
  (func (result i32) (i32.const 0))
  (func (result i32) (i32.const 1))
  (func (result i32) (i32.const 2))
  (func (result i32) (i32.const 3))
  (func (result i32) (i32.const 4))
  (func (result i32) (i32.const 5))
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))
  (func (export "test")
    (table.init $$t1 1 (i32.const 29) (i32.const 5) (i32.const 0))
    ))`);


assert_trap(() => invoke($27, `test`, []), `out of bounds table access`);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i32.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f32.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (i64.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (table 10 funcref)
    (elem funcref (ref.func $$f0) (ref.func $$f0) (ref.func $$f0))
    (func $$f0)
    (func (export "test")
      (table.init 0 (f64.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


let $28 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($28, `run`, [24, 16]), `out of bounds table access`);


assert_trap(() => invoke($28, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($28, `test`, [31]), `uninitialized element`);


let $29 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($29, `run`, [25, 16]), `out of bounds table access`);


assert_trap(() => invoke($29, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($29, `test`, [31]), `uninitialized element`);


let $30 = instantiate(`(module
  (type (func (result i32)))
  (table 160 320 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($30, `run`, [96, 32]), `out of bounds table access`);


assert_trap(() => invoke($30, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [31]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [32]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [33]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [34]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [35]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [36]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [37]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [38]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [39]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [40]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [41]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [42]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [43]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [44]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [45]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [46]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [47]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [48]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [49]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [50]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [51]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [52]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [53]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [54]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [55]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [56]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [57]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [58]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [59]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [60]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [61]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [62]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [63]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [64]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [65]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [66]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [67]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [68]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [69]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [70]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [71]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [72]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [73]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [74]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [75]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [76]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [77]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [78]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [79]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [80]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [81]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [82]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [83]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [84]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [85]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [86]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [87]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [88]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [89]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [90]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [91]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [92]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [93]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [94]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [95]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [96]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [97]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [98]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [99]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [100]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [101]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [102]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [103]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [104]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [105]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [106]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [107]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [108]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [109]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [110]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [111]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [112]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [113]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [114]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [115]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [116]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [117]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [118]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [119]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [120]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [121]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [122]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [123]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [124]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [125]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [126]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [127]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [128]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [129]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [130]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [131]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [132]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [133]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [134]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [135]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [136]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [137]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [138]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [139]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [140]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [141]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [142]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [143]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [144]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [145]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [146]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [147]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [148]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [149]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [150]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [151]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [152]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [153]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [154]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [155]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [156]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [157]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [158]), `uninitialized element`);


assert_trap(() => invoke($30, `test`, [159]), `uninitialized element`);


let $31 = instantiate(`(module
  (type (func (result i32)))
  (table 160 320 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($31, `run`, [97, 31]), `out of bounds table access`);


assert_trap(() => invoke($31, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [31]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [32]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [33]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [34]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [35]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [36]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [37]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [38]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [39]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [40]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [41]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [42]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [43]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [44]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [45]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [46]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [47]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [48]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [49]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [50]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [51]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [52]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [53]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [54]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [55]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [56]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [57]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [58]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [59]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [60]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [61]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [62]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [63]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [64]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [65]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [66]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [67]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [68]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [69]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [70]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [71]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [72]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [73]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [74]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [75]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [76]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [77]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [78]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [79]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [80]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [81]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [82]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [83]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [84]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [85]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [86]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [87]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [88]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [89]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [90]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [91]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [92]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [93]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [94]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [95]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [96]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [97]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [98]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [99]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [100]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [101]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [102]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [103]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [104]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [105]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [106]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [107]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [108]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [109]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [110]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [111]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [112]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [113]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [114]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [115]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [116]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [117]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [118]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [119]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [120]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [121]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [122]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [123]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [124]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [125]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [126]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [127]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [128]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [129]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [130]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [131]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [132]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [133]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [134]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [135]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [136]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [137]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [138]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [139]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [140]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [141]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [142]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [143]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [144]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [145]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [146]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [147]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [148]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [149]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [150]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [151]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [152]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [153]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [154]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [155]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [156]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [157]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [158]), `uninitialized element`);


assert_trap(() => invoke($31, `test`, [159]), `uninitialized element`);


let $32 = instantiate(`(module
  (type (func (result i32)))
  (table 64 64 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($32, `run`, [48, -16]), `out of bounds table access`);


assert_trap(() => invoke($32, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [31]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [32]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [33]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [34]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [35]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [36]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [37]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [38]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [39]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [40]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [41]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [42]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [43]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [44]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [45]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [46]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [47]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [48]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [49]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [50]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [51]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [52]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [53]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [54]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [55]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [56]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [57]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [58]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [59]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [60]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [61]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [62]), `uninitialized element`);


assert_trap(() => invoke($32, `test`, [63]), `uninitialized element`);


let $33 = instantiate(`(module
  (type (func (result i32)))
  (table 16 16 funcref)
  (elem funcref
    (ref.func $$f0) (ref.func $$f1) (ref.func $$f2) (ref.func $$f3)
    (ref.func $$f4) (ref.func $$f5) (ref.func $$f6) (ref.func $$f7)
    (ref.func $$f8) (ref.func $$f9) (ref.func $$f10) (ref.func $$f11)
    (ref.func $$f12) (ref.func $$f13) (ref.func $$f14) (ref.func $$f15))
  (func $$f0 (export "f0") (result i32) (i32.const 0))
  (func $$f1 (export "f1") (result i32) (i32.const 1))
  (func $$f2 (export "f2") (result i32) (i32.const 2))
  (func $$f3 (export "f3") (result i32) (i32.const 3))
  (func $$f4 (export "f4") (result i32) (i32.const 4))
  (func $$f5 (export "f5") (result i32) (i32.const 5))
  (func $$f6 (export "f6") (result i32) (i32.const 6))
  (func $$f7 (export "f7") (result i32) (i32.const 7))
  (func $$f8 (export "f8") (result i32) (i32.const 8))
  (func $$f9 (export "f9") (result i32) (i32.const 9))
  (func $$f10 (export "f10") (result i32) (i32.const 10))
  (func $$f11 (export "f11") (result i32) (i32.const 11))
  (func $$f12 (export "f12") (result i32) (i32.const 12))
  (func $$f13 (export "f13") (result i32) (i32.const 13))
  (func $$f14 (export "f14") (result i32) (i32.const 14))
  (func $$f15 (export "f15") (result i32) (i32.const 15))
  (func (export "test") (param $$n i32) (result i32)
    (call_indirect (type 0) (local.get $$n)))
  (func (export "run") (param $$offs i32) (param $$len i32)
    (table.init 0 (local.get $$offs) (i32.const 8) (local.get $$len))))`);


assert_trap(() => invoke($33, `run`, [0, -4]), `out of bounds table access`);


assert_trap(() => invoke($33, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($33, `test`, [15]), `uninitialized element`);


let $34 = instantiate(`(module
  (table 1 funcref)
  ;; 65 elem segments. 64 is the smallest positive number that is encoded
  ;; differently as a signed LEB.
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref) (elem funcref) (elem funcref) (elem funcref)
  (elem funcref)
  (func (table.init 64 (i32.const 0) (i32.const 0) (i32.const 0))))`);
