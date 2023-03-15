

function testPrivateGlobal(valtype, expr, result) {
  
  let { get } = print(`(module
    (global $global ${valtype} ${expr})
    (func (export "get") (result ${valtype})
      global.get $global
    )
  )`).exports;
  print(get(), result);
}
function testExportedGlobal(valtype, expr, result) {
  
  
  let { global, get } = print(`(module
    (global $global (export "global") ${valtype} ${expr})
    (func (export "get") (result ${valtype})
      global.get $global
    )
  )`).exports;
  print(get(), result);
  print(global.value, result);
}
function testIndirectGlobal(valtype, expr, result) {
  
  
  let { global } = print(`(module
    (global (export "global") (mut ${valtype}) ${expr})
  )`).exports;
  print(global.value, result);
}



const I32_SQ_OVERFLOW = 0xFFFF + 1;
const MAX_I32 = 0xFFFF_FFFF;
function testI32(expr, result) {
  testPrivateGlobal('i32', expr, result);
  testExportedGlobal('i32', expr, result);
  testIndirectGlobal('i32', expr, result);
}
testI32('i32.const 1', 1);

testI32('i32.const 1 i32.const 2 i32.add', 3);
testI32(`i32.const ${MAX_I32} i32.const 1 i32.add`, 0);

testI32('i32.const 1 i32.const 2 i32.sub', 1);
testI32(`i32.const 1 i32.const 0 i32.sub`, -1);

testI32('i32.const 1 i32.const 2 i32.mul', 2);
testI32(`i32.const ${I32_SQ_OVERFLOW} i32.const ${I32_SQ_OVERFLOW} i32.mul`, 0);



const I64_SQ_OVERFLOW = 0xFFFF_FFFFn + 1n;
const MAX_I64 = 0xFFFF_FFFF_FFFF_FFFFn;
function testI64(expr, result) {
  testPrivateGlobal('i64', expr, result);
  testExportedGlobal('i64', expr, result);
  testIndirectGlobal('i64', expr, result);
}
testI64('i64.const 1', 1n);

testI64('i64.const 1 i64.const 2 i64.add', 3n);
testI64(`i64.const ${MAX_I64} i64.const 1 i64.add`, 0n);

testI64('i64.const 1 i64.const 2 i64.sub', 1n);
testI64(`i64.const 1 i64.const 0 i64.sub`, -1n);

testI64('i64.const 1 i64.const 2 i64.mul', 2n);
testI64(`i64.const ${I64_SQ_OVERFLOW} i64.const ${I64_SQ_OVERFLOW} i64.mul`, 0n);



function testGlobalGet(valtype, aExpr, bExpr, cExpr, cResult) {
  let { a, b } = print(`(module
    (global (export "a") ${valtype} ${aExpr})
    (global (export "b") ${valtype} ${bExpr})
  )`).exports;
  let { c } = print(`(module
    (global $a (import "" "a") ${valtype})
    (global $b (import "" "b") ${valtype})
    (global (export "c") ${valtype} ${cExpr})
  )`, {"": {a, b}}).exports;
  print(c.value, cResult);
}

testGlobalGet('i32', 'i32.const 2', 'i32.const 3', 'global.get $a global.get $b i32.add', 5);
testGlobalGet('i32', 'i32.const 2', 'i32.const 3', 'global.get $a global.get $b i32.sub', 1);
testGlobalGet('i32', 'i32.const 2', 'i32.const 3', 'global.get $a global.get $b i32.mul', 6);

testGlobalGet('i64', 'i64.const 2', 'i64.const 3', 'global.get $a global.get $b i64.add', 5n);
testGlobalGet('i64', 'i64.const 2', 'i64.const 3', 'global.get $a global.get $b i64.sub', 1n);
testGlobalGet('i64', 'i64.const 2', 'i64.const 3', 'global.get $a global.get $b i64.mul', 6n);
