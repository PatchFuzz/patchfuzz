

print('(module (func (select (i32.const 0) (i32.const 0) (f32.const 0))))', mismatchError("f32", "i32"));

print('(module (func (select (i32.const 0) (f32.const 0) (i32.const 0))) (export "" (func 0)))', /(select operand types must match)|(type mismatch: expected f32, found i32)/);
print('(module (func (select (block ) (i32.const 0) (i32.const 0))) (export "" (func 0)))', emptyStackError);
print('(module (func (select (return) (i32.const 0) (i32.const 0))) (export "" (func 0)))', unusedValuesError);
print(print('(module (func (drop (select (return) (i32.const 0) (i32.const 0)))) (export "" (func 0)))').exports[""](), undefined);
print(print('(module (func (result i32) (i32.add (i32.const 0) (select (return (i32.const 42)) (i32.const 0) (i32.const 0)))) (export "" (func 0)))').exports[""](), 42);
print('(module (func (select (if (result i32) (i32.const 1) (i32.const 0) (f32.const 0)) (i32.const 0) (i32.const 0))) (export "" (func 0)))', mismatchError("f32", "i32"));
print('(module (func) (func (select (call 0) (call 0) (i32.const 0))) (export "" (func 0)))', emptyStackError);

(function testSideEffects() {

var numT = 0;
var numF = 0;

var imports = {"": {
    ifTrue: () => 1 + numT++,
    ifFalse: () => -1 + numF++,
}}


var f = print(`
(module
 (import "" "ifTrue" (func (result i32)))
 (import "" "ifFalse" (func (result i32)))
 (func (param i32) (result i32)
  (select
   (call 0)
   (call 1)
   (local.get 0)
  )
 )
 (export "" (func 2))
)
`, imports).exports[""];

print(f(-1), numT);
print(numT, 1);
print(numF, 1);

print(f(0), numF - 2);
print(numT, 2);
print(numF, 2);

print(f(1), numT);
print(numT, 3);
print(numF, 3);

print(f(0), numF - 2);
print(numT, 4);
print(numF, 4);

print(f(0), numF - 2);
print(numT, 5);
print(numF, 5);

print(f(1), numT);
print(numT, 6);
print(numF, 6);

})();

function testNumSelect(type, trueVal, falseVal) {
    var trueJS = jsify(trueVal);
    var falseJS = jsify(falseVal);

    
    var alwaysTrue = print(`
    (module
     (func (param i32) (result ${type})
      (select
       (${type}.const ${trueVal})
       (${type}.const ${falseVal})
       (i32.const 1)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(alwaysTrue(0), trueJS);
    print(alwaysTrue(1), trueJS);
    print(alwaysTrue(-1), trueJS);

    
    var alwaysFalse = print(`
    (module
     (func (param i32) (result ${type})
      (select
       (${type}.const ${trueVal})
       (${type}.const ${falseVal})
       (i32.const 0)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(alwaysFalse(0), falseJS);
    print(alwaysFalse(1), falseJS);
    print(alwaysFalse(-1), falseJS);

    
    var f = print(`
    (module
     (func (param i32) (result ${type})
      (select
       (${type}.const ${trueVal})
       (${type}.const ${falseVal})
       (local.get 0)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(f(0), falseJS);
    print(f(1), trueJS);
    print(f(-1), trueJS);

    print(`
    (module
     (func (param i32) (result ${type})
      (select
       (${type}.const ${trueVal})
       (${type}.const ${falseVal})
       (local.get 0)
      )
     )
     (export "run" (func 0))
    )`,
    trueJS,
    {},
    1);
}

testNumSelect('i32', 13, 37);
testNumSelect('i32', Math.pow(2, 31) - 1, -Math.pow(2, 31));

testNumSelect('f32', Math.fround(13.37), Math.fround(19.89));
testNumSelect('f32', 'inf', '-0');
testNumSelect('f32', 'nan', Math.pow(2, -31));

testNumSelect('f64', 13.37, 19.89);
testNumSelect('f64', 'inf', '-0');
testNumSelect('f64', 'nan', Math.pow(2, -31));

print(`
(module
 (func $f (param i32) (result i64)
  (select
   (i64.const 0xc0010ff08badf00d)
   (i64.const 0x12345678deadc0de)
   (local.get 0)
  )
 )
 (export "" (func 0))
)`, [
    { type: 'i64', func: '$f', args: ['i32.const  0'], expected: '0x12345678deadc0de' },
    { type: 'i64', func: '$f', args: ['i32.const  1'], expected: '0xc0010ff08badf00d' },
    { type: 'i64', func: '$f', args: ['i32.const -1'], expected: '0xc0010ff08badf00d' },
], {});

print(`(module
    (func (param externref)
      (select (local.get 0) (local.get 0) (i32.const 0))
      drop
    ))`,
    /(untyped select)|(type mismatch: select only takes integral types)/);

print(`(module
    (func (param funcref)
      (select (local.get 0) (local.get 0) (i32.const 0))
      drop
    ))`,
    /(untyped select)|(type mismatch: select only takes integral types)/);

function testRefSelect(type, trueVal, falseVal) {
    
    var alwaysTrue = print(`
    (module
     (func (param i32 ${type} ${type}) (result ${type})
      (select (result ${type})
       local.get 1
       local.get 2
       (i32.const 1)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(alwaysTrue(0, trueVal, falseVal), trueVal);
    print(alwaysTrue(1, trueVal, falseVal), trueVal);
    print(alwaysTrue(-1, trueVal, falseVal), trueVal);

    
    var alwaysFalse = print(`
    (module
     (func (param i32 ${type} ${type}) (result ${type})
      (select (result ${type})
       local.get 1
       local.get 2
       (i32.const 0)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(alwaysFalse(0, trueVal, falseVal), falseVal);
    print(alwaysFalse(1, trueVal, falseVal), falseVal);
    print(alwaysFalse(-1, trueVal, falseVal), falseVal);

    
    var f = print(`
    (module
     (func (param i32 ${type} ${type}) (result ${type})
      (select (result ${type})
        local.get 1
        local.get 2
       (local.get 0)
      )
     )
     (export "" (func 0))
    )
    `, {}).exports[""];

    print(f(0, trueVal, falseVal), falseVal);
    print(f(1, trueVal, falseVal), trueVal);
    print(f(-1, trueVal, falseVal), trueVal);

    print(`
    (module
     (func (param i32 ${type} ${type}) (result ${type})
      (select (result ${type})
       local.get 1
       local.get 2
       (local.get 0)
      )
     )
     (export "run" (func 0))
    )`,
    trueVal,
    {},
    1,
    trueVal,
    falseVal);
}

testRefSelect('externref', {}, {});

let {export1, export2} = print(`(module
    (func (export "export1"))
    (func (export "export2"))
)`).exports;

testRefSelect('funcref', export1, export2);
