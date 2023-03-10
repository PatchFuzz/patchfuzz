const { LinkError } = WebAssembly;




var o = print('(module)').exports;
print(Object.getOwnPropertyNames(o).length, 0);

var o = print('(module (func))').exports;
print(Object.getOwnPropertyNames(o).length, 0);

var o = print('(module (func) (export "a" (func 0)))').exports;
var names = Object.getOwnPropertyNames(o);
print(names.length, 1);
print(names[0], 'a');
var desc = Object.getOwnPropertyDescriptor(o, 'a');
print(typeof desc.value, "function");
print(desc.value.name, "0");
print(desc.value.length, 0);
print(desc.value(), undefined);
print(desc.writable, false);
print(desc.enumerable, true);
print(desc.configurable, false);
print(desc.value(), undefined);

print('(module (func) (func) (export "a" (func 0)))');
print('(module (func) (func) (export "a" (func 1)))');
print('(module (func $a) (func $b) (export "a" (func $a)) (export "b" (func $b)))');
print('(module (func $a) (func $b) (export "a" (func $a)) (export "b" (func $b)))');

print('(module (func) (export "a" (func 1)))', /exported function index out of bounds/);
print('(module (func) (func) (export "a" (func 2)))', /exported function index out of bounds/);

var o = print('(module (func) (export "a" (func 0)) (export "b" (func 0)))').exports;
print(Object.getOwnPropertyNames(o).sort().toString(), "a,b");
print(o.a.name, "0");
print(o.b.name, "0");
print(o.a === o.b, true);

var o = print('(module (func) (func) (export "a" (func 0)) (export "b" (func 1)))').exports;
print(Object.getOwnPropertyNames(o).sort().toString(), "a,b");
print(o.a.name, "0");
print(o.b.name, "1");
print(o.a === o.b, false);

var o = print('(module (func (result i32) (i32.const 1)) (func (result i32) (i32.const 2)) (export "a" (func 0)) (export "b" (func 1)))').exports;
print(o.a(), 1);
print(o.b(), 2);
var o = print('(module (func (result i32) (i32.const 1)) (func (result i32) (i32.const 2)) (export "a" (func 1)) (export "b" (func 0)))').exports;
print(o.a(), 2);
print(o.b(), 1);

print('(module (func) (export "a" (func 0)) (export "a" (func 0)))', /duplicate export/);
print('(module (func) (func) (export "a" (func 0)) (export "a" (func 1)))', /duplicate export/);




print('(module (func (result i32)))', emptyStackError);
print('(module (func (result i32) (nop)))', emptyStackError);

print('(module (func (nop)))');
print('(module (func (result i32) (i32.const 42)))');
print('(module (func (param i32)))');
print('(module (func (param i32) (result i32) (i32.const 42)))');
print('(module (func (param i32) (result i32) (i32.const 42)))');
print('(module (func (param f32)))');
print('(module (func (param f64)))');

printI64('(module (func $run (result i64) (i64.const 123)))', 123);
printI64('(module (func $run (param i64) (result i64) (local.get 0)))',
                '0x123400007fffffff',
                {},
                '(i64.const 0x123400007fffffff)');
printI64('(module (func $run (param i64) (result i64) (i64.add (local.get 0) (i64.const 1))))',
                '0x1234000100000000',
                {},
                '(i64.const 0x12340000ffffffff)');




const noImportObj = "second argument must be an object";

print(() => print('(module (import "a" "b" (func)))', 1), TypeError, noImportObj);
print(() => print('(module (import "a" "b" (func)))', null), TypeError, noImportObj);

const notObject = /import object field '\w*' is not an Object/;
const notFunction = /import object field '\w*' is not a Function/;

var code = '(module (import "a" "b" (func)))';
print(() => print(code), TypeError, noImportObj);
print(() => print(code, {}), TypeError, notObject);
print(() => print(code, {a:1}), TypeError, notObject);
print(() => print(code, {a:{}}), LinkError, notFunction);
print(() => print(code, {a:{b:1}}), LinkError, notFunction);
print(code, {a:{b:()=>{}}});

var code = '(module (import "" "b" (func)))';
print(code, {"":{b:()=>{}}});

var code = '(module (import "a" "" (func)))';
print(() => print(code), TypeError, noImportObj);
print(() => print(code, {}), TypeError, notObject);
print(() => print(code, {a:1}), TypeError, notObject);
print(code, {a:{"":()=>{}}});

var code = '(module (import "a" "" (func)) (import "b" "c" (func)) (import "c" "" (func)))';
print(() => print(code, {a:()=>{}, b:{c:()=>{}}, c:{}}), LinkError, notFunction);
print(code, {a:{"":()=>{}}, b:{c:()=>{}}, c:{"":()=>{}}});

