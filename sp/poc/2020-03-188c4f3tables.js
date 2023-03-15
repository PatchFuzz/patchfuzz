const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Table = WebAssembly.Table;
const Memory = WebAssembly.Memory;
const LinkError = WebAssembly.LinkError;
const RuntimeError = WebAssembly.RuntimeError;

const badFuncRefError = /can only pass WebAssembly exported functions to funcref/;

function print(f) {
    print(f, RuntimeError, /out of bounds/);
}

var callee = i => `(func $f${i} (result i32) (i32.const ${i}))`;

print(`(module (elem (i32.const 0) $f0) ${callee(0)})`, /elem segment requires a table/);
print(`(module (table 10 funcref) (elem (i32.const 0) 0))`, /table element out of range/);
print(`(module (table 10 funcref) (func) (elem (i32.const 0) 0 1))`, /table element out of range/);
print(`(module (table 10 funcref) (func) (elem (f32.const 0) 0) ${callee(0)})`, /type mismatch/);

print(() => print(`(module (table 10 funcref) (elem (i32.const 10) $f0) ${callee(0)})`));
print(() => print(`(module (table 10 funcref) (elem (i32.const 8) $f0 $f0 $f0) ${callee(0)})`));
print(() => print(`(module (table 0 funcref) (func) (elem (i32.const 0x10001)))`));

print(() => print(`(module (import "globals" "a" (global i32)) (table 10 funcref) (elem (global.get 0) $f0) ${callee(0)})`, {globals:{a:10}}));
print(() => print(`(module (import "globals" "a" (global i32)) (table 10 funcref) (elem (global.get 0) $f0 $f0 $f0) ${callee(0)})`, {globals:{a:8}}));

print(new Module(print(`(module (table 10 funcref) (elem (i32.const 1) $f0 $f0) (elem (i32.const 0) $f0) ${callee(0)})`)) instanceof Module, true);
print(new Module(print(`(module (table 10 funcref) (elem (i32.const 1) $f0 $f0) (elem (i32.const 2) $f0) ${callee(0)})`)) instanceof Module, true);
print(`(module (import "globals" "a" (global i32)) (table 10 funcref) (elem (i32.const 1) $f0 $f0) (elem (global.get 0) $f0) ${callee(0)})`, {globals:{a:0}});
print(`(module (import "globals" "a" (global i32)) (table 10 funcref) (elem (global.get 0) $f0 $f0) (elem (i32.const 2) $f0) ${callee(0)})`, {globals:{a:1}});


print(new Module(print(`(module
                                        (table 10 funcref)
                                        (table 10 funcref)
                                        (elem 1 (i32.const 1) func $f0 $f0)
                                        ${callee(0)})`)) instanceof Module, true);
print(new Module(print(`(module
                                        (table 10 funcref)
                                        (table 10 funcref)
                                        (elem (table 1) (i32.const 1) func $f0 $f0)
                                        ${callee(0)})`)) instanceof Module, true);


print(new Module(print(`(module
                                        (table 10 funcref)
                                        (table 10 funcref)
                                        (elem (table 1) (i32.const 1) funcref (ref.func $f0) (ref.func $f0))
                                        ${callee(0)})`)) instanceof Module, true);


print(new Module(print(`(module
                                        (table 10 funcref)
                                        (table 10 funcref)
                                        (elem 1 (offset (i32.const 1)) func $f0 $f0)
                                        ${callee(0)})`)) instanceof Module, true);

var m = new Module(print(`
    (module
        (import "globals" "table" (table 10 funcref))
        (import "globals" "a" (global i32))
        (elem (global.get 0) $f0 $f0)
        ${callee(0)})
`));
var tbl = new Table({initial:50, element:"anyfunc"});
print(new Instance(m, {globals:{a:20, table:tbl}}) instanceof Instance, true);
print(() => new Instance(m, {globals:{a:50, table:tbl}}));

var caller = `(type $v2i (func (result i32))) (func $call (param $i i32) (result i32) (call_indirect (type $v2i) (local.get $i))) (export "call" (func $call))`
var callee = i => `(func $f${i} (type $v2i) (i32.const ${i}))`;

var call = print(`(module (table 10 funcref) ${callee(0)} ${caller})`).exports.call;
print(() => call(0), RuntimeError, /indirect call to null/);
print(() => call(10), RuntimeError, /index out of bounds/);

var call = print(`(module (table 10 funcref) (elem (i32.const 0)) ${callee(0)} ${caller})`).exports.call;
print(() => call(0), RuntimeError, /indirect call to null/);
print(() => call(10), RuntimeError, /index out of bounds/);

var call = print(`(module (table 10 funcref) (elem (i32.const 0) $f0) ${callee(0)} ${caller})`).exports.call;
print(call(0), 0);
print(() => call(1), RuntimeError, /indirect call to null/);
print(() => call(2), RuntimeError, /indirect call to null/);
print(() => call(10), RuntimeError, /index out of bounds/);

