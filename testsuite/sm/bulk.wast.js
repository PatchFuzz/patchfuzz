




let $0 = instantiate(`(module
  (memory 1)
  (data "foo"))`);


let $1 = instantiate(`(module
  (table 3 funcref)
  (elem funcref (ref.func 0) (ref.null func) (ref.func 1))
  (func)
  (func))`);


let $2 = instantiate(`(module
  (memory 1)

  (func (export "fill") (param i32 i32 i32)
    (memory.fill
      (local.get 0)
      (local.get 1)
      (local.get 2)))

  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0)))
)`);


invoke($2, `fill`, [1, 255, 3]);


assert_return(() => invoke($2, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [1]), [value("i32", 255)]);


assert_return(() => invoke($2, `load8_u`, [2]), [value("i32", 255)]);


assert_return(() => invoke($2, `load8_u`, [3]), [value("i32", 255)]);


assert_return(() => invoke($2, `load8_u`, [4]), [value("i32", 0)]);


invoke($2, `fill`, [0, 48042, 2]);


assert_return(() => invoke($2, `load8_u`, [0]), [value("i32", 170)]);


assert_return(() => invoke($2, `load8_u`, [1]), [value("i32", 170)]);


invoke($2, `fill`, [0, 0, 65536]);


assert_trap(() => invoke($2, `fill`, [65280, 1, 257]), `out of bounds memory access`);


assert_return(() => invoke($2, `load8_u`, [65280]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [65535]), [value("i32", 0)]);


invoke($2, `fill`, [65536, 0, 0]);


assert_trap(() => invoke($2, `fill`, [65537, 0, 0]), `out of bounds memory access`);


let $3 = instantiate(`(module
  (memory (data "\\aa\\bb\\cc\\dd"))

  (func (export "copy") (param i32 i32 i32)
    (memory.copy
      (local.get 0)
      (local.get 1)
      (local.get 2)))

  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0)))
)`);


invoke($3, `copy`, [10, 0, 4]);


assert_return(() => invoke($3, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [10]), [value("i32", 170)]);


assert_return(() => invoke($3, `load8_u`, [11]), [value("i32", 187)]);


assert_return(() => invoke($3, `load8_u`, [12]), [value("i32", 204)]);


assert_return(() => invoke($3, `load8_u`, [13]), [value("i32", 221)]);


assert_return(() => invoke($3, `load8_u`, [14]), [value("i32", 0)]);


invoke($3, `copy`, [8, 10, 4]);


assert_return(() => invoke($3, `load8_u`, [8]), [value("i32", 170)]);


assert_return(() => invoke($3, `load8_u`, [9]), [value("i32", 187)]);


assert_return(() => invoke($3, `load8_u`, [10]), [value("i32", 204)]);


assert_return(() => invoke($3, `load8_u`, [11]), [value("i32", 221)]);


assert_return(() => invoke($3, `load8_u`, [12]), [value("i32", 204)]);


assert_return(() => invoke($3, `load8_u`, [13]), [value("i32", 221)]);


invoke($3, `copy`, [10, 7, 6]);


assert_return(() => invoke($3, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [11]), [value("i32", 170)]);


assert_return(() => invoke($3, `load8_u`, [12]), [value("i32", 187)]);


assert_return(() => invoke($3, `load8_u`, [13]), [value("i32", 204)]);


assert_return(() => invoke($3, `load8_u`, [14]), [value("i32", 221)]);


assert_return(() => invoke($3, `load8_u`, [15]), [value("i32", 204)]);


assert_return(() => invoke($3, `load8_u`, [16]), [value("i32", 0)]);


invoke($3, `copy`, [65280, 0, 256]);


invoke($3, `copy`, [65024, 65280, 256]);


invoke($3, `copy`, [65536, 0, 0]);


invoke($3, `copy`, [0, 65536, 0]);


assert_trap(() => invoke($3, `copy`, [65537, 0, 0]), `out of bounds memory access`);


assert_trap(() => invoke($3, `copy`, [0, 65537, 0]), `out of bounds memory access`);


let $4 = instantiate(`(module
  (memory 1)
  (data "\\aa\\bb\\cc\\dd")

  (func (export "init") (param i32 i32 i32)
    (memory.init 0
      (local.get 0)
      (local.get 1)
      (local.get 2)))

  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0)))
)`);


invoke($4, `init`, [0, 1, 2]);


assert_return(() => invoke($4, `load8_u`, [0]), [value("i32", 187)]);


assert_return(() => invoke($4, `load8_u`, [1]), [value("i32", 204)]);


assert_return(() => invoke($4, `load8_u`, [2]), [value("i32", 0)]);


invoke($4, `init`, [65532, 0, 4]);


assert_trap(() => invoke($4, `init`, [65534, 0, 3]), `out of bounds memory access`);


assert_return(() => invoke($4, `load8_u`, [65534]), [value("i32", 204)]);


assert_return(() => invoke($4, `load8_u`, [65535]), [value("i32", 221)]);


invoke($4, `init`, [65536, 0, 0]);


invoke($4, `init`, [0, 4, 0]);


assert_trap(() => invoke($4, `init`, [65537, 0, 0]), `out of bounds memory access`);


assert_trap(() => invoke($4, `init`, [0, 5, 0]), `out of bounds memory access`);


let $5 = instantiate(`(module
  (memory 1)
  (data $$p "x")
  (data $$a (memory 0) (i32.const 0) "x")

  (func (export "drop_passive") (data.drop $$p))
  (func (export "init_passive") (param $$len i32)
    (memory.init $$p (i32.const 0) (i32.const 0) (local.get $$len)))

  (func (export "drop_active") (data.drop $$a))
  (func (export "init_active") (param $$len i32)
    (memory.init $$a (i32.const 0) (i32.const 0) (local.get $$len)))
)`);


