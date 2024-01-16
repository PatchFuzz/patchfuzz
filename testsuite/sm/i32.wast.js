




let $0 = instantiate(`(module
  (func (export "add") (param $$x i32) (param $$y i32) (result i32) (i32.add (local.get $$x) (local.get $$y)))
  (func (export "sub") (param $$x i32) (param $$y i32) (result i32) (i32.sub (local.get $$x) (local.get $$y)))
  (func (export "mul") (param $$x i32) (param $$y i32) (result i32) (i32.mul (local.get $$x) (local.get $$y)))
  (func (export "div_s") (param $$x i32) (param $$y i32) (result i32) (i32.div_s (local.get $$x) (local.get $$y)))
  (func (export "div_u") (param $$x i32) (param $$y i32) (result i32) (i32.div_u (local.get $$x) (local.get $$y)))
  (func (export "rem_s") (param $$x i32) (param $$y i32) (result i32) (i32.rem_s (local.get $$x) (local.get $$y)))
  (func (export "rem_u") (param $$x i32) (param $$y i32) (result i32) (i32.rem_u (local.get $$x) (local.get $$y)))
  (func (export "and") (param $$x i32) (param $$y i32) (result i32) (i32.and (local.get $$x) (local.get $$y)))
  (func (export "or") (param $$x i32) (param $$y i32) (result i32) (i32.or (local.get $$x) (local.get $$y)))
  (func (export "xor") (param $$x i32) (param $$y i32) (result i32) (i32.xor (local.get $$x) (local.get $$y)))
  (func (export "shl") (param $$x i32) (param $$y i32) (result i32) (i32.shl (local.get $$x) (local.get $$y)))
  (func (export "shr_s") (param $$x i32) (param $$y i32) (result i32) (i32.shr_s (local.get $$x) (local.get $$y)))
  (func (export "shr_u") (param $$x i32) (param $$y i32) (result i32) (i32.shr_u (local.get $$x) (local.get $$y)))
  (func (export "rotl") (param $$x i32) (param $$y i32) (result i32) (i32.rotl (local.get $$x) (local.get $$y)))
  (func (export "rotr") (param $$x i32) (param $$y i32) (result i32) (i32.rotr (local.get $$x) (local.get $$y)))
  (func (export "clz") (param $$x i32) (result i32) (i32.clz (local.get $$x)))
  (func (export "ctz") (param $$x i32) (result i32) (i32.ctz (local.get $$x)))
  (func (export "popcnt") (param $$x i32) (result i32) (i32.popcnt (local.get $$x)))
  (func (export "extend8_s") (param $$x i32) (result i32) (i32.extend8_s (local.get $$x)))
  (func (export "extend16_s") (param $$x i32) (result i32) (i32.extend16_s (local.get $$x)))
  (func (export "eqz") (param $$x i32) (result i32) (i32.eqz (local.get $$x)))
  (func (export "eq") (param $$x i32) (param $$y i32) (result i32) (i32.eq (local.get $$x) (local.get $$y)))
  (func (export "ne") (param $$x i32) (param $$y i32) (result i32) (i32.ne (local.get $$x) (local.get $$y)))
  (func (export "lt_s") (param $$x i32) (param $$y i32) (result i32) (i32.lt_s (local.get $$x) (local.get $$y)))
  (func (export "lt_u") (param $$x i32) (param $$y i32) (result i32) (i32.lt_u (local.get $$x) (local.get $$y)))
  (func (export "le_s") (param $$x i32) (param $$y i32) (result i32) (i32.le_s (local.get $$x) (local.get $$y)))
  (func (export "le_u") (param $$x i32) (param $$y i32) (result i32) (i32.le_u (local.get $$x) (local.get $$y)))
  (func (export "gt_s") (param $$x i32) (param $$y i32) (result i32) (i32.gt_s (local.get $$x) (local.get $$y)))
  (func (export "gt_u") (param $$x i32) (param $$y i32) (result i32) (i32.gt_u (local.get $$x) (local.get $$y)))
  (func (export "ge_s") (param $$x i32) (param $$y i32) (result i32) (i32.ge_s (local.get $$x) (local.get $$y)))
  (func (export "ge_u") (param $$x i32) (param $$y i32) (result i32) (i32.ge_u (local.get $$x) (local.get $$y)))
)`);