var call = print(`(module (table 10 funcref) (elem (i32.const 1) $f0 $f1) (elem (i32.const 4) $f0 $f2) ${callee(0)} ${callee(1)} ${callee(2)} ${caller})`).exports.call;
print(() => call(0), RuntimeError, /indirect call to null/);
print(call(1), 0);
print(call(2), 1);
print(() => call(3), RuntimeError, /indirect call to null/);
print(call(4), 0);
print(call(5), 2);
print(() => call(6), RuntimeError, /indirect call to null/);
print(() => call(10), RuntimeError, /index out of bounds/);

var imports = {a:{b:()=>42}};
var call = print(`(module (import "a" "b" (func $f1)) (import "a" "b" (func $f2 (result i32))) (table 10 funcref) (elem (i32.const 0) $f0 $f1 $f2) ${callee(0)} ${caller})`, imports).exports.call;
print(call(0), 0);
print(() => call(1), RuntimeError, /indirect call signature mismatch/);
print(call(2), 42);

var tbl = new Table({initial:3, element:"anyfunc"});
var call = print(`(module (import "a" "b" (table 3 funcref)) (export "tbl" (table 0)) (elem (i32.const 0) $f0 $f1) ${callee(0)} ${callee(1)} ${caller})`, {a:{b:tbl}}).exports.call;
print(call(0), 0);
print(call(1), 1);
print(tbl.get(0)(), 0);
print(tbl.get(1)(), 1);
print(() => call(2), RuntimeError, /indirect call to null/);
print(tbl.get(2), null);

var exp = print(`(module (import "a" "b" (table 3 funcref)) (export "tbl" (table 0)) (elem (i32.const 2) $f2) ${callee(2)} ${caller})`, {a:{b:tbl}}).exports;
print(exp.tbl, tbl);
print(exp.call(0), 0);
print(exp.call(1), 1);
print(exp.call(2), 2);
print(call(0), 0);
print(call(1), 1);
print(call(2), 2);
print(tbl.get(0)(), 0);
print(tbl.get(1)(), 1);
print(tbl.get(2)(), 2);

var exp1 = print(`(module (table 10 funcref) (export "tbl" (table 0)) (elem (i32.const 0) $f0 $f0) ${callee(0)} (export "f0" (func $f0)) ${caller})`).exports
print(exp1.tbl.get(0), exp1.f0);
print(exp1.tbl.get(1), exp1.f0);
print(exp1.tbl.get(2), null);
print(exp1.call(0), 0);
print(exp1.call(1), 0);
print(() => exp1.call(2), RuntimeError, /indirect call to null/);
var exp2 = print(`(module (import "a" "b" (table 10 funcref)) (export "tbl" (table 0)) (elem (i32.const 1) $f1 $f1) ${callee(1)} (export "f1" (func $f1)) ${caller})`, {a:{b:exp1.tbl}}).exports
print(exp1.tbl, exp2.tbl);
print(exp2.tbl.get(0), exp1.f0);
print(exp2.tbl.get(1), exp2.f1);
print(exp2.tbl.get(2), exp2.f1);
print(exp1.call(0), 0);
print(exp1.call(1), 1);
print(exp1.call(2), 1);
print(exp2.call(0), 0);
print(exp2.call(1), 1);
print(exp2.call(2), 1);

var tbl = new Table({initial:3, element:"anyfunc"});
var e1 = print(`(module (func $f (result i32) (i32.const 42)) (export "f" (func $f)))`).exports;
var e2 = print(`(module (func $g (result f32) (f32.const 10)) (export "g" (func $g)))`).exports;
var e3 = print(`(module (func $h (result i32) (i32.const 13)) (export "h" (func $h)))`).exports;
tbl.set(0, e1.f);
tbl.set(1, e2.g);
tbl.set(2, e3.h);
var e4 = print(`(module (import "a" "b" (table 3 funcref)) ${caller})`, {a:{b:tbl}}).exports;
print(e4.call(0), 42);
print(() => e4.call(1), RuntimeError, /indirect call signature mismatch/);
print(e4.call(2), 13);

var asmjsFun = (function() { "use asm"; function f() {} return f })();
print(isAsmJSFunction(asmjsFun), isAsmJSCompilationAvailable());
print(() => tbl.set(0, asmjsFun), TypeError, badFuncRefError);
print(() => tbl.grow(1, asmjsFun), TypeError, badFuncRefError);