print('(module (import "a" "" (func (result i32))))', {a:{"":()=>{}}});
print('(module (import "a" "" (func (result f32))))', {a:{"":()=>{}}});
print('(module (import "a" "" (func (result f64))))', {a:{"":()=>{}}});
print('(module (import "a" "" (func $foo (result f64))))', {a:{"":()=>{}}});




print('(module (memory 0))');
print('(module (memory 1))');

var buf = print('(module (memory 1) (export "memory" (memory 0)))').exports.memory.buffer;
print(buf instanceof ArrayBuffer, true);
print(buf.byteLength, 65536);

var obj = print('(module (memory 1) (func (result i32) (i32.const 42)) (func (nop)) (export "memory" (memory 0)) (export "b" (func 0)) (export "c" (func 1)))').exports;
print(obj.memory.buffer instanceof ArrayBuffer, true);
print(obj.b instanceof Function, true);
print(obj.c instanceof Function, true);
print(obj.memory.buffer.byteLength, 65536);
print(obj.b(), 42);
print(obj.c(), undefined);

var buf = print('(module (memory 1) (data (i32.const 0) "") (export "memory" (memory 0)))').exports.memory.buffer;
print(new Uint8Array(buf)[0], 0);

var buf = print('(module (memory 1) (data (i32.const 65536) "") (export "memory" (memory 0)))').exports.memory.buffer;
print(new Uint8Array(buf)[0], 0);

var buf = print('(module (memory 1) (data (i32.const 0) "a") (export "memory" (memory 0)))').exports.memory.buffer;
print(new Uint8Array(buf)[0], 'a'.charCodeAt(0));

var buf = print('(module (memory 1) (data (i32.const 0) "a") (data (i32.const 2) "b") (export "memory" (memory 0)))').exports.memory.buffer;
print(new Uint8Array(buf)[0], 'a'.charCodeAt(0));
print(new Uint8Array(buf)[1], 0);
print(new Uint8Array(buf)[2], 'b'.charCodeAt(0));

var buf = print('(module (memory 1) (data (i32.const 65535) "c") (export "memory" (memory 0)))').exports.memory.buffer;
print(new Uint8Array(buf)[0], 0);
print(new Uint8Array(buf)[65535], 'c'.charCodeAt(0));




print(print('(module (func (param i32) (result i32) (local.get 0)) (export "" (func 0)))').exports[""](), 0);
print(print('(module (func (param i32) (result i32) (local.get 0)) (export "" (func 0)))').exports[""](42), 42);
print(print('(module (func (param i32) (param i32) (result i32) (local.get 0)) (export "" (func 0)))').exports[""](42, 43), 42);
print(print('(module (func (param i32) (param i32) (result i32) (local.get 1)) (export "" (func 0)))').exports[""](42, 43), 43);

print('(module (func (local.get 0)))', /(local.get index out of range)|(local index out of bounds)/);
print('(module (func (result f32) (local i32) (local.get 0)))', mismatchError("i32", "f32"));
print('(module (func (result i32) (local f32) (local.get 0)))', mismatchError("f32", "i32"));
print('(module (func (param i32) (result f32) (local f32) (local.get 0)))', mismatchError("i32", "f32"));
print('(module (func (param i32) (result i32) (local f32) (local.get 1)))', mismatchError("f32", "i32"));

print('(module (func (local i32)))');
print('(module (func (local i32) (local f32)))');

print('(module (func (result i32) (local i32) (local.get 0)) (export "run" (func 0)))', 0);
print('(module (func (param i32) (result i32) (local f32) (local.get 0)) (export "run" (func 0)))', 0);
print('(module (func (param i32) (result f32) (local f32) (local.get 1)) (export "run" (func 0)))', 0);

print('(module (func (local.set 0 (i32.const 0))))', /(local.set index out of range)|(local index out of bounds)/);
print('(module (func (local f32) (local.set 0 (i32.const 0))))', mismatchError("i32", "f32"));
print('(module (func (local f32) (local.set 0 (nop))))', emptyStackError);
print('(module (func (local i32) (local f32) (local.set 0 (local.get 1))))', mismatchError("f32", "i32"));
print('(module (func (local i32) (local f32) (local.set 1 (local.get 0))))', mismatchError("i32", "f32"));

print('(module (func (local i32) (local.set 0 (i32.const 0))))');
print('(module (func (local i32) (local f32) (local.set 0 (local.get 0))))');
print('(module (func (local i32) (local f32) (local.set 1 (local.get 1))))');

print('(module (func (result i32) (local i32) (tee_local 0 (i32.const 42))) (export "run" (func 0)))', 42);
print('(module (func (result i32) (local i32) (tee_local 0 (local.get 0))) (export "run" (func 0)))', 0);

