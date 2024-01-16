




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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (nop))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($1, `test`, []);


assert_trap(() => invoke($1, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($1, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($1, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($1, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($1, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($1, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($1, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($1, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($1, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($1, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($1, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($1, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($1, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($1, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($1, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($1, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($1, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($1, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($1, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($1, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($1, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($1, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($1, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($1, `check_t1`, [29]), `uninitialized element`);


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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 13) (i32.const 2) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($2, `test`, []);


assert_trap(() => invoke($2, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($2, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($2, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($2, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($2, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($2, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($2, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($2, `check_t0`, [13]), [value("i32", 3)]);


assert_return(() => invoke($2, `check_t0`, [14]), [value("i32", 1)]);


assert_return(() => invoke($2, `check_t0`, [15]), [value("i32", 4)]);


assert_return(() => invoke($2, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($2, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($2, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($2, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($2, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($2, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($2, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($2, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($2, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($2, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($2, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($2, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($2, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($2, `check_t1`, [29]), `uninitialized element`);


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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 25) (i32.const 15) (i32.const 2)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($3, `test`, []);


assert_trap(() => invoke($3, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($3, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($3, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($3, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($3, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($3, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($3, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($3, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($3, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($3, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($3, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($3, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [24]), `uninitialized element`);


assert_return(() => invoke($3, `check_t0`, [25]), [value("i32", 3)]);


assert_return(() => invoke($3, `check_t0`, [26]), [value("i32", 6)]);


assert_trap(() => invoke($3, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($3, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($3, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($3, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($3, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($3, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($3, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($3, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($3, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($3, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($3, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($3, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($3, `check_t1`, [29]), `uninitialized element`);


let $4 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 13) (i32.const 25) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($4, `test`, []);


assert_trap(() => invoke($4, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($4, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($4, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($4, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($4, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($4, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($4, `check_t0`, [12]), [value("i32", 7)]);


assert_trap(() => invoke($4, `check_t0`, [13]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [14]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [15]), `uninitialized element`);


assert_return(() => invoke($4, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($4, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($4, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($4, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($4, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($4, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($4, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($4, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($4, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($4, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($4, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($4, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($4, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($4, `check_t1`, [29]), `uninitialized element`);


let $5 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 20) (i32.const 22) (i32.const 4)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($5, `test`, []);


assert_trap(() => invoke($5, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($5, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($5, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($5, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($5, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($5, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($5, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($5, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($5, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($5, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($5, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($5, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($5, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($5, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($5, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($5, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($5, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($5, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($5, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($5, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($5, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($5, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($5, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($5, `check_t1`, [29]), `uninitialized element`);


let $6 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 25) (i32.const 1) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($6, `test`, []);


assert_trap(() => invoke($6, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($6, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($6, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($6, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($6, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($6, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($6, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($6, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($6, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($6, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($6, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($6, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [25]), `uninitialized element`);


assert_return(() => invoke($6, `check_t0`, [26]), [value("i32", 3)]);


assert_return(() => invoke($6, `check_t0`, [27]), [value("i32", 1)]);


assert_trap(() => invoke($6, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($6, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($6, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($6, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($6, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($6, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($6, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($6, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($6, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($6, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($6, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($6, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($6, `check_t1`, [29]), `uninitialized element`);


let $7 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 10) (i32.const 12) (i32.const 7)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($7, `test`, []);


assert_trap(() => invoke($7, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($7, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($7, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($7, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($7, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($7, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [9]), `uninitialized element`);


assert_return(() => invoke($7, `check_t0`, [10]), [value("i32", 7)]);


assert_return(() => invoke($7, `check_t0`, [11]), [value("i32", 5)]);


assert_return(() => invoke($7, `check_t0`, [12]), [value("i32", 2)]);


assert_return(() => invoke($7, `check_t0`, [13]), [value("i32", 3)]);


assert_return(() => invoke($7, `check_t0`, [14]), [value("i32", 6)]);


assert_trap(() => invoke($7, `check_t0`, [15]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [16]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($7, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($7, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($7, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($7, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($7, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($7, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($7, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($7, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($7, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($7, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($7, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($7, `check_t1`, [29]), `uninitialized element`);


let $8 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t0 (i32.const 12) (i32.const 10) (i32.const 7)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($8, `test`, []);


assert_trap(() => invoke($8, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($8, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($8, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($8, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($8, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($8, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [11]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [12]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [13]), `uninitialized element`);


assert_return(() => invoke($8, `check_t0`, [14]), [value("i32", 7)]);


assert_return(() => invoke($8, `check_t0`, [15]), [value("i32", 5)]);


assert_return(() => invoke($8, `check_t0`, [16]), [value("i32", 2)]);


assert_return(() => invoke($8, `check_t0`, [17]), [value("i32", 3)]);


assert_return(() => invoke($8, `check_t0`, [18]), [value("i32", 6)]);


assert_trap(() => invoke($8, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($8, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($8, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($8, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($8, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($8, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($8, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($8, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($8, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($8, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($8, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($8, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($8, `check_t1`, [29]), `uninitialized element`);


let $9 = instantiate(`(module
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
  (elem (table $$t1) (i32.const 3) func 1 3 1 4)
  (elem (table $$t1) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t0 (i32.const 10) (i32.const 0) (i32.const 20)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
)`);


invoke($9, `test`, []);


assert_trap(() => invoke($9, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($9, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($9, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($9, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($9, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($9, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($9, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($9, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($9, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($9, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($9, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($9, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($9, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($9, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($9, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($9, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($9, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [10]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [11]), `uninitialized element`);


assert_return(() => invoke($9, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($9, `check_t1`, [13]), [value("i32", 1)]);


assert_return(() => invoke($9, `check_t1`, [14]), [value("i32", 4)]);


assert_return(() => invoke($9, `check_t1`, [15]), [value("i32", 1)]);


assert_trap(() => invoke($9, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [21]), `uninitialized element`);


assert_return(() => invoke($9, `check_t1`, [22]), [value("i32", 7)]);


assert_return(() => invoke($9, `check_t1`, [23]), [value("i32", 5)]);


assert_return(() => invoke($9, `check_t1`, [24]), [value("i32", 2)]);


assert_return(() => invoke($9, `check_t1`, [25]), [value("i32", 3)]);


assert_return(() => invoke($9, `check_t1`, [26]), [value("i32", 6)]);


assert_trap(() => invoke($9, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($9, `check_t1`, [29]), `uninitialized element`);


let $10 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (nop))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($10, `test`, []);


assert_trap(() => invoke($10, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($10, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($10, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($10, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($10, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($10, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($10, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($10, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($10, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($10, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($10, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($10, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($10, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($10, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($10, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($10, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($10, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($10, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($10, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($10, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($10, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($10, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($10, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($10, `check_t1`, [29]), `uninitialized element`);


let $11 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 13) (i32.const 2) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($11, `test`, []);


assert_trap(() => invoke($11, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($11, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($11, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($11, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($11, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($11, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($11, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($11, `check_t0`, [13]), [value("i32", 3)]);


assert_return(() => invoke($11, `check_t0`, [14]), [value("i32", 1)]);


assert_return(() => invoke($11, `check_t0`, [15]), [value("i32", 4)]);


assert_return(() => invoke($11, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($11, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($11, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($11, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($11, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($11, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($11, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($11, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($11, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($11, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($11, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($11, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($11, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($11, `check_t1`, [29]), `uninitialized element`);


let $12 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 25) (i32.const 15) (i32.const 2)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($12, `test`, []);


assert_trap(() => invoke($12, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($12, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($12, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($12, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($12, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($12, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($12, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($12, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($12, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($12, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($12, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($12, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [24]), `uninitialized element`);


assert_return(() => invoke($12, `check_t0`, [25]), [value("i32", 3)]);


assert_return(() => invoke($12, `check_t0`, [26]), [value("i32", 6)]);


assert_trap(() => invoke($12, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($12, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($12, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($12, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($12, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($12, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($12, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($12, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($12, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($12, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($12, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($12, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($12, `check_t1`, [29]), `uninitialized element`);


let $13 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 13) (i32.const 25) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($13, `test`, []);


assert_trap(() => invoke($13, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($13, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($13, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($13, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($13, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($13, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($13, `check_t0`, [12]), [value("i32", 7)]);


assert_trap(() => invoke($13, `check_t0`, [13]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [14]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [15]), `uninitialized element`);


assert_return(() => invoke($13, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($13, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($13, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($13, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($13, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($13, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($13, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($13, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($13, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($13, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($13, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($13, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($13, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($13, `check_t1`, [29]), `uninitialized element`);


let $14 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 20) (i32.const 22) (i32.const 4)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($14, `test`, []);


assert_trap(() => invoke($14, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($14, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($14, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($14, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($14, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($14, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($14, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($14, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($14, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($14, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($14, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($14, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($14, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($14, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($14, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($14, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($14, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($14, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($14, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($14, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($14, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($14, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($14, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($14, `check_t1`, [29]), `uninitialized element`);


let $15 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 25) (i32.const 1) (i32.const 3)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($15, `test`, []);


assert_trap(() => invoke($15, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($15, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($15, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($15, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($15, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($15, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($15, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($15, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($15, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($15, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($15, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($15, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [25]), `uninitialized element`);


assert_return(() => invoke($15, `check_t0`, [26]), [value("i32", 3)]);


assert_return(() => invoke($15, `check_t0`, [27]), [value("i32", 1)]);


assert_trap(() => invoke($15, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($15, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($15, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($15, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($15, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($15, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($15, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($15, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($15, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($15, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($15, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($15, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($15, `check_t1`, [29]), `uninitialized element`);


let $16 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 10) (i32.const 12) (i32.const 7)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($16, `test`, []);


assert_trap(() => invoke($16, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($16, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($16, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($16, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($16, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($16, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [9]), `uninitialized element`);


assert_return(() => invoke($16, `check_t0`, [10]), [value("i32", 7)]);


assert_return(() => invoke($16, `check_t0`, [11]), [value("i32", 5)]);


assert_return(() => invoke($16, `check_t0`, [12]), [value("i32", 2)]);


assert_return(() => invoke($16, `check_t0`, [13]), [value("i32", 3)]);


assert_return(() => invoke($16, `check_t0`, [14]), [value("i32", 6)]);


assert_trap(() => invoke($16, `check_t0`, [15]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [16]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($16, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($16, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($16, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($16, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($16, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($16, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($16, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($16, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($16, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($16, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($16, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($16, `check_t1`, [29]), `uninitialized element`);


let $17 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t1 $$t1 (i32.const 12) (i32.const 10) (i32.const 7)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($17, `test`, []);


assert_trap(() => invoke($17, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($17, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($17, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($17, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($17, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($17, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [11]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [12]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [13]), `uninitialized element`);


assert_return(() => invoke($17, `check_t0`, [14]), [value("i32", 7)]);


assert_return(() => invoke($17, `check_t0`, [15]), [value("i32", 5)]);


assert_return(() => invoke($17, `check_t0`, [16]), [value("i32", 2)]);


assert_return(() => invoke($17, `check_t0`, [17]), [value("i32", 3)]);


assert_return(() => invoke($17, `check_t0`, [18]), [value("i32", 6)]);


assert_trap(() => invoke($17, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($17, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($17, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($17, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($17, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($17, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [10]), `uninitialized element`);


assert_return(() => invoke($17, `check_t1`, [11]), [value("i32", 6)]);


assert_return(() => invoke($17, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($17, `check_t1`, [13]), [value("i32", 2)]);


assert_return(() => invoke($17, `check_t1`, [14]), [value("i32", 5)]);


assert_return(() => invoke($17, `check_t1`, [15]), [value("i32", 7)]);


assert_trap(() => invoke($17, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [21]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [22]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [23]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [24]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [25]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [26]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($17, `check_t1`, [29]), `uninitialized element`);


let $18 = instantiate(`(module
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
  (elem (table $$t0) (i32.const 3) func 1 3 1 4)
  (elem (table $$t0) (i32.const 11) func 6 3 2 5 7)
  (func (result i32) (i32.const 5))  ;; index 5
  (func (result i32) (i32.const 6))
  (func (result i32) (i32.const 7))
  (func (result i32) (i32.const 8))
  (func (result i32) (i32.const 9))  ;; index 9
  (func (export "test")
    (table.copy $$t0 $$t1 (i32.const 10) (i32.const 0) (i32.const 20)))
  (func (export "check_t0") (param i32) (result i32)
    (call_indirect $$t1 (type 0) (local.get 0)))
  (func (export "check_t1") (param i32) (result i32)
    (call_indirect $$t0 (type 0) (local.get 0)))
)`);


invoke($18, `test`, []);


assert_trap(() => invoke($18, `check_t0`, [0]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [1]), `uninitialized element`);


assert_return(() => invoke($18, `check_t0`, [2]), [value("i32", 3)]);


assert_return(() => invoke($18, `check_t0`, [3]), [value("i32", 1)]);


assert_return(() => invoke($18, `check_t0`, [4]), [value("i32", 4)]);


assert_return(() => invoke($18, `check_t0`, [5]), [value("i32", 1)]);


assert_trap(() => invoke($18, `check_t0`, [6]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [7]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [8]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [9]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [10]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [11]), `uninitialized element`);


assert_return(() => invoke($18, `check_t0`, [12]), [value("i32", 7)]);


assert_return(() => invoke($18, `check_t0`, [13]), [value("i32", 5)]);


assert_return(() => invoke($18, `check_t0`, [14]), [value("i32", 2)]);


assert_return(() => invoke($18, `check_t0`, [15]), [value("i32", 3)]);


assert_return(() => invoke($18, `check_t0`, [16]), [value("i32", 6)]);


assert_trap(() => invoke($18, `check_t0`, [17]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [18]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [19]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [20]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [21]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [22]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [23]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [24]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [25]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [26]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [27]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [28]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t0`, [29]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [0]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [1]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [2]), `uninitialized element`);


assert_return(() => invoke($18, `check_t1`, [3]), [value("i32", 1)]);


assert_return(() => invoke($18, `check_t1`, [4]), [value("i32", 3)]);


assert_return(() => invoke($18, `check_t1`, [5]), [value("i32", 1)]);


assert_return(() => invoke($18, `check_t1`, [6]), [value("i32", 4)]);


assert_trap(() => invoke($18, `check_t1`, [7]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [8]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [9]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [10]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [11]), `uninitialized element`);


assert_return(() => invoke($18, `check_t1`, [12]), [value("i32", 3)]);


assert_return(() => invoke($18, `check_t1`, [13]), [value("i32", 1)]);


assert_return(() => invoke($18, `check_t1`, [14]), [value("i32", 4)]);


assert_return(() => invoke($18, `check_t1`, [15]), [value("i32", 1)]);


assert_trap(() => invoke($18, `check_t1`, [16]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [17]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [18]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [19]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [20]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [21]), `uninitialized element`);


assert_return(() => invoke($18, `check_t1`, [22]), [value("i32", 7)]);


assert_return(() => invoke($18, `check_t1`, [23]), [value("i32", 5)]);


assert_return(() => invoke($18, `check_t1`, [24]), [value("i32", 2)]);


assert_return(() => invoke($18, `check_t1`, [25]), [value("i32", 3)]);


assert_return(() => invoke($18, `check_t1`, [26]), [value("i32", 6)]);


assert_trap(() => invoke($18, `check_t1`, [27]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [28]), `uninitialized element`);


assert_trap(() => invoke($18, `check_t1`, [29]), `uninitialized element`);


let $19 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 28) (i32.const 1) (i32.const 3))
    ))`);


assert_trap(() => invoke($19, `test`, []), `out of bounds table access`);


let $20 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 0xFFFFFFFE) (i32.const 1) (i32.const 2))
    ))`);


assert_trap(() => invoke($20, `test`, []), `out of bounds table access`);


let $21 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 15) (i32.const 25) (i32.const 6))
    ))`);


assert_trap(() => invoke($21, `test`, []), `out of bounds table access`);


let $22 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 15) (i32.const 0xFFFFFFFE) (i32.const 2))
    ))`);


assert_trap(() => invoke($22, `test`, []), `out of bounds table access`);


let $23 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 15) (i32.const 25) (i32.const 0))
    ))`);


invoke($23, `test`, []);


let $24 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 30) (i32.const 15) (i32.const 0))
    ))`);


invoke($24, `test`, []);


let $25 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 31) (i32.const 15) (i32.const 0))
    ))`);


assert_trap(() => invoke($25, `test`, []), `out of bounds table access`);


let $26 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 15) (i32.const 30) (i32.const 0))
    ))`);


invoke($26, `test`, []);


let $27 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 15) (i32.const 31) (i32.const 0))
    ))`);


assert_trap(() => invoke($27, `test`, []), `out of bounds table access`);


let $28 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 30) (i32.const 30) (i32.const 0))
    ))`);


invoke($28, `test`, []);


let $29 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t0 $$t0 (i32.const 31) (i32.const 31) (i32.const 0))
    ))`);


assert_trap(() => invoke($29, `test`, []), `out of bounds table access`);


let $30 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 28) (i32.const 1) (i32.const 3))
    ))`);


assert_trap(() => invoke($30, `test`, []), `out of bounds table access`);


let $31 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 0xFFFFFFFE) (i32.const 1) (i32.const 2))
    ))`);


assert_trap(() => invoke($31, `test`, []), `out of bounds table access`);


let $32 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 15) (i32.const 25) (i32.const 6))
    ))`);


assert_trap(() => invoke($32, `test`, []), `out of bounds table access`);


let $33 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 15) (i32.const 0xFFFFFFFE) (i32.const 2))
    ))`);


assert_trap(() => invoke($33, `test`, []), `out of bounds table access`);


let $34 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 15) (i32.const 25) (i32.const 0))
    ))`);


invoke($34, `test`, []);


let $35 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 30) (i32.const 15) (i32.const 0))
    ))`);


invoke($35, `test`, []);


let $36 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 31) (i32.const 15) (i32.const 0))
    ))`);


assert_trap(() => invoke($36, `test`, []), `out of bounds table access`);


let $37 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 15) (i32.const 30) (i32.const 0))
    ))`);


invoke($37, `test`, []);


let $38 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 15) (i32.const 31) (i32.const 0))
    ))`);


assert_trap(() => invoke($38, `test`, []), `out of bounds table access`);


let $39 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 30) (i32.const 30) (i32.const 0))
    ))`);


invoke($39, `test`, []);


let $40 = instantiate(`(module
  (table $$t0 30 30 funcref)
  (table $$t1 30 30 funcref)
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
    (table.copy $$t1 $$t0 (i32.const 31) (i32.const 31) (i32.const 0))
    ))`);


assert_trap(() => invoke($40, `test`, []), `out of bounds table access`);


let $41 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 0)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($41, `run`, [24, 0, 16]), `out of bounds table access`);


assert_return(() => invoke($41, `test`, [0]), [value("i32", 0)]);


assert_return(() => invoke($41, `test`, [1]), [value("i32", 1)]);


assert_return(() => invoke($41, `test`, [2]), [value("i32", 2)]);


assert_return(() => invoke($41, `test`, [3]), [value("i32", 3)]);


assert_return(() => invoke($41, `test`, [4]), [value("i32", 4)]);


assert_return(() => invoke($41, `test`, [5]), [value("i32", 5)]);


assert_return(() => invoke($41, `test`, [6]), [value("i32", 6)]);


assert_return(() => invoke($41, `test`, [7]), [value("i32", 7)]);


assert_trap(() => invoke($41, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($41, `test`, [31]), `uninitialized element`);


let $42 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 0)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7 $$f8)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($42, `run`, [23, 0, 15]), `out of bounds table access`);


assert_return(() => invoke($42, `test`, [0]), [value("i32", 0)]);


assert_return(() => invoke($42, `test`, [1]), [value("i32", 1)]);


assert_return(() => invoke($42, `test`, [2]), [value("i32", 2)]);


assert_return(() => invoke($42, `test`, [3]), [value("i32", 3)]);


assert_return(() => invoke($42, `test`, [4]), [value("i32", 4)]);


assert_return(() => invoke($42, `test`, [5]), [value("i32", 5)]);


assert_return(() => invoke($42, `test`, [6]), [value("i32", 6)]);


assert_return(() => invoke($42, `test`, [7]), [value("i32", 7)]);


assert_return(() => invoke($42, `test`, [8]), [value("i32", 8)]);


assert_trap(() => invoke($42, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($42, `test`, [31]), `uninitialized element`);


let $43 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 24)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($43, `run`, [0, 24, 16]), `out of bounds table access`);


assert_trap(() => invoke($43, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($43, `test`, [23]), `uninitialized element`);


assert_return(() => invoke($43, `test`, [24]), [value("i32", 0)]);


assert_return(() => invoke($43, `test`, [25]), [value("i32", 1)]);


assert_return(() => invoke($43, `test`, [26]), [value("i32", 2)]);


assert_return(() => invoke($43, `test`, [27]), [value("i32", 3)]);


assert_return(() => invoke($43, `test`, [28]), [value("i32", 4)]);


assert_return(() => invoke($43, `test`, [29]), [value("i32", 5)]);


assert_return(() => invoke($43, `test`, [30]), [value("i32", 6)]);


assert_return(() => invoke($43, `test`, [31]), [value("i32", 7)]);


let $44 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 23)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7 $$f8)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($44, `run`, [0, 23, 15]), `out of bounds table access`);


assert_trap(() => invoke($44, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($44, `test`, [22]), `uninitialized element`);


assert_return(() => invoke($44, `test`, [23]), [value("i32", 0)]);


assert_return(() => invoke($44, `test`, [24]), [value("i32", 1)]);


assert_return(() => invoke($44, `test`, [25]), [value("i32", 2)]);


assert_return(() => invoke($44, `test`, [26]), [value("i32", 3)]);


assert_return(() => invoke($44, `test`, [27]), [value("i32", 4)]);


assert_return(() => invoke($44, `test`, [28]), [value("i32", 5)]);


assert_return(() => invoke($44, `test`, [29]), [value("i32", 6)]);


assert_return(() => invoke($44, `test`, [30]), [value("i32", 7)]);


assert_return(() => invoke($44, `test`, [31]), [value("i32", 8)]);


let $45 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 11)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($45, `run`, [24, 11, 16]), `out of bounds table access`);


assert_trap(() => invoke($45, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [10]), `uninitialized element`);


assert_return(() => invoke($45, `test`, [11]), [value("i32", 0)]);


assert_return(() => invoke($45, `test`, [12]), [value("i32", 1)]);


assert_return(() => invoke($45, `test`, [13]), [value("i32", 2)]);


assert_return(() => invoke($45, `test`, [14]), [value("i32", 3)]);


assert_return(() => invoke($45, `test`, [15]), [value("i32", 4)]);


assert_return(() => invoke($45, `test`, [16]), [value("i32", 5)]);


assert_return(() => invoke($45, `test`, [17]), [value("i32", 6)]);


assert_return(() => invoke($45, `test`, [18]), [value("i32", 7)]);


assert_trap(() => invoke($45, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($45, `test`, [31]), `uninitialized element`);


let $46 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 24)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($46, `run`, [11, 24, 16]), `out of bounds table access`);


assert_trap(() => invoke($46, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($46, `test`, [23]), `uninitialized element`);


assert_return(() => invoke($46, `test`, [24]), [value("i32", 0)]);


assert_return(() => invoke($46, `test`, [25]), [value("i32", 1)]);


assert_return(() => invoke($46, `test`, [26]), [value("i32", 2)]);


assert_return(() => invoke($46, `test`, [27]), [value("i32", 3)]);


assert_return(() => invoke($46, `test`, [28]), [value("i32", 4)]);


assert_return(() => invoke($46, `test`, [29]), [value("i32", 5)]);


assert_return(() => invoke($46, `test`, [30]), [value("i32", 6)]);


assert_return(() => invoke($46, `test`, [31]), [value("i32", 7)]);


let $47 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 21)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($47, `run`, [24, 21, 16]), `out of bounds table access`);


assert_trap(() => invoke($47, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [20]), `uninitialized element`);


assert_return(() => invoke($47, `test`, [21]), [value("i32", 0)]);


assert_return(() => invoke($47, `test`, [22]), [value("i32", 1)]);


assert_return(() => invoke($47, `test`, [23]), [value("i32", 2)]);


assert_return(() => invoke($47, `test`, [24]), [value("i32", 3)]);


assert_return(() => invoke($47, `test`, [25]), [value("i32", 4)]);


assert_return(() => invoke($47, `test`, [26]), [value("i32", 5)]);


assert_return(() => invoke($47, `test`, [27]), [value("i32", 6)]);


assert_return(() => invoke($47, `test`, [28]), [value("i32", 7)]);


assert_trap(() => invoke($47, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($47, `test`, [31]), `uninitialized element`);


let $48 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 24)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($48, `run`, [21, 24, 16]), `out of bounds table access`);


assert_trap(() => invoke($48, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($48, `test`, [23]), `uninitialized element`);


assert_return(() => invoke($48, `test`, [24]), [value("i32", 0)]);


assert_return(() => invoke($48, `test`, [25]), [value("i32", 1)]);


assert_return(() => invoke($48, `test`, [26]), [value("i32", 2)]);


assert_return(() => invoke($48, `test`, [27]), [value("i32", 3)]);


assert_return(() => invoke($48, `test`, [28]), [value("i32", 4)]);


assert_return(() => invoke($48, `test`, [29]), [value("i32", 5)]);


assert_return(() => invoke($48, `test`, [30]), [value("i32", 6)]);


assert_return(() => invoke($48, `test`, [31]), [value("i32", 7)]);


let $49 = instantiate(`(module
  (type (func (result i32)))
  (table 32 64 funcref)
  (elem (i32.const 21)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7 $$f8 $$f9 $$f10)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($49, `run`, [21, 21, 16]), `out of bounds table access`);


assert_trap(() => invoke($49, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($49, `test`, [20]), `uninitialized element`);


assert_return(() => invoke($49, `test`, [21]), [value("i32", 0)]);


assert_return(() => invoke($49, `test`, [22]), [value("i32", 1)]);


assert_return(() => invoke($49, `test`, [23]), [value("i32", 2)]);


assert_return(() => invoke($49, `test`, [24]), [value("i32", 3)]);


assert_return(() => invoke($49, `test`, [25]), [value("i32", 4)]);


assert_return(() => invoke($49, `test`, [26]), [value("i32", 5)]);


assert_return(() => invoke($49, `test`, [27]), [value("i32", 6)]);


assert_return(() => invoke($49, `test`, [28]), [value("i32", 7)]);


assert_return(() => invoke($49, `test`, [29]), [value("i32", 8)]);


assert_return(() => invoke($49, `test`, [30]), [value("i32", 9)]);


assert_return(() => invoke($49, `test`, [31]), [value("i32", 10)]);


let $50 = instantiate(`(module
  (type (func (result i32)))
  (table 128 128 funcref)
  (elem (i32.const 112)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7 $$f8 $$f9 $$f10 $$f11 $$f12 $$f13 $$f14 $$f15)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($50, `run`, [0, 112, -32]), `out of bounds table access`);


assert_trap(() => invoke($50, `test`, [0]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [1]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [2]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [3]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [4]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [5]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [6]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [7]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [8]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [9]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [10]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [11]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [12]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [13]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [14]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [15]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [31]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [32]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [33]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [34]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [35]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [36]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [37]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [38]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [39]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [40]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [41]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [42]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [43]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [44]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [45]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [46]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [47]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [48]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [49]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [50]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [51]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [52]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [53]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [54]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [55]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [56]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [57]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [58]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [59]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [60]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [61]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [62]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [63]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [64]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [65]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [66]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [67]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [68]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [69]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [70]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [71]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [72]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [73]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [74]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [75]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [76]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [77]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [78]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [79]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [80]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [81]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [82]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [83]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [84]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [85]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [86]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [87]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [88]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [89]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [90]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [91]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [92]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [93]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [94]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [95]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [96]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [97]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [98]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [99]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [100]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [101]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [102]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [103]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [104]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [105]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [106]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [107]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [108]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [109]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [110]), `uninitialized element`);


assert_trap(() => invoke($50, `test`, [111]), `uninitialized element`);


assert_return(() => invoke($50, `test`, [112]), [value("i32", 0)]);


assert_return(() => invoke($50, `test`, [113]), [value("i32", 1)]);


assert_return(() => invoke($50, `test`, [114]), [value("i32", 2)]);


assert_return(() => invoke($50, `test`, [115]), [value("i32", 3)]);


assert_return(() => invoke($50, `test`, [116]), [value("i32", 4)]);


assert_return(() => invoke($50, `test`, [117]), [value("i32", 5)]);


assert_return(() => invoke($50, `test`, [118]), [value("i32", 6)]);


assert_return(() => invoke($50, `test`, [119]), [value("i32", 7)]);


assert_return(() => invoke($50, `test`, [120]), [value("i32", 8)]);


assert_return(() => invoke($50, `test`, [121]), [value("i32", 9)]);


assert_return(() => invoke($50, `test`, [122]), [value("i32", 10)]);


assert_return(() => invoke($50, `test`, [123]), [value("i32", 11)]);


assert_return(() => invoke($50, `test`, [124]), [value("i32", 12)]);


assert_return(() => invoke($50, `test`, [125]), [value("i32", 13)]);


assert_return(() => invoke($50, `test`, [126]), [value("i32", 14)]);


assert_return(() => invoke($50, `test`, [127]), [value("i32", 15)]);


let $51 = instantiate(`(module
  (type (func (result i32)))
  (table 128 128 funcref)
  (elem (i32.const 0)
         $$f0 $$f1 $$f2 $$f3 $$f4 $$f5 $$f6 $$f7 $$f8 $$f9 $$f10 $$f11 $$f12 $$f13 $$f14 $$f15)
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
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (table.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len))))`);


assert_trap(() => invoke($51, `run`, [112, 0, -32]), `out of bounds table access`);


assert_return(() => invoke($51, `test`, [0]), [value("i32", 0)]);


assert_return(() => invoke($51, `test`, [1]), [value("i32", 1)]);


assert_return(() => invoke($51, `test`, [2]), [value("i32", 2)]);


assert_return(() => invoke($51, `test`, [3]), [value("i32", 3)]);


assert_return(() => invoke($51, `test`, [4]), [value("i32", 4)]);


assert_return(() => invoke($51, `test`, [5]), [value("i32", 5)]);


assert_return(() => invoke($51, `test`, [6]), [value("i32", 6)]);


assert_return(() => invoke($51, `test`, [7]), [value("i32", 7)]);


assert_return(() => invoke($51, `test`, [8]), [value("i32", 8)]);


assert_return(() => invoke($51, `test`, [9]), [value("i32", 9)]);


assert_return(() => invoke($51, `test`, [10]), [value("i32", 10)]);


assert_return(() => invoke($51, `test`, [11]), [value("i32", 11)]);


assert_return(() => invoke($51, `test`, [12]), [value("i32", 12)]);


assert_return(() => invoke($51, `test`, [13]), [value("i32", 13)]);


assert_return(() => invoke($51, `test`, [14]), [value("i32", 14)]);


assert_return(() => invoke($51, `test`, [15]), [value("i32", 15)]);


assert_trap(() => invoke($51, `test`, [16]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [17]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [18]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [19]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [20]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [21]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [22]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [23]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [24]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [25]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [26]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [27]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [28]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [29]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [30]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [31]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [32]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [33]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [34]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [35]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [36]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [37]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [38]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [39]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [40]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [41]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [42]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [43]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [44]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [45]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [46]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [47]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [48]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [49]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [50]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [51]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [52]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [53]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [54]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [55]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [56]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [57]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [58]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [59]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [60]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [61]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [62]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [63]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [64]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [65]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [66]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [67]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [68]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [69]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [70]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [71]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [72]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [73]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [74]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [75]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [76]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [77]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [78]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [79]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [80]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [81]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [82]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [83]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [84]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [85]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [86]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [87]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [88]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [89]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [90]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [91]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [92]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [93]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [94]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [95]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [96]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [97]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [98]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [99]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [100]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [101]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [102]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [103]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [104]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [105]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [106]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [107]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [108]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [109]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [110]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [111]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [112]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [113]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [114]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [115]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [116]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [117]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [118]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [119]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [120]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [121]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [122]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [123]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [124]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [125]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [126]), `uninitialized element`);


assert_trap(() => invoke($51, `test`, [127]), `uninitialized element`);
