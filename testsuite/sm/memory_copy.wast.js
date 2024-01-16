




let $0 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
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
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 13) (i32.const 2) (i32.const 3)))
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


assert_return(() => invoke($1, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($1, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($1, `load8_u`, [13]), [value("i32", 3)]);


assert_return(() => invoke($1, `load8_u`, [14]), [value("i32", 1)]);


assert_return(() => invoke($1, `load8_u`, [15]), [value("i32", 4)]);


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
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 25) (i32.const 15) (i32.const 2)))
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


assert_return(() => invoke($2, `load8_u`, [15]), [value("i32", 3)]);


assert_return(() => invoke($2, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($2, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [25]), [value("i32", 3)]);


assert_return(() => invoke($2, `load8_u`, [26]), [value("i32", 6)]);


assert_return(() => invoke($2, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($2, `load8_u`, [29]), [value("i32", 0)]);


let $3 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 13) (i32.const 25) (i32.const 3)))
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


assert_return(() => invoke($3, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($3, `load8_u`, [13]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [14]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [15]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($3, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($3, `load8_u`, [29]), [value("i32", 0)]);


let $4 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 20) (i32.const 22) (i32.const 4)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($4, `test`, []);


assert_return(() => invoke($4, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($4, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($4, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($4, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($4, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($4, `load8_u`, [13]), [value("i32", 5)]);


assert_return(() => invoke($4, `load8_u`, [14]), [value("i32", 2)]);


assert_return(() => invoke($4, `load8_u`, [15]), [value("i32", 3)]);


assert_return(() => invoke($4, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($4, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($4, `load8_u`, [29]), [value("i32", 0)]);


let $5 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 25) (i32.const 1) (i32.const 3)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($5, `test`, []);


assert_return(() => invoke($5, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($5, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($5, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($5, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($5, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [12]), [value("i32", 7)]);


assert_return(() => invoke($5, `load8_u`, [13]), [value("i32", 5)]);


assert_return(() => invoke($5, `load8_u`, [14]), [value("i32", 2)]);


assert_return(() => invoke($5, `load8_u`, [15]), [value("i32", 3)]);


assert_return(() => invoke($5, `load8_u`, [16]), [value("i32", 6)]);


assert_return(() => invoke($5, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [26]), [value("i32", 3)]);


assert_return(() => invoke($5, `load8_u`, [27]), [value("i32", 1)]);


assert_return(() => invoke($5, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($5, `load8_u`, [29]), [value("i32", 0)]);


let $6 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 10) (i32.const 12) (i32.const 7)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($6, `test`, []);


assert_return(() => invoke($6, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($6, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($6, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($6, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($6, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [10]), [value("i32", 7)]);


assert_return(() => invoke($6, `load8_u`, [11]), [value("i32", 5)]);


assert_return(() => invoke($6, `load8_u`, [12]), [value("i32", 2)]);


assert_return(() => invoke($6, `load8_u`, [13]), [value("i32", 3)]);


assert_return(() => invoke($6, `load8_u`, [14]), [value("i32", 6)]);


assert_return(() => invoke($6, `load8_u`, [15]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [16]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [17]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [18]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($6, `load8_u`, [29]), [value("i32", 0)]);


let $7 = instantiate(`(module
  (memory (export "memory0") 1 1)
  (data (i32.const 2) "\\03\\01\\04\\01")
  (data (i32.const 12) "\\07\\05\\02\\03\\06")
  (func (export "test")
    (memory.copy (i32.const 12) (i32.const 10) (i32.const 7)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


invoke($7, `test`, []);


assert_return(() => invoke($7, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [1]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [2]), [value("i32", 3)]);


assert_return(() => invoke($7, `load8_u`, [3]), [value("i32", 1)]);


assert_return(() => invoke($7, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($7, `load8_u`, [5]), [value("i32", 1)]);


assert_return(() => invoke($7, `load8_u`, [6]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [7]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [8]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [9]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [10]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [11]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [12]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [13]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [14]), [value("i32", 7)]);


assert_return(() => invoke($7, `load8_u`, [15]), [value("i32", 5)]);


assert_return(() => invoke($7, `load8_u`, [16]), [value("i32", 2)]);


assert_return(() => invoke($7, `load8_u`, [17]), [value("i32", 3)]);


assert_return(() => invoke($7, `load8_u`, [18]), [value("i32", 6)]);


assert_return(() => invoke($7, `load8_u`, [19]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [20]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [21]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [22]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [23]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [24]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [25]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [26]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [27]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [28]), [value("i32", 0)]);


assert_return(() => invoke($7, `load8_u`, [29]), [value("i32", 0)]);


let $8 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($8, `run`, [65516, 0, 40]), `out of bounds memory access`);


assert_return(() => invoke($8, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1]), [value("i32", 1)]);


assert_return(() => invoke($8, `load8_u`, [2]), [value("i32", 2)]);


assert_return(() => invoke($8, `load8_u`, [3]), [value("i32", 3)]);


assert_return(() => invoke($8, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($8, `load8_u`, [5]), [value("i32", 5)]);


assert_return(() => invoke($8, `load8_u`, [6]), [value("i32", 6)]);


assert_return(() => invoke($8, `load8_u`, [7]), [value("i32", 7)]);


assert_return(() => invoke($8, `load8_u`, [8]), [value("i32", 8)]);


assert_return(() => invoke($8, `load8_u`, [9]), [value("i32", 9)]);


assert_return(() => invoke($8, `load8_u`, [10]), [value("i32", 10)]);


assert_return(() => invoke($8, `load8_u`, [11]), [value("i32", 11)]);


assert_return(() => invoke($8, `load8_u`, [12]), [value("i32", 12)]);


assert_return(() => invoke($8, `load8_u`, [13]), [value("i32", 13)]);


assert_return(() => invoke($8, `load8_u`, [14]), [value("i32", 14)]);


assert_return(() => invoke($8, `load8_u`, [15]), [value("i32", 15)]);


assert_return(() => invoke($8, `load8_u`, [16]), [value("i32", 16)]);


assert_return(() => invoke($8, `load8_u`, [17]), [value("i32", 17)]);


assert_return(() => invoke($8, `load8_u`, [18]), [value("i32", 18)]);


assert_return(() => invoke($8, `load8_u`, [19]), [value("i32", 19)]);


assert_return(() => invoke($8, `load8_u`, [218]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [417]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [616]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [815]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1014]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1213]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1412]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1611]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [1810]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [2009]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [2208]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [2407]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [2606]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [2805]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3004]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3203]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3402]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3601]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3800]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [3999]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [4198]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [4397]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [4596]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [4795]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [4994]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [5193]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [5392]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [5591]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [5790]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [5989]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [6188]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [6387]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [6586]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [6785]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [6984]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [7183]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [7382]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [7581]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [7780]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [7979]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [8178]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [8377]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [8576]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [8775]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [8974]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [9173]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [9372]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [9571]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [9770]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [9969]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [10168]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [10367]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [10566]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [10765]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [10964]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [11163]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [11362]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [11561]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [11760]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [11959]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [12158]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [12357]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [12556]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [12755]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [12954]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [13153]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [13352]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [13551]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [13750]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [13949]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [14148]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [14347]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [14546]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [14745]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [14944]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [15143]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [15342]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [15541]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [15740]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [15939]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [16138]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [16337]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [16536]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [16735]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [16934]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [17133]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [17332]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [17531]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [17730]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [17929]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [18128]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [18327]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [18526]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [18725]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [18924]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [19123]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [19322]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [19521]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [19720]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [19919]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [20118]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [20317]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [20516]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [20715]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [20914]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [21113]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [21312]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [21511]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [21710]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [21909]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [22108]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [22307]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [22506]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [22705]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [22904]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [23103]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [23302]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [23501]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [23700]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [23899]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [24098]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [24297]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [24496]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [24695]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [24894]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [25093]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [25292]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [25491]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [25690]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [25889]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [26088]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [26287]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [26486]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [26685]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [26884]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [27083]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [27282]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [27481]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [27680]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [27879]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [28078]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [28277]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [28476]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [28675]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [28874]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [29073]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [29272]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [29471]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [29670]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [29869]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [30068]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [30267]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [30466]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [30665]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [30864]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [31063]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [31262]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [31461]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [31660]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [31859]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [32058]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [32257]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [32456]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [32655]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [32854]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [33053]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [33252]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [33451]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [33650]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [33849]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [34048]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [34247]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [34446]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [34645]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [34844]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [35043]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [35242]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [35441]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [35640]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [35839]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [36038]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [36237]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [36436]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [36635]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [36834]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [37033]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [37232]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [37431]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [37630]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [37829]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [38028]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [38227]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [38426]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [38625]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [38824]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [39023]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [39222]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [39421]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [39620]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [39819]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [40018]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [40217]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [40416]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [40615]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [40814]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [41013]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [41212]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [41411]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [41610]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [41809]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [42008]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [42207]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [42406]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [42605]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [42804]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43003]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43202]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43401]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43600]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43799]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [43998]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [44197]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [44396]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [44595]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [44794]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [44993]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [45192]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [45391]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [45590]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [45789]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [45988]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [46187]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [46386]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [46585]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [46784]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [46983]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [47182]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [47381]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [47580]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [47779]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [47978]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [48177]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [48376]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [48575]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [48774]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [48973]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [49172]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [49371]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [49570]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [49769]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [49968]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [50167]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [50366]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [50565]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [50764]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [50963]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [51162]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [51361]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [51560]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [51759]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [51958]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [52157]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [52356]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [52555]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [52754]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [52953]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [53152]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [53351]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [53550]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [53749]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [53948]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [54147]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [54346]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [54545]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [54744]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [54943]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [55142]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [55341]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [55540]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [55739]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [55938]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [56137]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [56336]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [56535]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [56734]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [56933]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [57132]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [57331]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [57530]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [57729]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [57928]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [58127]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [58326]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [58525]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [58724]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [58923]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [59122]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [59321]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [59520]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [59719]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [59918]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [60117]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [60316]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [60515]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [60714]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [60913]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [61112]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [61311]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [61510]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [61709]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [61908]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [62107]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [62306]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [62505]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [62704]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [62903]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [63102]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [63301]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [63500]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [63699]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [63898]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [64097]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [64296]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [64495]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [64694]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [64893]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [65092]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [65291]), [value("i32", 0)]);


assert_return(() => invoke($8, `load8_u`, [65490]), [value("i32", 0)]);


let $9 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 0) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13\\14")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($9, `run`, [65515, 0, 39]), `out of bounds memory access`);


assert_return(() => invoke($9, `load8_u`, [0]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1]), [value("i32", 1)]);


assert_return(() => invoke($9, `load8_u`, [2]), [value("i32", 2)]);


assert_return(() => invoke($9, `load8_u`, [3]), [value("i32", 3)]);


assert_return(() => invoke($9, `load8_u`, [4]), [value("i32", 4)]);


assert_return(() => invoke($9, `load8_u`, [5]), [value("i32", 5)]);


assert_return(() => invoke($9, `load8_u`, [6]), [value("i32", 6)]);


assert_return(() => invoke($9, `load8_u`, [7]), [value("i32", 7)]);


assert_return(() => invoke($9, `load8_u`, [8]), [value("i32", 8)]);


assert_return(() => invoke($9, `load8_u`, [9]), [value("i32", 9)]);


assert_return(() => invoke($9, `load8_u`, [10]), [value("i32", 10)]);


assert_return(() => invoke($9, `load8_u`, [11]), [value("i32", 11)]);


assert_return(() => invoke($9, `load8_u`, [12]), [value("i32", 12)]);


assert_return(() => invoke($9, `load8_u`, [13]), [value("i32", 13)]);


assert_return(() => invoke($9, `load8_u`, [14]), [value("i32", 14)]);


assert_return(() => invoke($9, `load8_u`, [15]), [value("i32", 15)]);


assert_return(() => invoke($9, `load8_u`, [16]), [value("i32", 16)]);


assert_return(() => invoke($9, `load8_u`, [17]), [value("i32", 17)]);


assert_return(() => invoke($9, `load8_u`, [18]), [value("i32", 18)]);


assert_return(() => invoke($9, `load8_u`, [19]), [value("i32", 19)]);


assert_return(() => invoke($9, `load8_u`, [20]), [value("i32", 20)]);


assert_return(() => invoke($9, `load8_u`, [219]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [418]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [617]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [816]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1015]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1214]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1413]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1612]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [1811]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [2010]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [2209]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [2408]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [2607]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [2806]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [3005]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [3204]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [3403]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [3602]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [3801]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4000]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4199]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4398]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4597]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4796]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [4995]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [5194]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [5393]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [5592]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [5791]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [5990]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [6189]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [6388]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [6587]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [6786]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [6985]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [7184]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [7383]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [7582]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [7781]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [7980]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [8179]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [8378]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [8577]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [8776]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [8975]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [9174]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [9373]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [9572]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [9771]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [9970]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [10169]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [10368]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [10567]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [10766]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [10965]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [11164]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [11363]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [11562]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [11761]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [11960]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [12159]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [12358]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [12557]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [12756]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [12955]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [13154]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [13353]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [13552]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [13751]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [13950]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [14149]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [14348]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [14547]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [14746]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [14945]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [15144]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [15343]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [15542]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [15741]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [15940]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [16139]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [16338]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [16537]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [16736]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [16935]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [17134]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [17333]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [17532]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [17731]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [17930]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [18129]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [18328]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [18527]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [18726]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [18925]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [19124]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [19323]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [19522]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [19721]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [19920]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [20119]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [20318]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [20517]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [20716]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [20915]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [21114]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [21313]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [21512]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [21711]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [21910]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [22109]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [22308]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [22507]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [22706]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [22905]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [23104]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [23303]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [23502]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [23701]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [23900]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [24099]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [24298]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [24497]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [24696]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [24895]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [25094]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [25293]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [25492]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [25691]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [25890]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [26089]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [26288]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [26487]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [26686]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [26885]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [27084]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [27283]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [27482]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [27681]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [27880]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [28079]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [28278]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [28477]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [28676]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [28875]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [29074]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [29273]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [29472]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [29671]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [29870]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [30069]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [30268]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [30467]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [30666]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [30865]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [31064]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [31263]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [31462]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [31661]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [31860]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [32059]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [32258]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [32457]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [32656]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [32855]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [33054]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [33253]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [33452]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [33651]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [33850]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [34049]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [34248]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [34447]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [34646]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [34845]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [35044]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [35243]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [35442]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [35641]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [35840]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [36039]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [36238]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [36437]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [36636]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [36835]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [37034]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [37233]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [37432]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [37631]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [37830]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [38029]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [38228]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [38427]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [38626]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [38825]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [39024]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [39223]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [39422]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [39621]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [39820]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [40019]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [40218]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [40417]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [40616]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [40815]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [41014]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [41213]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [41412]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [41611]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [41810]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [42009]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [42208]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [42407]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [42606]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [42805]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43004]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43203]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43402]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43601]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43800]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [43999]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [44198]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [44397]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [44596]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [44795]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [44994]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [45193]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [45392]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [45591]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [45790]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [45989]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [46188]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [46387]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [46586]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [46785]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [46984]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [47183]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [47382]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [47581]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [47780]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [47979]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [48178]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [48377]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [48576]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [48775]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [48974]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [49173]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [49372]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [49571]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [49770]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [49969]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [50168]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [50367]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [50566]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [50765]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [50964]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [51163]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [51362]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [51561]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [51760]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [51959]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [52158]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [52357]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [52556]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [52755]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [52954]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [53153]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [53352]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [53551]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [53750]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [53949]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [54148]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [54347]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [54546]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [54745]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [54944]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [55143]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [55342]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [55541]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [55740]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [55939]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [56138]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [56337]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [56536]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [56735]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [56934]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [57133]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [57332]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [57531]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [57730]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [57929]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [58128]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [58327]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [58526]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [58725]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [58924]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [59123]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [59322]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [59521]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [59720]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [59919]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [60118]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [60317]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [60516]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [60715]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [60914]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [61113]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [61312]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [61511]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [61710]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [61909]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [62108]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [62307]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [62506]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [62705]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [62904]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [63103]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [63302]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [63501]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [63700]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [63899]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [64098]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [64297]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [64496]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [64695]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [64894]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [65093]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [65292]), [value("i32", 0)]);


assert_return(() => invoke($9, `load8_u`, [65491]), [value("i32", 0)]);


let $10 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65516) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($10, `run`, [0, 65516, 40]), `out of bounds memory access`);


assert_return(() => invoke($10, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [65516]), [value("i32", 0)]);


assert_return(() => invoke($10, `load8_u`, [65517]), [value("i32", 1)]);


assert_return(() => invoke($10, `load8_u`, [65518]), [value("i32", 2)]);


assert_return(() => invoke($10, `load8_u`, [65519]), [value("i32", 3)]);


assert_return(() => invoke($10, `load8_u`, [65520]), [value("i32", 4)]);


assert_return(() => invoke($10, `load8_u`, [65521]), [value("i32", 5)]);


assert_return(() => invoke($10, `load8_u`, [65522]), [value("i32", 6)]);


assert_return(() => invoke($10, `load8_u`, [65523]), [value("i32", 7)]);


assert_return(() => invoke($10, `load8_u`, [65524]), [value("i32", 8)]);


assert_return(() => invoke($10, `load8_u`, [65525]), [value("i32", 9)]);


assert_return(() => invoke($10, `load8_u`, [65526]), [value("i32", 10)]);


assert_return(() => invoke($10, `load8_u`, [65527]), [value("i32", 11)]);


assert_return(() => invoke($10, `load8_u`, [65528]), [value("i32", 12)]);


assert_return(() => invoke($10, `load8_u`, [65529]), [value("i32", 13)]);


assert_return(() => invoke($10, `load8_u`, [65530]), [value("i32", 14)]);


assert_return(() => invoke($10, `load8_u`, [65531]), [value("i32", 15)]);


assert_return(() => invoke($10, `load8_u`, [65532]), [value("i32", 16)]);


assert_return(() => invoke($10, `load8_u`, [65533]), [value("i32", 17)]);


assert_return(() => invoke($10, `load8_u`, [65534]), [value("i32", 18)]);


assert_return(() => invoke($10, `load8_u`, [65535]), [value("i32", 19)]);


let $11 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65515) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13\\14")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($11, `run`, [0, 65515, 39]), `out of bounds memory access`);


assert_return(() => invoke($11, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [65515]), [value("i32", 0)]);


assert_return(() => invoke($11, `load8_u`, [65516]), [value("i32", 1)]);


assert_return(() => invoke($11, `load8_u`, [65517]), [value("i32", 2)]);


assert_return(() => invoke($11, `load8_u`, [65518]), [value("i32", 3)]);


assert_return(() => invoke($11, `load8_u`, [65519]), [value("i32", 4)]);


assert_return(() => invoke($11, `load8_u`, [65520]), [value("i32", 5)]);


assert_return(() => invoke($11, `load8_u`, [65521]), [value("i32", 6)]);


assert_return(() => invoke($11, `load8_u`, [65522]), [value("i32", 7)]);


assert_return(() => invoke($11, `load8_u`, [65523]), [value("i32", 8)]);


assert_return(() => invoke($11, `load8_u`, [65524]), [value("i32", 9)]);


assert_return(() => invoke($11, `load8_u`, [65525]), [value("i32", 10)]);


assert_return(() => invoke($11, `load8_u`, [65526]), [value("i32", 11)]);


assert_return(() => invoke($11, `load8_u`, [65527]), [value("i32", 12)]);


assert_return(() => invoke($11, `load8_u`, [65528]), [value("i32", 13)]);


assert_return(() => invoke($11, `load8_u`, [65529]), [value("i32", 14)]);


assert_return(() => invoke($11, `load8_u`, [65530]), [value("i32", 15)]);


assert_return(() => invoke($11, `load8_u`, [65531]), [value("i32", 16)]);


assert_return(() => invoke($11, `load8_u`, [65532]), [value("i32", 17)]);


assert_return(() => invoke($11, `load8_u`, [65533]), [value("i32", 18)]);


assert_return(() => invoke($11, `load8_u`, [65534]), [value("i32", 19)]);


assert_return(() => invoke($11, `load8_u`, [65535]), [value("i32", 20)]);


let $12 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65486) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($12, `run`, [65516, 65486, 40]), `out of bounds memory access`);


assert_return(() => invoke($12, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [65486]), [value("i32", 0)]);


assert_return(() => invoke($12, `load8_u`, [65487]), [value("i32", 1)]);


assert_return(() => invoke($12, `load8_u`, [65488]), [value("i32", 2)]);


assert_return(() => invoke($12, `load8_u`, [65489]), [value("i32", 3)]);


assert_return(() => invoke($12, `load8_u`, [65490]), [value("i32", 4)]);


assert_return(() => invoke($12, `load8_u`, [65491]), [value("i32", 5)]);


assert_return(() => invoke($12, `load8_u`, [65492]), [value("i32", 6)]);


assert_return(() => invoke($12, `load8_u`, [65493]), [value("i32", 7)]);


assert_return(() => invoke($12, `load8_u`, [65494]), [value("i32", 8)]);


assert_return(() => invoke($12, `load8_u`, [65495]), [value("i32", 9)]);


assert_return(() => invoke($12, `load8_u`, [65496]), [value("i32", 10)]);


assert_return(() => invoke($12, `load8_u`, [65497]), [value("i32", 11)]);


assert_return(() => invoke($12, `load8_u`, [65498]), [value("i32", 12)]);


assert_return(() => invoke($12, `load8_u`, [65499]), [value("i32", 13)]);


assert_return(() => invoke($12, `load8_u`, [65500]), [value("i32", 14)]);


assert_return(() => invoke($12, `load8_u`, [65501]), [value("i32", 15)]);


assert_return(() => invoke($12, `load8_u`, [65502]), [value("i32", 16)]);


assert_return(() => invoke($12, `load8_u`, [65503]), [value("i32", 17)]);


assert_return(() => invoke($12, `load8_u`, [65504]), [value("i32", 18)]);


assert_return(() => invoke($12, `load8_u`, [65505]), [value("i32", 19)]);


let $13 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65516) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($13, `run`, [65486, 65516, 40]), `out of bounds memory access`);


assert_return(() => invoke($13, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [65516]), [value("i32", 0)]);


assert_return(() => invoke($13, `load8_u`, [65517]), [value("i32", 1)]);


assert_return(() => invoke($13, `load8_u`, [65518]), [value("i32", 2)]);


assert_return(() => invoke($13, `load8_u`, [65519]), [value("i32", 3)]);


assert_return(() => invoke($13, `load8_u`, [65520]), [value("i32", 4)]);


assert_return(() => invoke($13, `load8_u`, [65521]), [value("i32", 5)]);


assert_return(() => invoke($13, `load8_u`, [65522]), [value("i32", 6)]);


assert_return(() => invoke($13, `load8_u`, [65523]), [value("i32", 7)]);


assert_return(() => invoke($13, `load8_u`, [65524]), [value("i32", 8)]);


assert_return(() => invoke($13, `load8_u`, [65525]), [value("i32", 9)]);


assert_return(() => invoke($13, `load8_u`, [65526]), [value("i32", 10)]);


assert_return(() => invoke($13, `load8_u`, [65527]), [value("i32", 11)]);


assert_return(() => invoke($13, `load8_u`, [65528]), [value("i32", 12)]);


assert_return(() => invoke($13, `load8_u`, [65529]), [value("i32", 13)]);


assert_return(() => invoke($13, `load8_u`, [65530]), [value("i32", 14)]);


assert_return(() => invoke($13, `load8_u`, [65531]), [value("i32", 15)]);


assert_return(() => invoke($13, `load8_u`, [65532]), [value("i32", 16)]);


assert_return(() => invoke($13, `load8_u`, [65533]), [value("i32", 17)]);


assert_return(() => invoke($13, `load8_u`, [65534]), [value("i32", 18)]);


assert_return(() => invoke($13, `load8_u`, [65535]), [value("i32", 19)]);


let $14 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65506) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($14, `run`, [65516, 65506, 40]), `out of bounds memory access`);


assert_return(() => invoke($14, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [65506]), [value("i32", 0)]);


assert_return(() => invoke($14, `load8_u`, [65507]), [value("i32", 1)]);


assert_return(() => invoke($14, `load8_u`, [65508]), [value("i32", 2)]);


assert_return(() => invoke($14, `load8_u`, [65509]), [value("i32", 3)]);


assert_return(() => invoke($14, `load8_u`, [65510]), [value("i32", 4)]);


assert_return(() => invoke($14, `load8_u`, [65511]), [value("i32", 5)]);


assert_return(() => invoke($14, `load8_u`, [65512]), [value("i32", 6)]);


assert_return(() => invoke($14, `load8_u`, [65513]), [value("i32", 7)]);


assert_return(() => invoke($14, `load8_u`, [65514]), [value("i32", 8)]);


assert_return(() => invoke($14, `load8_u`, [65515]), [value("i32", 9)]);


assert_return(() => invoke($14, `load8_u`, [65516]), [value("i32", 10)]);


assert_return(() => invoke($14, `load8_u`, [65517]), [value("i32", 11)]);


assert_return(() => invoke($14, `load8_u`, [65518]), [value("i32", 12)]);


assert_return(() => invoke($14, `load8_u`, [65519]), [value("i32", 13)]);


assert_return(() => invoke($14, `load8_u`, [65520]), [value("i32", 14)]);


assert_return(() => invoke($14, `load8_u`, [65521]), [value("i32", 15)]);


assert_return(() => invoke($14, `load8_u`, [65522]), [value("i32", 16)]);


assert_return(() => invoke($14, `load8_u`, [65523]), [value("i32", 17)]);


assert_return(() => invoke($14, `load8_u`, [65524]), [value("i32", 18)]);


assert_return(() => invoke($14, `load8_u`, [65525]), [value("i32", 19)]);


let $15 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65516) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($15, `run`, [65506, 65516, 40]), `out of bounds memory access`);


assert_return(() => invoke($15, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [65516]), [value("i32", 0)]);


assert_return(() => invoke($15, `load8_u`, [65517]), [value("i32", 1)]);


assert_return(() => invoke($15, `load8_u`, [65518]), [value("i32", 2)]);


assert_return(() => invoke($15, `load8_u`, [65519]), [value("i32", 3)]);


assert_return(() => invoke($15, `load8_u`, [65520]), [value("i32", 4)]);


assert_return(() => invoke($15, `load8_u`, [65521]), [value("i32", 5)]);


assert_return(() => invoke($15, `load8_u`, [65522]), [value("i32", 6)]);


assert_return(() => invoke($15, `load8_u`, [65523]), [value("i32", 7)]);


assert_return(() => invoke($15, `load8_u`, [65524]), [value("i32", 8)]);


assert_return(() => invoke($15, `load8_u`, [65525]), [value("i32", 9)]);


assert_return(() => invoke($15, `load8_u`, [65526]), [value("i32", 10)]);


assert_return(() => invoke($15, `load8_u`, [65527]), [value("i32", 11)]);


assert_return(() => invoke($15, `load8_u`, [65528]), [value("i32", 12)]);


assert_return(() => invoke($15, `load8_u`, [65529]), [value("i32", 13)]);


assert_return(() => invoke($15, `load8_u`, [65530]), [value("i32", 14)]);


assert_return(() => invoke($15, `load8_u`, [65531]), [value("i32", 15)]);


assert_return(() => invoke($15, `load8_u`, [65532]), [value("i32", 16)]);


assert_return(() => invoke($15, `load8_u`, [65533]), [value("i32", 17)]);


assert_return(() => invoke($15, `load8_u`, [65534]), [value("i32", 18)]);


assert_return(() => invoke($15, `load8_u`, [65535]), [value("i32", 19)]);


let $16 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 65516) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($16, `run`, [65516, 65516, 40]), `out of bounds memory access`);


assert_return(() => invoke($16, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [65516]), [value("i32", 0)]);


assert_return(() => invoke($16, `load8_u`, [65517]), [value("i32", 1)]);


assert_return(() => invoke($16, `load8_u`, [65518]), [value("i32", 2)]);


assert_return(() => invoke($16, `load8_u`, [65519]), [value("i32", 3)]);


assert_return(() => invoke($16, `load8_u`, [65520]), [value("i32", 4)]);


assert_return(() => invoke($16, `load8_u`, [65521]), [value("i32", 5)]);


assert_return(() => invoke($16, `load8_u`, [65522]), [value("i32", 6)]);


assert_return(() => invoke($16, `load8_u`, [65523]), [value("i32", 7)]);


assert_return(() => invoke($16, `load8_u`, [65524]), [value("i32", 8)]);


assert_return(() => invoke($16, `load8_u`, [65525]), [value("i32", 9)]);


assert_return(() => invoke($16, `load8_u`, [65526]), [value("i32", 10)]);


assert_return(() => invoke($16, `load8_u`, [65527]), [value("i32", 11)]);


assert_return(() => invoke($16, `load8_u`, [65528]), [value("i32", 12)]);


assert_return(() => invoke($16, `load8_u`, [65529]), [value("i32", 13)]);


assert_return(() => invoke($16, `load8_u`, [65530]), [value("i32", 14)]);


assert_return(() => invoke($16, `load8_u`, [65531]), [value("i32", 15)]);


assert_return(() => invoke($16, `load8_u`, [65532]), [value("i32", 16)]);


assert_return(() => invoke($16, `load8_u`, [65533]), [value("i32", 17)]);


assert_return(() => invoke($16, `load8_u`, [65534]), [value("i32", 18)]);


assert_return(() => invoke($16, `load8_u`, [65535]), [value("i32", 19)]);


let $17 = instantiate(`(module
  (memory (export "mem") 1  )
  (data (i32.const 65516) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($17, `run`, [0, 65516, -4096]), `out of bounds memory access`);


assert_return(() => invoke($17, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [61490]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [61689]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [61888]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [62087]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [62286]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [62485]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [62684]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [62883]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [63082]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [63281]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [63480]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [63679]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [63878]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [64077]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [64276]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [64475]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [64674]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [64873]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [65072]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [65271]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [65470]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [65516]), [value("i32", 0)]);


assert_return(() => invoke($17, `load8_u`, [65517]), [value("i32", 1)]);


assert_return(() => invoke($17, `load8_u`, [65518]), [value("i32", 2)]);


assert_return(() => invoke($17, `load8_u`, [65519]), [value("i32", 3)]);


assert_return(() => invoke($17, `load8_u`, [65520]), [value("i32", 4)]);


assert_return(() => invoke($17, `load8_u`, [65521]), [value("i32", 5)]);


assert_return(() => invoke($17, `load8_u`, [65522]), [value("i32", 6)]);


assert_return(() => invoke($17, `load8_u`, [65523]), [value("i32", 7)]);


assert_return(() => invoke($17, `load8_u`, [65524]), [value("i32", 8)]);


assert_return(() => invoke($17, `load8_u`, [65525]), [value("i32", 9)]);


assert_return(() => invoke($17, `load8_u`, [65526]), [value("i32", 10)]);


assert_return(() => invoke($17, `load8_u`, [65527]), [value("i32", 11)]);


assert_return(() => invoke($17, `load8_u`, [65528]), [value("i32", 12)]);


assert_return(() => invoke($17, `load8_u`, [65529]), [value("i32", 13)]);


assert_return(() => invoke($17, `load8_u`, [65530]), [value("i32", 14)]);


assert_return(() => invoke($17, `load8_u`, [65531]), [value("i32", 15)]);


assert_return(() => invoke($17, `load8_u`, [65532]), [value("i32", 16)]);


assert_return(() => invoke($17, `load8_u`, [65533]), [value("i32", 17)]);


assert_return(() => invoke($17, `load8_u`, [65534]), [value("i32", 18)]);


assert_return(() => invoke($17, `load8_u`, [65535]), [value("i32", 19)]);


let $18 = instantiate(`(module
  (memory (export "mem") 1 1 )
  (data (i32.const 61440) "\\00\\01\\02\\03\\04\\05\\06\\07\\08\\09\\0a\\0b\\0c\\0d\\0e\\0f\\10\\11\\12\\13")
  (func (export "run") (param $$targetOffs i32) (param $$srcOffs i32) (param $$len i32)
    (memory.copy (local.get $$targetOffs) (local.get $$srcOffs) (local.get $$len)))
  (func (export "load8_u") (param i32) (result i32)
    (i32.load8_u (local.get 0))))`);


assert_trap(() => invoke($18, `run`, [65516, 61440, -256]), `out of bounds memory access`);


assert_return(() => invoke($18, `load8_u`, [198]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [397]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [596]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [795]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [994]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [1193]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [1392]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [1591]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [1790]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [1989]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [2188]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [2387]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [2586]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [2785]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [2984]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [3183]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [3382]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [3581]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [3780]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [3979]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [4178]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [4377]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [4576]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [4775]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [4974]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [5173]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [5372]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [5571]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [5770]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [5969]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [6168]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [6367]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [6566]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [6765]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [6964]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [7163]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [7362]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [7561]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [7760]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [7959]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [8158]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [8357]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [8556]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [8755]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [8954]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [9153]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [9352]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [9551]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [9750]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [9949]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [10148]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [10347]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [10546]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [10745]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [10944]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [11143]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [11342]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [11541]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [11740]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [11939]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [12138]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [12337]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [12536]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [12735]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [12934]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [13133]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [13332]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [13531]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [13730]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [13929]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [14128]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [14327]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [14526]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [14725]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [14924]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [15123]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [15322]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [15521]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [15720]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [15919]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [16118]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [16317]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [16516]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [16715]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [16914]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [17113]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [17312]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [17511]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [17710]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [17909]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [18108]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [18307]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [18506]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [18705]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [18904]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [19103]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [19302]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [19501]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [19700]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [19899]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [20098]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [20297]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [20496]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [20695]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [20894]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [21093]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [21292]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [21491]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [21690]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [21889]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [22088]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [22287]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [22486]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [22685]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [22884]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [23083]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [23282]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [23481]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [23680]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [23879]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [24078]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [24277]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [24476]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [24675]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [24874]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [25073]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [25272]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [25471]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [25670]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [25869]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [26068]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [26267]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [26466]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [26665]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [26864]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [27063]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [27262]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [27461]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [27660]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [27859]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [28058]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [28257]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [28456]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [28655]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [28854]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [29053]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [29252]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [29451]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [29650]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [29849]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [30048]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [30247]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [30446]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [30645]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [30844]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [31043]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [31242]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [31441]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [31640]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [31839]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [32038]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [32237]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [32436]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [32635]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [32834]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [33033]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [33232]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [33431]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [33630]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [33829]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [34028]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [34227]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [34426]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [34625]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [34824]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [35023]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [35222]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [35421]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [35620]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [35819]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [36018]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [36217]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [36416]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [36615]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [36814]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [37013]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [37212]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [37411]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [37610]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [37809]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [38008]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [38207]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [38406]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [38605]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [38804]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39003]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39202]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39401]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39600]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39799]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [39998]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [40197]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [40396]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [40595]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [40794]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [40993]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [41192]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [41391]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [41590]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [41789]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [41988]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [42187]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [42386]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [42585]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [42784]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [42983]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [43182]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [43381]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [43580]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [43779]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [43978]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [44177]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [44376]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [44575]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [44774]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [44973]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [45172]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [45371]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [45570]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [45769]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [45968]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [46167]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [46366]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [46565]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [46764]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [46963]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [47162]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [47361]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [47560]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [47759]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [47958]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [48157]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [48356]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [48555]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [48754]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [48953]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [49152]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [49351]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [49550]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [49749]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [49948]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [50147]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [50346]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [50545]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [50744]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [50943]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [51142]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [51341]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [51540]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [51739]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [51938]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [52137]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [52336]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [52535]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [52734]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [52933]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [53132]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [53331]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [53530]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [53729]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [53928]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [54127]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [54326]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [54525]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [54724]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [54923]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [55122]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [55321]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [55520]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [55719]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [55918]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [56117]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [56316]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [56515]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [56714]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [56913]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [57112]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [57311]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [57510]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [57709]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [57908]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [58107]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [58306]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [58505]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [58704]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [58903]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [59102]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [59301]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [59500]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [59699]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [59898]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [60097]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [60296]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [60495]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [60694]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [60893]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61092]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61291]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61440]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61441]), [value("i32", 1)]);


assert_return(() => invoke($18, `load8_u`, [61442]), [value("i32", 2)]);


assert_return(() => invoke($18, `load8_u`, [61443]), [value("i32", 3)]);


assert_return(() => invoke($18, `load8_u`, [61444]), [value("i32", 4)]);


assert_return(() => invoke($18, `load8_u`, [61445]), [value("i32", 5)]);


assert_return(() => invoke($18, `load8_u`, [61446]), [value("i32", 6)]);


assert_return(() => invoke($18, `load8_u`, [61447]), [value("i32", 7)]);


assert_return(() => invoke($18, `load8_u`, [61448]), [value("i32", 8)]);


assert_return(() => invoke($18, `load8_u`, [61449]), [value("i32", 9)]);


assert_return(() => invoke($18, `load8_u`, [61450]), [value("i32", 10)]);


assert_return(() => invoke($18, `load8_u`, [61451]), [value("i32", 11)]);


assert_return(() => invoke($18, `load8_u`, [61452]), [value("i32", 12)]);


assert_return(() => invoke($18, `load8_u`, [61453]), [value("i32", 13)]);


assert_return(() => invoke($18, `load8_u`, [61454]), [value("i32", 14)]);


assert_return(() => invoke($18, `load8_u`, [61455]), [value("i32", 15)]);


assert_return(() => invoke($18, `load8_u`, [61456]), [value("i32", 16)]);


assert_return(() => invoke($18, `load8_u`, [61457]), [value("i32", 17)]);


assert_return(() => invoke($18, `load8_u`, [61458]), [value("i32", 18)]);


assert_return(() => invoke($18, `load8_u`, [61459]), [value("i32", 19)]);


assert_return(() => invoke($18, `load8_u`, [61510]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61709]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [61908]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [62107]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [62306]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [62505]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [62704]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [62903]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [63102]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [63301]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [63500]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [63699]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [63898]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [64097]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [64296]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [64495]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [64694]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [64893]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [65092]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [65291]), [value("i32", 0)]);


assert_return(() => invoke($18, `load8_u`, [65490]), [value("i32", 0)]);


assert_invalid(
  () => instantiate(`(module
    (func (export "testfn")
      (memory.copy (i32.const 10) (i32.const 20) (i32.const 30))))`),
  `unknown memory 0`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i32.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f32.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (i64.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f32.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f32.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f32.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f32.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (i64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f64.const 20) (i32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f64.const 20) (f32.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f64.const 20) (i64.const 30))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1 1)
    (func (export "testfn")
      (memory.copy (f64.const 10) (f64.const 20) (f64.const 30))))`),
  `type mismatch`,
);


let $19 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.fill (i32.const 10) (i32.const 0x55) (i32.const 10))
    (memory.copy (i32.const 9) (i32.const 10) (i32.const 5)))
  
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
)`);


invoke($19, `test`, []);


assert_return(() => invoke($19, `checkRange`, [0, 9, 0]), [value("i32", -1)]);


assert_return(() => invoke($19, `checkRange`, [9, 20, 85]), [value("i32", -1)]);


assert_return(() => invoke($19, `checkRange`, [20, 65536, 0]), [value("i32", -1)]);


let $20 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.fill (i32.const 10) (i32.const 0x55) (i32.const 10))
    (memory.copy (i32.const 16) (i32.const 15) (i32.const 5)))
  
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
)`);


invoke($20, `test`, []);


assert_return(() => invoke($20, `checkRange`, [0, 10, 0]), [value("i32", -1)]);


assert_return(() => invoke($20, `checkRange`, [10, 21, 85]), [value("i32", -1)]);


assert_return(() => invoke($20, `checkRange`, [21, 65536, 0]), [value("i32", -1)]);


let $21 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0xFF00) (i32.const 0x8000) (i32.const 257))))`);


assert_trap(() => invoke($21, `test`, []), `out of bounds memory access`);


let $22 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0xFFFFFF00) (i32.const 0x4000) (i32.const 257))))`);


assert_trap(() => invoke($22, `test`, []), `out of bounds memory access`);


let $23 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x8000) (i32.const 0xFF00) (i32.const 257))))`);


