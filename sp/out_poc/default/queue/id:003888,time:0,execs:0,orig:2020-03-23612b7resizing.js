const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Table = WebAssembly.Table;
const Memory = WebAssembly.Memory;
const RuntimeError = WebAssembly.RuntimeError;








print(`(module
    (memory 1)
    (func $test (result i32)
        (i32.store (i32.const 0) (i32.const 1))
        (i32.store (i32.const 65532) (i32.const 10))
        (drop (memory.grow (i32.const 99)))
        (i32.store (i32.const 6553596) (i32.const 100))
        (i32.add
            (i32.load (i32.const 0))
            (i32.add
                (i32.load (i32.const 65532))
                (i32.load (i32.const 6553596)))))
    (export "run" (func $test))
)`, 111);


var exports = print(`(module
    (import "" "imp" (func $imp))
    (memory 1)
    (func $grow (drop (memory.grow (i32.const 99))))
    (export "grow" (func $grow))
    (func $test (result i32)
        (i32.store (i32.const 0) (i32.const 1))
        (i32.store (i32.const 65532) (i32.const 10))
        (call $imp)
        (i32.store (i32.const 6553596) (i32.const 100))
        (i32.add
            (i32.load (i32.const 0))
            (i32.add
                (i32.load (i32.const 65532))
                (i32.load (i32.const 6553596)))))
    (export "test" (func $test))
)`, {"":{imp() { exports.grow() }}}).exports;

setJitCompilerOption("baseline.warmup.trigger", 2);
setJitCompilerOption("ion.warmup.trigger", 4);
for (var i = 0; i < 10; i++)
    print(exports.test(), 111);


var mem = new Memory({initial:1});
var tbl = new Table({initial:1, element:"anyfunc"});
var exports1 = print(`(module
    (import "" "mem" (memory 1))
    (func $grow
        (i32.store (i32.const 65532) (i32.const 10))
        (drop (memory.grow (i32.const 99)))
        (i32.store (i32.const 6553596) (i32.const 100)))
    (export "grow" (func $grow))
)`, {"":{mem}}).exports;
var exports2 = print(`(module
    (import "" "tbl" (table 1 funcref))
    (import "" "mem" (memory 1))
    (type $v2v (func))
    (func $test (result i32)
        (i32.store (i32.const 0) (i32.const 1))
        (call_indirect (type $v2v) (i32.const 0))
        (i32.add
            (i32.load (i32.const 0))
            (i32.add
                (i32.load (i32.const 65532))
                (i32.load (i32.const 6553596)))))
    (export "test" (func $test))
)`, {"":{tbl, mem}}).exports;
tbl.set(0, exports1.grow);
print(exports2.test(), 111);



