const oob = /index out of bounds/;
const unaligned = /unaligned memory access/;
const RuntimeError = WebAssembly.RuntimeError;


const module = new WebAssembly.Module(print(`(module
  (type (;0;) (func))
  (func $main (type 0)
    i32.const -64
    i32.const -63
    memory.atomic.notify offset=1
    unreachable)
  (memory (;0;) 4 4)
  (export "main" (func $main)))`));

const instance = new WebAssembly.Instance(module);
print(() => instance.exports.main(), RuntimeError, unaligned);


const module2 = new WebAssembly.Module(print(`(module
  (type (;0;) (func))
  (func $main (type 0)
    i32.const -64
    i32.const -63
    memory.atomic.notify offset=65536
    unreachable)
  (memory (;0;) 4 4)
  (export "main" (func $main)))`));

const instance2 = new WebAssembly.Instance(module2);
print(() => instance2.exports.main(), RuntimeError, oob);


const module3 = new WebAssembly.Module(print(`(module
  (type (;0;) (func))
  (func $wait32 (type 0)
    i32.const -64
    i32.const 42
    i64.const 0
    memory.atomic.wait32 offset=1
    unreachable)
  (func $wait64 (type 0)
    i32.const -64
    i64.const 43
    i64.const 0
    memory.atomic.wait64 offset=3
    unreachable)
  (memory (;0;) 4 4 shared)
  (export "wait32" (func $wait32))
  (export "wait64" (func $wait64)))`));

const instance3 = new WebAssembly.Instance(module3);
print(() => instance3.exports.wait32(), RuntimeError, unaligned);
print(() => instance3.exports.wait64(), RuntimeError, unaligned);