assert_return(() => invoke($0, `add`, [1, 1]), [value("i32", 2)]);


assert_return(() => invoke($0, `add`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `add`, [-1, -1]), [value("i32", -2)]);


assert_return(() => invoke($0, `add`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `add`, [2147483647, 1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `add`, [-2147483648, -1]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `add`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `add`, [1073741823, 1]), [value("i32", 1073741824)]);


assert_return(() => invoke($0, `sub`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `sub`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `sub`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `sub`, [2147483647, -1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `sub`, [-2147483648, 1]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `sub`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `sub`, [1073741823, -1]), [value("i32", 1073741824)]);


assert_return(() => invoke($0, `mul`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `mul`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `mul`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `mul`, [268435456, 4096]), [value("i32", 0)]);


assert_return(() => invoke($0, `mul`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `mul`, [-2147483648, -1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `mul`, [2147483647, -1]), [value("i32", -2147483647)]);


assert_return(() => invoke($0, `mul`, [19088743, 1985229328]), [value("i32", 898528368)]);


assert_return(() => invoke($0, `mul`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_trap(() => invoke($0, `div_s`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_s`, [0, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_s`, [-2147483648, -1]), `integer overflow`);


assert_trap(() => invoke($0, `div_s`, [-2147483648, 0]), `integer divide by zero`);


assert_return(() => invoke($0, `div_s`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `div_s`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_s`, [0, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_s`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `div_s`, [-2147483648, 2]), [value("i32", -1073741824)]);


assert_return(() => invoke($0, `div_s`, [-2147483647, 1000]), [value("i32", -2147483)]);


assert_return(() => invoke($0, `div_s`, [5, 2]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_s`, [-5, 2]), [value("i32", -2)]);


assert_return(() => invoke($0, `div_s`, [5, -2]), [value("i32", -2)]);


assert_return(() => invoke($0, `div_s`, [-5, -2]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_s`, [7, 3]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_s`, [-7, 3]), [value("i32", -2)]);


assert_return(() => invoke($0, `div_s`, [7, -3]), [value("i32", -2)]);


assert_return(() => invoke($0, `div_s`, [-7, -3]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_s`, [11, 5]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_s`, [17, 7]), [value("i32", 2)]);


assert_trap(() => invoke($0, `div_u`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `div_u`, [0, 0]), `integer divide by zero`);


assert_return(() => invoke($0, `div_u`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `div_u`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_u`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `div_u`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_u`, [-2147483648, 2]), [value("i32", 1073741824)]);


assert_return(() => invoke($0, `div_u`, [-1880092688, 65537]), [value("i32", 36847)]);


assert_return(() => invoke($0, `div_u`, [-2147483647, 1000]), [value("i32", 2147483)]);


assert_return(() => invoke($0, `div_u`, [5, 2]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_u`, [-5, 2]), [value("i32", 2147483645)]);


assert_return(() => invoke($0, `div_u`, [5, -2]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_u`, [-5, -2]), [value("i32", 0)]);


assert_return(() => invoke($0, `div_u`, [7, 3]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_u`, [11, 5]), [value("i32", 2)]);


assert_return(() => invoke($0, `div_u`, [17, 7]), [value("i32", 2)]);


assert_trap(() => invoke($0, `rem_s`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `rem_s`, [0, 0]), `integer divide by zero`);


assert_return(() => invoke($0, `rem_s`, [2147483647, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [0, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [-2147483648, 2]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_s`, [-2147483647, 1000]), [value("i32", -647)]);


assert_return(() => invoke($0, `rem_s`, [5, 2]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_s`, [-5, 2]), [value("i32", -1)]);


assert_return(() => invoke($0, `rem_s`, [5, -2]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_s`, [-5, -2]), [value("i32", -1)]);


assert_return(() => invoke($0, `rem_s`, [7, 3]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_s`, [-7, 3]), [value("i32", -1)]);


assert_return(() => invoke($0, `rem_s`, [7, -3]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_s`, [-7, -3]), [value("i32", -1)]);


assert_return(() => invoke($0, `rem_s`, [11, 5]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_s`, [17, 7]), [value("i32", 3)]);


assert_trap(() => invoke($0, `rem_u`, [1, 0]), `integer divide by zero`);


assert_trap(() => invoke($0, `rem_u`, [0, 0]), `integer divide by zero`);


assert_return(() => invoke($0, `rem_u`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_u`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_u`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_u`, [-2147483648, -1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `rem_u`, [-2147483648, 2]), [value("i32", 0)]);


assert_return(() => invoke($0, `rem_u`, [-1880092688, 65537]), [value("i32", 32769)]);


assert_return(() => invoke($0, `rem_u`, [-2147483647, 1000]), [value("i32", 649)]);


assert_return(() => invoke($0, `rem_u`, [5, 2]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_u`, [-5, 2]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_u`, [5, -2]), [value("i32", 5)]);


assert_return(() => invoke($0, `rem_u`, [-5, -2]), [value("i32", -5)]);


assert_return(() => invoke($0, `rem_u`, [7, 3]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_u`, [11, 5]), [value("i32", 1)]);


assert_return(() => invoke($0, `rem_u`, [17, 7]), [value("i32", 3)]);


assert_return(() => invoke($0, `and`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `and`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `and`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `and`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `and`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `and`, [2147483647, -1]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `and`, [-252641281, -3856]), [value("i32", -252645136)]);


assert_return(() => invoke($0, `and`, [-1, -1]), [value("i32", -1)]);


assert_return(() => invoke($0, `or`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `or`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `or`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `or`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `or`, [2147483647, -2147483648]), [value("i32", -1)]);


assert_return(() => invoke($0, `or`, [-2147483648, 0]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `or`, [-252641281, -3856]), [value("i32", -1)]);


assert_return(() => invoke($0, `or`, [-1, -1]), [value("i32", -1)]);


assert_return(() => invoke($0, `xor`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `xor`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `xor`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `xor`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `xor`, [2147483647, -2147483648]), [value("i32", -1)]);


assert_return(() => invoke($0, `xor`, [-2147483648, 0]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `xor`, [-1, -2147483648]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `xor`, [-1, 2147483647]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `xor`, [-252641281, -3856]), [value("i32", 252645135)]);


assert_return(() => invoke($0, `xor`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shl`, [1, 1]), [value("i32", 2)]);


assert_return(() => invoke($0, `shl`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `shl`, [2147483647, 1]), [value("i32", -2)]);


assert_return(() => invoke($0, `shl`, [-1, 1]), [value("i32", -2)]);


assert_return(() => invoke($0, `shl`, [-2147483648, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shl`, [1073741824, 1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `shl`, [1, 31]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `shl`, [1, 32]), [value("i32", 1)]);


assert_return(() => invoke($0, `shl`, [1, 33]), [value("i32", 2)]);


assert_return(() => invoke($0, `shl`, [1, -1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `shl`, [1, 2147483647]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `shr_s`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_s`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_s`, [-1, 1]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [2147483647, 1]), [value("i32", 1073741823)]);


assert_return(() => invoke($0, `shr_s`, [-2147483648, 1]), [value("i32", -1073741824)]);


assert_return(() => invoke($0, `shr_s`, [1073741824, 1]), [value("i32", 536870912)]);


assert_return(() => invoke($0, `shr_s`, [1, 32]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_s`, [1, 33]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_s`, [1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_s`, [1, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_s`, [1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_s`, [-2147483648, 31]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [-1, 32]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [-1, 33]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [-1, -1]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [-1, 2147483647]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_s`, [-1, -2147483648]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_u`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_u`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [-1, 1]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `shr_u`, [2147483647, 1]), [value("i32", 1073741823)]);


assert_return(() => invoke($0, `shr_u`, [-2147483648, 1]), [value("i32", 1073741824)]);


assert_return(() => invoke($0, `shr_u`, [1073741824, 1]), [value("i32", 536870912)]);


assert_return(() => invoke($0, `shr_u`, [1, 32]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [1, 33]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_u`, [1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_u`, [1, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `shr_u`, [1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [-2147483648, 31]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [-1, 32]), [value("i32", -1)]);


assert_return(() => invoke($0, `shr_u`, [-1, 33]), [value("i32", 2147483647)]);


assert_return(() => invoke($0, `shr_u`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [-1, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `shr_u`, [-1, -2147483648]), [value("i32", -1)]);


assert_return(() => invoke($0, `rotl`, [1, 1]), [value("i32", 2)]);


assert_return(() => invoke($0, `rotl`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `rotl`, [-1, 1]), [value("i32", -1)]);


assert_return(() => invoke($0, `rotl`, [1, 32]), [value("i32", 1)]);


assert_return(() => invoke($0, `rotl`, [-1412589450, 1]), [value("i32", 1469788397)]);


assert_return(() => invoke($0, `rotl`, [-33498112, 4]), [value("i32", -535969777)]);


assert_return(() => invoke($0, `rotl`, [-1329474845, 5]), [value("i32", 406477942)]);


assert_return(() => invoke($0, `rotl`, [32768, 37]), [value("i32", 1048576)]);


assert_return(() => invoke($0, `rotl`, [-1329474845, 65285]), [value("i32", 406477942)]);


assert_return(() => invoke($0, `rotl`, [1989852383, -19]), [value("i32", 1469837011)]);


assert_return(() => invoke($0, `rotl`, [1989852383, -2147483635]), [value("i32", 1469837011)]);


assert_return(() => invoke($0, `rotl`, [1, 31]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `rotl`, [-2147483648, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `rotr`, [1, 1]), [value("i32", -2147483648)]);


assert_return(() => invoke($0, `rotr`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `rotr`, [-1, 1]), [value("i32", -1)]);


assert_return(() => invoke($0, `rotr`, [1, 32]), [value("i32", 1)]);


assert_return(() => invoke($0, `rotr`, [-16724992, 1]), [value("i32", 2139121152)]);


assert_return(() => invoke($0, `rotr`, [524288, 4]), [value("i32", 32768)]);


assert_return(() => invoke($0, `rotr`, [-1329474845, 5]), [value("i32", 495324823)]);


assert_return(() => invoke($0, `rotr`, [32768, 37]), [value("i32", 1024)]);


assert_return(() => invoke($0, `rotr`, [-1329474845, 65285]), [value("i32", 495324823)]);


assert_return(() => invoke($0, `rotr`, [1989852383, -19]), [value("i32", -419711787)]);


assert_return(() => invoke($0, `rotr`, [1989852383, -2147483635]), [value("i32", -419711787)]);


assert_return(() => invoke($0, `rotr`, [1, 31]), [value("i32", 2)]);


assert_return(() => invoke($0, `rotr`, [-2147483648, 31]), [value("i32", 1)]);


assert_return(() => invoke($0, `clz`, [-1]), [value("i32", 0)]);


assert_return(() => invoke($0, `clz`, [0]), [value("i32", 32)]);


assert_return(() => invoke($0, `clz`, [32768]), [value("i32", 16)]);


assert_return(() => invoke($0, `clz`, [255]), [value("i32", 24)]);


assert_return(() => invoke($0, `clz`, [-2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `clz`, [1]), [value("i32", 31)]);


assert_return(() => invoke($0, `clz`, [2]), [value("i32", 30)]);


assert_return(() => invoke($0, `clz`, [2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `ctz`, [-1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ctz`, [0]), [value("i32", 32)]);


assert_return(() => invoke($0, `ctz`, [32768]), [value("i32", 15)]);


assert_return(() => invoke($0, `ctz`, [65536]), [value("i32", 16)]);


assert_return(() => invoke($0, `ctz`, [-2147483648]), [value("i32", 31)]);


assert_return(() => invoke($0, `ctz`, [2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `popcnt`, [-1]), [value("i32", 32)]);


assert_return(() => invoke($0, `popcnt`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `popcnt`, [32768]), [value("i32", 1)]);


assert_return(() => invoke($0, `popcnt`, [-2147450880]), [value("i32", 2)]);


assert_return(() => invoke($0, `popcnt`, [2147483647]), [value("i32", 31)]);


assert_return(() => invoke($0, `popcnt`, [-1431655766]), [value("i32", 16)]);


assert_return(() => invoke($0, `popcnt`, [1431655765]), [value("i32", 16)]);


assert_return(() => invoke($0, `popcnt`, [-559038737]), [value("i32", 24)]);


assert_return(() => invoke($0, `extend8_s`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `extend8_s`, [127]), [value("i32", 127)]);


assert_return(() => invoke($0, `extend8_s`, [128]), [value("i32", -128)]);


assert_return(() => invoke($0, `extend8_s`, [255]), [value("i32", -1)]);


assert_return(() => invoke($0, `extend8_s`, [19088640]), [value("i32", 0)]);


assert_return(() => invoke($0, `extend8_s`, [-19088768]), [value("i32", -128)]);


assert_return(() => invoke($0, `extend8_s`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($0, `extend16_s`, [0]), [value("i32", 0)]);


assert_return(() => invoke($0, `extend16_s`, [32767]), [value("i32", 32767)]);


assert_return(() => invoke($0, `extend16_s`, [32768]), [value("i32", -32768)]);


assert_return(() => invoke($0, `extend16_s`, [65535]), [value("i32", -1)]);


assert_return(() => invoke($0, `extend16_s`, [19070976]), [value("i32", 0)]);


assert_return(() => invoke($0, `extend16_s`, [-19103744]), [value("i32", -32768)]);


assert_return(() => invoke($0, `extend16_s`, [-1]), [value("i32", -1)]);


assert_return(() => invoke($0, `eqz`, [0]), [value("i32", 1)]);


assert_return(() => invoke($0, `eqz`, [1]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [-2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `eqz`, [-1]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-2147483648, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `eq`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [0, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-1, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [-2147483648, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `eq`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [-1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [2147483647, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ne`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-2147483648, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [0, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-2147483648, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [-2147483648, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `ne`, [2147483647, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [2147483647, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [-2147483648, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [0, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-2147483648, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [-1, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_s`, [-2147483648, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_s`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [2147483647, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [0, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-2147483648, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `lt_u`, [-1, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [-2147483648, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `lt_u`, [2147483647, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-2147483648, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_s`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-2147483648, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [0, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_s`, [-2147483648, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [-1, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_s`, [-2147483648, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_s`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [-2147483648, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [1, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [0, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [0, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-2147483648, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `le_u`, [-1, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [-2147483648, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `le_u`, [2147483647, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [2147483647, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [0, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [-1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_s`, [-2147483648, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_s`, [2147483647, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [0, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [-2147483648, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [2147483647, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-2147483648, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [0, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `gt_u`, [-1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [-2147483648, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `gt_u`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-1, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [-2147483648, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [-2147483648, 0]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [0, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [-1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_s`, [-2147483648, 2147483647]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_s`, [2147483647, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [0, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-1, 1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-2147483648, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [2147483647, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-1, -1]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [1, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [0, 1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-2147483648, 0]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [0, -2147483648]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-2147483648, -1]), [value("i32", 0)]);


assert_return(() => invoke($0, `ge_u`, [-1, -2147483648]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [-2147483648, 2147483647]), [value("i32", 1)]);


assert_return(() => invoke($0, `ge_u`, [2147483647, -2147483648]), [value("i32", 0)]);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty
      (i32.eqz) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-block
      (i32.const 0)
      (block (i32.eqz) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-loop
      (i32.const 0)
      (loop (i32.eqz) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-if
      (i32.const 0) (i32.const 0)
      (if (then (i32.eqz) (drop)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-else
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (i32.eqz))) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-br
      (i32.const 0)
      (block (br 0 (i32.eqz)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-br_if
      (i32.const 0)
      (block (br_if 0 (i32.eqz) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-br_table
      (i32.const 0)
      (block (br_table 0 (i32.eqz)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-return
      (return (i32.eqz)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-select
      (select (i32.eqz) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-call
      (call 1 (i32.eqz)) (drop)
    )
    (func (param i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-unary-operand-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (i32.eqz) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-local.set
      (local i32)
      (local.set 0 (i32.eqz)) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-unary-operand-empty-in-local.tee
      (local i32)
      (local.tee 0 (i32.eqz)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-unary-operand-empty-in-global.set
      (global.set $$x (i32.eqz)) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-unary-operand-empty-in-memory.grow
      (memory.grow (i32.eqz)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-unary-operand-empty-in-load
      (i32.load (i32.eqz)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-unary-operand-empty-in-store
      (i32.store (i32.eqz) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty
      (i32.add) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty
      (i32.const 0) (i32.add) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-block
      (i32.const 0) (i32.const 0)
      (block (i32.add) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-block
      (i32.const 0)
      (block (i32.const 0) (i32.add) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-loop
      (i32.const 0) (i32.const 0)
      (loop (i32.add) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-loop
      (i32.const 0)
      (loop (i32.const 0) (i32.add) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-if
      (i32.const 0) (i32.const 0) (i32.const 0)
      (if (i32.add) (then (drop)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-if
      (i32.const 0) (i32.const 0)
      (if (i32.const 0) (then (i32.add)) (else (drop)))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-else
      (i32.const 0) (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (i32.add) (i32.const 0)))
      (drop) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-else
      (i32.const 0) (i32.const 0)
      (if (result i32) (then (i32.const 0)) (else (i32.add)))
      (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-br
      (i32.const 0) (i32.const 0)
      (block (br 0 (i32.add)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-br
      (i32.const 0)
      (block (br 0 (i32.const 0) (i32.add)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-br_if
      (i32.const 0) (i32.const 0)
      (block (br_if 0 (i32.add) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-br_if
      (i32.const 0)
      (block (br_if 0 (i32.const 0) (i32.add) (i32.const 1)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-br_table
      (i32.const 0) (i32.const 0)
      (block (br_table 0 (i32.add)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-br_table
      (i32.const 0)
      (block (br_table 0 (i32.const 0) (i32.add)) (drop))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-return
      (return (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-return
      (return (i32.const 0) (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-select
      (select (i32.add) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-select
      (select (i32.const 0) (i32.add) (i32.const 1) (i32.const 2)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-call
      (call 1 (i32.add)) (drop)
    )
    (func (param i32 i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-call
      (call 1 (i32.const 0) (i32.add)) (drop)
    )
    (func (param i32 i32) (result i32) (local.get 0))
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-binary-1st-operand-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (i32.add) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$f (param i32) (result i32) (local.get 0))
    (type $$sig (func (param i32) (result i32)))
    (table funcref (elem $$f))
    (func $$type-binary-2nd-operand-empty-in-call_indirect
      (block (result i32)
        (call_indirect (type $$sig)
          (i32.const 0) (i32.add) (i32.const 0)
        )
        (drop)
      )
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-local.set
      (local i32)
      (local.set 0 (i32.add)) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-local.set
      (local i32)
      (local.set 0 (i32.const 0) (i32.add)) (local.get 0) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-1st-operand-empty-in-local.tee
      (local i32)
      (local.tee 0 (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (func $$type-binary-2nd-operand-empty-in-local.tee
      (local i32)
      (local.tee 0 (i32.const 0) (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-binary-1st-operand-empty-in-global.set
      (global.set $$x (i32.add)) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (global $$x (mut i32) (i32.const 0))
    (func $$type-binary-2nd-operand-empty-in-global.set
      (global.set $$x (i32.const 0) (i32.add)) (global.get $$x) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-binary-1st-operand-empty-in-memory.grow
      (memory.grow (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-binary-2nd-operand-empty-in-memory.grow
      (memory.grow (i32.const 0) (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-binary-1st-operand-empty-in-load
      (i32.load (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 0)
    (func $$type-binary-2nd-operand-empty-in-load
      (i32.load (i32.const 0) (i32.add)) (drop)
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-binary-1st-operand-empty-in-store
      (i32.store (i32.add) (i32.const 1))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module
    (memory 1)
    (func $$type-binary-2nd-operand-empty-in-store
      (i32.store (i32.const 1) (i32.add) (i32.const 0))
    )
  )`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.add (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.and (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.div_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.div_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.mul (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.or (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.rem_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.rem_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.rotl (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.rotr (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.shl (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.shr_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.shr_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.sub (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.xor (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.eqz (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.clz (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.ctz (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.popcnt (i64.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.eq (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.ge_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.ge_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.gt_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.gt_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.le_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.le_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.lt_s (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.lt_u (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_invalid(
  () => instantiate(`(module (func (result i32) (i32.ne (i64.const 0) (f32.const 0))))`),
  `type mismatch`,
);


assert_malformed(
  () => instantiate(`(func (result i32) (i32.const nan:arithmetic)) `),
  `unexpected token`,
);


assert_malformed(
  () => instantiate(`(func (result i32) (i32.const nan:canonical)) `),
  `unexpected token`,
);