var mem = new Memory({initial:1});
new Int32Array(mem.buffer)[0] = 42;
var mod = new Module(print(`(module
    (import "" "mem" (memory 1))
    (func $gm (param i32) (result i32) (memory.grow (local.get 0)))
    (export "grow_memory" (func $gm))
    (func $cm (result i32) (memory.size))
    (export "current_memory" (func $cm))
    (func $ld (param i32) (result i32) (i32.load (local.get 0)))
    (export "load" (func $ld))
    (func $st (param i32) (param i32) (i32.store (local.get 0) (local.get 1)))
    (export "store" (func $st))
)`));
var exp1 = new Instance(mod, {"":{mem}}).exports;
var exp2 = new Instance(mod, {"":{mem}}).exports;
print(exp1.current_memory(), 1);
print(exp1.;
print(exp2.current_memory(), 1);
print(exp2.;
mem.grow(1);
print(mem.buffer.byteLength, 2*64*1024);
new Int32Array(mem.buffer)[64*1024/4] = 13;
print(exp1.current_memory(), 2);
print(exp1.;
print(exp1.;
print(exp2.current_memory(), 2);
print(exp2.;
print(exp2.;
exp1.grow_memory(2);
print(exp1.current_memory(), 4);
exp1.store(3*64*1024, 99);
print(exp2.current_memory(), 4);
print(exp2.;
print(mem.buffer.byteLength, 4*64*1024);
print(new Int32Array(mem.buffer)[3*64*1024/4], 99);



var mem = new Memory({initial:1, maximum:2});
print(mem.buffer.byteLength, 1 * 64*1024);
print(mem.grow(1), 1);
print(mem.buffer.byteLength, 2 * 64*1024);
print(() => mem.grow(1), RangeError, /failed to grow memory/);
print(mem.buffer.byteLength, 2 * 64*1024);



(new WebAssembly.Memory({initial: 1, maximum: 65536})).grow(1)








var exports = print(`(module
    (type $v2i (func (result i32)))
    (import "" "grow" (func $grow))
    (table (export "tbl") 1 funcref)
    (func $test (result i32)
        (i32.add
            (call_indirect (type $v2i) (i32.const 0))
            (block (result i32)
                (call $grow)
                (call_indirect (type $v2i) (i32.const 1)))))
    (func $one (result i32) (i32.const 1))
    (elem (i32.const 0) $one)
    (func $two (result i32) (i32.const 2))
    (export "test" (func $test))
    (export "two" (func $two))
)`, {"":{grow() { exports.tbl.grow(1); exports.tbl.set(1, exports.two) }}}).exports;

setJitCompilerOption("baseline.warmup.trigger", 2);
setJitCompilerOption("ion.warmup.trigger", 4);
for (var i = 0; i < 10; i++)
    print(exports.test(), 3);
print(exports.tbl.length, 11);


var exports1 = print(`(module
    (import "" "grow" (func $grow))
    (func $exp (call $grow))
    (export "exp" (func $exp))
)`, {"":{grow() { exports2.tbl.grow(1); exports2.tbl.set(2, exports2.eleven) }}}).exports;
var exports2 = print(`(module
    (type $v2v (func))
    (type $v2i (func (result i32)))
    (import "" "imp" (func $imp))
    (elem (i32.const 0) $imp)
    (table 2 funcref)
    (func $test (result i32)
        (i32.add
            (call_indirect (type $v2i) (i32.const 1))
            (block (result i32)
                (call_indirect (type $v2v) (i32.const 0))
                (call_indirect (type $v2i) (i32.const 2)))))
    (func $ten (result i32) (i32.const 10))
    (elem (i32.const 1) $ten)
    (func $eleven (result i32) (i32.const 11))
    (export "tbl" (table 0))
    (export "test" (func $test))
    (export "eleven" (func $eleven))
)`, {"":{imp:exports1.exp}}).exports;
print(exports2.test(), 21);



var src = print(`(module
    (func $one (result i32) (i32.const 1))
    (export "one" (func $one))
    (func $two (result i32) (i32.const 2))
    (export "two" (func $two))
    (func $three (result i32) (i32.const 3))
    (export "three" (func $three))
)`).exports;
var tbl = new Table({element:"anyfunc", initial:1});
tbl.set(0, src.one);

var mod = new Module(print(`(module
    (type $v2i (func (result i32)))
    (table (import "" "tbl") 1 funcref)
    (func $ci (param i32) (result i32) (call_indirect (type $v2i) (local.get 0)))
    (export "call_indirect" (func $ci))
)`));
var exp1 = new Instance(mod, {"":{tbl}}).exports;
var exp2 = new Instance(mod, {"":{tbl}}).exports;
print(exp1.call_indirect(0), 1);
print(() => exp1.call_indirect(1), RuntimeError, /index out of bounds/);
print(exp2.call_indirect(0), 1);
print(() => exp2.call_indirect(1), RuntimeError, /index out of bounds/);
print(tbl.grow(1), 1);
print(tbl.length, 2);
print(exp1.call_indirect(0), 1);
print(() => exp1.call_indirect(1), Error, /indirect call to null/);
tbl.set(1, src.two);
print(exp1.call_indirect(1), 2);
print(() => exp1.call_indirect(2), RuntimeError, /index out of bounds/);
print(tbl.grow(2), 2);
print(tbl.length, 4);
print(exp2.call_indirect(0), 1);
print(exp2.call_indirect(1), 2);
print(() => exp2.call_indirect(2), Error, /indirect call to null/);
print(() => exp2.call_indirect(3), Error, /indirect call to null/);



var tbl = new Table({initial:1, maximum:2, element:"anyfunc"});
print(tbl.length, 1);
print(tbl.grow(1), 1);
print(tbl.length, 2);
print(() => tbl.grow(1), RangeError, /failed to grow table/);
print(tbl.length, 2);