print('(module (func (param $a i32) (result i32) (local.get $a)) (export "run" (func 0)))', 0);
print('(module (func (param $a i32) (result i32) (local $b i32) (block (result i32) (local.set $b (local.get $a)) (local.get $b))) (export "run" (func 0)))', 42, {}, 42);

print('(module (func (local i32) (local $a f32) (local.set 0 (i32.const 1)) (local.set $a (f32.const nan))))');




print('(module (func (block )) (export "run" (func 0)))', undefined);

print('(module (func (result i32) (block )))', emptyStackError);
print('(module (func (result i32) (block (block ))))', emptyStackError);
print('(module (func (local i32) (local.set 0 (block ))))', emptyStackError);

print('(module (func (block (block ))) (export "run" (func 0)))', undefined);
print('(module (func (result i32) (block (result i32) (i32.const 42))) (export "run" (func 0)))', 42);
print('(module (func (result i32) (block (result i32) (block (result i32) (i32.const 42)))) (export "run" (func 0)))', 42);
print('(module (func (result f32) (block (result i32) (i32.const 0))))', mismatchError("i32", "f32"));

print('(module (func (result i32) (block (result i32) (drop (i32.const 13)) (block (result i32) (i32.const 42)))) (export "run" (func 0)))', 42);
print('(module (func (param f32) (result f32) (block (result i32) (drop (local.get 0)) (i32.const 0))))', mismatchError("i32", "f32"));

print('(module (func (result i32) (local i32) (local.set 0 (i32.const 42)) (local.get 0)) (export "run" (func 0)))', 42);




print('(module (func (nop)) (func (call 0 (i32.const 0))))', unusedValuesError);

print('(module (func (param i32) (nop)) (func (call 0)))', emptyStackError);
print('(module (func (param f32) (nop)) (func (call 0 (i32.const 0))))', mismatchError("i32", "f32"));
print('(module (func (nop)) (func (call 3)))', /(callee index out of range)|(function index out of bounds)/);

print('(module (func (nop)) (func (call 0)))');
print('(module (func (param i32) (nop)) (func (call 0 (i32.const 0))))');

print('(module (func (result i32) (i32.const 42)) (func (result i32) (call 0)) (export "run" (func 1)))', 42);
assertThrowsInstanceOf(() => print('(module (func (call 0)) (export "" (func 0)))').exports[""](), InternalError);
assertThrowsInstanceOf(() => print('(module (func (call 1)) (func (call 0)) (export "" (func 0)))').exports[""](), InternalError);

print('(module (func (param i32 f32)) (func (call 0 (i32.const 0) (f32.const nan))))');
print('(module (func (param i32 f32)) (func (call 0 (i32.const 0) (i32.const 0))))', mismatchError("i32", "f32"));

print('(module (import "a" "" (func)) (func (call 0 (i32.const 0))))', unusedValuesError);
print('(module (import "a" "" (func (param i32))) (func (call 0)))', emptyStackError);
print('(module (import "a" "" (func (param f32))) (func (call 0 (i32.const 0))))', mismatchError("i32", "f32"));

print(() => print('(module (import "a" "" (func)) (func (call 1)))'), TypeError, noImportObj);
print('(module (import "" "a" (func)) (func (call 0)))', {"":{a:()=>{}}});
print('(module (import "" "a" (func (param i32))) (func (call 0 (i32.const 0))))', {"":{a:()=>{}}});

function checkF32CallImport(v) {
    print('(module (import "" "a" (func (result f32))) (func (result f32) (call 0)) (export "run" (func 1)))',
                 Math.fround(v),
                 {"":{a:()=>{ return v; }}});
    print('(module (import "" "a" (func (param f32))) (func (param f32) (call 0 (local.get 0))) (export "run" (func 1)))',
                 undefined,
                 {"":{a:x=>{ print(Math.fround(v), x); }}},
                 v);
}
checkF32CallImport(13.37);
checkF32CallImport(NaN);
checkF32CallImport(-Infinity);
checkF32CallImport(-0);
checkF32CallImport(Math.pow(2, 32) - 1);

var counter = 0;
var f = print('(module (import "" "inc" (func)) (func (call 0)) (export "" (func 1)))', {"":{inc:()=>counter++}}).exports[""];
var g = print('(module (import "" "f" (func)) (func (block (call 0) (call 0))) (export "" (func 1)))', {"":{f}}).exports[""];
f();
print(counter, 1);
g();
print(counter, 3);

var f = print('(module (import "" "callf" (func)) (func (call 0)) (export "" (func 1)))', {"":{callf:()=>f()}}).exports[""];
assertThrowsInstanceOf(() => f(), InternalError);

