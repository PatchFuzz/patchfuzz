




let $0 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0xFF00) (i32.const 0x55) (i32.const 256))))`);


invoke($0, `test`, []);


assert_return(() => invoke($0, `checkRange`, [0, 65280, 0]), [value("i32", -1)]);


assert_return(() => invoke($0, `checkRange`, [65280, 65536, 85]), [value("i32", -1)]);


let $1 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0xFF00) (i32.const 0x55) (i32.const 257))))`);


assert_trap(() => invoke($1, `test`, []), `out of bounds memory access`);


let $2 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0xFFFFFF00) (i32.const 0x55) (i32.const 257))))`);


assert_trap(() => invoke($2, `test`, []), `out of bounds memory access`);


let $3 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0x12) (i32.const 0x55) (i32.const 0))))`);


invoke($3, `test`, []);


assert_return(() => invoke($3, `checkRange`, [0, 65536, 0]), [value("i32", -1)]);


let $4 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0x10000) (i32.const 0x55) (i32.const 0))))`);


invoke($4, `test`, []);


let $5 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0x20000) (i32.const 0x55) (i32.const 0))))`);


assert_trap(() => invoke($5, `test`, []), `out of bounds memory access`);


let $6 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
    (memory.fill (i32.const 0x1) (i32.const 0xAA) (i32.const 0xFFFE))))`);


invoke($6, `test`, []);


assert_return(() => invoke($6, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


assert_return(() => invoke($6, `checkRange`, [1, 65535, 170]), [value("i32", -1)]);


assert_return(() => invoke($6, `checkRange`, [65535, 65536, 0]), [value("i32", -1)]);


let $7 = instantiate(`(module
  (memory 1 1)
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "test")
     (memory.fill (i32.const 0x12) (i32.const 0x55) (i32.const 10))
     (memory.fill (i32.const 0x15) (i32.const 0xAA) (i32.const 4))))`);


invoke($7, `test`, []);


assert_return(() => invoke($7, `checkRange`, [0, 18, 0]), [value("i32", -1)]);


assert_return(() => invoke($7, `checkRange`, [18, 21, 85]), [value("i32", -1)]);


assert_return(() => invoke($7, `checkRange`, [21, 25, 170]), [value("i32", -1)]);


assert_return(() => invoke($7, `checkRange`, [25, 28, 85]), [value("i32", -1)]);


assert_return(() => invoke($7, `checkRange`, [28, 65536, 0]), [value("i32", -1)]);


assert_invalid(
  () => instantiate(`(module
    (func (export "testfn")
      (memory.fill (i32.const 10) (i32.const 20) (i32.const 30))))`),
  `unknown memory 0`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i32.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f32.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (i64.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.fill (f64.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


let $8 = instantiate(`(module
  (memory 1 1 )
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "run") (param $$offs i32) (param $$val i32) (param $$len i32)
    (memory.fill (local.get $$offs) (local.get $$val) (local.get $$len))))`);


assert_trap(() => invoke($8, `run`, [65280, 37, 512]), `out of bounds memory access`);


assert_return(() => invoke($8, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $9 = instantiate(`(module
  (memory 1 1 )
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "run") (param $$offs i32) (param $$val i32) (param $$len i32)
    (memory.fill (local.get $$offs) (local.get $$val) (local.get $$len))))`);


assert_trap(() => invoke($9, `run`, [65279, 37, 514]), `out of bounds memory access`);


assert_return(() => invoke($9, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $10 = instantiate(`(module
  (memory 1 1 )
  
  (func (export "checkRange") (param $$from i32) (param $$to i32) (param $$expected i32) (result i32)
    (loop $$cont
      (if (i32.eq (local.get $$from) (local.get $$to))
        (then
          (return (i32.const -1))))
      (if (i32.eq (i32.load8_u (local.get $$from)) (local.get $$expected))
        (then
          (local.set $$from (i32.add (local.get $$from) (i32.const 1)))
          (br $$cont))))
    (return (local.get $$from)))

  (func (export "run") (param $$offs i32) (param $$val i32) (param $$len i32)
    (memory.fill (local.get $$offs) (local.get $$val) (local.get $$len))))`);


assert_trap(() => invoke($10, `run`, [65279, 37, -1]), `out of bounds memory access`);


assert_return(() => invoke($10, `checkRange`, [0, 1, 0]), [value("i32", -1)]);
