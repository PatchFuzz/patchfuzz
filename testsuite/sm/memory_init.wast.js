




let $0 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data "\\02\\07\\01\\08")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (data "\\05\\09\\02\\07\\06")
  (func (export "test")
    (nop))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($0, `test`, []);


assert_return(() => invoke($0, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($0, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($0, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($0, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($0, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($0, `load8_u`, [13]), [value("i32", 5)]);


assert_return(() => invoke($0, `load8_u`, [14]), [value("i32", 2)]);


assert_return(() => invoke($0, `load8_u`, [15]), [value("i32", 3)]);


assert_return(() => invoke($0, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($0, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($0, `load8_u`, [29]), [value("i32", 0)]);


let $1 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data "\\02\\07\\01\\08")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (data "\\05\\09\\02\\07\\06")
  (func (export "test")
    (memory.init 1 (i32.const 7) (i32.const 0) (i32.const 4)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($1, `test`, []);


assert_return(() => invoke($1, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($1, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($1, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($1, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($1, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [7]), [value("i32", 2)]);


assert_return(() => invoke($1, `load8_u`, [8]), [value("i32", 7)]);


assert_return(() => invoke($1, `load8_u`, [9]), [value("i32", 1)]);


assert_return(() => invoke($1, `load8_u`, [10]), [value("i32", 8)]);


assert_return(() => invoke($1, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($1, `load8_u`, [13]), [value("i32", 5)]);


assert_return(() => invoke($1, `load8_u`, [14]), [value("i32", 2)]);


assert_return(() => invoke($1, `load8_u`, [15]), [value("i32", 3)]);


assert_return(() => invoke($1, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($1, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [29]), [value("i32", 0)]);


let $2 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data "\\02\\07\\01\\08")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (data "\\05\\09\\02\\07\\06")
  (func (export "test")
    (memory.init 3 (i32.const 15) (i32.const 1) (i32.const 3)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($2, `test`, []);


assert_return(() => invoke($2, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($2, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($2, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($2, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($2, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($2, `load8_u`, [13]), [value("i32", 5)]);


assert_return(() => invoke($2, `load8_u`, [14]), [value("i32", 2)]);


assert_return(() => invoke($2, `load8_u`, [15]), [value("i32", 9)]);


assert_return(() => invoke($2, `load8_u`, [16]), [value("i32", 2)]);


assert_return(() => invoke($2, `load8_u`, [17]), [value("i32", 7)]);


assert_return(() => invoke($2, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [29]), [value("i32", 0)]);


let $3 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data "\\02\\07\\01\\08")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (data "\\05\\09\\02\\07\\06")
  (func (export "test")
    (memory.init 1 (i32.const 7) (i32.const 0) (i32.const 4))
    (data.drop 1)
    (memory.init 3 (i32.const 15) (i32.const 1) (i32.const 3))
    (data.drop 3)
    (memory.copy (i32.const 20) (i32.const 15) (i32.const 5))
    (memory.copy (i32.const 21) (i32.const 29) (i32.const 1))
    (memory.copy (i32.const 24) (i32.const 10) (i32.const 1))
    (memory.copy (i32.const 13) (i32.const 11) (i32.const 4))
    (memory.copy (i32.const 19) (i32.const 20) (i32.const 5)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($3, `test`, []);


assert_return(() => invoke($3, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($3, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($3, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($3, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($3, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [7]), [value("i32", 2)]);


assert_return(() => invoke($3, `load8_u`, [8]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [9]), [value("i32", 1)]);


assert_return(() => invoke($3, `load8_u`, [10]), [value("i32", 8)]);


assert_return(() => invoke($3, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [13]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [14]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [15]), [value("i32", 5)]);


assert_return(() => invoke($3, `load8_u`, [16]), [value("i32", 2)]);


assert_return(() => invoke($3, `load8_u`, [17]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [19]), [value("i32", 9)]);


assert_return(() => invoke($3, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [21]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [23]), [value("i32", 8)]);


assert_return(() => invoke($3, `load8_u`, [24]), [value("i32", 8)]);


assert_return(() => invoke($3, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [29]), [value("i32", 0)]);


assert_invalid(
  () => instantiate(`(module
     (func (export "test")
       (data.drop 0)))`),
  `unknown data segment`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (data.drop 4)))`),
  `unknown data segment`,
);


let $4 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (data.drop 0)
    (data.drop 0)))`);


invoke($4, `test`, []);


let $5 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (data.drop 0)
    (memory.init 0 (i32.const 1234) (i32.const 1) (i32.const 1))))`);


assert_trap(() => invoke($5, `test`, []), `out of bounds memory access`);


let $6 = instantiate(`(module
   (memory 1)
   (data (i32.const 0) "\\37")
   (func (export "test")
     (memory.init 0 (i32.const 1234) (i32.const 1) (i32.const 1))))`);


assert_trap(() => invoke($6, `test`, []), `out of bounds memory access`);


assert_invalid(
  () => instantiate(`(module
    (func (export "test")
      (memory.init 1 (i32.const 1234) (i32.const 1) (i32.const 1))))`),
  `unknown memory 0`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 1 (i32.const 1234) (i32.const 1) (i32.const 1))))`),
  `unknown data segment 1`,
);


let $7 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 1) (i32.const 0) (i32.const 1))
    (memory.init 0 (i32.const 1) (i32.const 0) (i32.const 1))))`);


invoke($7, `test`, []);


let $8 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 1234) (i32.const 0) (i32.const 5))))`);


assert_trap(() => invoke($8, `test`, []), `out of bounds memory access`);


let $9 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 1234) (i32.const 2) (i32.const 3))))`);


assert_trap(() => invoke($9, `test`, []), `out of bounds memory access`);


let $10 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 0xFFFE) (i32.const 1) (i32.const 3))))`);


assert_trap(() => invoke($10, `test`, []), `out of bounds memory access`);


let $11 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 1234) (i32.const 4) (i32.const 0))))`);


assert_trap(() => invoke($11, `test`, []), `out of bounds memory access`);


let $12 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 1234) (i32.const 1) (i32.const 0))))`);


invoke($12, `test`, []);


let $13 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 0x10001) (i32.const 0) (i32.const 0))))`);


assert_trap(() => invoke($13, `test`, []), `out of bounds memory access`);


let $14 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 0x10000) (i32.const 0) (i32.const 0))))`);