var m = new Module(print(`(module
    (type $i2i (func (param i32) (result i32)))
    (import "a" "mem" (memory 1))
    (import "a" "tbl" (table 10 funcref))
    (import "a" "imp" (func $imp (result i32)))
    (func $call (param $i i32) (result i32)
        (i32.add
            (call $imp)
            (i32.add
                (i32.load (i32.const 0))
                (if (result i32) (i32.eqz (local.get $i))
                    (then (i32.const 0))
                    (else
                        (local.set $i (i32.sub (local.get $i) (i32.const 1)))
                        (call_indirect (type $i2i) (local.get $i) (local.get $i)))))))
    (export "call" (func $call))
)`));
var failTime = false;
var tbl = new Table({initial:10, element:"anyfunc"});
var mem1 = new Memory({initial:1});
var e1 = new Instance(m, {a:{mem:mem1, tbl, imp() {if (failTime) throw new Error("ohai"); return 1}}}).exports;
tbl.set(0, e1.call);
var mem2 = new Memory({initial:1});
var e2 = new Instance(m, {a:{mem:mem2, tbl, imp() {return 10} }}).exports;
tbl.set(1, e2.call);
var mem3 = new Memory({initial:1});
var e3 = new Instance(m, {a:{mem:mem3, tbl, imp() {return 100} }}).exports;
new Int32Array(mem1.buffer)[0] = 1000;
new Int32Array(mem2.buffer)[0] = 10000;
new Int32Array(mem3.buffer)[0] = 100000;
print(e3.call(2), 111111);
failTime = true;
print(() => e3.call(2), Error, "ohai");



var call = print(`(module
    (type $v2i1 (func (result i32)))
    (type $v2i2 (func (result i32)))
    (type $i2v (func (param i32)))
    (table funcref (elem $a $b $c))
    (func $a (type $v2i1) (i32.const 0))
    (func $b (type $v2i2) (i32.const 1))
    (func $c (type $i2v))
    (func $call (param i32) (result i32) (call_indirect (type $v2i1) (local.get 0)))
    (export "call" (func $call))
)`).exports.call;
print(call(0), 0);
print(call(1), 1);
print(() => call(2), RuntimeError, /indirect call signature mismatch/);

var call = print(`(module
    (type $A (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $B (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $C (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $D (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $E (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $F (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (type $G (func (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (param i32) (result i32)))
    (table funcref (elem $a $b $c $d $e $f $g))
    (func $a (type $A) (local.get 7))
    (func $b (type $B) (local.get 8))
    (func $c (type $C) (local.get 9))
    (func $d (type $D) (local.get 10))
    (func $e (type $E) (local.get 11))
    (func $f (type $F) (local.get 12))
    (func $g (type $G) (local.get 13))
    (func $call (param i32) (result i32)
        (call_indirect (type $A) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 42) (local.get 0)))
    (export "call" (func $call))
)`).exports.call;
print(call(0), 42);
for (var i = 1; i < 7; i++)
    print(() => call(i), RuntimeError, /indirect call signature mismatch/);
print(() => call(7), RuntimeError, /index out of bounds/);


var tbl = print(`(module (table (export "tbl") funcref (elem $f)) (func $f))`).exports.tbl;
tbl.get(0).foo = 42;
gc();
print(tbl.get(0).foo, 42);

(function testCrossRealmCall() {
    var g = newGlobal({sameCompartmentAs: this});

    
    
    var src = `
        (module
            (import "a" "t" (table 3 funcref))
            (import "a" "m" (memory 1))
            (func $f (result i32) (i32.add (i32.const 3) (memory.size)))
            (elem (i32.const 0) $f))
    `;
    g.mem = new Memory({initial:4});
    g.tbl = new Table({initial:3, element:"anyfunc"});
    var i1 = g.evaluate("new WebAssembly.Instance(new WebAssembly.Module(print(`" + src + "`)), {a:{t:tbl,m:mem}})");

    var call = new Instance(new Module(print(`
        (module
            (import "a" "t" (table 3 funcref))
            (import "a" "m" (memory 1))
            (type $v2i (func (result i32)))
            (func $call (param $i i32) (result i32) (i32.add (call_indirect (type $v2i) (local.get $i)) (memory.size)))
            (export "call" (func $call)))
    `)), {a:{t:g.tbl,m:g.mem}}).exports.call;

    for (var i = 0; i < 10; i++)
        print(call(0), 11);
})();




{
    function makeIt(flag, tblindex) {
        return new Uint8Array([0x00, 0x61, 0x73, 0x6d,
                               0x01, 0x00, 0x00, 0x00,
                               0x04,                   
                               0x04,                   
                               0x01,                   
                               0x70,                   
                               0x00,                   
                               0x01,                   
                               0x09,                   
                               0x08,                   
                               0x01,                   
                               flag,                   
                               tblindex,               
                               0x41,                   
                               0x00,                   
                               0x0b,                   
                               0x00,                   
                               0x00]);                 
    }

    
    new WebAssembly.Module(makeIt(0x02, 0x00));

    
    print(() => new WebAssembly.Module(makeIt(0x08, 0x00)),
                       WebAssembly.CompileError,
                       /invalid elem segment flags field/);

    
    print(() => new WebAssembly.Module(makeIt(0x02, 0x01)),
                       WebAssembly.CompileError,
                       /table index out of range/);
}
