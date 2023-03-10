



const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;
const Table = WebAssembly.Table;
const RuntimeError = WebAssembly.RuntimeError;

var caller = `(type $v2i (func (result i32))) (func $call (param $i i32) (result i32) (call_indirect (type $v2i) (local.get $i))) (export "call" (func $call))`
var callee = i => `(func $f${i} (type $v2i) (i32.const ${i}))`;





resetFinalizeCount();
var i = print(`(module (table 2 funcref) (export "tbl" (table 0)) (elem (i32.const 0) $f0) ${callee(0)} ${caller})`);
var e = i.exports;
var t = e.tbl;
var f = t.get(0);
print(f(), e.call(0));
print(() => e.call(1), RuntimeError, /indirect call to null/);
print(() => e.call(2), RuntimeError, /index out of bounds/);
print(finalizeCount(), 0);
i.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
f.edge = makeFinalizeObserver();
gc();
print(finalizeCount(), 0);
f.x = 42;
f = null;
gc();
print(finalizeCount(), 0);
f = t.get(0);
print(f.x, 42);
gc();
print(finalizeCount(), 0);
i.exports = null;
e = null;
gc();
print(finalizeCount(), 0);
t = null;
gc();
print(finalizeCount(), 0);
i = null;
gc();
print(finalizeCount(), 0);
print(f(), 0);
f = null;
gc();
print(finalizeCount(), 3);


resetFinalizeCount();
var i = print(`(module (table 1 funcref) (export "tbl" (table 0)) (elem (i32.const 0) $f0) ${callee(0)} ${caller})`);
var e = i.exports;
var t = e.tbl;
var f = t.get(0);
i.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
f.edge = makeFinalizeObserver();
gc();
print(finalizeCount(), 0);
i.exports = null;
e = null;
gc();
print(finalizeCount(), 0);
f = null;
gc();
print(finalizeCount(), 0);
i = null;
gc();
print(finalizeCount(), 0);
t = null;
gc();
print(finalizeCount(), 3);


resetFinalizeCount();
var i = print(`(module (table 2 funcref) (export "tbl" (table 0)) ${caller})`);
var e = i.exports;
var t = e.tbl;
i.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
gc();
print(finalizeCount(), 0);
i.exports = null;
e = null;
gc();
print(finalizeCount(), 0);
i = null;
gc();
print(finalizeCount(), 1);
t = null;
gc();
print(finalizeCount(), 2);


resetFinalizeCount();
var i = print(`(module (func $f0 (result i32) (i32.const 0)) (export "f0" (func $f0)))`);
var t = new Table({initial:4, element:"anyfunc"});
i.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
gc();
print(finalizeCount(), 0);
i = null;
gc();
print(finalizeCount(), 1);
t = null;
gc();
print(finalizeCount(), 2);



resetFinalizeCount();
var i = print(`(module (func $f (result i32) (i32.const 42)) (export "f" (func $f)))`);
var f = i.exports.f;
var t = new Table({initial:1, element:"anyfunc"});
i.edge = makeFinalizeObserver();
f.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
t.set(0, f);
print(t.get(0), f);
print(t.get(0)(), 42);
gc();
print(finalizeCount(), 0);
f = null;
i.exports = null;
gc();
print(finalizeCount(), 0);
print(t.get(0)(), 42);
i = null;
gc();
print(finalizeCount(), 0);
t.set(0, null);
print(t.get(0), null);
gc();
print(finalizeCount(), 2);
t = null;
gc();
print(finalizeCount(), 3);



resetFinalizeCount();
var i1 = print(`(module (func $f1 (result i32) (i32.const 13)) (export "f1" (func $f1)))`);
var i2 = print(`(module (func $f2 (result i32) (i32.const 42)) (export "f2" (func $f2)))`);
var f1 = i1.exports.f1;
var f2 = i2.exports.f2;
var t = new Table({initial:2, element:"anyfunc"});
i1.edge = makeFinalizeObserver();
i2.edge = makeFinalizeObserver();
f1.edge = makeFinalizeObserver();
f2.edge = makeFinalizeObserver();
t.edge = makeFinalizeObserver();
t.set(0, f1);
t.set(1, f2);
gc();
print(finalizeCount(), 0);
f1 = f2 = null;
i1.exports = null;
i2.exports = null;
gc();
print(finalizeCount(), 0);
i1 = null;
i2 = null;
gc();
print(finalizeCount(), 0);
t.set(0, t.get(1));
gc();
print(finalizeCount(), 2);
t.set(0, null);
t.set(1, null);
gc();
print(finalizeCount(), 4);
t = null;
gc();
print(finalizeCount(), 5);



resetFinalizeCount();
const N = 10;
var tbl = new Table({initial:N, element:"anyfunc"});
tbl.edge = makeFinalizeObserver();
function runTest() {
    tbl = null;
    gc();
    print(finalizeCount(), 0);
    return 100;
}
var i = print(
    `(module
        (import "a" "b" (func $imp (result i32)))
        (func $f (param i32) (result i32) (call $imp))
        (export "f" (func $f))
    )`,
    {a:{b:runTest}}
);
i.edge = makeFinalizeObserver();
tbl.set(0, i.exports.f);
var m = new Module(print(`(module
    (import "a" "b" (table ${N} funcref))
    (type $i2i (func (param i32) (result i32)))
    (func $f (param $i i32) (result i32)
        (local.set $i (i32.sub (local.get $i) (i32.const 1)))
        (i32.add
            (i32.const 1)
            (call_indirect (type $i2i) (local.get $i) (local.get $i))))
    (export "f" (func $f))
)`));
for (var i = 1; i < N; i++) {
    var inst = new Instance(m, {a:{b:tbl}});
    inst.edge = makeFinalizeObserver();
    tbl.set(i, inst.exports.f);
}
inst = null;
print(tbl.get(N - 1)(N - 1), 109);
gc();
print(finalizeCount(), N + 1);