assert_trap(() => invoke($23, `test`, []), `out of bounds memory access`);


let $24 = instantiate(`(module
 (memory 1 1)
 (func (export "test")
   (memory.copy (i32.const 0x4000) (i32.const 0xFFFFFF00) (i32.const 257))))`);


assert_trap(() => invoke($24, `test`, []), `out of bounds memory access`);


let $25 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.fill (i32.const 0x0000) (i32.const 0x55) (i32.const 0x8000))
    (memory.fill (i32.const 0x8000) (i32.const 0xAA) (i32.const 0x8000))
    (memory.copy (i32.const 0x9000) (i32.const 0x7000) (i32.const 0)))
  
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
)`);


invoke($25, `test`, []);


assert_return(() => invoke($25, `checkRange`, [0, 32768, 85]), [value("i32", -1)]);


assert_return(() => invoke($25, `checkRange`, [32768, 65536, 170]), [value("i32", -1)]);


let $26 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x10000) (i32.const 0x7000) (i32.const 0))))`);


invoke($26, `test`, []);


let $27 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x20000) (i32.const 0x7000) (i32.const 0))))`);


assert_trap(() => invoke($27, `test`, []), `out of bounds memory access`);


let $28 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x9000) (i32.const 0x10000) (i32.const 0))))`);