invoke($5, `init_passive`, [1]);


invoke($5, `drop_passive`, []);


invoke($5, `drop_passive`, []);


assert_return(() => invoke($5, `init_passive`, [0]), []);


assert_trap(() => invoke($5, `init_passive`, [1]), `out of bounds memory access`);


invoke($5, `init_passive`, [0]);


invoke($5, `drop_active`, []);


assert_return(() => invoke($5, `init_active`, [0]), []);


assert_trap(() => invoke($5, `init_active`, [1]), `out of bounds memory access`);


invoke($5, `init_active`, [0]);


let $6 = instantiate(`(module
  ;; 65 data segments. 64 is the smallest positive number that is encoded
  ;; differently as a signed LEB.
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "") (data "") (data "") (data "") (data "") (data "") (data "") (data "")
  (data "")
  (func (data.drop 64)))`);


let $7 = instantiate(`(module (data "goodbye") (func (data.drop 0)))`);


let $8 = instantiate(`(module
  (table 3 funcref)
  (elem funcref
    (ref.func $$zero) (ref.func $$one) (ref.func $$zero) (ref.func $$one))

  (func $$zero (result i32) (i32.const 0))
  (func $$one (result i32) (i32.const 1))

  (func (export "init") (param i32 i32 i32)
    (table.init 0
      (local.get 0)
      (local.get 1)
      (local.get 2)))

  (func (export "call") (param i32) (result i32)
    (call_indirect (result i32)
      (local.get 0)))
)`);


assert_trap(() => invoke($8, `init`, [2, 0, 2]), `out of bounds table access`);


assert_trap(() => invoke($8, `call`, [2]), `uninitialized element 2`);


invoke($8, `init`, [0, 1, 2]);


assert_return(() => invoke($8, `call`, [0]), [value("i32", 1)]);


assert_return(() => invoke($8, `call`, [1]), [value("i32", 0)]);


assert_trap(() => invoke($8, `call`, [2]), `uninitialized element`);


invoke($8, `init`, [1, 2, 2]);


invoke($8, `init`, [3, 0, 0]);


invoke($8, `init`, [0, 4, 0]);


assert_trap(() => invoke($8, `init`, [4, 0, 0]), `out of bounds table access`);


assert_trap(() => invoke($8, `init`, [0, 5, 0]), `out of bounds table access`);


let $9 = instantiate(`(module
  (table 1 funcref)
  (func $$f)
  (elem $$p funcref (ref.func $$f))
  (elem $$a (table 0) (i32.const 0) func $$f)

  (func (export "drop_passive") (elem.drop $$p))
  (func (export "init_passive") (param $$len i32)
    (table.init $$p (i32.const 0) (i32.const 0) (local.get $$len))
  )

  (func (export "drop_active") (elem.drop $$a))
  (func (export "init_active") (param $$len i32)
    (table.init $$a (i32.const 0) (i32.const 0) (local.get $$len))
  )
)`);


invoke($9, `init_passive`, [1]);


invoke($9, `drop_passive`, []);


invoke($9, `drop_passive`, []);


assert_return(() => invoke($9, `init_passive`, [0]), []);


assert_trap(() => invoke($9, `init_passive`, [1]), `out of bounds table access`);


invoke($9, `init_passive`, [0]);


invoke($9, `drop_active`, []);


assert_return(() => invoke($9, `init_active`, [0]), []);


assert_trap(() => invoke($9, `init_active`, [1]), `out of bounds table access`);


invoke($9, `init_active`, [0]);


let $10 = instantiate(`(module
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
  (func (elem.drop 64)))`);


let $11 = instantiate(`(module (elem funcref (ref.func 0)) (func (elem.drop 0)))`);


let $12 = instantiate(`(module
  (table 10 funcref)
  (elem (i32.const 0) $$zero $$one $$two)
  (func $$zero (result i32) (i32.const 0))
  (func $$one (result i32) (i32.const 1))
  (func $$two (result i32) (i32.const 2))

  (func (export "copy") (param i32 i32 i32)
    (table.copy
      (local.get 0)
      (local.get 1)
      (local.get 2)))

  (func (export "call") (param i32) (result i32)
    (call_indirect (result i32)
      (local.get 0)))
)`);


invoke($12, `copy`, [3, 0, 3]);


assert_return(() => invoke($12, `call`, [3]), [value("i32", 0)]);


assert_return(() => invoke($12, `call`, [4]), [value("i32", 1)]);


assert_return(() => invoke($12, `call`, [5]), [value("i32", 2)]);


invoke($12, `copy`, [0, 1, 3]);


assert_return(() => invoke($12, `call`, [0]), [value("i32", 1)]);


assert_return(() => invoke($12, `call`, [1]), [value("i32", 2)]);


assert_return(() => invoke($12, `call`, [2]), [value("i32", 0)]);


invoke($12, `copy`, [2, 0, 3]);


assert_return(() => invoke($12, `call`, [2]), [value("i32", 1)]);


assert_return(() => invoke($12, `call`, [3]), [value("i32", 2)]);


assert_return(() => invoke($12, `call`, [4]), [value("i32", 0)]);


invoke($12, `copy`, [6, 8, 2]);


invoke($12, `copy`, [8, 6, 2]);


invoke($12, `copy`, [10, 0, 0]);


invoke($12, `copy`, [0, 10, 0]);


assert_trap(() => invoke($12, `copy`, [11, 0, 0]), `out of bounds table access`);


assert_trap(() => invoke($12, `copy`, [0, 11, 0]), `out of bounds table access`);