invoke($14, `test`, []);


let $15 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 0x10000) (i32.const 1) (i32.const 0))))`);


invoke($15, `test`, []);


let $16 = instantiate(`(module
  (memory 1)
    (data "\\37")
  (func (export "test")
    (memory.init 0 (i32.const 0x10001) (i32.const 4) (i32.const 0))))`);


assert_trap(() => invoke($16, `test`, []), `out of bounds memory access`);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i32.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f32.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (i64.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f32.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f32.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f32.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f32.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (i64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f64.const 1) (i32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f64.const 1) (f32.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f64.const 1) (i64.const 1))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (data "\\37")
    (func (export "test")
      (memory.init 0 (f64.const 1) (f64.const 1) (f64.const 1))))`),
  `type mismatch`,
);


let $17 = instantiate(`(module
  (memory 1 1 )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($17, `run`, [65528, 16]), `out of bounds memory access`);


assert_return(() => invoke($17, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $18 = instantiate(`(module
  (memory 1 1 )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($18, `run`, [65527, 16]), `out of bounds memory access`);


assert_return(() => invoke($18, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $19 = instantiate(`(module
  (memory 1 1 )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($19, `run`, [65472, 30]), `out of bounds memory access`);


assert_return(() => invoke($19, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $20 = instantiate(`(module
  (memory 1 1 )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($20, `run`, [65473, 31]), `out of bounds memory access`);


assert_return(() => invoke($20, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $21 = instantiate(`(module
  (memory 1  )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($21, `run`, [65528, -256]), `out of bounds memory access`);


assert_return(() => invoke($21, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $22 = instantiate(`(module
  (memory 1  )
  (data "\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42\\42")
   
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

  (func (export "run") (param $$offs i32) (param $$len i32)
    (memory.init 0 (local.get $$offs) (i32.const 0) (local.get $$len))))`);


assert_trap(() => invoke($22, `run`, [0, -4]), `out of bounds memory access`);


assert_return(() => invoke($22, `checkRange`, [0, 1, 0]), [value("i32", -1)]);


let $23 = instantiate(`(module
  (memory 1)
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
  (func (memory.init 64 (i32.const 0) (i32.const 0) (i32.const 0))))`);