invoke($28, `test`, []);


let $29 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x9000) (i32.const 0x20000) (i32.const 0))))`);


assert_trap(() => invoke($29, `test`, []), `out of bounds memory access`);


let $30 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x10000) (i32.const 0x10000) (i32.const 0))))`);


invoke($30, `test`, []);


let $31 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.copy (i32.const 0x20000) (i32.const 0x20000) (i32.const 0))))`);


assert_trap(() => invoke($31, `test`, []), `out of bounds memory access`);


let $32 = instantiate(`(module
  (memory 1 1)
  (func (export "test")
    (memory.fill (i32.const 17767) (i32.const 1) (i32.const 1344))
    (memory.fill (i32.const 39017) (i32.const 2) (i32.const 1055))
    (memory.fill (i32.const 56401) (i32.const 3) (i32.const 988))
    (memory.fill (i32.const 37962) (i32.const 4) (i32.const 322))
    (memory.fill (i32.const 7977) (i32.const 5) (i32.const 1994))
    (memory.fill (i32.const 22714) (i32.const 6) (i32.const 3036))
    (memory.fill (i32.const 16882) (i32.const 7) (i32.const 2372))
    (memory.fill (i32.const 43491) (i32.const 8) (i32.const 835))
    (memory.fill (i32.const 124) (i32.const 9) (i32.const 1393))
    (memory.fill (i32.const 2132) (i32.const 10) (i32.const 2758))
    (memory.fill (i32.const 8987) (i32.const 11) (i32.const 3098))
    (memory.fill (i32.const 52711) (i32.const 12) (i32.const 741))
    (memory.fill (i32.const 3958) (i32.const 13) (i32.const 2823))
    (memory.fill (i32.const 49715) (i32.const 14) (i32.const 1280))
    (memory.fill (i32.const 50377) (i32.const 15) (i32.const 1466))
    (memory.fill (i32.const 20493) (i32.const 16) (i32.const 3158))
    (memory.fill (i32.const 47665) (i32.const 17) (i32.const 544))
    (memory.fill (i32.const 12451) (i32.const 18) (i32.const 2669))
    (memory.fill (i32.const 24869) (i32.const 19) (i32.const 2651))
    (memory.fill (i32.const 45317) (i32.const 20) (i32.const 1570))
    (memory.fill (i32.const 43096) (i32.const 21) (i32.const 1691))
    (memory.fill (i32.const 33886) (i32.const 22) (i32.const 646))
    (memory.fill (i32.const 48555) (i32.const 23) (i32.const 1858))
    (memory.fill (i32.const 53453) (i32.const 24) (i32.const 2657))
    (memory.fill (i32.const 30363) (i32.const 25) (i32.const 981))
    (memory.fill (i32.const 9300) (i32.const 26) (i32.const 1807))
    (memory.fill (i32.const 50190) (i32.const 27) (i32.const 487))
    (memory.fill (i32.const 62753) (i32.const 28) (i32.const 530))
    (memory.fill (i32.const 36316) (i32.const 29) (i32.const 943))
    (memory.fill (i32.const 6768) (i32.const 30) (i32.const 381))
    (memory.fill (i32.const 51262) (i32.const 31) (i32.const 3089))
    (memory.fill (i32.const 49729) (i32.const 32) (i32.const 658))
    (memory.fill (i32.const 44540) (i32.const 33) (i32.const 1702))
    (memory.fill (i32.const 33342) (i32.const 34) (i32.const 1092))
    (memory.fill (i32.const 50814) (i32.const 35) (i32.const 1410))
    (memory.fill (i32.const 47594) (i32.const 36) (i32.const 2204))
    (memory.fill (i32.const 54123) (i32.const 37) (i32.const 2394))
    (memory.fill (i32.const 55183) (i32.const 38) (i32.const 250))
    (memory.fill (i32.const 22620) (i32.const 39) (i32.const 2097))
    (memory.fill (i32.const 17132) (i32.const 40) (i32.const 3264))
    (memory.fill (i32.const 54331) (i32.const 41) (i32.const 3299))
    (memory.fill (i32.const 39474) (i32.const 42) (i32.const 2796))
    (memory.fill (i32.const 36156) (i32.const 43) (i32.const 2070))
    (memory.fill (i32.const 35308) (i32.const 44) (i32.const 2763))
    (memory.fill (i32.const 32731) (i32.const 45) (i32.const 312))
    (memory.fill (i32.const 63746) (i32.const 46) (i32.const 192))
    (memory.fill (i32.const 30974) (i32.const 47) (i32.const 596))
    (memory.fill (i32.const 16635) (i32.const 48) (i32.const 501))
    (memory.fill (i32.const 57002) (i32.const 49) (i32.const 686))
    (memory.fill (i32.const 34299) (i32.const 50) (i32.const 385))
    (memory.fill (i32.const 60881) (i32.const 51) (i32.const 903))
    (memory.fill (i32.const 61445) (i32.const 52) (i32.const 2390))
    (memory.fill (i32.const 46972) (i32.const 53) (i32.const 1441))
    (memory.fill (i32.const 25973) (i32.const 54) (i32.const 3162))
    (memory.fill (i32.const 5566) (i32.const 55) (i32.const 2135))
    (memory.fill (i32.const 35977) (i32.const 56) (i32.const 519))
    (memory.fill (i32.const 44892) (i32.const 57) (i32.const 3280))
    (memory.fill (i32.const 46760) (i32.const 58) (i32.const 1678))
    (memory.fill (i32.const 46607) (i32.const 59) (i32.const 3168))
    (memory.fill (i32.const 22449) (i32.const 60) (i32.const 1441))
    (memory.fill (i32.const 58609) (i32.const 61) (i32.const 663))
    (memory.fill (i32.const 32261) (i32.const 62) (i32.const 1671))
    (memory.fill (i32.const 3063) (i32.const 63) (i32.const 721))
    (memory.fill (i32.const 34025) (i32.const 64) (i32.const 84))
    (memory.fill (i32.const 33338) (i32.const 65) (i32.const 2029))
    (memory.fill (i32.const 36810) (i32.const 66) (i32.const 29))
    (memory.fill (i32.const 19147) (i32.const 67) (i32.const 3034))
    (memory.fill (i32.const 12616) (i32.const 68) (i32.const 1043))
    (memory.fill (i32.const 18276) (i32.const 69) (i32.const 3324))
    (memory.fill (i32.const 4639) (i32.const 70) (i32.const 1091))
    (memory.fill (i32.const 16158) (i32.const 71) (i32.const 1997))
    (memory.fill (i32.const 18204) (i32.const 72) (i32.const 2259))
    (memory.fill (i32.const 50532) (i32.const 73) (i32.const 3189))
    (memory.fill (i32.const 11028) (i32.const 74) (i32.const 1968))
    (memory.fill (i32.const 15962) (i32.const 75) (i32.const 1455))
    (memory.fill (i32.const 45406) (i32.const 76) (i32.const 1177))
    (memory.fill (i32.const 54137) (i32.const 77) (i32.const 1568))
    (memory.fill (i32.const 33083) (i32.const 78) (i32.const 1642))
    (memory.fill (i32.const 61028) (i32.const 79) (i32.const 3284))
    (memory.fill (i32.const 51729) (i32.const 80) (i32.const 223))
    (memory.fill (i32.const 4361) (i32.const 81) (i32.const 2171))
    (memory.fill (i32.const 57514) (i32.const 82) (i32.const 1322))
    (memory.fill (i32.const 55724) (i32.const 83) (i32.const 2648))
    (memory.fill (i32.const 24091) (i32.const 84) (i32.const 1045))
    (memory.fill (i32.const 43183) (i32.const 85) (i32.const 3097))
    (memory.fill (i32.const 32307) (i32.const 86) (i32.const 2796))
    (memory.fill (i32.const 3811) (i32.const 87) (i32.const 2010))
    (memory.fill (i32.const 54856) (i32.const 88) (i32.const 0))
    (memory.fill (i32.const 49941) (i32.const 89) (i32.const 2069))
    (memory.fill (i32.const 20411) (i32.const 90) (i32.const 2896))
    (memory.fill (i32.const 33826) (i32.const 91) (i32.const 192))
    (memory.fill (i32.const 9402) (i32.const 92) (i32.const 2195))
    (memory.fill (i32.const 12413) (i32.const 93) (i32.const 24))
    (memory.fill (i32.const 14091) (i32.const 94) (i32.const 577))
    (memory.fill (i32.const 44058) (i32.const 95) (i32.const 2089))
    (memory.fill (i32.const 36735) (i32.const 96) (i32.const 3436))
    (memory.fill (i32.const 23288) (i32.const 97) (i32.const 2765))
    (memory.fill (i32.const 6392) (i32.const 98) (i32.const 830))
    (memory.fill (i32.const 33307) (i32.const 99) (i32.const 1938))
    (memory.fill (i32.const 21941) (i32.const 100) (i32.const 2750))
    (memory.copy (i32.const 59214) (i32.const 54248) (i32.const 2098))
    (memory.copy (i32.const 63026) (i32.const 39224) (i32.const 230))
    (memory.copy (i32.const 51833) (i32.const 23629) (i32.const 2300))
    (memory.copy (i32.const 6708) (i32.const 23996) (i32.const 639))
    (memory.copy (i32.const 6990) (i32.const 33399) (i32.const 1097))
    (memory.copy (i32.const 19403) (i32.const 10348) (i32.const 3197))
    (memory.copy (i32.const 27308) (i32.const 54406) (i32.const 100))
    (memory.copy (i32.const 27221) (i32.const 43682) (i32.const 1717))
    (memory.copy (i32.const 60528) (i32.const 8629) (i32.const 119))
    (memory.copy (i32.const 5947) (i32.const 2308) (i32.const 658))
    (memory.copy (i32.const 4787) (i32.const 51631) (i32.const 2269))
    (memory.copy (i32.const 12617) (i32.const 19197) (i32.const 833))
    (memory.copy (i32.const 11854) (i32.const 46505) (i32.const 3300))
    (memory.copy (i32.const 11376) (i32.const 45012) (i32.const 2281))
    (memory.copy (i32.const 34186) (i32.const 6697) (i32.const 2572))
    (memory.copy (i32.const 4936) (i32.const 1690) (i32.const 1328))
    (memory.copy (i32.const 63164) (i32.const 7637) (i32.const 1670))
    (memory.copy (i32.const 44568) (i32.const 18344) (i32.const 33))
    (memory.copy (i32.const 43918) (i32.const 22348) (i32.const 1427))
    (memory.copy (i32.const 46637) (i32.const 49819) (i32.const 1434))
    (memory.copy (i32.const 63684) (i32.const 8755) (i32.const 834))
    (memory.copy (i32.const 33485) (i32.const 20131) (i32.const 3317))
    (memory.copy (i32.const 40575) (i32.const 54317) (i32.const 3201))
    (memory.copy (i32.const 25812) (i32.const 59254) (i32.const 2452))
    (memory.copy (i32.const 19678) (i32.const 56882) (i32.const 346))
    (memory.copy (i32.const 15852) (i32.const 35914) (i32.const 2430))
    (memory.copy (i32.const 11824) (i32.const 35574) (i32.const 300))
    (memory.copy (i32.const 59427) (i32.const 13957) (i32.const 3153))
    (memory.copy (i32.const 34299) (i32.const 60594) (i32.const 1281))
    (memory.copy (i32.const 8964) (i32.const 12276) (i32.const 943))
    (memory.copy (i32.const 2827) (i32.const 10425) (i32.const 1887))
    (memory.copy (i32.const 43194) (i32.const 43910) (i32.const 738))
    (memory.copy (i32.const 63038) (i32.const 18949) (i32.const 122))
    (memory.copy (i32.const 24044) (i32.const 44761) (i32.const 1755))
    (memory.copy (i32.const 22608) (i32.const 14755) (i32.const 702))
    (memory.copy (i32.const 11284) (i32.const 26579) (i32.const 1830))
    (memory.copy (i32.const 23092) (i32.const 20471) (i32.const 1064))
    (memory.copy (i32.const 57248) (i32.const 54770) (i32.const 2631))
    (memory.copy (i32.const 25492) (i32.const 1025) (i32.const 3113))
    (memory.copy (i32.const 49588) (i32.const 44220) (i32.const 975))
    (memory.copy (i32.const 28280) (i32.const 41722) (i32.const 2336))
    (memory.copy (i32.const 61289) (i32.const 230) (i32.const 2872))
    (memory.copy (i32.const 22480) (i32.const 52506) (i32.const 2197))
    (memory.copy (i32.const 40553) (i32.const 9578) (i32.const 1958))
    (memory.copy (i32.const 29004) (i32.const 20862) (i32.const 2186))
    (memory.copy (i32.const 53029) (i32.const 43955) (i32.const 1037))
    (memory.copy (i32.const 25476) (i32.const 35667) (i32.const 1650))
    (memory.copy (i32.const 58516) (i32.const 45819) (i32.const 1986))
    (memory.copy (i32.const 38297) (i32.const 5776) (i32.const 1955))
    (memory.copy (i32.const 28503) (i32.const 55364) (i32.const 2368))
    (memory.copy (i32.const 62619) (i32.const 18108) (i32.const 1356))
    (memory.copy (i32.const 50149) (i32.const 13861) (i32.const 382))
    (memory.copy (i32.const 16904) (i32.const 36341) (i32.const 1900))
    (memory.copy (i32.const 48098) (i32.const 11358) (i32.const 2807))
    (memory.copy (i32.const 28512) (i32.const 40362) (i32.const 323))
    (memory.copy (i32.const 35506) (i32.const 27856) (i32.const 1670))
    (memory.copy (i32.const 62970) (i32.const 53332) (i32.const 1341))
    (memory.copy (i32.const 14133) (i32.const 46312) (i32.const 644))
    (memory.copy (i32.const 29030) (i32.const 19074) (i32.const 496))
    (memory.copy (i32.const 44952) (i32.const 47577) (i32.const 2784))
    (memory.copy (i32.const 39559) (i32.const 44661) (i32.const 1350))
    (memory.copy (i32.const 10352) (i32.const 29274) (i32.const 1475))
    (memory.copy (i32.const 46911) (i32.const 46178) (i32.const 1467))
    (memory.copy (i32.const 4905) (i32.const 28740) (i32.const 1895))
    (memory.copy (i32.const 38012) (i32.const 57253) (i32.const 1751))
    (memory.copy (i32.const 26446) (i32.const 27223) (i32.const 1127))
    (memory.copy (i32.const 58835) (i32.const 24657) (i32.const 1063))
    (memory.copy (i32.const 61356) (i32.const 38790) (i32.const 766))
    (memory.copy (i32.const 44160) (i32.const 2284) (i32.const 1520))
    (memory.copy (i32.const 32740) (i32.const 47237) (i32.const 3014))
    (memory.copy (i32.const 11148) (i32.const 21260) (i32.const 1011))
    (memory.copy (i32.const 7665) (i32.const 31612) (i32.const 3034))
    (memory.copy (i32.const 18044) (i32.const 12987) (i32.const 3320))
    (memory.copy (i32.const 57306) (i32.const 55905) (i32.const 308))
    (memory.copy (i32.const 24675) (i32.const 16815) (i32.const 1155))
    (memory.copy (i32.const 19900) (i32.const 10115) (i32.const 722))
    (memory.copy (i32.const 2921) (i32.const 5935) (i32.const 2370))
    (memory.copy (i32.const 32255) (i32.const 50095) (i32.const 2926))
    (memory.copy (i32.const 15126) (i32.const 17299) (i32.const 2607))
    (memory.copy (i32.const 45575) (i32.const 28447) (i32.const 2045))
    (memory.copy (i32.const 55149) (i32.const 36113) (i32.const 2596))
    (memory.copy (i32.const 28461) (i32.const 54157) (i32.const 1168))
    (memory.copy (i32.const 47951) (i32.const 53385) (i32.const 3137))
    (memory.copy (i32.const 30646) (i32.const 45155) (i32.const 2649))
    (memory.copy (i32.const 5057) (i32.const 4295) (i32.const 52))
    (memory.copy (i32.const 6692) (i32.const 24195) (i32.const 441))
    (memory.copy (i32.const 32984) (i32.const 27117) (i32.const 3445))
    (memory.copy (i32.const 32530) (i32.const 59372) (i32.const 2785))
    (memory.copy (i32.const 34361) (i32.const 8962) (i32.const 2406))
    (memory.copy (i32.const 17893) (i32.const 54538) (i32.const 3381))
    (memory.copy (i32.const 22685) (i32.const 44151) (i32.const 136))
    (memory.copy (i32.const 59089) (i32.const 7077) (i32.const 1045))
    (memory.copy (i32.const 42945) (i32.const 55028) (i32.const 2389))
    (memory.copy (i32.const 44693) (i32.const 20138) (i32.const 877))
    (memory.copy (i32.const 36810) (i32.const 25196) (i32.const 3447))
    (memory.copy (i32.const 45742) (i32.const 31888) (i32.const 854))
    (memory.copy (i32.const 24236) (i32.const 31866) (i32.const 1377))
    (memory.copy (i32.const 33778) (i32.const 692) (i32.const 1594))
    (memory.copy (i32.const 60618) (i32.const 18585) (i32.const 2987))
    (memory.copy (i32.const 50370) (i32.const 41271) (i32.const 1406))
  )
  
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
)`);


invoke($32, `test`, []);


assert_return(() => invoke($32, `checkRange`, [0, 124, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [124, 1517, 9]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [1517, 2132, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [2132, 2827, 10]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [2827, 2921, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [2921, 3538, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [3538, 3786, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [3786, 4042, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [4042, 4651, 99]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [4651, 5057, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [5057, 5109, 99]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [5109, 5291, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [5291, 5524, 72]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [5524, 5691, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [5691, 6552, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [6552, 7133, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [7133, 7665, 99]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [7665, 8314, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [8314, 8360, 62]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [8360, 8793, 86]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [8793, 8979, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [8979, 9373, 79]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [9373, 9518, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [9518, 9934, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [9934, 10087, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [10087, 10206, 5]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [10206, 10230, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [10230, 10249, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [10249, 11148, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [11148, 11356, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [11356, 11380, 93]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [11380, 11939, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [11939, 12159, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [12159, 12575, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [12575, 12969, 79]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [12969, 13114, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [13114, 14133, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14133, 14404, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14404, 14428, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14428, 14458, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14458, 14580, 32]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14580, 14777, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [14777, 15124, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [15124, 15126, 36]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [15126, 15192, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [15192, 15871, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [15871, 15998, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [15998, 17017, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17017, 17288, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17288, 17312, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17312, 17342, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17342, 17464, 32]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17464, 17661, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17661, 17727, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17727, 17733, 5]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17733, 17893, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [17893, 18553, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18553, 18744, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18744, 18801, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18801, 18825, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18825, 18876, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18876, 18885, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18885, 18904, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [18904, 19567, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [19567, 20403, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [20403, 21274, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [21274, 21364, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [21364, 21468, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [21468, 21492, 93]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [21492, 22051, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22051, 22480, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22480, 22685, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22685, 22694, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22694, 22821, 10]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22821, 22869, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [22869, 24107, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24107, 24111, 37]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24111, 24236, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24236, 24348, 72]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24348, 24515, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24515, 24900, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [24900, 25136, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [25136, 25182, 85]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [25182, 25426, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [25426, 25613, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [25613, 25830, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [25830, 26446, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [26446, 26517, 10]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [26517, 27468, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [27468, 27503, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [27503, 27573, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [27573, 28245, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [28245, 28280, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [28280, 29502, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [29502, 29629, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [29629, 30387, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [30387, 30646, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [30646, 31066, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31066, 31131, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31131, 31322, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31322, 31379, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31379, 31403, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31403, 31454, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31454, 31463, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31463, 31482, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31482, 31649, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31649, 31978, 72]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [31978, 32145, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [32145, 32530, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [32530, 32766, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [32766, 32812, 85]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [32812, 33056, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [33056, 33660, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [33660, 33752, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [33752, 33775, 36]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [33775, 33778, 32]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [33778, 34603, 9]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [34603, 35218, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35218, 35372, 10]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35372, 35486, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35486, 35605, 5]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35605, 35629, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35629, 35648, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [35648, 36547, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [36547, 36755, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [36755, 36767, 93]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [36767, 36810, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [36810, 36839, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [36839, 37444, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [37444, 38060, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [38060, 38131, 10]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [38131, 39082, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [39082, 39117, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [39117, 39187, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [39187, 39859, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [39859, 39894, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [39894, 40257, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [40257, 40344, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [40344, 40371, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [40371, 40804, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [40804, 40909, 5]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [40909, 42259, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [42259, 42511, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [42511, 42945, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [42945, 43115, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43115, 43306, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43306, 43363, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43363, 43387, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43387, 43438, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43438, 43447, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43447, 43466, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [43466, 44129, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [44129, 44958, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [44958, 45570, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45570, 45575, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45575, 45640, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45640, 45742, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45742, 45832, 72]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45832, 45999, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [45999, 46384, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [46384, 46596, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [46596, 46654, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [46654, 47515, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [47515, 47620, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [47620, 47817, 79]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [47817, 47951, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [47951, 48632, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [48632, 48699, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [48699, 48703, 37]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [48703, 49764, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [49764, 49955, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [49955, 50012, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50012, 50036, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50036, 50087, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50087, 50096, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50096, 50115, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50115, 50370, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [50370, 51358, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [51358, 51610, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [51610, 51776, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [51776, 51833, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [51833, 52895, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [52895, 53029, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [53029, 53244, 68]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [53244, 54066, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [54066, 54133, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [54133, 54137, 37]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [54137, 55198, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55198, 55389, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55389, 55446, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55446, 55470, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55470, 55521, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55521, 55530, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55530, 55549, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [55549, 56212, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [56212, 57048, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [57048, 58183, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [58183, 58202, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [58202, 58516, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [58516, 58835, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [58835, 58855, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [58855, 59089, 95]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [59089, 59145, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [59145, 59677, 99]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [59677, 60134, 0]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60134, 60502, 89]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60502, 60594, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60594, 60617, 36]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60617, 60618, 32]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60618, 60777, 42]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60777, 60834, 76]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60834, 60858, 57]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60858, 60909, 59]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60909, 60918, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60918, 60937, 41]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [60937, 61600, 83]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [61600, 62436, 96]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [62436, 63307, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63307, 63397, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63397, 63501, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63501, 63525, 93]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63525, 63605, 74]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63605, 63704, 100]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63704, 63771, 97]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63771, 63775, 37]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [63775, 64311, 77]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [64311, 64331, 26]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [64331, 64518, 92]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [64518, 64827, 11]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [64827, 64834, 26]), [value("i32", -1)]);


assert_return(() => invoke($32, `checkRange`, [64834, 65536, 0]), [value("i32", -1)]);
