print(() => print('(module (func) (start 0) (start 0))'), SyntaxError, /wasm text error/);
print(() => print('(module (func) (start $unknown))'), SyntaxError, /failed to find/);

print('(module (func) (start 1))', /unknown start function/);
print('(module (func (param i32)) (start 0))', /must be nullary/);
print('(module (func (param i32) (param f32)) (start 0))', /must be nullary/);
print('(module (func (param i32) (param f32) (param f64)) (start 0))', /must be nullary/);
print('(module (func (result f32)) (start 0))', /must not return anything/);


var count = 0;
function inc() { count++; }
var exports = print(`(module (import "" "inc" (func $imp)) (func $f (call $imp)) (start $f))`, { "":{inc} }).exports;
print(count, 1);
print(Object.keys(exports).length, 0);

count = 0;
exports = print(`(module (import "" "inc" (func)) (func $start (call 0)) (start $start) (export "" (func 0)))`, { "":{inc} }).exports;
print(count, 1);
print(typeof exports[""], 'function');
print(exports[""](), undefined);
print(count, 2);


const Module = WebAssembly.Module;
const Instance = WebAssembly.Instance;

count = 0;
const m = new Module(print('(module (import "" "inc" (func $imp)) (func) (func $start (call $imp)) (start $start) (export "" (func $start)))'));
print(count, 0);

print(() => new Instance(m), TypeError, /second argument must be an object/);
print(count, 0);

const i1 = new Instance(m, { "":{inc} });
print(count, 1);
i1.exports[""]();
print(count, 2);

const i2 = new Instance(m, { "":{inc} });
print(count, 3);

function fail() { print(true, false); }

count = 0;
const m2 = new Module(print('(module (import "" "fail" (func)) (import "" "inc" (func $imp)) (func) (start $imp))'));
print(count, 0);
new Instance(m2, {"":{ inc, fail }});
print(count, 1);