var f = print('(module (import "" "callg" (func)) (func (call 0)) (export "" (func 1)))', {"":{callg:()=>g()}}).exports[""];
var g = print('(module (import "" "callf" (func)) (func (call 0)) (export "" (func 1)))', {"":{callf:()=>f()}}).exports[""];
assertThrowsInstanceOf(() => f(), InternalError);

var code = '(module (import "" "one" (func (result i32))) (import "" "two" (func (result i32))) (func (result i32) (i32.const 3)) (func (result i32) (i32.const 4)) (func (result i32) BODY) (export "run" (func 4)))';
var imports = {"":{one:()=>1, two:()=>2}};
print(code.replace('BODY', '(call 0)'), 1, imports);
print(code.replace('BODY', '(call 1)'), 2, imports);
print(code.replace('BODY', '(call 2)'), 3, imports);
print(code.replace('BODY', '(call 3)'), 4, imports);

print(`(module (import "" "evalcx" (func (param i32) (result i32))) (func (result i32) (call 0 (i32.const 0))) (export "run" (func 1)))`, 0, {"":{evalcx}});

if (typeof evaluate === 'function')
    evaluate(`new WebAssembly.Instance(new WebAssembly.Module(print('(module)'))) `, { fileName: null });

print(`(module (type $t (func)) (func (call_indirect (type $t) (i32.const 0))))`, /(can't call_indirect without a table)|(unknown table)/);

var {v2i, i2i, i2v} = print(`(module
    (type (func (result i32)))
    (type (func (param i32) (result i32)))
    (type (func (param i32)))
    (func (type 0) (i32.const 13))
    (func (type 0) (i32.const 42))
    (func (type 1) (i32.add (local.get 0) (i32.const 1)))
    (func (type 1) (i32.add (local.get 0) (i32.const 2)))
    (func (type 1) (i32.add (local.get 0) (i32.const 3)))
    (func (type 1) (i32.add (local.get 0) (i32.const 4)))
    (table funcref (elem 0 1 2 3 4 5))
    (func (param i32) (result i32) (call_indirect (type 0) (local.get 0)))
    (func (param i32) (param i32) (result i32) (call_indirect (type 1) (local.get 1) (local.get 0)))
    (func (param i32) (call_indirect (type 2) (i32.const 0) (local.get 0)))
    (export "v2i" (func 6))
    (export "i2i" (func 7))
    (export "i2v" (func 8))
)`).exports;

const signatureMismatch = /indirect call signature mismatch/;

print(v2i(0), 13);
print(v2i(1), 42);
print(() => v2i(2), Error, signatureMismatch);
print(() => v2i(3), Error, signatureMismatch);
print(() => v2i(4), Error, signatureMismatch);
print(() => v2i(5), Error, signatureMismatch);

print(() => i2i(0), Error, signatureMismatch);
print(() => i2i(1), Error, signatureMismatch);
print(i2i(2, 100), 101);
print(i2i(3, 100), 102);
print(i2i(4, 100), 103);
print(i2i(5, 100), 104);

print(() => i2v(0), Error, signatureMismatch);
print(() => i2v(1), Error, signatureMismatch);
print(() => i2v(2), Error, signatureMismatch);
print(() => i2v(3), Error, signatureMismatch);
print(() => i2v(4), Error, signatureMismatch);
print(() => i2v(5), Error, signatureMismatch);

{
    enableGeckoProfiling();

    var stack;
    print(
        `(module
            (type $v2v (func))
            (import "" "f" (func $foo))
            (func $a (call $foo))
            (func $b (result i32) (i32.const 0))
            (table funcref (elem $a $b))
            (func $bar (call_indirect (type $v2v) (i32.const 0)))
            (export "run" (func $bar))
        )`,
        undefined,
        {"":{f:() => { stack = new Error().stack }}}
    );

    disableGeckoProfiling();

    var inner = stack.indexOf("wasm-function[1]");
    var outer = stack.indexOf("wasm-function[3]");
    print(inner === -1, false);
    print(outer === -1, false);
    print(inner < outer, true);
}

for (bad of [6, 7, 100, Math.pow(2,31)-1, Math.pow(2,31), Math.pow(2,31)+1, Math.pow(2,32)-2, Math.pow(2,32)-1]) {
    assertThrowsInstanceOf(() => v2i(bad), WebAssembly.RuntimeError);
    assertThrowsInstanceOf(() => i2i(bad, 0), WebAssembly.RuntimeError);
    assertThrowsInstanceOf(() => i2v(bad, 0), WebAssembly.RuntimeError);
}

print('(module (func $foo (nop)) (func (call $foo)))');
print('(module (func (call $foo)) (func $foo (nop)))');
print('(module (import "" "a" (func $bar)) (func (call $bar)) (func $foo (nop)))');

var exp = print(`(module (func (export "f")))`).exports;
print(Object.isFrozen(exp), true);
